import React from "react";
import { NavLink } from "react-router-dom";

export default function MurojaatNavbar() {
    return (
        <>
            <li className="nav-item" style={{marginLeft: "30px"}}>
                <NavLink to="/super_base_admin_murojaat" className="nav-link" activeClassName='NavLinkLi'>
                    {/* <i className="icon-plus2 mr-1"></i> */}
                    Yo'nalishlar
                </NavLink>
                {/* <a href="#" className="nav-link" activeClassName='NavLinkLi'>
                    Yo'nalishlar
                </a> */}
            </li>
            <li className="nav-item" >
                {/* <a href="#" className="nav-link" activeClassName='NavLinkLi'>
                    Murojaat savollari
                </a> */}
                <NavLink exact to="/super_base_admin_fuqaro-savollari" className="nav-link" activeClassName='NavLinkLi'>
                    Murojaat savollari
                </NavLink>
                {/* <a href="./deteilHokimlik.html" className="nav-link  ml-2" >
            <i className="icon-office"></i> Tashkilot tuzulishi
        </a> */}
            </li>
            <li className="nav-item">
                {/* <a href="#" className="nav-link" activeClassName='NavLinkLi'>
                    Murojaat javoblari
                </a> */}
                <NavLink to="/super_base_admin_fuqaro-javoblari" className="nav-link" activeClassName='NavLinkLi'>
                    {/* <i className="icon-office"></i>  */}
                    Murojaat javoblari
                </NavLink>
                {/* <a href="./deteilHokimlik.html" className="nav-link  ml-2" >
            <i className="icon-user-tie"></i> Tashkilot tuzulishi
        </a> */}
            </li>
        </>
    )
}