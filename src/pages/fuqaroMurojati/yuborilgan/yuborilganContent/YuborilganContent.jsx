import React, { useEffect } from "react";
import NavbarFuqaroMurojat from "../../navbarFuqaroMurojat/NavbarFuqaroMurojat";
import $ from 'jquery';
import { Link } from "react-router-dom";

export default function YuborilganContent() {

    useEffect(() => {
        $(document).ready(function () {
            $("input:submit").attr("checked", false).click(function () {
                var shcolum = "." + $(this).attr("name");
                $(shcolum).toggle();
            })
        })

        // btn toggle
        $(document).ready(function () {
            $('input.myBtn').click(function () {
                $(this).toggleClass('btnActive')
            })
        })
    }, []);

    const xujjatFun = (value) => {
        let table = document.getElementById("myTable");
        let tr = table.querySelectorAll("tr");
        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                let txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(value.toUpperCase()) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    const korresFun = (value) => {
        let table = document.getElementById("myTable");
        let tr = table.querySelectorAll("tr");
        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName("td")[2];
            if (td) {
                let txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(value.toUpperCase()) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    const qisqachaFun = (value) => {
        let table = document.getElementById("myTable");
        let tr = table.querySelectorAll("tr");
        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName("td")[5];
            if (td) {
                let txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(value.toUpperCase()) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    const Uchirish = () => {
        document.querySelector('.bekorQilish').click();
    }

    return (
        <div className="content mb-5">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Yuborilgan</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <NavbarFuqaroMurojat />
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        {/* <!-- form componets --> */}
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className="form-group form-group-feedback form-group-feedback-left inp">
                                                    <input type="text" className="form-control form-control-lg" onChange={(e) => xujjatFun(e.target.value)} id="xujjat" placeholder="Ariza beruvchi" />
                                                    <div className="form-control-feedback form-control-feedback-lg">
                                                        <i className="icon-search4"></i>
                                                    </div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="form-group form-group-feedback form-group-feedback-left inp">
                                                    <input type="text" className="form-control form-control-lg" id="korrespondent2" onChange={(e) => korresFun(e.target.value)} placeholder="Murjaat yo'nalishi" />
                                                    <div className="form-control-feedback form-control-feedback-lg">
                                                        <i className="icon-search4"></i>
                                                    </div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="form-group form-group-feedback form-group-feedback-left inp">
                                                    <input type="text" className="form-control form-control-lg" placeholder="Chiquvchi № / sana" id="qisqacha" onChange={(e) => qisqachaFun(e.target.value)} />
                                                    <div className="form-control-feedback form-control-feedback-lg">
                                                        <i className="icon-search4"></i>
                                                    </div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="form-group form-group-feedback form-group-feedback-left inp">
                                                    <button className="btn btn-primary " data-toggle="dropdown"><i className="icon-menu9" style={{ fontSize: "18px" }}></i></button>
                                                    <div className="dropdown-menu">
                                                        {/* <!-- <button type="button" >White button</button> --> */}
                                                        <input type="submit" className="btn btn-white dropdown-item  w-100 myBtn" name="id" value="№" />
                                                        <input type="submit" className="btn btn-white dropdown-item  w-100 myBtn" name="ariza" value="Ariza beruvch" />
                                                        <input type="submit" className="btn btn-white dropdown-item  w-100 myBtn" name="murojaat" value="Murojaat yo'nalishi" />
                                                        <input type="submit" className="btn btn-white dropdown-item  w-100 myBtn" name="qisqacha" value="Qisqacha mazmuni" />
                                                        <input type="submit" className="btn btn-white dropdown-item  w-100 myBtn" name="reg" value="Reg № / Sana" />
                                                        <input type="submit" className="btn btn-white dropdown-item  w-100 myBtn" name="chiquvchi" value="Chiquvchi № / Sana" />
                                                        <input type="submit" className="btn btn-white dropdown-item  w-100 myBtn" name="ijrochi" value="Ijrochi" />
                                                        <input type="submit" className="btn btn-white dropdown-item  w-100 myBtn" name="harakat" value="Harakatlar" />
                                                    </div>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                                <table id="myTable" className="table table-bordered table-striped table-hover Tab" >
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th id='tabRow' style={{ width: "3%" }} className="id">№</th>
                                            <th style={{ width: "10%" }} className="ariza">Ariza beruvchi</th>
                                            <th style={{ width: "10%" }} className="murojaat">Murojaat yo'nalishi</th>
                                            <th style={{ width: "30%" }} className="qisqacha">Qisqacha mazmuni</th>
                                            <th style={{ width: "7%" }} className="reg">Reg № / Sana</th>
                                            <th style={{ width: "10%" }} className="chiquvchi">Chiquvchi № / Sana</th>
                                            <th style={{ width: "15%" }} className="ijrochi">Ijrochi</th>
                                            <th className="text-center harakat">Harakatlar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr id="kor">
                                            <td className="text-center id">1</td>
                                            <td className="text-color ariza">Istamov Ibrohim</td>
                                            <td style={{ textAlign: "justify" }} className="murojaat">Ariza</td>
                                            <td className="text-center qisqacha">
                                                Ўзбекистон Республикаси Адлия вазирлигининг хатида
                                            </td>
                                            <td className="reg">
                                                <div className="badge badge-primary">№ 1</div>
                                                <hr />
                                                7.05.2022
                                            </td>
                                            <td className="text-center chiquvchi">
                                                <div className="badge badge-primary">№ 1</div>
                                                <hr />
                                                7.05.2022
                                            </td>
                                            <td className="ijrochi">
                                                Sobir Bobojonov
                                            </td>
                                            <td className="harakat">
                                                <div className="icon d-flex justify-content-center align-items-center">
                                                    <Link to="/fuqaro/murojati/rezalutsiya/kurish" className="infoBtn bg-dark" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="Ko'rish">
                                                        <i className="icon-eye2"></i>
                                                    </Link>
                                                    {/* <!-- <a href="./korish.html" className="infoBtn bg-dark" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="Ko'rish"><span><i className="icon-eye2"></i></span> </a> --> */}
                                                    {/* <i className="icon-eye2 cursor-pointer infoBtn bg-dark d-flex align-items-center justify-content-center" title="Ko'rish" /> */}
                                                    {/* <i className="icon-pencil5 infoBtn bg-dark d-flex align-items-center justify-content-center cursor-pointer" title="O'zgartirish" /> */}
                                                    {/* <i className="icon-trash infoBtn bg-dark d-flex align-items-center justify-content-center cursor-pointer" title="O'chirish" /> */}
                                                    {/* <a href="#1" className="infoBtn bg-dark" data-popup="tooltip" title="O'zgartirish"><i className="icon-pencil5" ></i> </a>
                                                    <a href="#1" className="infoBtn bg-dark" data-popup="tooltip" title="O'chirish" data-toggle="modal" data-target="#modal_theme_primary"><i className="icon-trash"></i> </a> */}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* <!-- end form  --> */}
                        {/* <div id="modal_theme_primary" className="modal fade show" tabIndex="-1" style={{ display: "none" }} aria-modal="true" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header bg-primary text-white">
                                        <h6 className="modal-title">Primary header</h6>
                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                    </div>

                                    <div className="modal-body">
                                        <h4>Ochirishni xoxlaysizmi?</h4>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-link bekorQilish" data-dismiss="modal">Bekor qilish</button>
                                        <button type="button" className="btn btn-primary" onClick={Uchirish}>O'chirish</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}