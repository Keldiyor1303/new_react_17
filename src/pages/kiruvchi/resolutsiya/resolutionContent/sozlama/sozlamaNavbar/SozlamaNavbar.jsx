import React from "react";
import { NavLink } from "react-router-dom";

export default function SozlamaNavbar() {
    return (
        <>
            <li className="nav-item">
                <NavLink to="/kiruvchi" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-plus2 mr-1"></i> Yangi Qo'shish
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/kiruvchi/yangi" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-newspaper mr-1"></i> Yangi
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/kiruvchi/resolution" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-user-plus mr-1"></i> Rezalutsiya
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/kiruvchi/bajarish" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-pen mr-1"></i> Bajarish Uchun
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/kiruvchi/nazorat" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-laptop mr-1"></i> Nazoratda
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/kiruvchi/kechiktirilgan" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-calendar mr-1"></i> Kechiktirilgan
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/kiruvchi/radetilgan" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-stack-cancel mr-1"></i> Rad Etilgan
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/kiruvchi/bajarilgan" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-check mr-1"></i> Bajarilgan
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/kiruvchi/nazoratdanOlish" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-check mr-1"></i> Nazoratdan Olish
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to="/kiruvchi_sozlash" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-check mr-1"></i> Sozlash
                </NavLink>
            </li>
        </>
    )
}