import React from "react";
import BaseAdminModulNavbar from "../../baseAdminModulNavbar/BaseAdminModulNavbar";

export default function DeteilHokimlikContent() {
    return (
        <div className="content mb-5">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Tashkilot tuzulishi</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <BaseAdminModulNavbar />
                </ul>

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        {/* <!-- Table Componet  --> */}
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                {/* <!-- deteil hokimlik --> */}
                                <form >
                                    <div className="row mt-4">
                                        <div className="col-lg-6">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
                                                        <label className="label-floating">Korxona Nomi</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
                                                        <label className="label-floating">Qisqacha nomi</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <select data-placeholder="Viloyat" className="form-control select-search form-control-outline select" >
                                                        <option></option>
                                                        <optgroup label="Viloyat">
                                                            <option value="AZ">Buxoro</option>
                                                            <option value="CO">Navoiy</option>
                                                            <option value="ID">Samarqand</option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <select data-placeholder="Tuman(Shahar)" className="form-control select-search  form-control-outlin select" >
                                                        <option></option>
                                                        <optgroup label="Tuman(Shahar)">
                                                            <option value="AZ">Buxor Shahar</option>
                                                            <option value="CO">Buxoro Tuman</option>
                                                            <option value="ID">Jondor Tuman</option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
                                                        <label className="label-floating">Manzil</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input type="text" data-mask="999-999-999" className="form-control InputCard form-control-outline" maxlength="9" placeholder="Placeholder" />
                                                        <label className="label-floating">Stir</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="form-group form-group-floating row InputCard">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input type="text" className="form-control form-control-outline" placeholder="placeholder" />
                                                        <label className="label-floating">F.I.O</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating  row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input type="text" data-mask="+998(99) 999-99-99" className="form-control form-control-outline InputCard" placeholder="Placeholder" />
                                                        <label className="label-floating">Telefon </label>
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
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <select data-placeholder="Status" className="form-control select-search  form-control-outline select" >
                                                        <option></option>
                                                        <optgroup label="Status">
                                                            <option value="AZ">Test Rejim</option>
                                                            <option value="CO">Navoiy</option>
                                                            <option value="ID">Samarqand</option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating  row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input type="url" className="form-control form-control-outline" placeholder="Placeholder" />
                                                        <label className="label-floating">URL</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <label className="custom-file" >
                                                        <input type="file" className="custom-file-input" />
                                                        <span className="custom-file-label" style={{ height: "54px", padding: "14px 18px" }}>Logotip</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <select data-placeholder="Yo'nalish" className="form-control select-search  form-control-outline select" >
                                                            <option></option>
                                                            <optgroup label="Yo'nalish">
                                                                <option value="AZ">Buxoro</option>
                                                                <option value="CO">Navoiy</option>
                                                                <option value="ID">Toshkent</option>
                                                                <option value="WY">Andijon</option>
                                                            </optgroup>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <select data-placeholder="Bosh tashkilot 1" className="form-control select-search  form-control-outlin select" >
                                                            <option></option>
                                                            <optgroup label="Bosh tashkilot">
                                                                <option value="AZ">Buxoro</option>
                                                                <option value="CO">Navoiy</option>
                                                                <option value="ID">Toshkent</option>
                                                                <option value="WY">Andijon</option>
                                                            </optgroup>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <select data-placeholder="Bosh tashkilot 2" className="form-control select-search  form-control-outlin select" >
                                                            <option></option>
                                                            <optgroup label="Bosh tashkilot">
                                                                <option value="AZ">Buxoro</option>
                                                                <option value="CO">Navoiy</option>
                                                                <option value="ID">Toshkent</option>
                                                                <option value="WY">Andijon</option>
                                                            </optgroup>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <button type="submit" className="btn btn-primary"><i className="icon-floppy-disk"></i> Saqlash</button>
                                        </div>
                                    </div>
                                </form>
                                {/* <!-- end deteil --> */}
                            </div>
                        </div>
                        {/* <!-- end Table Components --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}