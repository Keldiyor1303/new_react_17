import React, {useContext, useEffect, useState} from "react";
import {NavLink, useParams} from 'react-router-dom';
import {axiosInstance} from "../../../config";
import {AuthContext} from "../../../context/AuthContext";
import jwtDecode from "jwt-decode";

export default function NavbarContentMonitoring() {
    const params = useParams();
    const { user: currentUser } = useContext(AuthContext);
    const [data,setData]=useState([]);
    const [permission, setPermission] = useState([]);
    console.log(params)
    useEffect(() => {
        console.log(jwtDecode(currentUser));
        let workPlaces = JSON.parse(jwtDecode(currentUser).workPlaces)
        console.log(workPlaces);
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
        // setRanks(arr1);
        setPermission(arr2);
    }, []);
    useEffect(() => {
        axiosInstance.get("monitoring/cardType/" + JSON.parse(localStorage.getItem('ids')), {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data);
                setData(res.data)
            })
            .catch(err => {
                console.log(err.response);
            })
    }, []);

    return (
        <>
            <li className="nav-item" style={{marginLeft: "30px"}}>
                <NavLink exact to={`/monitoring`} activeClassName='NavLinkLi'
                         className="nav-link d-flex align-items-center">
                    <i className="icon-plus2 mr-1"></i> Hammasi
                </NavLink>
                {/* <a href="./hisobotlar.html" class="nav-link NavLinkLi" >
                    <i class="icon-plus2"></i> Hammasi
                </a> */}
            </li>


            <li className="nav-item">
                <NavLink to={`/monitoring_kiruvchi`} activeClassName="NavLinkLi"
                         className="nav-link d-flex align-items-center">
                    <i className="icon-user-plus mr-1"></i> Kiruvchi
                </NavLink>
                {/* <a href="./kiruvchi.html" class="nav-link">
                    <i class="icon-user-plus"></i> Kiruvchi
                </a> */}
            </li>
            {/*{*/}
            {/*    data.map((items,index)=>{*/}
            {/*        return (*/}
            {/*            <li key={index} className="nav-item" style={{marginLeft: "30px"}}>*/}
            {/*                <NavLink to={`/monitoring_${items.cardName}`} activeClassName='NavLinkLi'*/}
            {/*                         className="nav-link d-flex align-items-center">*/}
            {/*                    <i className="icon-plus2 mr-1"></i> {items.cardName}*/}
            {/*                </NavLink>*/}
            {/*                /!* <a href="./hisobotlar.html" class="nav-link NavLinkLi" >*/}
            {/*        <i class="icon-plus2"></i> Hammasi*/}
            {/*    </a> *!/*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}
            <li className="nav-item">
                <NavLink to={`/monitoring_nazorat-kartochka`} activeClassName="NavLinkLi"
                         className="nav-link d-flex align-items-center">
                    <i className="icon-user-plus mr-1"></i> Nazorat kartochkasi
                </NavLink>
                {/* <a href="./nazorat-kartochkasi.html" class="nav-link">
                    <i class="icon-user-plus"></i> Nazorat Kartochkasi
                </a> */}
            </li>
            <li className="nav-item">
                <NavLink to={`/monitoring_nazorat-kartochka-malumot`} activeClassName="NavLinkLi"
                         className="nav-link d-flex align-items-center">
                    <i className="icon-newspaper mr-1"></i> Nazorat Kartochkasi ma'lumot
                </NavLink>
                {/* <a href="./nazorat-kartochkasiMalumot.html" class="nav-link">
                    <i class="icon-newspaper"></i> Nazorat Kartochkasi ma'lumot
                </a> */}
            </li>

            <li className="nav-item">
                {/* <NavLink to="/monitoring_test" activeClassName="NavLinkLi" className="nav-link d-flex align-items-center">
                    <i className="icon-user-plus mr-1"></i> Test
                </NavLink> */}
                {/* <a href="./test.html" class="nav-link">
                <i class="icon-user-plus"></i> Test
                </a> */}
            </li>

            <li className="nav-item">
                {/* <NavLink to="/monitoring_svodaka-new" activeClassName="NavLinkLi" className="nav-link d-flex align-items-center">
                    <i class="icon-user-plus mr-1"></i> Svodaka New
                </NavLink> */}
                {/* <a href="./svodkanew.html" class="nav-link"><i class="icon-user-plus"></i> Svodaka New
                </a> */}
            </li>
            <li className="nav-item">
                <NavLink to={`/monitoring_svodka`} activeClassName="NavLinkLi"
                         className="nav-link d-flex align-items-center">
                    <i className="icon-user-plus mr-1"></i> Umumiy hisobot
                </NavLink>
                {/* <a href="./svodka.html" class="nav-link">
                    <i class="icon-user-plus"></i> Svodka
                </a> */}
            </li>
            <li className="nav-item">
                <NavLink to={`/monitoring_svodka_qvc`} activeClassName="NavLinkLi"
                         className="nav-link d-flex align-items-center">
                    <i className="icon-user-plus mr-1"></i> Umumiy hisobot qidirish
                </NavLink>
                {/* <a href="./svodka.html" class="nav-link">
                    <i class="icon-user-plus"></i> Svodka
                </a> */}
            </li>
        </>
    )
}