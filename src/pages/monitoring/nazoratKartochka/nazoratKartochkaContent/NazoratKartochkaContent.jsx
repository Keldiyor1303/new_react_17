import React from "react";
import NavbarContentMonitoring from "../../navbarContentMonitoring/NavbarContentMonitoring";
import Select from 'react-select'

export default function NazoratKartochkaContent() {

    const exportF = (elem) => {
        var table = document.getElementById("myTable");
        var html = table.outerHTML;
        var url = 'data:application/vnd.ms-excel,' + escape(html); // Set your html table into url 
        elem.setAttribute("href", url);
        elem.setAttribute("download", "export.xls"); // Choose the file name
        return false;
    }

    return (
        <div className="content mb-5">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Nazorat Kartochkasi</h3>
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
                                                        { value: "Nazorat kartochkasi", label: "Nazorat kartochkasi", isDisabled: true },
                                                        { value: "Cheese", label: "Cheese" },
                                                        { value: "Tomatoes", label: "Tomatoes" },
                                                        { value: "Mozzarella", label: "Mozzarella" },
                                                        { value: "Mushrooms", label: "Mushrooms" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Nazorat kartochkasi"
                                                />
                                                {/* <select className="form-control multiselect" multiple="multiple">
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
                                                    <input type="text" className="form-control  daterange-single" />
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
                                                <span className="dropdown-item" onClick={(e) => exportF(e)}><i className="icon-menu7"></i> EXCEL</span>
                                                <span className="dropdown-item"><i className="icon-screen-full"></i> PDF</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <table id="myTable" className="table-bordered table-striped table-hover Tab" >
                                    <thead>
                                        <tr className="bg-dark text-white text-center tableHeader w-100">
                                            <th style={{ width: "5%" }}>№</th>
                                            <th style={{ width: "15%" }}>
                                                Ўзбекистон Республикаси Қонунлари, Президент фармонлари, қарорлари, фармойишлари ва Ҳукумат қарорларининг номи
                                            </th>
                                            <th style={{ width: "5%" }}>
                                                Ҳужжат тартиб рақами ва қабул қилинган санаси
                                            </th>
                                            <th style={{ width: "5%" }}>
                                                Ҳужжатнинг ҳокимлик девонхонасига кириш санаси, қайд этиш рақами
                                            </th>
                                            <th style={{ width: "5%" }}>
                                                Ҳоким резолюция қўйган сана
                                            </th>
                                            <th style={{ width: "20%" }}>Резолюция мазмуни</th>
                                            <th style={{ width: "5%" }}>Қабул қилинган қарор (буйруқ, фармойиш), тадбирлар №, санаси</th>
                                            <th style={{ width: "5%" }}>
                                                Қабул қилинган қарор (буйруқ, фармойиш) назорат режаси (график, ҳаракат дастури ва б), тасдиқланган санаси
                                            </th>
                                            <th style={{ width: "5%" }}>
                                                Ўз қарорлари кимларга етказилган (тарқатма реестри бўйича рўйхат), реестр№, санаси
                                            </th>
                                            <th style={{ width: "20%" }}>
                                                Ижро ҳолати, топшириқларнинг ижроси қандай амалга оширилган, мақсадли кўрсаткичларнинг бажарилиши
                                            </th>
                                            <th style={{ width: "10%" }}>
                                                Ижро ҳолати қачон, қаерда муҳокама этилди, кимга нисбатан қандай чоралар кўрилган.
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ textAlign: "center" }}>
                                            <td style={{ width: "5%" }}>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                        </tr>
                                        <tr className="text-center">
                                            <td colspan="11" className="text-color">1a Назорат карточкаси</td>
                                        </tr>
                                        <tr style={{ textAlign: "center" }} className="tableHeader">
                                            <td>1</td>
                                            <td >Вилоят ҳокимининг чора-тадбирлари</td>
                                            <td>№09-8/140
                                                31.10.2021</td>
                                            <td>№14
                                                31.10.2021</td>
                                            <td>31.10.2021</td>
                                            <td style={{ textAlign: "justify" }}>
                                                {/* <!-- vaqtinchalik ko'rinmaydi -->

                                                    <!-- <p><span class="color-black">Nazoratda:</span> B.Zaripov</p>
                                                    <hr> --> */}
                                                <p><span className="color-black">Ijrochilar:</span> <ins>N.Xolmurodov, Tuman va Shahar hokimliklari</ins></p>

                                                <hr />
                                                <p >
                                                    <span className="color-black" style={{ display: "none" }}>Umumlashtiruvchi: ,yf</span> 1.O'zbekiston Respublikasi Prezidenti Adminstratsiyasi raxbaring ko'rsatmasi (16.11.2021-y №02-PA 1-18194)
                                                    rahbarlik ijro uchun qabul qilinsin
                                                </p>
                                            </td>
                                            <td>
                                                2021-yil 14-iyuldagi <br /> 7/3909-sonli chora-tadbirlar rejasi
                                            </td>
                                            <td>
                                                Chora-tadbirlar
                                                2021.14.07
                                            </td>
                                            <td>
                                                E-XAT 2021.14.07
                                            </td>
                                            <td style={{ textAlign: "justify" }}>
                                                Oʼzbekiston Respublikasining “Vijdon erkinligi va diniy tashkilotlar toʼgʼrisida”gi 2021 yil 5 iyuldagi OʼRQ-699-sonli Qonuni mazmun-mohiyatini aholi va korxona tashkilotlar oʼrtasida tushuntirish ishlarini olib borish boʼyicha chora-tadbirlar ishlab chiqilib, tegishli masʼul idoralar va mutaxassislar tomonidan tushuntirish targʼibot ishlari olib borildi.
                                            </td>
                                            <td>
                                                2021 йил 26 июль куни вилоят ҳокимининг ўринбосари Э.Мажидов раҳбарлигида ўтказилган йиғилишда муҳокама қилинди.
                                            </td>
                                        </tr>
                                        <tr style={{ textAlign: "center" }} className="tableHeader">
                                            <td>1</td>
                                            <td >Вилоят ҳокимининг чора-тадбирлари</td>
                                            <td>№09-8/140
                                                31.10.2021</td>
                                            <td>№14
                                                31.10.2021</td>
                                            <td>31.10.2021</td>
                                            <td style={{ textAlign: "justify" }}>
                                                {/* <!-- vaqtinchalik ko'rinmaydi -->

                                                            <!-- <p><span class="color-black">Nazoratda:</span> B.Zaripov</p>
                                                            <hr> --> */}
                                                <p><span className="color-black">Ijrochilar:</span> <ins>N.Xolmurodov, Tuman va Shahar hokimliklari</ins></p>

                                                <hr />
                                                <p ><span className="color-black" style={{ display: "none" }}>Umumlashtiruvchi: ,yf</span> 1.O'zbekiston Respublikasi Prezidenti Adminstratsiyasi raxbaring ko'rsatmasi (16.11.2021-y №02-PA 1-18194)
                                                    rahbarlik ijro uchun qabul qilinsin</p>
                                            </td>
                                            <td>
                                                2021-yil 14-iyuldagi <br /> 7/3909-sonli chora-tadbirlar rejasi
                                            </td>
                                            <td>
                                                Chora-tadbirlar
                                                2021.14.07
                                            </td>
                                            <td>
                                                E-XAT 2021.14.07
                                            </td>
                                            <td style={{ textAlign: "justify" }}>
                                                Oʼzbekiston Respublikasining “Vijdon erkinligi va diniy tashkilotlar toʼgʼrisida”gi 2021 yil 5 iyuldagi OʼRQ-699-sonli Qonuni mazmun-mohiyatini aholi va korxona tashkilotlar oʼrtasida tushuntirish ishlarini olib borish boʼyicha chora-tadbirlar ishlab chiqilib, tegishli masʼul idoralar va mutaxassislar tomonidan tushuntirish targʼibot ishlari olib borildi.
                                            </td>
                                            <td>
                                                2021 йил 26 июль куни вилоят ҳокимининг ўринбосари Э.Мажидов раҳбарлигида ўтказилган йиғилишда муҳокама қилинди.
                                            </td>
                                        </tr>
                                        <tr style={{ textAlign: "center" }} className="tableHeader">
                                            <td>1</td>
                                            <td >Вилоят ҳокимининг чора-тадбирлари</td>
                                            <td>№09-8/140
                                                31.10.2021</td>
                                            <td>№14
                                                31.10.2021</td>
                                            <td>31.10.2021</td>
                                            <td style={{ textAlign: "justify" }}>
                                                {/* <!-- vaqtinchalik ko'rinmaydi -->

                                                    <!-- <p><span class="color-black">Nazoratda:</span> B.Zaripov</p>
                                                    <hr> --> */}
                                                <p><span className="color-black">Ijrochilar:</span> <ins>N.Xolmurodov, Tuman va Shahar hokimliklari</ins></p>

                                                <hr />
                                                <p ><span className="color-black" style={{ display: "none" }}>Umumlashtiruvchi: ,yf</span> 1.O'zbekiston Respublikasi Prezidenti Adminstratsiyasi raxbaring ko'rsatmasi (16.11.2021-y №02-PA 1-18194)
                                                    rahbarlik ijro uchun qabul qilinsin</p>
                                            </td>
                                            <td>
                                                2021-yil 14-iyuldagi <br /> 7/3909-sonli chora-tadbirlar rejasi
                                            </td>
                                            <td>
                                                Chora-tadbirlar
                                                2021.14.07
                                            </td>
                                            <td>
                                                E-XAT 2021.14.07
                                            </td>
                                            <td style={{ textAlign: "justify" }}>
                                                Oʼzbekiston Respublikasining “Vijdon erkinligi va diniy tashkilotlar toʼgʼrisida”gi 2021 yil 5 iyuldagi OʼRQ-699-sonli Qonuni mazmun-mohiyatini aholi va korxona tashkilotlar oʼrtasida tushuntirish ishlarini olib borish boʼyicha chora-tadbirlar ishlab chiqilib, tegishli masʼul idoralar va mutaxassislar tomonidan tushuntirish targʼibot ishlari olib borildi.
                                            </td>
                                            <td>
                                                2021 йил 26 июль куни вилоят ҳокимининг ўринбосари Э.Мажидов раҳбарлигида ўтказилган йиғилишда муҳокама қилинди.
                                            </td>
                                        </tr>
                                        <tr style={{ textAlign: "center" }} className="tableHeader">
                                            <td>1</td>
                                            <td >Вилоят ҳокимининг чора-тадбирлари</td>
                                            <td>№09-8/140
                                                31.10.2021</td>
                                            <td>№14
                                                31.10.2021</td>
                                            <td>31.10.2021</td>
                                            <td style={{ textAlign: "justify" }}>
                                                {/* <!-- vaqtinchalik ko'rinmaydi -->

                                                    <!-- <p><span class="color-black">Nazoratda:</span> B.Zaripov</p>
                                                    <hr> --> */}
                                                <p><span className="color-black">Ijrochilar:</span> <ins>N.Xolmurodov, Tuman va Shahar hokimliklari</ins></p>

                                                <hr />
                                                <p ><span className="color-black" style={{ display: "none" }}>Umumlashtiruvchi: ,yf</span> 1.O'zbekiston Respublikasi Prezidenti Adminstratsiyasi raxbaring ko'rsatmasi (16.11.2021-y №02-PA 1-18194)
                                                    rahbarlik ijro uchun qabul qilinsin</p>
                                            </td>
                                            <td>
                                                2021-yil 14-iyuldagi <br /> 7/3909-sonli chora-tadbirlar rejasi
                                            </td>
                                            <td>
                                                Chora-tadbirlar
                                                2021.14.07
                                            </td>
                                            <td>
                                                E-XAT 2021.14.07
                                            </td>
                                            <td style={{ textAlign: "justify" }}>
                                                Oʼzbekiston Respublikasining “Vijdon erkinligi va diniy tashkilotlar toʼgʼrisida”gi 2021 yil 5 iyuldagi OʼRQ-699-sonli Qonuni mazmun-mohiyatini aholi va korxona tashkilotlar oʼrtasida tushuntirish ishlarini olib borish boʼyicha chora-tadbirlar ishlab chiqilib, tegishli masʼul idoralar va mutaxassislar tomonidan tushuntirish targʼibot ishlari olib borildi.
                                            </td>
                                            <td>
                                                2021 йил 26 июль куни вилоят ҳокимининг ўринбосари Э.Мажидов раҳбарлигида ўтказилган йиғилишда муҳокама қилинди.
                                            </td>
                                        </tr>
                                        <tr className="text-center">
                                            <td colspan="11" className="text-color">1b Назорат карточкаси</td>
                                        </tr>
                                        <tr className="text-center">
                                            <td colspan="11" className="text-color">2a Назорат карточкаси</td>
                                        </tr>
                                        <tr className="text-center">
                                            <td colspan="11" className="text-color">2b Назорат карточкаси</td>
                                        </tr>
                                        <tr className="text-center">
                                            <td colspan="11" className="text-color">3a Назорат карточкаси</td>
                                        </tr>
                                        <tr className="text-center">
                                            <td colspan="11" className="text-color">3b Назорат карточкаси</td>
                                        </tr>
                                        <tr className="text-center">
                                            <td colspan="11" className="text-color">STАNDАRTNIY PROSTOY KАRTOChKА</td>
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