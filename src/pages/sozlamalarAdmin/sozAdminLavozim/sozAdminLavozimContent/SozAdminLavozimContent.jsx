import React, { useState } from "react";
import SozlamalarNavbarAdmin from "../../sozlamalarNavbarAdmin/SozlamalarNavbarAdmin";
import Select from 'react-select'

export default function SozAdminLavozimContent() {
    const [data, setData] = useState([
        {
            id: 1,
            bulim: "Buxoro",
            lavozim: "Buxoro",
            FISH: "Istamov Ibrohim Ismoilovich",
            rank: 1
        }
    ]);

    const Uchirish = (ind) => {
        let arr = data.filter((d, i) => {
            return i !== ind;
        })
        setData(arr);
        document.querySelector('.bekorQilish').click();
    }

    const submitChangeHandler = (ind) => {
        let arr = data.map((d, index) => {
            if (index === ind) {
                d.lavozim = document.querySelector('.uzgartirishLavozim').value;
            }
            return d;
        })
        setData(arr);
        document.querySelector('.yopishOyna').click();
    }

    return (
        <div className="content">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Lavozim</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <SozlamalarNavbarAdmin />
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Buxoro", label: "Buxoro", isDisabled: true },
                                                        { value: "Buxoro", label: "Buxoro" },
                                                        { value: "Ijrochi", label: "Ijrochi" }
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Buxoro"
                                                />
                                                {/* <select data-placeholder="Buxoro" className="form-control select-search form-control-outlin select" data-fouc>
                                                    <option></option>
                                                    <optgroup label="Buxoro">
                                                        <option value="AZ">Buxoro</option>
                                                        <option value="CO">Ijrochi</option>
                                                    </optgroup>
                                                </select> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
                                                        <label className="label-floating">Lavozimi</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <button type="button" className="btn btn-primary form-control form-control-outline">
                                                            <i className="fas fa-save" style={{ fontSize: "18px" }}></i> Saqlash
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <table className="table mt-2 table-bordered  table-striped table-hover Tab" >
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th style={{ width: "5%" }}>№</th>
                                            <th style={{ width: "30%" }}>Birktirilgan Bo'lim</th>
                                            <th style={{ width: "25%" }}>Lavozim</th>
                                            <th style={{ width: "25%" }}>F.I.SH</th>
                                            <th style={{ width: "10%" }}>RANK</th>
                                            <th style={{ width: "5%" }}>Harakatlar</th>
                                        </tr>
                                    </thead>
                                    {data.length !== 0 && (
                                        <tbody>
                                            <>
                                                {data.map((dat, index) => (
                                                    <tr className="text-center">
                                                        <td>{dat?.id}</td>
                                                        <td>{dat?.bulim}</td>
                                                        <td>{dat?.lavozim}</td>
                                                        <td>{dat?.FISH}</td>
                                                        <td>{dat?.rank}</td>
                                                        <td>
                                                            {/* update */}
                                                            <div className="icon d-flex justify-content-center align-items-center ">
                                                                <a href="#1" data-toggle="modal" data-target="#modal_theme_primary" className="infoBtn bg-dark" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="O'zgartirish"><span><i className="icon-pencil5"></i></span> </a>
                                                                <div id="modal_theme_primary" className="modal fade" tabIndex="-1">
                                                                    <div className="modal-dialog">
                                                                        <div className="modal-content">
                                                                            <div className="modal-header bg-primary text-white">
                                                                                <h6 className="modal-title">Lavozim qo'shish</h6>
                                                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                                            </div>
                                                                            <div className="modal-body">
                                                                                <form>
                                                                                    <div className="row">
                                                                                        <div className="col-lg-6">
                                                                                            <div className="form-group form-group-floating row mb-0">
                                                                                                <div className="col-lg-12">
                                                                                                    <div className="position-relative">
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            className="form-control form-control-outline uzgartirishLavozim"
                                                                                                            placeholder="Placeholder"
                                                                                                            defaultValue={dat?.lavozim}
                                                                                                        />
                                                                                                        {/* <label className="label-floating">Lavozim</label> */}
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-lg-6">
                                                                                            <div className="form-group mb-0 text-left" >
                                                                                                <div className="col-lg-12">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Ishlar boshqarmasi", label: "Ishlar boshqarmasi", isDisabled: true },
                                                                                                            { value: "Kiruvchi", label: "Kiruvchi" },
                                                                                                            { value: "Chiquvchi", label: "Chiquvchi" },
                                                                                                            { value: "Buyruqlar", label: "Buyruqlar" },
                                                                                                            { value: "Fuaqaro Murojatlari", label: "Fuaqaro Murojatlari" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Ishlar boshqarmasi"
                                                                                                    />
                                                                                                    {/* <select data-placeholder="Ishlar boshqarmasi" className="form-control select-search  form-control-outlin select" data-fouc>
                                                                                                        <option></option>
                                                                                                        <optgroup label="Ishlar boshqarmasi">
                                                                                                            <option value="AZ">Kiruvchi</option>
                                                                                                            <option value="CO">Chiquvchi</option>
                                                                                                            <option value="ID">Buyruqlar</option>
                                                                                                            <option value="WY">Fuaqaro Murojatlari</option>
                                                                                                        </optgroup>
                                                                                                    </select> */}
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
                                                                                                onClick={() => submitChangeHandler(index)}
                                                                                            >
                                                                                                <i className="fas fa-save" style={{ fontSize: "18px" }}></i> Saqlash
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                            <div className="modal-footer">
                                                                                <button type="button" className="btn btn-link yopishOyna"
                                                                                    data-dismiss="modal">Yopish</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <a href="#1" className="infoBtn bg-dark" data-toggle="modal" data-bs-toggle="tooltip" data-target="#modal_theme_primaryDelete" data-popup="tooltip" data-bs-placement="top" title="O'chirish"><span><i className="icon-trash"></i></span> </a>
                                                            </div>
                                                            {/* delete */}
                                                            <div id="modal_theme_primaryDelete" className="modal fade show" tabIndex="-1" style={{ display: "none" }} aria-modal="true" role="dialog">
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
                                                                        <div class="modal-footer">
                                                                            <button type="button" className="btn btn-link bekorQilish" data-dismiss="modal">Bekor qilish</button>
                                                                            <button type="button" className="btn btn-primary" onClick={() => Uchirish(index)}>O'chirish</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </>
                                        </tbody>
                                    )}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}