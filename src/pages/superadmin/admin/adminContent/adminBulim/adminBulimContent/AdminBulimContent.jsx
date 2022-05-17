import React, { useContext, useEffect, useState } from 'react';
import './adminBulimContent.css';
import AdminContentNavbar from '../../adminContentNavbar/AdminContentNavbar';
import Select from 'react-select'
import { axiosInstance } from '../../../../../../config';
import { AuthContext } from '../../../../../../context/AuthContext';
import { Alert } from '../../../../../../component/alert/Alert';

export default function AdminBulimContent() {
    const [data, setData] = useState([]);
    const { user: currentUser } = useContext(AuthContext);
    const [deleteModal, setDeleteModal] = useState({ open: false, obj: {} });
    const [updateModal, setUpdateModal] = useState({ open: false, obj: {} });
    const [allBulimSelect, setAllBulimSelect] = useState([]);
    const [alert, setAlert] = useState({ open: false, text: "", color: "" });

    // click checkbox
    useEffect(() => {
        document.querySelector('#bulimFunc').addEventListener('click', () => {
            if (document.querySelector('#bulimFunc').checked) {
                document.querySelector('#bulim').style.display = "block";
            } else {
                document.querySelector('#bulim').style.display = "none";
            }
        })
    }, []);


    const Uchirish = (d) => {
        // console.log(d);
        axiosInstance.delete("department/" + d.id, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data);
                let arr = data.filter((dat, index) => {
                    return dat.id !== d.id
                })
                setData(arr);
            })
            .catch(err => {
                console.log(err);
                Alert(setAlert, "warning", err.response.data);
            })
        setDeleteModal({ open: false, obj: {} });
    }

    const UzgartirishlarniSaqlash = (obj) => {
        console.log(obj);
        let nomlanishiUpdate = document.querySelector('.nomlanishiUpdate').value;
        let ruschaNomiUpdate = document.querySelector('.ruschaNomiUpdate').value;
        let tavsifUpdate = document.querySelector('.tavsifUpdate').value;
        let boshBulimUpdate = document.querySelector('.boshBulimUpdate')?.querySelector('.css-qc6sy-singleValue')?.textContent;

        let y1 = allBulimSelect.filter((d, i) => {
            if (d.label === boshBulimUpdate) {
                return d;
            }
        })
        console.log(y1);
        axiosInstance.patch("department", {
            id: obj.id,
            uzName: nomlanishiUpdate,
            ruName: ruschaNomiUpdate,
            description: tavsifUpdate,
            upperDepartmentId: y1 ? y1[0]?.value : obj.id,
        }, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data);
                let arr = data.map((dat, index) => {
                    if (dat.id === obj.id) {
                        dat.description = res.data.description;
                        dat.employeeCount = res.data.employeeCount;
                        dat.orderNumber = res.data.orderNumber;
                        dat.ruName = res.data.ruName;
                        dat.uzName = res.data.uzName;
                        dat.upperDepartmentName = res.data.upperDepartmentName;
                    }
                    return dat;
                })
                setAlert({ open: true, color: "success", text: "Ma'lumot muvaffaqitayli o'zgartirildi" });
                setTimeout(() => {
                    setAlert({ open: false, color: "", text: "" });
                }, 2000);
                setData(arr);
                setUpdateModal({ open: false, obj: {} });
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    const bulimQushish = (e) => {
        e.preventDefault();
        let nomlanishi = document.querySelector('.nomlanishi').value;
        let ruschaNomi = document.querySelector('.ruschaNomi').value;
        let tavsif = document.querySelector('.tavsif').value;
        let upperDepartmentId = document.querySelector('.upperDepartmentId').querySelector('.css-qc6sy-singleValue')?.textContent;

        let arr = allBulimSelect.filter((o, i) => {
            if (o.label === upperDepartmentId) {
                return o;
            }
        })

        if (nomlanishi) {
            if (ruschaNomi) {
                if (tavsif) {
                    // to do server
                    axiosInstance.post('department', {
                        uzName: nomlanishi,
                        ruName: ruschaNomi,
                        description: tavsif,
                        upperDepartmentId: arr ? arr[0]?.value : null
                    }, {
                        headers: {
                            Authorization: "Bearer " + currentUser
                        }
                    })
                        .then(res => {
                            console.log(res.data);
                            setData([...data, res.data]);
                            setAlert({ open: true, color: "success", text: "Ma'lumot muvaffaqitayli qo'shildi" });
                            setTimeout(() => {
                                setAlert({ open: false, color: "", text: "" });
                            }, 2000);
                        })
                        .catch(err => {
                            console.log(err.response);
                        })
                    document.querySelector('.formClear').reset();
                } else {
                    setAlert({ open: true, color: "warning", text: "Tavsif maydoni bo'sh bo'lmasligi kerak" });
                    setTimeout(() => {
                        setAlert({ open: false, color: "", text: "" });
                    }, 2000);
                }
            } else {
                setAlert({ open: true, color: "warning", text: "Bo'limning ruscha nomi kiritilmagan" });
                setTimeout(() => {
                    setAlert({ open: false, color: "", text: "" });
                }, 2000);
            }
        } else {
            setAlert({ open: true, color: "warning", text: "Bo'lim nomi kiritilmagan" });
            setTimeout(() => {
                setAlert({ open: false, color: "", text: "" });
            }, 2000);
        }
    }

    // barcha bulimni o'qib olish
    useEffect(() => {
        const getAllBulim = () => {
            axiosInstance.get('department/all', {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    setData(res.data);
                    // let arr = [];
                    // res.data.filter((d, i) => {
                    //     arr.push({ value: d.id, label: d.uzName });
                    // })
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err.response);
                })
        }
        getAllBulim();
    }, []);

    // barcha nomlanishlarni select ichiga joylashtirish
    useEffect(() => {
        let arr = [];
        data.forEach((d, i) => {
            arr.push({ value: d.id, label: d.uzName });
        })
        setAllBulimSelect(arr);
    }, [data]);


    const updateData = (dat) => {
        console.log(dat);
        setUpdateModal({ open: true, obj: dat });
        // document.querySelector('.boshBulimUpdate').querySelector('.css-qc6sy-singleValue').textContent = dat.upperDepartmentName;
        // document.querySelector('.boshBulimUpdate')?.querySelector('.css-qc6sy-singleValue')?.textContent;
    }


    return (
        <div className="content mb-5">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Bo'lim</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <AdminContentNavbar />
                </ul>

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <form onSubmit={bulimQushish} className="formClear">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-outline nomlanishi"
                                                            placeholder="Placeholder"
                                                        />
                                                        <label className="label-floating">Nomlanishi</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input type="text"
                                                            className="form-control form-control-outline ruschaNomi"
                                                            placeholder="Placeholder" />
                                                        <label className="label-floating">Ruscha nomi</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input type="text"
                                                            className="form-control form-control-outline tavsif"
                                                            placeholder="Placeholder" />
                                                        <label className="label-floating">Tavsif</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <button type="submit" className="btn btn-primary w-100" style={{ height: "56px" }}>
                                                <i className="fas fa-save" style={{ fontSize: "18px" }}></i> Saqlash
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-2 d-flex align-items-center">
                                                <input type="checkbox" className='mr-1 cursor-pointer' id="bulimFunc" style={{ width: "20px", height: "20px" }} />
                                                Asosiy bo'limni tanlash
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12" id="bulim" style={{ display: "none" }}>
                                            <div className="form-group mb-0">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={allBulimSelect}
                                                    // onChange={logChange}
                                                    placeholder="Bo'limlar"
                                                    className='upperDepartmentId'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <table className="table mt-2 table-bordered table-striped table-hover Tab">
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th style={{ width: "5%" }}>№</th>
                                            <th style={{ width: "20%" }}>Nomlanishi</th>
                                            <th style={{ width: "20%" }}>Asosiy Kategoriya</th>
                                            <th style={{ width: "15%" }}>Tarjimalar</th>
                                            <th style={{ width: "5%" }}>Xodimlar</th>
                                            <th style={{ width: "20%" }}>Tashkilot Nomi</th>
                                            <th>Harakatlar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((dat, index) => (
                                            <tr key={index} className="text-left">
                                                <td style={{ textAlign: "center" }}>{dat?.orderNumber}</td>
                                                <td>{dat?.uzName}</td>
                                                <td>{dat?.upperDepartmentName}</td>
                                                <td>{dat?.ruName}</td>
                                                <td style={{ textAlign: "center" }}>{dat?.employeeCount}</td>
                                                <td>{dat?.tashkilot}</td>
                                                <td className=''>
                                                    <div className='d-flex justify-content-center'>
                                                        <span className="infoBtn bg-dark cursor-pointer" onClick={() => updateData(dat)} data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="O'zgartirish"><i className="icon-pencil5" ></i> </span>
                                                        <span className="infoBtn bg-dark cursor-pointer" onClick={() => setDeleteModal({ open: true, obj: dat })} data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="O'chirish"><i className="icon-trash" ></i> </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        {/* <!-- update --> */}
                                        {updateModal.open && (
                                            <div className='adminWindow'>
                                                <div className="modal-dialog modal-xl">
                                                    <div className="modal-content">
                                                        <div className="modal-header bg-primary text-white">
                                                            <h6 className="modal-title">Bo'lim qo'shish
                                                            </h6>
                                                            <button type="button" className="close close2" onClick={() => setUpdateModal({ open: false, obj: {} })}>&times;</button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <form className="ml-1" >
                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <div className="form-group form-group-floating row">
                                                                            <div className="col-lg-12">
                                                                                <div className="position-relative">
                                                                                    <input type="text"
                                                                                        className="form-control form-control-outline nomlanishiUpdate"
                                                                                        placeholder="Placeholder"
                                                                                        defaultValue={updateModal.obj.uzName}
                                                                                    />
                                                                                    <label
                                                                                        className="label-floating">Nomlanishi</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <div
                                                                            className="form-group form-group-floating row">
                                                                            <div className="col-lg-12">
                                                                                <div
                                                                                    className="position-relative">
                                                                                    <input type="text"
                                                                                        className="form-control form-control-outline tarjima ruschaNomiUpdate"
                                                                                        placeholder="Placeholder"
                                                                                        defaultValue={updateModal.obj.ruName}
                                                                                    />
                                                                                    <label className="label-floating">Tarjimalar (ruscha)</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <div
                                                                            className="form-group form-group-floating row">
                                                                            <div className="col-lg-12">
                                                                                <div
                                                                                    className="position-relative">
                                                                                    <input type="text"
                                                                                        className="form-control form-control-outline tavsifUpdate"
                                                                                        placeholder="Placeholder"
                                                                                        defaultValue={updateModal.obj.description}
                                                                                    />
                                                                                    <label
                                                                                        className="label-floating">Tavsif</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <div className="form-group">
                                                                            <Select
                                                                                defaultValue={{ value: updateModal.obj.upperDepartmentName, label: updateModal.obj.upperDepartmentName }}
                                                                                options={allBulimSelect}
                                                                                // onChange={logChange}
                                                                                placeholder="Bosh bo'lim"
                                                                                className='boshBulimUpdate'
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <div className="form-group form-group-floating row mb-0">
                                                                            <div className="col-lg-12">
                                                                                <div className="position-relative">
                                                                                    <button type="button" onClick={() => UzgartirishlarniSaqlash(updateModal.obj)} className="btn btn-primary" style={{ width: "100%", height: "40px" }}>
                                                                                        <i className="fas fa-save" style={{ fontSize: "18px" }}></i> Saqlash
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    {/* <div className="modal-footer">
                                                        <button type="button" className="btn btn-link"
                                                            data-dismiss="modal">Yopish</button>
                                                    </div> */}
                                                </div>
                                            </div>
                                        )}

                                        {/* delete */}
                                        {deleteModal.open && (
                                            <div className='adminWindow'>
                                                <div tabIndex="-1" aria-modal="true" role="dialog">
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
                                            </div>
                                        )}
                                    </tbody>
                                </table>

                                {/* alert */}
                                {alert.open && (
                                    <div className={`alert alert-${alert.color} alertNotice alert-styled-left alert-dismissible`}>
                                        {/* <button type="button" className="close" data-dismiss="alert"><span>×</span></button> */}
                                        <span className="font-weight-semibold">{alert.text}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
