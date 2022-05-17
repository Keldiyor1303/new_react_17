import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosInstance } from '../../config';
import { AuthContext } from '../../context/AuthContext';
import './navbar.css';

export default function Navbar() {
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const history = useHistory();
    const [orgName, setOrgName] = useState("");
    const [openModalData, setOpenModalData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [openSize, setOpenSize] = useState(0);

    const openModalMessage = () => {
        setOpenModal(true);
        if (JSON.parse(jwtDecode(currentUser)?.supperAdmin).userRoles[0]?.systemName === "base_admin") {
            axiosInstance.get("organization/message", {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    setOpenModalData(res.data);
                })
                .catch(err => {
                    console.log(err.response);
                })
        }
    }

    const removeToken = async () => {
        const token = jwtDecode(currentUser);
        let role = JSON.parse(token?.supperAdmin).userRoles[0]?.systemName;
        let access_token = token.access_token;
        if (role !== "base_admin") {
            axios.post(`https://sso.egov.uz/sso/oauth/Authorization.do/?grant_type=one_log_out&client_id=new_d-doc_uz&client_secret=CPi8Y3SatfyeGwpT5AL7bc9q&access_token=${access_token}&scope=new_d-doc_uz`)
                .then(res => {
                    // console.log(res.data);
                })
                .catch(err => {
                    console.log(err.response);
                })
            dispatch({ type: 'EXIT' });
            localStorage.removeItem("ids");
            history.push("/");
        } else {
            dispatch({ type: 'EXIT' });
            history.push("/login");
        }
    }


    useEffect(() => {
        const token = jwtDecode(currentUser);
        let decode = JSON.parse(token?.supperAdmin);

        if (JSON.parse(localStorage.getItem('ids'))) {
            axiosInstance.get("organization/getOrgNameByWorkPlaceId/" + JSON.parse(localStorage.getItem('ids')), {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    setOrgName(res.data);
                })
                .catch(err => {
                    console.log(err.response);
                })
        } else {
            let role = JSON.parse(token?.supperAdmin).userRoles[0]?.systemName;
            if (role === "admin") {
                axiosInstance.get("user/myOrg/" + decode.id, {
                    headers: {
                        Authorization: 'Bearer ' + currentUser
                    }
                })
                    .then(res => {
                        setOrgName(res.data?.orgName);
                    })
                    .catch(err => {
                        console.log(err.response);
                    })
            }
        }
    }, [currentUser]);

    useEffect(() => {
        setOpenModal(false)
        if (JSON.parse(jwtDecode(currentUser)?.supperAdmin)?.userRoles[0]?.systemName === "base_admin") {
            axiosInstance.get("organization/message", {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    setOpenSize(res.data.length)
                })
                .catch(err => {
                    console.log(err.response);
                })
        }
    }, [currentUser])

    const restOpenPageInfo = (data) => {
        history.push(`/super_base_admin_tashkilot-qushish/${data.stir}`)
    }


    const ishStoliKirish = (dat) => {
        if (dat?.userRoles?.length > 0) {
            localStorage.setItem("ids", JSON.stringify(dat.id))
            history.push("/sahifa/asosiy");
        }
    }

    const UserRolesKirish = (dat) => {
        if (dat?.systemName === "admin") {
            history.push("/super_admin_elektron-kitob");
            localStorage.removeItem('ids');
        }
    }

    return (
        <div className="navbar navbar-expand-lg navbar-white bg-white navbar-static shadow bg-body rounded"
            style={{ backgroundColor: "#fff" }}>
            <div className={'d-flex'} style={{ width: '297px' }}>
                <div className="d-flex " style={{ width: '30%' }}>
                    <button className="navbar-toggler sidebar-mobile-main-toggle" type="button">
                        <i className="icon-paragraph-justify3" />
                    </button>
                </div>
                <div className="navbar-brand text-center d-flex justify-content-between align-items-center" style={{ borderRight: "4px solid trasparent", width: '70%' }}>
                    <img src="/style/images/d-doc.png" style={{ width: "150px", height: "auto" }} alt="" />
                    <div style={{ width: "3px", height: "95%", backgroundColor: "lightgray" }}></div>
                </div>
            </div>
            {JSON.parse(jwtDecode(currentUser)?.supperAdmin)?.userRoles[0]?.systemName !== "base_admin" && (
                <div className="row d-flex ml-3" style={{ width: "600px" }}>
                    <div className="col-lg-2  ">
                        <img src="/style/images/gerb.svg" className="gerb" style={{ width: "70px", height: "70px" }} alt="" />
                    </div>
                    <div className="col-lg-10 d-flex justify-content-start align-items-center  pl-0">
                        <div className=" d-flex justify-content-evenly align-items-center pl-0 nav-text">
                            <h6 className="text-wrap d-xs-none ">
                                {JSON.parse(jwtDecode(currentUser)?.supperAdmin)?.userRoles[0]?.systemName === "admin" ? (
                                    <span>{orgName}</span>
                                ) : (
                                    <span> {orgName}</span>
                                )}
                            </h6>
                        </div>
                    </div>
                </div>
            )}


            <div className="d-flex justify-content-end align-items-center flex-1 flex-lg-6 order-1 order-lg-2">
                <ul className="navbar-nav flex-row d-flex align-items-center">

                    {/* ish stoli va admin ni tanlash uchun */}
                    {JSON.parse(jwtDecode(currentUser)?.supperAdmin)?.userRoles[0]?.systemName !== "base_admin" && (
                        <div className="btn-group position-static">
                            <button type="button" className="btn btn-primary dropdown-toggle dropBtn" data-toggle="dropdown" aria-expanded="false">
                                <i className="icon-cog5 mr-2" />
                                {JSON.parse(localStorage.getItem('ids')) ? (
                                    <>
                                        Ish Stoli#{JSON.parse(localStorage.getItem('ids'))}
                                    </>
                                ) : (
                                    <>
                                        {JSON.parse(jwtDecode(currentUser)?.supperAdmin)?.userRoles?.length > 0 && JSON.parse(jwtDecode(currentUser)?.supperAdmin)?.userRoles?.map((d) => (
                                            <>
                                                {d.systemName === "admin" && (
                                                    <>
                                                        {d?.systemName}

                                                    </>
                                                )}
                                            </>
                                        ))}
                                    </>
                                )}
                            </button>

                            <div className="dropdown-menu dropdown-menu-right" style={{ marginRight: "50px", top: "56px", padding: 0 }}>
                                {/* ish stoli uchun */}
                                {JSON.parse(jwtDecode(currentUser)?.workPlaces)?.length > 0 && JSON.parse(jwtDecode(currentUser)?.workPlaces)?.map((dat, index) => (
                                    <span
                                        // href="#"
                                        className="dropdown-item text-light text-dark"
                                        onClick={() => ishStoliKirish(dat)}
                                        style={{ fontSize: "14px", textTransform: "upperCase" }}
                                    >
                                        Ish Stoli#{dat?.id}
                                    </span>
                                ))}
                                {/* admin uchun */}
                                {JSON.parse(jwtDecode(currentUser)?.supperAdmin)?.userRoles?.length > 0 && JSON.parse(jwtDecode(currentUser)?.supperAdmin)?.userRoles?.map((dat, index) => (
                                    <span
                                        // href="#"
                                        onClick={() => UserRolesKirish(dat)}
                                        className="dropdown-item text-light text-dark"
                                    >
                                        {dat?.systemName}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}


                    <li className="nav-item">
                        {
                            JSON.parse(jwtDecode(currentUser)?.supperAdmin)?.userRoles[0]?.systemName && (
                                <span onClick={() => openModalMessage()} className="navbar-nav-link text-dark pr-1 "
                                    style={{ fontWeight: "bold" }}>
                                    <i className="icon-bell2" />
                                    {
                                        openSize > 0 ?
                                            <span className="badge badge-danger badge-pill">{openSize}</span> : ''
                                    }
                                </span>)
                        }

                        {!JSON.parse(jwtDecode(currentUser)?.supperAdmin)?.userRoles[0]?.systemName && (
                            <span className="navbar-nav-link text-dark pr-1 "
                                style={{ fontWeight: "bold" }}>
                                <i className="icon-bell2" />
                            </span>
                        )}

                        {(openModalData?.length > 0 && JSON.parse(jwtDecode(currentUser)?.supperAdmin)?.userRoles[0]?.systemName && openModal) && (
                            <div id="modal_large_bell" className="adminWindow pt-5" tabIndex="-1">
                                <div className="modal-dialog modal-lg width-900px">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Qo'shilishi kerak bo'lgan ...</h5>
                                            <button type="button" className="close" data-dismiss="modal"
                                                onClick={() => setOpenModal(false)}>&times;</button>
                                        </div>

                                        <div className="modal-body">
                                            <table
                                                className="table table-bordered table-striped table-hover table-responsive">
                                                <tbody className='border-0'>
                                                    {openModalData.map((items, index) => {
                                                        return (
                                                            <tr key={index} onClick={() => restOpenPageInfo(items)}>
                                                                <th className="TableLink" style={{ width: "80%" }}>
                                                                    {items.orgName}
                                                                </th>
                                                                <th className="TableLink"
                                                                    style={{
                                                                        width: "8%",
                                                                        textAlign: "center",
                                                                        fontSize: "15px"
                                                                    }}>
                                                                    {items.messageTime}
                                                                </th>
                                                                <th className="TableLink"
                                                                    style={{
                                                                        width: "12%",
                                                                        textAlign: "center",
                                                                        fontSize: "15px"
                                                                    }}>
                                                                    {items.stir}
                                                                </th>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-link" data-dismiss="modal"
                                                onClick={() => setOpenModal(false)}>Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                    <li className="nav-item ml-2">
                        <span className="navbar-nav-link navbar-nav-link-toggler text-dark d-flex align-items-center pl-0" style={{ fontWeight: "bold" }} onClick={removeToken}>
                            <span className='chiqishNavbar'>Chiqish</span>
                            <i className="icon-switch2" style={{ marginLeft: "5px" }} />
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}