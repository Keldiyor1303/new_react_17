import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import YangiQushish from "../../../jurnallar/yangiQushish/YangiQushish";
import NavbarFuqaroMurojat from "../../navbarFuqaroMurojat/NavbarFuqaroMurojat";
let data = `
<hr style=margin:0>
<div class="row greydesk mt-3" >
    <div class="col-lg-6 mt-2">
        <div class="form-group row">
            <div class="col-lg-12">
                <select data-placeholder="Xodim" class="form-control select-search form-control-outline select" >
                    <option></option>
                        <option value="AZ">E-pochta</option>
                        <option value="CO">Fax</option>
                        <option value="ID">Ichki Tizim</option>
                        <option value="ID">E-xat</option>
                </select>
            </div>
        </div>
    </div>
    <div class="col-lg-6 mt-2">
        <div class="form-group form-group-floating  row">
            <div class="col-lg-12">
                <div class="position-relative">
                    <input type="date" class="form-control form-control-outline InputCard" placeholder="Placeholder">
                    <label class="label-floating">Mudati</label>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-11">
        <div class="form-group form-group-floating  row">
            <div class="col-lg-12">
                <div class="position-relative">
                    <textarea class="form-control form-control-outline InputCard" cols="10" rows="10" style="height: 60px;" placeholder="Placeholder"></textarea>
                    <label class="label-floating">Rezalutsiya mazmuni</label>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-1">
        <div class="form-group form-group-floating  row">
            <div class="col-lg-12">
                <div class="position-relative">
                    <button class="btn btn-danger form-control form-control-outline" onclick="deleteFun()"><i class="icon-trash"></i></i></button>
                </div>
            </div>
        </div>
    </div>
</div>`

var addedList = [];

export default function FuqaroRezContent() {
    const [yangiQushish, setYangiQushish] = useState(['0']);

    // o'ng va pastki icon lar ni almashishi
    useEffect(() => {
        let panelHeadings = document.querySelectorAll('.panel-heading');
        let panelBodies = document.querySelectorAll('.panel-body');
        // panel heading
        panelHeadings.forEach((ph, index) => {
            ph.addEventListener('click', () => {
                if (ph.querySelector('i').className === "fas fa-angle-right") {
                    ph.querySelector('i').className = "fas fa-angle-down";
                } else {
                    ph.querySelector('i').className = "fas fa-angle-right";
                }
            })
        });
        // panel body
        panelBodies.forEach((pb, index) => {
            pb.addEventListener('click', () => {
                if (pb.querySelector('i').className === "fas fa-angle-right") {
                    pb.querySelector('i').className = "fas fa-angle-down";
                } else {
                    pb.querySelector('i').className = "fas fa-angle-right";
                }
            })
        });
    }, []);

    // tooltip ni o'chirish
    useEffect(() => {
        document.querySelector('.tooltip')?.remove();
    }, []);

    const newCreateBajaruvchi = () => {
        setYangiQushish([...yangiQushish, '1']);
        // var newContent = document.createElement('div');
        // newContent.innerHTML = data;
        // addedList.push(document.getElementById('bajaruvchi').appendChild(newContent));
    }

    const deleteFun = (ind) => {
        // if (addedList.length) {
        //     document.getElementById('bajaruvchi').removeChild(addedList.pop());
        // }
        let arr = yangiQushish.filter((yangi, index) => {
            return index !== ind;
        })
        setYangiQushish(arr);
    }

    return (
        <div className="content mb-5">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Ko'rish</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <NavbarFuqaroMurojat />
                    <li className="nav-item">
                        <NavLink exact to="/fuqaro/murojati/rezalutsiya/kurish" activeClassName="NavLinkLi" className="nav-link d-flex align-items-center">
                            <i className="icon-eye mr-1"></i> Ko'rish
                        </NavLink>
                    </li>
                </ul>

                <div className="card">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card-body">
                                <object
                                    data='https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf'
                                    type="application/pdf" width="100%" height="2350">
                                    <iframe
                                        src='https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf'
                                        width="100%" height="2350" title="This is a unique title">
                                        <p>This browser does not support PDF!</p>
                                    </iframe>
                                </object>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card-block my-3 mr-3">
                                {/* <!-- card1 --> */}
                                <div className="card-box">
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div
                                                className="card-header bg-primary text-white header-elements-inline">
                                                <h6 className="card-title"
                                                    style={{ fontWeight: "bold", textTransform: "upperCase" }}>Asosiy
                                                </h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group row">
                                                            <div className="col-lg-12">
                                                                <select data-placeholder="Koresspondent" className="form-control select-search form-control-outline select">
                                                                    <option></option>
                                                                    <option value="AZ">E-pochta</option>
                                                                    <option value="CO">Fax</option>
                                                                    <option value="ID">Ichki Tizim</option>
                                                                    <option value="ID">E-xat</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group form-group-floating row mb-0">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input type="text" className="form-control daterange-single form-control-outline" id="chiquvchiSana" placeholder="Placeholder" /><label className="label-floating">Sana</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body p-0">
                                                    <table className="table table-bordered table-striped table-hover Tab">
                                                        <tbody>
                                                            <tr >
                                                                <th style={{ width: "50%" }}>Fuqaro murojaati</th>
                                                                <th>
                                                                    pdf-link
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th style={{ width: "50%" }}>Murojaat kartochkasi</th>
                                                                <th>
                                                                    pdf-link
                                                                </th>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-box">
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div
                                                className="card-header bg-primary text-white header-elements-inline">
                                                <h6 className="card-title"
                                                    style={{ fontWeight: "bold", textTransform: "upperCase" }}>
                                                    Fuqaro Ma'lumotlari</h6>
                                            </div>
                                            <div className="card-body">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <div className="form-group form-group-floating  row">
                                                                <div className="col-lg-12">
                                                                    <div className="position-relative">
                                                                        <input type="text" className="form-control form-control-outline InputCard" placeholder="Placeholder" value="Ibrohim" disabled />
                                                                        <label className="label-floating">Ism</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="form-group form-group-floating  row">
                                                                <div className="col-lg-12">
                                                                    <div className="position-relative">
                                                                        <input type="text" className="form-control form-control-outline InputCard" placeholder="Placeholder" value="Istamov" disabled />
                                                                        <label className="label-floating">Familiya</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="form-group form-group-floating  row">
                                                                <div className="col-lg-12">
                                                                    <div className="position-relative">
                                                                        <input type="text" className="form-control form-control-outline InputCard" placeholder="Placeholder" value="Ismoilovich" disabled />
                                                                        <label className="label-floating">Otasini issmi</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group row">
                                                                <div className="col-lg-12">
                                                                    <select data-placeholder="TUMAN (SHAHAR)" disabled className="form-control select-search form-control-outline select" >
                                                                        <option></option>
                                                                        <option value="AZ">E-pochta</option>
                                                                        <option value="CO">Fax</option>
                                                                        <option value="ID">Ichki Tizim</option>
                                                                        <option value="ID">E-xat</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group row">
                                                                <div className="col-lg-12">
                                                                    <select data-placeholder="MFY" disabled className="form-control select-search form-control-outline select" >
                                                                        <option></option>
                                                                        <option value="AZ">E-pochta</option>
                                                                        <option value="CO">Fax</option>
                                                                        <option value="ID">Ichki Tizim</option>
                                                                        <option value="ID">E-xat</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group form-group-floating  row">
                                                                <div className="col-lg-12">
                                                                    <div className="position-relative">
                                                                        <input type="text" className="form-control form-control-outline InputCard" value="2-Sektor" placeholder="Placeholder" disabled />
                                                                        <label className="label-floating">SEKTOR</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group form-group-floating  row">
                                                                <div className="col-lg-12">
                                                                    <div className="position-relative">
                                                                        <input type="text" disabled className="form-control form-control-outline InputCard" placeholder="Placeholder" />
                                                                        <label className="label-floating">MANZIL </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group form-group-floating row">
                                                                <div className="col-lg-12">
                                                                    <div className="position-relative">
                                                                        <textarea className="form-control form-control-outline InputCard" readOnly cols="10" rows="10" style={{ height: "90px" }} placeholder="Placeholder"></textarea>
                                                                        <label className="label-floating">Murojaat mazmuni</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-box">
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div
                                                className="card-header bg-primary text-white header-elements-inline">
                                                <h6 className="card-title"
                                                    style={{ fontWeight: "bold", textTransform: "upperCase" }}>
                                                    Rezalutsiya mazmuni</h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="form-group form-group-floating  row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <textarea className="form-control form-control-outline InputCard" cols="10" rows="10" style={{ height: "90px" }} placeholder="Placeholder"></textarea>
                                                                    <label className="label-floating">Rezalutsiya mazmuni</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end card3 -->
                                <!-- card4 --> */}
                                <div className="card-box">
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-header bg-primary text-white header-elements-inline">
                                                <h6 className="card-title"
                                                    style={{ fontWeight: "bold", textTransform: "upperCase" }}>Tezkor
                                                    Rezalutsiya</h6>
                                            </div>
                                            <div className="card-body">
                                                <table className="table table-bordered datatable-select-single table-striped table-hover Tab">
                                                    <tbody>
                                                        <tr>
                                                            <th style={{ width: "5%" }}>
                                                                <div
                                                                    className="custom-control custom-control-right custom-checkbox custom-control-inline">
                                                                    <input type="checkbox"
                                                                        className="custom-control-input" id="cc_ri_c"
                                                                        defaultChecked />
                                                                    <label className="custom-control-label"
                                                                        htmlFor="cc_ri_c"></label>
                                                                </div>
                                                            </th>
                                                            <th style={{ width: "95%" }}>
                                                                Ijrosini Ta'minlash
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <th style={{ width: "5%" }}>
                                                                <div className="custom-control custom-control-right custom-checkbox custom-control-inline">
                                                                    <input type="checkbox"
                                                                        className="custom-control-input" id="cc_ri_"
                                                                        defaultChecked />
                                                                    <label className="custom-control-label"
                                                                        htmlFor="cc_ri_"></label>
                                                                </div>
                                                            </th>
                                                            <th style={{ width: "95%" }}>
                                                                Ijrosini Ta'minlash
                                                            </th>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end card4 -->
                                <!-- card5 --> */}
                                <div className="card-box">
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-header bg-primary text-white header-elements-inline">
                                                <h6 className="card-title"
                                                    style={{ fontWeight: "bold", textTransform: "upperCase" }}>
                                                    Nazoratchilar</h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group row">
                                                            <div className="col-lg-12">
                                                                <select data-placeholder="Nazoratda" className="form-control select-search form-control-outline select">
                                                                    <option></option>
                                                                    <option value="AZ">E-pochta</option>
                                                                    <option value="CO">Fax</option>
                                                                    <option value="ID">Ichki Tizim</option>
                                                                    <option value="ID">E-xat</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group row">
                                                            <div className="col-lg-12">
                                                                <select data-placeholder="Umumlashtiruvchi" className="form-control select-search form-control-outline select" >
                                                                    <option></option>
                                                                    <option value="AZ">E-pochta</option>
                                                                    <option value="CO">Fax</option>
                                                                    <option value="ID">Ichki Tizim</option>
                                                                    <option value="ID">E-xat</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group row">
                                                            <div className="col-lg-12">
                                                                <select data-placeholder="Qayta ijroo" className="form-control select-search form-control-outline select">
                                                                    <option></option>
                                                                    <option value="AZ">E-pochta</option>
                                                                    <option value="CO">Fax</option>
                                                                    <option value="ID">Ichki Tizim</option>
                                                                    <option value="ID">E-xat</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-box">
                                    <div className="col-lg-12">
                                        <div className="">
                                            <div className="card-header bg-primary text-white header-elements-inline">
                                                <h6 className="card-title"
                                                    style={{ fontWeight: "bold", textTransform: "upperCase" }}>
                                                    Bajaruvchi</h6>
                                            </div>
                                            {yangiQushish.map((yangi, index) => (
                                                <div key={index} className="card-box">
                                                    <div className="card mb-3">
                                                        <div className="card-body" id="bajaruvchi">
                                                            <div className="row">
                                                                <div className="col-lg-5">
                                                                    <div className="form-group row">
                                                                        <div className="col-lg-12">
                                                                            <select data-placeholder="Xodim" className="form-control select-search form-control-outline select">
                                                                                <option></option>
                                                                                <option value="AZ">E-pochta</option>
                                                                                <option value="CO">Fax</option>
                                                                                <option value="ID">Ichki Tizim</option>
                                                                                <option value="ID">E-xat</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-5">
                                                                    <div className="form-group form-group-floating row">
                                                                        <div className="col-lg-12">
                                                                            <div className="position-relative">
                                                                                <input type="date" className="form-control form-control-outline InputCard" placeholder="Placeholder" />
                                                                                <label className="label-floating">Muddati</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <div className="col-lg-3">
                                                        <div className="form-group form-group-floating row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <textarea className="form-control form-control-outline InputCard" cols="10" rows="10" style={{ height: "60px" }} placeholder="Placeholder"></textarea>
                                                                    <label className="label-floating">Rezalutsiya mazmuni</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div> */}
                                                                <div className="col-lg-1">
                                                                    <div className="form-group form-group-floating  row">
                                                                        <div className="col-lg-12">
                                                                            <div className="position-relative">
                                                                                <button
                                                                                    style={{ width: "60px", height: "56px" }}
                                                                                    className="btn btn-danger form-control form-control-outline"
                                                                                    onClick={() => deleteFun(index)}>
                                                                                    <i className="icon-trash"></i>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <button className="btn btn-primary col-lg-12" onClick={newCreateBajaruvchi} id="myFormInput">
                                            <i className="icon-plus2"></i> Yangi qo'shish
                                        </button>
                                    </div>
                                    {/* <!-- end card5 --> */}
                                </div>
                            </div>
                            {/* <!-- tashqi bajaruvchilar --> */}
                            <div className="card-body pl-0 py-0">
                                <div className="col-lg-12 ">
                                    <div className="">
                                        <div className="">
                                            <button className="btn btn-dark col-lg-12" data-toggle="modal"
                                                data-target="#modal_theme_primary"><i className="icon-plus2"></i> Tashqi
                                                Bajaruvchilar</button>
                                        </div>
                                        {/* <!-- modal --> */}
                                        <div id="modal_theme_primary" className="modal fade" tabIndex="-1">
                                            <div className="modal-dialog modal-xl modal-dialog-scrollable">
                                                <div className="modal-content">
                                                    <div className="modal-header bg-primary text-white">
                                                        <h6 className="modal-title"
                                                            style={{ fontWeight: "bold", textTransform: "upperCase" }}>
                                                            Tashqi Bajaruvchilar</h6>
                                                        <button type="button" className="close"
                                                            data-dismiss="modal">&times;</button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="form-group form-group-floating row">
                                                            {/* <!-- <label className="col-form-label col-lg-2">Basic</label> --> */}
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
                                                                    <label className="label-floating">Tashkilot nomi</label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* new collapse */}
                                                        <div className="card-box">
                                                            <div className="card ">
                                                                <div className="panel-group" style={{ padding: "5px 15px" }}>
                                                                    <div className="panel panel-default">
                                                                        {/* collapse 1 */}
                                                                        <div className="d-flex align-items-center justify-content-between" style={{ borderBottom: "1px solid lightgray" }}>
                                                                            <div className="panel-heading p-1" >
                                                                                <a data-toggle="collapse" href="#collapse1" className="colLink d-flex align-items-center">
                                                                                    <h4 className="panel-title">
                                                                                        <i className="fas fa-angle-right" style={{ marginRight: "10px" }} />
                                                                                        Hokimliklar
                                                                                    </h4>
                                                                                </a>
                                                                            </div>
                                                                            <input type="checkbox" className="checkBoxPanel" />
                                                                        </div>
                                                                        <div id="collapse1" className="panel-collapse collapse" style={{ paddingLeft: "3%" }}>
                                                                            <div className="d-flex align-items-center justify-content-between" style={{ borderBottom: "1px solid lightgray" }}>
                                                                                <div className="panel-body p-1">
                                                                                    <a data-toggle="collapse" href="#collapse2" className="colLink d-flex align-items-center">
                                                                                        <h4 className="panel-title">
                                                                                            <i className="fas fa-angle-right" style={{ marginRight: "10px" }} />
                                                                                            Hokimliklar1
                                                                                        </h4>
                                                                                    </a>
                                                                                </div>
                                                                                <input type="checkbox" className="checkBoxPanel" />
                                                                            </div>
                                                                            <div id="collapse2" className="panel-collapse collapse" style={{ paddingLeft: "3%" }}>
                                                                                <div className="d-flex align-items-center justify-content-between" style={{ borderBottom: "1px solid lightgray" }}>
                                                                                    <div className="panel-body p-1 ">
                                                                                        <a data-toggle="collapse" href="#collapse3" className="colLink d-flex align-items-center">
                                                                                            <h4 className="panel-title">
                                                                                                <i className="fas fa-angle-right" style={{ marginRight: "10px" }} />
                                                                                                Hokimliklar2
                                                                                            </h4>
                                                                                        </a>
                                                                                    </div>
                                                                                    <input type="checkbox" className="checkBoxPanel" />
                                                                                </div>
                                                                                <div id="collapse3" className="panel-collapse collapse" style={{ paddingLeft: "3%" }}>
                                                                                    <div className="d-flex align-items-center justify-content-between" style={{ borderBottom: "1px solid lightgray" }}>
                                                                                        <div className="panel-body p-1" >
                                                                                            <a data-toggle="collapse" href="#1" className="colLink d-flex align-items-center">
                                                                                                <h4 className="panel-title">
                                                                                                    <i className="fas fa-angle-right" style={{ marginRight: "10px" }} />
                                                                                                    Hokimliklar3
                                                                                                </h4>
                                                                                            </a>
                                                                                        </div>
                                                                                        <input type="checkbox" className="checkBoxPanel" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex align-items-center justify-content-between" style={{ borderBottom: "1px solid lightgray" }}>
                                                                                <div className="panel-body p-1 " >
                                                                                    <a data-toggle="collapse" href="#collapse4" className="colLink d-flex align-items-center">
                                                                                        <h4 className="panel-title">
                                                                                            <i className="fas fa-angle-right" style={{ marginRight: "10px" }} />
                                                                                            Hokimliklar4
                                                                                        </h4>
                                                                                    </a>
                                                                                </div>
                                                                                <input type="checkbox" className="checkBoxPanel" />
                                                                            </div>
                                                                            <div id="collapse4" className="panel-collapse collapse" style={{ paddingLeft: "3%" }}>
                                                                                <div className="d-flex align-items-center justify-content-between" style={{ borderBottom: "1px solid lightgray" }}>
                                                                                    <div className="panel-body p-1 " >
                                                                                        <a data-toggle="collapse" href="#collapse5" className="colLink d-flex align-items-center">
                                                                                            <h4 className="panel-title">
                                                                                                <i className="fas fa-angle-right" style={{ marginRight: "10px" }} />
                                                                                                Hokimliklar5
                                                                                            </h4>
                                                                                        </a>
                                                                                    </div>
                                                                                    <input type="checkbox" className="checkBoxPanel" />
                                                                                </div>
                                                                                <div id="collapse5" className="panel-collapse collapse" style={{ paddingLeft: "3%" }}>
                                                                                    <div className="d-flex align-items-center justify-content-between" style={{ borderBottom: "1px solid lightgray" }}>
                                                                                        <div className="panel-body p-1" >
                                                                                            <a data-toggle="collapse" href="#2" className="colLink d-flex align-items-center">
                                                                                                <h4 className="panel-title">
                                                                                                    <i className="fas fa-angle-right" style={{ marginRight: "10px" }} />
                                                                                                    Hokimliklar6
                                                                                                </h4>
                                                                                            </a>
                                                                                        </div>
                                                                                        <input type="checkbox" className="checkBoxPanel" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel-group" style={{ padding: "5px 15px" }}>
                                                                    <div className="panel panel-default">
                                                                        <div className="d-flex align-items-center justify-content-between" style={{ borderBottom: "1px solid lightgray" }}>
                                                                            <div className="panel-heading " >
                                                                                <a data-toggle="collapse" href="#collapse1_1" className="colLink d-flex align-items-center">
                                                                                    <h4 className="panel-title">
                                                                                        <i className="fas fa-angle-right" style={{ marginRight: "10px" }} />
                                                                                        Iqtisod
                                                                                    </h4>
                                                                                </a>
                                                                            </div>
                                                                            <input type="checkbox" className="checkBoxPanel" />
                                                                        </div>
                                                                        <div id="collapse1_1" className="panel-collapse collapse " style={{ paddingLeft: "3%" }}>
                                                                            <div className="d-flex align-items-center justify-content-between" style={{ borderBottom: "1px solid lightgray" }}>
                                                                                <div className="panel-body p-1 " >
                                                                                    <a data-toggle="collapse" href="#collapse1_2" className="colLink d-flex align-items-center">
                                                                                        <h4 className="panel-title">
                                                                                            <i className="fas fa-angle-right" style={{ marginRight: "10px" }} />
                                                                                            Hokimliklar
                                                                                        </h4>
                                                                                    </a>
                                                                                </div>
                                                                                <input type="checkbox" className="checkBoxPanel" />
                                                                            </div>
                                                                            <div id="collapse1_2" className="panel-collapse collapse" style={{ paddingLeft: "3%" }}>
                                                                                <div className="d-flex align-items-center justify-content-between" style={{ borderBottom: "1px solid lightgray" }}>
                                                                                    <div className="panel-body p-1 " >
                                                                                        <a data-toggle="collapse" href="#collapse1_3" className="colLink d-flex align-items-center">
                                                                                            <h4 className="panel-title">
                                                                                                <i className="fas fa-angle-right" style={{ marginRight: "10px" }} />
                                                                                                Hokimliklar1
                                                                                            </h4>
                                                                                        </a>
                                                                                    </div>
                                                                                    <input type="checkbox" className="checkBoxPanel" />
                                                                                </div>
                                                                                <div id="collapse1_3" className="panel-collapse collapse" style={{ paddingLeft: "3%" }}>
                                                                                    <div className="d-flex align-items-center justify-content-between" style={{ borderBottom: "1px solid lightgray" }}>
                                                                                        <div className="panel-body p-1 " >
                                                                                            <a data-toggle="collapse" href="#collapse1_4" className="colLink d-flex align-items-center">
                                                                                                <h4 className="panel-title">
                                                                                                    <i className="fas fa-angle-right" style={{ marginRight: "10px" }} />
                                                                                                    Hokimliklar2
                                                                                                </h4>
                                                                                            </a>
                                                                                        </div>
                                                                                        <input type="checkbox" className="checkBoxPanel" />
                                                                                    </div>
                                                                                    <div id="collapse1_4" className="panel-collapse collapse" style={{ paddingLeft: "3%" }}>
                                                                                        <div className="d-flex align-items-center justify-content-between" style={{ borderBottom: "1px solid lightgray" }}>
                                                                                            <div className="panel-body p-1 " >
                                                                                                <a data-toggle="collapse" href="#collapse1_5" className="colLink d-flex align-items-center">
                                                                                                    <h4 className="panel-title">
                                                                                                        <i className="fas fa-angle-right" style={{ marginRight: "10px" }} />
                                                                                                        Hokimliklar1
                                                                                                    </h4>
                                                                                                </a>
                                                                                            </div>
                                                                                            <input type="checkbox" className="checkBoxPanel" />
                                                                                        </div>
                                                                                        <div id="collapse1_5" className="panel-collapse collapse" style={{ paddingLeft: "3%" }}>
                                                                                            <div className="d-flex align-items-center justify-content-between" style={{ borderBottom: "1px solid lightgray" }}>
                                                                                                <div className="panel-body p-1" >
                                                                                                    <a data-toggle="collapse" href="#3" className="colLink d-flex align-items-center">
                                                                                                        <h4 className="panel-title">
                                                                                                            <i className="fas fa-angle-right" style={{ marginRight: "10px" }} />
                                                                                                            Hokimliklar1
                                                                                                        </h4>
                                                                                                    </a>
                                                                                                </div>
                                                                                                <input type="checkbox" className="checkBoxPanel" />
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
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-link"
                                                            data-dismiss="modal">Yopish</button>
                                                        <button type="button" className="btn btn-primary">
                                                            <i className="fas fa-save mr-1" style={{ fontSize: "18px" }}></i>Saqlash
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end modal --> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="row w-100 d-flex justify-content-end mt-3">
                                    <div className="col-lg-6 ml-3 pr-0">
                                        <div className="form-group text-color">
                                            <label className="color-black">Elektron kalitni tanlang</label>
                                            <select className="form-control form-control-sm select select-search" data-container-css-classname="select-sm" >
                                                <optgroup className="text-color" label="Elektron kalitni tanlang">
                                                    <option value="AZ">To'rayev Hikmatullo Hamroyevich</option>
                                                    <option value="CO">I.Istamov</option>
                                                    <option value="ID">D.Sodiqov</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-primary ml-2" style={{ width: "100%" }}>
                                                <i className="fas fa-save mr-1" style={{ fontSize: "18px" }}></i>Saqlash
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end tashqai bajaruvchilar --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}