import React from "react";
import { NavLink } from 'react-router-dom';

export default function HududNavbar() {
    return (
        <>
            {/* <li className="nav-item" style={{marginLeft: "30px"}} >
                <NavLink to="/super_base_admin_hudud-viloyatlar" className="nav-link" activeClassName='NavLinkLi'>
                    Viloyatlar
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/super_base_admin_hudud-shahar-tuman" className="nav-link" activeClassName='NavLinkLi'>
                    Shahar va tumanlar
                </NavLink>
            </li> */}
            <li className="nav-item" style={{marginLeft: "30px"}}>
                <NavLink exact to="/super_base_admin_hudud" className="nav-link" activeClassName='NavLinkLi'>
                    Mahallalar
                </NavLink>
                {/* <a href="#" className="nav-link" activeClassName='NavLinkLi'>
                    Mahallalar
                </a> */}
            </li>
        </>
    )
}