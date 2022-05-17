import React, { useEffect, useState } from "react";
import SozlamalarNavbarAdmin from "../../sozlamalarNavbarAdmin/SozlamalarNavbarAdmin";
import Select from 'react-select'

export default function SozAdminIshStoliContent() {
    const [data, setData] = useState([
        {
            id: 1,
            bulim: "Buxoro",
            lavozim: "Viloyat hokimi",
            FISH: "Zaripov Botir Komilovich",
            rank: "1",
            unikCode: "QARK10004",
        },
        {
            id: 2,
            bulim: "Buxoro",
            lavozim: "Viloyat hokimi",
            FISH: "Zaripov Botir Komilovich",
            rank: "2",
            unikCode: "QARK10004",
        }
    ]);

    // click checkbox
    useEffect(() => {
        document.querySelector('#bulimFunc').addEventListener('click', () => {
            if (document.querySelector('#bulimFunc').checked) {
                document.querySelector('#qoshimchaVazifa').style.display = "block";
            } else {
                document.querySelector('#qoshimchaVazifa').style.display = "none";
            }
        })
    }, []);

    const Uchirish = (ind) => {
        let arr = data.filter((d, i) => {
            return i !== ind;
        })
        setData(arr);
        document.querySelector('.bekorQilish').click();
    }

    return (
        <div className="content">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Sozlamalar</h3>
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
                                            <div className="form-group text-left">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Buxoro", label: "Buxoro", isDisabled: true },
                                                        { value: "Buxoro", label: "Buxoro" },
                                                        { value: "Ijrochi", label: "Ijrochi" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Buxoro"
                                                />
                                                {/* <select data-placeholder="Buxoro" className="form-control select-search  form-control-outlin select" data-fouc>
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
                                                        <label className="label-floating">Bo'limdagi ish stoli</label>
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

                                <table
                                    className="table mt-2 table-bordered table-striped table-hover Tab">
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th style={{ width: "5%" }}>№</th>
                                            <th style={{ width: "25%" }}>Bo'lim</th>
                                            <th style={{ width: "20%" }}>Lavozim</th>
                                            <th style={{ width: "20%" }}>F.I.SH</th>
                                            <th style={{ width: "10%" }}>RANK</th>
                                            <th style={{ width: "10%" }}>Unik-kodi</th>
                                            <th style={{ width: "5%" }}>Biriktirilgan</th>
                                            <td style={{ width: "5%" }}>Harakatlar</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((dat, index) => (
                                            <>
                                                <tr key={index} className="text-center">
                                                    <td>{dat.id}</td>
                                                    <td>{dat.bulim}</td>
                                                    <td>{dat.lavozim}</td>
                                                    <td>{dat.FISH}</td>
                                                    <td>{dat.rank}</td>
                                                    <td>{dat.unikCode}</td>
                                                    <td>
                                                        {/* <i className="icon-cross2 text-danger" style={{ fontSize: "22px" }}></i> */}
                                                        <i className="fas fa-check text-success" style={{ fontSize: "22px" }}></i>
                                                    </td>
                                                    <td>
                                                        <div className="icon d-flex justify-content-center align-items-center ">
                                                            <a href="#1" data-toggle="modal" data-target="#uangilash" className="infoBtn bg-dark" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="O'zgartirish"><span><i className="icon-pencil5"></i></span> </a>
                                                            <div id="uangilash" className="modal fade" tabIndex="-1">
                                                                <div className="modal-dialog modal-xl">
                                                                    <div className="modal-content">
                                                                        <div className="modal-header bg-primary text-white">
                                                                            <h6 className="modal-title">Ish stoli qo'shish</h6>
                                                                            <button type="button" className="close"
                                                                                data-dismiss="modal">&times;</button>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                            <form>
                                                                                <div className="row">
                                                                                    <div className="col-lg-12">
                                                                                        <div
                                                                                            className="form-group form-group-floating row">
                                                                                            <div className="col-lg-12">
                                                                                                <div className="position-relative">
                                                                                                    <input type="text"
                                                                                                        className="form-control form-control-outline"
                                                                                                        placeholder="Placeholder"
                                                                                                        defaultValue="Sistem Adminstrator"
                                                                                                        disabled
                                                                                                    />
                                                                                                    <label
                                                                                                        className="label-floating">Bo'lim nomi</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-lg-6">
                                                                                        <div
                                                                                            className="form-group form-group-floating row">
                                                                                            <div className="col-lg-12">
                                                                                                <div className="position-relative">
                                                                                                    <input
                                                                                                        type="text"
                                                                                                        className="form-control form-control-outline"
                                                                                                        placeholder="Placeholder"
                                                                                                        data-mask="99999999999999"
                                                                                                        defaultValue="12345678901212"
                                                                                                        disabled
                                                                                                    />
                                                                                                    <label className="label-floating">PinFL</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-6">
                                                                                        <div className="form-group row text-left">
                                                                                            <div className="col-lg-12">
                                                                                                <Select
                                                                                                    // defaultValue={options[1]}
                                                                                                    options={[
                                                                                                        { value: "Rank", label: "Rank", isDisabled: true },
                                                                                                        { value: "Buxoro shahar", label: "Buxoro shahar" },
                                                                                                        { value: "Buxoro tuman", label: "Buxoro tuman" },
                                                                                                        { value: "Jondor tuman", label: "Jondor tuman" },
                                                                                                        { value: "Vobkent tuman", label: "Vobkent tuman" },
                                                                                                    ]}
                                                                                                    // onChange={logChange12}
                                                                                                    placeholder="Rank"
                                                                                                />
                                                                                                {/* <select data-placeholder="Rank" className="form-control form-control-lg multiselect" multiple="multiple" data-button-classname="btn btn-lg" data-fouc>
                                                                                                    <option value="AZ">Buxoro shahar</option>
                                                                                                    <option value="CO">Buxoro tuman</option>
                                                                                                    <option value="CO">Jondor tuman</option>
                                                                                                    <option value="CO">Vobkent tuman</option>
                                                                                                </select> */}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-lg-6">
                                                                                        <div className="form-group row text-left">
                                                                                            <div className="col-lg-12">
                                                                                                <Select
                                                                                                    // defaultValue={options[1]}
                                                                                                    options={[
                                                                                                        { value: "Biriktirilgan ijrochi", label: "Biriktirilgan ijrochi", isDisabled: true },
                                                                                                        { value: "Buxoro", label: "Buxoro" },
                                                                                                        { value: "Ijrochi", label: "Ijrochi" }
                                                                                                    ]}
                                                                                                    // onChange={logChange12}
                                                                                                    placeholder="Biriktirilgan ijrochi"
                                                                                                />
                                                                                                {/* <select data-placeholder="Biriktirilgan ijrochi" className="form-control select-search  form-control-outlin select" data-fouc>
                                                                                                    <option></option>
                                                                                                    <optgroup label="Biriktirilgan ijrochi">
                                                                                                        <option value="AZ">Buxoro</option>
                                                                                                        <option value="CO">Ijrochi</option>
                                                                                                    </optgroup>
                                                                                                </select> */}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-6">
                                                                                        <div className="form-group row text-left">
                                                                                            <div className="col-lg-12">
                                                                                                <Select
                                                                                                    // defaultValue={options[1]}
                                                                                                    options={[
                                                                                                        { value: "Lavozimi", label: "Lavozimi", isDisabled: true },
                                                                                                        { value: "Buxoro", label: "Buxoro" },
                                                                                                        { value: "Ijrochi", label: "Ijrochi" }
                                                                                                    ]}
                                                                                                    // onChange={logChange12}
                                                                                                    placeholder="Lavozimi"
                                                                                                />
                                                                                                {/* <select data-placeholder="Lavozimi" className="form-control select-search  form-control-outlin select" data-fouc>
                                                                                                    <option></option>
                                                                                                    <optgroup label="Lavozimi">
                                                                                                        <option value="AZ">Buxoro</option>
                                                                                                        <option value="CO">Ijrochi</option>
                                                                                                    </optgroup>
                                                                                                </select> */}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row d-flex align-items-center">
                                                                                    <div className="col-lg-6">
                                                                                        <div className="form-group row text-left">
                                                                                            <div className="col-lg-12">
                                                                                                <Select
                                                                                                    // defaultValue={options[1]}
                                                                                                    options={[
                                                                                                        { value: "Xodimga beriladigan huquqlar", label: "Xodimga beriladigan huquqlar", isDisabled: true },
                                                                                                        { value: "Hujjat qo'shish", label: "Hujjat qo'shish" },
                                                                                                        { value: "Nazoratda", label: "Nazoratda" },
                                                                                                        { value: "Nazoratdan olish", label: "Nazoratdan olish" },
                                                                                                    ]}
                                                                                                    // onChange={logChange12}
                                                                                                    placeholder="Xodimga beriladigan huquqlar"
                                                                                                />
                                                                                                {/* <select data-placeholder="Xodimga beriladigan huquqlar" className="form-control form-control-lg multiselect" multiple="multiple" data-button-classname="btn btn-lg" data-fouc>
                                                                                                    <option value="AZ">Hujjat qo'shish</option>
                                                                                                    <option value="CO">Nazoratda</option>
                                                                                                    <option value="CO">Nazoratdan olish</option>
                                                                                                </select> */}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-6 d-flex align-items-center">
                                                                                        <input type="checkbox" className="mr-1 cursor-pointer" id="bulimFunc" style={{ width: "22px", height: "22px" }} />
                                                                                        Qo'shimcha lavozim yuklash
                                                                                    </div>
                                                                                    <div className="col-lg-12" style={{ display: "none" }} id="qoshimchaVazifa">
                                                                                        <div className="form-group row text-left">
                                                                                            <div className="col-lg-12">
                                                                                                <Select
                                                                                                    // defaultValue={options[1]}
                                                                                                    options={[
                                                                                                        { value: "Lavozimi", label: "Lavozimi", isDisabled: true },
                                                                                                        { value: "Buxoro", label: "Buxoro" },
                                                                                                        { value: "Ijrochi", label: "Ijrochi" },
                                                                                                    ]}
                                                                                                    // onChange={logChange12}
                                                                                                    placeholder="Qo'shimcha lavozim"
                                                                                                />
                                                                                                {/* <select data-placeholder="Qo'shimcha lavozim" className="form-control select-search  form-control-outlin select" data-fouc>
                                                                                                    <option></option>
                                                                                                    <optgroup label="Lavozimi">
                                                                                                        <option value="AZ">Buxoro</option>
                                                                                                        <option value="CO">Ijrochi</option>
                                                                                                    </optgroup>
                                                                                                </select> */}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <hr style={{ margin: "0" }} />
                                                                                <div className="row mt-3">
                                                                                    <div className="col-lg-12">
                                                                                        <div className="form-group form-group-floating row">
                                                                                            <div className="col-lg-12">
                                                                                                <div className="position-relative">
                                                                                                    <button className="btn btn-primary form-control form-control-outline">
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
                                                                </div>
                                                            </div>
                                                            {/* <a href="#1" className="infoBtn bg-dark" data-toggle="modal" data-target="#qoshish" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="Qo'shimcha rollash"><span><i className="icon-plus2"></i></span> </a> */}
                                                            <div id="qoshish" className="modal fade" tabIndex="-1">
                                                                <div className="modal-dialog modal-xl">
                                                                    <div className="modal-content">
                                                                        <div className="modal-header bg-primary text-white">
                                                                            <h6 className="modal-title">Qo'shimcha rollash</h6>
                                                                            <button type="button" className="close"
                                                                                data-dismiss="modal">&times;</button>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                            <form >
                                                                                <div className="row">
                                                                                    <div className="col-lg-12">
                                                                                        <div className="form-group text-left">
                                                                                            <Select
                                                                                                // defaultValue={options[1]}
                                                                                                options={[
                                                                                                    { value: "Rollash", label: "Rollash", isDisabled: true },
                                                                                                    { value: "Buxoro shahar", label: "Buxoro shahar" },
                                                                                                    { value: "Buxoro tuman", label: "Buxoro tuman" },
                                                                                                    { value: "Jondor tuman", label: "Jondor tuman" },
                                                                                                    { value: "Vobkent tuman", label: "Vobkent tuman" },
                                                                                                ]}
                                                                                                // onChange={logChange12}
                                                                                                placeholder="Rollash"
                                                                                            />
                                                                                            {/* <select data-placeholder="Rollash" className="form-control form-control-lg multiselect" multiple="multiple" data-button-classname="btn btn-lg" data-fouc>
                                                                                                <option value="AZ">Buxoro shahar</option>
                                                                                                <option value="CO">Buxoro tuman</option>
                                                                                                <option value="CO">Jondor tuman</option>
                                                                                                <option value="CO">Vobkent tuman</option>
                                                                                            </select> */}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-12">
                                                                                        <div className="form-group form-group-floating row">
                                                                                            <div className="col-lg-12">
                                                                                                <div className="position-relative">
                                                                                                    <button className="btn btn-primary form-control form-control-outline">
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
                                                                </div>
                                                            </div>
                                                            <a href="#1" className="infoBtn bg-dark" data-bs-toggle="tooltip" data-toggle="modal" data-target="#modal_theme_primary" data-popup="tooltip" data-bs-placement="top" title="O'chirish"><span><i className="icon-trash"></i></span> </a>
                                                            <a href="#1" className="infoBtn bg-dark" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="Xodimni bo'shatish"><span><i className="icon-minus2"></i></span> </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <div id="modal_theme_primary" className="modal fade show" tabIndex="-1" style={{ display: "none" }} aria-modal="true" role="dialog">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header bg-primary text-white">
                                                                <h6 className="modal-title">O'chirish oynasi</h6>
                                                                <button type="button" className="close" data-dismiss="modal">×</button>
                                                            </div>
                                                            <div className="modal-body text-center">
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
                                            </>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}