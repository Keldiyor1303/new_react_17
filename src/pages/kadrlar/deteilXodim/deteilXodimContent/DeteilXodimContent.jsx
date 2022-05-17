import React, { useState } from "react";
import Select from 'react-select'

export default function DeteilXodimContent() {
    const [indexUrniMehnatUchirish, setIndexUrniMehnatUchirish] = useState(null);
    const [indexUrniMehnatUzgartirish, setIndexUrniMehnatUzgartirish] = useState(null);
    // ta'lim
    const [data, setData] = useState([
        {
            id: 1,
            turi: "Kunduzgi",
            tugatganYili: "03/07/2022",
            talimMuassasi: "Buxoro Davlat Universiteti",
            daraja: "Daraja",
        }
    ]);
    // mehnat
    const [mehnat, setMehnat] = useState([
        {
            id: 1,
            boshlanishi: "1-12-2021",
            tugashi: "10-12-2021",
            lavozimi: "Buxoro Viloyat Hokimligi",
        }
    ]);
    // qarindosh
    const [qarindosh, setQarindosh] = useState([
        {
            id: 1,
            qarindoshlik: "Aka",
            FISH: "Istamov Ibrohim Ismoilovich",
            tugilganJoyi: "Buxoro Tuman 12.12.2001",
            ishJoyi: "Buxoro Viloyat Hokimligi",
            manzil: "Buxoro Tuman",
        }
    ]);

    const shaxsiyFun = () => {
        let passposrtMalumotlari = document.getElementById('passposrtMalumotlari')
        let checkk = document.getElementById('shaxsiy')
        if (checkk.checked === true) {
            passposrtMalumotlari.style.display = 'none'
        } else {
            passposrtMalumotlari.style.display = 'flex'
        }
    }
    const mazilFun = () => {
        let manzil = document.getElementById('mazil')
        let checkk = document.getElementById('mazili')
        if (manzil.checked === true) {
            checkk.style.display = 'none'
        } else {
            checkk.style.display = 'flex'
        }
    }
    const myfun = () => {
        let check = document.getElementById('myInp')
        let next = document.getElementById('next')
        if (check.checked === true) {
            next.style.display = 'none'
        } else {
            next.style.display = 'flex'
        }
    }

    // o'chirish ta'lim 
    const Uchirish = (ind) => {
        let arr = data.filter((d, i) => {
            return i !== ind;
        })
        setData(arr);
        document.querySelector('.closeYopish').click();
    }

    // mehnat faoliyatini o'chirish 
    const UchirishMehnat = (ind) => {
        let arr = mehnat.filter((d, i) => {
            return i !== ind;
        })
        setMehnat(arr);
        document.querySelector('.closeMehnat').click();
    }

    // qarindoshni o'chirish
    const UchirishQarindosh = (ind) => {
        let arr = qarindosh.filter((d, i) => {
            return i !== ind;
        })
        setQarindosh(arr);
        document.querySelector('.closeQarindosh').click();
    }



    // {
    //     talimTuri, talimMuassasi, daraja
    //     tugatganYili, diplomRaqami,
    //     }
    // talim qo'shish
    const talimQushish = (e) => {
        e.preventDefault();
        let diplomRaqami = document.querySelector('.diplomRaqami').value || "";
        let turi = document.querySelector('.talimTuri').querySelector('.css-qc6sy-singleValue')?.textContent || "";
        console.log(turi);
        let tugatganYili = document.querySelector('.tugatganYili').value || "";
        let talimMuassasi = document.querySelector('.talimMuassasi').querySelector('.css-qc6sy-singleValue')?.textContent || "";
        let daraja = document.querySelector('.daraja').querySelector('.css-qc6sy-singleValue')?.textContent || "";
        if (turi !== "" && tugatganYili !== "" && talimMuassasi !== "" && daraja !== "" && diplomRaqami !== "") {
            let obj = {
                turi: turi,
                tugatganYili: tugatganYili,
                talimMuassasi: talimMuassasi,
                daraja: daraja
            }
            setData([...data, obj]);
            document.querySelector('.formTalimQushish').reset();
            document.querySelector('.closeTalimUzgartirish').click();
        } else {
            document.querySelector('.errorTalim').textContent = "Maydonlar to'liq to'ldirilishi shart";
            setTimeout(() => {
                document.querySelector('.errorTalim').textContent = "";
            }, 2000);
        }
    }

    // talim o'zgartirish
    const UzgartirishTalim = (ind) => {
        let diplomRaqami = document.querySelector('.diplomRaqamiUzgartirish').value || "";
        let turi = document.querySelector('.talimTuriUzgartirish').querySelector('.css-qc6sy-singleValue')?.textContent || "";
        console.log(turi);
        let tugatganYili = document.querySelector('.tugatganYiliUzgartirish').value || "";
        let talimMuassasi = document.querySelector('.talimMuassasiUzgartirish').querySelector('.css-qc6sy-singleValue')?.textContent || "";
        let daraja = document.querySelector('.darajaUzgartirish').querySelector('.css-qc6sy-singleValue')?.textContent || "";
        if (turi !== "" && tugatganYili !== "" && talimMuassasi !== "" && daraja !== "" && diplomRaqami !== "") {
            let obj = {
                turi: turi,
                tugatganYili: tugatganYili,
                talimMuassasi: talimMuassasi,
                daraja: daraja
            }
            // setData([...data, obj]);
            let arr = data.filter((d, i) => {
                if (i === ind) {
                    d.turi = turi;
                    d.tugatganYili = tugatganYili;
                    d.talimMuassasi = talimMuassasi;
                    d.daraja = daraja;
                }
                return d;
            })
            setData(arr);
            document.querySelector('.close1TalimUzgartirish').click();
        } else {
            document.querySelector('.errorTalimUzgartirish').textContent = "Maydonlar to'liq to'ldirilishi shart";
            setTimeout(() => {
                document.querySelector('.errorTalimUzgartirish').textContent = "";
            }, 2000);
        }
    }

    // mehnat qo'shish
    const mehnatQushish = () => {
        let kirganVaqt = document.querySelector('.kirganVaqtMehnat').value;
        let tugashVaqtMehnat = document.querySelector('.tugashVaqtMehnat').value;
        let lavozimiMehnat = document.querySelector('.lavozimiMehnat').value;

        if (kirganVaqt !== "" && tugashVaqtMehnat !== "" && lavozimiMehnat !== "") {
            let obj = {
                id: mehnat.length + 1,
                boshlanishi: kirganVaqt,
                tugashi: tugashVaqtMehnat,
                lavozimi: lavozimiMehnat
            }
            setMehnat([...mehnat, obj]);
            document.querySelector('.kirganVaqtMehnat').value = "";
            document.querySelector('.tugashVaqtMehnat').value = "";
            document.querySelector('.lavozimiMehnat').value = "";
        } else {
            document.querySelector('.errorMehnatQushish').textContent = "Maydonlar to'liq to'ldirilmagan";
            setTimeout(() => {
                document.querySelector('.errorMehnatQushish').textContent = "";
            }, 2000);
        }
    }
    // o'zgartirish mehnat
    const UzgartirishMehnat = (ind) => {
        let kirganVaqtMehnatUzgartirish = document.querySelector('.kirganVaqtMehnatUzgartirish').value;
        let tugashVaqtMehnatUzgartirish = document.querySelector('.tugashVaqtMehnatUzgartirish').value;
        let lavozimiMehnatUzgartirish = document.querySelector('.lavozimiMehnatUzgartirish').value;

        if (kirganVaqtMehnatUzgartirish !== "" && tugashVaqtMehnatUzgartirish !== "" && lavozimiMehnatUzgartirish !== "") {
            let arr = mehnat.filter((d, i) => {
                if (i === ind) {
                    d.boshlanishi = kirganVaqtMehnatUzgartirish;
                    d.tugashi = tugashVaqtMehnatUzgartirish;
                    d.lavozimi = lavozimiMehnatUzgartirish;
                }
                return d;
            });
            setMehnat(arr);
            document.querySelector('.close1MehnatUzgartirishYopish').click();
        } else {
            document.querySelector('.uzgartirishMehnatError').textContent = "Maydonlar to'liq to'ldirilmagan";
            setTimeout(() => {
                document.querySelector('.uzgartirishMehnatError').textContent = "";
            }, 2000);
        }
    }

    return (
        <div className="content mb-5" >
            {/* <!-- Cover area --> */}
            <div className="profile-cover" style={{ margin: "15px" }}>
                <div className="profile-cover-img" style={{ backgroundImage: "url(/style/images/backgrounds/user_bg4.jpg)" }}></div>
                <div className="media align-items-center text-center text-lg-left flex-column flex-lg-row m-0">
                    <div className="mr-lg-3 mb-2 mb-lg-0">
                        <img src="/style/images/Zaripov.jpeg" className="border-white rounded-circle profile-thumb" width="48" height="48" alt="" />
                        {/* <a href="#" className="profile-thumb">
                        </a> */}
                    </div>

                    <div className="media-body text-white">
                        <h1 className="mb-0">Zaripov Botir</h1>
                        <span className="d-block">Viloyat Hokimi</span>
                    </div>
                </div>
            </div>
            {/* <!-- /cover area --> */}
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Xodim Ma'lumotlari</h3>
            <div className="card-body">
                <div className="card">
                    <div className="card-body">
                        <ul className="nav nav-pills nav-pills-bordered  nav-pills-toolbar nav-justified NavLink">
                            <li className="nav-item"><a href="#shaxsiymalumot" className="nav-link active" data-toggle="tab">Shaxsiy ma'lumot</a></li>
                            <li className="nav-item"><a href="#shatat" className="nav-link" data-toggle="tab">Shtat haqida ma'lumot</a></li>
                            <li className="nav-item"><a href="#talim" className="nav-link" data-toggle="tab">Ta'lim</a></li>
                            <li className="nav-item"><a href="#mehnat" className="nav-link" data-toggle="tab">Mehnat faoliyati</a></li>
                            <li className="nav-item"><a href="#qarindosh" className="nav-link" data-toggle="tab">Qarindoshlar</a></li>
                            <li className="nav-item"><a href="#boshqalar" className="nav-link" data-toggle="tab">Boshqalar</a></li>
                            <li className="nav-item"><a href="#aloqa" className="nav-link" data-toggle="tab">Aloqa</a></li>
                        </ul>

                        <div className="tab-content">
                            {/* <!-- <form> -->
                                <!-- Shaxsiy ma'lumot --> */}
                            <div className="tab-pane fade show active" id="shaxsiymalumot">
                                <h3 style={{ margin: "10px 0 0 0px", fontWeight: "bold", textTransform: "upperCase" }}>Pasport ma'lumotlari</h3>
                                <div className="row mt-2">
                                    <div className="col-lg-2">
                                        <div className="form-group form-group-floating row">
                                            <div className="col-md-12">
                                                <div className="position-relative">
                                                    <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
                                                    <label className="label-floating">Seriya</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className="form-group form-group-floating row">
                                            <div className="col-md-12">
                                                <div className="position-relative">
                                                    <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
                                                    <label className="label-floating">Nomer</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group form-group-floating row">
                                            <div className="col-md-12">
                                                <div className="position-relative">
                                                    <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
                                                    <label className="label-floating">Kim tomonidan berilgan</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className="form-group form-group-floating row mb-0">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input
                                                        type="text"
                                                        className="form-control daterange-single form-control-outline"
                                                        // id="chiquvchiSana"
                                                        placeholder="Placeholder"
                                                    />
                                                    <label className="label-floating">Berilgan vaqti</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className="form-group form-group-floating row mb-0">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input
                                                        type="text"
                                                        className="form-control daterange-single form-control-outline"
                                                        // id="chiquvchiSana"
                                                        placeholder="Placeholder"
                                                    />
                                                    <label className="label-floating">Amal qilish muddati</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-lg-4">
                                        <div className="form-group form-group-floating row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
                                                    <label className="label-floating">Familiya</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group form-group-floating row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
                                                    <label className="label-floating">Ism</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group form-group-floating row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
                                                    <label className="label-floating">Sharif</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-lg-4">
                                        <div className="form-group row text-left" style={{ zIndex: "1" }}>
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Millati", label: "Millati", isDisabled: true },
                                                        { value: "O'zbek", label: "O'zbek" },
                                                        { value: "Rus", label: "Rus" },
                                                        { value: "Boshqa", label: "Boshqa" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Millati"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group row text-left" style={{ zIndex: "9" }}>
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Jinsi", label: "Jinsi", isDisabled: true },
                                                        { value: "Erkak", label: "Erkak" },
                                                        { value: "Ayol", label: "Ayol" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Jinsi"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group form-group-floating row mb-0">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input
                                                        type="text"
                                                        className="form-control daterange-single form-control-outline"
                                                        // id="chiquvchiSana"
                                                        placeholder="Placeholder"
                                                        data-placeholder="Berilgan sanasi"
                                                    />
                                                    <label className="label-floating">Tug'ilgan sanasi</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="custom-control custom-checkbox mb-2" style={{ zIndex: "0" }}>
                                            <input type="checkbox" className="custom-control-input" id="shaxsiy" onClick={shaxsiyFun} />
                                            <label className="custom-control-label" htmlFor="shaxsiy">Pasport bo'yicha ro'yxatga olingan manzili</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="custom-control custom-checkbox mb-2" style={{ zIndex: "0" }}>
                                            <input type="checkbox" className="custom-control-input" id="mazil" onClick={mazilFun} />
                                            <label className="custom-control-label" htmlFor="mazil">AYNI VAQTDAGI YASHASH MANZILI</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-4" id="passposrtMalumotlari">
                                    {/* <!-- <h1 style="margin: 10px 0 0 0px;font-weight:bold;text-transform: uppercase;">Pasport bo'yicha ro'yxatga olingan manzili</h1> --> */}
                                    <hr />
                                    <div className="col-lg-6" >
                                        <div className="form-group row text-left" style={{ zIndex: "0" }}>
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Viloyat", label: "Viloyat", isDisabled: true },
                                                        { value: "Buxoro", label: "Buxoro" },
                                                        { value: "Navoiy", label: "Navoiy" },
                                                        { value: "Samarqand", label: "Samarqand" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Viloyat"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group row text-left">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Shahar (Tuman)", label: "Shahar (Tuman)", isDisabled: true },
                                                        { value: "Buxoro Shahar", label: "Buxoro Shahar" },
                                                        { value: "Buxoro Tuman", label: "Buxoro Tuman" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Shahar (Tuman)"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group form-group-floating row mb-0">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <textarea className="form-control form-control-outline" rows={5} placeholder="Placeholder" ></textarea>
                                                    <label className="label-floating">Yashash Joyi</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{ marginBottom: "0" }} />
                                <div className="row mt-3" id="mazili">
                                    <div className="col-lg-6">
                                        <div className="form-group row text-left">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Viloyat", label: "Viloyat", isDisabled: true },
                                                        { value: "Buxoro", label: "Buxoro" },
                                                        { value: "Navoiy", label: "Navoiy" },
                                                        { value: "Samarqand", label: "Samarqand" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Viloyat"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group row text-left">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Shahar (Tuman)", label: "Shahar (Tuman)", isDisabled: true },
                                                        { value: "Buxoro Shahar", label: "Buxoro Shahar" },
                                                        { value: "Buxoro Tuman", label: "Buxoro Tuman" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Shahar (Tuman)"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group form-group-floating row mb-0">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <textarea className="form-control form-control-outline" rows={5} placeholder="Placeholder" ></textarea>
                                                    <label className="label-floating">Yashash Joyi</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">
                                    <i className="fas fa-save mr-1" style={{ fontSize: "18px" }}></i>Saqlash
                                </button>
                            </div>
                            {/* <!-- Shatat haqida ma'lumot --> */}
                            <div className="tab-pane fade" id="shatat">
                                <h3 style={{ margin: "10px 0 0 0px", fontWeight: "bold", textTransform: "upperCase" }}>Shtat haqida ma'lumotlari</h3>
                                <div className="row mt-2">
                                    <div className="col-lg-6">
                                        <div className="form-group form-group-floating row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="number" className="form-control form-control-outline" placeholder="Placeholder" />
                                                    <label className="label-floating">Lavozimga tayinlash buruq raqami</label>
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
                                                        // id="chiquvchiSana"
                                                        placeholder="Placeholder"
                                                    />
                                                    <label className="label-floating">Buyruq sanasi</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-lg-6">
                                        <div className="form-group row text-left mb-0">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Ish holati", label: "Ish holati", isDisabled: true },
                                                        { value: "Buxoro Viloyat hokimligi", label: "Buxoro Viloyat hokimligi" },
                                                        { value: "Navoiy", label: "Navoiy" },
                                                        { value: "Samarqand", label: "Samarqand" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Ish holati"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group row text-left mb-0">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Lavozimi", label: "Lavozimi", isDisabled: true },
                                                        { value: "Viloyat Hokimi", label: "Viloyat Hokimi" },
                                                        { value: "Buxoro Tuman", label: "Buxoro Tuman" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Lavozimi"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <h3 style={{ fontWeight: "bold", textTransform: "upperCase" }}>Ish holati</h3>
                                <div className="row mt-2">
                                    <div className="col-lg-12">
                                        <div className="form-group row text-left">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Ish holati", label: "Ish holati", isDisabled: true },
                                                        { value: "Ishda", label: "Ishda" },
                                                        { value: "Ta'tilda", label: "Ta'tilda" },
                                                        { value: "Malaka oshirish", label: "Malaka oshirish" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Ish holati"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group form-group-floating row mb-0">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <textarea className="form-control form-control-outline" rows={5} placeholder="Placeholder" ></textarea>
                                                    <label className="label-floating">Funksiya va vazifalari</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary mt-3">Saqlash</button>
                            </div>
                            {/* <!-- Ta'lim --> */}
                            <div className="tab-pane fade" id="talim">
                                <h3 style={{ fontWeight: "bold", textTransform: "upperCase" }}>Ta'lim</h3>
                                <div className="row mt-2">
                                    <div className="col-lg-6">
                                        <div className="form-group row text-left">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Ma'lumoti", label: "Ma'lumoti", isDisabled: true },
                                                        { value: "O'rta", label: "O'rta" },
                                                        { value: "O'rta Maxsus", label: "O'rta Maxsus" },
                                                        { value: "Tugallanmagan oliy", label: "Tugallanmagan oliy" },
                                                        { value: "Oliy", label: "Oliy" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Ma'lumoti"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group row text-left">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Ilmiy darajasi", label: "Ilmiy darajasi", isDisabled: true },
                                                        { value: "Bakalavr", label: "Bakalavr" },
                                                        { value: "Magistr", label: "Magistr" },
                                                        { value: "Falsafa doktori", label: "Falsafa doktori" },
                                                        { value: "Fan doktori", label: "Fan doktori" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Ilmiy darajasi"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group row text-left">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Ma'lumoti bo'yicha mutaxasisligi", label: "Ma'lumoti bo'yicha mutaxasisligi", isDisabled: true },
                                                        { value: "Yetakchi mutaxasis", label: "Yetakchi mutaxasis" },
                                                        { value: "1-tofidagi mutaxasis", label: "1-tofidagi mutaxasis" },
                                                        { value: "Falsafa doktori", label: "Falsafa doktori" },
                                                        { value: "Fan doktori", label: "Fan doktori" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Ma'lumoti bo'yicha mutaxasisligi"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group row text-left">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Chet tillari", label: "Chet tillari", isDisabled: true },
                                                        { value: "Rus", label: "Rus" },
                                                        { value: "Ingliz", label: "Ingliz" },
                                                        { value: "Ispan", label: "Ispan" },
                                                        { value: "Turk", label: "Turk" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Chet tillari"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group form-group-floating row mb-0">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="text" className="form-control form-control-outline" defaultValue="yo'q" placeholder="Placeholder" />
                                                    <label className="label-floating">Ilmiy unvoni</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <h3 style={{ fontWeight: "bold", textTransform: "upperCase" }}>Ta'lim Jadvali</h3>
                                <button className="btn btn-primary mt-2" data-toggle="modal" data-target="#modal_theme_primary"><i className="icon-plus2"></i> Yangi qo'shish</button>
                                {/* <!-- modal yangi talim qo'shish --> */}
                                <div id="modal_theme_primary" className="modal fade" tabIndex="-1">
                                    <div className="modal-dialog modal-xl">
                                        <div className="modal-content">
                                            <div className="modal-header bg-primary text-white">
                                                <h6 className="modal-title">Foydalanuvchi Qo'shish</h6>
                                                <button type="button" className="close closeTalimUzgartirish"
                                                    data-dismiss="modal">&times;</button>
                                            </div>

                                            <div className="modal-body">
                                                <form className="ml-1 formTalimQushish" onSubmit={talimQushish}>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group row text-left">
                                                                <div className="col-lg-12">
                                                                    <Select
                                                                        // defaultValue={options[1]}
                                                                        options={[
                                                                            { value: "Ta'lim turi", label: "Ta'lim turi", isDisabled: true },
                                                                            { value: "Kunduzgi", label: "Kunduzgi" },
                                                                            { value: "Sirtqi", label: "Sirtqi" },
                                                                            { value: "Kechki", label: "Kechki" },
                                                                        ]}
                                                                        // onChange={logChange12}
                                                                        placeholder="Ta'lim turi"
                                                                        className="talimTuri"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group form-group-floating row mb-0">
                                                                <div className="col-lg-12">
                                                                    <div className="position-relative">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control daterange-single form-control-outline tugatganYili"
                                                                            // id="chiquvchiSana"
                                                                            placeholder="Placeholder"
                                                                        />
                                                                        <label className="label-floating">Tugatkan yili</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group form-group-floating row">
                                                                <div className="col-lg-12">
                                                                    <div className="position-relative">
                                                                        <input type="text" className="form-control form-control-outline diplomRaqami" placeholder="Placeholder" />
                                                                        <label className="label-floating">Diplom raqami</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group row text-left">
                                                                <div className="col-lg-12">
                                                                    <Select
                                                                        // defaultValue={options[1]}
                                                                        options={[
                                                                            { value: "Ta'lim muassasi", label: "Ta'lim muassasi", isDisabled: true },
                                                                            { value: "Buxoro Davlat Unversiteti", label: "Buxoro Davlat Unversiteti" },
                                                                            { value: "Sirtqi", label: "Sirtqi" },
                                                                            { value: "Kechki", label: "Kechki" },
                                                                        ]}
                                                                        // onChange={logChange12}
                                                                        placeholder="Ta'lim muassasi"
                                                                        className="talimMuassasi"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group row text-left">
                                                                <div className="col-lg-12">
                                                                    <Select
                                                                        // defaultValue={options[1]}
                                                                        options={[
                                                                            { value: "Daraja", label: "Daraja", isDisabled: true },
                                                                            { value: "Bakalavr", label: "Bakalavr" },
                                                                            { value: "Magistr", label: "Magistr" },
                                                                            { value: "Falsafa doktori", label: "Falsafa doktori" },
                                                                            { value: "an doktori", label: "an doktori" },
                                                                        ]}
                                                                        // onChange={logChange12}
                                                                        placeholder="Daraja"
                                                                        className="daraja"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <span className="errorTalim" style={{ display: "block", color: "crimson" }}></span>
                                                            <button type="submit" className="btn btn-primary">Qo'shish</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-link"
                                                    data-dismiss="modal">Yopish</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end modal -->

                                <!-- table --> */}
                                <table className="table mt-2 table-bordered datatable-select-single table-striped table-hover Tab" >
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th>Turi</th>
                                            <th>Tugatkan yili</th>
                                            <th>Ta'lim muassasi</th>
                                            <th>Daraja</th>
                                            <th>Xarakatlar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((dat, index) => (
                                            <>
                                                <tr className="text-center">
                                                    <td>{dat.turi}</td>
                                                    <td>{dat.tugatganYili}</td>
                                                    <td>{dat.talimMuassasi}</td>
                                                    <td>{dat.daraja}</td>
                                                    <td className="d-flex justify-content-center">
                                                        <a className="btn btn-dark mr-1" data-popup="tooltip" title="O'zgartirish" data-toggle="modal" data-target="#yangilash" data-animation="false"><i className="icon-pencil5"></i></a>
                                                        <a className="btn btn-dark ml-1" data-popup="tooltip" title="O'chirish" data-animation="false" data-toggle="modal" data-target="#modal_theme_primaryDelete"><i className="icon-trash"></i></a>
                                                    </td>
                                                </tr>
                                                {/* delete */}
                                                <div id="modal_theme_primaryDelete" className="modal fade show" tabIndex="-1" aria-modal="true" role="dialog" style={{ display: "none" }}>
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header bg-primary text-white">
                                                                <h6 className="modal-title">O'chirish oynasi</h6>
                                                                <button type="button" className="close closeYopish" data-dismiss="modal">×</button>
                                                            </div>
                                                            <div className="modal-body text-center">
                                                                <h3 style={{ textTransform: "upperCase", fontWeight: "bold" }} className="text-danger">Ogoh bo'ling!</h3>
                                                                <h5>Ushbu ma'lumotni o'chirmoqchimisiz?</h5>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-link" data-dismiss="modal">Bekor qilish</button>
                                                                <button type="button" className="btn btn-primary" onClick={() => Uchirish(index)}>O'chirish</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* update */}
                                                <div className="icon d-flex justify-content-center align-items-center ">
                                                    <div id="yangilash" className="modal fade" tabIndex="-1">
                                                        <div className="modal-dialog modal-xl">
                                                            <div className="modal-content">
                                                                <div className="modal-header bg-primary text-white">
                                                                    <h6 className="modal-title">O'zgartirish</h6>
                                                                    <button type="button" className="close close1TalimUzgartirish" data-dismiss="modal">&times;</button>
                                                                </div>

                                                                <div className="modal-body">
                                                                    <form >
                                                                        <div className="row">
                                                                            <div className="col-lg-12">
                                                                                <div className="form-group row text-left">
                                                                                    <div className="col-lg-12">
                                                                                        <Select
                                                                                            defaultValue={{ value: dat.turi, label: dat.turi }}
                                                                                            options={[
                                                                                                { value: "Ta'lim turi", label: "Ta'lim turi", isDisabled: true },
                                                                                                { value: "Kunduzgi", label: "Kunduzgi" },
                                                                                                { value: "Sirtqi", label: "Sirtqi" },
                                                                                                { value: "Kechki", label: "Kechki" },
                                                                                            ]}
                                                                                            // onChange={logChange12}
                                                                                            placeholder="Ta'lim turi"
                                                                                            className="talimTuriUzgartirish"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                                <div className="form-group form-group-floating row mb-0">
                                                                                    <div className="col-lg-12">
                                                                                        <div className="position-relative">
                                                                                            <input
                                                                                                type="text"
                                                                                                className="form-control daterange-single form-control-outline tugatganYiliUzgartirish"
                                                                                                // id="chiquvchiSana"
                                                                                                placeholder="Placeholder"
                                                                                                defaultValue={dat.tugatganYili}
                                                                                            />
                                                                                            <label className="label-floating">Tugatkan yili</label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                                <div className="form-group form-group-floating row">
                                                                                    <div className="col-lg-12">
                                                                                        <div className="position-relative">
                                                                                            <input
                                                                                                type="text"
                                                                                                className="form-control form-control-outline diplomRaqamiUzgartirish"
                                                                                                placeholder="Placeholder"
                                                                                                defaultValue={dat.diplomRaqami}
                                                                                            />
                                                                                            <label className="label-floating">Diplom raqami</label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                                <div className="form-group row text-left">
                                                                                    <div className="col-lg-12">
                                                                                        <Select
                                                                                            defaultValue={{ value: dat.talimMuassasi, label: dat.talimMuassasi }}
                                                                                            options={[
                                                                                                { value: "Ta'lim muassasi", label: "Ta'lim muassasi", isDisabled: true },
                                                                                                { value: "Buxoro Davlat Unversiteti", label: "Buxoro Davlat Unversiteti" },
                                                                                                { value: "Sirtqi", label: "Sirtqi" },
                                                                                                { value: "Kechki", label: "Kechki" },
                                                                                            ]}
                                                                                            // onChange={logChange12}
                                                                                            placeholder="Ta'lim muassasi"
                                                                                            className="talimMuassasiUzgartirish"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                                <div className="form-group row text-left">
                                                                                    <div className="col-lg-12">
                                                                                        <Select
                                                                                            defaultValue={{ value: dat.daraja, label: dat.daraja }}
                                                                                            options={[
                                                                                                { value: "Daraja", label: "Daraja", isDisabled: true },
                                                                                                { value: "Bakalavr", label: "Bakalavr" },
                                                                                                { value: "Magistr", label: "Magistr" },
                                                                                                { value: "Falsafa doktori", label: "Falsafa doktori" },
                                                                                                { value: "an doktori", label: "an doktori" },
                                                                                            ]}
                                                                                            // onChange={logChange12}
                                                                                            placeholder="Daraja"
                                                                                            className="darajaUzgartirish"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-12">
                                                                                <span className="errorTalimUzgartirish" style={{ display: "block", color: "crimson" }}></span>
                                                                                <button type="button" onClick={() => UzgartirishTalim(index)} className="btn btn-primary">O'zgartirish</button>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* delete */}
                                                    <div id="modal_theme_primaryDelete" className="modal fade show" tabIndex="-1" aria-modal="true" role="dialog" style={{ display: "none" }}>
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header bg-primary text-white">
                                                                    <h6 className="modal-title">O'chirish oynasi</h6>
                                                                    <button type="button" className="close" data-dismiss="modal">×</button>
                                                                </div>
                                                                <div className="modal-body ">
                                                                    <h3 style={{ textTransform: "upperCase", fontWeight: "bold" }} className="text-danger">Ogoh bo'ling!</h3>
                                                                    <h5>Ushbu ma'lumotni o'chirmoqchimisiz?</h5>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-link bekorQilish" data-dismiss="modal">Bekor qilish</button>
                                                                    <button type="button" className="btn btn-primary" onClick={() => Uchirish(index)}>O'chirish</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* <!-- MEhnat Faoliyati --> */}
                            <div className="tab-pane fade" id="mehnat">
                                <h3 style={{ fontWeight: "bold", textTransform: "upperCase" }}>Mehnat faoliyati</h3>
                                <div className="row mt-2">
                                    <div className="col-lg-4">
                                        <div className="form-group form-group-floating row mb-0">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="text"
                                                        className="form-control daterange-single form-control-outline kirganVaqtMehnat"
                                                        // id="chiquvchiSana"
                                                        placeholder="Placeholder"
                                                    />
                                                    <label className="label-floating">Ishga kirgan vaqti</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group form-group-floating row mb-0">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="text"
                                                        className="form-control daterange-single form-control-outline tugashVaqtMehnat"
                                                        // id="chiquvchiSana"
                                                        placeholder="Placeholder"
                                                    />
                                                    <label className="label-floating">Tugash vaqti</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group form-group-floating row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-outline lavozimiMehnat"
                                                        placeholder="Placeholder"
                                                    />
                                                    <label className="label-floating">Ish joyi va lavozimi </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="errorMehnatQushish text-danger d-block"></span>
                                <button className="btn btn-primary" onClick={mehnatQushish}>Qo'shish</button>
                                <hr />
                                <h3 style={{ fontWeight: "bold", textTransform: "upperCase" }}>Mehnat faoliyati jadvali</h3>
                                <table className="table mt-2 table-bordered datatable-select-single table-striped table-hover Tab" style={{ marginBottom: "50px" }} >
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th style={{ width: "5%" }}>№</th>
                                            <th style={{ width: "20%" }}>Boshlanishi</th>
                                            <th style={{ width: "20%" }}>Tugashi</th>
                                            <td style={{ width: "40%" }}>Ish joyi va lavozimi</td>
                                            <td style={{ width: "15%" }}>Harakatlar</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mehnat.map((dat, index) => (
                                            <>
                                                <tr className="text-center">
                                                    <td>{dat.id}</td>
                                                    <td>{dat.boshlanishi}</td>
                                                    <td>{dat.tugashi}</td>
                                                    <td style={{ wordWrap: "normal" }}>{dat.lavozimi}</td>
                                                    <td className="d-flex justify-content-center">
                                                        <a className="btn btn-dark mr-1" data-popup="tooltip" onClick={() => setIndexUrniMehnatUzgartirish(index)} title="O'zgartirish" data-toggle="modal" data-target="#yangilashMehnat" data-animation="false"><i className="icon-pencil5"></i></a>
                                                        <a className="btn btn-dark ml-1" data-popup="tooltip" onClick={() => setIndexUrniMehnatUchirish(index)} title="O'chirish" data-toggle="modal" data-target="#modal_theme_primaryDeleteMehnat" data-animation="false"><i className="icon-trash"></i></a>
                                                    </td>
                                                </tr>
                                                {/* delete */}
                                                <div id="modal_theme_primaryDeleteMehnat" className="modal fade show" tabIndex="-1" style={{ display: "none" }} aria-modal="true" role="dialog">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header bg-primary text-white">
                                                                <h6 className="modal-title">O'chirish oynasi</h6>
                                                                <button type="button" className="close closeMehnat" data-dismiss="modal">×</button>
                                                            </div>
                                                            <div className="modal-body text-center">
                                                                <h3 style={{ textTransform: "upperCase", fontWeight: "bold" }} className="text-danger">Ogoh bo'ling!</h3>
                                                                <h5>Ushbu ma'lumotni o'chirmoqchimisiz?</h5>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-link" data-dismiss="modal">Bekor qilish</button>
                                                                <button type="button" className="btn btn-primary" onClick={() => UchirishMehnat(indexUrniMehnatUchirish)}>O'chirish</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* update */}
                                                {/* <div className="icon d-flex justify-content-center align-items-center ">
                                                </div> */}
                                                <div id="yangilashMehnat" className="modal fade" tabIndex="-1">
                                                    <div className="modal-dialog modal-xl">
                                                        <div className="modal-content">
                                                            <div className="modal-header bg-primary text-white">
                                                                <h6 className="modal-title">O'zgartirish</h6>
                                                                <button type="button" className="close close1MehnatUzgartirishYopish" data-dismiss="modal">&times;</button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <form>
                                                                    <div className="row mt-2">
                                                                        <div className="col-lg-12">
                                                                            <div className="form-group form-group-floating row ">
                                                                                <div className="col-lg-12">
                                                                                    <div className="position-relative">
                                                                                        <input type="text"
                                                                                            className="form-control daterange-single form-control-outline kirganVaqtMehnatUzgartirish"
                                                                                            placeholder="Placeholder"
                                                                                            defaultValue={mehnat[indexUrniMehnatUzgartirish]?.boshlanishi}
                                                                                        />
                                                                                        <label className="label-floating">Ishga kirgan vaqti</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-12">
                                                                            <div className="form-group form-group-floating row">
                                                                                <div className="col-lg-12">
                                                                                    <div className="position-relative">
                                                                                        <input type="text"
                                                                                            className="form-control daterange-single form-control-outline tugashVaqtMehnatUzgartirish"
                                                                                            placeholder="Placeholder"
                                                                                            defaultValue={mehnat[indexUrniMehnatUzgartirish]?.tugashi}
                                                                                        />
                                                                                        <label className="label-floating">Tugash vaqti</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-12">
                                                                            <div className="form-group form-group-floating row">
                                                                                <div className="col-lg-12">
                                                                                    <div className="position-relative">
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control form-control-outline lavozimiMehnatUzgartirish"
                                                                                            placeholder="Placeholder"
                                                                                            defaultValue={mehnat[indexUrniMehnatUzgartirish]?.lavozimi}
                                                                                        />
                                                                                        <label className="label-floating">Ish joyi va lavozimi </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-12">
                                                                            <span className="d-block uzgartirishMehnatError"></span>
                                                                            <button type="button" className="btn btn-primary" onClick={() => UzgartirishMehnat(indexUrniMehnatUzgartirish)} >O'zgartirish</button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* <!-- Qarindoshlari --> */}
                            <div className="tab-pane fade" id="qarindosh">
                                <h1 style={{ fontWeight: "bold", textTransform: "upperCase" }}>Qarindoshlar</h1>
                                <div className="row mt-2">
                                    <div className="col-lg-12">
                                        <div className="form-group row text-left mt-0">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Qarindoshlari", label: "Qarindoshlari", isDisabled: true },
                                                        { value: "Otasi", label: "Otasi" },
                                                        { value: "Onasi", label: "Onasi" },
                                                        { value: "Aka", label: "Aka" },
                                                        { value: "Opa", label: "Opa" },
                                                        { value: "Uka", label: "Uka" },
                                                        { value: "O'gli", label: "O'gli" },
                                                        { value: "Qizi", label: "Qizi" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Qarindoshlari"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group form-group-floating row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
                                                    <label className="label-floating">Familiyasi</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group form-group-floating  row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
                                                    <label className="label-floating">Ismi</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group form-group-floating  row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
                                                    <label className="label-floating">Sharifi</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group form-group-floating row mb-0">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input
                                                        type="text"
                                                        className="form-control daterange-single form-control-outline tugatganYiliUzgartirish"
                                                        placeholder="Placeholder"
                                                    // defaultValue={dat.tugatganYili}
                                                    />
                                                    <label className="label-floating">Tugatkan yili</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-4">
                                        <div className="form-group form-group-floating  row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="date" className="form-control form-control-outline" placeholder="Placeholder" />
                                                    <label className="label-floating">Tug'ilgan kun</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="col-lg-4">
                                        <div className="form-group row text-left">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Viloyat", label: "Viloyat", isDisabled: true },
                                                        { value: "Buxoro", label: "Buxoro" },
                                                        { value: "Navoiy", label: "Navoiy" },
                                                        { value: "Toshkent", label: "Toshkent" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Viloyat"
                                                />
                                                {/* <select data-placeholder="Viloyat" className="form-control select-search form-control-outline select" >
                                                    <option></option>
                                                    <optgroup label="Viloyat">
                                                        <option value="AZ">Buxoro</option>
                                                        <option value="CO">Navoiy</option>
                                                        <option value="CO">Toshkent</option>
                                                    </optgroup>
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group row text-left">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Shahar (Tuman)", label: "Shahar (Tuman)", isDisabled: true },
                                                        { value: "Buxoro", label: "Buxoro" },
                                                        { value: "Navoiy", label: "Navoiy" },
                                                        { value: "Toshkent", label: "Toshkent" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Shahar (Tuman)"
                                                />
                                                {/* <select data-placeholder="Shahar (Tuman)" className="form-control select-search  form-control-outline select" >
                                                    <option></option>
                                                    <optgroup label="Shahar (Tuman)">
                                                        <option value="AZ">Buxoro</option>
                                                        <option value="CO">Navoiy</option>
                                                        <option value="CO">Toshkent</option>
                                                    </optgroup>
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="custom-control custom-checkbox mb-2">
                                            <input type="checkbox" className="custom-control-input" id="myInp" onClick={myfun} />
                                            <label className="custom-control-label" htmlFor="myInp">Vafot Etgan</label>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="row" id="next">
                                    <div className="col-lg-6">
                                        <div className="form-group form-group-floating  row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
                                                    <label className="label-floating">Ish joyi</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group form-group-floating  row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
                                                    <label className="label-floating">Lavozimi</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group form-group-floating  row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
                                                    <label className="label-floating">Yashash joyi</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group row text-left">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Viloyat", label: "Viloyat", isDisabled: true },
                                                        { value: "Buxoro", label: "Buxoro" },
                                                        { value: "Navoiy", label: "Navoiy" },
                                                        { value: "Toshkent", label: "Toshkent" },
                                                        { value: "Toshkent", label: "Toshkent" },
                                                        { value: "Toshkent", label: "Toshkent" },
                                                        { value: "Toshkent", label: "Toshkent" },
                                                        { value: "Toshkent", label: "Toshkent" },
                                                        { value: "Toshkent", label: "Toshkent" },
                                                        { value: "Toshkent", label: "Toshkent" },
                                                        { value: "Toshkent", label: "Toshkent" },
                                                        { value: "Toshkent", label: "Toshkent" },
                                                        { value: "Toshkent", label: "Toshkent" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Viloyat"
                                                />
                                                {/* <select data-placeholder="Viloyat" className="form-control select-search  form-control-outline select">
                                                    <option></option>
                                                    <optgroup label="Viloyat">
                                                        <option value="AZ">Buxoro</option>
                                                        <option value="CO">Navoiy</option>
                                                        <option value="CO">Toshkent</option>
                                                    </optgroup>
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group row text-left">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Shahar (Tuman)", label: "Shahar (Tuman)", isDisabled: true },
                                                        { value: "Buxoro", label: "Buxoro" },
                                                        { value: "Navoiy", label: "Navoiy" },
                                                        { value: "Toshkent", label: "Toshkent" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Shahar (Tuman)"
                                                />
                                                {/* <select data-placeholder="Shahar (Tuman)" className="form-control select-search  form-control-outline select">
                                                    <option></option>
                                                    <optgroup label="Shahar (Tuman)">
                                                        <option value="AZ">Buxoro</option>
                                                        <option value="CO">Navoiy</option>
                                                        <option value="CO">Toshkent</option>
                                                    </optgroup>
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary">Qo'shish</button>
                                <hr />
                                <h1 style={{ margin: "10px 0 0 0px", fontWeight: "bold", textTransform: "upperCase" }}>Qarindoshlar Jadvali</h1>
                                <table className="table mt-2 table-bordered datatable-select-single table-striped table-hover Tab" >
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th style={{ borderRadius: "10px 0 0 0" }}>№</th>
                                            <th>Qarindoshlik</th>
                                            <th>F.I.SH</th>
                                            <td>Tug'ilgan joyi va vaqti</td>
                                            <td>Ish joyi va lavozimi</td>
                                            <td>Yashash Manzili</td>
                                            <td>Harakatlar</td>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {qarindosh.map((dat, index) => (
                                            <>
                                                <tr className="text-center">
                                                    <td>{dat.id}</td>
                                                    <td>{dat.qarindoshlik}</td>
                                                    <td>{dat.FISH}</td>
                                                    <td>{dat.tugilganJoyi}</td>
                                                    <td>{dat.ishJoyi}</td>
                                                    <td>{dat.manzil}</td>
                                                    <td className="d-flex justify-content-center">
                                                        <a className="btn btn-dark mr-1" data-popup="tooltip" title="O'zgartirish" data-animation="false"><i className="icon-pencil5"></i></a>
                                                        <a className="btn btn-dark ml-1" data-popup="tooltip" title="O'chirish" data-toggle="modal" data-target="#modal_theme_primaryDeleteQarindosh" data-animation="false"><i className="icon-trash"></i></a>
                                                    </td>
                                                </tr>
                                                {/* delete */}
                                                <div id="modal_theme_primaryDeleteQarindosh" className="modal fade show" tabIndex="-1" style={{ display: "none" }} aria-modal="true" role="dialog">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header bg-primary text-white">
                                                                <h6 className="modal-title">O'chirish oynasi</h6>
                                                                <button type="button" className="close closeQarindosh" data-dismiss="modal">×</button>
                                                            </div>
                                                            <div className="modal-body text-center">
                                                                <h3 style={{ textTransform: "upperCase", fontWeight: "bold" }} className="text-danger">Ogoh bo'ling!</h3>
                                                                <h5>Ushbu ma'lumotni o'chirmoqchimisiz?</h5>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-link" data-dismiss="modal">Bekor qilish</button>
                                                                <button type="button" className="btn btn-primary" onClick={() => UchirishQarindosh(index)}>O'chirish</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* <!-- Boshqalar --> */}
                            <div className="tab-pane fade" id="boshqalar">
                                <h1 style={{ margin: "10px 0 0 0px", fontWeight: "bold", textTransform: "upperCase" }}>Boshqalar</h1>
                                <div className="row mt-4">
                                    <div className="col-lg-3">
                                        <div className="form-group row text-left">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Partiyaviyligi", label: "Partiyaviyligi", isDisabled: true },
                                                        { value: "Xalq demokratik partiyasi", label: "Xalq demokratik partiyasi" },
                                                        { value: "Liberal demoktartik partiyasi", label: "Liberal demoktartik partiyasi" },
                                                        { value: "Adolat sotsial partiyasi", label: "Adolat sotsial partiyasi" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Partiyaviyligi"
                                                />
                                                {/* <select data-placeholder="Partiyaviyligi" className="form-control select-search  form-control-outline select">
                                                    <option></option>
                                                    <optgroup label="Partiyaviyligi">
                                                        <option value="AZ">Xalq demokratik partiyasi</option>
                                                        <option value="CO">Liberal demoktartik partiyasis</option>
                                                        <option value="CO">Adolat sotsial partiyasi</option>
                                                    </optgroup>
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group row text-left">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Davlat Mukofotlari", label: "Davlat Mukofotlari", isDisabled: true },
                                                        { value: "Xalq demokratik partiyasi", label: "Xalq demokratik partiyasi" },
                                                        { value: "Liberal demoktartik partiyasi", label: "Liberal demoktartik partiyasi" },
                                                        { value: "Adolat sotsial partiyasi", label: "Adolat sotsial partiyasi" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Davlat Mukofotlari"
                                                />
                                                {/* <select data-placeholder="Davlat Mukofotlari" className="form-control select-search  form-control-outline select" >
                                                    <option></option>
                                                    <optgroup label="Davlat Mukofotlari">
                                                        <option value="AZ">Xalq demokratik partiyasi</option>
                                                        <option value="CO">Liberal demoktartik partiyasis</option>
                                                        <option value="CO">Adolat sotsial partiyasi</option>
                                                    </optgroup>
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group row text-left">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Xarbiy unvoni", label: "Xarbiy unvoni", isDisabled: true },
                                                        { value: "Xalq demokratik partiyasi", label: "Xalq demokratik partiyasi" },
                                                        { value: "Liberal demoktartik partiyasi", label: "Liberal demoktartik partiyasi" },
                                                        { value: "Adolat sotsial partiyasi", label: "Adolat sotsial partiyasi" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Xarbiy unvoni"
                                                />
                                                {/* <select data-placeholder="Xarbiy unvoni" className="form-control select-search  form-control-outline select" >
                                                    <option></option>
                                                    <optgroup label="Xarbiy unvoni">
                                                        <option value="AZ">Xalq demokratik partiyasi</option>
                                                        <option value="CO">Liberal demoktartik partiyasis</option>
                                                        <option value="CO">Adolat sotsial partiyasi</option>
                                                    </optgroup>
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group row text-left">
                                            <div className="col-lg-12">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Deputatligi", label: "Deputatligi", isDisabled: true },
                                                        { value: "Xalq demokratik partiyasi", label: "Xalq demokratik partiyasi" },
                                                        { value: "Liberal demoktartik partiyasi", label: "Liberal demoktartik partiyasi" },
                                                        { value: "Adolat sotsial partiyasi", label: "Adolat sotsial partiyasi" },
                                                        { value: "Adolat sotsial partiyasi", label: "Adolat sotsial partiyasi" },
                                                        { value: "Adolat sotsial partiyasi", label: "Adolat sotsial partiyasi" },
                                                        { value: "Adolat sotsial partiyasi", label: "Adolat sotsial partiyasi" },
                                                        { value: "Adolat sotsial partiyasi", label: "Adolat sotsial partiyasi" },
                                                        { value: "Adolat sotsial partiyasi", label: "Adolat sotsial partiyasi" },
                                                        { value: "Adolat sotsial partiyasi", label: "Adolat sotsial partiyasi" },
                                                        { value: "Adolat sotsial partiyasi", label: "Adolat sotsial partiyasi" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Deputatligi"
                                                />
                                                {/* <select data-placeholder="Deputatligi" className="form-control select-search  form-control-outline select" >
                                                    <option></option>
                                                    <optgroup label="Deputatligi">
                                                        <option value="AZ">Xalq demokratik partiyasi</option>
                                                        <option value="CO">Liberal demoktartik partiyasis</option>
                                                        <option value="CO">Adolat sotsial partiyasi</option>
                                                    </optgroup>
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12" style={{ position: "relative", zIndex: "0" }}>
                                        <div className="form-group form-group-floating row mb-0" style={{ zIndex: "0" }}>
                                            <div className="col-lg-12">
                                                <label className="custom-file" >
                                                    <input type="file" className="custom-file-input" />
                                                    <span className="custom-file-label text-muted" style={{}}>Logotip</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary mt-3">Saqlash</button>
                            </div>
                            {/* <!-- Aloqa --> */}
                            <div className="tab-pane fade" id="aloqa">
                                <h1 style={{ margin: "10px 0 0 0px", fontWeight: "bold", textTransform: "upperCase" }}>Aloqa</h1>
                                <div className="row mt-4">
                                    <div className="col-lg-4">
                                        <div className="form-group form-group-floating  row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="email" className="form-control form-control-outline" placeholder="Placeholder" />
                                                    <label className="label-floating">E-pochta</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group form-group-floating  row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="phone" className="form-control form-control-outline" placeholder="Placeholder" />
                                                    <label className="label-floating">Mobil raqami</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group form-group-floating  row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="phone" className="form-control form-control-outline" placeholder="Placeholder" />
                                                    <label className="label-floating">Uy raqami</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group form-group-floating  row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="phone" className="form-control form-control-outline" placeholder="Placeholder" />
                                                    <label className="label-floating">Ish raqami</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group form-group-floating  row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
                                                    <label className="label-floating">Telegram ID si</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary">Saqlash</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}