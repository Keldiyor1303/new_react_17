import React, { useContext, useEffect, useState } from "react";
import './contentNavbar.css';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import jwtDecode from 'jwt-decode';
import { axiosInstance } from "../../../config";

export default function ContentNavbar() {
    const { user: currentUser } = useContext(AuthContext);
    const [workPlace, setWorkPlace] = useState([]);
    const [ranks, setRanks] = useState([]);
    const [permission, setPermission] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        let workPlaces = JSON.parse(jwtDecode(currentUser).workPlaces)
        let arr = [], arr1 = [], arr2 = [];
        workPlaces.forEach((d, i) => {
            if (JSON.parse(localStorage.getItem('ids')) === d.id) {
                d.permissions.forEach((h) => {
                    arr2.push(h?.name);
                })
            }
            d.userRoles.forEach((f, i) => {
                arr.push(f?.systemName);
                arr1.push(f?.rank);
            })
        })
        setWorkPlace(arr);
        setRanks(arr1);
        setPermission(arr2);
    }, []);

    useEffect(async () => {
        await axiosInstance.get("monitoring/personal/" + JSON.parse(localStorage.getItem('ids')), {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        }).then(res => {
            setCount(res.data)
        }).catch(error => {
            console.log(error.response);
        })

    }, []);
    // console.log(workPlace, ranks, permission);

    return (
        <>
            {permission.includes("YANGI QO'SHISH") && (
                <li className="nav-item">
                    <NavLink exact to="/kiruvchi" className="nav-link " activeClassName='NavLinkLi' style={{ marginLeft: "20px" }}>
                        <i className="icon-plus2 mr-1"></i> Yangi Qo'shish
                    </NavLink>
                </li>
            )}
            {permission.includes("YANGI") && (
                <li className="nav-item yangi" style={{ marginLeft: permission.includes("YANGI QO'SHISH") ? "0px" : "30px" }}>
                    <NavLink to="/kiruvchi/yangi" className="nav-link" activeClassName='NavLinkLi'>
                        <i className="icon-newspaper mr-1"></i> Yangi
                    </NavLink>
                    <span className="badge1" style={{ display: count?.yangi === 0 && "none" }}>{count?.yangi}</span>
                </li>
            )}
            {(ranks.includes(1) || ranks.includes(2) || ranks.includes(3) || ranks.includes(4) || ranks.includes(8)) && (
                <li className="nav-item rezalutsiya" style={{ marginLeft: (permission.includes("YANGI QO'SHISH") || permission.includes("YANGI")) ? "0px" : "30px" }}>
                    <NavLink to="/kiruvchi/resolution" className="nav-link" activeClassName='NavLinkLi'>
                        <i className="icon-user-plus mr-1"></i> Rezalutsiya
                    </NavLink>
                    {count?.rezalutsiya !== 0 && (
                        <span className="badge1" >{count?.rezalutsiya}</span>
                    )}
                </li>
            )}
            <li className="nav-item bajarishUchun" style={{ marginLeft: (permission.includes("YANGI QO'SHISH") || permission.includes("YANGI") || (ranks.includes(1) || ranks.includes(2) || ranks.includes(3) || ranks.includes(4) || ranks.includes(8))) ? "0px" : "30px" }}>
                <NavLink to="/kiruvchi/bajarish" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-pen mr-1"></i> Bajarish Uchun
                </NavLink>
                <span className="badge1" style={{ display: count?.bajarishUchun === 0 && "none" }}>{count?.bajarishUchun}</span>
            </li>
            <li className="nav-item nazoratda">
                <NavLink to="/kiruvchi/nazorat" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-laptop mr-1"></i> Nazoratda
                </NavLink>
                <span className="badge1" style={{ display: count?.nazoratda === 0 && "none" }}>{count?.nazoratda}</span>
            </li>
            <li className="nav-item umumlashtiruvchi">
                <NavLink to="/kiruvchi/umumlashtiruvchi" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-laptop mr-1"></i> Umumlashtiruvchi
                </NavLink>
                <span className="badge1" style={{ display: count?.umumlashtiruvchi === 0 && "none" }}>{count?.umumlashtiruvchi}</span>
            </li>
            <li className="nav-item malumotUchun">
                <NavLink to="/kiruvchi/ma'lumot-uchun" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-laptop mr-1"></i> Ma'lumot uchun
                </NavLink>
                <span className="badge1" style={{ display: count?.malumotUchun === 0 && "none" }}>{count?.malumotUchun}</span>
            </li>
            <li className="nav-item bajarilmagan">
                <NavLink to="/kiruvchi/kechiktirilgan" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-calendar mr-1"></i> Bajarilmagan
                </NavLink>
                <span className="badge1" style={{ display: count?.bajarilmagan === 0 && "none" }}>{count?.bajarilmagan}</span>
            </li>
            <li className="nav-item redetilgan">
                <NavLink to="/kiruvchi/radetilgan" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-stack-cancel mr-1"></i> Rad Etilgan
                </NavLink>
                <span className="badge1" style={{ display: count?.radEtilgan === 0 && "none" }}>{count?.radEtilgan}</span>
            </li>
            <li className="nav-item bajarilgan">
                <NavLink to="/kiruvchi/bajarilgan" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-check mr-1"></i> Bajarilgan
                </NavLink>
                <span className="badge1" style={{ display: count?.bajarilgan === 0 && "none" }}>{count?.bajarilgan}</span>
            </li>
            {permission.includes("NAZORATDAN OLISH") && (
                <li className="nav-item nazoratdanOlish">
                    <NavLink to="/kiruvchi/nazoratdan-olish" className="nav-link " activeClassName='NavLinkLi'>
                        <i className="icon-check mr-1"></i> Nazoratdan Olish
                    </NavLink>
                    <span className="badge1" style={{ display: count?.nazoratdanOlish === 0 && "none" }}>{count?.nazoratdanOlish}</span>
                </li>
            )}
            {/* <li className="nav-item dropdown d-flex align-items-center ml-3 liMenus">
                <i className="fas fa-bars mr-3 dropdown-toggle text-white cursor-pointer" data-toggle="dropdown" aria-expanded="false" style={{ fontSize: "20px", position: "relative" }}>
                    <span className="badge1 extraBadge1 m-auto">10</span>
                </i>
                <ul className="dropdown-menu dropdown-menu-right p-1">
                    {permission.includes("YANGI QO'SHISH") && (
                        <li className="nav-item yangiQushishDropDown">
                            <NavLink exact to="/kiruvchi" className="nav-link " activeClassName='NavLinkLi' style={{ marginLeft: "20px" }}>
                                <i className="icon-plus2 mr-1"></i> Yangi Qo'shish
                            </NavLink>
                        </li>
                    )}
                    {permission.includes("YANGI") && (
                        <li className="nav-item yangiDropDown">
                            <NavLink to="/kiruvchi/yangi" className="nav-link" style={{ color: "#000" }} activeClassName='NavLinkLi'>
                                <i className="icon-newspaper mr-1"></i> Yangi
                            </NavLink>
                            <span className="badge1 m-auto">10</span>
                        </li>
                    )}
                    {(ranks.includes(1) || ranks.includes(2) || ranks.includes(3) || ranks.includes(4)) && (
                        <li className="nav-item rezalutsiyaDropDown">
                            <NavLink to="/kiruvchi/resolution" className="nav-link" style={{ color: "#000" }} activeClassName='NavLinkLi'>
                                <i className="icon-user-plus mr-1"></i>
                            </NavLink>
                            <span className="badge1" style={{ display: count?.rezolutsiya === 0 && "none" }}>{count?.rezolutsiya}</span>
                        </li>
                    )}
                    <li className="nav-item bajarishUchunDropDown">
                        <NavLink to="/kiruvchi/bajarish" className="nav-link" style={{ color: "#000" }} activeClassName='NavLinkLi'>
                            <i className="icon-pen mr-1"></i> Bajarish Uchun
                        </NavLink>
                        <span className="badge1" style={{ display: count?.bajarishUchun === 0 && "none" }}>{count?.bajarishUchun}</span>
                    </li>
                    <li className="nav-item nazoratdaDropDown">
                        <NavLink to="/kiruvchi/nazorat" className="nav-link" style={{ color: "#000" }} activeClassName='NavLinkLi'>
                            <i className="icon-laptop mr-1"></i> Nazoratda
                        </NavLink>
                        <span className="badge1" style={{ display: count?.nazoratda === 0 && "none" }}>{count?.nazoratda}</span>
                    </li>
                    <li className="nav-item umumlashtiruvchiDropDown">
                        <NavLink to="/kiruvchi/umumlashtiruvchi" className="nav-link" style={{ color: "#000" }} activeClassName='NavLinkLi'>
                            <i className="icon-laptop mr-1"></i> Umumlashtiruvchi
                        </NavLink>
                        <span className="badge1" style={{ display: count?.umumlashtiruvchi === 0 && "none" }}>{count?.umumlashtiruvchi}</span>
                    </li>
                    <li className="nav-item malumotUchunDropDown">
                        <NavLink to="/kiruvchi/ma'lumot-uchun" className="nav-link" style={{ color: "#000" }} activeClassName='NavLinkLi'>
                            <i className="icon-laptop mr-1"></i> Ma'lumot uchun
                        </NavLink>
                        <span className="badge1" style={{ display: count?.malumotUchun === 0 && "none" }}>{count?.malumotUchun}</span>
                    </li>
                    <li className="nav-item bajarilmaganDropDown">
                        <NavLink to="/kiruvchi/kechiktirilgan" className="nav-link" style={{ color: "#000" }} activeClassName='NavLinkLi'>
                            <i className="icon-calendar mr-1"></i> Bajarilmagan
                        </NavLink>
                        <span className="badge1" style={{ display: count?.bajarilmagan === 0 && "none" }}>{count?.bajarilmagan}</span>
                    </li>
                    <li className="nav-item redetilganDropDown">
                        <NavLink to="/kiruvchi/radetilgan" className="nav-link" style={{ color: "#000" }} activeClassName='NavLinkLi'>
                            <i className="icon-stack-cancel mr-1"></i> Rad Etilgan
                        </NavLink>
                        <span className="badge1" style={{ display: count?.radEtilgan === 0 && "none" }}>{count?.radEtilgan}</span>
                    </li>
                    <li className="nav-item bajarilganDropDown">
                        <NavLink to="/kiruvchi/bajarilgan" className="nav-link" style={{ color: "#000" }} activeClassName='NavLinkLi'>
                            <i className="icon-check mr-1"></i> Bajarilgan
                        </NavLink>
                        <span className="badge1" style={{ display: count?.bajarilgan === 0 && "none" }}>{count?.bajarilgan}</span>
                    </li>
                    {permission.includes("NAZORATDAN OLISH") && (
                        <li className="nav-item nazoratdanOlishDropDown">
                            <NavLink to="/kiruvchi/nazoratdan-olish" className="nav-link " style={{ color: "#000" }} activeClassName='NavLinkLi'>
                                <i className="icon-check mr-1"></i> Nazoratdan Olish
                            </NavLink>
                            <span className="badge1" style={{ display: count?.nazoratdanOlish === 0 && "none" }}>{count?.nazoratdanOlish}</span>
                        </li>
                    )}
                </ul>
            </li> */}
        </>
    )
}