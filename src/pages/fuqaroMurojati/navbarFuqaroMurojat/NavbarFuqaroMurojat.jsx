import React from "react";
import { NavLink } from 'react-router-dom';

export default function NavbarFuqaroMurojat() {
    return (
        <>
            <li className="nav-item" style={{marginLeft: "20px"}}>
                <NavLink exact to="/fuqaro/murojati" activeClassName="NavLinkLi" className="nav-link d-flex align-items-center">
                    <i className="icon-plus2 mr-1"></i> Yangi Qo'shish
                </NavLink>
                {/* <a href="./yangi.html" class="nav-link NavLinkLi ml-1" >
                    </a> */}
            </li>
            <li className="nav-item">
                <NavLink to="/fuqaro/murojati/yangi" activeClassName="NavLinkLi" className="nav-link d-flex align-items-center">
                    <i className="icon-newspaper mr-1"></i> Yangi
                </NavLink>
                {/* <a href="./ynagii.html" class="nav-link" ><i class="icon-newspaper"></i> Yangi
                </a> */}
            </li>
            <li className="nav-item">
                <NavLink to="/fuqaro/murojati/xomaki" activeClassName="NavLinkLi" className="nav-link d-flex align-items-center">
                    <i className="icon-newspaper mr-1"></i> Xomaki
                </NavLink>
                {/* <a href="./xomaki.html" class="nav-link "><i class="icon-newspaper"></i> Xomaki
                </a> */}
            </li>
            <li className="nav-item">
                <NavLink to="/fuqaro/murojati/rezalutsiya" activeClassName="NavLinkLi" className="nav-link d-flex align-items-center">
                    <i className="icon-user-plus mr-1"></i> Rezalutsiya
                </NavLink>
                {/* <a href="./reazalutsiya.html" class="nav-link"><i class="icon-user-plus"></i> Rezalutsiya
                </a> */}
            </li>
            <li className="nav-item">
                <NavLink to="/fuqaro/murojati/bajarish" activeClassName="NavLinkLi" className="nav-link d-flex align-items-center">
                    <i className="icon-pen mr-1"></i> Bajarish Uchun
                </NavLink>
                {/* <a href="./bararishUn.html" class="nav-link"><i class="icon-pen"></i> Bajarish Uchun
                </a> */}
            </li>
            <li className="nav-item">
                <NavLink to="/fuqaro/murojati/nazorat" activeClassName="NavLinkLi" className="nav-link d-flex align-items-center">
                    <i className="icon-laptop mr-1"></i> Nazoratda
                </NavLink>
                {/* <a href="./nazoratda.html" class="nav-link"><i class="icon-laptop"></i> Nazoratda
                </a> */}
            </li>
            <li className="nav-item">
                <NavLink to="/fuqaro/murojati/kechiktirilgan" activeClassName="NavLinkLi" className="nav-link d-flex align-items-center">
                    <i className="icon-calendar mr-1"></i> Kechiktirilgan
                </NavLink>
                {/* <a href="./kechiktirilgan.html" class="nav-link"><i class="icon-calendar"></i> Kechiktirilgan
                </a> */}
            </li>
            <li className="nav-item">
                <NavLink to="/fuqaro/murojati/bajarilgan" activeClassName="NavLinkLi" className="nav-link d-flex align-items-center">
                    <i className="icon-check mr-1"></i> Bajarilgan
                </NavLink>
                {/* <a href="./bajarilgan.html" class="nav-link"><i class="icon-check"></i>  Bajarilgan
                </a> */}
            </li>
            <li className="nav-item">
                <NavLink to="/fuqaro/murojati/yuborilgan" activeClassName="NavLinkLi" className="nav-link d-flex align-items-center">
                    <i className="icon-file-upload mr-1"></i> Yuborilgan
                </NavLink>
                {/* <a href="./yuborilgan.html" class="nav-link"><i class="icon-file-upload"></i>  Yuborilgan
                </a> */}
            </li>
            <li className="nav-item">
                <NavLink to="/fuqaro/murojati/nazoratdan-olish" activeClassName="NavLinkLi" className="nav-link d-flex align-items-center">
                    <i className="icon-user-check mr-1"></i> Nazoratdan Olish
                </NavLink>
                {/* <a href="./nazoratdanOlish.html" class="nav-link"><i class="icon-user-check"></i> Nazoratdan Olish
                </a> */}
            </li>
        </>
    )
}