import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Select from 'react-select'

export default function ContentKengQidirish() {

    const changeFun = (val) => {
        let kiruvchi = document.getElementById('kiruvchi');
        if (val.value === "Kiruvchi") {
            kiruvchi.style.display = 'flex';
        } else {
            kiruvchi.style.display = 'none';
        }
    }

    return (
        <div className="content">

            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Keng Qidirish</h3>

            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <li className="nav-item" style={{ marginLeft: "30px" }}>
                        <NavLink to="/qidirish" activeClassName='NavLinkLi' className="nav-link">
                            <i className="icon-stack2 mr-1"></i>Izlash
                        </NavLink>
                    </li>
                </ul>

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        {/* <!-- Table Componet  --> */}
                        <div className="card">
                            <div className="card-body" style={{ padding: "20px 30px" }}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group mb-0">
                                            <Select
                                                // defaultValue={options[1]}
                                                options={[
                                                    { value: "Xujjat Turi", label: "Xujjat Turi", isDisabled: true },
                                                    { value: "Kiruvchi", label: "Kiruvchi" },
                                                    { value: "Chiquvchi", label: "Chiquvchi" },
                                                ]}
                                                onChange={changeFun}
                                                placeholder="Xujjat Turi"
                                            />
                                            {/* <select id="myInp" onChange={(e) => changeFun(e.target.value)} className='form-control' placeholder='Xujjat turini tanlang' style={{ width: "100%", height: "55px" }}>
                                                <option></option>
                                                <optgroup label="Xujjat Turi">
                                                    <option value="Kiruvchi">Kiruvchi</option>
                                                    <option value="Chiquvchi">Chiquvchi</option>
                                                </optgroup>
                                            </select> */}
                                        </div>
                                    </div>
                                    <div className="col-lg-1">
                                        <div className="form-group form-group-floating row mb-0">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <button type="button" className="btn btn-primary form-control">Export</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-1">
                                        <div className="form-group form-group-floating row mb-0">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <button type="button" className="btn btn-primary form-control">Barchasi</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4" id="kiruvchi" style={{ display: "none" }}>
                                    <div className="col-lg-3">
                                        <div className="form-group form-group-floating row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="text"
                                                        className="form-control daterange-single form-control-outline"
                                                        placeholder="Placeholder" />
                                                    <label className="label-floating">Boshlang'ich sanasi</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group form-group-floating row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="text"
                                                        className="form-control daterange-single form-control-outline"
                                                        placeholder="Placeholder" />
                                                    <label className="label-floating">Oxirgi sanasi</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group row">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Ijrochi", label: "Ijrochi", isDisabled: true },
                                                        { value: "I.Istamov", label: "I.Istamov" },
                                                        { value: "S.Bobojonov", label: "S.Bobojonov" },
                                                    ]}
                                                    // onChange={changeFun}
                                                    placeholder="Ijrochi"
                                                />
                                                {/* <select data-placeholder="Ijrochi"
                                                    className="form-control select-search  form-control-outline select">
                                                    <option></option>
                                                    <optgroup label="Ijrochi">
                                                        <option value="kiruvchi">I.Istamov</option>
                                                        <option value="chiquvchi">S.Bobojonov</option>
                                                    </optgroup>
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group row">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Holati", label: "Holati", isDisabled: true },
                                                        { value: "Ko'rilgan", label: "Ko'rilgan" },
                                                        { value: "Ko'rilmagan", label: "Ko'rilmagan" },
                                                    ]}
                                                    // onChange={changeFun}
                                                    placeholder="Holati"
                                                />
                                                {/* <select data-placeholder="Holati"
                                                    className="form-control select-search form-control-outline select">
                                                    <option></option>
                                                    <optgroup label="Holati">
                                                        <option value="kiruvchi">Ko'rilgan</option>
                                                        <option value="chiquvchi">Ko'rilmagan</option>
                                                    </optgroup>
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group form-group-floating row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="text"
                                                        className="form-control  form-control-outline"
                                                        placeholder="Placeholder" />
                                                    <label className="label-floating">Reg №</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group form-group-floating row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="text"
                                                        className="form-control form-control-outline"
                                                        placeholder="Placeholder" />
                                                    <label className="label-floating">Chiquvchi raqami</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group row">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Xujjat Turi", label: "Xujjat Turi", isDisabled: true },
                                                        { value: "Ko'rilgan", label: "Ko'rilgan" },
                                                        { value: "Ko'rilmagan", label: "Ko'rilmagan" },
                                                    ]}
                                                    // onChange={changeFun}
                                                    placeholder="Xujjat Turi"
                                                />
                                                {/* <select data-placeholder="Xujjat Turi"
                                                    className="form-control select-search  form-control-outline select">
                                                    <option></option>
                                                    <optgroup label="Xujjat Turi">
                                                        <option value="kiruvchi">Ko'rilgan</option>
                                                        <option value="chiquvchi">Ko'rilmagan</option>
                                                    </optgroup>
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group form-group-floating row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="text"
                                                        className="form-control  form-control-outline"
                                                        placeholder="Placeholder" />
                                                    <label className="label-floating">Izoh</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group row">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Korrespondent", label: "Korrespondent", isDisabled: true },
                                                        { value: "Ko'rilgan", label: "Ko'rilgan" },
                                                        { value: "Ko'rilmagan", label: "Ko'rilmagan" },
                                                    ]}
                                                    // onChange={changeFun}
                                                    placeholder="Korrespondent"
                                                />
                                                {/* <select data-placeholder="Korrespondent"
                                                    className="form-control select-search form-control-outline select">
                                                    <option></option>
                                                    <optgroup label="Korrespondent">
                                                        <option value="kiruvchi">Ko'rilgan</option>
                                                        <option value="chiquvchi">Ko'rilmagan</option>
                                                    </optgroup>
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group row">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Tasdiqlovchi", label: "Tasdiqlovchi", isDisabled: true },
                                                        { value: "Ko'rilgan", label: "Ko'rilgan" },
                                                        { value: "Ko'rilmagan", label: "Ko'rilmagan" },
                                                    ]}
                                                    // onChange={changeFun}
                                                    placeholder="Tasdiqlovchi"
                                                />
                                                {/* <select data-placeholder="Tasdiqlovchi"
                                                    className="form-control select-search  form-control-outline select">
                                                    <option></option>
                                                    <optgroup label="Tasdiqlovchi">
                                                        <option value="kiruvchi">Ko'rilgan</option>
                                                        <option value="chiquvchi">Ko'rilmagan</option>
                                                    </optgroup>
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group row">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Taqdim etish formasi", label: "Taqdim etish formasi", isDisabled: true },
                                                        { value: "Ko'rilgan", label: "Ko'rilgan" },
                                                        { value: "Ko'rilmagan", label: "Ko'rilmagan" },
                                                    ]}
                                                    // onChange={changeFun}
                                                    placeholder="Taqdim etish formasi"
                                                />
                                                {/* <select data-placeholder="Taqdim etish formasi"
                                                    className="form-control select-search form-control-outline select">
                                                    <option></option>
                                                    <optgroup label="Taqdim etish formasi">
                                                        <option value="kiruvchi">Ko'rilgan</option>
                                                        <option value="chiquvchi">Ko'rilmagan</option>
                                                    </optgroup>
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group row">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "N,U,M bo'yicha qidirish", label: "N,U,M bo'yicha qidirish", isDisabled: true },
                                                        { value: "Nazoratchi", label: "Nazoratchi" },
                                                        { value: "Umumlashtiruvchi", label: "Umumlashtiruvchi" },
                                                        { value: "Ma'lumot uchun", label: "Ma'lumot uchun" },
                                                    ]}
                                                    // onChange={changeFun}
                                                    placeholder="N, U, M bo'yicha qidirish"
                                                />
                                                {/* <select data-placeholder="Taqdim etish formasi"
                                                    className="form-control select-search form-control-outline select">
                                                    <option></option>
                                                    <optgroup label="Taqdim etish formasi">
                                                        <option value="kiruvchi">Ko'rilgan</option>
                                                        <option value="chiquvchi">Ko'rilmagan</option>
                                                    </optgroup>
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <button type="button" className="btn btn-primary">Qidirish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
