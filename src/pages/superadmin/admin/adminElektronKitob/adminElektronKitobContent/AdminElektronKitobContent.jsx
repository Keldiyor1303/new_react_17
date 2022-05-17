import React, { useContext, useEffect, useState } from "react";
import Select from 'react-select'
import { Alert } from "../../../../../component/alert/Alert";
import { axiosInstance } from "../../../../../config";
import { AuthContext } from "../../../../../context/AuthContext";
import AdminElektronKitobNavbar from "../adminElektronKitobNavbar/AdminElektronKitobNavbar";

export default function AdminElektronKitobContent() {
    const { user: currentUser } = useContext(AuthContext);
    const [modul, setModul] = useState([]);
    const [alert, setAlert] = useState({ open: false, text: "", color: "" });

    // barcha hujjat turlarini o'qib olish
    useEffect(() => {
        axiosInstance.get("module/all/org", {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data);
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

    // malumotni saqlash
    const submitHandler = (e) => {
        e.preventDefault();
        let kartochka = document.querySelector('.kartochka')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let uzbekchaNomi = document.querySelector('.uzbekchaNomi').value;
        let ruschaNomi = document.querySelector('.ruschaNomi').value;
        let tasnif = document.querySelector('.tasnif').value;
        let jurnalPrefiks = document.querySelector('.jurnalPrefiks').value;
        let jurnalPostfiks = document.querySelector('.jurnalPostfiks').value;
        let raqam = document.querySelector('.raqam').value;

        // card ni tanlagan payt id sini olish
        let arr = modul.filter((c, i) => {
            if (c.label === kartochka) {
                return c;
            }
        })

        if (kartochka) {
            if (uzbekchaNomi) {
                if (tasnif) {
                    if (raqam) {
                        // to do server
                        axiosInstance.post("journal", {
                            moduleId: arr[0]?.value,
                            uzName: uzbekchaNomi,
                            ruName: ruschaNomi,
                            shortDescription: tasnif,
                            journalPrefix: jurnalPrefiks,
                            journalPostfix: jurnalPostfiks,
                            beginNumber: parseInt(raqam)
                        }, {
                            headers: {
                                Authorization: "Bearer " + currentUser
                            }
                        })
                            .then(res => {
                                console.log(res.data);
                                document.querySelector('.kartochka').querySelector('.css-qc6sy-singleValue').textContent = "";
                                Alert(setAlert, "success", "Ma'lumot muvaffaqiyatli qo'shildi")
                                document.querySelector('.formClear').reset();
                            })
                            .catch(err => {
                                console.log(err.response);
                                Alert(setAlert, "warning", err.response.data)
                            })
                    } else {
                        Alert(setAlert, "warning", "Boshlang'ich raqam kiritilmagan");
                    }
                } else {
                    Alert(setAlert, "warning", "Qisqacha tasnif kiritilmagan");
                }
            } else {
                Alert(setAlert, "warning", "O'zbekcha nomi tanlanmagan");
            }
        } else {
            Alert(setAlert, "warning", "Modul tanlanmagan");
        }
    }

    return (
        <div className="content">
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Barchasi</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px" }}>
                    <AdminElektronKitobNavbar />
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        <div className="card">
                            <div className="card-body" style={{ padding: "5px 20px" }}>
                                <form className="mt-3 formClear" onSubmit={submitHandler}  >
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group text-left">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={modul}
                                                    // onChange={logChange12}
                                                    placeholder="Modullar"
                                                    className="kartochka"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-outline uzbekchaNomi"
                                                            placeholder="Placeholder"
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
                                                            className="form-control form-control-outline ruschaNomi"
                                                            placeholder="Placeholder"
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
                                                            className="form-control form-control-outline tasnif"
                                                            placeholder="Placeholder"
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
                                                            className="form-control form-control-outline jurnalPrefiks"
                                                            placeholder="Placeholder"
                                                        />
                                                        <label className="label-floating">Jurnal prefiksi</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row mb-0 my-3 my-sm-3 my-md-3 my-lg-0 my-xl-0">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-outline form-control-sm jurnalPostfiks"
                                                            aria-label="form-control-sm example"
                                                            placeholder="Placeholder"
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
                                                            className="form-control form-control-outline raqam"
                                                            placeholder="Placeholder"
                                                        />
                                                        <label className="label-floating">Boshlang'ich raqam</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row d-flex justify-content-center mb-3">
                                        <div className="col-lg-6 d-flex justify-content-center">
                                            <button type="submit" className="btn btn-primary"><i className="icon-floppy-disk"></i> Saqlash</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

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
    )
}