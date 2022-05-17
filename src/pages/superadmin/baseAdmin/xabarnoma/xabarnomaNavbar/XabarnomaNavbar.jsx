import React from "react";

export default function XabarnomaNavbar() {
    return (
        <>
            <li className="nav-item" style={{marginLeft: "30px"}}>
                <a href="#1" className="nav-link" activeClassName='NavLinkLi'>
                    Desktop
                </a>
                {/* <NavLink to="/super_base_admin_tashkilot-tuzilishi" className="nav-link" activeClassName='NavLinkLi'>
                <i className="icon-plus2 mr-1"></i> Tashkilot tuzilishi
            </NavLink> */}
                {/* <a href="./deteilHokimlik.html" className="nav-link  ml-2" >
        <i className="icon-office"></i> Tashkilot tuzulishi
    </a> */}
            </li>
            <li className="nav-item">
                <a href="#1" className="nav-link" activeClassName='NavLinkLi'>
                    Telegram Bot
                </a>
                {/* <NavLink to="/super_base_admin_administrator" className="nav-link" activeClassName='NavLinkLi'>
                <i className="icon-office"></i> Administrator
            </NavLink> */}
                {/* <a href="./deteilHokimlik.html" className="nav-link  ml-2" >
        <i className="icon-user-tie"></i> Tashkilot tuzulishi
    </a> */}
            </li>
            <li className="nav-item">
                <a href="#1" className="nav-link" activeClassName='NavLinkLi'>
                    SMS
                </a>
                {/* <NavLink exact to="/super_base_admin-modullar" className="nav-link" activeClassName='NavLinkLi'>
                <i className="icon-stack2"></i> Modullar Sozlamasi
            </NavLink> */}
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