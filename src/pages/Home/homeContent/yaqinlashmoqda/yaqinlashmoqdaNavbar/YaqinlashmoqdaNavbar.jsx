import React, {useContext, useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import './yaqinNavbar.css';
import {AuthContext} from "../../../../../context/AuthContext";
import {axiosInstance} from "../../../../../config";

export default function YaqinlashmoqdaNavbar() {
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
                <NavLink exact to="/yaqinlashmoqda_barchasi" className="nav-link " activeClassName='NavLinkLi' style={{ marginLeft: "20px" }}>
                    <i className="icon-plus2 mr-1" /> Barchasi
                </NavLink>
                {data.allNear !== 0 && (
                    <span className="badge1 m-auto">{data.allNear}</span>
                )}
            </li>
            <li className="nav-item">
                <NavLink to="/yaqinlashmoqda_1kun-qoldi" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-newspaper mr-1" /> 1 kun qoldi
                </NavLink>
                {data.remainOneDayTask !== 0 && (
                    <span className="badge1 m-auto">{data.remainOneDayTask}</span>
                )}
            </li>
            <li className="nav-item">
                <NavLink to="/yaqinlashmoqda_2-3kun-qoldi" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-user-plus mr-1" /> 2-3 kun qoldi
                </NavLink>
                {data.remainTwoThreeDayTask !== 0 && (
                    <span className="badge1 m-auto">{data.remainTwoThreeDayTask}</span>
                )}
            </li>
            <li className="nav-item">
                <NavLink to="/yaqinlashmoqda_4~kun-qoldi" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-pen mr-1" /> 4 (~) kun qoldi
                </NavLink>
                {data.remainMoreThanFourTask !== 0 && (
                    <span className="badge1 m-auto">{data.remainMoreThanFourTask}</span>
                )}
            </li>
        </>
    )
}