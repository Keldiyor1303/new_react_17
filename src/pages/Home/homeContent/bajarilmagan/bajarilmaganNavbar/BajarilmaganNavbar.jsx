import React, {useContext, useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import './bajarilmaganNavbar.css';
import {AuthContext} from "../../../../../context/AuthContext";
import {axiosInstance} from "../../../../../config";

export default function BajarilmaganNavbar() {
    const { user: currentUser } = useContext(AuthContext)
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await axiosInstance.get(`mainPage/taskCount/${localStorage.getItem('ids')}`, {
                headers: {
                    Authorization: `Bearer ${currentUser}`
                }
            })
            setData(res.data)
        }

        fetchData()
    }, [])

    return (
        <>
            <li className="nav-item" style={{ marginLeft: "10px" }}>
                <NavLink exact to="/bajarilmagan_barchasi" className="nav-link " activeClassName='NavLinkLi' style={{ marginLeft: "20px" }}>
                    <i className="icon-plus2 mr-1"/> Barchasi
                </NavLink>
                {data.allLate !== 0 && (
                    <span className="badge1 m-auto">{data.allLate}</span>
                )}
            </li>
            <li className="nav-item">
                <NavLink to="/bajarilmagan_1kun-kechikkan" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-newspaper mr-1"/> 1 kun kechikkan
                </NavLink>
                {data.lateOneDayTask !== 0 && (
                    <span className="badge1 m-auto">{data.lateOneDayTask}</span>
                )}
            </li>
            <li className="nav-item">
                <NavLink to="/bajarilmagan_2-3kun-kechikkan" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-user-plus mr-1"/> 2-3 kun kechikkan
                </NavLink>
                {data.lateTwoThreeDayTask !== 0 && (
                    <span className="badge1 m-auto">{data.lateTwoThreeDayTask}</span>
                )}
            </li>
            <li className="nav-item">
                <NavLink to="/bajarilmagan_4~kun-kechikkan" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-pen mr-1"/> 4 (~) kun kechikkan
                </NavLink>
                {data.lateMoreThanFourDayTask !== 0 && (
                    <span className="badge1 m-auto">{data.lateMoreThanFourDayTask}</span>
                )}
            </li>
        </>
    )
}