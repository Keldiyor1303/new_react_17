import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import ContentNavbarSozlamalar from "../../contentNavbarSozlamalar/ContentNavbarSozlamalar";
import { Alert } from "../../../../component/alert/Alert";
import { axiosInstance } from "../../../../config";
import NumericInput from 'react-numeric-input';

export default function TezkorRezalutContent() {
    const { user: currentUser } = useContext(AuthContext);
    const [deleteModal, setDeleteModal] = useState({ open: false, obj: {} });
    const [updateModal, setUpdateModal] = useState({ open: false, obj: {} });
    const [alert, setAlert] = useState({ open: false, text: "", color: "" });
    const [data, setData] = useState([]);
    // const [selected, setSelected] = useState(0);
    let sortInput = [];

    // barcha malumotlarni o'qib olish
    useEffect(() => {
        try {
            const getData = async () => {
                const res = await axiosInstance.get("fastResolution/orgAll", {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                console.log(res.data);
                setData(res.data);
            }
            getData();
        } catch (error) {
            console.log(error.response);
        }
    }, []);

    // malumot qo'shish
    const qushish = () => {
        let nomlanishi = document.querySelector('.nomlanishi').value;

        if (nomlanishi.length !== 0) {
            // to do server
            axiosInstance.post("fastResolution", {
                name: nomlanishi
            }, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    console.log(res.data);
                    Alert(setAlert, "success", "Ma'lumot muvaffaqiyatli qo'shildi");
                    document.querySelector('.nomlanishi').value = "";
                    setData(prev => [...prev, res.data]);
                })
                .catch(err => {
                    console.log(err.response);
                })
        } else {
            Alert(setAlert, "warning", "Tashkilot nomi kiritilmagan");
        }
    }

    const Uzgartirish = (dat) => {
        let nomlanishiUzgartirish = document.querySelector('.nomlanishiUzgartirish').value;

        if (nomlanishiUzgartirish) {
            axiosInstance.patch("fastResolution", {
                id: dat.id,
                name: nomlanishiUzgartirish
            }, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    let arr = data.filter((d, i) => {
                        if (d.id === res.data.id) {
                            d.id = res.data.id;
                            d.name = res.data.name;
                        }
                        return d;
                    })
                    Alert(setAlert, "success", "Ma'lumot muvaffaqiyatli o'zgartirildi");
                    setData(arr);
                    setUpdateModal({ open: false, obj: {} });
                })
                .catch(err => {
                    console.log(err.response);
                })
        } else {
            Alert(setAlert, "warning", "Tashkilot nomi kiritilmagan");
        }
    }

    const Uchirish = (dat) => {
        axiosInstance.delete("fastResolution/" + dat.id, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                let arr = data.filter((d, i) => {
                    if (d.id !== res.data) {
                        return d;
                    }
                })
                setData(arr);
                setDeleteModal({ open: false, obj: {} });
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    const enter = (e) => {
        if (e.code === "Enter") {
            qushish();
        }
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
                const res = await axiosInstance.patch(`fastResolution/orderNumber`, {
                    orderNumberDtos: arr
                }, {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                const res1 = await axiosInstance.get("fastResolution/orgAll", {
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
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Tezkor Rezalutsiya</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <ContentNavbarSozlamalar />
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group form-group-floating row mb-0">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-outline nomlanishi"
                                                        placeholder="Placeholder"
                                                        onKeyDown={(e) => enter(e)}
                                                    />
                                                    <label className="label-floating">Nomlanishi</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group form-group-floating row mb-0">
                                            <div className="col-lg-5">
                                                <div className="position-relative">
                                                    <button type="button" onClick={qushish} className="btn btn-primary form-control form-control-outline">Qo'shish</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <table className="table table-bordered mt-3 table-striped table-hover Tab" >
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-left">
                                            <th style={{ width: "5%" }}>№</th>
                                            <th style={{ width: "90%" }}>Nomlanishi</th>
                                            <th style={{ width: "5%" }}>Harakatlar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((dat, index) => (
                                            <tr style={{ fontSize: "14px", textAlign: "left" }}>
                                                <td className="text-center">
                                                    <NumericInput
                                                        value={dat?.orderNumber}
                                                        onKeyDown={(e) => changeInputNumber(e, dat.id)}
                                                        onChange={(e) => inputChangeHandler(e, dat.id)}
                                                        className="adminSozlamaInput"
                                                    />
                                                </td>
                                                <td >{dat?.name}</td>
                                                <td className="text-center d-flex">
                                                    <a href="#1" className="infoBtn bg-dark cursor-pointer" onClick={() => setUpdateModal({ open: true, obj: dat })} data-popup="tooltip" title="O'zgartirish"><i className="icon-pencil5" ></i> </a>
                                                    <a href="#1" className="infoBtn bg-dark cursor-pointer" onClick={() => setDeleteModal({ open: true, obj: dat })} data-popup="tooltip" title="O'chirish"><i className="icon-trash"></i> </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                {/* update */}
                                {updateModal.open && (
                                    <div className="adminWindow">
                                        <div className="modal-dialog modal-lg ">
                                            <div className="modal-content">
                                                <div className="modal-header bg-primary text-white">
                                                    <h3 className="modal-title">Yangilash</h3>
                                                    <button type="button" className="close close2" onClick={() => setUpdateModal({ open: false, obj: {} })}>&times;</button>
                                                </div>

                                                <div className="modal-body">
                                                    <form className="">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="form-group form-group-floating row">
                                                                    <div className="col-lg-12">
                                                                        <div className="position-relative">
                                                                            <input
                                                                                type="text"
                                                                                className="form-control form-control-outline nomlanishiUzgartirish"
                                                                                placeholder="Placeholder"
                                                                                defaultValue={updateModal.obj?.name}
                                                                            />
                                                                            <label className="label-floating">Nomlanishi</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="form-group form-group-floating row mb-0">
                                                                    <div className="col-lg-12">
                                                                        <div className="position-relative">
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-primary form-control form-control-outline"
                                                                                onClick={() => Uzgartirish(updateModal.obj)}
                                                                            >
                                                                                Qo'shish
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {/* delete */}
                                {deleteModal.open && (
                                    <div className="adminWindow">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header bg-primary text-white">
                                                    <h6 className="modal-title">O'chirish oynasi</h6>
                                                    <button type="button" className="close" onClick={() => setDeleteModal({ open: false, obj: {} })}>×</button>
                                                </div>
                                                <div className="modal-body text-center">
                                                    <h3 style={{ textTransform: "upperCase", fontWeight: "bold" }} className="text-danger">Ogoh bo'ling!</h3>
                                                    <h5>Ushbu ma'lumotni o'chirmoqchimisiz?</h5>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-primary" onClick={() => Uchirish(deleteModal.obj)}>O'chirish</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* alert */}
                                {alert.open && (
                                    <div className={`alert alert-${alert.color} aletNotice alert-styled-left alert-dismissible`}>
                                        <span className="font-weight-semibold">{alert.text}</span>
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