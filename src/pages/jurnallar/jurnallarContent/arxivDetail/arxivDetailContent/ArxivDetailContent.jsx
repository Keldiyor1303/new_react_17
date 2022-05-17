import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { axiosInstance } from "../../../../../config";
import { AuthContext } from "../../../../../context/AuthContext";
import ContentNavbarJurnallar from "../../../contentNavbarJurnallar/ContentNavbarJurnallar";

export default function ArxivDetailContent() {
    const { user: currentUser } = useContext(AuthContext);
    const params = useParams();
    const [data, setData] = useState([]);

    // tooltipni o'chirish
    useEffect(() => {
        document.querySelector('.tooltip')?.remove();
    }, []);

    // id boyicha malumotlarni o'qib olish
    useEffect(() => {
        axiosInstance.get("journal/logs/" + params.id, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data);
                setData([res.data]);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, []);

    console.log(data);

    return (
        <div className="content">

            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Barchasi</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <ContentNavbarJurnallar />
                    <li className="nav-item">
                        <NavLink to={`/jurnallar_arxiv_detail/${params.id}`} className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
                            <i className="icon-stack2 mr-1"></i> Topshiriqlar
                        </NavLink>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        {/* <!-- Table Componet  --> */}
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                {/* <!-- table -->/ */}
                                <table className="table table-bordered  table-striped table-hover Tab" >
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th style={{ width: "5%" }}>№</th>
                                            <th style={{ width: "20%" }}>F.I.O</th>
                                            <th style={{ width: "20%" }}>Ip manzili va MAC</th>
                                            <th style={{ width: "20%" }}>Qurilmasi / Browser</th>
                                            <th style={{ width: "20%" }}>Vaqt</th>
                                            <th style={{ width: "15%" }}>Holati</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((dat, index) => (
                                            <tr className="text-center">
                                                <td>{index + 1}</td>
                                                <td>{dat?.firstName} {dat?.lastName} {dat?.middleName}</td>
                                                <td>
                                                    {dat?.createdIpAddress}
                                                    <hr />
                                                </td>
                                                <td>
                                                    {dat?.createdDevice}
                                                    <hr />
                                                    {dat?.createdBrowser}
                                                </td>
                                                <td>{Date(Date.now(dat?.createdAt))}</td>
                                                <td>
                                                    Holati
                                                    <hr />
                                                    <div className="badge badge-primary">Active</div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}