import React from "react";
import NavbarContentMonitoring from "../../navbarContentMonitoring/NavbarContentMonitoring";
import Select from 'react-select'

export default function NazoratKarMalContent() {
    return (
        <div className="content mb-5">

            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Nazorat Kartochkasi Ma'lumot</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <NavbarContentMonitoring />
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        {/* <!-- Table Componet  --> */}
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="form-group row">
                                            <div className="col-lg-12">
                                                <label>Nazorat Kartochkasi</label>
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Nazorat Kartochkasi", label: "Nazorat Kartochkasi", isDisabled: true },
                                                        { value: "Cheese", label: "Cheese" },
                                                        { value: "Tomatoes", label: "Tomatoes" },
                                                        { value: "Mozzarella", label: "Mozzarella" },
                                                        { value: "Mushrooms", label: "Mushrooms" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Nazorat Kartochkasi"
                                                />
                                                {/* <select className="form-control multiselect" multiple="multiple" >
                                                    <optgroup label="Nazorat Kartochkasi">
                                                        <option value="cheese">Cheese</option>
                                                        <option value="tomatoes">Tomatoes</option>
                                                        <option value="mozarella">Mozzarella</option>
                                                        <option value="mushrooms">Mushrooms</option>
                                                    </optgroup>
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group row">
                                            <div className="col-lg-12">
                                                <label>Xujjat turi</label>
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Xujjat turi", label: "Xujjat turi", isDisabled: true },
                                                        { value: "Cheese", label: "Cheese" },
                                                        { value: "Tomatoes", label: "Tomatoes" },
                                                        { value: "Mozzarella", label: "Mozzarella" },
                                                        { value: "Mushrooms", label: "Mushrooms" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Xujjat turi"
                                                />
                                                {/* <select className="form-control multiselect" multiple="multiple">
                                                    <optgroup label="Xujjat Turi">
                                                        <option value="cheese">Cheese</option>
                                                        <option value="tomatoes">Tomatoes</option>
                                                        <option value="mozarella">Mozzarella</option>
                                                        <option value="mushrooms">Mushrooms</option>
                                                    </optgroup>
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group row">
                                            <div className="col-lg-12">
                                                <label>Korrespondent</label>
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Korrespondent", label: "Korrespondent", isDisabled: true },
                                                        { value: "Cheese", label: "Cheese" },
                                                        { value: "Tomatoes", label: "Tomatoes" },
                                                        { value: "Mozzarella", label: "Mozzarella" },
                                                        { value: "Mushrooms", label: "Mushrooms" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Korrespondent"
                                                />
                                                {/* <select className="form-control multiselect" multiple="multiple">
                                                    <optgroup label="Korrespondent">
                                                        <option value="cheese">Cheese</option>
                                                        <option value="tomatoes">Tomatoes</option>
                                                        <option value="mozarella">Mozzarella</option>
                                                        <option value="mushrooms">Mushrooms</option>
                                                    </optgroup>
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group row">
                                            <div className="col-lg-12">
                                                <div className="input-group">
                                                    <input type="text" className="form-control daterange-single" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group row">
                                            <div className="col-lg-12">
                                                <div className="input-group">
                                                    <input type="text" className="form-control daterange-single" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <button className="btn btn-primary mr-1">Izlash</button>
                                        <button className="btn btn-primary mr-1">Barchasi</button>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">Export</button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <span className="dropdown-item"><i className="icon-menu7"></i> EXCEL</span>
                                                <span className="dropdown-item"><i className="icon-screen-full"></i> PDF</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <table className="table table-bordered datatable-select-single table-striped table-hover Tab my-3" >
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th style={{ width: "20%" }}>O'zbekiston Respublikasi Prezidenti Administratsiyasidan</th>
                                            <th style={{ width: "25%" }}>Kelgan hujjatlar soni</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-color">Farmonlar</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td className="text-color">Farmoyishlar</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td className="text-color">Prezident qarorlari</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td className="text-color">Ur Qonunlari</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td className="text-color">Topshiriqlar</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td className="text-color">Bayonlar</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td className="text-color">Jami</td>
                                            <td>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* <!-- end Table Components --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}