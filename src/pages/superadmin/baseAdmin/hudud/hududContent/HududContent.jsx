import React, { useState } from "react";
import HududNavbar from "../hududNavbar/HududNavbar";
import Select from 'react-select';

let arr = [
    { id: 1, sektor: "1-sektor", mahhala: "Afshormahalla" },
    { id: 2, sektor: "2-sektor", mahhala: "M.Iqbol M.F.Y" },
    { id: 3, sektor: "3-sektor", mahhala: "Do'stlik M.F.Y" },
];

// const submitHandler () => {
//     const res = axios.post("url", {
//         pinpp: document.querySelector('.input1').value;
//     });
//     console.log(res.data);
// }

export default function HududContent() {
    let [data, setData] = useState(arr);
    return (
        <div className="content mb-5">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Hudud</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ borderTopRightRadius: "5px",borderTopLeftRadius: "5px"}}>
                    <HududNavbar />
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                {/* <!-- form --> */}
                                <form className="mt-3">
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <div className="form-group text-left">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Sektor", label: "Sektor", isDisabled: true },
                                                        { value: "1-sektor", label: "1-sektor" },
                                                        { value: "2-sektor", label: "2-sektor" },
                                                        { value: "3-sektor", label: "3-sektor" },
                                                        { value: "4-sektor", label: "4-sektor" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Sektor"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="form-group text-left">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Viloyat", label: "Viloyat", isDisabled: true },
                                                        { value: "Buxoro", label: "Buxoro" },
                                                        { value: "Navoiy", label: "Navoiy" },
                                                        { value: "Samarqand", label: "Samarqand" },
                                                        { value: "Toshkent", label: "Toshkent" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Viloyat"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="form-group text-left">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Tuman (shahar)", label: "Tuman (shahar)", isDisabled: true },
                                                        { value: "Buxoro shahar", label: "Buxoro shahar" },
                                                        { value: "Buxoro tuman", label: "Buxoro tuman" },
                                                        { value: "Jondor tuman", label: "Jondor tuman" },
                                                        { value: "Vobkent tuman", label: "Vobkent tuman" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Tuman (shahar)"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="form-group text-left" >
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Mahalla", label: "Mahalla", isDisabled: true },
                                                        { value: "Buxoro shahar", label: "Buxoro shahar" },
                                                        { value: "Buxoro tuman", label: "Buxoro tuman" },
                                                        { value: "Jondor tuman", label: "Jondor tuman" },
                                                        { value: "Vobkent tuman", label: "Vobkent tuman" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Mahalla"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <button type="submit" className="btn btn-primary" style={{ padding: "1rem" }}><i className="icon-floppy-disk mr-1"></i> Saqlash</button>
                                        </div>
                                    </div>
                                </form>
                                {/* <!-- end form --> */}
                                <div className="card mt-3">
                                    <div className="card-header bg-primary">
                                        <h6 className="card-title">
                                            <a className="collapsed" style={{ fontWeight: "bold", textTransform: "upperCase", color: "#fff" }} data-toggle="collapse" href="#bShahar">Buxoro Shahar</a>
                                        </h6>
                                    </div>

                                    <div id="bShahar" className="collapse" data-parent="#bShahar">
                                        <div className="card-body">
                                            <h3 style={{ fontWeight: "bold", textTransform: "upperCase" }} className="mt-2">1-Sektor</h3>
                                            <table className="table mt-2 table-bordered datatable-select-single table-striped table-hover Tab" >
                                                <thead>
                                                    <tr className="bg-dark text-white NavLink text-center">
                                                        <th style={{ width: "5%" }}>№</th>
                                                        <th style={{ width: "45%" }}>Sektor</th>
                                                        <th style={{ width: "45%" }}>Mahalla</th>
                                                        <th style={{ width: "5%" }}>Harakatlar</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.map((dat, index) => (
                                                        <tr className="text-center">
                                                            <td>{dat.id}</td>
                                                            <td>{dat.sektor}</td>
                                                            <td>{dat.mahhala}</td>
                                                            <td>
                                                                <div className="icon d-flex justify-content-center align-items-center">
                                                                    <button className="infoBtn bg-dark" data-toggle="modal" data-target="#update" data-popup="tooltip" title="O'zgartirish" data-bs-toggle="tooltip"  data-bs-placement="top"><i className="icon-pencil5" ></i> </button>
                                                                    <div id="update" className="modal fade" tabIndex="-1">
                                                                        <div className="modal-dialog modal-lg ">
                                                                            <div className="modal-content">
                                                                                <div className="modal-header bg-primary text-white">
                                                                                    <h1 className="modal-title">Sektorni yangilash</h1>
                                                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                                                </div>

                                                                                <div className="modal-body">
                                                                                    {/* <!-- card1 --> */}
                                                                                    <form className="mt-3">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group text-left">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Sektor", label: "Sektor", isDisabled: true },
                                                                                                            { value: "1-sektor", label: "1-sektor" },
                                                                                                            { value: "2-sektor", label: "2-sektor" },
                                                                                                            { value: "3-sektor", label: "3-sektor" },
                                                                                                            { value: "4-sektor", label: "4-sektor" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Sektor"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group text-left">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Viloyat", label: "Viloyat", isDisabled: true },
                                                                                                            { value: "Buxoro", label: "Buxoro" },
                                                                                                            { value: "Navoiy", label: "Navoiy" },
                                                                                                            { value: "Samarqand", label: "Samarqand" },
                                                                                                            { value: "Toshkent", label: "Toshkent" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Viloyat"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group text-left">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Tuman (shahar)", label: "Tuman (shahar)", isDisabled: true },
                                                                                                            { value: "Buxoro shahar", label: "Buxoro shahar" },
                                                                                                            { value: "Buxoro tuman", label: "Buxoro tuman" },
                                                                                                            { value: "Jondor tuman", label: "Jondor tuman" },
                                                                                                            { value: "Vobkent tuman", label: "Vobkent tuman" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Tuman (shahar)"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group text-left">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Mahalla", label: "Mahalla", isDisabled: true },
                                                                                                            { value: "Buxoro shahar", label: "Buxoro shahar" },
                                                                                                            { value: "Buxoro tuman", label: "Buxoro tuman" },
                                                                                                            { value: "Jondor tuman", label: "Jondor tuman" },
                                                                                                            { value: "Vobkent tuman", label: "Vobkent tuman" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Mahalla"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-2">
                                                                                                <button type="submit" className="btn btn-primary"><i className="icon-floppy-disk"></i> Saqlash</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* <i className="icon-trash infoBtn bg-dark d-flex align-items-center justify-content-center cursor-pointer" title="O'chirish" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" /> */}
                                                                    <a href="#1" className="infoBtn bg-dark" data-popup="tooltip" title="O'chirish"><i className="icon-trash" ></i> </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <h3 style={{ fontWeight: "bold", textTransform: "upperCase" }} className="mt-2">2-Sektor</h3>
                                            <table className="table mt-2 table-bordered datatable-select-single table-striped table-hover Tab" >
                                                <thead>
                                                    <tr className="bg-dark text-white NavLink text-center">
                                                        <th style={{ width: "5%" }}>№</th>
                                                        <th style={{ width: "45%" }}>Sektor</th>
                                                        <th style={{ width: "45%" }}>Mahalla</th>
                                                        <th style={{ width: "5%" }}>Harakatlar</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.map((dat, index) => (
                                                        <tr className="text-center">
                                                            <td>{dat.id}</td>
                                                            <td>{dat.sektor}</td>
                                                            <td>{dat.mahhala}</td>
                                                            <td>
                                                                <div className="icon d-flex justify-content-center align-items-center">
                                                                    <button className="infoBtn bg-dark" data-toggle="modal" data-target="#update" data-popup="tooltip" title="O'zgartirish" data-bs-toggle="tooltip"  data-bs-placement="top"><i className="icon-pencil5" ></i> </button>
                                                                    <div id="update" className="modal fade" tabIndex="-1">
                                                                        <div className="modal-dialog modal-lg ">
                                                                            <div className="modal-content">
                                                                                <div className="modal-header bg-primary text-white">
                                                                                    <h1 className="modal-title">Sektorni yangilash</h1>
                                                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                                                </div>

                                                                                <div className="modal-body">
                                                                                    {/* <!-- card1 --> */}
                                                                                    <form className="mt-3">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group text-left">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Sektor", label: "Sektor", isDisabled: true },
                                                                                                            { value: "1-sektor", label: "1-sektor" },
                                                                                                            { value: "2-sektor", label: "2-sektor" },
                                                                                                            { value: "3-sektor", label: "3-sektor" },
                                                                                                            { value: "4-sektor", label: "4-sektor" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Sektor"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group text-left">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Viloyat", label: "Viloyat", isDisabled: true },
                                                                                                            { value: "Buxoro", label: "Buxoro" },
                                                                                                            { value: "Navvoiy", label: "Navvoiy" },
                                                                                                            { value: "Samarqand", label: "Samarqand" },
                                                                                                            { value: "Toshkent", label: "Toshkent" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Viloyat"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group text-left">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Tuman (shahar)", label: "Tuman (shahar)", isDisabled: true },
                                                                                                            { value: "Buxoro shahar", label: "Buxoro shahar" },
                                                                                                            { value: "Buxoro tuman", label: "Buxoro tuman" },
                                                                                                            { value: "Jondor tuman", label: "Jondor tuman" },
                                                                                                            { value: "Vobkent tuman", label: "Vobkent tuman" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Tuman (shahar)"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group text-left">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Mahalla", label: "Mahalla", isDisabled: true },
                                                                                                            { value: "Buxoro shahar", label: "Buxoro shahar" },
                                                                                                            { value: "Buxoro tuman", label: "Buxoro tuman" },
                                                                                                            { value: "Jondor tuman", label: "Jondor tuman" },
                                                                                                            { value: "Vobkent tuman", label: "Vobkent tuman" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Mahalla"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-2">
                                                                                                <button type="submit" className="btn btn-primary"><i className="icon-floppy-disk"></i> Saqlash</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* <i className="icon-trash infoBtn bg-dark d-flex align-items-center justify-content-center cursor-pointer" title="O'chirish" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" /> */}
                                                                    <a href="#1" className="infoBtn bg-dark" data-popup="tooltip" title="O'chirish"><i className="icon-trash" ></i> </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <h3 style={{ fontWeight: "bold", textTransform: "upperCase" }} className="mt-2">3-Sektor</h3>
                                            <table className="table mt-2 table-bordered datatable-select-single table-striped table-hover Tab" >
                                                <thead>
                                                    <tr className="bg-dark text-white NavLink text-center">
                                                        <th style={{ width: "5%" }}>№</th>
                                                        <th style={{ width: " 45%" }}>Sektor</th>
                                                        <th style={{ width: " 45%" }}>Mahalla</th>
                                                        <th style={{ width: " 5%" }}>Harakatlar</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.map((dat, index) => (
                                                        <tr className="text-center">
                                                            <td>{dat.id}</td>
                                                            <td>{dat.sektor}</td>
                                                            <td>{dat.mahhala}</td>
                                                            <td>
                                                                <div className="icon d-flex justify-content-center align-items-center">
                                                                    <button className="infoBtn bg-dark" data-toggle="modal" data-target="#update" data-popup="tooltip" title="O'zgartirish" data-bs-toggle="tooltip"  data-bs-placement="top"><i className="icon-pencil5" ></i> </button>
                                                                    <div id="update" className="modal fade" tabIndex="-1">
                                                                        <div className="modal-dialog modal-lg ">
                                                                            <div className="modal-content">
                                                                                <div className="modal-header bg-primary text-white">
                                                                                    <h1 className="modal-title">Sektorni yangilash</h1>
                                                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                                                </div>

                                                                                <div className="modal-body">
                                                                                    {/* <!-- card1 --> */}
                                                                                    <form className="mt-3">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Sektor", label: "Sektor", isDisabled: true },
                                                                                                            { value: "1-sektor", label: "1-sektor" },
                                                                                                            { value: "2-sektor", label: "2-sektor" },
                                                                                                            { value: "3-sektor", label: "3-sektor" },
                                                                                                            { value: "4-sektor", label: "4-sektor" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Sektor"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Viloyat", label: "Viloyat", isDisabled: true },
                                                                                                            { value: "Buxoro", label: "Buxoro" },
                                                                                                            { value: "Navvoiy", label: "Navvoiy" },
                                                                                                            { value: "Samarqand", label: "Samarqand" },
                                                                                                            { value: "Toshkent", label: "Toshkent" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Viloyat"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Tuman (shahar)", label: "Tuman (shahar)", isDisabled: true },
                                                                                                            { value: "Buxoro shahar", label: "Buxoro shahar" },
                                                                                                            { value: "Buxoro tuman", label: "Buxoro tuman" },
                                                                                                            { value: "Jondor tuman", label: "Jondor tuman" },
                                                                                                            { value: "Vobkent tuman", label: "Vobkent tuman" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Tuman (shahar)"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Mahalla", label: "Mahalla", isDisabled: true },
                                                                                                            { value: "Buxoro shahar", label: "Buxoro shahar" },
                                                                                                            { value: "Buxoro tuman", label: "Buxoro tuman" },
                                                                                                            { value: "Jondor tuman", label: "Jondor tuman" },
                                                                                                            { value: "Vobkent tuman", label: "Vobkent tuman" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Mahalla"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-2">
                                                                                                <button type="submit" className="btn btn-primary"><i className="icon-floppy-disk"></i> Saqlash</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* <i className="icon-trash infoBtn bg-dark d-flex align-items-center justify-content-center cursor-pointer" title="O'chirish" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" /> */}
                                                                    <a href="#1" className="infoBtn bg-dark" data-popup="tooltip" title="O'chirish"><i className="icon-trash" ></i> </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <h3 style={{ fontWeight: "bold", textTransform: "upperCase" }} className="mt-2">4-Sektor</h3>
                                            <table className="table mt-2 table-bordered datatable-select-single table-striped table-hover Tab" >
                                                <thead>
                                                    <tr className="bg-dark text-white NavLink text-center">
                                                        <th style={{ width: "5%" }}>№</th>
                                                        <th style={{ width: " 45%" }}>Sektor</th>
                                                        <th style={{ width: " 45%" }}>Mahalla</th>
                                                        <th style={{ width: " 5%" }}>Harakatlar</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.map((dat, index) => (
                                                        <tr className="text-center">
                                                            <td>{dat.id}</td>
                                                            <td>{dat.sektor}</td>
                                                            <td>{dat.mahhala}</td>
                                                            <td>
                                                                <div className="icon d-flex justify-content-center align-items-center">
                                                                    <button className="infoBtn bg-dark" data-toggle="modal" data-target="#update" data-popup="tooltip" title="O'zgartirish" data-bs-toggle="tooltip"  data-bs-placement="top"><i className="icon-pencil5" ></i> </button>
                                                                    <div id="update" className="modal fade" tabIndex="-1">
                                                                        <div className="modal-dialog modal-lg ">
                                                                            <div className="modal-content">
                                                                                <div className="modal-header bg-primary text-white">
                                                                                    <h1 className="modal-title">Sektorni yangilash</h1>
                                                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                                                </div>

                                                                                <div className="modal-body">
                                                                                    {/* <!-- card1 --> */}
                                                                                    <form className="mt-3">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Sektor", label: "Sektor", isDisabled: true },
                                                                                                            { value: "1-sektor", label: "1-sektor" },
                                                                                                            { value: "2-sektor", label: "2-sektor" },
                                                                                                            { value: "3-sektor", label: "3-sektor" },
                                                                                                            { value: "4-sektor", label: "4-sektor" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Sektor"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Viloyat", label: "Viloyat", isDisabled: true },
                                                                                                            { value: "Buxoro", label: "Buxoro" },
                                                                                                            { value: "Navoiy", label: "Navoiy" },
                                                                                                            { value: "Samarqand", label: "Samarqand" },
                                                                                                            { value: "Toshkent", label: "Toshkent" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Viloyat"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Tuman (shahar)", label: "Tuman (shahar)", isDisabled: true },
                                                                                                            { value: "Buxoro shahar", label: "Buxoro shahar" },
                                                                                                            { value: "Buxoro tuman", label: "Buxoro tuman" },
                                                                                                            { value: "Jondor tuman", label: "Jondor tuman" },
                                                                                                            { value: "Vobkent tuman", label: "Vobkent tuman" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Tuman (shahar)"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Mahalla", label: "Mahalla", isDisabled: true },
                                                                                                            { value: "Buxoro shahar", label: "Buxoro shahar" },
                                                                                                            { value: "Buxoro tuman", label: "Buxoro tuman" },
                                                                                                            { value: "Jondor tuman", label: "Jondor tuman" },
                                                                                                            { value: "Vobkent tuman", label: "Vobkent tuman" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Mahalla"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-2">
                                                                                                <button type="submit" className="btn btn-primary"><i className="icon-floppy-disk"></i> Saqlash</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* <i className="icon-trash infoBtn bg-dark d-flex align-items-center justify-content-center cursor-pointer" title="O'chirish" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" /> */}
                                                                    <a href="#1" className="infoBtn bg-dark" data-popup="tooltip" title="O'chirish"><i className="icon-trash" ></i> </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-3">
                                    <div className="card-header bg-primary">
                                        <h6 className="card-title">
                                            <a className="collapsed" style={{ fontWeight: "bold", textTransform: "upperCase", color: "#fff" }} data-toggle="collapse" href="#bTuman">Buxoro Tuman</a>
                                        </h6>
                                    </div>

                                    <div id="bTuman" className="collapse" data-parent="#bTuman">
                                        <div className="card-body">
                                            <h3 style={{ fontWeight: "bold", textTransform: "upperCase" }} className="mt-2">1-Sektor</h3>
                                            <table className="table mt-2 table-bordered datatable-select-single table-striped table-hover Tab" >
                                                <thead>
                                                    <tr className="bg-dark text-white NavLink text-center">
                                                        <th style={{ width: "5%" }} >№</th>
                                                        <th style={{ width: "45%" }}>Sektor</th>
                                                        <th style={{ width: "45%" }}>Mahalla</th>
                                                        <th style={{ width: "5%" }}>Harakatlar</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.map((dat, index) => (
                                                        <tr className="text-center">
                                                            <td>{dat.id}</td>
                                                            <td>{dat.sektor}</td>
                                                            <td>{dat.mahhala}</td>
                                                            <td>
                                                                <div className="icon d-flex justify-content-center align-items-center">
                                                                    <button className="infoBtn bg-dark" data-toggle="modal" data-target="#update" data-popup="tooltip" title="O'zgartirish" data-bs-toggle="tooltip"  data-bs-placement="top"><i className="icon-pencil5" ></i> </button>
                                                                    <div id="update" className="modal fade" tabIndex="-1">
                                                                        <div className="modal-dialog modal-lg ">
                                                                            <div className="modal-content">
                                                                                <div className="modal-header bg-primary text-white">
                                                                                    <h1 className="modal-title">Sektorni yangilash</h1>
                                                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                                                </div>

                                                                                <div className="modal-body">
                                                                                    {/* <!-- card1 --> */}
                                                                                    <form className="mt-3">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Sektor", label: "Sektor", isDisabled: true },
                                                                                                            { value: "1-sektor", label: "1-sektor" },
                                                                                                            { value: "2-sektor", label: "2-sektor" },
                                                                                                            { value: "3-sektor", label: "3-sektor" },
                                                                                                            { value: "4-sektor", label: "4-sektor" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Sektor"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Viloyat", label: "Viloyat", isDisabled: true },
                                                                                                            { value: "Buxoro", label: "Buxoro" },
                                                                                                            { value: "Navoiy", label: "Navoiy" },
                                                                                                            { value: "Samarqand", label: "Samarqand" },
                                                                                                            { value: "Toshkent", label: "Toshkent" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Viloyat"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Tuman (shahar)", label: "Tuman (shahar)", isDisabled: true },
                                                                                                            { value: "Buxoro shahar", label: "Buxoro shahar" },
                                                                                                            { value: "Buxoro tuman", label: "Buxoro tuman" },
                                                                                                            { value: "Jondor tuman", label: "Jondor tuman" },
                                                                                                            { value: "Vobkent tuman", label: "Vobkent tuman" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Tuman (shahar)"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Mahalla", label: "Mahalla", isDisabled: true },
                                                                                                            { value: "Buxoro shahar", label: "Buxoro shahar" },
                                                                                                            { value: "Buxoro tuman", label: "Buxoro tuman" },
                                                                                                            { value: "Jondor tuman", label: "Jondor tuman" },
                                                                                                            { value: "Vobkent tuman", label: "Vobkent tuman" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Mahalla"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-2">
                                                                                                <button type="submit" className="btn btn-primary"><i className="icon-floppy-disk"></i> Saqlash</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* <i className="icon-trash infoBtn bg-dark d-flex align-items-center justify-content-center cursor-pointer" title="O'chirish" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" /> */}
                                                                    <a href="#1" className="infoBtn bg-dark" data-popup="tooltip" title="O'chirish"><i className="icon-trash" ></i> </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <h3 style={{ fontWeight: "bold", textTransform: "upperCase" }} className="mt-2">2-Sektor</h3>
                                            <table className="table mt-2 table-bordered table-striped table-hover Tab w-100" >
                                                <thead>
                                                    <tr className="bg-dark text-white NavLink text-center">
                                                        <th style={{ width: "5%" }}>№</th>
                                                        <th style={{ width: "45%" }}>Sektor</th>
                                                        <th style={{ width: "45%" }}>Mahalla</th>
                                                        <th style={{ width: "5%" }}>Harakatlar</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.map((dat, index) => (
                                                        <tr className="text-center">
                                                            <td>{dat.id}</td>
                                                            <td>{dat.sektor}</td>
                                                            <td>{dat.mahhala}</td>
                                                            <td>
                                                                <div className="icon d-flex justify-content-center align-items-center">
                                                                    <button className="infoBtn bg-dark" data-toggle="modal" data-target="#update" data-popup="tooltip" title="O'zgartirish" data-bs-toggle="tooltip"  data-bs-placement="top"><i className="icon-pencil5" ></i> </button>
                                                                    <div id="update" className="modal fade" tabIndex="-1">
                                                                        <div className="modal-dialog modal-lg ">
                                                                            <div className="modal-content">
                                                                                <div className="modal-header bg-primary text-white">
                                                                                    <h1 className="modal-title">Sektorni yangilash</h1>
                                                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                                                </div>

                                                                                <div className="modal-body">
                                                                                    {/* <!-- card1 --> */}
                                                                                    <form className="mt-3">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Sektor", label: "Sektor", isDisabled: true },
                                                                                                            { value: "1-sektor", label: "1-sektor" },
                                                                                                            { value: "2-sektor", label: "2-sektor" },
                                                                                                            { value: "3-sektor", label: "3-sektor" },
                                                                                                            { value: "4-sektor", label: "4-sektor" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Sektor"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Viloyat", label: "Viloyat", isDisabled: true },
                                                                                                            { value: "Buxoro", label: "Buxoro" },
                                                                                                            { value: "Navvoiy", label: "Navvoiy" },
                                                                                                            { value: "Samarqand", label: "Samarqand" },
                                                                                                            { value: "Toshkent", label: "Toshkent" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Viloyat"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Tuman (shahar)", label: "Tuman (shahar)", isDisabled: true },
                                                                                                            { value: "Buxoro shahar", label: "Buxoro shahar" },
                                                                                                            { value: "Buxoro tuman", label: "Buxoro tuman" },
                                                                                                            { value: "Jondor tuman", label: "Jondor tuman" },
                                                                                                            { value: "Vobkent tuman", label: "Vobkent tuman" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Tuman (shahar)"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Mahalla", label: "Mahalla", isDisabled: true },
                                                                                                            { value: "Buxoro shahar", label: "Buxoro shahar" },
                                                                                                            { value: "Buxoro tuman", label: "Buxoro tuman" },
                                                                                                            { value: "Jondor tuman", label: "Jondor tuman" },
                                                                                                            { value: "Vobkent tuman", label: "Vobkent tuman" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Mahalla"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-2">
                                                                                                <button type="submit" className="btn btn-primary"><i className="icon-floppy-disk"></i> Saqlash</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* <i className="icon-trash infoBtn bg-dark d-flex align-items-center justify-content-center cursor-pointer" title="O'chirish" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" /> */}
                                                                    <a href="#1" className="infoBtn bg-dark" data-popup="tooltip" title="O'chirish"><i className="icon-trash" ></i> </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <h3 style={{ fontWeight: "bold", textTransform: "upperCase" }} className="mt-2">3-Sektor</h3>
                                            <table className="table mt-2 table-bordered datatable-select-single table-striped table-hover Tab" >
                                                <thead>
                                                    <tr className="bg-dark text-white NavLink text-center">
                                                        <th style={{ width: "5%" }}>№</th>
                                                        <th style={{ width: "45%" }}>Sektor</th>
                                                        <th style={{ width: "45%" }}>Mahalla</th>
                                                        <th style={{ width: "5%" }}>Harakatlar</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.map((dat, index) => (
                                                        <tr className="text-center">
                                                            <td>{dat.id}</td>
                                                            <td>{dat.sektor}</td>
                                                            <td>{dat.mahhala}</td>
                                                            <td>
                                                                <div className="icon d-flex justify-content-center align-items-center">
                                                                    <button className="infoBtn bg-dark" data-toggle="modal" data-target="#update" data-popup="tooltip" title="O'zgartirish" data-bs-toggle="tooltip"  data-bs-placement="top"><i className="icon-pencil5" ></i> </button>
                                                                    <div id="update" className="modal fade" tabIndex="-1">
                                                                        <div className="modal-dialog modal-lg ">
                                                                            <div className="modal-content">
                                                                                <div className="modal-header bg-primary text-white">
                                                                                    <h1 className="modal-title">Sektorni yangilash</h1>
                                                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                                                </div>

                                                                                <div className="modal-body">
                                                                                    {/* <!-- card1 --> */}
                                                                                    <form className="mt-3">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Sektor", label: "Sektor", isDisabled: true },
                                                                                                            { value: "1-sektor", label: "1-sektor" },
                                                                                                            { value: "2-sektor", label: "2-sektor" },
                                                                                                            { value: "3-sektor", label: "3-sektor" },
                                                                                                            { value: "4-sektor", label: "4-sektor" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Sektor"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Viloyat", label: "Viloyat", isDisabled: true },
                                                                                                            { value: "Buxoro", label: "Buxoro" },
                                                                                                            { value: "Navoiy", label: "Navoiy" },
                                                                                                            { value: "Samarqand", label: "Samarqand" },
                                                                                                            { value: "Toshkent", label: "Toshkent" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Viloyat"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Tuman (shahar)", label: "Tuman (shahar)", isDisabled: true },
                                                                                                            { value: "Buxoro shahar", label: "Buxoro shahar" },
                                                                                                            { value: "Buxoro tuman", label: "Buxoro tuman" },
                                                                                                            { value: "Jondor tuman", label: "Jondor tuman" },
                                                                                                            { value: "Vobkent tuman", label: "Vobkent tuman" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Tuman (shahar)"
                                                                                                    />

                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Mahalla", label: "Mahalla", isDisabled: true },
                                                                                                            { value: "Buxoro shahar", label: "Buxoro shahar" },
                                                                                                            { value: "Buxoro tuman", label: "Buxoro tuman" },
                                                                                                            { value: "Jondor tuman", label: "Jondor tuman" },
                                                                                                            { value: "Vobkent tuman", label: "Vobkent tuman" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Mahalla"
                                                                                                    />

                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-2">
                                                                                                <button type="submit" className="btn btn-primary"><i className="icon-floppy-disk"></i> Saqlash</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* <i className="icon-trash infoBtn bg-dark d-flex align-items-center justify-content-center cursor-pointer" title="O'chirish" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" /> */}
                                                                    <a href="#1" className="infoBtn bg-dark" data-popup="tooltip" title="O'chirish"><i className="icon-trash" ></i> </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <h3 style={{ fontWeight: "bold", textTransform: "upperCase" }} className="mt-2">4-Sektor</h3>
                                            <table className="table mt-2 table-bordered datatable-select-single table-striped table-hover Tab" >
                                                <thead>
                                                    <tr className="bg-dark text-white NavLink text-center">
                                                        <th style={{ width: "5%" }}>№</th>
                                                        <th style={{ width: "45%" }}>Sektor</th>
                                                        <th style={{ width: "45" }} > Mahalla</th>
                                                        <th style={{ width: "5%" }}>Harakatlar</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.map((dat, index) => (
                                                        <tr className="text-center">
                                                            <td>{dat.id}</td>
                                                            <td>{dat.sektor}</td>
                                                            <td>{dat.mahhala}</td>
                                                            <td>
                                                                <div className="icon d-flex justify-content-center align-items-center">
                                                                    <button className="infoBtn bg-dark" data-toggle="modal" data-target="#update" data-popup="tooltip" title="O'zgartirish" data-bs-toggle="tooltip"  data-bs-placement="top"><i className="icon-pencil5" ></i> </button>
                                                                    <div id="update" className="modal fade" tabIndex="-1">
                                                                        <div className="modal-dialog modal-lg ">
                                                                            <div className="modal-content">
                                                                                <div className="modal-header bg-primary text-white">
                                                                                    <h1 className="modal-title">Sektorni yangilash</h1>
                                                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                                                </div>

                                                                                <div className="modal-body">
                                                                                    {/* <!-- card1 --> */}
                                                                                    <form className="mt-3">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Sektor", label: "Sektor", isDisabled: true },
                                                                                                            { value: "1-sektor", label: "1-sektor" },
                                                                                                            { value: "2-sektor", label: "2-sektor" },
                                                                                                            { value: "3-sektor", label: "3-sektor" },
                                                                                                            { value: "4-sektor", label: "4-sektor" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Sektor"
                                                                                                    />

                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Viloyat", label: "Viloyat", isDisabled: true },
                                                                                                            { value: "Buxoro", label: "Buxoro" },
                                                                                                            { value: "Navoiy", label: "Navoiy" },
                                                                                                            { value: "Samarqand", label: "Samarqand" },
                                                                                                            { value: "Toshkent", label: "Toshkent" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Viloyat"
                                                                                                    />

                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Buxoro shahar", label: "Buxoro shahar", isDisabled: true },
                                                                                                            { value: "Buxoro tuman", label: "Buxoro tuman" },
                                                                                                            { value: "Jondor tuman", label: "Jondor tuman" },
                                                                                                            { value: "Jondor tuman", label: "Jondor tuman" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Tuman (shahar)"
                                                                                                    />

                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="form-group">
                                                                                                    <Select
                                                                                                        // defaultValue={options[1]}
                                                                                                        options={[
                                                                                                            { value: "Mahalla", label: "Mahalla", isDisabled: true },
                                                                                                            { value: "Buxoro shahar", label: "Buxoro shahar" },
                                                                                                            { value: "Buxoro tuman", label: "Buxoro tuman" },
                                                                                                            { value: "Jondor tuman", label: "Jondor tuman" },
                                                                                                            { value: "Vobkent tuman", label: "Vobkent tuman" },
                                                                                                        ]}
                                                                                                        // onChange={logChange12}
                                                                                                        placeholder="Mahalla"
                                                                                                    />

                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-2">
                                                                                                <button type="submit" className="btn btn-primary"><i className="icon-floppy-disk"></i> Saqlash</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* <i className="icon-trash infoBtn bg-dark d-flex align-items-center justify-content-center cursor-pointer" title="O'chirish" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" /> */}
                                                                    <a href="#1" className="infoBtn bg-dark" data-popup="tooltip" title="O'chirish"><i className="icon-trash" ></i> </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div >
                                    </div >
                                </div >
                            </div >
                        </div >
                    </div >
                </div >
            </div >
        </div >
    )
}