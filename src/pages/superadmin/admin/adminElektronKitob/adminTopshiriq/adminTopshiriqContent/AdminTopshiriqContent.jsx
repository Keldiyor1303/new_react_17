import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { axiosInstance } from "../../../../../../config";
import { AuthContext } from "../../../../../../context/AuthContext";
import AdminElektronKitobNavbar from "../../adminElektronKitobNavbar/AdminElektronKitobNavbar";

export default function AdminTopshiriqlarContent() {
    const { user: currentUser } = useContext(AuthContext);
    const params = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        document.querySelector('.tooltip')?.remove();
    }, []);

    // id bo'yicha ma'lumotni o'qib olish
    useEffect(() => {
        axiosInstance.get("journal/logs/" + params.id, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data);
                let arr = [];
                arr.push(res.data);
                setData(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, []);

    return (
        <div className="content mb-5">

            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Topshiriqlar</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ borderTopRightRadius: "5px",borderTopLeftRadius: "5px"}}>
                    <AdminElektronKitobNavbar />
                    <li className="nav-item">
                        <NavLink to={`/super_admin_elektron-kitob-topshiriqlar/${params.id}`} className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
                            <i className="icon-stack2 mr-1"></i> Topshiriqlar
                        </NavLink>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <table className="table table-bordered  table-striped table-hover Tab" >
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th style={{ width: "5%" }}>№</th>
                                            <th style={{ width: "20%" }}>F.I.O</th>
                                            <th style={{ width: "20%" }}>Ip manzili va MAC</th>
                                            <th style={{ width: "20%" }}>Qurilmasi</th>
                                            <th style={{ width: "20%" }}>Browser</th>
                                            <th style={{ width: "15%" }}>Vaqt</th>
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
                                                    {/* MAC: B8-CA-ZA-90-30 */}
                                                </td>
                                                <td>{dat?.createdDevice}</td>
                                                <td>{dat?.createdBrowser}</td>
                                                <td>{Date(Date.now(dat?.createdAt))}</td>
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