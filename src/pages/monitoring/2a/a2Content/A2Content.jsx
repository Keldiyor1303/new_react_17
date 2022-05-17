import React from "react";
import NavbarContentMonitoring from "../../navbarContentMonitoring/NavbarContentMonitoring";
import Select from 'react-select'

export default function A2Content() {
    return (
        <div className="content mb-5">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>2a</h3>
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
                                                <label>Nazorat kartochkasi</label>
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
                                                    <optgroup label="Nazorat kartochkasi">
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
                                                    <optgroup label="Xujjat turi">
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
                                <div className="block" style={{ overflowX: "auto" }}>
                                    <table className="table table-bordered table-striped table-hover Tab w-100 table-responsive text-center">
                                        <thead style={{ backgroundColor: "#333", color: "#fff" }}>
                                            <tr>
                                                <th width="2%" rowSpan={5}>№</th>
                                                <th width="25%" rowSpan={5}>Котибиятлар</th>
                                                <th width="8%" rowSpan={3}>Юқори ташкилотлардан келган хужжатлар</th>
                                                <th colSpan={14}>Ш У Н Д А Н</th>
                                            </tr>
                                            <tr>
                                                <th width="7%" rowSpan={2}>Ўзбекистон Республикаси Президенти томонидан келган хужжатлар</th>
                                                <th width="5%" rowSpan={2}>Жамига нисбатан % ҳисобида</th>
                                                <th colSpan={12}>Шу жумладар</th>
                                            </tr>
                                            <tr>
                                                <th colSpan={2} width="8%">Ўзбекистон Республикаси Президенти фармони</th>
                                                <th colSpan={2} width="8%">Ўзбекистон Республикаси Президенти қарори</th>
                                                <th colSpan={2} width="8%">Ўзбекистон Республикаси Президенти фармойиши</th>
                                                <th colSpan={2} width="8%">Ўзбекистон Республикаси Президенти баённомалари</th>
                                                <th colSpan={2} width="8%">Ўзбекистон Республикаси Президенти Администрацияси раҳбари топшириқлари</th>
                                                <th colSpan={2} width="8%">Ўзбекистон Республикаси Қонуни</th>
                                            </tr>
                                            <tr>
                                                <th rowSpan={2}>Сони</th>
                                                <th rowSpan={2}>Сони</th>
                                                <th rowSpan={2}>%</th>
                                                <th colSpan={2}>1</th>
                                                <th colSpan={2}>2</th>
                                                <th colSpan={2}>3</th>
                                                <th colSpan={2}>4</th>
                                                <th colSpan={2}>5</th>
                                                <th colSpan={2}>6</th>
                                            </tr>
                                            <tr>
                                                <th>Сони</th>
                                                <th>%</th>
                                                <th>Сони</th>
                                                <th>%</th>
                                                <th>Сони</th>
                                                <th>%</th>
                                                <th>Сони</th>
                                                <th>%</th>
                                                <th>Сони</th>
                                                <th>%</th>
                                                <th>Сони</th>
                                                <th>%</th>
                                            </tr>
                                        </thead>
                                        <tbody style={{ textAlign: "left" }}>
                                            <tr>
                                                <td>1</td>
                                                <td className="box-1">
                                                    <strong data-toggle="collapse" href="#ib">Бухоро вилоят ҳокимлиги ҳузуридаги
                                                        &quot;Ахборот-коммуникация технологияларини
                                                        ривожлантириш маркази&quot; ДУК
                                                    </strong>
                                                </td>
                                                <td >
                                                    0
                                                </td>
                                                <td >0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody id="ib" className="collapse" style={{ textAlign: "left" }}>
                                            <tr className="table-secondary table-info">
                                                <td></td>
                                                <td>Ҳ.Тўраев</td>
                                                <td>0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td className="text-center"></td>
                                                <td>Б.Ибатов</td>
                                                <td>0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td className="text-center"></td>
                                                <td>А.Жумаев</td>
                                                <td >0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td>
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td className="text-center"></td>
                                                <td>Н.Жабборов</td>
                                                <td >0</td>
                                                <td >0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody className="js-table-sections-header" style={{ textAlign: "left" }}>
                                            <tr>
                                                <td >2</td>
                                                <td className="box-1"><strong>Ахборот тизимлари ва ресурсларини
                                                    жорий этиш ва ривожлантириш бўлими</strong></td>
                                                <td >
                                                    0
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody style={{ textAlign: "left" }}>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>В.Вакант</td>
                                                <td >0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td>
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td></td>
                                                <td>Ш.Шарипов</td>
                                                <td >0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td>
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>Б.Содиқов</td>
                                                <td >0</td>
                                                <td>0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>А.Ниязов</td>
                                                <td>0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody className="js-table-sections-header" style={{ textAlign: "left" }}>
                                            <tr>
                                                <td >3</td>
                                                <td className="box-1"><strong>Электрон ҳамкорликни ривожлантириш
                                                    бўлими</strong></td>
                                                <td>
                                                    0
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody style={{ textAlign: "left" }}>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>Д.Содиқов</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>З.Расулова</td>
                                                <td >0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>Т.Джурабаева</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>в.вакант</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>Т.Джурабаева</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody className="js-table-sections-header" style={{ textAlign: "left" }}>
                                            <tr>
                                                <td >4</td>
                                                <td className="box-1"><strong>Ахборот хавфсизлигини таъминлаш
                                                    бўлими</strong></td>
                                                <td>
                                                    0
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                        </tbody >
                                        <tbody style={{ textAlign: "left" }}>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>В.Вакант</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>В.Вакант</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody className="js-table-sections-header" style={{ textAlign: "left" }}>
                                            <tr>
                                                <td >5</td>
                                                <td className="box-1"><strong>Ўқув бўлими</strong></td>
                                                <td>
                                                    0
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td width="58">0</td>
                                                <td width="58">
                                                    0%
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody style={{ textAlign: "left" }}>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>В.Вакант</td>
                                                <td >0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>Д.Содиқов</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>А.Ҳамроев</td>
                                                <td >0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>В.Вакант</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody className="js-table-sections-header" style={{ textAlign: "left" }}>
                                            <tr>
                                                <td >6</td>
                                                <td className="box-1"><strong>Маҳаллий бўлинма</strong></td>
                                                <td >
                                                    0
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody style={{ textAlign: "left" }}>
                                            <tr className="table-secondary table-info">
                                                <td className="text-center"></td>
                                                <td>А.Набиев</td>
                                                <td >0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>И.Обидов</td>
                                                <td >0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>Н.Хайитов</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td className="text-center"></td>
                                                <td>Ш.Амруллоев</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>Ш.Олимов</td>
                                                <td >0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>И.Обидов</td>
                                                <td >0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>Ш.Исомов</td>
                                                <td >0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>Ҳ.Мавлонов</td>
                                                <td >0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>В.Вакант</td>
                                                <td >0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>А.Замонов</td>
                                                <td >0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>Ш.Олтиев</td>
                                                <td >0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>Ш.Нигматов</td>
                                                <td >0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>А.Ахмедов</td>
                                                <td >0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody className="js-table-sections-header" style={{ textAlign: "left" }}>
                                            <tr>
                                                <td >7</td>
                                                <td className="box-1"><strong>Техник кузатув бўлими</strong></td>
                                                <td >
                                                    0
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody style={{ textAlign: "left" }}>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>А.Нумонов</td>
                                                <td >0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>И.Ким.</td>
                                                <td >0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>Ф.Саматов</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    0%
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody className="js-table-sections-header" style={{ textAlign: "left" }}>
                                            <tr>
                                                <td >8</td>
                                                <td className="box-1"><strong>Молия-иқтисодиёт ва камбағалликни
                                                    қисқартириш масалалари бўйича</strong></td>
                                                <td >
                                                    0
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody className="js-table-sections-header" style={{ textAlign: "left" }} >
                                            <tr>
                                                <td >9</td>
                                                <td className="box-1"><strong>Молия­иқтисодиёт ва камбағалликни
                                                    қисқартириш масалалари бўйича</strong></td>
                                                <td >
                                                    0
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                            {/* <tbody>
                                            </tbody> */}
                                        </tbody>
                                        <tbody className="js-table-sections-header" style={{ textAlign: "left" }}>
                                            <tr>
                                                <td >10</td>
                                                <td className="box-1"><strong>Инвестициялар ва ташқи савдо
                                                    масалалари бўйича</strong></td>
                                                <td >
                                                    0
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                            {/* <tbody>
                                            </tbody> */}
                                        </tbody>
                                        <tbody className="js-table-sections-header" style={{ textAlign: "left" }}>
                                            <tr>
                                                <td >11</td>
                                                <td className="box-1"><strong>Ўқув бўлими</strong></td>
                                                <td >
                                                    0
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody style={{ textAlign: "left" }}>
                                            <tr className="table-secondary table-info">
                                                <td ></td>
                                                <td>С.Файзулла</td>
                                                <td >0</td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                                <td >0</td>
                                                <td >
                                                    0%
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* <!-- end table --> */}
                            </div>
                        </div>
                        {/* <!-- end Table Components --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}