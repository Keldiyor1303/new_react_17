import React, {useContext, useEffect, useState} from "react";
import NavbarContentMonitoring from "../../navbarContentMonitoring/NavbarContentMonitoring";
import Select from 'react-select'
import {axiosInstance} from "../../../../config";
import {AuthContext} from "../../../../context/AuthContext";
import jwtDecode from "jwt-decode";
import {useParams} from "react-router-dom";
import {Alert} from "../../../../component/alert/Alert";

export default function A1Content() {
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const [dataOut, setDataOut] = useState([])
    const [data, setData] = useState([])
    const [selected, setSelected] = useState(0);
    const [size, setSize] = useState(0);
    const [dataIn, setDataIn] = useState([])
    const params = useParams();
    const [file, setFile] = useState(null);
    const [korrespondent, setKorrespondent] = useState([]);
    const [alert, setAlert] = useState({ open: false, color: "", text: "" });
    const [notParentsCard, setNotParentsCard] = useState([]);
    const [cardsName, setCardsName] = useState([]);
    const [permission, setPermission] = useState([]);

    useEffect(() => {
        console.log(jwtDecode(currentUser));
        let workPlaces = JSON.parse(jwtDecode(currentUser).workPlaces)
        console.log(workPlaces);
        let arr = [], arr1 = [], arr2 = [];
        workPlaces.forEach((d, i) => {
            if (JSON.parse(localStorage.getItem('ids')) === d.id) {
                d.permissions.forEach((h) => {
                    arr2.push(h?.name);
                })
            }
            d.userRoles.forEach((f, i) => {
                arr.push(f?.systemName);
                arr1.push(f?.rank);
            })
        })
        // setWorkPlace(arr);
        // setRanks(arr1);
        setPermission(arr2);
    }, []);

    const notParentsCardClick = (e) => {
        console.log(e);

        axiosInstance.get("organization/showCard/cardType/" + e.value, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data);
                let arr = [];
                res.data.filter((d, i) => {
                    arr.push({ value: d.id, label: d.cardName });
                })
                setCardsName(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
    }


    const hujjatQushish = async (e) => {
        e.preventDefault();
        let card1 = document.querySelector('.card1')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let korrespondent1 = document.querySelector('.korrespondent')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let chiquvchiSana = document.querySelector('.chiquvchiSana').value;
        let ruyxatSana = document.querySelector('.ruyxatSana').value;


        // kartochkani olish
        let kart = cardsName.filter((c, i) => {
            if (c.label === card1) {
                return c;
            }
        })

        // korrespondent tanlagan payt id sini olish
        let arr1 = korrespondent.filter((c, i) => {
            if (c.label === korrespondent1) {
                return c;
            }
        })

        axiosInstance.post("monitoring", {
            cardId: kart[0]?.value !== undefined ? kart[0]?.value : null,
            orgId: arr1[0]?.value !== undefined ? arr1[0]?.value : null,
            endDay: chiquvchiSana !== '' ? chiquvchiSana : null,
            startDay: ruyxatSana !== '' ? ruyxatSana : null,
            page: selected,
        }, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data.content);
                console.log(res.data.content[0].monitorings[0].fullName);
                setSize(res.data.size)
                setData(res.data)
                setDataOut(res.data.content)
                setDataIn(dataOut.monitorings)
                document.querySelector('.newFormFunc').reset();
                Alert(setAlert, "success", "Malumot rezalutsiyaga muvaffaqiyatli yuborildi");
                setFile(null);
            })
            .catch(err => {
                console.log(err);
                Alert(setAlert, "warning", err?.response?.data);
            })
        console.log({
            cardId: kart[0]?.value !== undefined ? kart[0]?.value : null,
            orgId: arr1[0]?.value !== undefined ? arr1[0]?.value : null,
            endDay: chiquvchiSana !== '' ? chiquvchiSana : null,
            startDay: ruyxatSana !== '' ? ruyxatSana : null,
            page: selected,
        })

    }
    return (
        <div className="content mb-5">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>1a</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <NavbarContentMonitoring />
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        {/* <!-- Table Componet  --> */}
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <form onSubmit={hujjatQushish} className="newFormFunc mb-3">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <Select
                                                            options={notParentsCard}
                                                            onChange={notParentsCardClick}
                                                            placeholder="Nazorat Kartochkasi"
                                                            className="cardTypeId"
                                                            isClearable={true}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <Select
                                                            options={cardsName}
                                                            placeholder="Xujjat Turi"
                                                            className="card1"
                                                            isClearable={true}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row mb-0">
                                                <div className="col-lg-12">
                                                    <Select
                                                        options={korrespondent}
                                                        placeholder="Korrespondent"
                                                        className='korrespondent'
                                                        isClearable={true}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row mb-0">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input
                                                            type="date"
                                                            className="form-control daterange-single form-control-outline chiquvchiSana"
                                                            id="chiquvchiSana"
                                                            placeholder="Placeholder"
                                                        />
                                                        <label className="label-floating">Start</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row mb-0">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input
                                                            type="date"
                                                            className="form-control daterange-single form-control-outline ruyxatSana"
                                                            id="royxatdanOtishSana"
                                                            placeholder="Placeholder"
                                                        />
                                                        <label className="label-floating">End
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <button type={'submit'} id="hujQush" className="btn btn-primary mr-1 hujQush ">Izlash
                                            </button>
                                            <button className="btn btn-primary mr-1">Barchasi</button>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-primary dropdown-toggle"
                                                        data-toggle="dropdown">Export
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <span className="dropdown-item"><i
                                                        className="icon-menu7"></i> EXCEL</span>
                                                    <span className="dropdown-item"><i className="icon-screen-full"></i> PDF</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {/* <!-- table --> */}
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