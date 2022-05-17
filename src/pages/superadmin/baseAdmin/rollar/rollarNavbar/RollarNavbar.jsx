import React from 'react';
import { NavLink } from 'react-router-dom';

export default function RollarNavbar() {
    return (
        <>
            <li className="nav-item" >
                {/* <a href="#" className="nav-link" activeClassName='NavLinkLi'>
                    Tashkilot rollari
                </a> */}
                <NavLink exact to="/super_base_admin_rollar" className="nav-link" activeClassName='NavLinkLi'>
                    Tashkilot rollari
                </NavLink>
                {/* <a href="./deteilHokimlik.html" className="nav-link  ml-2" >
            <i className="icon-office"></i> Tashkilot tuzulishi
        </a> */}
            </li>
            <li className="nav-item">
                {/* <a href="#" className="nav-link" activeClassName='NavLinkLi'>
                    Xodim rollari
                </a> */}
                <NavLink to="/super_base_admin_xodim-rollari" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-office"></i> Xodim rollari
                </NavLink>
                {/* <a href="./deteilHokimlik.html" className="nav-link  ml-2" >
            <i className="icon-user-tie"></i> Tashkilot tuzulishi
        </a> */}
            </li>
            <li className="nav-item">
                {/* <a href="#" className="nav-link" activeClassName='NavLinkLi'>
                    Boshqa rollari
                </a> */}
                <NavLink exact to="/super_base_admin_boshqa-rollar" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-stack2"></i> Boshqa rollar
                </NavLink>
                {/* <a href="./deteilHokimlik.html" className="nav-link  ml-2" >
            <i className="icon-office"></i> Tashkilot tuzulishi
        </a> */}
            </li>
            <li className="nav-item">
                {/* <NavLink to="/super_base_admin-modullar1" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-newspaper"></i> Kiritish Ma'lumotlari
                </NavLink> */}
                {/* <a href="./deteilHokimlik.html" className="nav-link  ml-2" >
            <i className="icon-office"></i> Tashkilot tuzulishi
        </a> */}
            </li>
        </>
    )
}