import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import { AuthContext } from "../../../../../../context/AuthContext";
import AdminElektronKitobNavbar from "../../adminElektronKitobNavbar/AdminElektronKitobNavbar";
import { axiosInstance } from "../../../../../../config";

export default function AdminArxivContent() {
    const { user: currentUser } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [alert, setAlert] = useState({ open: false, text: "", color: "" });

    // barcha malumotlarni o'qib olish
    useEffect(() => {
        axiosInstance.get("journal/archiveds", {
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
    }, []);

    // pagination
    const handlePageClick = (e) => {
        // console.log(e.selected);

        axiosInstance.get("journal/archiveds/?page=" + e.selected, {
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

    return (
        <div className="content">

            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Arxiv</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ borderTopRightRadius: "5px",borderTopLeftRadius: "5px"}}>
                    <AdminElektronKitobNavbar />
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        {/* <!-- Table Componet  --> */}
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <table className="table table-bordered  table-striped table-hover Tab mb-2" >
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
                                        {data.content?.length > 0 && data.content?.map((dat, index) => (
                                            <tr style={{ fontSize: "15px" }} className="text-center">
                                                <td>{dat?.id}</td>
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
                                                    <div className="icon d-flex justify-content-center align-items-center">
                                                        <Link to={`/super_admin_elektron-kitob-arxiv-ko'rish/${dat?.id}`} className="infoBtn bg-dark" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="Ko'rish">
                                                            <span><i className="icon-eye2"></i></span>
                                                        </Link>
                                                        <Link to={`/super_admin_elektron-kitob-topshiriqlar/${dat?.id}`} className="infoBtn bg-dark" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="Log">
                                                            <span><i className="icon-stack2" ></i></span>
                                                        </Link>
                                                        {/* <a href="./barchasiDeteil.html" className="infoBtn bg-warning" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="Ko'rish"><span><i className="icon-eye2"></i></span> </a>
                                                    <a href="./arxivDetel.html" className="infoBtn bg-warning" data-popup="tooltip" title="Log"><i className="icon-stack2" ></i> </a> */}
                                                    </div>
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
                            <div className={`alert alert-${alert.color} alertNotice alert-styled-left alert-dismissible`}>
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