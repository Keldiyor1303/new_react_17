import React from 'react'

export default function ChiefGroup() {
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
                                data-toggle="collapse"><span> Sozlamalar</span>
                            </a>
                        </div>
                    </div>

                    <div className="collapse border-bottom" id="user-nav">
                        <ul className="nav nav-sidebar">
                            <li className="nav-item">
                                <div className="nav-link">
                                    <i className="icon-cog5" />
                                    <span>Account settings</span>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                    <i className="icon-switch2" />
                                    <span>Chiqish</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="sidebar-section">
                    <ul className="nav nav-sidebar" data-nav-type="accordion">
                        <li className="nav-item-header">
                            <div className="text-uppercase font-size-xs line-height-xs mt-1">Dashboard</div> <i
                                className="icon-menu" title="Main"></i>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <i className="icon-home4"></i>
                                <span>Ish stoli</span>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <i className="icon-home4"></i>
                                <span>Pochta</span>
                            </div>
                        </li>
                        <li className="nav-item nav-item-submenu">
                            <div className="nav-link">
                                <i className="icon-home4"></i>
                                <span>Hujjatlar</span>
                            </div>

                            <ul className="nav nav-group-sub">
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Kiruvchi
                                    </div>
                                    {/* <a href="index.html" className="nav-link">Kiruvchi</a> */}
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Chiquvchi
                                    </div>
                                    {/* <a href="#" className="nav-link">Chiquvchi</a> */}
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Fuqaro murojaati
                                    </div>
                                    {/* <a href="#" className="nav-link">Fuqaro murojaati</a> */}
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item-submenu">
                            <div className="nav-link">
                                <i className="icon-home4"></i>
                                <span>Ichki</span>
                            </div>

                            <ul className="nav nav-group-sub">
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Qaror
                                    </div>
                                    {/* <a href="index.html" className="nav-link">Qaror</a> */}
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Farmoyish
                                    </div>
                                    {/* <a href="#" className="nav-link">Farmoyish</a> */}
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Buyruqlar
                                    </div>
                                    {/* <a href="#" className="nav-link">Buyruqlar</a> */}
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Chora tadbirlar
                                    </div>
                                    {/* <a href="#" className="nav-link">Chora tadbirlar</a> */}
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Bayonnomalar
                                    </div>
                                    {/* <a href="#" className="nav-link">Bayonnomalar</a> */}
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Bildirishnomalar
                                    </div>
                                    {/* <a href="#" className="nav-link">Bildirishnomalar</a> */}
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Xizmat xati
                                    </div>
                                    {/* <a href="#" className="nav-link">Xizmat xati</a> */}
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Dalolatnoma
                                    </div>
                                    {/* <a href="#" className="nav-link">Dalolatnoma</a> */}
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Topshiriqlar
                                    </div>
                                    {/* <a href="#" className="nav-link">Topshiriqlar</a> */}
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item-submenu">
                            <div className="nav-link">
                                <i className="icon-home4"></i>
                                <span>Qo'shimcha</span>
                            </div>

                            <ul className="nav nav-group-sub">
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Keng qidirish
                                    </div>
                                    {/* <a href="index.html" className="nav-link">Keng qidirish</a> */}
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Arxiv
                                    </div>
                                    {/* <a href="#" className="nav-link">Arxiv</a> */}
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Ichki guruh
                                    </div>
                                    {/* <a href="#" className="nav-link">Ichki guruh</a> */}
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item-submenu">
                            <div className="nav-link">
                                <i className="icon-home4"></i>
                                <span>Monitoring</span>
                            </div>

                            <ul className="nav nav-group-sub">
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Hisobotlar
                                    </div>
                                    {/* <a href="index.html" className="nav-link">Hisobotlar</a> */}
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Statistika
                                    </div>
                                    {/* <a href="#" className="nav-link">Statistika</a> */}
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item-submenu">
                            <div className="nav-link">
                                <i className="icon-home4"></i>
                                <span>Xabarnoma</span>
                            </div>

                            <ul className="nav nav-group-sub">
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Online chat
                                    </div>
                                    {/* <a href="index.html" className="nav-link">Online chat</a> */}
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        E'lon xabarnomasi
                                    </div>
                                    {/* <a href="#" className="nav-link">E'lon xabarnomasi</a> */}
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item-submenu">
                            <div className="nav-link">
                                <i className="icon-home4"></i>
                                <span>Keldi ketdi</span>
                            </div>

                            <ul className="nav nav-group-sub">
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Xodimlar
                                    </div>
                                    {/* <a href="index.html" className="nav-link">Xodimlar</a> */}
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Telefon kitobi
                                    </div>
                                    {/* <a href="#" className="nav-link">Telefon kitobi</a> */}
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item-submenu">
                            <div className="nav-link">
                                <i className="icon-home4"></i>
                                <span>Qabul</span>
                            </div>

                            <ul className="nav nav-group-sub">
                                <li className="nav-item">
                                    <a href="index.html" className="nav-link">Rahbar qabuli</a>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Xodimlar qabuli
                                    </div>
                                    {/* <a href="#" className="nav-link">Xodimlar qabuli</a> */}
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Fuqarolar qabuli
                                    </div>
                                    {/* <a href="#" className="nav-link">Fuqarolar qabuli</a> */}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
