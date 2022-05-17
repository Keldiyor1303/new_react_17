import React, { useState } from "react";
import SozlamalarNavbarAdmin from "../../sozlamalarNavbarAdmin/SozlamalarNavbarAdmin";
import Select from 'react-select'

export default function SozAdminFoydalanuvchiContent() {
    const [data, setData] = useState([
        {
            id: 1,
            bulim: "Bilmayman",
            lavozim: "Bekorchi",
            FISH: "Anvar Narzullayev Hamidovich",
            telefon: "+998997090576",
            email: "SobirBekorchi@mail.ru",
            PinFL: "85595898558800"
        }
    ]);

    const Uchirish = (ind) => {
        console.log(ind);
        let arr = data.filter((d, i) => {
            if (i !== ind) {
                return d
            }
        })
        setData(arr);
        document.querySelector('.bekorQilish').click();
    }

    const uzgartirish = (ind) => {
        let ism = document.querySelector('.ism').value;
        let familiya = document.querySelector('.familiya').value;
        let otasi = document.querySelector('.otasi').value;
        let telefonRaqam = document.querySelector('.telefonRaqam').value;
        let email = document.querySelector('.email').value;
        let eXat = document.querySelector('.eXat').value;
        let pinfl = document.querySelector('.pinfl').value;
        let arr = data.map((d, i) => {
            if (i === ind) {
                d.FISH = ism + " " + familiya + " " + otasi;
                d.telefon = telefonRaqam;
                d.email = email;
                d.PinFL = pinfl;
            }
            return d;
        })
        setData(arr);
        document.querySelector('.close1').click();
    }

    return (
        <div className="content">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Foydalanuvchi</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <SozlamalarNavbarAdmin />
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
                                        {/* <!-- Primary modal --> */}
                                        <div id="modal_theme_primary" className="modal fade" tabIndex="-1">
                                            <div className="modal-dialog modal-xl">
                                                <div className="modal-content">
                                                    <div className="modal-header bg-primary text-white">
                                                        <h6 className="modal-title">Foydalanuvchi qo'shish</h6>
                                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                    </div>

                                                    <div className="modal-body">
                                                        <form  >
                                                            <h1 className="text-center NavLink text-color">Foydalanuvchi Qo'shish</h1> <br />
                                                            <div className="col-lg-12">
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <div className="form-group form-group-floating row">
                                                                            <div className="col-lg-12">
                                                                                <div className="position-relative">
                                                                                    <input type="text" data-mask="aa-999-99-99" name="format-order-number" style={{ textTransform: "upperCase" }} className="form-control form-control-outline" placeholder="Placeholder" />
                                                                                    <label className="label-floating">Pasport seria va raqami</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="form-group form-group-floating row mb-0">
                                                                            <div className="col-lg-12">
                                                                                <div className="position-relative">
                                                                                    <input type="text"
                                                                                        className="form-control daterange-single form-control-outline"
                                                                                        id="chiquvchiSana"
                                                                                        placeholder="Placeholder"
                                                                                    />
                                                                                    <label className="label-floating">Tug'ilgan kun</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="form-group form-group-floating row">
                                                                            <div className="col-lg-12">
                                                                                <div className="position-relative">
                                                                                    <button type="button" className="btn btn-primary form-control form-control-outline">
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
                                                                                    <input type="text" className="form-control form-control-outline" style={{ textTransform: "capitalize" }} placeholder="Placeholder" />
                                                                                    <label className="label-floating">Ism</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="form-group form-group-floating row">
                                                                            <div className="col-lg-12">
                                                                                <div className="position-relative">
                                                                                    <input type="text" className="form-control form-control-outline" style={{ textTransform: "capitalize" }} placeholder="Placeholder" />
                                                                                    <label className="label-floating">Familiya</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="form-group form-group-floating row">
                                                                            <div className="col-lg-12">
                                                                                <div className="position-relative">
                                                                                    <input type="text" className="form-control form-control-outline" style={{ textTransform: "capitalize" }} placeholder="Placeholder" />
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
                                                                                    <input type="text" data-mask="+998(99) 999-99-99" className="form-control form-control-outline" placeholder="Placeholder" />
                                                                                    <label className="label-floating">Telefon raqami</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="form-group form-group-floating row">
                                                                            <div className="col-lg-12">
                                                                                <div className="position-relative">
                                                                                    <input type="email" className="form-control form-control-outline" placeholder="Placeholder" />
                                                                                    <label className="label-floating">Email</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="form-group form-group-floating  row">
                                                                            <div className="col-lg-12">
                                                                                <div className="position-relative">
                                                                                    <input type="email" className="form-control form-control-outline" placeholder="Placeholder" />
                                                                                    <label className="label-floating">E-xat</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <div className="form-group form-group-floating  row">
                                                                            <div className="col-lg-12">
                                                                                <div className="position-relative">
                                                                                    <input type="text" data-mask="9999-9999-9999-99" className="form-control form-control-outline" placeholder="Placeholder" />
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
                                            <th style={{ width: "20%" }}>Bo'lim</th>
                                            <th style={{ width: "15%" }}>Lavozim</th>
                                            <th style={{ width: "20%" }}>F.I.SH</th>
                                            <th style={{ width: "10%" }}>Telefon</th>
                                            <th style={{ width: "10%" }}>E-mail</th>
                                            <th style={{ width: "15%" }}>PinFL</th>
                                            <th style={{ width: "5%" }}>Harakatlar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((dat, index) => (
                                            <>
                                                <tr className="text-center">
                                                    <td>{dat.id}</td>
                                                    <td>{dat.bulim}</td>
                                                    <td>{dat.lavozim}</td>
                                                    <td>{dat.FISH}</td>
                                                    <td>{dat.telefon}</td>
                                                    <td>{dat.email}</td>
                                                    <td>{dat.PinFL}</td>
                                                    <td className="d-flex">
                                                        <a href="#1" className="infoBtn bg-dark" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="E-imzo"><span><i className="icon-key"></i></span> </a>
                                                        <a href="#1" data-toggle="modal" data-target="#uangilash" className="infoBtn bg-dark" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="O'zgartirish"><span><i className="icon-pencil5"></i></span> </a>
                                                        <a href="#1" className="infoBtn bg-dark" data-toggle="modal" data-target="#modal_theme_primaryDelete" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="O'chirish"><span><i className="icon-trash"></i></span> </a>
                                                    </td>
                                                </tr>
                                                {/* update */}
                                                <div className="icon d-flex justify-content-center align-items-center ">
                                                    <div id="uangilash" className="modal fade" tabIndex="-1">
                                                        <div className="modal-dialog modal-xl">
                                                            <div className="modal-content">
                                                                <div className="modal-header bg-primary text-white">
                                                                    <h6 className="modal-title">O'zgartirish</h6>
                                                                    <button type="button" className="close close1" data-dismiss="modal">&times;</button>
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
                                                                                                    className="form-control form-control-outline ism"
                                                                                                    placeholder="Placeholder"
                                                                                                    defaultValue={dat.FISH.split(" ")[0]}
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
                                                                                                    className="form-control form-control-outline familiya"
                                                                                                    placeholder="Placeholder"
                                                                                                    defaultValue={dat.FISH.split(" ")[1]}
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
                                                                                                    className="form-control form-control-outline otasi"
                                                                                                    placeholder="Placeholder"
                                                                                                    defaultValue={dat.FISH.split(" ")[2]}
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
                                                                                                    className="form-control form-control-outline telefonRaqam"
                                                                                                    placeholder="Placeholder"
                                                                                                    defaultValue={dat.telefon}
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
                                                                                                    defaultValue={dat.email}
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
                                                                                                    className="form-control form-control-outline eXat"
                                                                                                    placeholder="Placeholder"
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
                                                                                                    data-mask="999-99-999-999-99"
                                                                                                    className="form-control form-control-outline pinfl"
                                                                                                    placeholder="Placeholder"
                                                                                                    defaultValue={dat.PinFL}
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
                                                                                        <button type="button" onClick={() => uzgartirish(index)} className="btn btn-primary form-control form-control-outline">
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

                                                    {/* delete */}
                                                    <div id="modal_theme_primaryDelete" className="modal fade show" tabIndex="-1" aria-modal="true" role="dialog" style={{ display: "none" }}>
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header bg-primary text-white">
                                                                    <h6 className="modal-title">O'chirish oynasi</h6>
                                                                    <button type="button" className="close" data-dismiss="modal">×</button>
                                                                </div>
                                                                <div className="modal-body ">
                                                                    <h3 style={{ textTransform: "upperCase", fontWeight: "bold" }} className="text-danger">Ogoh bo'ling!</h3>
                                                                    <h5>Ushbu ma'lumotni o'chirmoqchimisiz?</h5>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-link bekorQilish" data-dismiss="modal">Bekor qilish</button>
                                                                    <button type="button" className="btn btn-primary" onClick={() => Uchirish(index)}>O'chirish</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}