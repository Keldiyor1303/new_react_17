import React from "react";
import BaseAdminModulNavbar from "../../baseAdminModulNavbar/BaseAdminModulNavbar";

export default function BaseAdministratorContent() {
    return (
        <div className="content mb-5">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Adminstartor</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <BaseAdminModulNavbar />
                </ul>

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        {/* <!-- Table Componet  --> */}
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modal_theme_primary"><i className="icon-user-plus "></i> Adminstartor Qo'shish</button>
                                {/* <!-- Primary modal --> */}
                                <div id="modal_theme_primary" className="modal fade" tabIndex="-1">
                                    <div className="modal-dialog modal-lg ">
                                        <div className="modal-content">
                                            <div className="modal-header bg-primary text-white">
                                                <h1 className="modal-title">Adminstartor Qo'shish</h1>
                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                            </div>

                                            <div className="modal-body">
                                                <form >
                                                    <h1 className="text-center NavLink text-color">Tashkilot Administratori</h1> <br />
                                                    <div className="col-lg-12">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form-group form-group-floating row">
                                                                    <div className="col-lg-12">
                                                                        <div className="position-relative">
                                                                            <input type="text" name="format-order-number" style={{ textTransform: "upperCase" }} className="form-control form-control-outline" placeholder="Placeholder" />
                                                                            <label className="label-floating">Pasport seria va raqami</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group form-group-floating row">
                                                                    <div className="col-lg-12">
                                                                        <div className="position-relative">
                                                                            <button type="button" className="btn btn-primary form-control form-control-outline">Qidish</button>
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
                                                                            <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
                                                                            <label className="label-floating">Ism</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="form-group form-group-floating row">
                                                                    <div className="col-lg-12">
                                                                        <div className="position-relative">
                                                                            <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
                                                                            <label className="label-floating">Familiya</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="form-group form-group-floating row">
                                                                    <div className="col-lg-12">
                                                                        <div className="position-relative">
                                                                            <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
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
                                                                            <input type="text" data-mask="+998(99) 999-99-99" className="form-control form-control-outline" placeholder="Placeholder" />
                                                                            <label className="label-floating">Telefon Raqami</label>
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
                                                                <div className="form-group form-group-floating row">
                                                                    <div className="col-lg-12">
                                                                        <div className="position-relative">
                                                                            <input type="email" className="form-control form-control-outline" placeholder="Placeholder" />
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
                                                            <div className="col-lg-6">
                                                                <div className="form-group form-group-floating row">
                                                                    <div className="col-lg-12">
                                                                        <div className="position-relative">
                                                                            <select data-placeholder="Super admin" className="form-control-outline select">
                                                                                <option value="AZ">To'rayev Hikmatullo</option>
                                                                                <option value="CO">Sodiqov Doniyor</option>
                                                                                <option value="ID">Istamov Ibrohim</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group form-group-floating row">
                                                                    <div className="col-lg-12">
                                                                        <div className="position-relative">
                                                                            <select data-placeholder="Faoliyat statusi" className="form-control-outline select">
                                                                                <option value="AZ">Sinov tariqasida</option>
                                                                                <option value="CO">O'rganish</option>
                                                                                <option value="ID">Imkoniyat bering</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="form-group form-group-floating row">
                                                                    <div className="col-lg-12">
                                                                        <div className="position-relative">
                                                                            <input type="textarea" className="form-control form-control-outline" placeholder="Placeholder" />
                                                                            <label className="label-floating">Izoh</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row w-100 d-flex justify-content-end">
                                                        <div className="col-lg-5 ml-3">
                                                            <div className="form-group text-color">
                                                                <label className="color-black">Elektron kalitni tanlang</label>
                                                                <select className="form-control form-control-sm select select-search" data-container-css-className="select-sm">
                                                                    <optgroup className="text-color" label="Elektron kalitni tanlang">
                                                                        <option value="AZ">To'rayev Hikmatullo Hamroyevich</option>
                                                                        <option value="CO">I.Istamov</option>
                                                                        <option value="ID">D.Sodiqov</option>
                                                                    </optgroup>
                                                                </select>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <hr />
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <button className="btn btn-primary" style={{ width: "100%" }}><i className="icon-check"></i>Saqlash</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /primary modal -->
                                        <!-- adminstartor table --> */}
                                <table className="table mt-2 table-bordered  table-striped table-hover Tab" >
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th style={{ width: "5%", borderRadius: "10px 0 0 0" }}>№</th>
                                            <th style={{ width: "45%" }}>FISH</th>
                                            {/* <!-- <th style="width:20%">Login</th>
                                            <th style="width:23%">Lavozimi</th> --> */}
                                            <th style={{ width: "45%" }}>Telefon Raqami</th>
                                            <th style={{ width: "5%", borderRadius: "0 10px 0 0" }} className="text-center">Xarakatlar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Ibrohim Istamov Ismoilovich</td>
                                            <td>+998988888960</td>
                                            <td>
                                                <div className="icon d-flex justify-content-center align-items-center">
                                                    {/* <!-- <a href="./korish.html" className="infoBtn bg-dark" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="Ko'rish"><span><i className="icon-eye2"></i></span> </a> --> */}
                                                    <i className="icon-pencil5 infoBtn bg-dark d-flex align-items-center justify-content-center cursor-pointer" title="O'zgartirish" />
                                                    <i className="icon-trash infoBtn bg-dark d-flex align-items-center justify-content-center cursor-pointer" title="O'chirish" />
                                                    {/* <a href="#" className="infoBtn bg-dark" data-popup="tooltip" title="O'zgartirish"><i className="icon-pencil5" ></i> </a> */}
                                                    {/* <a href="#" className="infoBtn bg-dark" data-popup="tooltip" title="O'chirish"><i className="icon-trash"></i> </a> */}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Sobir Bobojonov</td>
                                            <td>+99893659858</td>
                                            <td>
                                                <div className="icon d-flex justify-content-center align-items-center">
                                                    {/* <!-- <a href="./korish.html" className="infoBtn bg-dark" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="Ko'rish"><span><i className="icon-eye2"></i></span> </a> --> */}
                                                    <i className="icon-pencil5 infoBtn bg-dark d-flex align-items-center justify-content-center cursor-pointer" title="O'zgartirish" />
                                                    <i className="icon-trash infoBtn bg-dark d-flex align-items-center justify-content-center cursor-pointer" title="O'chirish" />
                                                    {/* <a href="#" className="infoBtn bg-dark" data-popup="tooltip" title="O'zgartirish"><i className="icon-pencil5" ></i> </a> */}
                                                    {/* <a href="#" className="infoBtn bg-dark" data-popup="tooltip" title="O'chirish"><i className="icon-trash"></i> </a> */}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* <!-- end admins --> */}
                            </div>
                        </div>
                        {/* <!-- end Table Components --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}