import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContentNavbarJurnallar from "../contentNavbarJurnallar/ContentNavbarJurnallar";

export default function JurnallarContent() {
    const [data, setData] = useState([
        {
            id: 1,
            jurnalTuri: "Fuqaro Murojatlari",
            tasnif: "Fuqaro Murojati",
            jurnalPrefiksi: 1,
            jurnalPostfiksi: 1,
            boshRaqam: 1,
        }
    ]);

    // useEffect(() => {
    //     let btns = document.querySelectorAll('.infoBtn');
    //     btns.forEach((btn) => {
    //         btn.addEventListener('click', () => {
    //             document.querySelector('.tooltip').style.display = "none";
    //             document.querySelector('.tooltip-inner').style.display = "none";
    //         });
    //     })
    // }, []);

    return (
        <div className="content">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Barchasi</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <ContentNavbarJurnallar />
                </ul>

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        {/* <!-- Table Componet  --> */}
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <table className="table table-bordered  table-striped table-hover Tab">
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th style={{ width: "5%" }}>№</th>
                                            <th style={{ width: "25%" }}>Jurnal turi/nomi</th>
                                            <th style={{ width: "25%" }}>Qisqacha tasnifi</th>
                                            <th style={{ width: "10%" }}>Jurnal Prefiksi</th>
                                            <th style={{ width: "10%" }}>Jurnal Postfiksi</th>
                                            <th style={{ width: "10%" }}>Boshlang'ich Raqam</th>
                                            <th style={{ width: "15%" }}>Xarakatlar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((dat, index) => (
                                            <tr style={{ fontSize: "15px" }} className="text-center">
                                                <td>{dat.id}</td>
                                                <td className="text-center">
                                                    <span className="badge badge-primary">Murojatlar</span>
                                                    <hr />
                                                    <p>{dat.jurnalTuri}</p>
                                                </td>
                                                <td>{dat.tasnif}</td>
                                                <td>{dat.jurnalPrefiksi}</td>
                                                <td>{dat.jurnalPostfiksi}</td>
                                                <td>{dat.boshRaqam}</td>
                                                <td>
                                                    <div className="icon d-flex justify-content-center align-items-center">
                                                        <Link to="/jurnallar_kurish" className="infoBtn bg-dark" data-popup="tooltip" data-bs-placement="top" title="Ko'rish">
                                                            <span><i className="icon-eye2"></i></span>
                                                        </Link>
                                                        <Link to="/jurnallar_topshiriqlar" className="infoBtn bg-dark" data-popup="tooltip" data-bs-placement="top" title="Topshiriqlar">
                                                            <span><i className="icon-stack2"></i></span>
                                                        </Link>
                                                    </div>
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