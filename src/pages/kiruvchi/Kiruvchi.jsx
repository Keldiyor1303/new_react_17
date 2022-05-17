import React, { useContext, useEffect, useState } from 'react';
import './kiruvchi.css';
import Navbar from '../../component/navbar/Navbar';
import KiruvchiContent from './kiruvchiContent/KiruvchiContent';
import AllSidebarData from '../../component/allSidebarData/AllSidebarData';
import jwtDecode from 'jwt-decode';
import { AuthContext } from '../../context/AuthContext';

export default function Kiruvchi() {
    const { user: currentUser } = useContext(AuthContext);
    const [ranks, setRanks] = useState([]);
    const [permission, setPermission] = useState([]);

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
        // setWorkPlace(arr);
        setRanks(arr1);
        setPermission(arr2);

    }, []);

    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <AllSidebarData />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <KiruvchiContent />
                    </div>
                </div>
            </div >
        </div >
    )
}