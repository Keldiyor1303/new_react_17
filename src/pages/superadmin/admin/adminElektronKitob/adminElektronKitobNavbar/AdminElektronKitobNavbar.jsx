import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminElektronKitobNavbar() {
    return (
        <>
            <li className="nav-item" style={{ marginLeft: "25px" }}>
                <NavLink exact to="/super_admin_elektron-kitob" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
                    <i className="icon-plus2 mr-1"></i> Yangi Qo'shish
                </NavLink>
                {/* <a href="./yangiqoshish.html" className="nav-link  ml-2d-flex align-items-center">
            <i className="icon-plus2 mr-1"></i> Yangi Qo'shish
        </a> */}
            </li>
            <li className="nav-item">
                <NavLink to="/super_admin_elektron-kitob-faollar" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
                    <i className="icon-stack2 mr-1"></i> Faollar
                </NavLink>
                {/* <a href="./faollar.html" className="nav-link d-flex align-items-center">
            <i className="icon-stack2 mr-1"></i>Faollar
        </a> */}
            </li>
            <li className="nav-item">
                <NavLink to="/super_admin_elektron-kitob-arxiv" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
                    <i className="icon-newspaper mr-1"></i> Arxivdan
                </NavLink>
                {/* <a href="./arxiv.html" className="nav-link d-flex align-items-center">
            <i className="icon-newspaper mr-1"></i>Arxivdan
        </a> */}
            </li>
            {/* <li className="nav-item">
                <NavLink to="/super_admin_elektron-kitob-yopilgan-jurnallar" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
                    <i className="icon-newspaper mr-1"></i> Yopilgan jurnallar
                </NavLink>
            </li> */}
        </>
    )
}