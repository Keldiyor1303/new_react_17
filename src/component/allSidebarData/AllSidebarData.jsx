import jwtDecode from 'jwt-decode';
import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import {axiosInstance, url} from '../../config';
import './allSidebarData.css';
import {Alert} from '../alert/Alert';

export default function Sidebar() {
    const {user: currentUser, dispatch} = useContext(AuthContext);
    const [updateModal, setUpdateModal] = useState(false);
    const [userData, setUserData] = useState({});
    const [alert, setAlert] = useState({open: false, text: "", color: ""});
    const [file, setFile] = useState(null);
    const fileType = (file?.type === "image/png" || file?.type === "image/jpg" || file?.type === "image/jpeg");
    const [roles, setRoles] = useState([]);
    const [ranks, setRansk] = useState([]);
    const [permission, setPermission] = useState([]);
    // const [avatar, setAvatar] = useState('');
    // let ranks = [], permission = [];

    useEffect(() => {
        let decode = jwtDecode(currentUser);
        let arr1 = [], arr2 = [], arr = [];
        if (JSON.parse(localStorage.getItem('ids'))) {
            // console.log(JSON.parse(decode.workPlaces));
            let r = JSON.parse(decode.workPlaces);
            r.forEach((d) => {
                if (JSON.parse(localStorage.getItem('ids')) === d.id) {
                    d.permissions.forEach((h) => {
                        arr2.push(h?.name);
                    })
                }
                d.userRoles.forEach((f) => {
                    arr.push(f?.systemName);
                    arr1.push(f?.rank);
                })
            })
            setRoles(arr);
            setRansk(arr1);
            setPermission(arr2);
        }
    }, [currentUser]);

    useEffect(() => {
        if (currentUser) {
            const userData1 = JSON.parse(jwtDecode(currentUser)?.supperAdmin);
            setUserData(userData1);
        }
    }, []);

    const saveUser = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);

        // to do server
        // let fio = document.querySelector('.fio').value;
        let telefon = document.querySelector('.telefon').value;
        let email = document.querySelector('.email').value;
        // let avatar = document.querySelector('.avatar').value;

        if (fileType) {
            // faylni o'zini yuborish
            axiosInstance.post("document/saveDuplicateFile", formData, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    // localStorage.setItem("fdi", JSON.stringify(res.data));
                    console.log(res.data)
                    axiosInstance.patch("user/editProfile", {
                        id: userData.id,
                        // fullName: fio,
                        mobileNumber: telefon,
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
                            Alert(setAlert, 'success', "Ma'lumotingiz muvaffaqiyatli o'zgartirildi");
                            setUpdateModal(false);
                        })
                        .catch(err => {
                            console.log(err.response);
                            Alert(setAlert, 'warning', err?.response?.data);
                        })
                })
                .catch(err => {
                    console.log(err.response);
                    Alert(setAlert, 'warning', err?.response?.data);
                })

        } else {
            axiosInstance.patch("user/editProfile", {
                id: userData.id,
                mobileNumber: telefon,
                email: email,
            }, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    dispatch({type: 'UPLOADED', payload: res.data});
                    // console.log(res.data);
                    setUserData(JSON.parse(jwtDecode(res.data)?.supperAdmin));
                    Alert(setAlert, 'success', "Ma'lumotingiz muvaffaqiyatli o'zgartirildi");
                    setUpdateModal(false);
                })
                .catch(err => {
                    console.log(err.response);
                    Alert(setAlert, 'warning', err?.response?.data);
                })
        }

        // if (roles.includes("office_manager")) {
        //     axiosInstance.post("user/editProfile", formData, {
        //         headers: {
        //             Authorization: "Bearer " + currentUser
        //         }
        //     })
        //         .then(res => {
        //             // console.log(res.data)
        //             setAvatar(res.data)
        //         })
        //         .catch(err => {
        //             console.log(err.response);
        //             Alert(setAlert, 'warning', err?.response?.data);
        //         })
        // } else {
        //
        // }
        setUpdateModal(false)
    }

    return (
        <>
            <div className="sidebar sidebar-light sidebar-main sidebar-expand-lg sidebar-main-resized">
                <div className="sidebar-content sidebar-content-hover" style={{postion: 'relative'}}>
                    <div className="sidebar-section sidebar-user">
                        <div className="sidebar-user-material">
                            <div className="sidebar-section-body">
                                <div className="d-flex">

                                    <div className={'flex-1'}/>
                                    <span className="text-center">
                                        <img
                                            src={userData?.file ? `${url}/api/file/view/${userData?.file?.generatedName}` : "/assets/user.png"}
                                            className="rounded-circle shadow-sm overflow-hidden"
                                            style={{
                                                width: '80%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                aspectRatio: '3 / 3',
                                            }}
                                            alt="your avatar"
                                        />
                                    </span>
                                    <div className="text-right position-absolute" style={{right: 10}}>
                                        <button type="button"
                                                className="btn btn-outline-light border-transparent btn-icon rounded-pill btn-sm sidebar-control sidebar-main-resize d-none d-lg-inline-flex">
                                            <i className="icon-transmission"/>
                                        </button>
                                        {/*<button type="button"
                                            className="btn btn-outline-light border-transparent btn-icon rounded-pill btn-sm sidebar-mobile-main-toggle d-lg-none">
                                            <i className="icon-cross2" />
                                        </button>*/}
                                    </div>
                                </div>

                                <div className="text-center">
                                    <h6 className="mb-0 text-white text-shadow-dark mt-3"
                                        onClick={() => setUpdateModal(true)}>{userData.lastName} {userData.firstName}</h6>
                                </div>
                            </div>
                            {/*<div className="sidebar-user-material-footer">*/}
                            {/*    <a href="#user-nav"*/}
                            {/*        className="d-flex justify-content-between align-items-center text-shadow-dark dropdown-toggle"*/}
                            {/*        data-toggle="collapse"><span> Sozlamalar</span></a>*/}
                            {/*</div>*/}
                        </div>

                        {/*<div className="collapse border-bottom" id="user-nav">*/}
                        {/*    <ul className="nav nav-sidebar">*/}
                        {/*        <li className="nav-item" >*/}
                        {/*            <a href="#1" className="nav-link">*/}
                        {/*                <i className="icon-cog5" /*/}
                        {/*                <span>Account settings</span>*/}
                        {/*            </a>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                    </div>

                    <div className="sidebar-section" style={{paddingBottom: 30}}>
                        <ul className="nav nav-sidebar" data-nav-type="accordion">


                            {/* kiruvchi sidebar */}
                            <li className="nav-item " style={{fontSize: '18px'}}>
                                <Link to="/asosiy" className="nav-link liHover">
                                    <i className="icon-home4" style={{color: "#0056B8"}}/>
                                    <span>Bosh sahifa</span>
                                </Link>
                            </li>
                            {(roles.includes("boss_1") || roles.includes("boss_2") || roles.includes("boss_3") || roles.includes("chief_of_group") || roles.includes("controller") || roles.includes("head_of_department") || roles.includes("human_resources") || roles.includes("office_manager") || roles.includes("employee")) && (
                                <>
                                    {permission.includes("YANGI QO'SHISH") ? (
                                        <li className="nav-item " style={{fontSize: '18px'}}>
                                            <Link to="/kiruvchi" className="nav-link liHover">
                                                <i className="icon-file-check" style={{color: "#0056B8"}}/>
                                                <span>Kiruvchi</span>
                                            </Link>
                                        </li>
                                    ) : (
                                        <>
                                            {(!(permission.includes("YANGI QO'SHISH")) && permission.includes("YANGI")) ? (
                                                <li className="nav-item " style={{fontSize: '18px'}}>
                                                    <Link to="/kiruvchi/yangi" className="nav-link liHover">
                                                        <i className="icon-file-check" style={{color: "#0056B8"}}/>
                                                        <span>Kiruvchi</span>
                                                    </Link>
                                                </li>
                                            ) : (
                                                <>
                                                    {((!permission.includes("YANGI QO'SHISH") && !permission.includes("YANGI")) && (ranks.includes(1) || ranks.includes(2) || ranks.includes(3) || ranks.includes(4) || ranks.includes(8))) ? (
                                                        <li className="nav-item " style={{fontSize: '18px'}}>
                                                            <Link to="/kiruvchi/resolution"
                                                                  className="nav-link liHover">
                                                                <i className="icon-file-check"
                                                                   style={{color: "#0056B8"}}/>
                                                                <span>Kiruvchi</span>
                                                            </Link>
                                                        </li>
                                                    ) : (
                                                        <li className="nav-item" style={{fontSize: '18px'}}>
                                                            <Link to="/kiruvchi/bajarish" className="nav-link liHover">
                                                                <i className="icon-file-check"
                                                                   style={{color: "#0056B8"}}/>
                                                                <span>Kiruvchi</span>
                                                            </Link>
                                                        </li>
                                                    )}
                                                </>
                                            )}
                                        </>
                                    )}
                                </>
                            )}
                            {(roles.includes("boss_1") || roles.includes("boss_2") || roles.includes("boss_3") || roles.includes("chief_of_group") || roles.includes("controller") || roles.includes("head_of_department") || roles.includes("human_resources") || roles.includes("office_manager") || roles.includes("employee")) && (
                                <li className="nav-item " style={{fontSize: '18px'}}>
                                    <Link to="/qidirish" className="nav-link liHover">
                                        <i className="fas fa-search" style={{color: "#0056B8"}}/>
                                        <span>Keng qidirish</span>
                                    </Link>
                                </li>
                            )}
                            <li className="nav-item " style={{display: "none"}}>
                                <Link to="/fuqaro/murojati" className="nav-link liHover" style={{fontSize: '18px'}}>
                                    <i className="icon-magazine" style={{color: "#0056B8"}}/>
                                    <span>Fuqaro Murojatlari</span>
                                </Link>
                            </li>
                            <li className="nav-item" style={{display: "none"}}>
                                <Link to="/arxiv" className="nav-link liHover" style={{fontSize: '18px'}}>
                                    <i className="fas fa-archive"/>
                                    <span>Arxiv</span>
                                </Link>
                            </li>
                            {roles.includes("office_manager") && (
                                <li className="nav-item ">
                                    <Link to="/office_manager/mavjud/paketlar" className="nav-link liHover"
                                          style={{fontSize: '18px'}}>
                                        <i className="icon-cog" style={{color: "#0056B8"}}/>
                                        <span>Sozlamalar</span>
                                    </Link>
                                </li>
                            )}
                            {/*{roles.includes("office_manager") && (
                                <li className="nav-item ">
                                    <Link to="/office_manager/mavjud/paketlar" className="nav-link liHover" style={{ fontSize:'18px' }}>
                                        <i className="icon-cog" style={{ color: "#0056B8" }} />
                                        <span>Mavjud paketlar</span>
                                    </Link>
                                </li>
                            )}
                            {roles.includes("office_manager") && (
                                <li className="nav-item ">
                                    <Link to="/office_manager/mavjud/tashkilotlar" className="nav-link liHover" style={{ fontSize:'18px' }}>
                                        <i className="icon-cog" style={{ color: "#0056B8" }} />
                                        <span>Mavjud tashkilotlar</span>
                                    </Link>
                                </li>
                            )}*/}
                            {/* {(roles.includes("boss_1") || roles.includes("boss_2") || roles.includes("boss_3") || roles.includes("chief_of_group") || roles.includes("controller") || roles.includes("head_of_department") || roles.includes("human_resources") || roles.includes("office_manager") || roles.includes("employee")) && (
                                <li className="nav-item" style={{ display:'none' }}>
                                    <Link to="/chiquvchi" className="nav-link">
                                        <i className="icon-file-download"></i>
                                        <span>Chiquvchi</span>
                                    </Link>
                                </li>
                            )} */}
                            <li className="nav-item " style={{display: "none"}}>
                                <Link to="/sozlamalarAdmin" className="nav-link liHover">
                                    <i className="fas fa-user-cog" style={{color: "#0056B8"}}/>
                                    <span>SozlamalarAdmin</span>
                                </Link>
                            </li>
                            {(roles.includes("human_resources")) && (
                                <li className="nav-item">
                                    <Link to="/kadrlar" className="nav-link liHover">
                                        <i className="icon-users"/>
                                        <span>Kadrlar bo'limi</span>
                                    </Link>
                                </li>
                            )}
                            <li className="nav-item" style={{display: "none"}}>
                                <Link to="/shablonlar" className="nav-link liHover">
                                    <i className="fas fa-sitemap"/>
                                    <span>Shablonlar</span>
                                </Link>
                            </li>
                            <li className="nav-item liHover" style={{display: "none"}}>
                                <Link to="/umumiyMalumotlar" className="nav-link">
                                    <i className="icon-books" style={{color: "#0056B8"}}/>
                                    <span>Umumiy Ma'lumotlar</span>
                                </Link>
                            </li>
                            <li className="nav-item" style={{display: "none"}}>
                                <Link to="/jurnallar_faollar" className="nav-link">
                                    <i className="icon-newspaper" style={{color: "#0056B8"}}/>
                                    <span>Jurnallar</span>
                                </Link>
                            </li>
                            <li className="nav-item liHover" style={{display: "none"}}>
                                <Link to="/umumiySozlamalar" className="nav-link">
                                    <i className="fas fa-users-cog" style={{color: "#0056B8"}}/>
                                    <span>Umumiy Sozlamalar</span>
                                </Link>
                            </li>
                            {(roles.includes("boss_1") || roles.includes("boss_2") || roles.includes("boss_3") || roles.includes("controller") || roles.includes("head_of_department") || roles.includes("office_manager")) && (
                                <>
                                    <li className="nav-item " style={{fontSize: '18px'}}>
                                        <Link to="/monitoring" className="nav-link liHover">
                                            <i className="icon-pie-chart5" style={{color: "#0056B8"}}/>
                                            <span>Monitoring</span>
                                        </Link>
                                    </li>
                                </>
                            )}

                            {/* boss1, boss2, boss3, chief_group, controller, employee, head_department, human_resources, office_manager, security,  sidebar */}
                            <li className="nav-item" style={{display: "none"}}>
                                <div className="nav-link">
                                    <i className="icon-home4"/>
                                    <span>Ish stoli</span>
                                </div>
                            </li>
                            <li className="nav-item" style={{display: "none"}}>
                                <div className="nav-link">
                                    <i className="icon-home4"/>
                                    <span>Pochta</span>
                                </div>
                            </li>
                            <li className="nav-item nav-item-submenu" style={{display: "none"}}>
                                <div className="nav-link">
                                    <i className="icon-home4"/>
                                    <span>Hujjatlar</span>
                                </div>
                                <ul className="nav nav-group-sub">
                                    <li className="nav-item">
                                        <a href={"index.html"} className="nav-link">Kiruvchi</a>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            Chiquvchi
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            Fuqaro murojaati
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item nav-item-submenu" style={{display: "none"}}>
                                <div className="nav-link">
                                    <i className="icon-home4"/>
                                    <span>Ichki</span>
                                </div>
                                <ul className="nav nav-group-sub">
                                    <li className="nav-item">
                                        <a href={"index.html"} className="nav-link">Qaror</a>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            Farmoyish
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            Buyruqlar
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            Chora tadbirlar
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            Bayonnomalar
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            Bildirishnomalar
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            Xizmat xati
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            Dalolatnoma
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            Topshiriqlar
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item nav-item-submenu" style={{display: "none"}}>
                                <div className="nav-link">
                                    <i className="icon-home4"/>
                                    <span>Qo'shimcha</span>
                                </div>
                                <ul className="nav nav-group-sub">
                                    <li className="nav-item">
                                        <a href={"index.html"} className="nav-link">Keng qidirish</a>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            Arxiv
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            Ichki guruh
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item nav-item-submenu" style={{display: "none"}}>
                                <div className="nav-link">
                                    <i className="icon-home4"/>
                                    <span>Monitoring</span>
                                </div>
                                <ul className="nav nav-group-sub">
                                    <li className="nav-item">
                                        <a href={"index.html"} className="nav-link">Hisobotlar</a>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            Statistika
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item nav-item-submenu" style={{display: "none"}}>
                                <div className="nav-link">
                                    <i className="icon-home4"/>
                                    <span>Xabarnoma</span>
                                </div>
                                <ul className="nav nav-group-sub">
                                    <li className="nav-item">
                                        <a href={"index.html"} className="nav-link">Online chat</a>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            E'lon xabarnomasi
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item nav-item-submenu" style={{display: "none"}}>
                                <div className="nav-link">
                                    <i className="icon-home4"/>
                                    <span>Keldi ketdi</span>
                                </div>
                                <ul className="nav nav-group-sub">
                                    <li className="nav-item">
                                        <a href={"index.html"} className="nav-link">Xodimlar</a>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            Telefon kitobi
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item nav-item-submenu" style={{display: "none"}}>
                                <div className="nav-link">
                                    <i className="icon-home4"/>
                                    <span>Qabul</span>
                                </div>
                                <ul className="nav nav-group-sub">
                                    <li className="nav-item">
                                        <a href={"index.html"} className="nav-link">Rahbar qabuli</a>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            Xodimlar qabuli
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            Fuqarolar qabuli
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="border-top-primary">
                        <div className="btn-group position-static">
                            <button type="button" className=" faq btn-primary p-0" data-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{fontSize: '30px', borderRadius: '50%', width: '50px', height: '50px'}}>
                                {/*<i className="icon-cog5 mr-2"></i> */}
                                +
                            </button>
                            <div className="dropdown-menu dropdown-menu-left">
                                <a href="#" className="dropdown-item"><i className="icon-menu7"></i> Action</a>
                                <a href="#" className="dropdown-item"><i className="icon-screen-full"></i> Another
                                    action</a>
                                <a href="#" className="dropdown-item"><i className="icon-mail5"></i> One more action</a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item"><i className="icon-gear"></i> Separated
                                    line</a>
                            </div>
                        </div>
                    </div>

                    {/*<Link to={'/FAQ'}>*/}
                    {/*    <div className="faq">*/}
                    {/*        <i className="fa fa-question-circle" style={{color: "#0056B8"}}/>*/}
                    {/*    </div>*/}
                    {/*</Link>*/}

                </div>
            </div>
            {updateModal && (
                <div className='adminWindow1'>
                    <div className='adminWindow1Wrapper adminWindow1Wrapper1'>
                        <div className="modal-dialog modal-xl customDialog">
                            <div className="modal-content" style={{
                                boxShadow: '0 .5rem 1rem rgba(0,0,0,.5)',
                                borderRadius: 30
                            }}>
                                <div className="modal-header bg-primary "
                                     style={{color: "#fff", borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
                                    <h5 className="modal-title">Foydalanuvchi sozlamalari</h5>
                                    <button type="button" className="close" onClick={() => setUpdateModal(false)}>×
                                    </button>
                                </div>
                                <form onSubmit={saveUser}>
                                    <div className="modal-body" style={{
                                        overflowY: "scroll"
                                    }}>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="form-group form-group-floating row">
                                                        <div className="col-lg-9">
                                                            <div className="position-relative">
                                                                <input
                                                                    type="text"
                                                                    style={{textTransform: "capitalize"}}
                                                                    className="form-control form-control-outline fio"
                                                                    placeholder="Placeholder"
                                                                    disabled={true}
                                                                    defaultValue={userData?.firstName + ' ' + userData?.lastName + ' ' + userData?.middleName}
                                                                />
                                                                <label className="label-floating">FIO</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            {file ? (
                                                                <img src={URL.createObjectURL(file)} alt=""
                                                                     className='imgSettings'/>
                                                            ) : (
                                                                <img src={url + "/api/file/view/" + userData?.file?.id}
                                                                     alt="" className='imgSettings'/>
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
                                                                    disabled={true}
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
                                                                    style={{textTransform: "capitalize"}}
                                                                    data-mask="+998 (99) 999-99-99"
                                                                    className="form-control form-control-outline telefon"
                                                                    placeholder="Placeholder"
                                                                    defaultValue={userData?.mobileNumber}
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
                                                <div className="form-group form-group-floating row mb-0">
                                                    <div className="col-lg-12 w-100">
                                                        <label className="custom-file text-muted w-100"
                                                               htmlFor={'select'}>
                                                            <div className={'custom-file-label'}>
                                                                {fileType ? file?.name : "Foydalanuvchi rasmi"}
                                                            </div>
                                                        </label>
                                                        <input
                                                            type="file"
                                                            id={'select'}
                                                            className="custom-file-input avatar d-none w-100"
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