import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarFuqaroMurojat from '../../navbarFuqaroMurojat/NavbarFuqaroMurojat';
import $ from 'jquery';

export default function FuqaroMurojatYangiContent() {

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
            let td = tr[i].getElementsByTagName("td")[3];
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

    return (
        <div className="content mb-5">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Yangi</h3>
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
                                                    <input type="text" className="form-control form-control-lg" onChange={(e) => xujjatFun(e.target.value)} id="xujjat" placeholder="Qabul qilish turi" />
                                                    <div className="form-control-feedback form-control-feedback-lg">
                                                        <i className="icon-search4"></i>
                                                    </div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="form-group form-group-feedback form-group-feedback-left inp">
                                                    <input type="text" className="form-control form-control-lg" id="korrespondent2" onChange={(e) => korresFun(e.target.value)} placeholder="Murjaat turi" />
                                                    <div className="form-control-feedback form-control-feedback-lg">
                                                        <i className="icon-search4"></i>
                                                    </div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="form-group form-group-feedback form-group-feedback-left inp">
                                                    <input type="text" className="form-control form-control-lg" placeholder="Ariza beruvchi" id="qisqacha" onChange={(e) => qisqachaFun(e.target.value)} />
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
                                                        <input type="submit" className="btn btn-white dropdown-item  w-100 myBtn" name="qabul" value="Qabul qilish turi" />
                                                        <input type="submit" className="btn btn-white dropdown-item  w-100 myBtn" name="murojaat" value="Murojaat turi" />
                                                        <input type="submit" className="btn btn-white dropdown-item  w-100 myBtn" name="ariza" value="Ariza beruvchi" />
                                                        <input type="submit" className="btn btn-white dropdown-item  w-100 myBtn" name="mur" value="Murojaat yo'nalishi" />
                                                        <input type="submit" className="btn btn-white dropdown-item  w-100 myBtn" name="qisqacha" value="Qisqacha mazuni" />
                                                        <input type="submit" className="btn btn-white dropdown-item  w-100 myBtn" name="reg" value="Reg № / Sana" />
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
                                            <th style={{ width: "10%" }} className="qabul">Qabul Qilish Turi</th>
                                            <th style={{ width: "10%" }} className="murojaat">Murojaat Turi</th>
                                            <th style={{ width: "10%" }} className="ariza">Ariza Beruvchi</th>
                                            <th style={{ width: "10%" }} className="mur">Murojaat yo'nalishi</th>
                                            <th style={{ width: "30%" }} className="qisqacha">Qisqacha mazmuni</th>
                                            <th style={{ width: "7%" }} className="reg">Reg № / Sana</th>
                                            <th className="text-center harakat">Harakatlar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr id="kor">
                                            <td className="text-center id">1</td>
                                            <td className="text-color qabul">Murojaat</td>
                                            <td style={{ textAlign: "justify" }} className="murojaat">Ariza</td>
                                            <td className="text-center ariza">
                                                Istamov Ibrohim Ismoilovich
                                            </td>
                                            <td id="qs" data-maxlength="5" className="mur">
                                                Ўзбекистон Республикаси Адлия вазирлигининг хатида
                                            </td>

                                            <td className="qisqacha">
                                                sdsdsdsdsdsds
                                            </td>
                                            <td className="text-center reg">
                                                <div className="badge badge-primary">№ 1</div>
                                                <hr />
                                                7.05.2022
                                            </td>
                                            <td className="harakat">
                                                <div className="icon d-flex justify-content-center align-items-center">
                                                    {/* <i className="icon-eye2 infoBtn bg-dark d-flex align-items-center justify-content-center" title="Ko'rish"></i> */}
                                                    {/* <a href="./korish.html" className="infoBtn bg-dark" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="Ko'rish"><span><i className="icon-eye2"></i></span> </a> */}
                                                    <Link to="/fuqaro/murojati" className="infoBtn bg-dark" data-popup="tooltip" title="O'zgartirish">
                                                        <i className="icon-pencil5" ></i>
                                                    </Link>
                                                    {/* <a href="./yangi.html" className="infoBtn bg-dark" data-popup="tooltip" title="O'zgartirish"><i className="icon-pencil5" ></i> </a> */}
                                                    {/* <i className="icon-trash infoBtn bg-dark d-flex align-items-center justify-content-center" title="O'chirish"></i> */}
                                                    {/* <a href="" className="infoBtn bg-dark" data-popup="tooltip" title="O'chirish"><i className="icon-trash"></i> </a> */}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* <!-- end form  --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}