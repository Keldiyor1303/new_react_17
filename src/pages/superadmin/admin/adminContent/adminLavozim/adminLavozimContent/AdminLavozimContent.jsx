import React, { useContext, useEffect, useState } from "react";
import AdminContentNavbar from "../../adminContentNavbar/AdminContentNavbar";
import './adminLavozimContent.css';
import Select from 'react-select'
import { axiosInstance } from "../../../../../../config";
import { AuthContext } from "../../../../../../context/AuthContext";
import { Alert } from "../../../../../../component/alert/Alert";
import ReactPaginate from "react-paginate";
import NumericInput from 'react-numeric-input';

export default function AdminLavozimContent() {
    const { user: currentUser } = useContext(AuthContext);
    const [deleteModal, setDeleteModal] = useState({ open: false, obj: {} });
    const [updateModal, setUpdateModal] = useState({ open: false, obj: {} });
    const [bulimlar, setBulimlar] = useState([]);
    const [selectBulimlar, setSelectBulimlar] = useState([]);
    const [data, setData] = useState([]);
    const [alert, setAlert] = useState({ open: false, text: "", color: "" });
    const [selected, setSelected] = useState(0);
    let sortInput = [];

    const Uchirish = (obj) => {
        axiosInstance.delete("user_position/" + obj.id, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                let arr = data.content.filter((dat, index) => {
                    return dat.id !== obj.id
                })
                setData({ ...data, content: arr });
            })
            .catch(err => {
                console.log(err.response);
                Alert(setAlert, "warning", err.response.data);
            })
        setDeleteModal({ open: false, obj: {} });
    }

    const Uzgartirish = async (obj) => {
        let bulimLavozim = document.querySelector('.bulimLavozim').querySelector('.css-qc6sy-singleValue')?.textContent;
        let uzgartirishLavozim = document.querySelector('.uzgartirishLavozim').value;

        // tanlangan bulimni id sini olish
        let y1 = selectBulimlar.filter((d, i) => {
            if (d.label === bulimLavozim) {
                return d;
            }
        })

        if (bulimLavozim) {
            if (uzgartirishLavozim) {
                try {
                    const res = await axiosInstance.patch("user_position", {
                        id: obj.id,
                        name: uzgartirishLavozim,
                        departmentId: y1[0].value
                    }, {
                        headers: {
                            Authorization: "Bearer " + currentUser
                        }
                    })
                    document.querySelector('.bulimLavozim').querySelector('.css-qc6sy-singleValue').textContent = "";
                    document.querySelector('.uzgartirishLavozim').value = "";
                    axiosInstance.get("user_position?page=" + selected, {
                        headers: {
                            Authorization: "Bearer " + currentUser
                        }
                    })
                        .then(res => {
                            // console.log(res.data);
                            setData(res.data);
                        })
                        .catch(err => {
                            console.log(err.response);
                        })
                    Alert(setAlert, "success", "Ma'lumot muvaffaqitayli o'zgartirildi");
                    setUpdateModal({ open: false, obj: {} });
                } catch (error) {
                    console.log(error.response);
                    setUpdateModal({ open: false, obj: {} });
                }
            } else {
                Alert(setAlert, "warning", "Lavozim kiritilmagan");
                setUpdateModal({ open: false, obj: {} });
            }
        } else {
            Alert(setAlert, "warning", "Bo'lim tanlanmagan");
            setUpdateModal({ open: false, obj: {} });
        }
    }

    // barcha bo'limlarni o'qib olish
    useEffect(() => {
        const getAllBulim = () => {
            axiosInstance.get('department/all', {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    // console.log(res.data);
                    let arr = [];
                    res.data.forEach((d, i) => {
                        arr.push({ value: d.id, label: d.uzName });
                    })
                    setSelectBulimlar(arr);
                    setBulimlar(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        getAllBulim();
    }, []);

    // barcha malumotlarni o'qib olish
    useEffect(() => {
        let getAllLavozim = () => {
            axiosInstance.get("user_position", {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    // console.log(res.data);
                    setData(res.data);
                })
                .catch(err => {
                    console.log(err.response);
                })
        }
        getAllLavozim();
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        let lavozim = document.querySelector('.lavozim').value;
        let bulim = document.querySelector('.bulim').querySelector('.css-qc6sy-singleValue')?.textContent;

        if (bulim) {
            if (lavozim) {
                let y1 = selectBulimlar.filter((d, i) => {
                    if (d.label === bulim) {
                        return d;
                    }
                })
                axiosInstance.post("user_position", {
                    name: lavozim,
                    departmentId: y1[0].value
                }, {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                    .then(res => {
                        document.querySelector('.lavozim').value = "";
                        setData({ ...data, content: [...data.content, res.data] });
                        Alert(setAlert, "success", "Ma'lumot muvaffaqitayli qo'shildi");
                    })
                    .catch(err => {
                        console.log(err.response);
                        Alert(setAlert, "warning", err?.response?.data);
                    })
            } else {
                Alert(setAlert, "warning", "Lavozim kiritilmagan");
            }
        } else {
            Alert(setAlert, "warning", "Bo'lim nomi tanlanmagan");
        }
    }

    const updateModal123 = (dat) => {
        setUpdateModal({ open: true, obj: dat });
    }

    const handlePageClick = (e) => {
        setSelected(e.selected);
        axiosInstance.get("user_position?page=" + e.selected, {
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
                const res = await axiosInstance.patch(`user_position/orderNumber`, {
                    orderNumberDtos: arr
                }, {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                axiosInstance.get("user_position?page=" + selected, {
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
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Lavozim</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px" }}>
                    <AdminContentNavbar />
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <form onSubmit={submitHandler}>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={selectBulimlar}
                                                    // onChange={logChange}
                                                    placeholder="Biriktirilgan bo'lim"
                                                    className="bulim"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-outline lavozim"
                                                            placeholder="Placeholder"
                                                        />
                                                        <label className="label-floating">Lavozimi</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <button type="submit" className="btn btn-primary form-control form-control-outline">
                                                            <i className="fas fa-save" style={{ fontSize: "18px" }}></i> Saqlash
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <table className="table mt-2 table-bordered table-striped table-hover Tab table-responsive table-toggleable" data-breakpoints="xs sm md">
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th style={{ width: "5%" }} >№</th>
                                            <th style={{ width: "30%" }} >Birktirilgan Bo'lim</th>
                                            <th style={{ width: "30%" }} >Lavozim</th>
                                            <th style={{ width: "25%" }} >F.I.SH</th>
                                            <th style={{ width: "5%" }} >RANK</th>
                                            <th style={{ width: "5%" }} >Harakatlar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.content?.length !== 0 && (
                                            <>
                                                {data.content?.map((dat, index) => (
                                                    <tr key={index} className="text-left">
                                                        <td style={{ textAlign: "center" }}>
                                                            <NumericInput
                                                                value={dat?.orderNumber}
                                                                onKeyDown={(e) => changeInputNumber(e, dat.id)}
                                                                onChange={(e) => inputChangeHandler(e, dat.id)}
                                                                className="adminSozlamaInput"
                                                            />
                                                        </td>
                                                        <td>{dat?.departmentName}</td>
                                                        <td>{dat?.name}</td>
                                                        <td>{dat?.firstName} {dat?.lastName} {dat?.middleName}</td>
                                                        <td style={{ textAlign: "center" }}>
                                                            {dat?.roles?.length > 0 && dat?.roles?.map((d, i) => (
                                                                <span>{d?.rank}</span>
                                                            ))}
                                                        </td>
                                                        <td>
                                                            <div className="icon d-flex justify-content-center align-items-center ">
                                                                <a href="#1" className="infoBtn bg-dark" data-bs-toggle="tooltip" onClick={() => updateModal123(dat)} data-popup="tooltip" data-bs-placement="top" title="O'zgartirish"><span><i className="icon-pencil5"></i></span> </a>
                                                                <a href="#1" className="infoBtn bg-dark" data-bs-toggle="tooltip" onClick={() => setDeleteModal({ open: true, obj: dat })} data-popup="tooltip" data-bs-placement="top" title="O'chirish"><span><i className="icon-trash"></i></span> </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {/* update */}
                                                {updateModal.open && (
                                                    <div className="adminWindow">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header bg-primary text-white">
                                                                    <h6 className="modal-title">Lavozim qo'shish</h6>
                                                                    <button type="button" className="close" onClick={() => setUpdateModal({ open: false, obj: {} })}>&times;</button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <form>
                                                                        <div className="row">
                                                                            <div className="col-lg-12">
                                                                                <div className="form-group mb-0" >
                                                                                    <div className="col-lg-12 px-0 mb-3">
                                                                                        <Select
                                                                                            defaultValue={{ value: updateModal.obj.departmentName, label: updateModal.obj.departmentName }}
                                                                                            options={selectBulimlar}
                                                                                            // onChange={logChange}
                                                                                            placeholder="Ishlar boshqarmasi"
                                                                                            className="bulimLavozim"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-12">
                                                                                <div className="form-group form-group-floating row mb-0">
                                                                                    <div className="col-lg-12">
                                                                                        <div className="position-relative">
                                                                                            <input
                                                                                                type="text"
                                                                                                className="form-control form-control-outline uzgartirishLavozim"
                                                                                                placeholder="Placeholder"
                                                                                                defaultValue={updateModal.obj?.name}
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row mt-2">
                                                                            <div className="col-lg-12 mt-2">
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn btn-primary"
                                                                                    style={{ width: "100%" }}
                                                                                    onClick={() => Uzgartirish(updateModal.obj)}
                                                                                >
                                                                                    <i className="fas fa-save" style={{ fontSize: "18px" }}></i> Saqlash
                                                                                </button>
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
                                                    <div className="adminWindow text-center">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header bg-primary text-white">
                                                                    <h6 className="modal-title">O'chirish oynasi</h6>
                                                                    <button type="button" className="close" onClick={() => setDeleteModal({ open: false, obj: {} })}>×</button>
                                                                </div>
                                                                <div className="modal-body ">
                                                                    <h3 style={{ textTransform: "upperCase", fontWeight: "bold" }} className="text-danger">Ogoh bo'ling!</h3>
                                                                    <h5>Ushbu ma'lumotni o'chirmoqchimisiz?</h5>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-link bekorQilish" onClick={() => setDeleteModal({ open: false, obj: {} })}>Bekor qilish</button>
                                                                    <button type="button" className="btn btn-primary" onClick={() => Uchirish(deleteModal.obj)}>O'chirish</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </tbody>
                                </table>
                                <ReactPaginate
                                    previousLabel="<<"
                                    nextLabel=">>"
                                    pageCount={data?.totalElements / 20}
                                    breakLabel="..."
                                    className="paginate"
                                    activeClassName="active"
                                    pageRangeDisplayed={3}
                                    onPageChange={handlePageClick}
                                // forcePage={selected}
                                />
                                {/* alert */}
                                {alert.open && (
                                    <div className={`alert alert-${alert.color} alert-styled-left alert-dismissible`}>
                                        <span className="font-weight-semibold">{alert.text}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}