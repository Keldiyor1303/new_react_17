import React, { useContext, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import './adminSidebar.css';
import { axiosInstance } from '../../../config';
import { url } from '../../../config';
import { Alert } from '../../alert/Alert';

export default function AdminNavbar() {
    const [updateModal, setUpdateModal] = useState(false);
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const [userData, setUserData] = useState({});
    const [alert, setAlert] = useState({ open: false, text: "", color: "" });
    const [file, setFile] = useState(null);
    const fileType = (file?.type === "image/png" || file?.type === "image/jpg" || file?.type === "image/jpeg");

    useEffect(() => {
        if (currentUser) {
            const userData1 = JSON.parse(jwtDecode(currentUser)?.supperAdmin);
            setUserData(userData1);
        }
    }, []);

    const saveUser = async (e) => {
        e.preventDefault();

        // to do server
        let ism = document.querySelector('.ism').value;
        let familiya = document.querySelector('.familiya').value;
        let otasi = document.querySelector('.otasi').value;
        let email = document.querySelector('.email').value;
        let telefon = document.querySelector('.telefon').value;
        let tugilganKun = document.querySelector('.tugilganKun').value;
        let shahar = document.querySelector('.shahar').value;

        if (fileType) {
            const formData = new FormData();
            formData.append("logo", file);

            // faylni o'zini yuborish
            axiosInstance.post("user/saveAvatarPhoto", formData, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    axiosInstance.patch("user/updateUser", {
                        id: userData.id,
                        firstName: ism,
                        lastName: familiya,
                        middleName: otasi,
                        email: email,
                        mobile_number: telefon,
                        birthDate: tugilganKun,
                        birthCountry: shahar,
                        fileId: res.data
                    }, {
                        headers: {
                            Authorization: "Bearer " + currentUser
                        }
                    })
                        .then(res => {
                            Alert(setAlert, "success", "Ma'lumotingiz muvaffaqiyatli o'zgartirildi");
                            const userData1 = JSON.parse(jwtDecode(res.data)?.supperAdmin);
                            setUserData(userData1);
                            setUpdateModal(false);
                            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
                        })
                        .catch(err => {
                            console.log(err.response);
                            Alert(setAlert, "warning", err?.response?.data);
                        })

                })
                .catch(err => {
                    console.log(err.response);
                    Alert(setAlert, "warning", err?.response?.data);
                })
        } else {
            axiosInstance.patch("user/updateUser", {
                id: userData.id,
                firstName: ism,
                lastName: familiya,
                middleName: otasi,
                email: email,
                mobile_number: telefon,
                birthDate: tugilganKun,
                birthCountry: shahar
            }, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    // console.log(res.data);
                    Alert(setAlert, "success", "Ma'lumotingiz muvaffaqiyatli o'zgartirildi");
                    const userData1 = JSON.parse(jwtDecode(res.data)?.supperAdmin);
                    setUserData(userData1);
                    setUpdateModal(false);
                    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
                })
                .catch(err => {
                    console.log(err.response);
                    Alert(setAlert, "warning", err?.response?.data);
                })
        }
        setUpdateModal(false)
    }

    return (
        <>
            <div className="sidebar sidebar-light sidebar-main sidebar-expand-lg sidebar-main-resized">
                <div className="sidebar-content">
                    <div className="sidebar-section">
                        <div className="sidebar-user-material">
                            <div className="sidebar-section-body">
                                <div className="d-flex">
                                    <div style={{ width: '36px' }} />
                                    <span className="flex-1 text-center">
                                        <img
                                            src={userData?.file?.id ? `${url}/api/file/view/${userData?.file?.id}` : "/assets/user.png"}
                                            className="img-fluid rounded-circle shadow-sm"
                                            style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover'}}
                                            alt=""/>
                                    </span>
                                    <div className=" text-right">
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
                                    <h6 className="mb-0 text-white text-shadow-dark mt-3"
                                        onClick={() => setUpdateModal(true)}>{userData?.firstName?.substring(0, 1)}.&nbsp; {userData?.lastName}</h6>
                                </div>
                            </div>

                            {/*<div className="sidebar-user-material-footer">*/}
                            {/*    <a href="#user-nav"*/}
                            {/*       className="d-flex justify-content-between align-items-center text-shadow-dark dropdown-toggle"*/}
                            {/*       data-toggle="collapse"><span> Sozlamalar</span>*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                        </div>

                        {/*<div className="collapse border-bottom" id="user-nav">
                            <ul className="nav nav-sidebar">
                                <li className="nav-item cursor-pointer" onClick={() => setUpdateModal(true)}>
                                    <div className="nav-link">
                                        <i className="icon-cog5" />
                                        <span>Account settings</span>
                                    </div>
                                </li>
                            </ul>
                        </div>*/}
                    </div>

                    <div className="sidebar-section">
                        <ul className="nav nav-sidebar" data-nav-type="accordion">
                            {/*<li className="nav-item-header">*/}
                            {/*    <div className="text-uppercase font-size-xs line-height-xs mt-1">Dashboard</div>*/}
                            {/*    <i className="icon-menu" title="Main" />*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                            {/*    <Link to="/super_admin" className="nav-link d-flex align-items-center">*/}
                            {/*        /!* <i className="icon-home4" /> *!/*/}
                            {/*        <i className="fas fa-home" />*/}
                            {/*        <span>Bosh sahifa</span>*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                            <li className="nav-item nav-item-submenu" style={{ fontSize: '16px !important' }}>
                                <div className="nav-link">
                                    <i className="icon-home4 text-primary" />
                                    <span style={{ fontWeight: "bold" }}>Hujjatlar</span>
                                </div>

                                <ul className="nav nav-group-sub" data-submenu-title="Layouts">
                                    <li className="nav-item">
                                        <Link to="/super_admin_elektron-kitob" className="nav-link">
                                            <i className="icon-home4 text-primary" />
                                            <span style={{ fontWeight: "bold" }}>Elektron kitob</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/super_admin_sozlamalar" className="nav-link">
                                            <i className="icon-home4 text-primary" />
                                            <span style={{ fontWeight: "bold" }}>Sozlamalar</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/*<li className="nav-item nav-item-submenu">*/}
                            {/*    <div className="nav-link">*/}
                            {/*        <i className="icon-file-download" />*/}
                            {/*        <span>Kadrlar bo'limi</span>*/}
                            {/*    </div>*/}
                            {/*    <ul className="nav nav-group-sub" data-submenu-title="Layouts">*/}
                            {/*        <li className="nav-item">*/}
                            {/*            <a href="index.html" className="nav-link">Xodimlar</a>*/}
                            {/*        </li>*/}
                            {/*        <li className="nav-item">*/}
                            {/*            <div className="nav-link">*/}
                            {/*                Sozlamalar*/}
                            {/*            </div>*/}
                            {/*            /!* <a href="#" className="nav-link">Sozlamalar</a> *!/*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/* <Link to="/" className="nav-link">
                            <i className="icon-home4" />
                            <span>Tashkilot qo'shish</span>
                            </Link> */}
                            {/*</li>*/}
                            {/*<li className="nav-item nav-item-submenu">*/}
                            {/*    <div className="nav-link">*/}
                            {/*        <i className="icon-file-download" />*/}
                            {/*        <span>Keldi ketdi</span>*/}
                            {/*    </div>*/}
                            {/*    /!* <a href="#" className="nav-link">*/}
                            {/*</a> *!/*/}

                            {/*    <ul className="nav nav-group-sub" data-submenu-title="Layouts">*/}
                            {/*        <li className="nav-item">*/}
                            {/*            <a href="index.html" className="nav-link">Xodimlar</a>*/}
                            {/*        </li>*/}
                            {/*        <li className="nav-item">*/}
                            {/*            <div className="nav-link">*/}
                            {/*                Sozlamalar*/}
                            {/*            </div>*/}
                            {/*            /!* <a href="#" className="nav-link">Sozlamalar</a> *!/*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item nav-item-submenu">*/}
                            {/*    <div className="nav-link">*/}
                            {/*        <i className="icon-file-download" />*/}
                            {/*        <span>Qabul</span>*/}
                            {/*    </div>*/}
                            {/* <a href="#" className="nav-link">
                            </a> */}

                            {/*    <ul className="nav nav-group-sub" data-submenu-title="Layouts">*/}
                            {/*        <li className="nav-item">*/}
                            {/*            <div className="nav-link">*/}
                            {/*                Sozlamalar*/}
                            {/*            </div>*/}
                            {/*            /!* <a href="#" className="nav-link">Sozlamalar</a> *!/*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item nav-item-submenu">*/}
                            {/*    <div className="nav-link">*/}
                            {/*        <i className="icon-file-download" />*/}
                            {/*        <span>Xabarnoma</span>*/}
                            {/*    </div>*/}
                            {/* <a href="#" className="nav-link">
                            </a> */}

                            {/*    <ul className="nav nav-group-sub" data-submenu-title="Layouts">*/}
                            {/*        <li className="nav-item">*/}
                            {/*            <a href="index.html" className="nav-link">Online chat</a>*/}
                            {/*        </li>*/}
                            {/*        <li className="nav-item">*/}
                            {/*            <div className="nav-link">*/}
                            {/*                E'lon xabarnomasi*/}
                            {/*            </div>*/}
                            {/*            /!* <a href="#" className="nav-link">E'lon xabarnomasi</a> *!/*/}
                            {/*        </li>*/}
                            {/*        <li className="nav-item">*/}
                            {/*            <div className="nav-link">*/}
                            {/*                Sozlamalar*/}
                            {/*            </div>*/}
                            {/*            /!* <a href="#" className="nav-link">Sozlamalar</a> *!/*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item nav-item-submenu" style={{ display: "none" }}>*/}
                            {/*    <div className="nav-link">*/}
                            {/*        <i className="icon-file-download" />*/}
                            {/*        <span>Monitoring</span>*/}
                            {/*    </div>*/}
                            {/* <a href="#" className="nav-link">
                            </a> */}

                            {/*    <ul className="nav nav-group-sub" data-submenu-title="Layouts">*/}
                            {/*        <li className="nav-item">*/}
                            {/*            <a href="index.html" className="nav-link">Hisobotlar</a>*/}
                            {/*        </li>*/}
                            {/*        <li className="nav-item">*/}
                            {/*            <div className="nav-link">*/}
                            {/*                Statistika*/}
                            {/*            </div>*/}
                            {/*            /!* <a href="#" className="nav-link">Statistika</a> *!/*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</li>*/}

                            {/* card  */}
                            {/*<li className="nav-item nav-item-submenu" >*/}
                            {/*    <div className="nav-link upDown">*/}
                            {/*        <i class="fas fa-id-card" />*/}
                            {/*        <span>Kartochka sozlamalari</span>*/}
                            {/*    </div>*/}

                            {/*    <ul className="nav nav-group-sub">*/}


                            <li className="nav-item nav-item-submenu">
                                <div className="nav-link">
                                    <i className="fas fa-id-card text-primary" />
                                    <span style={{ fontWeight: "bold" }}>Paketlar</span>
                                </div>

                                <ul className="nav nav-group-sub" data-submenu-title="Layouts">
                                    <li className="nav-item">
                                        <Link to="/super_admin/umumiy/paketlar" className="nav-link">
                                            <i className="fas fa-id-card text-primary" />
                                            <span style={{ fontWeight: "bold" }}>Umumiy paketlar</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/super_admin/mavjud/paketlar" className="nav-link">
                                            <i className="fas fa-id-card text-primary" />
                                            <span style={{ fontWeight: "bold" }}>Mavjud paketlar</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item nav-item-submenu">
                                <div className="nav-link">
                                    <i className="fas fa-id-card text-primary" />
                                    <span style={{ fontWeight: "bold" }}>Tashkilotlar</span>
                                </div>

                                <ul className="nav nav-group-sub" data-submenu-title="Layouts">
                                    <li className="nav-item">
                                        <Link to="/super_admin/umumiy/tashkilotlar" className="nav-link">
                                            <i className="fas fa-id-card text-primary" />
                                            <span style={{ fontWeight: "bold" }}>Umumiy tashkilotlar</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/super_admin/mavjud/tashkilotlar" className="nav-link">
                                            <i className="fas fa-id-card text-primary" />
                                            <span style={{ fontWeight: "bold" }}>Mavjud tashkilotlar</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {updateModal && (
                <div className='adminWindow1'>
                    <div className='adminWindow1Wrapper'>
                        <div className="">
                            <div className="modal-content">
                                <div className="modal-header bg-primary " style={{ color: "#fff" }}>
                                    <h5 className="modal-title">Foydalanuvchi sozlamalari</h5>
                                    <button type="button" className="close" onClick={() => setUpdateModal(false)}>×
                                    </button>
                                </div>
                                <form onSubmit={saveUser}>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="form-group form-group-floating row">
                                                        <div className="col-lg-12">
                                                            <div className="position-relative">
                                                                <input
                                                                    type="text"
                                                                    disabled={true}
                                                                    style={{ textTransform: "capitalize" }}
                                                                    className="form-control form-control-outline ism"
                                                                    placeholder="Placeholder"
                                                                    defaultValue={userData?.firstName}
                                                                />
                                                                <label className="label-floating">Ism</label>
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
                                                                    disabled={true}
                                                                    style={{ textTransform: "capitalize" }}
                                                                    className="form-control form-control-outline familiya"
                                                                    placeholder="Placeholder"
                                                                    defaultValue={userData?.lastName}
                                                                />
                                                                <label className="label-floating">Familiya</label>
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
                                                                    disabled={true}
                                                                    style={{ textTransform: "capitalize" }}
                                                                    className="form-control form-control-outline otasi"
                                                                    placeholder="Placeholder"
                                                                    defaultValue={userData?.middleName}
                                                                />
                                                                <label className="label-floating">Otasi ismi</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="form-group form-group-floating row">
                                                        <div className="col-lg-12">
                                                            <div className="position-relative">
                                                                <input
                                                                    type="text"
                                                                    disabled={true}
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
                                                                    disabled={true}
                                                                    style={{ textTransform: "capitalize" }}
                                                                    data-mask="+998 (99) 999-99-99"
                                                                    className="form-control form-control-outline telefon"
                                                                    placeholder="Placeholder"
                                                                    defaultValue={userData?.mobile_number}
                                                                />
                                                                <label className="label-floating">Telefon nomer</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group form-group-floating row">
                                                        {file ? (
                                                            <img
                                                                src={URL.createObjectURL(file)}
                                                                alt=""
                                                                style={{
                                                                    aspectRatio: 3 / 3
                                                                }}
                                                                className='supAdminImg' />
                                                        ) : (
                                                            <img
                                                                src={url + "/api/file/view/" + userData?.file?.id}
                                                                alt=""
                                                                style={{
                                                                    aspectRatio: 3 / 3
                                                                }}
                                                                className='supAdminImg' />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-lg-4 w-100">
                                                    <div className="form-group form-group-floating row">
                                                        <div className="col-lg-12">
                                                            <div className="position-relative w-100">
                                                                <input
                                                                    type="text"
                                                                    disabled={true}
                                                                    style={{ textTransform: "capitalize" }}
                                                                    className="form-control form-control-outline shahar"
                                                                    placeholder="Placeholder"
                                                                    defaultValue={userData?.birthCountry}
                                                                />
                                                                <label className="label-floating w-100">Shahar</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group form-group-floating row mb-0">
                                                        <div className="col-lg-12">
                                                            <div className="position-relative">
                                                                <input
                                                                    type="text"
                                                                    disabled={true}
                                                                    className="form-control form-control-outline tugilganKun"
                                                                    // id="chiquvchiSana"
                                                                    placeholder="Placeholder"
                                                                    defaultValue={userData?.birthDate}
                                                                />
                                                                <label className="label-floating">Tug'ilgan kuni</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="form-group form-group-floating row mb-0">
                                                    <div className="col-lg-12">
                                                        <label className="custom-file">
                                                            <input
                                                                type="file"
                                                                className="custom-file-input"
                                                                accept=".png, .jpg, .jpeg"
                                                                onClick={(e) => e.target.value = null}
                                                                onChange={(e) => setFile(e.target.files[0])}
                                                            />
                                                            <span className="custom-file-label text-muted w-100"
                                                                style={{ padding: "auto" }}>
                                                                {fileType ? file?.name : "Foydalanuvchi rasmi"}
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-8 pr-0">
                                            <div className="modal-footer">
                                                <button type="submit" className="btn btn-primary">Saqlash</button>
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
                    <span className="font-weight-semibold">{alert.text}</span>
                </div>
            )}
        </>
    )
}
