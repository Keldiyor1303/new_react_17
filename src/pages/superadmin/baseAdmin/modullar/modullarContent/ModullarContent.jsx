import React, { useContext, useEffect, useState } from "react";
import './modullarContent.css';
import BaseAdminModulNavbar from "../../baseAdminModul/baseAdminModulNavbar/BaseAdminModulNavbar";
import { axiosInstance } from "../../../../../config";
import { AuthContext } from "../../../../../context/AuthContext";
import NumericInput from 'react-numeric-input';

export default function ModullarContent() {
    const { user: currentUser } = useContext(AuthContext);
    const [data, setData] = useState([]);
    // const [selected, setSelected] = useState(0);
    const [openModal, setOpenModal] = useState({ open: false, color: "", text: "", obj: {} });
    let sortInput = [];

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axiosInstance.get("module/all", {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                });
                setData(res.data);
            } catch (error) {
                console.log(error.response);
            }
        }
        getData();
    }, []);

    const checked = (dat) => {
        axiosInstance.patch("module", {
            id: dat.id
        }, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                if (res?.data?.visible) {
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
        let arr = data.filter((d, i) => {
            if (d.id === dat.id) {
                d.id = dat.id;
                d.isActive = dat.isActive;
                d.name = dat.name;
                d.orderNumber = dat.orderNumber;
                d.visible = dat.visible;
            }
            return d;
        })
        setData(arr);
        setOpenModal({ open: false, color: "", text: "", obj: {} });
    }

    useEffect(() => {
        document.querySelector('.close2')?.click();
    }, [openModal]);

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
                const res1 = await axiosInstance.get("module/all", {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                setData(res1.data);
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
                    <BaseAdminModulNavbar />
                </ul>

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>

                                <table className="table mt-2 table-bordered table-striped table-hover Tab text-center" >
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th style={{ width: "5%" }}>№</th>
                                            <th style={{ width: "45%" }}>Xujjat</th>
                                            <th style={{ width: "40%" }}>Xolat</th>
                                            <th style={{ width: "5%" }}>Sozlamalar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.length > 0 && data.map((dat, index) => (
                                            <tr key={index} style={{ fontSize: "15px" }}>
                                                <td className="text-center">
                                                    <NumericInput
                                                        value={dat?.orderNumber}
                                                        onKeyDown={(e) => changeInputNumber(e, dat.id)}
                                                        onChange={(e) => inputChangeHandler(e, dat.id)}
                                                        className="adminSozlamaInput"
                                                    />
                                                </td>
                                                <td className="text-left">{dat?.name}</td>
                                                <td id="context" className="text-center">
                                                    {dat?.visible ? (
                                                        <p className="text-success">Yoqilgan</p>
                                                    ) : (
                                                        <p className="text-danger">O'chirilgan</p>
                                                    )}
                                                </td>
                                                <td >
                                                    <input type="checkbox" defaultChecked={dat.visible ? true : false} id="kiruvchi" onClick={() => checked(dat)} className="checkboxInput cursor-pointer" style={{ width: "100%", height: "25px", padding: "20px" }} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                {/* alert */}
                                {openModal.open && (
                                    <div className="adminWindow">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header bg-primary text-white">
                                                    <h6 className="modal-title">Modul boshqarish oynasi</h6>
                                                    {/* <button type="button" className="close close2" >×</button> */}
                                                </div>
                                                <div className="modal-body text-center">
                                                    {/* <h3 style={{ textTransform: "upperCase", fontWeight: "bold" }} className="text-danger">Ogoh bo'ling!</h3> */}
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
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}