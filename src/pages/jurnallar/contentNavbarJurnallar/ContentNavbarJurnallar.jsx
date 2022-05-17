import React from "react";
import { NavLink } from 'react-router-dom';

export default function ContentNavbarJurnallar() {
    return (
        <>
            <li className="nav-item" style={{ marginLeft: "20px" }}>
                <NavLink to="/jurnallar_yangi-qo'shish" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
                    <i className="icon-plus2 mr-1"></i> Yangi Qo'shish
                </NavLink>
            </li>
            {/* <li className="nav-item">
                <NavLink exact to="/jurnallar" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
                    <i className="icon-user-tie mr-1"></i> Barchasi
                </NavLink>
            </li> */}
            <li className="nav-item">
                <NavLink exact to="/jurnallar_faollar" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
                    <i className="icon-stack2 mr-1"></i> Faollar
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/jurnallar_arxiv" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
                    <i className="icon-newspaper mr-1"></i> Arxivdan
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/jurnallar/yopilgan-jurnallar" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
                    <i className="icon-newspaper mr-1"></i> Yopilgan jurnallar
                </NavLink>
            </li>
        </>
    )
}