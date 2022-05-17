import jwtDecode from 'jwt-decode';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import './baseAdminSidebar.css';
import { axiosInstance, url } from '../../../config';

export default function BaseAdminNavbar() {
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const [updateModal, setUpdateModal] = useState(false);
    const [userData, setUserData] = useState({});
    const [alert, setAlert] = useState({ open: false, text: "", color: "" });
    const [file, setFile] = useState(null);
    const fileType = (file?.type === "image/png" || file?.type === "image/jpg" || file?.type === "image/jpeg");

    useEffect(() => {
        if (currentUser) {
            const userData1 = JSON.parse(jwtDecode(currentUser)?.supperAdmin);
            // console.log(userData1);
            setUserData(userData1);
        }
    }, []);

    const saveUser = async (e) => {
        e.preventDefault();

        // to do server
        let fio = document.querySelector('.fio').value;
        let telefon = document.querySelector('.telefon').value;
        let email = document.querySelector('.email').value;

        if (fileType) {
            const formData = new FormData();
            formData.append("file", file);

            // faylni o'zini yuborish
            axiosInstance.post("document/saveDuplicateFile", formData, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    console.log(res.data);
                    // localStorage.setItem("fdi", JSON.stringify(res.data));
                   axiosInstance.patch("organization/superAdmin/editProfile", {
                        id: userData.id,
                        mobileNumber: telefon || null,
                        email: email,
                        fileId: res.data
                    }, {
                        headers: {
                            Authorization: "Bearer " + currentUser
                        }
                    })
                        .then(res => {
                          dispatch({type: 'UPLOADED', payload: res.data});
                            setUserData(JSON.parse(jwtDecode(res.data)?.supperAdmin));
                            setAlert({ open: true, color: "success", text: "Ma'lumotingiz muvaffaqiyatli o'zgartirildi" });
                            setTimeout(() => {
                                setAlert({ open: false, color: "", text: "" });
                            }, 1500);
                            setUpdateModal(false);
                        })
                        .catch(err => {
                            console.log(err);
                            setAlert({ open: true, color: "warning", text: err.response.data });
                            setTimeout(() => {
                                setAlert({ open: false, color: "", text: "" });
                            }, 1500);
                        })
                })
                .catch(err => {
                    console.log(err.response);
                    setAlert({ open: true, color: "warning", text: err.response.data });
                    setTimeout(() => {
                        setAlert({ open: false, color: "", text: "" });
                    }, 1500);
                })

        } else {
            axiosInstance.patch("organization/superAdmin/editProfile", {
                fio: fio,
                telefon: telefon,
                email: email
            }, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    // console.log(res.data);
                    dispatch({type: 'UPLOADED', payload: res.data});
                    setUserData(res.data);
                    setAlert({ open: true, color: "success", text: "Ma'lumotingiz muvaffaqiyatli o'zgartirildi" });
                    setTimeout(() => {
                        setAlert({ open: false, color: "", text: "" });
                    }, 1500);
                    setUpdateModal(false);
                })
                .catch(err => {
                    console.log(err.response);
                    setAlert({ open: true, color: "warning", text: err.response.data });
                    setTimeout(() => {
                        setAlert({ open: false, color: "", text: "" });
                    }, 1500);
                })
        }
    }

    return (
        <>
            <div className="sidebar sidebar-light sidebar-main sidebar-expand-lg sidebar-main-resized">
                <div className="sidebar-content">
                    <div className="sidebar-section">
                        <div className="sidebar-user-material">
                            <div className="sidebar-section-body">
                                <div className="d-flex" >
                                    <div className="flex-1"></div>
                                    <a
                                        href="#1"
                                        className="flex-1 text-center"
                                        style={{ height: "100px !important" }}>
                                        <img
                                            src={userData?.avatar ? `${url}/api/file/view/${userData?.avatar?.generatedName}` : "/assets/user.png"}
                                            className="img-fluid rounded-circle shadow-sm overflow-hidden"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                aspectRatio: '3 / 3',
                                                flex: 'none'
                                            }}
                                            alt="Your avatar"
                                        />
                                    </a>
                                    <div className="flex-1 text-right">
                                        <button type="button"
                                            className="btn btn-outline-light border-transparent btn-icon rounded-pill btn-sm sidebar-control sidebar-main-resize d-none d-lg-inline-flex">
                                            <i className="icon-transmission" />
                                        </button>

                                        <button type="button"
                                            className="btn btn-outline-light border-transparent btn-icon rounded-pill btn-sm sidebar-mobile-main-toggle d-lg-none">
                                            <i className="icon-cross2" />
                                        </button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <h6 className="mb-0 text-white text-shadow-dark mt-3">{userData?.fullName}</h6>
                                </div>
                            </div>

                            {/*<div className="sidebar-user-material-footer">*/}
                            {/*    <a href="#user-nav"*/}
                            {/*        className="d-flex justify-content-between align-items-center text-shadow-dark dropdown-toggle"*/}
                            {/*        data-toggle="collapse"><span> Sozlamalar</span>*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                        </div>

                        <div className="collapse border-bottom" id="user-nav">
                            <ul className="nav nav-sidebar">
                                {/*<li className="nav-item" onClick={() => setUpdateModal(true)}>*/}
                                {/*    <a href="#1" className="nav-link">*/}
                                {/*        <i className="icon-cog5" />*/}
                                {/*        <span>Account settings</span>*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                {/* <li className="nav-item">
                                <a href="#1" className="nav-link">
                                    <i className="icon-switch2" />
                                    <span>Chiqish</span>
                                </a>
                            </li> */}
                            </ul>
                        </div>
                    </div>

                    <div className="sidebar-section">
                        <ul className="nav nav-sidebar" data-nav-type="accordion">
                            {/*<li className="nav-item-header">*/}
                            {/*    <div className="text-uppercase font-size-xs line-height-xs mt-1">Dashboard</div> <i*/}
                            {/*        className="icon-menu" title="Main" />*/}
                            {/*</li>*/}
                            {/* collapse */}
                            {/* <li className="nav-item nav-item-submenu">
                            <a href="#" className="nav-link"><i className="icon-home4" /> <span>Tashkilot qo'shish</span></a>

                            <ul className="nav nav-group-sub" >
                                <li className="nav-item">
                                    <Link to="/super_base_admin_tashkilotlar" className="nav-link">
                                        Tashkilotlar
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/super_base_admin_sozlamalar" className="nav-link">
                                        Sozlamalar
                                    </Link>
                                </li>
                            </ul>
                        </li> */}
                            {/*<li className="nav-item">*/}
                            {/*    <Link to="/super_base_admin" className="nav-link d-flex align-items-center">*/}
                            {/*        /!* <i className="icon-home4" /> *!/*/}
                            {/*        <i className="fas fa-home" />*/}
                            {/*        <span>Bosh sahifa</span>*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                            <li className="nav-item">
                                <Link to="/super_base_admin_tashkilot-qushish" className="nav-link d-flex align-items-center">
                                    {/* <i className="icon-home4" /> */}
                                    <i className="fas fa-folder-plus" />
                                    <span>Tashkilot qo'shish</span>
                                </Link>
                            </li>
                            {/* <li className="nav-item nav-item-submenu">
                            <a href="#" className="nav-link"><i className="icon-home4" /> <span>Admin qo'shish</span></a>

                            <ul className="nav nav-group-sub">
                                <li className="nav-item">
                                    <a href="index.html" className="nav-link">Adminlar</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Sozlamalar</a>
                                </li>
                            </ul>
                        </li> */}
                            {/* <li className="nav-item">
                            <Link to="/super_base_admin_murojaat" className="nav-link">
                                <i className="icon-home4" />
                                <span>Modullar</span>
                            </Link>
                        </li> */}
                            {/* <li className="nav-item">
                            <Link to="/super_base_admin_hudud" className="nav-link d-flex align-items-center">
                                <i className="fas fa-archway" />
                                <span>Hudud</span>
                            </Link>
                        </li> */}
                            {/* <li className="nav-item">
                            <Link to="/super_base_admin_murojaat" className="nav-link d-flex align-items-center">
                                <i className="fas fa-envelope-open-text" />
                                <span>Murojaat</span>
                            </Link>
                        </li> */}
                            <li className="nav-item">
                                <Link to="/super_base_admin-modullar" className="nav-link d-flex align-items-center">
                                    <i className="fas fa-cog" />
                                    <span>Modul</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/super_base_admin-kartochka" className="nav-link d-flex align-items-center">
                                    <i className="fas fa-plus" />
                                    <span>Kartochka qo'shish</span>
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                            <a href="#1" className="nav-link d-flex align-items-center">
                                <i className="fas fa-question-circle" />
                                <span>API</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link to="/super_base_admin_xabarnoma" className="nav-link d-flex align-items-center">
                                <i className="fas fa-envelope-square" />
                                <span>Xabarnoma</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="#1" className="nav-link d-flex align-items-center">
                                <i className="fas fa-chart-pie" />
                                <span>Monitoring</span>
                            </a>
                        </li> */}
                            {/* <li className="nav-item nav-item-submenu" style={{ display: "none" }}>
                            <a href="#1" className="nav-link"><i className="icon-magazine" /> <span>Monitoring</span></a>

                            <ul className="nav nav-group-sub">
                                <li className="nav-item">
                                    <a href="index.html" className="nav-link">Hisobotlar</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#1" className="nav-link">Statistika</a>
                                </li>
                            </ul>
                        </li> */}
                        </ul>
                    </div>
                </div >
            </div >

            {updateModal && (
                <div className='adminWindow1'>
                    <div className='adminWindow1Wrapper adminWindow1Wrapper1'>
                        <div className="modal-dialog modal-xl customDialog">
                            <div className="modal-content" style={{
                                boxShadow: '0 .5rem 1rem rgba(0,0,0,.5)',
                                borderRadius: 30
                            }} >
                                <div className="modal-header bg-primary " style={{ color: "#fff", borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                                    <h5 className="modal-title">Foydalanuvchi sozlamalari</h5>
                                    <button type="button" className="close" onClick={() => setUpdateModal(false)}>×</button>
                                </div>
                                <form onSubmit={saveUser}>
                                    <div className="modal-body" style={{
                                        overflowY: "hidden"
                                    }}>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="form-group form-group-floating row">
                                                        <div className="col-lg-9">
                                                            <div className="position-relative">
                                                                <input
                                                                    type="text"
                                                                    style={{ textTransform: "capitalize" }}
                                                                    className="form-control form-control-outline fio"
                                                                    placeholder="Placeholder"
                                                                    disabled={true}
                                                                    defaultValue={userData?.fullName}
                                                                />
                                                                <label className="label-floating">FIO</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            {file ? (
                                                                <img
                                                                    src={URL.createObjectURL(file)} alt=""
                                                                    style={{
                                                                        aspectRatio: 3 / 3
                                                                    }}
                                                                    className='imgSettings' />
                                                            ) : (
                                                                <img
                                                                    style={{
                                                                        aspectRatio: 3 / 3
                                                                    }}
                                                                    src={url + "/api/file/view/" + userData?.file?.id} alt=""
                                                                    className='imgSettings'
                                                                />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-lg-5 ">
                                                    <div className="form-group form-group-floating row">
                                                        <div className="col-lg-12">
                                                            <div className="position-relative">
                                                                <input
                                                                    type="email"
                                                                    // style={{ textTransform: "capitalize" }}
                                                                    className="form-control form-control-outline email"
                                                                    placeholder="Placeholder"
                                                                    defaultValue={userData?.email}
                                                                />
                                                                <label className="label-floating">Email</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group form-group-floating row">
                                                        <div className="col-lg-12">
                                                            <div className="position-relative">
                                                                <input
                                                                    type="text"
                                                                    style={{ textTransform: "capitalize" }}
                                                                    data-mask="+998 (99) 999-99-99"
                                                                    name={'mobileNumber'}
                                                                    className="form-control form-control-outline telefon"
                                                                    placeholder="Placeholder"
                                                                    defaultValue={userData?.phoneNumber}
                                                                />
                                                                <label className="label-floating">Telefon nomer</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-9">
                                                <div className="form-group form-group-floating row mb-0" >
                                                    <div className="col-lg-12">
                                                        <label className="custom-file text-muted" htmlFor={'select'}>
                                                            <div className={'custom-file-label'}>
                                                                {fileType ? file?.name : "Foydalanuvchi rasmi"}
                                                            </div>
                                                        </label>
                                                        <input
                                                            type="file"
                                                            id={'select'}
                                                            className="custom-file-input avatar d-none"
                                                            accept=".png, .jpg, .jpeg"
                                                            onClick={(e) => e.target.value = null}
                                                            onChange={(e) => setFile(e.target.files[0])}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-9">
                                            <div className="modal-footer">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary">
                                                    Saqlash
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* alert */}
            {alert.open && (
                <div className={`alert alert-${alert.color} alertNotice alert-styled-left alert-dismissible`}>
                    {/* <button type="button" className="close" data-dismiss="alert"><span>×</span></button> */}
                    <span className="font-weight-semibold">{alert.text}</span>
                </div>
            )}

        </>
    )
}
