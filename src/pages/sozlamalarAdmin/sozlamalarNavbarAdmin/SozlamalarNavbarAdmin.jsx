import React from "react";
import { NavLink } from 'react-router-dom';

export default function SozlamalarNavbarAdmin() {
    return (
        <>
            <li className="nav-item" style={{ marginLeft: "30px" }}>
                <NavLink to="/sozlamalarAdmin" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
                    <i className="icon-stack2 mr-1"></i> Bo'lim
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to="/sozlamalarAdmin_lavozim" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
                    <i className="icon-user-tie mr-1"></i> Lavozim
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/sozlamalarAdmin_foydalanuvchi" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
                    <i className="icon-user mr-1"></i> Foydalanuvchi
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/sozlamalarAdmin_ish-stoli" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
                    <i className="icon-laptop mr-1"></i> Ish Stoli
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/sozlamalarAdmin_fishka" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
                    <i className="icon-laptop mr-1"></i> Fishka
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/sozlamalarAdmin_asosiy-banner" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
                    <i className="icon-laptop mr-1"></i> Asosiy Banner
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/sozlamalarAdmin_qaror-banner" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
                    <i className="icon-laptop mr-1"></i> Buyruq Banner
                </NavLink>
            </li>
            {/* <li className="nav-item">
                <NavLink to="/sozlamalarAdmin_OTM" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
                    <i className="icon-laptop mr-1"></i> OTM
                </NavLink>
            </li> */}
        </>
    )
}