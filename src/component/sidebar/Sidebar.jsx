import React, { useContext } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {

    return (
        <div className="sidebar sidebar-light sidebar-main sidebar-expand-lg sidebar-main-resized">
            <div className="sidebar-content">
                <div className="sidebar-section">
                    <div className="sidebar-user-material">
                        <div className="sidebar-section-body">
                            <div className="d-flex">
                                <div className="flex-1">
                                    {/* <!-- <button type="button" className="btn btn-outline-light border-transparent btn-icon btn-sm rounded-pill">
                                    <i className="icon-wrench"></i>
                                </button> --> */}
                                </div>
                                <span className="flex-1 text-center">
                                    <img src="/style/images/demo/users/face6.jpg"
                                        className="img-fluid rounded-circle shadow-sm" width="80" height="80" alt="" />
                                </span>
                                <div className="flex-1 text-right">
                                    <button type="button"
                                        className="btn btn-outline-light border-transparent btn-icon rounded-pill btn-sm sidebar-control sidebar-main-resize d-none d-lg-inline-flex">
                                        <i className="icon-transmission"></i>
                                    </button>

                                    <button type="button"
                                        className="btn btn-outline-light border-transparent btn-icon rounded-pill btn-sm sidebar-mobile-main-toggle d-lg-none">
                                        <i className="icon-cross2"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="text-center">
                                <h6 className="mb-0 text-white text-shadow-dark mt-3">Sobir Bobojonov</h6>
                            </div>
                        </div>

                        <div className="sidebar-user-material-footer">
                            <a href="#user-nav"
                                className="d-flex justify-content-between align-items-center text-shadow-dark dropdown-toggle"
                                data-toggle="collapse"><span> Sozlamalar</span></a>
                        </div>
                    </div>

                    <div className="collapse border-bottom" id="user-nav">
                        <ul className="nav nav-sidebar">
                            <li className="nav-item">
                                <div className="nav-link">
                                    <i className="icon-cog5"></i>
                                    <span>Account settings</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* <div className="collapse border-bottom" id="user-nav">
                        <ul className="nav nav-sidebar">
                            <li className="nav-item">
                                <a href="./sozlamalar/sozlamalr.html" className="nav-link">
                                    <i className="icon-cog5"></i>
                                    <span>Mening Sozlamalarim</span>
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </div>

                <div className="sidebar-section">
                    <ul className="nav nav-sidebar" style={{ paddingBottom: "90px" }} data-nav-type="accordion">
                        <li className="nav-item-header">
                            <div className="text-uppercase font-size-xs line-height-xs mt-1">Dashboard</div> <i
                                className="icon-menu" title="Main"></i>
                        </li>
                        <li className="nav-item">
                            <Link to="/asosiy" className="nav-link">
                                <i className="icon-home4"></i>
                                <span>Bosh Sahifa</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/kiruvchi" className="nav-link">
                                <i className="icon-file-download"></i>
                                <span>Kiruvchi</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/qidirish" className="nav-link">
                                <i className="fas fa-search"></i>
                                <span>Keng Qidirish</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/fuqaro/murojati" className="nav-link">
                                <i className="icon-magazine"></i>
                                <span>Fuqaro Murojatlari</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/arxiv" className="nav-link">
                                <i className="fas fa-archive"></i>
                                <span>Arxiv</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sozlamalar" className="nav-link">
                                <i className="icon-cog"></i>
                                <span>Sozlamalar</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sozlamalarAdmin" className="nav-link">
                                <i className="fas fa-user-cog"></i>
                                <span>SozlamalarAdmin</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/kadrlar" className="nav-link">
                                <i className="icon-users"></i>
                                <span>Kadrlar bo'limi</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/shablonlar" className="nav-link">
                                <i className="fas fa-sitemap"></i>
                                <span>Shablonlar</span>
                            </Link>
                        </li>
                        {/* <!-- admin saidebar --> */}
                        <li className="nav-item">
                            <Link to="/umumiyMalumotlar" className="nav-link">
                                <i className="icon-books"></i>
                                <span>Umumiy Ma'lumotlar</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/jurnallar_faollar" className="nav-link">
                                <i className="icon-newspaper"></i>
                                <span>Jurnallar</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/umumiySozlamalar" className="nav-link">
                                <i className="fas fa-users-cog"></i>
                                <span>Umumiy Sozlamalar</span>
                            </Link>
                        </li>
                        {/* <!-- and admin sidebar --> */}
                        <li className="nav-item">
                            <Link to="/monitoring" className="nav-link">
                                <i className="fas fa-chart-pie"></i>
                                <span>Monitoring</span>
                            </Link>
                        </li>   <li className="nav-item">
                            <Link to="/monitoring" className="nav-link">
                                <i className="fas fa-chart-pie"></i>
                                <span>Monitoring</span>
                            </Link>
                        </li>   <li className="nav-item">
                            <Link to="/monitoring" className="nav-link">
                                <i className="fas fa-chart-pie"></i>
                                <span>Monitoring</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}