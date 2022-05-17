import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../../../../../../config";
import { AuthContext } from "../../../../../../../context/AuthContext";
import TashkilotKurishNavbar from "../../tashkilotKurishNavbar/TashkilotKurishNavbar";
// import ReactPaginate from "react-paginate";
import NumericInput from 'react-numeric-input';

export default function CardSozlamaContent() {
    const { user: currentUser } = useContext(AuthContext);
    const params = useParams();
    const [data, setData] = useState([]);
    const [dataIs, setDataIs] = useState([]);
    // const [selected, setSelected] = useState(0);
    const [openModal, setOpenModal] = useState({ open: false, color: "", text: "", obj: {} });
    let sortInput = [];

    // barcha modullarni o'qib olish
    useEffect(() => {
        axiosInstance.get("card/getAllParentCards/" + params.id, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, [data.isVisible, dataIs, openModal.obj]);

    const checked = (dat) => {
        axiosInstance.post("card/makeVisible", {
            orgId: params.id,
            cartTypeId: dat.cardType.id,
        }, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                setDataIs(res.data)
                if (res?.data?.isVisible) {
                    setOpenModal({ open: true, color: "green", text: "Siz ushbu modulni yoqmoqchimisiz", obj: res?.data });
                } else {
                    setOpenModal({ open: true, color: "crimson", text: "Siz ushbu modulni o'chirmoqchimisiz?", obj: res?.data });
                }
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    const accept = (dat) => {
        setOpenModal({ open: false, color: "", text: "", obj: {} });
    }

    const changeInputNumber = async (e, id) => {
        if (e.code === "Enter") {
            let result = sortInput.sort((a, b) => a.id - b.id);
            let arr = [];
            for (let i = 1; i < result.length; i++) {
                if (!(result[i - 1].id === result[i].id)) {
                    arr.push(result[i - 1]);
                }
            }
            arr.push(result[result.length - 1]);
            try {
                const res = await axiosInstance.patch(`module/orderNumber`, {
                    orderNumberDtos: arr
                }, {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                axiosInstance.get("card/getAllParentCards/" + params.id, {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                    .then(res => {
                        setData(res.data);
                    })
                    .catch(err => {
                        console.log(err.response);
                    })
            } catch (error) {
                console.log(error.response);
            }
        }
    }

    const inputChangeHandler = (e, id) => {
        sortInput.push({ id: id, orderNumber: e });
    }

    return (
        <div className="content mb-5">
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Modul Sozlamalari</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px" }}>
                    <TashkilotKurishNavbar params={params.id} />
                </ul>

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <table className="table mt-2 table-bordered table-striped table-hover Tab table-responsive" >
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th style={{ width: "5%" }}>№</th>
                                            <th style={{ width: "45%" }}>Xujjat</th>
                                            <th style={{ width: "40%" }}>Xolat</th>
                                            <th style={{ width: "5%" }}>Sozlamalar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((dat, index) => (
                                            <tr key={index} style={{ fontSize: "15px" }}>
                                                <td className="text-center">
                                                    {dat.orderNumber}
                                                    {/* <NumericInput
                                                        value={dat?.orderNumber}
                                                        onKeyDown={(e) => changeInputNumber(e, dat.id)}
                                                        onChange={(e) => inputChangeHandler(e, dat.id)}
                                                        className="adminSozlamaInput"
                                                    /> */}
                                                </td>
                                                <td className="text-left">{dat?.cardType?.cardName}</td>
                                                <td id="context" className="text-center">
                                                    {dat?.isVisible ? (
                                                        <p className="text-success">Yoqilgan</p>
                                                    ) : (
                                                        <p className="text-danger">O'chirilgan</p>
                                                    )}
                                                </td>
                                                <td >
                                                    <input type="checkbox" defaultChecked={dat.isVisible ? true : false} id="kiruvchi" onClick={() => checked(dat)} className="checkboxInput cursor-pointer" style={{ width: "100%", height: "25px", padding: "20px" }} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {/*<ReactPaginate*/}
                                {/*    previousLabel="<<"*/}
                                {/*    nextLabel=">>"*/}
                                {/*    pageCount={data?.totalElements / 10}*/}
                                {/*    breakLabel="..."*/}
                                {/*    className="paginate"*/}
                                {/*    activeClassName="active"*/}
                                {/*    pageRangeDisplayed={3}*/}
                                {/*    onPageChange={handlePageClick}*/}
                                {/*    // forcePage={selected}*/}
                                {/*/>*/}
                            </div>
                        </div>
                    </div>
                </div>

                {/* alert */}
                {openModal.open && (
                    <div className="adminWindow">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header bg-primary text-white">
                                    <h6 className="modal-title">Modul boshqarish oynasi</h6>
                                </div>
                                <div className="modal-body text-center">
                                    <h5 style={{ color: openModal.color }}>{openModal.text}</h5>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" onClick={() => accept(openModal.obj)}>Ha</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}