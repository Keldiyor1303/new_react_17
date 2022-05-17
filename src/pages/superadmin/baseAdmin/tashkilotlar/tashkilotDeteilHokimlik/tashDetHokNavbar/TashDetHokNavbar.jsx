import React from "react";
import { NavLink } from "react-router-dom";

export default function TashDetHokNavbar() {
    return (
        <>
            <li className="nav-item">
                <NavLink exact to="/super_base_admin_tashkilot-tuzilishi" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-plus2 mr-1"></i> Tashkilot tuzulishi
                </NavLink>
                {/* <a href="./deteilHokimlik.html" className="nav-link  ml-2" >
            <i className="icon-office"></i> Tashkilot tuzulishi
        </a> */}
            </li>
            <li className="nav-item">
                <NavLink to="/super_base_admin-administrator" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-office"></i> Administrator
                </NavLink>
                {/* <a href="./deteilHokimlik.html" className="nav-link  ml-2" >
            <i className="icon-user-tie"></i> Tashkilot tuzulishi
        </a> */}
            </li>
            <li className="nav-item">
                <NavLink to="/super_base_admin-modullar" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-stack2"></i> Modullar Sozlamasi
                </NavLink>
                {/* <a href="./deteilHokimlik.html" className="nav-link  ml-2" >
            <i className="icon-office"></i> Tashkilot tuzulishi
        </a> */}
            </li>
            <li className="nav-item">
                {/* <NavLink to="/super_base_admin-modullar1" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-newspaper"></i> Kiritish Ma'lumotlari
                </NavLink> */}
                <a href="#" className="nav-link ml-2 nav-link" activeClassName='NavLinkLi' >
                    <i className="icon-office"></i> Kiritish Ma'lumotlari
                </a>
            </li>
            {/* 
             <li class="nav-item"><a href="./deteilHokimlik.html" class="nav-link NavLinkLi ml-2" ><i class="icon-office"></i> Tashkilot tuzulishi</a></li>
                    <li class="nav-item"><a href="./adminstartor.html" class="nav-link "><i class="icon-user-tie"></i> Adminstartor</a></li>
                    <li class="nav-item"><a href="" class="nav-link "><i class="icon-stack2"></i> Modullar Sozlamasi</a></li>
                    <li class="nav-item"><a href="" class="nav-link "><i class="icon-newspaper"></i> Kiritish Ma'lumotlari</a></li>

             */}
        </>

    )
}