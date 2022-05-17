import React, {useContext, useEffect} from "react";
import NavbarContentMonitoring from "../navbarContentMonitoring/NavbarContentMonitoring";
import {axiosInstance} from "../../../config";
import {AuthContext} from "../../../context/AuthContext";

export default function MonitoringContent() {

    const {user: currentUser} = useContext(AuthContext);
    useEffect(() => {
        axiosInstance.get("monitoring/cardType/" + JSON.parse(localStorage.getItem('ids')), {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data);
                // let arr = [];
                // res.data.forEach((c, i) => {
                //     arr.push({value: c?.id, label: c?.name})
                // })
            })
            .catch(err => {
                console.log(err.response);
            })
    }, []);
    return (
        <div className="content mb-5">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase"}}>Hisobotlar</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <NavbarContentMonitoring/>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        {/* <!-- Table Componet  --> */}
                        <div className="card">
                            <div className="card-body" style={{padding: "30px"}}>
                                <table className="table table-bordered  table-striped table-hover Tab">
                                    <thead>
                                    <tr className="bg-dark text-white NavLink text-center">
                                        <th style={{width: "5%", borderRadius: "10px 0 0 0"}}>№</th>
                                        <th style={{width: "20%"}}>Bo'lim</th>
                                        <th style={{width: "25%"}}>Barchasi</th>
                                        <th style={{width: "30%"}}>Kiruvchi</th>
                                        <th style={{width: "15%"}}>Chiquvchi</th>
                                        <th style={{width: "5%", borderRadius: "0 10px 0 0"}}
                                            className="text-center">Buyruq
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="text-center">
                                        <td>1</td>
                                        <td>
                                            Buxoro viloyat hokimligi huzuridagi "Axborot-kommunikasiya texnologiyalarni
                                            rivojlantirish markazi" DUK
                                        </td>
                                        <td>8</td>
                                        <td>7</td>
                                        <td>1</td>
                                        <td>8</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td>2</td>
                                        <td>
                                            Buxoro viloyat hokimligi huzuridagi "Axborot-kommunikasiya texnologiyalarni
                                            rivojlantirish markazi" DUK
                                        </td>
                                        <td>8</td>
                                        <td>7</td>
                                        <td>1</td>
                                        <td>8</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td>3</td>
                                        <td>
                                            Buxoro viloyat hokimligi huzuridagi "Axborot-kommunikasiya texnologiyalarni
                                            rivojlantirish markazi" DUK
                                        </td>
                                        <td>8</td>
                                        <td>7</td>
                                        <td>1</td>
                                        <td>8</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* <!-- end Table Components --> */}
                    </div>
                </div>

            </div>
        </div>
    )
}