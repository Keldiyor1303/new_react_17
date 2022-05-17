import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../../context/AuthContext";
import { axiosInstance } from "../../../../../../config";
import { Alert } from "../../../../../../component/alert/Alert";
import ContentNavbarSozlamalar from "../../../../../sozlamalar/contentNavbarSozlamalar/ContentNavbarSozlamalar";
// import './mavjudPaketlarContent.css';

export default function MavjudPaketlarContentOfficeMeneger() {
    const [yunalishlar, setYunalishlar] = useState([]);
    const { user: currentUser } = useContext(AuthContext);
    const [tashkilotlar, setTashkilotlar] = useState([]);
    const [boshTashkilotlar, setBoshTashkilotlar] = useState([]);
    const [alert, setAlert] = useState({ open: false, text: "", color: "" });
    const [orgName, setOrgName] = useState({});
    let roleSuperAdmin = "";

    // admin uchun organizatsiyani o'qib olish
    // useEffect(() => {
    //     const token = jwtDecode(currentUser);
    //     let decode = JSON.parse(token?.supperAdmin);
    //     roleSuperAdmin = JSON.parse(token?.supperAdmin).userRoles[0]?.systemName;
    //     if (roleSuperAdmin === "admin") {
    //         axiosInstance.get("user/myOrg/" + decode.id, {
    //             headers: {
    //                 Authorization: 'Bearer ' + currentUser
    //             }
    //         })
    //             .then(res => {
    //                 // console.log(res.data);
    //                 setOrgName(res.data);
    //             })
    //             .catch(err => {
    //                 console.log(err.response);
    //             })
    //     }
    // }, [tashkilotlar]);

    // barcha ota onasi yo'q card typelarni ni o'qib olish
    useEffect(() => {
        axiosInstance.get("organization/cardType", {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log("showCard", res.data);
                setYunalishlar(res.data);
            })
            .catch(err => {
                console.log("errorrr", err.response);
            })
    }, []);

    // id bo'yicha tashkilotlarni o'qib olish
    const getCard = (id) => {
        console.log(id);
        axiosInstance.get(`organization/showCardBy/cardType/${id}`, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log("dfd", res.data);
                setTashkilotlar(res.data);
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    // yunalishni bosganda tashkilot chiqishi
    useEffect(() => {
        let orgNames = document.querySelectorAll('.cardAccordion');
        orgNames.forEach((org, index) => {
            org.querySelector('.orgname').addEventListener('click', () => {
                if (org.querySelector('.openTash').style.display === "none") {
                    org.querySelector('.openTash').style.display = "block";
                } else {
                    org.querySelector('.openTash').style.display = "none";

                }
            })
        })
    }, [yunalishlar]);

    const getKartochkalar = (id) => {
        axiosInstance.get(`organization/showCardType/${id}`, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                setBoshTashkilotlar(res.data);
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    const visible = (dat) => {
        axiosInstance.post("organization/setVisible", {
            cardId: dat.id,
            // orgId: orgName.id,
        }, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                let arr = boshTashkilotlar.filter((d, i) => {
                    if (d.id === res.data.id) {
                        d.id = res.data.id;
                        d.isVisible = res.data.isVisible;
                        d.report = res.data.report;
                    }
                    return d;
                })
                setBoshTashkilotlar(arr);
            })
            .catch(err => {
                console.log(err.response);
                Alert(setAlert, "warning", err.response?.data);
            })
    }

    const report = (dat) => {
        axiosInstance.post("organization/setReport", {
            cardId: dat.id,
            // orgId: orgName.id,
        }, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                let arr = boshTashkilotlar.filter((d, i) => {
                    if (d.id === res.data.id) {
                        d.id = res.data.id;
                        d.isVisible = res.data.isVisible;
                        d.report = res.data.report;
                    }
                    return d;
                })
                setBoshTashkilotlar(arr);
            })
            .catch(err => {
                console.log(err.response);
                Alert(setAlert, "warning", err.response?.data);
            })
    }

    return (
        <div className="content mb-5 " >
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Paketlar</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <ContentNavbarSozlamalar />
                </ul>
                <div className="card-body p-0 " >
                    {/*<ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink d-flex align-items-center justify-content-between" style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px" }}>*/}
                    {/*    <li className="nav-item"><h5 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase", color: "#fff", padding: "0 5px 5px 0" }}>Kartochkalar boshqaruv paneli</h5></li>*/}
                    {/*</ul>*/}

                    <div className="tab-content">
                        <div id="accordion-styled">
                            <div className="card">
                                <div className="card-body" >
                                    <div id="accordion-default">
                                        {/* yunalishlar */}
                                        {yunalishlar.map((dat, index1) => (
                                            <div className="d-flex align-items-center" style={{ position: "relative" }}>
                                                <div key={index1} className="card cardAccordion mb-0 mt-2 w-100">
                                                    <div className="card-header orgname" style={{ height: "40px" }} onClick={() => getCard(dat.id)}>
                                                        <h6 className="card-title d-flex justify-content-between align-items-center" >
                                                            <a className="text-body NavLink" style={{ color: "#0056B8 !important" }} href="#1">{dat.cardName}</a>
                                                        </h6>
                                                    </div>

                                                    <div className="openTash" style={{ display: "none" }}>
                                                        {tashkilotlar.length > 0 && tashkilotlar.map((tash, index) => (
                                                            <>
                                                                {tash?.parentCardType?.cardName === dat?.cardName && (
                                                                    <>
                                                                        <div key={index} className="">
                                                                            <div className="card-body pb-1 pt-2 " >
                                                                                <div className="card mb-1">
                                                                                    <div className="card-header d-flex align-items-center" style={{ height: "40px", position: "relative" }}>
                                                                                        <h6 className="card-title">
                                                                                            <a className="collapsed text-body NavLink" style={{ paddingLeft: "10px" }} data-toggle="collapse" href={`#vHokimlik${index}`}>{tash?.cardName}</a>
                                                                                        </h6>
                                                                                    </div>

                                                                                    <div id={`vHokimlik${index}`} className="card-body collapse" data-parent={`#accordion-default`} >
                                                                                        <div id="accordion-child2">
                                                                                            <div className="card">
                                                                                                <div className="card-header bg-dark" onClick={() => getKartochkalar(tash.id)}>
                                                                                                    <h6 className="card-title">
                                                                                                        <a data-toggle="collapse" className="text-white" href={`#bTashkilot${index}`}>Kartochkalar</a>
                                                                                                    </h6>
                                                                                                </div>

                                                                                                <div id={`bTashkilot${index}`} className="collapse" data-parent={`#bTashkilot${index}`}>
                                                                                                    <div className="card-body">
                                                                                                        <table className="table datatable-row-full  mt-3 table-bordered table-striped table-hover Tab" id="myTable">
                                                                                                            <thead>
                                                                                                            <tr className="bg-dark text-white NavLink text-center">
                                                                                                                <th style={{ width: "3%" }}>№</th>
                                                                                                                <th style={{ width: "15%" }}>Kartochka nomi</th>
                                                                                                                <th style={{ width: "20%" }}>Bajarilish muddati</th>
                                                                                                                {/*<td style={{ width: "8%" }}>Harakatlar</td>*/}
                                                                                                            </tr>
                                                                                                            </thead>
                                                                                                            <tbody id="viloyat">
                                                                                                            {boshTashkilotlar.length > 0 && boshTashkilotlar?.map((dat, index) => (
                                                                                                                <tr key={index} className="text-center">
                                                                                                                    <td>{index + 1}</td>
                                                                                                                    <td>{dat?.cardName}</td>
                                                                                                                    <td>{dat?.expireDate}</td>
                                                                                                                    {/*<td className="">*/}
                                                                                                                    {/*    <button*/}
                                                                                                                    {/*        className="mavjudPaketlarButton"*/}
                                                                                                                    {/*        onClick={() => visible(dat)}*/}
                                                                                                                    {/*        style={{ backgroundColor: dat.isVisible ? "green" : "crimson" }}*/}
                                                                                                                    {/*    >*/}
                                                                                                                    {/*        Visible*/}
                                                                                                                    {/*    </button>*/}
                                                                                                                    {/*    <button*/}
                                                                                                                    {/*        className="mavjudPaketlarButton1"*/}
                                                                                                                    {/*        style={{ backgroundColor: dat.report ? "green" : "crimson" }}*/}
                                                                                                                    {/*        onClick={() => report(dat)}*/}
                                                                                                                    {/*    >*/}
                                                                                                                    {/*        Report*/}
                                                                                                                    {/*    </button>*/}
                                                                                                                    {/*</td>*/}
                                                                                                                </tr>
                                                                                                            ))}
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                )}
                                                            </ >
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {alert.open && (
                <div className={`alert alert-${alert.color} alert-styled-left alert-dismissible`}>
                    {/* <button type="button" className="close" data-dismiss="alert"><span>×</span></button> */}
                    <span className="font-weight-semibold">{alert.text}</span>
                </div>
            )}
        </div >
    )
}