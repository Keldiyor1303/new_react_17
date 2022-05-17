import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarFuqaroMurojat from "../../navbarFuqaroMurojat/NavbarFuqaroMurojat";
import $ from 'jquery';

let data1 = [
    {
        id: 1,
        qabul: "MUROJAAT1",
        tur: "Ariza1",
        beruvchi: "Istamov Ibrohim Ismoilovich",
        yunalish: "Ўзбекистон Республикаси Адлия вазирлигининг хатида",
        mazmun: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quo reprehenderit facilis corrupti officia, ipsam praesentium saepe autem fuga illo tenetur sunt pariatur qui laudantium optio. Libero corrupti repudiandae qui!",
        date: "7.05.2022",
    },
    {
        id: 2,
        qabul: "MUROJAAT2",
        tur: "Ariza2",
        beruvchi: "Istamov Ibrohim Ismoilovich",
        yunalish: "Ўзбекистон Республикаси Адлия вазирлигининг хатида",
        mazmun: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quo reprehenderit facilis corrupti officia, ipsam praesentium saepe autem fuga illo tenetur sunt pariatur qui laudantium optio. Libero corrupti repudiandae qui!",
        date: "7.05.2022",
    },
    {
        id: 3,
        qabul: "MUROJAAT3",
        tur: "Ariza3",
        beruvchi: "Istamov Ibrohim Ismoilovich",
        yunalish: "Ўзбекистон Республикаси Адлия вазирлигининг хатида",
        mazmun: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quo reprehenderit facilis corrupti officia, ipsam praesentium saepe autem fuga illo tenetur sunt pariatur qui laudantium optio. Libero corrupti repudiandae qui!",
        date: "7.05.2022",
    },
    {
        id: 4,
        qabul: "MUROJAAT4",
        tur: "Ariza4",
        beruvchi: "Istamov Ibrohim Ismoilovich",
        yunalish: "Ўзбекистон Республикаси Адлия вазирлигининг хатида",
        mazmun: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quo reprehenderit facilis corrupti officia, ipsam praesentium saepe autem fuga illo tenetur sunt pariatur qui laudantium optio. Libero corrupti repudiandae qui!",
        date: "7.05.2022",
    },
];

export default function XomakiContent() {
    const [data, setData] = useState(data1);
    const [deleted, setDeleted] = useState(false);
    const [infoDeleted, setInfoDeleted] = useState({ info: false, data: {} });

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

    const uchirush = () => {
        document.querySelector('.bekorQilish').click();
    }

    return (
        <div className="content mb-5">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Yangi Qo'shish</h3>
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
                                                    <input type="text" className="form-control form-control-lg" id="korrespondent2" onChange={(e) => korresFun(e.target.value)} placeholder="Murojaat turi" />
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
                                        {data.map((dat, index) => (
                                            <tr key={index} id="kor">
                                                <td className="text-center id">{dat.id}</td>
                                                <td className="text-color qabul">{dat.qabul}</td>
                                                <td style={{ textAlign: "justify" }} className="murojaat">{dat.tur}</td>
                                                <td className="text-center ariza">
                                                    {dat.beruvchi}
                                                </td>
                                                <td id="qs" data-maxlength="5" className="mur">
                                                    {dat.yunalish}
                                                </td>

                                                <td className="qisqacha">
                                                    {dat.mazmun}
                                                </td>
                                                <td className="text-center reg">
                                                    <div className="badge badge-primary">№ 1</div>
                                                    <hr />
                                                    {dat.date}
                                                </td>
                                                <td className="harakat">
                                                    <div className="icon d-flex justify-content-center align-items-center">
                                                        <Link to="/fuqaro/murojati" data-popup="tooltip" className="infoBtn bg-dark" title="O'zgartirish">
                                                            <i className="icon-pencil5" ></i>
                                                        </Link>
                                                        {/* <i className="icon-trash infoBtn bg-dark d-flex align-items-center mt-1 justify-content-center" title="O'chirish" onClick={() => setDeleted(true)} /> */}
                                                        <a href="#1" className="infoBtn bg-dark" data-toggle="modal" data-popup="tooltip" title="O'chirish" data-target="#modal_theme_primary"><i className="icon-trash"></i> </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div id="modal_theme_primary" className="modal fade show" tabIndex="-1" style={{ display: "none" }} aria-modal="true" role="dialog">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header bg-primary text-white">
                                                <h6 className="modal-title">Primary header</h6>
                                                <button type="button" className="close" data-dismiss="modal">×</button>
                                            </div>

                                            <div className="modal-body">
                                                <h4>O'chirishno xoxlaysizmi?</h4>
                                            </div>

                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-link bekorQilish" data-dismiss="modal">Bekor qilish</button>
                                                <button type="button" className="btn btn-primary" onClick={uchirush}>O'chirish</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end form  --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}