import React from 'react';
import './baseAdminNavbar.css';
import { Link } from 'react-router-dom';

export default function BaseAdminNavbarTop() {

    return (
        <div className="navbar navbar-expand-lg navbar-white bg-white navbar-static shadow  bg-body rounded"
            style={{ backgroundColor: "#fff" }}>
            <div className="d-flex flex-1 d-lg-none">
                <button className="navbar-toggler sidebar-mobile-main-toggle" type="button">
                    <i className="icon-paragraph-justify3"></i>
                </button>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{ width: "50px" }}>
                <i className="icon-menu7" style={{ fontSize: "21px" }}></i>
            </div>
            <div className="navbar-brand text-center d-flex justify-content-center align-items-center"
                style={{ borderRight: "4px solid #EEEded" }}>
                <Link to="/super_base_admin">
                    <img src="/style/images/d-doc.png" style={{ width: "150px", height: "auto" }} alt="" />
                </Link>
                {/* <a href="./index.html">
                <img src="/style/images/d-doc.png" style={{ width: "150px", height: "auto" }} alt="" />
            </a> */}
            </div>
            <div className="row">
                <div className="navbar-brand d-flex justify-content-between align-items-center">
                    {/* <!-- <div className="col-lg-12"> --> */}
                    <div className="col-lg-1 ml-3">
                        <img src="/style/images/gerb.svg" style={{ width: "100%", height: "60px" }} alt="" />
                    </div>
                    <div className="col-lg-11 d-flex justify-content-evenly align-items-center text-left">
                        <h6 className="text-wrap">Бухоро вилоят ҳокимлиги ҳузуридаги "Ахборот-коммуникация технологияларини
                            ривожлантириш маркази" ДУК</h6>
                    </div>
                    {/* <!-- </div> --> */}
                </div>
            </div>

            <div className="d-flex justify-content-end align-items-center flex-1 flex-lg-6 order-1 order-lg-2">
                <ul className="navbar-nav flex-row">
                    <li className="nav-item">
                        <div className="navbar-nav-link text-dark" style={{ fontWeight: "bold" }}>
                            <i className="icon-bell2"></i>
                            <span className="badge badge-danger badge-pill">5</span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="navbar-nav-link navbar-nav-link-toggler text-dark" style={{ fontWeight: "bold" }}>
                            Chiqish<i className="icon-switch2" style={{ marginLeft: "5px" }}></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}