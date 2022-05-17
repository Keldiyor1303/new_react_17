import React, { useContext, useEffect, useState } from "react";
import './adminFoydalanuvchiContent.css';
import { axiosInstance } from "../../../../../../config";
import { AuthContext } from "../../../../../../context/AuthContext";
import AdminContentNavbar from "../../adminContentNavbar/AdminContentNavbar";
import ReactPaginate from "react-paginate";
import is from 'is_js';
import { Alert } from '../../../../../../component/alert/Alert';
import NumericInput from 'react-numeric-input';

export default function AdminFoydalanuvchiContent() {
    const { user: currentUser } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [qidirishData, setQidirishData] = useState({});
    const [alert, setAlert] = useState({ open: false, color: "", text: "" });
    const [deleteModal, setDeleteModal] = useState({ open: false, obj: {} });
    const [updateModal, setUpdateModal] = useState({ open: false, obj: {} });
    const [selected, setSelected] = useState(0);
    let sortInput = [];

    const Uchirish = (dat) => {
        axiosInstance.delete("user/" + dat.id, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                let arr = data.content.map((d, i) => {
                    if (d?.id !== dat.id) {
                        return d;
                    }
                })
                setData({ ...data, content: arr });
                Alert(setAlert, "success", "Ma'lumot muvaffaqiyatli o'chirildi");
            })
            .catch(err => {
                console.log(err.response);
                Alert(setAlert, "warning", err.response?.data);
            })
        setDeleteModal({ open: false, obj: {} });
    }

    const updateWindow = (dat) => {
        // console.log(dat);
        setUpdateModal({ open: true, obj: dat });
    }

    const uzgartirish = async (dat) => {
        // console.log(dat);
        let ism = document.querySelector('.ismUzgartirish').value;
        let familiya = document.querySelector('.familiyaUzgartirish').value;
        let otasi = document.querySelector('.otasiUzgartirish').value;
        let telefonRaqam = document.querySelector('.telefonRaqamUzgartirish').value;
        let email = document.querySelector('.emailUzgartirish').value;
        let eXat = document.querySelector('.eXatUzgartirish').value;
        let pinfl = document.querySelector('.pinflUzgartirish').value;


        if (ism) {
            if (ism.length > 2) {
                if (familiya) {
                    if (otasi) {
                        if (telefonRaqam.length === 18) {
                            if (is.email(email)) {
                                axiosInstance.patch("user/updateUser", {
                                    id: dat.id,
                                    lastName: familiya,
                                    surnameEngl: dat.surnameEngl,
                                    firstName: ism,
                                    pnfl: pinfl,
                                    mobileNumber: telefonRaqam,
                                    email: email,
                                    exat: eXat,
                                    middleName: otasi,
                                    fileId: 1
                                }, {
                                    headers: {
                                        Authorization: "Bearer " + currentUser
                                    }
                                })
                                    .then(res => {
                                        // console.log(res.data);
                                        axiosInstance.get("user/getAllUsers?page=" + selected, {
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
                                        Alert(setAlert, "success", "Ma'lumot muvaffaqiyatli o'zgartirildi");
                                    })
                                    .catch(err => {
                                        console.log(err.response);
                                        setUpdateModal({ open: false, obj: {} });
                                    })
                                document.querySelector('.close1').click();
                            } else {
                                Alert(setAlert, "warning", "Email xato kiritilgan");
                                setUpdateModal({ open: false, obj: {} });
                            }
                        } else {
                            Alert(setAlert, "warning", "Telefon raqam xato kiritilgan");
                            setUpdateModal({ open: false, obj: {} });
                        }
                    } else {
                        Alert(setAlert, "warning", "Otasi ismi kiritilmagan");
                        setUpdateModal({ open: false, obj: {} });
                    }
                } else {
                    Alert(setAlert, "warning", "Familiya kiritilmagan");
                    setUpdateModal({ open: false, obj: {} });
                }
            } else {
                Alert(setAlert, "warning", "Ism kamida 3 ta harfdan iborat bo'lishi kerak");
                setUpdateModal({ open: false, obj: {} });
            }
        } else {
            Alert(setAlert, "warning", "Ism kiritilmagan");
            setUpdateModal({ open: false, obj: {} });
        }
    }

    // seria va pinfl bo'yicha malumotlarni qidirish
    const qidirish = () => {
        let seria = document.querySelector('.seria').value.toUpperCase();
        let pinfl = document.querySelector('.pinfl').value;

        // to do server
        if (seria.length === 10) {
            if (pinfl.length === 17) {
                axiosInstance.post("user/getUserDetailFromApi", {
                    pinpp: pinfl,
                    seria: seria
                }, {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                    .then(res => {
                        // console.log(res.data);
                        document.querySelector('.ism').value = res.data?.data?.nameLatin;
                        document.querySelector('.familiya').value = res.data?.data?.surnameLatin;
                        document.querySelector('.otasi').value = res.data?.data?.patronymLatin;
                        document.querySelector('.date').value = res.data?.data?.birthDate;
                        setQidirishData(res.data.data);
                    })
                    .catch(err => {
                        console.log(err.response);
                        if (err.response.status === 404) {
                            Alert(setAlert, "warning", "Seria nomer yoki pinfl xato kiritilgan");
                        }
                    })
            } else {
                Alert(setAlert, "warning", "Pinfl xato kiritilgan");
            }
        } else {
            Alert(setAlert, "warning", "Passport seria xato kiritilgan");
        }
    }

    // malumotlarni saqlash
    const malumotlarniSaqlash = (e) => {
        e.preventDefault();

        let seria = document.querySelector('.seria').value.toUpperCase();
        let pinfl = document.querySelector('.pinfl').value;
        let ism = document.querySelector('.ism').value;
        let familiya = document.querySelector('.familiya').value;
        let otasi = document.querySelector('.otasi').value;
        let telefon = document.querySelector('.telefon').value;
        let email = document.querySelector('.email').value;
        let exat = document.querySelector('.exat').value;
        let date = document.querySelector('.date').value;

        if (ism) {
            if (ism.length > 2) {
                if (familiya) {
                    if (otasi) {
                        if (telefon.length === 18) {
                            if (is.email(email)) {
                                axiosInstance.post("user/createUser", {
                                    document: qidirishData.document,
                                    pnfl: pinfl,
                                    surnameEngl: qidirishData.surnameEngl,
                                    middleName: qidirishData.otasi,
                                    birthDate: date,
                                    birthPlace: qidirishData.birthPlace,
                                    birthCountry: qidirishData.birthPlace,
                                    livestatus: qidirishData.livestatus,
                                    nationality: qidirishData.nationality,
                                    citizenship: qidirishData.citizenship,
                                    sex: qidirishData.sex === 1 ? "Ayol" : "Erkak",
                                    docGivePlace: qidirishData.docGivePlace,
                                    isActive: true,
                                    mobileNumber: telefon,
                                    email: email,
                                    exat: exat || null,
                                    citizenshipId: parseInt(qidirishData.citizenshipId),
                                    nationalityId: parseInt(qidirishData.nationalityId),
                                    nameLatin: ism,
                                    surnameLatin: familiya,
                                    patronymLatin: otasi,
                                    birthCountryId: parseInt(qidirishData.birthCountryId),
                                    dateBeginDocument: qidirishData.dateBeginDocument,
                                    docGivePlaceId: qidirishData.docGivePlaceId,
                                    dateEndDocument: qidirishData.dateEndDocument,
                                }, {
                                    headers: {
                                        Authorization: "Bearer " + currentUser
                                    }
                                })
                                    .then(res => {
                                        // console.log(res.data);
                                        setData({ ...data, content: [...data.content, res.data] });
                                        Alert(setAlert, "success", "Ma'lumot muvaffaqiyatli qo'shildi");
                                        document.querySelector('.seria').value = "";
                                        document.querySelector('.pinfl').value = "";
                                        document.querySelector('.ism').value = "";
                                        document.querySelector('.familiya').value = "";
                                        document.querySelector('.otasi').value = "";
                                        document.querySelector('.telefon').value = "";
                                        document.querySelector('.email').value = "";
                                        document.querySelector('.exat').value = "";
                                        document.querySelector('.date').value = "";
                                        document.querySelector('.close3').click();
                                    })
                                    .catch(err => {
                                        console.log(err.response);
                                        Alert(setAlert, "warning", err.response?.data);
                                    })
                            } else {
                                Alert(setAlert, "warning", "Email xato kiritilgan");
                            }
                        } else {
                            Alert(setAlert, "warning", "Telefon raqam xato kiritilgan");
                        }
                    } else {
                        Alert(setAlert, "warning", "Otasi ismi kiritilmagan");
                    }
                } else {
                    Alert(setAlert, "warning", "Familiya kiritilmagan");
                }
            } else {
                Alert(setAlert, "warning", "Familiya kiritilmagan");
            }
        } else {
            Alert(setAlert, "warning", "Ism kiritilmagan");
        }
    }

    // barcha malumotlarni o'qib olish
    useEffect(() => {
        axiosInstance.get("user/getAllUsers", {
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

    const handlePageClick = (e) => {
        setSelected(e.selected);
        axiosInstance.get("user/getAllUsers?page=" + e.selected, {
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
                const res = await axiosInstance.patch(`user/orderNumber`, {
                    orderNumberDtos: arr
                }, {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                axiosInstance.get("user/getAllUsers?page=" + selected, {
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
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Foydalanuvchi</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <AdminContentNavbar />
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modal_theme_primary">
                                            <i className="icon-user-plus mr-1"></i>Foydalanuvchi qo'shish
                                        </button>
                                        <div id="modal_theme_primary" className="modal fade" tabIndex="-1">
                                            <div className="modal-dialog modal-xl">
                                                <div className="modal-content">
                                                    <div className="modal-header bg-primary text-white">
                                                        <h6 className="modal-title">Foydalanuvchi qo'shish</h6>
                                                        <button type="button" className="close close3" data-dismiss="modal">&times;</button>
                                                    </div>

                                                    <div className="modal-body">
                                                        <form onSubmit={malumotlarniSaqlash}>
                                                            <h1 className="text-center NavLink text-color">Foydalanuvchi Qo'shish</h1> <br />
                                                            <div className="col-lg-12">
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <div className="form-group form-group-floating ">
                                                                            <div className="col-lg-12">
                                                                                <div className="">
                                                                                    <input
                                                                                        type="text"
                                                                                        data-mask="aa-9999999"
                                                                                        maxLength="10"
                                                                                        style={{ textTransform: "upperCase" }}
                                                                                        className="form-control form-control-outline seria"
                                                                                        placeholder="Placeholder"
                                                                                    />
                                                                                    <label className="label-floating">Pasport seria va raqami</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="form-group form-group-floating mb-0">
                                                                            <div className="col-lg-12">
                                                                                <div className="">
                                                                                    <input
                                                                                        type="text"
                                                                                        className="form-control form-control-outline pinfl"
                                                                                        // id="chiquvchiSana"
                                                                                        data-mask="9999-9999-9999-99"
                                                                                        maxLength="17"
                                                                                        placeholder="Placeholder"
                                                                                    />
                                                                                    <label className="label-floating">PinFl</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="form-group form-group-floating row">
                                                                            <div className="col-lg-12">
                                                                                <div className="position-relative">
                                                                                    <button type="button" onClick={qidirish} className="btn btn-primary form-control form-control-outline">
                                                                                        <i className="fas fa-search"></i> Qidirish
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr /><br />
                                                            <div className="col-lg-12">
                                                                <div className="row m-0">
                                                                    <div className="col-lg-4">
                                                                        <div className="form-group form-group-floating row">
                                                                            <div className="col-lg-12">
                                                                                <div className="position-relative">
                                                                                    <input
                                                                                        type="text"
                                                                                        className="form-control form-control-outline ism"
                                                                                        style={{ textTransform: "capitalize" }}
                                                                                        placeholder="Placeholder"
                                                                                    // defaultValue={qidirishData?.nameLatin}
                                                                                    />
                                                                                    <label className="label-floating">Ism</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="form-group form-group-floating row">
                                                                            <div className="col-lg-12">
                                                                                <div className="position-relative">
                                                                                    <input
                                                                                        type="text"
                                                                                        className="form-control form-control-outline familiya"
                                                                                        style={{ textTransform: "capitalize" }}
                                                                                        placeholder="Placeholder"
                                                                                    // defaultValue={qidirishData?.surnameLatin}
                                                                                    />
                                                                                    <label className="label-floating">Familiya</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="form-group form-group-floating row">
                                                                            <div className="col-lg-12">
                                                                                <div className="position-relative">
                                                                                    <input
                                                                                        type="text"
                                                                                        className="form-control form-control-outline otasi"
                                                                                        style={{ textTransform: "capitalize" }}
                                                                                        placeholder="Placeholder"
                                                                                    // defaultValue={qidirishData?.patronymLatin}
                                                                                    />
                                                                                    <label className="label-floating">Otasini ismi</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="row m-0">
                                                                    <div className="col-lg-4">
                                                                        <div className="form-group form-group-floating row">
                                                                            <div className="col-lg-12">
                                                                                <div className="position-relative">
                                                                                    <input
                                                                                        type="text"
                                                                                        data-mask="+998(99) 999-99-99"
                                                                                        className="form-control form-control-outline telefon"
                                                                                        placeholder="Placeholder"
                                                                                        required
                                                                                    // defaultValue={qidirishData?.patronymLatin}
                                                                                    />
                                                                                    <label className="label-floating">Telefon raqami</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="form-group form-group-floating row">
                                                                            <div className="col-lg-12">
                                                                                <div className="position-relative">
                                                                                    <input
                                                                                        type="email"
                                                                                        className="form-control form-control-outline email"
                                                                                        placeholder="Placeholder"
                                                                                        required
                                                                                    />
                                                                                    <label className="label-floating">Email</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="form-group form-group-floating  row">
                                                                            <div className="col-lg-12">
                                                                                <div className="position-relative">
                                                                                    <input
                                                                                        type="email"
                                                                                        className="form-control form-control-outline exat"
                                                                                        placeholder="Placeholder"
                                                                                    // required
                                                                                    />
                                                                                    <label className="label-floating">E-xat</label>
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
                                                                                        className="form-control form-control-outline date"
                                                                                        id="chiquvchiSana"
                                                                                        placeholder="Placeholder"
                                                                                        required
                                                                                        disabled
                                                                                    // defaultValue={qidirishData?.birthDate}
                                                                                    />
                                                                                    <label className="label-floating">Tug'ilgan kun</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <hr style={{ margin: "0" }} /> */}
                                                            <div className="col-lg-12 mt-3">
                                                                <div className="form-group form-group-floating row">
                                                                    <div className="col-lg-12">
                                                                        <div className="position-relative">
                                                                            <button type="submit" className="btn btn-primary form-control form-control-outline">
                                                                                <i className="fas fa-plus mr-1"></i>Qo'shish
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <table
                                    className="table mt-2 table-bordered table-striped table-hover Tab">
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th style={{ width: "5%" }}>№</th>
                                            <th style={{ width: "25%" }}>Bo'lim</th>
                                            <th style={{ width: "15%" }}>Lavozim</th>
                                            <th style={{ width: "15%" }}>F.I.SH</th>
                                            <th style={{ width: "15%" }}>Telefon</th>
                                            <th style={{ width: "10%" }}>E-mail</th>
                                            <th style={{ width: "10%" }}>PinFL</th>
                                            <th style={{ width: "5%" }}>Harakatlar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.content?.length > 0 && data?.content?.map((dat, index) => (
                                            <>
                                                {dat?.id && (
                                                    <tr key={index}>
                                                        <td style={{ textAlign: "center" }}>
                                                            <NumericInput
                                                                value={dat.orderNumber}
                                                                onKeyDown={(e) => changeInputNumber(e, dat.id)}
                                                                onChange={(e) => inputChangeHandler(e, dat.id)}
                                                                className="adminSozlamaInput"
                                                            />
                                                        </td>
                                                        <td>{dat?.departmentName}</td>
                                                        <td>
                                                            {dat?.userPositionNames?.length > 0 && dat?.userPositionNames?.map((d, i) => (
                                                                <span>{d}</span>
                                                            ))}
                                                        </td>
                                                        <td>{dat?.firstName} {dat?.lastName} {dat?.middleName}</td>
                                                        <td style={{ textAlign: "center" }}>{dat?.mobileNumber}</td>
                                                        <td style={{ textAlign: "center" }}>{dat?.email}</td>
                                                        <td style={{ textAlign: "center" }}>{dat?.pnfl}</td>
                                                        <td>
                                                            <div className="icon d-flex justify-content-center align-items-center ">
                                                                <a href="#1" className="infoBtn bg-dark" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="E-imzo"><span><i className="icon-key"></i></span> </a>
                                                                <a href="#1" onClick={() => updateWindow(dat)} className="infoBtn bg-dark" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="O'zgartirish"><span><i className="icon-pencil5"></i></span> </a>
                                                                <a href="#1" className="infoBtn bg-dark" onClick={() => setDeleteModal({ open: true, obj: dat })} data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="O'chirish"><span><i className="icon-trash"></i></span> </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )}
                                            </>
                                        ))}
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
                                {/* update */}
                                {updateModal.open && (
                                    <div className="adminWindow">
                                        <div className="modal-dialog modal-xl">
                                            <div className="modal-content">
                                                <div className="modal-header bg-primary text-white">
                                                    <h6 className="modal-title">O'zgartirish</h6>
                                                    <button type="button" className="close close1" onClick={() => setUpdateModal({ open: false, obj: {} })}>&times;</button>
                                                </div>

                                                <div className="modal-body">
                                                    <form >
                                                        <div className="col-lg-12">
                                                            <div className="row m-0">
                                                                <div className="col-lg-4">
                                                                    <div className="form-group form-group-floating row">
                                                                        <div className="col-lg-12">
                                                                            <div className="position-relative">
                                                                                <input
                                                                                    type="text"
                                                                                    style={{ textTransform: "capitalize" }}
                                                                                    className="form-control form-control-outline ismUzgartirish"
                                                                                    placeholder="Placeholder"
                                                                                    defaultValue={updateModal.obj?.firstName}
                                                                                />
                                                                                <label className="label-floating">Ism</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="form-group form-group-floating row">
                                                                        <div className="col-lg-12">
                                                                            <div className="position-relative">
                                                                                <input
                                                                                    type="text"
                                                                                    style={{ textTransform: "capitalize" }}
                                                                                    className="form-control form-control-outline familiyaUzgartirish"
                                                                                    placeholder="Placeholder"
                                                                                    defaultValue={updateModal.obj?.lastName}
                                                                                />
                                                                                <label className="label-floating">Familiya</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="form-group form-group-floating row">
                                                                        <div className="col-lg-12">
                                                                            <div className="position-relative">
                                                                                <input
                                                                                    type="text"
                                                                                    style={{ textTransform: "capitalize" }}
                                                                                    className="form-control form-control-outline otasiUzgartirish"
                                                                                    placeholder="Placeholder"
                                                                                    defaultValue={updateModal.obj?.middleName}
                                                                                />
                                                                                <label className="label-floating">Otasini Ismi</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="row m-0">
                                                                <div className="col-lg-4">
                                                                    <div className="form-group form-group-floating row">
                                                                        <div className="col-lg-12">
                                                                            <div className="position-relative">
                                                                                <input
                                                                                    type="text"
                                                                                    data-mask="+998(99) 999-99-99"
                                                                                    className="form-control form-control-outline telefonRaqamUzgartirish"
                                                                                    placeholder="Placeholder"
                                                                                    defaultValue={updateModal.obj?.mobileNumber}
                                                                                />
                                                                                <label className="label-floating">Telefon Raqami</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="form-group form-group-floating row">
                                                                        <div className="col-lg-12">
                                                                            <div className="position-relative">
                                                                                <input
                                                                                    type="email"
                                                                                    className="form-control form-control-outline emailUzgartirish"
                                                                                    placeholder="Placeholder"
                                                                                    defaultValue={updateModal.obj?.email}
                                                                                />
                                                                                <label className="label-floating">Email</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="form-group form-group-floating  row">
                                                                        <div className="col-lg-12">
                                                                            <div className="position-relative">
                                                                                <input
                                                                                    type="email"
                                                                                    className="form-control form-control-outline eXatUzgartirish"
                                                                                    placeholder="Placeholder"
                                                                                    defaultValue={updateModal.obj?.exat}
                                                                                />
                                                                                <label className="label-floating">E-xat</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <div className="form-group form-group-floating  row">
                                                                        <div className="col-lg-12">
                                                                            <div className="position-relative">
                                                                                <input
                                                                                    type="text"
                                                                                    data-mask="9999-9999-9999-99"
                                                                                    className="form-control form-control-outline pinflUzgartirish"
                                                                                    placeholder="Placeholder"
                                                                                    defaultValue={updateModal.obj?.pnfl}
                                                                                    disabled
                                                                                />
                                                                                <label className="label-floating">PinFL</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr style={{ margin: "0" }} />
                                                        <div className="col-lg-12 mt-3">
                                                            <div className="form-group form-group-floating row">
                                                                <div className="col-lg-12">
                                                                    <div className="position-relative">
                                                                        <button type="button" onClick={() => uzgartirish(updateModal.obj)} className="btn btn-primary form-control form-control-outline">
                                                                            <i className="fas fa-plus mr-1"></i>Qo'shish
                                                                        </button>
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
                                                    <button type="button" className="btn btn-link bekorQilish" onClick={() => setDeleteModal({ open: false, obj: {} })}>Bekor qilish</button>
                                                    <button type="button" className="btn btn-primary" onClick={() => Uchirish(deleteModal.obj)}>O'chirish</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* alert */}
                                {alert.open && (
                                    <div className="d-flex justify-content-center alertNotice">
                                        <div className={`alert alert-${alert.color} alert-styled-left alert-arrow-left alert-dismissible`}>
                                            {/* <button type="button" className="close" data-dismiss="alert"><span>×</span></button> */}
                                            <span className="font-weight-semibold">{alert.text}</span>
                                        </div>
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