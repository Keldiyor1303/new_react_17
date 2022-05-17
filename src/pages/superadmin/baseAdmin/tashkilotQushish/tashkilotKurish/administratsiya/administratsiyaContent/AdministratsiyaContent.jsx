import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import TashkilotKurishNavbar from "../../tashkilotKurishNavbar/TashkilotKurishNavbar";
import Select from 'react-select';
import { axiosInstance } from "../../../../../../../config";
import { AuthContext } from "../../../../../../../context/AuthContext";
import is from "is_js";
import './administratsiya.css';
import { Alert } from '../../../../../../../component/alert/Alert';

export default function AdministratsiyaContent() {
    const { user: currentUser } = useContext(AuthContext);
    const [deleteModal, setDeleteModal] = useState({ open: false, obj: {} });
    const [updateModal, setUpdateModal] = useState({ open: false, obj: {} });
    const [user, setUser] = useState({});
    const params = useParams();
    // const [data, setData] = useState([]);
    const [purpose, setPurpose] = useState([]);
    const [organization, setOrganization] = useState([]);
    const [alert, setAlert] = useState({ open: false, text: "", color: "" });

    // id bo'yicha malumotlarni o'qib olish
    useEffect(() => {
        axiosInstance.get('organization/' + params.id, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                setOrganization(res.data?.adminstrators);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, [currentUser, params.id]);

    // faoliyat statuslarini olish
    useEffect(() => {
        axiosInstance.get("purpose", {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                let arr = [];
                res.data.forEach((d, i) => {
                    arr.push({ value: d.id, label: d.purpose });
                })
                setPurpose(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, [currentUser]);

    // pinpp va seria orqali malumotlarni qidirish
    const qidirish = () => {
        let passport1 = document.querySelector('.passport1').value.toUpperCase();
        let pinfl = document.querySelector('.pinfl').value;

        axiosInstance.post("user/getUserDetailFromApi", {
            seria: passport1,
            pinpp: pinfl
        }, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                setUser(res.data.data);
            })
            .catch(err => {
                console.log(err.response);
                Alert(setAlert, "warning", "Ma'lumot topilmadi");
            })
    }

    // malumotlarni saqlash
    const malumotlarniSaqlash = (e) => {
        e.preventDefault();
        let passport1 = document.querySelector('.passport1')?.value.toUpperCase();
        let pinfl = document.querySelector('.pinfl')?.value;
        let ism = document.querySelector('.ism')?.value;
        let familiya = document.querySelector('.familiya')?.value;
        let otasiNomi = document.querySelector('.otasiNomi')?.value;
        let telefon = document.querySelector('.telefon')?.value;
        let email = document.querySelector('.email')?.value;
        let exat = document.querySelector('.exat')?.value || null;
        let faoliyatStatusi = document.querySelector('.faoliyatStatusi').querySelector('.css-qc6sy-singleValue')?.textContent;
        let izoh = document.querySelector('.izoh').value;

        // tanlangan faoliyat statusini id sini olish
        let arr = purpose.filter((p, i) => {
            return p.label === faoliyatStatusi;
        })

        let soni = 0;
        for (let i=0; i<telefon.length; i++) {
            if (parseInt(telefon[i])> 0) {
                soni++;
            }
        }

        if (ism) {
            if (ism.length > 3) {
                if (familiya) {
                    if (otasiNomi) {
                        if (soni === 12) {
                            if (is.email(email)) {
                                if (faoliyatStatusi) {
                                    // to do server
                                    axiosInstance.post("organization/adminstrator", {
                                        comment: izoh,
                                        passportSerialNumber: passport1,
                                        pnfl: pinfl,
                                        firstName: ism,
                                        lastName: familiya,
                                        middleName: otasiNomi,
                                        birthDay: user?.birthDate,
                                        birthPlace: user?.birthPlace,
                                        birthCountry: user?.birthCountry,
                                        lifeStatus: user?.livestatus,
                                        nationality: user?.nationality,
                                        personality: null,
                                        citizenship: user?.citizenship,
                                        gender: user?.sex !== 1 ? "Ayol" : "Erkak",
                                        pport_issue_place: null,
                                        pport_issue_date: null,
                                        pport_expire_date: null,
                                        mobileNumber: telefon,
                                        email: email,
                                        exat: exat,
                                        ownInn: null,
                                        organizationId: params.id,
                                        purposeId: arr[0]?.value
                                    }, {
                                        headers: {
                                            Authorization: "Bearer " + currentUser
                                        }
                                    })
                                        .then(res => {
                                            // console.log(res.data);
                                            Alert(setAlert, "success", "Ma'lumot muvaffaqiyatli qo'shildi");
                                            document.querySelector('.ism').value = "";;
                                            document.querySelector('.familiya').value = "";
                                            document.querySelector('.otasiNomi').value = "";
                                            document.querySelector('.formaMalumotlari').reset(); //formani yangilash
                                            setUser({});
                                            document.querySelector('.close4').click();
                                            setOrganization(prev => [...prev, res.data]);
                                        })
                                        .catch(err => {
                                            console.log(err.response);
                                            Alert(setAlert, "warning", err?.response?.data);
                                            document.querySelector('.formaMalumotlari').reset(); //formani yangilash
                                            setUser({});
                                        })
                                } else {
                                    Alert(setAlert, "warning", "Faoliyat statusi tanlanmagan");
                                    // setUser({});
                                }
                            } else {
                                Alert(setAlert, "warning", "Email kiritilmagan");
                                // setUser({});
                            }
                        } else {
                            Alert(setAlert, "warning", "Telefon raqam xato kiritilgan");
                            // setUser({});
                        }
                    } else {
                        Alert(setAlert, "warning", "Otasi nomi kiritilmagan");
                        // setUser({});
                    }
                } else {
                    Alert(setAlert, "warning", "Familiya kiritilmagan");
                    // setUser({});
                }
            } else {
                Alert(setAlert, "warning", "Ism kamida 3 ta harfdan iborat bo'lishi kerak");
                // setUser({});
            }
        } else {
            Alert(setAlert, "warning", "Ism kiritilmagan");
            // setUser({});
        }
    }

    // malumotni o'chirish
    const Uchirish = (dat) => {
        axiosInstance.delete(`organization/adminstrator/${dat.id}/${params.id}`, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                let arr = organization.filter((o, i) => {
                    return o.id !== dat.id;
                })
                setOrganization(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
        setDeleteModal({ open: false, obj: {} });
    }

    const uzgartirish = (dat) => {
        setUpdateModal({ open: true, obj: dat });
        if (updateModal.open) {
            document.querySelector('.faoliyatStatusiUzgartirish').querySelector('.css-qc6sy-singleValue').textContent = dat.purpose?.purpose
        }
    }

    // malumotlarni o'zgartirish
    const malumotlarniUzgartirish = async (dat) => {
        let ismUzgartirish = document.querySelector('.ismUzgartirish').value;
        let familiyaUzgartirish = document.querySelector('.familiyaUzgartirish').value;
        let otasiNomiUzgartirish = document.querySelector('.otasiNomiUzgartirish').value;
        let telefonUzgartirish = document.querySelector('.telefonUzgartirish').value;
        let emailUzgartirish = document.querySelector('.emailUzgartirish').value;
        let exatUzgartirish = document.querySelector('.exatUzgartirish').value;
        let faoliyatStatusiUzgartirish = document.querySelector('.faoliyatStatusiUzgartirish').querySelector('.css-qc6sy-singleValue')?.textContent;
        let izohUzgartirish = document.querySelector('.izohUzgartirish').value;

        let soni = 0;
        for (let i=0; i<telefonUzgartirish.length; i++) {
            if (parseInt(telefonUzgartirish[i])> 0) {
                soni++;
            }
        }

        if (ismUzgartirish) {
            if (ismUzgartirish.length > 3) {
                if (familiyaUzgartirish) {
                    if (otasiNomiUzgartirish) {
                        if (soni === 12) {
                            if (is.email(emailUzgartirish)) {
                                if (faoliyatStatusiUzgartirish) {
                                    try {
                                        let arr1 = purpose.filter((p, i) => {
                                            return p.label === faoliyatStatusiUzgartirish;
                                        })
                                        const res = await axiosInstance.patch("organization/adminstrator", {
                                            id: dat.id,
                                            comment: izohUzgartirish || null,
                                            firstName: ismUzgartirish,
                                            lastName: familiyaUzgartirish,
                                            middleName: otasiNomiUzgartirish,
                                            mobileNumber: telefonUzgartirish,
                                            email: emailUzgartirish,
                                            exat: exatUzgartirish || null,
                                            purposeId: arr1[0].value
                                        }, {
                                            headers: {
                                                Authorization: "Bearer " + currentUser
                                            }
                                        })
                                        let arr = organization.filter((o, i) => {
                                            if (o.id === res.data.id) {
                                                o.id = res.data.id;
                                                o.comment = res.data.comment;
                                                o.firstName = res.data.firstName;
                                                o.lastName = res.data.lastName;
                                                o.middleName = res.data.middleName;
                                                o.mobileNumber = res.data.mobileNumber;
                                                o.email = res.data.email;
                                                o.exat = res.data.exat;
                                                o.purpose = res.data.purpose;
                                            }
                                            return o;
                                        })
                                        Alert(setAlert, "success", "Ma'lumot muvaffaqiyatli o'zgartirildi");
                                        setOrganization(arr);
                                        document.querySelector('.ismUzgartirish').value = "";
                                        document.querySelector('.familiyaUzgartirish').value = "";
                                        document.querySelector('.otasiNomiUzgartirish').value = "";
                                        document.querySelector('.telefonUzgartirish').value = "";
                                        document.querySelector('.emailUzgartirish').value = "";
                                        document.querySelector('.exatUzgartirish').value = "";
                                        document.querySelector('.faoliyatStatusiUzgartirish').querySelector('.css-qc6sy-singleValue').textContent = "";
                                        document.querySelector('.izohUzgartirish').value = "";
                                        setUpdateModal({ open: false, obj: {} });
                                    } catch (error) {
                                        console.log(error.response);
                                        setUpdateModal({ open: false, obj: {} });
                                        Alert(setAlert, "warning", error?.response?.data);
                                    }
                                } else {
                                    Alert(setAlert, "warning", "Faoliyat statusi tanlanmagan");
                                    setUpdateModal({ open: false, obj: {} });
                                }
                            } else {
                                Alert(setAlert, "warning", "Email kiritilmagan");
                                setUpdateModal({ open: false, obj: {} });
                            }
                        } else {
                            Alert(setAlert, "warning", "Telefon raqam xato kiritilgan");
                            setUpdateModal({ open: false, obj: {} });
                        }
                    } else {
                        Alert(setAlert, "warning", "Otasi nomi kiritilmagan");
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

    return (
        <div className="content mb-5">
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Administrator</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px" }}>
                    <TashkilotKurishNavbar params={params.id} />
                </ul>

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        {/* <!-- Table Componet  --> */}
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modal_theme_primary"><i className="icon-user-plus "></i> Administrator Qo'shish</button>
                                {/* <!-- Primary modal --> */}
                                <div id="modal_theme_primary" className="modal fade" tabIndex="-1">
                                    <div className="modal-dialog modal-lg ">
                                        <div className="modal-content">
                                            <div className="modal-header bg-primary text-white">
                                                <h1 className="modal-title">Adminstrator Qo'shish</h1>
                                                <button type="button" className="close close4" data-dismiss="modal">&times;</button>
                                            </div>

                                            <div className="modal-body">
                                                <form onSubmit={malumotlarniSaqlash} className="formaMalumotlari">
                                                    <h1 className="text-center NavLink text-color">Tashkilot Administratori</h1> <br />
                                                    <div className="col-lg-12">
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="form-group form-group-floating row">
                                                                    <div className="col-lg-12">
                                                                        <div className="position-relative">
                                                                            <input
                                                                                type="text"
                                                                                data-mask="aa-9999999"
                                                                                maxLength="10"
                                                                                style={{ textTransform: "upperCase" }}
                                                                                className="form-control form-control-outline passport1"
                                                                                placeholder="Placeholder"
                                                                            />
                                                                            <label className="label-floating">Pasport seria va raqami</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="form-group form-group-floating row mb-0">
                                                                    <div className="col-lg-12">
                                                                        <div className="position-relative">
                                                                            <input
                                                                                type="text"
                                                                                className="form-control form-control-outline pinfl"
                                                                                data-mask="9999-9999-9999-99"
                                                                                // id="chiquvchiSana"
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
                                                                            <button
                                                                                type="button"
                                                                                onClick={qidirish}
                                                                                className="btn btn-primary form-control form-control-outline"
                                                                            >
                                                                                Qidirish
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr /><br />
                                                    <div className="col-lg-12 px-0">
                                                        <div className="row m-0">
                                                            <div className="col-lg-4">
                                                                <div className="form-group form-group-floating row">
                                                                    <div className="col-lg-12">
                                                                        <div className="position-relative">
                                                                            <input
                                                                                type="text"
                                                                                className="form-control form-control-outline ism"
                                                                                placeholder="Placeholder"
                                                                                defaultValue={user?.nameLatin}
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
                                                                                placeholder="Placeholder"
                                                                                defaultValue={user?.surnameLatin}
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
                                                                                className="form-control form-control-outline otasiNomi"
                                                                                placeholder="Placeholder"
                                                                                defaultValue={user?.patronymLatin}
                                                                            />
                                                                            <label className="label-floating">Otasini Ismi</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 px-0">
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
                                                                                // defaultValue={user?.patronymLatin}
                                                                                required
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
                                                                <div className="form-group form-group-floating row">
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
                                                        </div>
                                                    </div>
                                                    {/* {visible && (
                                                        <>
                                                        </>
                                                    )} */}


                                                    <h1 className="text-center NavLink text-color">Super admin</h1> <br />
                                                    <div className="col-lg-12">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="form-group form-group-floating row">
                                                                    <div className="col-lg-12">
                                                                        <div className="position-relative">
                                                                            <Select
                                                                                // defaultValue={options[1]}
                                                                                options={purpose}
                                                                                // onChange={logChange12}
                                                                                placeholder="Faoliyat statusi"
                                                                                className="faoliyatStatusi"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="form-group form-group-floating row">
                                                                    <div className="col-lg-12">
                                                                        <div className="position-relative">
                                                                            <textarea
                                                                                // type="textarea"
                                                                                className="form-control form-control-outline izoh"
                                                                                placeholder="Placeholder"
                                                                                rows={2}
                                                                            />
                                                                            <label className="label-floating">Izoh</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2 d-flex justify-content-end" >
                                                        <div className="col-lg-6">
                                                            <div className="card mr-2">
                                                                <div className="form-group text-color d-flex align-items-end p-2">
                                                                    <i className="fas fa-key mr-1 fa-2x mb-2"></i>
                                                                    <div className="w-100" style={{ fontSize: "12px", textTransform: "capitalize" }}>
                                                                        <label className="color-black">Elektron kalitni tanlang</label>
                                                                        <Select
                                                                            // defaultValue={options[1]}
                                                                            options={[
                                                                                { value: "Elektron kalitni tanlang", label: "Elektron kalitni tanlang", isDisabled: true },
                                                                                { value: "To'rayev Hikmatullo Hamroyevich", label: "To'rayev Hikmatullo Hamroyevich" },
                                                                                { value: "I.Istamov", label: "I.Istamov" },
                                                                                { value: "D.Sodiqov", label: "D.Sodiqov" },
                                                                            ]}
                                                                            // onChange={logChange}
                                                                            placeholder="Elektron kalitni tanlang"
                                                                        // isDisabled="true"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                                                                <i className="fas fa-save mr-1"></i>Saqlash
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <table className="table mt-2 table-bordered  table-striped table-hover Tab" >
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th style={{ width: "5%" }}>№</th>
                                            <th style={{ width: "45%" }}>FISH</th>
                                            <th style={{ width: "45%" }}>Telefon Raqami</th>
                                            <th style={{ width: "5%" }} className="text-center">Xarakatlar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {organization.map((dat, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{dat?.firstName} {dat?.lastName} {dat?.middleName}</td>
                                                <td>{dat?.mobileNumber}</td>
                                                <td>
                                                    <div className="icon d-flex justify-content-center align-items-center">
                                                        <span className="infoBtn bg-dark cursor-pointer" data-popup="tooltip" title="O'zgartirish" onClick={() => uzgartirish(dat)}><i className="icon-pencil5"></i> </span>
                                                        <span className="infoBtn bg-dark cursor-pointer" data-popup="tooltip" title="O'chirish" onClick={() => setDeleteModal({ open: true, obj: dat })}><i className="icon-trash"></i> </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>


                                {/* o'chirish modal */}
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

                                {/* o'zgartirish */}
                                {updateModal.open && (
                                    <div className="adminWindow">
                                        <div className="modal-dialog modal-lg ">
                                            <div className="modal-content">
                                                <div className="modal-header bg-primary text-white">
                                                    <h1 className="modal-title">O'zgartirish</h1>
                                                    <button type="button" className="close" onClick={() => setUpdateModal({ open: false, obj: {} })} >&times;</button>
                                                </div>
                                                <div className="modal-body">
                                                    <form className="formaMalumotlariUzgartirish">
                                                        <div className="col-lg-12 px-0">
                                                            <div className="row m-0">
                                                                <div className="col-lg-4">
                                                                    <div className="form-group form-group-floating row">
                                                                        <div className="col-lg-12">
                                                                            <div className="position-relative">
                                                                                <input
                                                                                    type="text"
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
                                                                                    className="form-control form-control-outline otasiNomiUzgartirish"
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
                                                        <div className="col-lg-12 px-0">
                                                            <div className="row m-0">
                                                                <div className="col-lg-4">
                                                                    <div className="form-group form-group-floating row">
                                                                        <div className="col-lg-12">
                                                                            <div className="position-relative">
                                                                                <input
                                                                                    type="text"
                                                                                    data-mask="+998(99) 999-99-99"
                                                                                    className="form-control form-control-outline telefonUzgartirish"
                                                                                    placeholder="Placeholder"
                                                                                    defaultValue={updateModal.obj?.mobileNumber}
                                                                                    required
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
                                                                                    required
                                                                                    defaultValue={updateModal.obj?.email}
                                                                                />
                                                                                <label className="label-floating">Email</label>
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
                                                                                    className="form-control form-control-outline exatUzgartirish"
                                                                                    placeholder="Placeholder"
                                                                                    required
                                                                                    defaultValue={updateModal.obj?.exat}
                                                                                />
                                                                                <label className="label-floating">E-xat</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h1 className="text-center NavLink text-color">Super admin</h1> <br />
                                                        <div className="col-lg-12">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="form-group form-group-floating row">
                                                                        <div className="col-lg-12">
                                                                            <div className="position-relative">
                                                                                <Select
                                                                                    defaultValue={{ value: updateModal?.obj?.purpose?.purpose, label: updateModal?.obj?.purpose?.purpose }}
                                                                                    options={purpose}
                                                                                    // onChange={logChange12}
                                                                                    placeholder="Faoliyat statusi"
                                                                                    className="faoliyatStatusiUzgartirish"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <div className="form-group form-group-floating row">
                                                                        <div className="col-lg-12">
                                                                            <div className="position-relative">
                                                                                <textarea
                                                                                    // type="textarea"
                                                                                    className="form-control form-control-outline izohUzgartirish"
                                                                                    placeholder="Placeholder"
                                                                                    rows={2}
                                                                                    defaultValue={updateModal.obj?.comment}
                                                                                />
                                                                                <label className="label-floating">Izoh</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-2 d-flex justify-content-end" >
                                                            <div className="col-lg-6">
                                                                <div className="card mr-2">
                                                                    <div className="form-group text-color d-flex align-items-end p-2">
                                                                        <i className="fas fa-key mr-1 fa-2x mb-2"></i>
                                                                        <div className="w-100" style={{ fontSize: "12px", textTransform: "capitalize" }}>
                                                                            <label className="color-black">Elektron kalitni tanlang</label>
                                                                            <Select
                                                                                // defaultValue={options[1]}
                                                                                options={[
                                                                                    { value: "Elektron kalitni tanlang", label: "Elektron kalitni tanlang", isDisabled: true },
                                                                                    { value: "To'rayev Hikmatullo Hamroyevich", label: "To'rayev Hikmatullo Hamroyevich" },
                                                                                    { value: "I.Istamov", label: "I.Istamov" },
                                                                                    { value: "D.Sodiqov", label: "D.Sodiqov" },
                                                                                ]}
                                                                                // onChange={logChange}
                                                                                placeholder="Elektron kalitni tanlang"
                                                                            // isDisabled="true"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <button type="button" onClick={() => malumotlarniUzgartirish(updateModal.obj)} className="btn btn-primary" style={{ width: "100%" }}>
                                                                    <i className="fas fa-save mr-1"></i>Saqlash
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
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
    )
}