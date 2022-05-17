import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarFuqaroMurojat from "../navbarFuqaroMurojat/NavbarFuqaroMurojat";
import Select from 'react-select'

export default function FuqaroMurojatiContent() {
    const [file, setFile] = useState(null);
    const [murojaatSoni, setMurojaatSoni] = useState("");

    // tooltipni o'chirish
    useEffect(() => {
        document.querySelector('.tooltip')?.remove();
    }, []);

    useEffect(() => {
        if (parseInt(murojaatSoni) > 1) {
            document.querySelector('.qushimchaMurojaat').style.display = "block";
        } else {
            document.querySelector('.qushimchaMurojaat').style.display = "none";
        }
    }, [murojaatSoni]);

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

    const myfunLiso = () => {
        let mySelect = document.getElementById('mySelect');
        let jShaxs = document.getElementById('jShaxs')
        let yShaxs = document.getElementById('yShaxs')
        if (mySelect.value === yShaxs.id) {
            yShaxs.style.display = 'block'
            jShaxs.style.display = 'none'
        } else if (mySelect.value === jShaxs.id) {
            yShaxs.style.display = 'none'
            jShaxs.style.display = 'block'
        }
    }

    const malumotniOlish = async () => {
        let str = "";
        let strPassport = "";
        let shaxs = document.querySelector('#mySelect').value;
        let tugilganKuni = document.querySelector('.tugilganKuni').value;
        let passportMalumot = document.querySelector('.passportMalumot').value;

        // let pinfl1 = pinfl.split('-');
        let passMal = passportMalumot.split('-');
        // pinfl1.forEach((pin, index) => {
        //     str += pin;
        // })
        passMal.forEach((pass, index) => {
            strPassport += pass;
        })
        console.log(shaxs);
        console.log(tugilganKuni);
        console.log(strPassport);

        //     alert("hello");

        alert("POST: " + `const res = await axios.post("https://d-doc.uz/api/personal/search", {
            pinpp: str,
            seria: strPassport
        });
    // console.log(res.data); `)
        // const res = await axios.post("https://d-doc.uz/api/personal/search", {
        //     pinpp: str,
        //     seria: strPassport
        // });
        // console.log(res.data);
    }

    useEffect(() => {

    }, []);

    const logChange = () => {

    }

    const logChange1 = (val) => {
        let pdfCard = document.getElementById('pdfCard');
        let kiruvchi = document.getElementById('mu');
        if (val.value === "Buxoro viloyat hokimligi") {
            kiruvchi.style.display = 'block';
            pdfCard.style.display = "none";
        } else {
            kiruvchi.style.display = 'none';
            pdfCard.style.display = "block";
        }
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
                        <div className="row">
                            {/* <!-- card1 --> */}
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group row">
                                                    <div className="col-lg-12">
                                                        <Select
                                                            // defaultValue={options[1]}
                                                            options={[
                                                                // { value: "Jurnali", label: "Jurnali", isDisabled: true },
                                                                { value: "Jismoniy Shaxs", label: "Jismoniy Shaxs" },
                                                                { value: "Yurdik shaxs", label: "Yurdik shaxs" },
                                                            ]}
                                                            onChange={logChange}
                                                            placeholder="Jurnali"
                                                        />
                                                        {/* <select className="form-control form-control-outline select" id="mySelect" onChange={myfunLiso}>
                                                            <option value="Jismoniy Shaxs">Jismoniy Shaxs</option>
                                                            <option value="Yurdik shaxs">Yurdik shaxs</option>
                                                        </select> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr style={{ margin: "0" }} />
                                        {/* <!-- forma jismoniy shax --> */}
                                        <div id="jShaxs">
                                            <form className="mt-3">
                                                <div className="row">
                                                    <div class="col-lg-6">
                                                        <div class="form-group form-group-floating row mb-0">
                                                            <div class="col-lg-12">
                                                                <div class="position-relative">
                                                                    <input type="text" className="form-control daterange-single form-control-outline tugilganKuni" id="royxatdanOtishSana" placeholder="Placeholder" />
                                                                    <label class="label-floating">BERILGAN SANA</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <div className="col-lg-6">
                                                        <div className="form-group form-group-floating  row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input type="date" className="form-control form-control-outline InputCard" placeholder="Placeholder" />
                                                                    <label className="label-floating">BERILGAN SANA</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                    {/* <div className="col-lg-6">
                                                        <div className="form-group form-group-floating  row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input
                                                                        type="text"
                                                                        data-mask="999-999-999-999-99"
                                                                        className="form-control form-control-outline InputCard pinfl"
                                                                        placeholder="Placeholder"
                                                                    />
                                                                    <label className="label-floating">PIN FL: </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                    <div className="col-lg-6">
                                                        <div className="form-group form-group-floating  row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input
                                                                        type="text"
                                                                        data-mask="aa-999-99-99"
                                                                        style={{ textTransform: "upperCase" }}
                                                                        className="form-control form-control-outline InputCard passportMalumot"
                                                                        placeholder="Placeholder"
                                                                    />
                                                                    <label className="label-floating">PASPORT RAQAMI VA SERIYA NOMERI</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group form-group-floating  row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-primary form-control form-control-outline d-flex align-items-center justify-content-center"
                                                                        onClick={malumotniOlish}
                                                                    >
                                                                        <i className="fas fa-info-circle mr-1 " style={{ fontSize: "20px" }}></i>
                                                                        Ma'lumotni olish
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <hr style={{ margin: "0" }} />
                                            <form className="mt-3">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="form-group form-group-floating  row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input type="text" className="form-control form-control-outline InputCard" value="To'rayev" placeholder="Placeholder" disabled />
                                                                    <label className="label-floating">FAMILIYASI</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group form-group-floating  row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input type="text" className="form-control form-control-outline InputCard" value="Hikmatullo" placeholder="Placeholder" disabled />
                                                                    <label className="label-floating">ISMI</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group form-group-floating  row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input type="text" className="form-control form-control-outline InputCard" value="Hamroyevich" placeholder="Placeholder" disabled />
                                                                    <label className="label-floating">OTASINI ISMI</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group form-group-floating  row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input type="date" className="form-control form-control-outline daterange-single InputCard" value="06.04.1987" placeholder="Placeholder" disabled />
                                                                    <label className="label-floating">TUG'ILGAN SANA</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group form-group-floating  row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input type="text" className="form-control form-control-outline InputCard" value="O'zbek" placeholder="Placeholder" disabled />
                                                                    <label className="label-floating">MILLATI</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group form-group-floating  row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input type="text" className="form-control form-control-outline InputCard" value="Erkak" placeholder="Placeholder" disabled />
                                                                    <label className="label-floating">JINSI</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group form-group-floating  row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input type="text" className="form-control form-control-outline InputCard" value="Uylangan" placeholder="Placeholder" disabled />
                                                                    <label className="label-floating">HAYOTIY HOLATI</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group form-group-floating  row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input type="text" className="form-control form-control-outline InputCard" value="Vobkent tumani" placeholder="Placeholder" disabled />
                                                                    <label className="label-floating">TUG'ILGAN JOYI</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group form-group-floating  row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input type="text" className="form-control form-control-outline InputCard" value="O'zbekiston Respublikasi" placeholder="Placeholder" disabled />
                                                                    <label className="label-floating">FUQAROLIGI</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group form-group-floating  row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input type="text" className="form-control form-control-outline InputCard" value="Buxoro viloyati Vobkent IIB" placeholder="Placeholder" disabled />
                                                                    <label className="label-floating">PASPORT BERILGAN JOYI</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group form-group-floating  row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input type="date" className="form-control form-control-outline InputCard" value="28.06.2015" placeholder="Placeholder" disabled />
                                                                    <label className="label-floating">BERILGAN SANA</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group form-group-floating  row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input type="date" className="form-control form-control-outline InputCard" value="27.06.2025" placeholder="Placeholder" disabled />
                                                                    <label className="label-floating">AMAL QILISH MUDDATI</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p style={{ borderTop: "5px solid #00BCD4", width: "98%" }} className="ml-2 mb-3"></p>
                                                    <div className="col-lg-6">
                                                        <div className="form-group row">
                                                            <div className="col-lg-12">
                                                                <Select
                                                                    // defaultValue={options[1]}
                                                                    options={[
                                                                        { value: "VILOYAT", label: "VILOYAT", isDisabled: true },
                                                                        { value: "E-pochta", label: "E-pochta" },
                                                                        { value: "Fax", label: "Fax" },
                                                                        { value: "Ichki Tizim", label: "Ichki Tizim" },
                                                                        { value: "E-xat", label: "E-xat" },
                                                                    ]}
                                                                    // onChange={logChange}
                                                                    placeholder="VILOYAT"
                                                                />
                                                                {/* <select data-placeholder="VILOYAT" className="form-control select-search  form-control-outlin select">
                                                                    <option></option>
                                                                    <option value="AZ">E-pochta</option>
                                                                    <option value="CO">Fax</option>
                                                                    <option value="ID">Ichki Tizim</option>
                                                                    <option value="ID">E-xat</option>
                                                                </select> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group row">
                                                            <div className="col-lg-12">
                                                                <Select
                                                                    // defaultValue={options[1]}
                                                                    options={[
                                                                        { value: "TUMAN (SHAHAR)", label: "TUMAN (SHAHAR)", isDisabled: true },
                                                                        { value: "E-pochta", label: "E-pochta" },
                                                                        { value: "Fax", label: "Fax" },
                                                                        { value: "Ichki Tizim", label: "Ichki Tizim" },
                                                                        { value: "E-xat", label: "E-xat" },
                                                                    ]}
                                                                    // onChange={logChange}
                                                                    placeholder="TUMAN (SHAHAR)"
                                                                />
                                                                {/* <select data-placeholder="TUMAN (SHAHAR)" className="form-control select-search  form-control-outline select">
                                                                    <option></option>
                                                                    <option value="AZ">E-pochta</option>
                                                                    <option value="CO">Fax</option>
                                                                    <option value="ID">Ichki Tizim</option>
                                                                    <option value="ID">E-xat</option>
                                                                </select> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group row">
                                                            <div className="col-lg-12">
                                                                <Select
                                                                    // defaultValue={options[1]}
                                                                    options={[
                                                                        { value: "MFY", label: "MFY", isDisabled: true },
                                                                        { value: "E-pochta", label: "E-pochta" },
                                                                        { value: "Fax", label: "Fax" },
                                                                        { value: "Ichki Tizim", label: "Ichki Tizim" },
                                                                        { value: "E-xat", label: "E-xat" },
                                                                    ]}
                                                                    // onChange={logChange}
                                                                    placeholder="MFY"
                                                                />
                                                                {/* <select data-placeholder="MFY" className="form-control select-search  form-control-outlin select">
                                                                    <option></option>
                                                                    <option value="AZ">E-pochta</option>
                                                                    <option value="CO">Fax</option>
                                                                    <option value="ID">Ichki Tizim</option>
                                                                    <option value="ID">E-xat</option>
                                                                </select> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group form-group-floating row mb-0">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input type="text" className="form-control form-control-outline InputCard" value="2-Sektor" placeholder="Placeholder" disabled />
                                                                    <label className="label-floating">SEKTOR</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group form-group-floating row mb-0">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input type="text" className="form-control form-control-outline InputCard" placeholder="Placeholder" />
                                                                    <label className="label-floating">MANZIL </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* <!-- end form shismoniy shaxs --> */}
                                        {/* <!-- yurdik shax forma --> */}
                                        <div id="yShaxs" style={{ display: "none" }}>
                                            <h1>Yurdik Shaxs</h1>
                                        </div>
                                        {/* <!-- end forma --> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end card1 --> */}
                            {/* <!-- card2 --> */}
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group row">
                                                    <div className="col-lg-12">
                                                        <Select
                                                            // defaultValue={options[1]}
                                                            options={[
                                                                { value: "QABUL QILISH TURI", label: "QABUL QILISH TURI", isDisabled: true },
                                                                { value: "SAYYOR QABUL", label: "SAYYOR QABUL" },
                                                                { value: "XALQ QABULXONASI", label: "XALQ QABULXONASI" },
                                                                { value: "SHAXSIY", label: "SHAXSIY" },
                                                            ]}
                                                            // onChange={logChange}
                                                            placeholder="QABUL QILISH TURI"
                                                        />
                                                        {/* <select data-placeholder="QABUL QILISH TURI" className="form-control form-control-outline select">
                                                            <option></option>
                                                            <option value="AZ">SAYYOR QABUL</option>
                                                            <option value="CO">XALQ QABULXONASI</option>
                                                            <option value="ID">SHAXSIY</option>
                                                        </select> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group row">
                                                    <div className="col-lg-12">
                                                        <Select
                                                            // defaultValue={options[1]}
                                                            options={[
                                                                { value: "JURNALNI TANLANG", label: "JURNALNI TANLANG", isDisabled: true },
                                                                { value: "FUQARO MUROJAATI - 2022", label: "FUQARO MUROJAATI - 2022" },
                                                                { value: "YURIDIK SHAXS MUROJAATI - 2022", label: "YURIDIK SHAXS MUROJAATI - 2022" },
                                                            ]}
                                                            // onChange={logChange}
                                                            placeholder="JURNALNI TANLANG"
                                                        />
                                                        {/* <select data-placeholder="JURNALNI TANLANG" className="form-control form-control-outline select" >
                                                            <option></option>
                                                            <option value="AZ">FUQARO MUROJAATI - 2022</option>
                                                            <option value="AZ">YURIDIK SHAXS MUROJAATI - 2022</option>
                                                        </select> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group form-group-floating  row">
                                                    <div className="col-lg-12">
                                                        <div className="position-relative">
                                                            <input type="number" className="form-control form-control-outline InputCard" placeholder="Placeholder" />
                                                            <label className="label-floating">REG №</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group form-group-floating row mb-0">
                                                    <div className="col-lg-12">
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control daterange-single form-control-outline"
                                                                id="chiquvchiSana"
                                                                placeholder="Placeholder"
                                                            />
                                                            <label className="label-floating">REG SANA</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="col-lg-6">
                                                <div className="form-group form-group-floating  row">
                                                    <div className="col-lg-12">
                                                        <div className="position-relative">
                                                            <input type="date" className="form-control form-control-outline InputCard" placeholder="Placeholder" />
                                                            <label className="label-floating">REG SANA</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div className="col-lg-6">
                                                <div className="form-group row mb-0">
                                                    <div className="col-lg-12">
                                                        <Select
                                                            // defaultValue={options[1]}
                                                            options={[
                                                                { value: "MUROJAAT YO'NALISHI", label: "MUROJAAT YO'NALISHI", isDisabled: true },
                                                                { value: "01 - Kredit", label: "01 - Kredit" },
                                                                { value: "02 - Ishga joylashtirish", label: "02 - Ishga joylashtirish" },
                                                                { value: "03 - Uy-joy", label: "03 - Uy-joy" },
                                                                { value: "04 - Yer ajratish", label: "04 - Yer ajratish" },
                                                            ]}
                                                            // onChange={logChange}
                                                            placeholder="MUROJAAT YO'NALISHI"
                                                        />
                                                        {/* <select data-placeholder="MUROJAAT YO'NALISHI" className="form-control select-search  form-control-outline select" >
                                                            <option></option>
                                                            <optgroup label="Jurnalni tanlang">
                                                                <option value="AZ">01 - Kredit</option>
                                                                <option value="CO">02 - Ishga joylashtirish</option>
                                                                <option value="ID">03 - Uy-joy</option>
                                                                <option value="ID">04 - Yer ajratish</option>
                                                            </optgroup>
                                                        </select> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group form-group-floating row mb-2">
                                                    <div className="col-lg-12">
                                                        <div className="position-relative">
                                                            <input
                                                                type="number"
                                                                className="form-control form-control-outline InputCard"
                                                                placeholder="Placeholder"
                                                                onChange={(e) => setMurojaatSoni(e.target.value)}
                                                            />
                                                            <label className="label-floating">MUROJAATCHILAR SONI</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collapse greydesk qushimchaMurojaat" style={{ padding: "2px", width: "100%", border: "1px solid lightgray", margin: "10px", borderRadius: "5px", display: "block", background: "#eee" }} >
                                                <div className="col-lg-12">
                                                    <div className="form-group pt-3 form-group-floating  row">
                                                        <div className="col-lg-12">
                                                            <div className="position-relative">
                                                                <textarea className="form-control form-control-outline InputCard" rows="2" placeholder="Placeholder"></textarea>
                                                                <label className="label-floating">QO'SHIMCHA MUROJAATCHI</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group row mb-0 mt-2">
                                                    <div className="col-lg-12">
                                                        <Select
                                                            // defaultValue={options[1]}
                                                            options={[
                                                                { value: "MUROJAAT SHAKLI", label: "MUROJAAT SHAKLI", isDisabled: true },
                                                                { value: "OG'ZAKI", label: "OG'ZAKI" },
                                                                { value: "YOZMA", label: "YOZMA" },
                                                                { value: "ELEKTRON", label: "ELEKTRON" }
                                                            ]}
                                                            // onChange={logChange}
                                                            placeholder="MUROJAAT SHAKLI"
                                                        />
                                                        {/* <select data-placeholder="MUROJAAT SHAKLI" className="form-control form-control-outline select">
                                                            <option></option>
                                                            <option value="AZ">OG'ZAKI</option>
                                                            <option value="CO">YOZMA</option>
                                                            <option value="ID">ELEKTRON</option>
                                                        </select> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group form-group-floating row mb-0 mt-2">
                                                    <div className="col-lg-12">
                                                        <div className="position-relative">
                                                            <input type="number" className="form-control form-control-outline InputCard" placeholder="Placeholder" />
                                                            <label className="label-floating">SAHIFALAR SONI</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="mt-3">
                                                    <div className="col-lg-12">
                                                        <div className="form-group row">
                                                            <div className="col-lg-10 px-0 pr-2">
                                                                <Select
                                                                    // defaultValue={options[1]}
                                                                    options={[
                                                                        { value: "Avvalgi o'rgangan tashkilot", label: "Avvalgi o'rgangan tashkilot", isDisabled: true },
                                                                        { value: "Buxoro viloyat hokimligi", label: "Buxoro viloyat hokimligi" },
                                                                        { value: "Pensiya jamg'armasi", label: "Pensiya jamg'armasi" },
                                                                        { value: "Turizm boshqarmasi", label: "Turizm boshqarmasi" },
                                                                        { value: "Bandlik boshqarmasi", label: "Bandlik boshqarmasi" }
                                                                    ]}
                                                                    onChange={logChange1}
                                                                    placeholder="AVVALGI O'RGANGAN TASHKILOT"
                                                                />
                                                                {/* <select
                                                                    data-placeholder="AVVALGI O'RGANGAN TASHKILOT"
                                                                    id="myInp"
                                                                    onChange={(e) => changeFun(e.target.value)}
                                                                    className="form-control select-search form-control-outline select "
                                                                >
                                                                    <option></option>
                                                                    <optgroup label="Avvalgi o'rgangan tashkilot">
                                                                        <option value="mu">Buxoro viloyat hokimligi</option>
                                                                        <option value="Pensiya jamg'armasi">Pensiya jamg'armasi</option>
                                                                        <option value="Turizm boshqarmasi">Turizm boshqarmasi</option>
                                                                        <option value="Bandlik boshqarmasi">Bandlik boshqarmasi</option>
                                                                    </optgroup>
                                                                </select> */}
                                                            </div>
                                                            <div className="col-lg-2">
                                                                <div className="form-group form-group-floating row">
                                                                    <div className="col-lg-12 p-0">
                                                                        <div className="position-relative">
                                                                            <input type="number" className="form-control form-control-outline InputCard" placeholder="Placeholder" disabled />
                                                                            <label className="label-floating">№</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 p-0 mt-3" id="mu" style={{ display: "none", zIndex: "0" }}>
                                                                <div className="form-group form-group-floating  row">
                                                                    <div className="col-lg-12">
                                                                        <div className="card-box">
                                                                            <div className="col-lg-12 px-0">
                                                                                <div className="card">
                                                                                    <div className="card-body">
                                                                                        <table className="table table-bordered table-striped table-hover Tab">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <th>
                                                                                                        <div className="custom-control custom-control-right custom-radio custom-control-inline">
                                                                                                            <input type="radio" className="custom-control-input" name="cr-i-r" id="takoror" defaultChecked />
                                                                                                            <label className="custom-control-label" htmlFor="takoror">TAKRORIY</label>
                                                                                                        </div>
                                                                                                    </th>
                                                                                                    <th>
                                                                                                        <div className="custom-control custom-control-right custom-radio custom-control-inline">
                                                                                                            <input type="radio" className="custom-control-input" name="cr-i-r" id="dublikat" defaultChecked />
                                                                                                            <label className="custom-control-label" htmlFor="dublikat">DUBLIKAT</label>
                                                                                                        </div>
                                                                                                    </th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2">pdf-link</th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><input type="date" className="w-50" placeholder="Placeholder" disabled /></th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><input type="number" className="w-50" placeholder="№" disabled /></th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><span className="badge badge-primary">Ijobiy hal etildi</span></th>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <th>
                                                                                                        <div className="custom-control custom-control-right custom-radio custom-control-inline">
                                                                                                            <input type="radio" className="custom-control-input" name="cr-r" id="dublikat1" defaultChecked />
                                                                                                            <label className="custom-control-label" htmlFor="dublikat1">TAKRORIY</label>
                                                                                                        </div>
                                                                                                    </th>
                                                                                                    <th>
                                                                                                        <div className="custom-control custom-control-right custom-radio custom-control-inline">
                                                                                                            <input type="radio" className="custom-control-input" name="cr-r" id="takoror1" defaultChecked />
                                                                                                            <label className="custom-control-label" htmlFor="takoror1">DUBLIKAT</label>
                                                                                                        </div>
                                                                                                    </th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2">pdf-link</th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><input type="date" className="w-50" placeholder="Placeholder" disabled /></th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><input type="number" className="w-50" placeholder="№" disabled /></th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><span className="badge badge-danger">14 kun kechiktirilgan</span></th>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <th>
                                                                                                        <div className="custom-control custom-control-right custom-radio custom-control-inline">
                                                                                                            <input type="radio" className="custom-control-input" name="crr" id="takoror2" defaultChecked />
                                                                                                            <label className="custom-control-label" htmlFor="takoror2">TAKRORIY</label>
                                                                                                        </div>
                                                                                                    </th>
                                                                                                    <th>
                                                                                                        <div className="custom-control custom-control-right custom-radio custom-control-inline">
                                                                                                            <input type="radio" className="custom-control-input" name="crr" id="dublikat2" defaultChecked />
                                                                                                            <label className="custom-control-label" htmlFor="dublikat2">DUBLIKAT</label>
                                                                                                        </div>
                                                                                                    </th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2">pdf-link</th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><input type="date" className="w-50" placeholder="Placeholder" disabled /></th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><input type="number" className="w-50" placeholder="№" disabled /></th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><span className="badge badge-warning">Muddati uzaytirilgan</span></th>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <th>
                                                                                                        <div className="custom-control custom-control-right custom-radio custom-control-inline">
                                                                                                            <input type="radio" className="custom-control-input" name="crr1" id="takoror3" defaultChecked />
                                                                                                            <label className="custom-control-label" htmlFor="takoror3">TAKRORIY</label>
                                                                                                        </div>
                                                                                                    </th>
                                                                                                    <th>
                                                                                                        <div className="custom-control custom-control-right custom-radio custom-control-inline">
                                                                                                            <input type="radio" className="custom-control-input" name="crr1" id="dublikat4" defaultChecked />
                                                                                                            <label className="custom-control-label" htmlFor="dublikat4">DUBLIKAT</label>
                                                                                                        </div>
                                                                                                    </th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2">pdf-link</th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><input type="date" className="w-50" placeholder="Placeholder" disabled /></th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><input type="number" className="w-50" placeholder="№" disabled /></th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><span className="badge badge-info">Rad etildi</span></th>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 p-0 mt-3" id="pdfCard">
                                                                <div className="form-group form-group-floating row">
                                                                    <div className="col-lg-12">
                                                                        <div className="card-box">
                                                                            <div className="col-lg-12 px-0">
                                                                                <div className="card mb-0">
                                                                                    <div className="card-body">
                                                                                        <table className="table table-bordered datatable-select-single table-striped table-hover Tab">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <th className="text-center p-0 pt-2 pb-2">pdf-link</th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><input type="date" className="w-50" placeholder="Placeholder" disabled /></th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><input type="number" className="w-50" placeholder="№" disabled /></th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><span className="badge badge-primary">Ijobiy hal etildi</span></th>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <th className="text-center p-0 pt-2 pb-2">pdf-link</th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><input type="date" className="w-50" placeholder="Placeholder" disabled /></th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><input type="number" className="w-50" placeholder="№" disabled /></th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><span className="badge badge-danger">14 kun kechiktirilgan</span></th>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <th className="text-center p-0 pt-2 pb-2">pdf-link</th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><input type="date" className="w-50" placeholder="Placeholder" disabled /></th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><input type="number" className="w-50" placeholder="№" disabled /></th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><span className="badge badge-warning">Muddati uzaytirilgan</span></th>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <th className="text-center p-0 pt-2 pb-2">pdf-link</th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><input type="date" className="w-50" placeholder="Placeholder" disabled /></th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><input type="number" className="w-50" placeholder="№" disabled /></th>
                                                                                                    <th className="text-center p-0 pt-2 pb-2"><span className="badge badge-info">Rad etildi</span></th>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
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
                                            {/* <!-- end dropdown --> */}
                                            <div className="col-lg-12">
                                                <div className="form-group row">
                                                    <div className="col-lg-12">
                                                        <Select
                                                            // defaultValue={options[1]}
                                                            options={[
                                                                { value: "MUROJAAT TURI", label: "MUROJAAT TURI", isDisabled: true },
                                                                { value: "ARIZA", label: "ARIZA" },
                                                                { value: "SHIKOYAT", label: "SHIKOYAT" },
                                                                { value: "TAKLIF", label: "TAKLIF" },
                                                                { value: "ILTIMOSNOMA", label: "ILTIMOSNOMA" }
                                                            ]}
                                                            // onChange={logChange}
                                                            placeholder="MUROJAAT TURI"
                                                        />
                                                        {/* <select data-placeholder="MUROJAAT TURI" className="form-control select-search form-control-outline select">
                                                            <option></option>
                                                            <option value="AZ">ARIZA</option>
                                                            <option value="CO">SHIKOYAT</option>
                                                            <option value="ID">TAKLIF</option>
                                                            <option value="ID">ILTIMOSNOMA</option>
                                                        </select> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group form-group-floating  row">
                                                    <div className="col-lg-12">
                                                        <div className="position-relative">
                                                            <textarea className="form-control form-control-outline InputCard" cols="10" rows="4" placeholder="Placeholder"></textarea>
                                                            <label className="label-floating">QISQACHA MA'LUMOT</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group row">
                                                    <div className="col-lg-12 ">
                                                        <Select
                                                            // defaultValue={options[1]}
                                                            options={[
                                                                { value: "IMZOLOVCHI", label: "IMZOLOVCHI", isDisabled: true },
                                                                { value: "H.To'rayev", label: "H.To'rayev" },
                                                                { value: "B.Tursunov", label: "B.Tursunov" },
                                                                { value: "I.Samandarova", label: "I.Samandarova" },
                                                                { value: "H.Zamonov", label: "H.Zamonov" }
                                                            ]}
                                                            // onChange={logChange}
                                                            placeholder="IMZOLOVCHI"
                                                        />
                                                        {/* <select data-placeholder="IMZOLOVCHI" className="form-control select-search form-control-outline select">
                                                            <option></option>
                                                            <option value="AZ">H.To'rayev</option>
                                                            <option value="CO">B.Tursunov</option>
                                                            <option value="ID">I.Samandarova</option>
                                                            <option value="ID">H.Zamonov</option>
                                                        </select> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group row">
                                                    <div className="col-lg-12">
                                                        <Select
                                                            // defaultValue={options[1]}
                                                            options={[
                                                                { value: "NAZORAT", label: "NAZORAT", isDisabled: true },
                                                                { value: "E-pochta", label: "E-pochta" },
                                                                { value: "Fax", label: "Fax" },
                                                                { value: "Ichki Tizim", label: "Ichki Tizim" },
                                                                { value: "E-xat", label: "E-xat" }
                                                            ]}
                                                            // onChange={logChange}
                                                            placeholder="NAZORAT"
                                                        />
                                                        {/* <select data-placeholder="NAZORAT" className="form-control select-search form-control-outline select">
                                                            <option></option>
                                                            <optgroup label="Nazorat turi">
                                                                <option value="AZ">E-pochta</option>
                                                                <option value="CO">Fax</option>
                                                                <option value="ID">Ichki Tizim</option>
                                                                <option value="ID">E-xat</option>
                                                            </optgroup>
                                                        </select> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group row">
                                                    <div className="col-lg-12 ">
                                                        <Select
                                                            // defaultValue={options[1]}
                                                            options={[
                                                                { value: "IJROCHI", label: "IJROCHI", isDisabled: true },
                                                                { value: "H.To'rayev", label: "H.To'rayev" },
                                                                { value: "B.Tursunov", label: "B.Tursunov" },
                                                                { value: "I.Samandarova", label: "I.Samandarova" },
                                                                { value: "H.Zamonov", label: "H.Zamonov" }
                                                            ]}
                                                            // onChange={logChange}
                                                            placeholder="IJROCHI"
                                                        />
                                                        {/* <select data-placeholder="IJROCHI" className="form-control select-search form-control-outline select">
                                                            <option></option>
                                                            <option value="AZ">H.To'rayev</option>
                                                            <option value="CO">B.Tursunov</option>
                                                            <option value="ID">I.Samandarova</option>
                                                            <option value="ID">H.Zamonov</option>
                                                        </select> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group form-group-floating row">
                                                    <div className="col-lg-12">
                                                        <div className="position-relative">
                                                            <button
                                                                className="btn btn-primary form-control form-control-outline"
                                                                data-toggle="modal"
                                                                data-target="#modal_theme_primaryTashqiBajaruvchilar"
                                                            >
                                                                Tashqi bajaruvchilar
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group form-group-floating row mb-0">
                                                    <div className="col-lg-12">
                                                        <label className="custom-file" >
                                                            <input
                                                                type="file"
                                                                className="custom-file-input cursor-pointer"
                                                                multiple
                                                                onChange={(e) => setFile(e.target.files)}
                                                            />
                                                            <span className="custom-file-label text-muted">
                                                                {file?.length > 0 ? `${file.length} ta fayl tanlandi` : "Ilova hujjati"}
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mt-3">
                                                <div className="form-group form-group-floating row mb-0">
                                                    <div className="col-lg-12">
                                                        <div className="position-relative">
                                                            <button className="btn btn-primary form-control form-control-outline d-flex align-items-center justify-content-center">
                                                                <i className="fas fa-save mr-1" style={{ fontSize: "18px" }}></i>
                                                                <span>Saqlash</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* tashqi bajaruvchilar */}
                                            <div id="modal_theme_primaryTashqiBajaruvchilar" className="modal fade" tabIndex="-1">
                                                <div className="modal-dialog modal-xl modal-dialog-scrollable">
                                                    <div className="modal-content">
                                                        <div className="modal-header bg-primary text-white">
                                                            <h6 className="modal-title" style={{ fontWeight: "bold", textTransform: "upperCase" }}>Tashqi Bajaruvchilar</h6>
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
                                                                <i className="fas fa-save mr-1"></i>Saqlash
                                                            </button>
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
        </div >
    )
}