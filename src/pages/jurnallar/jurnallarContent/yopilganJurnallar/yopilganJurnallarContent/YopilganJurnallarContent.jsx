import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../../../../config";
import { AuthContext } from "../../../../../context/AuthContext";
import ContentNavbarJurnallar from "../../../contentNavbarJurnallar/ContentNavbarJurnallar";
import ReactPaginate from 'react-paginate';
import { Alert } from "../../../../../component/alert/Alert";

export default function YopilganJurnallarContent() {
    const [data, setData] = useState([]);
    const { user: currentUser } = useContext(AuthContext);
    const [alert, setAlert] = useState({ open: false, text: "", color: "" });

    // barcha yopilgan jurnallarni o'qib olish
    useEffect(() => {
        axiosInstance.get("journal/closeds", {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, [])

    // pagination
    const handlePageClick = (e) => {
        console.log(e.selected);

        axiosInstance.get("journal/closeds/?page=" + e.selected, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    // jurnalni ochish
    const openJournal = (id) => {
        console.log(id);
        axiosInstance.patch("journal/open/" + id, {}, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data);
                let arr = data.content.filter((d, i) => {
                    if (d.id !== res.data) {
                        return d;
                    }
                })
                Alert(setAlert, "success", "Jurnal ochib qo'yildi");
                setData({ ...data, content: arr });
            })
            .catch(err => {
                // console.log(err.response);
                Alert(setAlert, "warning", "Jurnal ochilgan");
            })
    }

    return (
        <div className="content mb-5">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Yopilgan jurnallar</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <ContentNavbarJurnallar />
                </ul>

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        {/* <!-- Table Componet  --> */}
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <table className="table table-bordered  table-striped table-hover Tab mb-2">
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
                                        {data.content?.map((dat, index) => (
                                            <tr style={{ fontSize: "15px" }} className="text-center">
                                                <td>{dat.id}</td>
                                                <td className="text-center">
                                                    <span className="badge badge-primary">{dat?.card?.cardName}</span>
                                                    <hr />
                                                    <p>{dat?.uzName}</p>
                                                </td>
                                                <td>{dat?.shortDescription}</td>
                                                <td>{dat?.journalPrefix}</td>
                                                <td>{dat?.journalPostfix}</td>
                                                <td>{dat?.beginNumber}</td>
                                                <td>
                                                    <button type="button" className="btn btn-success" style={{width: "150px", fontSize: "11px"}} onClick={() => openJournal(dat?.id)}>Jurnalni ochish</button>
                                                    {/* <div className="icon d-flex justify-content-center align-items-center">
                                                        <Link to="/jurnallar_kurish" className="infoBtn bg-dark" data-popup="tooltip" data-bs-placement="top" title="Ko'rish">
                                                            <span><i className="icon-eye2"></i></span>
                                                        </Link>
                                                        <Link to="/jurnallar_topshiriqlar" className="infoBtn bg-dark" data-popup="tooltip" data-bs-placement="top" title="Topshiriqlar">
                                                            <span><i className="icon-stack2"></i></span>
                                                        </Link>
                                                    </div> */}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {/* pagination */}
                                {data.content?.length > 0 && (
                                    <ReactPaginate
                                        breakLabel="..."
                                        nextLabel=">>"
                                        onPageChange={handlePageClick}
                                        pageRangeDisplayed={3}
                                        pageCount={data.totalElements === 0 ? 1 : data.totalElements / 10}
                                        previousLabel="<<"
                                        renderOnZeroPageCount={null}
                                        className="paginationUL"
                                        activeClassName="active"
                                    // forcePage={selected}
                                    />
                                )}
                            </div>
                        </div>
                        {/* alert */}
                        {alert.open && (
                            <div className={`alert alert-${alert.color} alert-styled-left alert-dismissible`}>
                                {/* <button type="button" className="close" data-dismiss="alert"><span>×</span></button> */}
                                <span className="font-weight-semibold">{alert.text}</span>
                            </div>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}