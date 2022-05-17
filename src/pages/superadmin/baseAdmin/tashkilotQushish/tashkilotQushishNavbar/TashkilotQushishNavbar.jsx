import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminQushishNavbar() {
    return (
        <>
            <li className="nav-item" >
                {/* <a href="#" className="nav-link" activeClassName='NavLinkLi'>
                    Tashkilotlar
                </a> */}
                <NavLink exact to="/super_base_admin_tashkilot-qushish" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-plus2 mr-1"></i> Tashkilotlar
                </NavLink>
                {/* <a href="./deteilHokimlik.html" className="nav-link  ml-2" >
        <i className="icon-office"></i> Tashkilot tuzulishi
    </a> */}
            </li>
            <li className="nav-item">
                {/* <a href="#" className="nav-link" activeClassName='NavLinkLi'>
                    Sozlamalar
                </a> */}
                {/* <NavLink to="/super_base_admin_sozlamalar" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-office"></i> Sozlamalar
                </NavLink> */}
                {/* <a href="./deteilHokimlik.html" className="nav-link  ml-2" >
        <i className="icon-user-tie"></i> Tashkilot tuzulishi
    </a> */}
            </li>
        </>
    )
}