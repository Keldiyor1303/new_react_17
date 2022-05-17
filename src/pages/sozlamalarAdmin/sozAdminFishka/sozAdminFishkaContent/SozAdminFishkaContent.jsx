import React, { useState } from "react";
import SozlamalarNavbarAdmin from "../../sozlamalarNavbarAdmin/SozlamalarNavbarAdmin";

export default function SozAdminFishkaContent() {
    const [file, setFile] = useState(null);
    const [file2, setFile2] = useState(null);
    const [file3, setFile3] = useState(null);
    const [file4, setFile4] = useState(null);

    const submitHandler = (e) => {
        e.preventDefault();
        // to do server

        console.log(file);
        console.log(file2);
        console.log(file3);
        console.log(file4);
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
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="card">
                                            <div className="card-header bg-primary text-white header-elements-inline">
                                                <h6 className="card-title" style={{ fontWeight: "bold", fontSize: "18px" }}>1-pozitsiya</h6>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <img src="/style/images/dd.png" alt="" />
                                            </div>
                                            <div className="card-body">
                                                <form onSubmit={submitHandler}>
                                                    <div className="row d-flex justify-content-center">
                                                        <div className="col-lg-8">
                                                            <div className="form-group form-group-floating  row">
                                                                <div className="col-lg-10 ">
                                                                    <label className="custom-file" style={{ height: "54px" }}  >
                                                                        <input
                                                                            type="file"
                                                                            className="custom-file-input"
                                                                            onClick={(e) => e.target.value = null}
                                                                            onChange={(e) => setFile(e.target.files[0])}
                                                                            accept=".png, .jpeg, .jpg"
                                                                        />
                                                                        <span className="custom-file-label text-muted" >
                                                                            {file ? file.name : "Faylni tanlash"}
                                                                            {/* {file?.length > 0 ? `${file.length} ta fayl tanlandi` : "Faylni Tanlash"} */}
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-2">
                                                                    <button type="submit" style={{ width: "130px" }} className="btn btn-primary">
                                                                        <i className="fas fa-save mr-1" style={{ fontSize: "16px" }}></i>Saqlash
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

                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="card">
                                            <div className="card-header bg-primary text-white header-elements-inline">
                                                <h6 className="card-title" style={{ fontWeight: "bold", fontSize: "18px" }}>2-pozitsiya</h6>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <img src="/style/images/dd2.png" alt="" />
                                            </div>
                                            <div className="card-body">
                                                <form onSubmit={submitHandler}>
                                                    <div className="row d-flex justify-content-center">
                                                        <div className="col-lg-8">
                                                            <div className="form-group form-group-floating  row">
                                                                <div className="col-lg-10">
                                                                    <label className="custom-file" >
                                                                        <input
                                                                            type="file"
                                                                            className="custom-file-input"
                                                                            onClick={(e) => e.target.value = null}
                                                                            onChange={(e) => setFile2(e.target.files[0])}
                                                                            accept=".png, .jpeg, .jpg"
                                                                        />
                                                                        <span className="custom-file-label text-muted">
                                                                            {file2 ? file2.name : "Faylni tanlash"}
                                                                            {/* {file2?.length > 0 ? `${file2.length} ta fayl tanlandi` : "Faylni Tanlash"} */}
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-2">
                                                                    <button type="submit" style={{ width: "130px" }} className="btn btn-primary">
                                                                        <i className="fas fa-save mr-1" style={{ fontSize: "16px" }}></i>Saqlash
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
                                {/* 3-positsiya */}
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="card">
                                            <div className="card-header bg-primary text-white header-elements-inline">
                                                <h6 className="card-title" style={{ fontWeight: "bold", fontSize: "18px" }}>3-pozitsiya</h6>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <img src="/style/images/dd2.png" alt="" />
                                            </div>
                                            <div className="card-body">
                                                <form onSubmit={submitHandler}>
                                                    <div className="row d-flex justify-content-center">
                                                        <div className="col-lg-8">
                                                            <div className="form-group form-group-floating  row">
                                                                <div className="col-lg-10">
                                                                    <label className="custom-file" >
                                                                        <input
                                                                            type="file"
                                                                            className="custom-file-input"
                                                                            onClick={(e) => e.target.value = null}
                                                                            onChange={(e) => setFile3(e.target.files[0])}
                                                                            accept=".png, .jpeg, .jpg"
                                                                        />
                                                                        <span className="custom-file-label text-muted">
                                                                            {file3 ? file3.name : "Faylni tanlash"}
                                                                            {/* {file2?.length > 0 ? `${file2.length} ta fayl tanlandi` : "Faylni Tanlash"} */}
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-2">
                                                                    <button type="submit" style={{ width: "130px" }} className="btn btn-primary">
                                                                        <i className="fas fa-save mr-1" style={{ fontSize: "16px" }}></i>Saqlash
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
                                {/* 4-pozitsiya */}
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="card">
                                            <div className="card-header bg-primary text-white header-elements-inline">
                                                <h6 className="card-title" style={{ fontWeight: "bold", fontSize: "18px" }}>4-pozitsiya</h6>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <img src="/style/images/dd2.png" alt="" />
                                            </div>
                                            <div className="card-body">
                                                <form onSubmit={submitHandler}>
                                                    <div className="row d-flex justify-content-center">
                                                        <div className="col-lg-8">
                                                            <div className="form-group form-group-floating  row">
                                                                <div className="col-lg-10">
                                                                    <label className="custom-file" >
                                                                        <input
                                                                            type="file"
                                                                            className="custom-file-input"
                                                                            onClick={(e) => e.target.value = null}
                                                                            onChange={(e) => setFile4(e.target.files[0])}
                                                                            accept=".png, .jpeg, .jpg"
                                                                        />
                                                                        <span className="custom-file-label text-muted">
                                                                            {file4 ? file4.name : "Faylni tanlash"}
                                                                            {/* {file2?.length > 0 ? `${file2.length} ta fayl tanlandi` : "Faylni Tanlash"} */}
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-2">
                                                                    <button type="submit" style={{ width: "130px" }} className="btn btn-primary">
                                                                        <i className="fas fa-save mr-1" style={{ fontSize: "16px" }}></i>Saqlash
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
                    </div>
                </div>
            </div>
        </div>
    )
}