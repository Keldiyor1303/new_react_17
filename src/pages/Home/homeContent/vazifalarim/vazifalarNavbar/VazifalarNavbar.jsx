import React, {useContext, useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import './vazifalarNavbar.css';
import {AuthContext} from "../../../../../context/AuthContext";
import { axiosInstance } from "../../../../../config";

export default function VazifalarNavbar() {
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
                <NavLink exact to="/vazifalar_barchasi" className="nav-link " activeClassName='NavLinkLi' style={{ marginLeft: "20px" }}>
                    <i className="icon-plus2 mr-1" /> Barchasi
                </NavLink>
                {data.allMyTask !== 0 && (
                    <span className="badge1">{data.allMyTask}</span>
                )}
            </li>
            <li className="nav-item">
                <NavLink to="/vazifalar_yangi" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-newspaper mr-1" /> Yangi
                </NavLink>
                {data.newTaskCount !== 0 && (
                    <span className="badge1">{data.newTaskCount}</span>
                )}
            </li>
            <li className="nav-item">
                <NavLink to="/vazifalar_jarayonda" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-user-plus mr-1" /> Jarayonda
                </NavLink>
                {data.inProcessTaskCount !== 0 && (
                    <span className="badge1">{data.inProcessTaskCount}</span>
                )}
            </li>
            <li className="nav-item">
                <NavLink to="/vazifalar_nazoratda" className="nav-link" activeClassName='NavLinkLi'>
                    <i className="icon-pen mr-1" /> Nazoratda
                </NavLink>
                {data.inControlTaskCount !== 0 && (
                    <span className="badge1">{data.inControlTaskCount}</span>
                )}
            </li>
        </>
    )
}