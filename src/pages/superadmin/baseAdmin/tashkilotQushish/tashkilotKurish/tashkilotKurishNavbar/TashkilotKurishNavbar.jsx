import React from "react";
import { NavLink } from "react-router-dom";

export default function TashkilotKurishNavbar({ params }) {
    return (
        <>
            <li className="nav-item" style={{ marginLeft: "30px" }}>
                <NavLink exact to={`/super_base_admin_tashkilotlar-tuzilishi/${params}`} className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-plus2 mr-1"></i> Tashkilot tuzulishi
                </NavLink>
                {/* <a href="./deteilHokimlik.html" className="nav-link  ml-2" activeClassName='NavLinkLi'>
                    <i className="icon-office"></i> Tashkilot tuzulishi
                </a> */}
            </li>
            <li className="nav-item">
                <NavLink to={`/super_base_admin-administratsiya/${params}`} className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-office"></i> Administrator
                </NavLink>
                {/* <a href="./deteilHokimlik.html" className="nav-link  ml-2" activeClassName='NavLinkLi'>
                    <i className="icon-user-tie"></i> Administrator
                </a> */}
            </li>
            <li className="nav-item">
                <NavLink to={`/super_base_admin_modul-sozlama/${params}`} className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-stack2"></i> Modullar Sozlamasi
                </NavLink>
                {/* <a href="./deteilHokimlik.html" className="nav-link  ml-2" activeClassName='NavLinkLi'>
                    <i className="icon-office"></i> Modullar sozlamasi
                </a> */}
            </li>
            <li className="nav-item">
                <NavLink to={`/super_base_admin_card-sozlama/${params}`} className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-stack2"></i> Karta Sozlamasi
                </NavLink>
                {/* <a href="./deteilHokimlik.html" className="nav-link  ml-2" activeClassName='NavLinkLi'>
                    <i className="icon-office"></i> Modullar sozlamasi
                </a> */}
            </li>
        </>
    )
}