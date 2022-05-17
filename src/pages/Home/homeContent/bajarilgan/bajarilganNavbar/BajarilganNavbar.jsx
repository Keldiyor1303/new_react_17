import React, {useContext, useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import './bajarilganNavbar.css';
import {AuthContext} from "../../../../../context/AuthContext";
import {axiosInstance} from "../../../../../config";

export default function BajarilganNavbar() {
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
                <NavLink exact to="/bajarilgan_barchasi" className="nav-link " activeClassName='NavLinkLi' style={{ marginLeft: "20px" }}>
                    <i className="icon-plus2 mr-1" /> Barchasi
                </NavLink>

                {data.allDone !== 0 && (
                    <span className="badge1 m-auto">{data.allDone}</span>
                )}
            </li>
            <li className="nav-item">
                <NavLink to="/bajarilgan_bajarilganlar" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-newspaper mr-1" /> Bajarilgan
                </NavLink>

                {data.doneCount !== 0 && (
                    <span className="badge1 m-auto">{data.doneCount}</span>
                )}
            </li>
            <li className="nav-item">
                <NavLink to="/bajarilgan_kechiktirib-berilgan" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-user-plus mr-1" /> Kechiktirib berilgan
                </NavLink>

                {data.defferedDone !== 0 && (
                    <span className="badge1 m-auto">{data.defferedDone}</span>
                )}
            </li>
        </>
    )
}