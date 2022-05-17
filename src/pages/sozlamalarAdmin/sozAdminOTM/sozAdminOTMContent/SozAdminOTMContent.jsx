import React from "react";
import SozlamalarNavbarAdmin from "../../sozlamalarNavbarAdmin/SozlamalarNavbarAdmin";

export default function SozAdminOTMContent() {
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
                                        <div className="col-lg-8">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
                                                        <label className="label-floating">Nomlanishi</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <button type="submit" style={{ width: "50%", height: "50px" }} className="btn btn-primary">Sqalsh</button>
                                        </div>
                                    </div>
                                </form>

                                <table className="table mt-2 table-bordered  table-striped table-hover Tab" >
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th style={{ borderRadius: "10px 0 0 0" }}>№</th>
                                            <th>Nomlanishi</th>
                                            <th>Harakatlar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="text-center">
                                            <td>1</td>
                                            <td>
                                                Buxoro davalat Unversiteti
                                            </td>
                                            <td className="d-flex justify-content-center" style={{ fontSize: "13px" }}>
                                                <span className="infoBtn bg-dark" data-toggle="modal" title="O'zgartirish"><i className="icon-pencil5" ></i> </span>
                                                <span className="infoBtn bg-dark" data-toggle="modal" title="O'сhirish"><i className="icon-trash" ></i> </span>
                                                {/* <a href="#1" className="btn btn-dark mr-1" data-popup="tooltip" title="Tahrirlash" data-animation="false"><i className="icon-pen"></i></a> */}
                                                {/* <a href="#1" className="btn btn-dark ml-1" data-popup="tooltip" title="O'chirish" data-animation="false"><i className="icon-trash"></i></a> */}
                                            </td>
                                        </tr>
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