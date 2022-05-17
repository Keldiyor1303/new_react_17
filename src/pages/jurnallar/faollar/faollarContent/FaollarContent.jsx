import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContentNavbarJurnallar from "../../contentNavbarJurnallar/ContentNavbarJurnallar";
import Select from 'react-select'
import { axiosInstance } from "../../../../config";
import { AuthContext } from "../../../../context/AuthContext";
import { Alert } from "../../../../component/alert/Alert";
import ReactPaginate from 'react-paginate';

export default function FaollarContent() {
    const { user: currentUser } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [modul, setModul] = useState([]);
    const [deleteModal, setDeleteModal] = useState({ open: false, obj: {} });
    const [updateModal, setUpdateModal] = useState({ open: false, obj: {} });
    const [alert, setAlert] = useState({ open: false, text: "", color: "" });

    // barcha hujjat turlarini o'qib olish
    useEffect(() => {
        axiosInstance.get("module/one", {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                let arr = [];
                res.data.forEach((c, i) => {
                    arr.push({ value: c?.id, label: c?.name })
                })
                setModul(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, []);

    // barcha malumotlarni o'qib olish
    useEffect(() => {
        axiosInstance.get("journal/active", {
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

    // malumotni o'chirish
    const Uchirish = (dat) => {
        axiosInstance.delete("journal/" + dat.id, {
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
                setData({ ...data, content: arr });
                setDeleteModal({ open: false, obj: {} });
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    // o'zgartirish
    const Uzgartirish = (dat) => {
        let kartochkaUzgartirish = document.querySelector('.kartochkaUzgartirish').querySelector('.css-qc6sy-singleValue').textContent;
        let uzbekchaNomiUzgartirish = document.querySelector('.uzbekchaNomiUzgartirish').value;
        let ruschaNomiUzgartirish = document.querySelector('.ruschaNomiUzgartirish').value;
        let tasnifUzgartirish = document.querySelector('.tasnifUzgartirish').value;
        let jurnalPrefiksUzgartirish = document.querySelector('.jurnalPrefiksUzgartirish').value;
        let jurnalPostfiksUzgartirish = document.querySelector('.jurnalPostfiksUzgartirish').value;
        let boshRaqamUzgartirish = document.querySelector('.boshRaqamUzgartirish1').value;

        // card ni tanlagan payt id sini olish
        let arr = modul.filter((c, i) => {
            if (c.label === kartochkaUzgartirish) {
                return c;
            }
        })

        if (kartochkaUzgartirish) {
            if (uzbekchaNomiUzgartirish) {
                if (boshRaqamUzgartirish) {
                    // to do server
                    console.log("salom");
                    axiosInstance.patch("journal", {
                        id: dat.id,
                        moduleId: arr[0].value,
                        uzName: uzbekchaNomiUzgartirish,
                        ruName: ruschaNomiUzgartirish,
                        shortDescription: tasnifUzgartirish,
                        journalPrefix: jurnalPrefiksUzgartirish,
                        journalPostfix: jurnalPostfiksUzgartirish,
                        beginNumber: boshRaqamUzgartirish
                    }, {
                        headers: {
                            Authorization: "Bearer " + currentUser
                        }
                    })
                        .then(res => {
                            console.log(res.data);

                            let arr1 = data.content.filter((d, i) => {
                                if (d.id === res.data.id) {
                                    d.id = res.data.id;
                                    d.generalModule = res.data.generalModule;
                                    d.uzName = res.data.uzName;
                                    d.ruName = res.data.ruName;
                                    d.shortDescription = res.data.shortDescription;
                                    d.journalPrefix = res.data.journalPrefix;
                                    d.journalPostfix = res.data.journalPostfix;
                                    d.beginNumber = res.data.beginNumber;
                                }
                                return d;
                            })
                            setData({ ...data, content: arr1 });
                            Alert(setAlert, "success", "Ma'lumot muvaffaqiyatli o'zgartirildi");
                            setUpdateModal({ open: false, obj: {} });
                        })
                        .catch(err => {
                            console.log(err.response);
                            Alert(setAlert, "success", err.response?.data);
                        })
                } else {
                    Alert(setAlert, "warning", "Boshlang'ich raqam kiritilmagan");
                }
            } else {
                Alert(setAlert, "warning", "O'zbekcha nom kiritilmagan");
            }
        } else {
            Alert(setAlert, "warning", "Kartochka turi tanlanmagan");
        }
    }

    console.log(data);

    const handlePageClick = (e) => {
        axiosInstance.get("journal/active?page=" + e.selected, {
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
        <div className="content mb-5">

            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Faollar</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <ContentNavbarJurnallar />
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        {/* <!-- Table Componet  --> */}
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <table className="table table-bordered table-striped table-hover Tab mb-2" >
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
                                        {data?.content?.length > 0 && data.content?.map((dat, index) => (
                                            <>
                                                <tr style={{ fontSize: "15px" }} className="text-center" id="delete">
                                                    <td>{dat?.id}</td>
                                                    <td className="text-center">
                                                        <span className="badge badge-primary">{dat?.generalModule?.name}</span>
                                                        <hr />
                                                        <p>{dat?.uzName}</p>
                                                    </td>
                                                    <td>{dat?.shortDescription}</td>
                                                    <td>{dat?.journalPrefix}</td>
                                                    <td>{dat?.journalPostfix}</td>
                                                    <td>{dat?.beginNumber}</td>
                                                    <td>
                                                        <div className="icon d-flex justify-content-center align-items-center">
                                                            <Link to={`/jurnallar_kurish/${dat.id}`} className="infoBtn bg-dark" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="Ko'rish">
                                                                <span><i className="icon-eye2"></i></span>
                                                            </Link>
                                                            <Link to={`/jurnallar_topshiriqlar/${dat.id}`} className="infoBtn bg-dark" data-popup="tooltip" title="Log">
                                                                <span><i className="icon-stack2" ></i></span>
                                                            </Link>
                                                            <a href="#1" onClick={() => setUpdateModal({ open: true, obj: dat })} className="infoBtn bg-dark" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="O'zgartirish">
                                                                <span><i className="icon-pencil5"></i></span>
                                                            </a>
                                                            <a href="#1" type="button" className="infoBtn bg-dark" data-bs-toggle="tooltip" onClick={() => setDeleteModal({ open: true, obj: dat })} data-popup="tooltip" data-bs-placement="top" title="O'chirish"><span><i className="icon-trash"></i></span> </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </>
                                        ))}
                                    </tbody>
                                </table>
                                {/* delete */}
                                {deleteModal.open && (
                                    <div className="adminWindow">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header bg-primary text-white">
                                                    <h6 className="modal-title">Primary header</h6>
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
                                {/* update */}
                                {updateModal.open && (
                                    <div className="adminWindow">
                                        <div className="modal-dialog modal-xl">
                                            <div className="modal-content">
                                                <div className="modal-header bg-primary text-white">
                                                    <h6 className="modal-title">O'zgartirish</h6>
                                                    <button type="button" className="close" onClick={() => setUpdateModal({ open: false, obj: {} })}>&times;</button>
                                                </div>

                                                <div className="modal-body">
                                                    <form className="">
                                                        <div className="row">
                                                            <div className="col-lg-3">
                                                                <div className="form-group text-left">
                                                                    <Select
                                                                        defaultValue={{ value: updateModal.obj?.generalModule?.name, label: updateModal.obj?.generalModule?.name }}
                                                                        options={modul}
                                                                        // onChange={logChange12}
                                                                        placeholder="Kartochka turini tanlang"
                                                                        className="kartochkaUzgartirish"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="form-group form-group-floating row">
                                                                    <div className="col-lg-12">
                                                                        <div className="position-relative">
                                                                            <input
                                                                                type="text"
                                                                                className="form-control form-control-outline uzbekchaNomiUzgartirish"
                                                                                placeholder="Placeholder"
                                                                                defaultValue={updateModal.obj?.uzName}
                                                                            />
                                                                            <label className="label-floating">O'zbekcha nomi</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="form-group form-group-floating row">
                                                                    <div className="col-lg-12">
                                                                        <div className="position-relative">
                                                                            <input
                                                                                type="text"
                                                                                className="form-control form-control-outline ruschaNomiUzgartirish"
                                                                                placeholder="Placeholder"
                                                                                defaultValue={updateModal.obj?.ruName}
                                                                            />
                                                                            <label className="label-floating">Rushcha nomi</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="form-group form-group-floating row">
                                                                    <div className="col-lg-12">
                                                                        <div className="position-relative">
                                                                            <input
                                                                                type="text"
                                                                                className="form-control form-control-outline tasnifUzgartirish"
                                                                                placeholder="Placeholder"
                                                                                defaultValue={updateModal.obj?.shortDescription}
                                                                            />
                                                                            <label className="label-floating">Qisqacha tasnifi</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="form-group form-group-floating row mb-0">
                                                                    <div className="col-lg-12">
                                                                        <div className="position-relative">
                                                                            <input
                                                                                type="text"
                                                                                className="form-control form-control-outline jurnalPrefiksUzgartirish"
                                                                                placeholder="Placeholder"
                                                                                defaultValue={updateModal.obj?.journalPrefix}
                                                                            />
                                                                            <label className="label-floating">Jurnal prefiksi</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="form-group form-group-floating row mb-0">
                                                                    <div className="col-lg-12">
                                                                        <div className="position-relative">
                                                                            <input
                                                                                type="text"
                                                                                className="form-control form-control-outline form-control-sm jurnalPostfiksUzgartirish"
                                                                                aria-label="form-control-sm example"
                                                                                placeholder="Placeholder"
                                                                                defaultValue={updateModal.obj?.journalPostfix}
                                                                            />
                                                                            <label className="label-floating">Jurnal postfiksi</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="form-group form-group-floating row mb-0">
                                                                    <div className="col-lg-12">
                                                                        <div className="position-relative">
                                                                            <input
                                                                                type="number"
                                                                                className="form-control form-control-outline boshRaqamUzgartirish1"
                                                                                placeholder="Placeholder"
                                                                                // onChange={(e) => setChange(e.target.value)}
                                                                                defaultValue={updateModal.obj?.beginNumber}
                                                                            />
                                                                            <label className="label-floating">Boshlang'ich raqam</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row d-flex justify-content-center">
                                                            <div className="col-lg-6 d-flex justify-content-center">
                                                                <button type="button" className="btn btn-primary" onClick={() => Uzgartirish(updateModal.obj)}>
                                                                    <i className="icon-floppy-disk"></i> Saqlash
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {/* pagination */}
                                {data?.content?.length > 0 && (
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
                                {/* alert */}
                                {
                                    alert.open && (
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
            </div>
        </div>
    )
}