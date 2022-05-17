import React from "react";
import AdminContentNavbar from "../../adminContentNavbar/AdminContentNavbar";

export default function AdminBuyruqBannerContent() {
    return (
        <div className="content">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Sozlamalar</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ borderTopRightRadius: "5px",borderTopLeftRadius: "5px"}}>
                    <AdminContentNavbar />
                </ul>

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="card">
                                            <div className="card-header bg-primary text-white header-elements-inline">
                                                <h6 className="card-title" style={{ fontWeight: "bold", fontSize: "18px" }}>
                                                    1-pozitsiya</h6>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <img src="/style/images/qaror.png" style={{ width: "70%" }}
                                                    alt="" />
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-lg-12 d-flex justify-content-center">
                                                        <button className="btn btn-primary"
                                                            style={{ width: "60%" }}>Pozitsiya uchun banner
                                                            tanlash</button>
                                                    </div>
                                                    <div className="col-lg-12 mt-2 d-flex justify-content-center">
                                                        <button className="btn btn-primary"
                                                            style={{ width: "15%" }}>Yuborish</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}