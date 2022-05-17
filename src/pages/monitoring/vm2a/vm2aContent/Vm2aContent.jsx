import React from "react";
import NavbarContentMonitoring from "../../navbarContentMonitoring/NavbarContentMonitoring";
import Select from 'react-select'

export default function Vm2aContent() {

    const exportF = (e) => {

    }

    return (
        <div className="content mb-5">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>vm2a</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <NavbarContentMonitoring />
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        {/* <!-- Table Componet  --> */}
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <div className="form-group row">
                                    <div className="col-lg-6">
                                        <div className="form-group form-group-floating row mb-0">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input
                                                        type="text"
                                                        className="form-control daterange-single form-control-outline"
                                                        id="Sana"
                                                        placeholder="Placeholder"
                                                        name="date"
                                                    />
                                                    <label className="label-floating">Boshlang'ich sana</label>
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
                                                        id="Sana"
                                                        placeholder="Placeholder"
                                                        name="date1"
                                                    />
                                                    <label className="label-floating">Oxirgi sana</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 d-flex align-items-center">
                                        <button type="button" className="btn btn-primary">Yaratish</button>
                                        <div className="btn-group justify-content-center mx-2">
                                            <span className="btn btn-indigo dropdown-toggle" data-toggle="dropdown">Export</span>
                                            <div className="dropdown-menu">
                                                <span className="dropdown-item">PDF</span>
                                                <span id="downloadLink" onClick={() => exportF(this)} className="dropdown-item">EXCEL</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group text=left">
                                            <Select
                                                // defaultValue={options[1]}
                                                options={[
                                                    { value: "Nazorat kartochkasi", label: "Nazorat kartochkasi", isDisabled: true },
                                                    { value: "Hammasi", label: "Hammasi" },
                                                    { value: "1a nazorat kartochkasi", label: "1a nazorat kartochkasi" },
                                                    { value: "1b nazorat kartochkasi", label: "1b nazorat kartochkasi" },
                                                    { value: "2a nazorat kartochkasi", label: "2a nazorat kartochkasi" },
                                                    { value: "2b nazorat kartochkasi", label: "2b nazorat kartochkasi" },
                                                ]}
                                                // onChange={logChange12}
                                                placeholder="Nazorat kartochkasi"
                                            />
                                            {/* <select className="form-control select-search">
                                                <optgroup label="Nazorat kartochkasi">
                                                    <option value="AZ">Hammasi</option>
                                                    <option value="AZ">1a nazorat kartochkasi </option>
                                                    <option value="CO">1b nazorat kartochkasi</option>
                                                    <option value="ID">2a nazorat kartochkasi</option>
                                                    <option value="WY">2b nazorat kartochkasi</option>
                                                </optgroup>
                                            </select> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- table --> */}
                                <div style={{ overflow: "auto" }}>
                                    <table className="table table-bordered table-striped table-hover Tab my-3">
                                        <thead>
                                            <tr className="bg-dark text-white NavLink text-center">
                                                <td width="47" rowSpan="5" className="b-color"
                                                    style={{ textAlign: "center" }}>№</td>
                                                <td width="512" rowSpan="5" className="b-color"
                                                    style={{ textAlign: "center" }}>Котибиятлар</td>
                                                <td width="159" rowSpan="3" className="b-color"
                                                    style={{ textAlign: "center" }}>Юқори ташкилотлардан келган
                                                    хужжатлар
                                                </td>
                                                <td width="1826" colSpan="28"
                                                    style={{ textAlign: "center", fontWeight: "700" }}>Ш У Н Д А Н
                                                </td>
                                            </tr>
                                            <tr className="bg-dark text-white NavLink text-center">
                                                <td width="159" rowSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>Ўзбекистон Республикаси Вазирлар
                                                    Маҳкамаси
                                                    томонидан келган хужжатлар</td>
                                                <td width="159" rowSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>Жамига нисбатан % ҳисобида</td>
                                                <td width="1508" colSpan="26"
                                                    style={{ textAlign: "center", fontWeight: "700" }} > ШУ жумладан
                                                </td>
                                            </tr>
                                            <tr className="bg-dark text-white NavLink text-center">
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>Ўзбекистон Республикаси Вазирлар
                                                    Маҳкамасининг қарори</td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>Ўзбекистон Республикаси Вазирлар
                                                    Маҳкамасининг фармойиши</td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>Бош вазир баённомалари</td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>Бош вазир ўринбосари баённомалари
                                                </td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>Бош вазир маслаҳатчиси
                                                    баённомалари</td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>Бош вазир чора-тадбирлари</td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>Бош вазир ўринбосари
                                                    чора-тадбирлари</td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>Бош вазир маслаҳатчиси
                                                    чора-тадбирлари
                                                </td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>Бош вазир топшириғи</td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>Бош вазир ўринбосари топшириғи
                                                </td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>Бош вазир маслаҳатчиси топшириғи
                                                </td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>Ўзбекистон Республикаси Вазирлар
                                                    Маҳкамаси
                                                    аппарати раҳбари</td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>Ўзбекистон Республикаси Вазирлар
                                                    Маҳкамаси
                                                    Котибиятлари мудирлари</td>
                                            </tr>
                                            <tr className="bg-dark text-white NavLink text-center">
                                                <td width="159" rowSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>Сони</td>
                                                <td width="159" rowSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>Сони</td>
                                                <td width="159" rowSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>%</td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>1</td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>2</td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>3</td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>4</td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>5</td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>6</td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>7</td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>8</td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>9</td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>10</td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>11</td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>12</td>
                                                <td width="116" colSpan="2" className="b-color"
                                                    style={{ textAlign: "center" }}>13</td>
                                            </tr>
                                            <tr className="bg-dark text-white NavLink text-center">
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони
                                                </td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони
                                                </td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони
                                                </td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони
                                                </td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони
                                                </td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони
                                                </td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони
                                                </td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони
                                                </td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони
                                                </td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони
                                                </td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони
                                                </td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони
                                                </td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони
                                                </td>
                                                <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <!--  --> */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}