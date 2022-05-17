import React, {useContext, useEffect, useState} from "react";
import NavbarContentMonitoring from "../../navbarContentMonitoring/NavbarContentMonitoring";
import Select from 'react-select'
import {AuthContext} from "../../../../context/AuthContext";
import {axiosInstance} from "../../../../config";
import {Alert} from "../../../../component/alert/Alert";
import jwtDecode from "jwt-decode";
import {useParams} from "react-router-dom";
import ReactPaginate from "react-paginate";
import {CheckBoxSelection, Inject, MultiSelectComponent} from "@syncfusion/ej2-react-dropdowns";
import DatePicker from "react-datepicker";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

export default function MonitoringKiruvchiContent() {
    const {user: currentUser, dispatch} = useContext(AuthContext);
    const [dataOut, setDataOut] = useState([])
    const [data, setData] = useState([])
    const [selected, setSelected] = useState(0);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const [startDay, setStartDay] = useState("");
    const [endDay, setEndDay] = useState("");
    const [size, setSize] = useState(0);
    const [dataIn, setDataIn] = useState([])
    const [cardsName1, setCardsName1] = useState([])
    const [cardId, setCardId] = useState([])
    const [cardKor, setCardKor] = useState([])
    const params = useParams();
    const [file, setFile] = useState(null);
    const [korrespondent, setKorrespondent] = useState([]);
    const [korrespondent1, setKorrespondent1] = useState([]);
    const [alert, setAlert] = useState({open: false, color: "", text: ""});
    const [notParentsCard, setNotParentsCard] = useState([]);
    const [cardsName, setCardsName] = useState([]);
    const [permission, setPermission] = useState([]);


    useEffect(() => {
        // console.log(jwtDecode(currentUser));
        let workPlaces = JSON.parse(jwtDecode(currentUser).workPlaces)
        // console.log(workPlaces);
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


    useEffect(() => {
        axiosInstance.get("organization/showCardTypeByOrg", {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                let arr = [];
                res.data.forEach((c, i) => {
                    arr.push({value: c.id, label: c.cardName});
                })
                setNotParentsCard(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, []);

    let fields1 = {
        label: 'value',
        value: 'label'
    };

    useEffect(() => {
        axiosInstance.get("organization/orgCorrespondent", {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                let arr = [];
                res.data.filter((d, i) => {
                    arr.push({value: d.id, label: d.orgName})
                });
                setKorrespondent1(arr);
                console.log(arr)
            })
            .catch(err => {
                console.log(err.response);
            })
    }, []);


    const changeHandler = async (e) => {
        let arr = [];
        e.value.forEach((c, i) => {
            notParentsCard.filter((d, i) => {
                if (d.label === c) {
                    arr.push(d.value);
                }
            })
        })
        setCardId(arr);
        axiosInstance.post("card/cardType/byIds", {
            ids: arr,
        }, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                let arr = [];
                res.data.forEach((d, i) => {
                    arr.push({value: d.id, label: d.cardName})
                });
                setKorrespondent(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
        console.log(arr)
    }


    const changeHandler1 = async (e) => {
        let arr = [];
        e.value.forEach((c, i) => {
            korrespondent.filter((d, i) => {
                if (d.label === c) {
                    arr.push(d.value);
                }
            })
        })
        setCardsName1(arr)
    }

    const changeHandler2 = async (e) => {
        // console.log(e.value);
        // console.log(korrespondent1);
        let arr = [];
        e.value.forEach((c, i) => {
            korrespondent1.filter((d, i) => {
                if (d.label === c) {
                    arr.push(d.value);
                }
            })
        })
        setCardKor(arr)
    }

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
                    arr.push({value: d.id, label: d.cardName});
                })
                setCardsName(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    const setBarcha = () => {
        console.log('Button')
        axiosInstance.post("monitoring", {
            cardTypes: [],
            cards: [],
            correspondets: [],
            endDay: '',
            startDay: '',
            page: 0,
            workPlaceId: localStorage.getItem('ids')
        }, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data)
                setSize(res.data.size)
                setData(res.data)
                setDataOut(res.data.content)
                setDataIn(dataOut.monitorings)
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    const getAllData = () => {
        axiosInstance.post("monitoring", {
            cardTypes: [],
            cards: [],
            correspondets: [],
            endDay: '',
            startDay: '',
            page: -1,
            workPlaceId: localStorage.getItem('ids')
        }, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data);
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
    }

    const hujjatQushish = async (e) => {
        e.preventDefault();

        axiosInstance.post("monitoring", {
            cardTypes: cardId ? cardId : [],
            cards: cardsName1 ? cardsName1 : [],
            correspondets: cardKor ? cardKor : [],
            endDay: endDay ? endDay : '',
            startDay: startDay ? startDay : '',
            page: 0,
            workPlaceId: localStorage.getItem('ids')
        }, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data);
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
            cardTypes: cardId ? cardId : [],
            cards: cardsName1 ? cardsName1 : [],
            correspondets: cardKor ? cardKor : [],
            endDay: endDay ? endDay : '',
            startDay: startDay ? startDay : '',
            page: 0,
            workPlaceId: localStorage.getItem('ids')
        })
    }

    // const handlePageClick = (e) => {
    //     console.log(e);
    //     // document.querySelector('#hujQush').check();
    //     setSelected(e.selected)
    // }

    // const handlePageClick = async (e) => {
    //     try {
    //         const res = await axiosInstance.post(`search/resolution/` + JSON.parse(localStorage.getItem('ids') + "?page=" + e.selected, {
    //             headers: {
    //                 Authorization: "Bearer " + currentUser
    //             }
    //         }))
    //         setData(res.data);
    //     } catch (error) {
    //         console.log(error.response);
    //     }
    // }
    const handlePageClick = async (e) => {
        console.log(e.selected);
        setSelected(e.selected)
        try {
            const res = await axiosInstance.post(`monitoring`, {
                cardTypes: [],
                cards: [],
                correspondets: [],
                endDay: '',
                startDay: '',
                page: e.selected,
                workPlaceId: localStorage.getItem('ids')
            }, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
            // console.log(res.data)
            setSize(res.data.size)
            setData(res.data)
            setDataOut(res.data.content)
            setDataIn(dataOut.monitorings)
        } catch (error) {
            console.log(error.response);
        }
    }

    const startFunc = (date) => {

        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0');
        let yyyy = date.getFullYear();
        let start = yyyy + '-' + mm + '-' + dd;
        setStartDay(start);

        console.log("red", start);
    }

    const endFunc = (date) => {

        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0');
        let yyyy = date.getFullYear();
        let end = yyyy + '-' + mm + '-' + dd;
        setEndDay(end);

        console.log("red", end);
    }


    return (
        <div className="content mb-5">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase"}}>Kiruvchi</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <NavbarContentMonitoring params={params.id}/>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        <div className="card">
                            <div className="card-body" style={{padding: "30px"}}>
                                <form onSubmit={hujjatQushish} className="newFormFunc mb-3">
                                    <div className="row">
                                        <div className="col-lg-4 mb-3">
                                            {/*<div className="form-group form-group-floating row">*/}
                                            {/*    <div className="col-lg-12">*/}
                                            {/*        <div className="position-relative">*/}
                                            {/*            <Select*/}
                                            {/*                options={notParentsCard}*/}
                                            {/*                onChange={notParentsCardClick}*/}
                                            {/*                placeholder="Nazorat Kartochkasi"*/}
                                            {/*                className="cardTypeId"*/}
                                            {/*                isClearable={true}*/}
                                            {/*            />*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            <div className="selectCheckBox">
                                                <MultiSelectComponent id="mtselement"
                                                                      className="korrespondent1"
                                                                      onChange={changeHandler}
                                                                      popupHeight='500px'
                                                                      fields={fields1}
                                                                      dataSource={notParentsCard}
                                                                      placeholder="Nazorat Kartochkasi"
                                                                      mode="CheckBox"
                                                                      enableGroupCheckBox="true"
                                                                      allowFiltering="true"
                                                                      showSelectAll="true"
                                                                      filterBarPlaceholder="Qidirish">
                                                    <Inject services={[CheckBoxSelection]}/>
                                                </MultiSelectComponent>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 mb-3">
                                            {/*<div className="form-group form-group-floating row">*/}
                                            {/*    <div className="col-lg-12">*/}
                                            {/*        <div className="position-relative">*/}
                                            {/*            <Select*/}
                                            {/*                options={cardsName}*/}
                                            {/*                placeholder="Xujjat Turi"*/}
                                            {/*                className="card1"*/}
                                            {/*                isClearable={true}*/}
                                            {/*            />*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            <div className="selectCheckBox">
                                                <MultiSelectComponent id="mtselement"
                                                                      className="korrespondent1"
                                                                      onChange={changeHandler1}
                                                                      popupHeight='500px'
                                                                      fields={fields1}
                                                                      dataSource={korrespondent}
                                                                      placeholder="Xujjat turi"
                                                                      mode="CheckBox"
                                                                      enableGroupCheckBox="true"
                                                                      allowFiltering="true"
                                                                      showSelectAll="true"
                                                                      filterBarPlaceholder="Qidirish">
                                                    <Inject services={[CheckBoxSelection]}/>
                                                </MultiSelectComponent>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 mb-3">
                                            {/*<div className="form-group form-group-floating row mb-0">*/}
                                            {/*    <div className="col-lg-12">*/}
                                            {/*        <Select*/}
                                            {/*            options={korrespondent}*/}
                                            {/*            placeholder="Korrespondent"*/}
                                            {/*            className='korrespondent'*/}
                                            {/*            isClearable={true}*/}
                                            {/*        />*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            <div className="selectCheckBox">
                                                <MultiSelectComponent id="mtselement"
                                                                      className="korrespondent1"
                                                                      onChange={changeHandler2}
                                                                      popupHeight='500px'
                                                                      fields={fields1}
                                                                      dataSource={korrespondent1}
                                                                      placeholder="Korrespondent"
                                                                      mode="CheckBox"
                                                                      enableGroupCheckBox="true"
                                                                      allowFiltering="true"
                                                                      showSelectAll="true"
                                                                      filterBarPlaceholder="Qidirish">
                                                    <Inject services={[CheckBoxSelection]}/>
                                                </MultiSelectComponent>
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row mb-0">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <div className={'changeBox'} style={{
                                                            height: '100%',
                                                            width: '100%',
                                                            border: '1px solid lightgray',
                                                            borderRadius: '5px',
                                                            '&>input': {
                                                                border: 'none !important',
                                                                outline: 'none !important'
                                                            },
                                                            '&:hover': {
                                                                border: 'none !important',
                                                                outline: 'none !important'
                                                            }
                                                        }}>
                                                            <DatePicker width="100" height="100"
                                                                        className={'chiquvchiSana'} id={'chiquvchiSana'}
                                                                        selected={startDate}
                                                                        onChange={(date) => {
                                                                            setStartDate(date);
                                                                            startFunc(date)
                                                                        }}
                                                                        dateFormat={'dd.MM.yyyy'}
                                                                        isClearable
                                                                        placeholderText="Boshlanish sana"
                                                                        showYearDropdown scrollableMonthYearDropdown/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row mb-0">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <div className={'changeBox'} style={{
                                                            height: '100%',
                                                            width: '100%',
                                                            border: '1px solid lightgray',
                                                            borderRadius: '5px',
                                                            '&>input': {
                                                                border: 'none !important',
                                                                outline: 'none !important'
                                                            },
                                                            '&:hover': {
                                                                border: 'none !important',
                                                                outline: 'none !important'
                                                            }
                                                        }}>
                                                            <DatePicker width="100" height="100"
                                                                        className={'ruyxatSana'} id={'chiquvchiSana'}
                                                                        selected={endDate}
                                                                        onChange={(date) => {
                                                                            setEndDate(date);
                                                                            endFunc(date)
                                                                        }}
                                                                        dateFormat={'dd.MM.yyyy'}
                                                                        isClearable
                                                                        placeholderText="Tugash sana"
                                                                        showYearDropdown scrollableMonthYearDropdown/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <button type={'submit'} id="hujQush"
                                                    className="btn btn-primary mr-1 hujQush ">Izlash
                                            </button>
                                            <button type={'button'} className="btn btn-primary mr-1"
                                                    onClick={() => setBarcha()}>Barchasi
                                            </button>
                                            {/*<button type="button" className="btn btn-primary dropdown-toggle"*/}
                                            {/*       */}
                                            {/*        data-toggle="dropdown">Export*/}
                                            {/*</button>*/}
                                            <div className="btn-group " style={{ width: "33%" }}>
                                                <button type="button" className="btn btn-primary dropdown-toggle btn-lg"  onClick={() => getAllData()}
                                                        data-toggle="dropdown">Export
                                                </button>

                                                <div className="dropdown-menu dropdown-menu-right">

                                                    <ReactHTMLTableToExcel
                                                        id="test-table-xls-button"
                                                        className="icon-menu7 download-table-xls-button dropdown-item"
                                                        table="table-to-xls"
                                                        filename="tablexls"
                                                        sheet="tablexls"
                                                        buttonText="EXCEL"/>

                                                    {/* <span className="dropdown-item" onClick={exportReportToExcel}><i className="icon-menu7"></i> EXCEL</span> */}
                                                    <span className="dropdown-item"><i className="icon-screen-full"></i> PDF</span>
                                                </div>
                                            </div>

                                            {/*<div className="dropdown-menu dropdown-menu-right">*/}
                                            {/*        <span className="dropdown-item"><i*/}
                                            {/*            className="icon-menu7"></i> EXCEL</span>*/}
                                            {/*    <span className="dropdown-item"><i className="icon-screen-full"></i> PDF</span>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </form>
                                {/* <!-- end date input -->
                                <!-- table --> */}
                                <div className="block">
                                    <div className="#" style={{overflowX: "auto"}}>
                                        <table id="table-to-xls" className="table table-bordered table-striped table-hover Tab">
                                            <tbody className="bg-dark text-white NavLink text-center">
                                            <tr>
                                                <td width="64" rowSpan="3" bgcolor="#363A41"
                                                    style={{textAlign: "center", color: "#FFF"}}><strong>№</strong></td>
                                                <td width="504" rowSpan="3" bgcolor="#363A41"
                                                    style={{textAlign: "center", color: "#FFF"}}><strong>Бўлим
                                                    номланиши</strong></td>
                                                <td width="192" colSpan="2" rowSpan="2" bgcolor="#363A41"
                                                    style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>Барчаси</strong>
                                                </td>
                                                <td width="192" colSpan="2" rowSpan="2" bgcolor="#363A41"
                                                    style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>Бажарилган</strong>
                                                </td>
                                                <td width="576" height="25" colSpan="6" bgcolor="#363A41"
                                                    style={{textAlign: "center", color: "#fff"}}><strong>Муддатидан кеч
                                                    бажарилган</strong></td>
                                                <td width="192" colSpan="2" rowSpan="2" bgcolor="#363A41"
                                                    style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>Бажарилмаган</strong></td>
                                                <td width="192" colSpan="2" rowSpan="2" bgcolor="#363A41"
                                                    style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>Жараёнда</strong>
                                                </td>
                                                <td width="576" colSpan="6" bgcolor="#363A41"
                                                    style={{textAlign: "center", color: "#fff"}}><strong>Муддати
                                                    бор</strong></td>
                                                <td width="192" colSpan="2" rowSpan="2" bgcolor="#363A41"
                                                    style={{textAlign: "center", color: "#fff"}}><strong>Рад
                                                    этилган</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="25" colSpan="2" bgcolor="#363A41"
                                                    style={{textAlign: "center", color: "#fff"}}><strong>1 кун</strong>
                                                </td>
                                                <td colSpan="2" bgcolor="#363A41"
                                                    style={{textAlign: "center", color: "#fff"}}><strong>2-3
                                                    кун</strong>
                                                </td>
                                                <td colSpan="2" bgcolor="#363A41" style={{textAlign: "center"}}><span
                                                    style={{color: "#fff"}}><strong>4
                                                            (~)</strong></span><strong></strong></td>
                                                <td colSpan="2" bgcolor="#363A41"
                                                    style={{textAlign: "center", color: "#fff"}}><strong>1 кун</strong>
                                                </td>
                                                <td colSpan="2" bgcolor="#363A41"
                                                    style={{textAlign: "center", color: "#fff"}}><strong>2-3
                                                    кун</strong>
                                                </td>
                                                <td colSpan="2" bgcolor="#363A41"
                                                    style={{textAlign: "center", color: "#fff"}}><strong>4 (~)</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="25" bgcolor="#363A41"
                                                    style={{textAlign: "center", color: "#fff"}} colSpan="2">
                                                    <strong>Сони</strong></td>
                                                <td bgcolor="#363A41" style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>Сони</strong></td>
                                                <td bgcolor="#363A41" style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>%</strong></td>
                                                <td bgcolor="#363A41" style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>Сони</strong></td>
                                                <td bgcolor="#363A41" style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>%</strong></td>
                                                <td bgcolor="#363A41" style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>Сони</strong></td>
                                                <td bgcolor="#363A41" style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>%</strong></td>
                                                <td bgcolor="#363A41" style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>Сони</strong></td>
                                                <td bgcolor="#363A41" style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>%</strong></td>
                                                <td bgcolor="#363A41" style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>Сони</strong></td>
                                                <td bgcolor="#363A41" style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>%</strong></td>
                                                <td bgcolor="#363A41" style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>Сони</strong></td>
                                                <td bgcolor="#363A41" style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>%</strong></td>
                                                <td bgcolor="#363A41" style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>Сони</strong></td>
                                                <td bgcolor="#363A41" style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>%</strong></td>
                                                <td bgcolor="#363A41" style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>Сони</strong></td>
                                                <td bgcolor="#363A41" style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>%</strong></td>
                                                <td bgcolor="#363A41" style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>Сони</strong></td>
                                                <td bgcolor="#363A41" style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>%</strong></td>
                                                <td bgcolor="#363A41" style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>Сони</strong></td>
                                                <td bgcolor="#363A41" style={{textAlign: "center", color: "#fff"}}>
                                                    <strong>%</strong></td>
                                            </tr>
                                            </tbody>

                                            {
                                                dataOut.map((items, index) => {
                                                    // setDataIn(items.monitorings)
                                                    return (
                                                        <>
                                                            <tbody className="js-table-sections-header">
                                                            <tr>
                                                                <td style={{textAlign: "center"}}>{index + 1}</td>
                                                                <td width="504" height="35" style={{textAlign: "left"}}>
                                                                    <strong
                                                                        // onClick={()=>openTable(items)}
                                                                        data-toggle="collapse"
                                                                        href={`#route1${index}`}>{items.departmentName}</strong>
                                                                </td>
                                                                <td style={{textAlign: "center"}}
                                                                    colSpan="2">{items.allInfo}</td>
                                                                <td style={{textAlign: "center"}}>{items.done}</td>
                                                                <td style={{textAlign: "center"}}>{items.donePercent}%</td>
                                                                <td style={{textAlign: "center"}}>{items.oneDayLate}</td>
                                                                <td style={{textAlign: "center"}}>{items.oneDayLatePercent}%</td>
                                                                <td style={{textAlign: "center"}}>{items.twoOrThreeDaysLate}</td>
                                                                <td style={{textAlign: "center"}}>{items.twoOrThreeDaysLatePercent}%</td>
                                                                <td style={{textAlign: "center"}}>{items.fourOrMoreDaysLate}</td>
                                                                <td style={{textAlign: "center"}}>{items.fourOrMoreDaysLatePercent}%</td>
                                                                <td style={{textAlign: "center"}}>{items.notDone}</td>
                                                                <td style={{textAlign: "center"}}>{items.notDonePercent}%</td>
                                                                <td style={{textAlign: "center"}}>{items.process}</td>
                                                                <td style={{textAlign: "center"}}>{items.processPercent}%</td>
                                                                <td style={{textAlign: "center"}}>{items.oneDayHas}</td>
                                                                <td style={{textAlign: "center"}}>{items.oneDayHasPercent}%</td>
                                                                <td style={{textAlign: "center"}}>{items.twoOrThreeDaysHas}</td>
                                                                <td style={{textAlign: "center"}}>{items.twoOrThreeDaysLatePercent}%</td>
                                                                <td style={{textAlign: "center"}}>{items.fourOrMoreDaysHas}</td>
                                                                <td style={{textAlign: "center"}}>{items.fourOrMoreDaysHasPercent}%</td>
                                                                <td style={{textAlign: "center"}}>{items.reject}</td>
                                                                <td style={{textAlign: "center"}}>{items.rejectPercent}%</td>
                                                            </tr>
                                                            </tbody>

                                                            <tbody id={`route1${index}`} className="collapse">
                                                            {items.monitorings.length > 0 && items?.monitorings.map((item, i) => {
                                                                return (
                                                                    <tr key={i} className="table-secondary">
                                                                        <td>{i + 1}</td>
                                                                        <td>{item?.fullName}</td>
                                                                        <td colSpan="2" className="text-center">
                                                                            <a href="https://d-doc.uz/documents/search?doc_type=1&amp;executor=RFEHA100011"
                                                                               target="_blank"
                                                                               rel="noopener noreferrer">
                                                                                {item?.allInfo}
                                                                            </a>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <a href="https://d-doc.uz/documents/search?doc_type=1&amp;executor=RFEHA100011&amp;status%5B0%5D=5"
                                                                               target="_blank"
                                                                               rel="noopener noreferrer">
                                                                                {item?.done}
                                                                            </a>
                                                                        </td>
                                                                        <td>{item?.donePercent}%
                                                                        </td>
                                                                        <td className="text-center">{item?.oneDayLate} </td>
                                                                        <td className="text-center"> {item?.oneDayLatePercent}%</td>
                                                                        <td className="text-center"> {item?.twoOrThreeDaysLate}</td>
                                                                        <td className="text-center"> {item?.twoOrThreeDaysLatePercent}%</td>
                                                                        <td className="text-center">{item?.fourOrMoreDaysLate} </td>
                                                                        <td className="text-center"> {item?.fourOrMoreDaysLatePercent}%</td>
                                                                        <td className="text-center">
                                                                            <a href="https://d-doc.uz/documents/search?doc_type=1&amp;executor=RFEHA100011&amp;status%5B0%5D=4"
                                                                               target="_blank"
                                                                               rel="noopener noreferrer">
                                                                                {item?.notDone}
                                                                            </a>
                                                                        </td>
                                                                        <td>{item?.notDonePercent}%
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <a href="https://d-doc.uz/documents/search?doc_type=1&amp;executor=RFEHA100011&amp;status%5B0%5D=0&amp;status%5B1%5D=1"
                                                                               target="_blank"
                                                                               rel="noopener noreferrer">
                                                                                {item?.process}
                                                                            </a>
                                                                        </td>
                                                                        <td>{item?.processPercent}%
                                                                        </td>
                                                                        <td className="text-center">
                                                                            {item?.oneDayHas}
                                                                        </td>
                                                                        <td className="text-center">{item?.oneDayHasPercent}%
                                                                        </td>
                                                                        <td className="text-center">
                                                                            {item?.twoOrThreeDaysHas}
                                                                        </td>
                                                                        <td className="text-center">{item?.twoOrThreeDaysHasPercent}%
                                                                        </td>
                                                                        <td className="text-center">
                                                                            {item?.fourOrMoreDaysHas}
                                                                        </td>
                                                                        <td className="text-center">{item?.fourOrMoreDaysHasPercent}%
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <a href="https://d-doc.uz/documents/search?doc_type=1&amp;executor=RFEHA100011&amp;status%5B0%5D=99"
                                                                               target="_blank"
                                                                               rel="noopener noreferrer">
                                                                                {item?.reject}
                                                                            </a>
                                                                        </td>
                                                                        <td className="text-center">{item?.rejectPercent}%</td>
                                                                    </tr>
                                                                )
                                                            })
                                                            }
                                                            </tbody>

                                                        </>

                                                    )
                                                })
                                            }


                                            {/* update */}

                                        </table>
                                    </div>
                                </div>
                                {data?.content?.length > 0 && (
                                    <ReactPaginate
                                        breakLabel="..."
                                        nextLabel=">>"
                                        onPageChange={handlePageClick}
                                        pageRangeDisplayed={3}
                                        pageCount={data?.totalElements / 10}
                                        previousLabel="<<"
                                        renderOnZeroPageCount={null}
                                        className="paginationUL"
                                        activeClassName="active"
                                        forcePage={selected}
                                    />
                                )}
                            </div>
                        </div>
                        {/* <!-- end Table Components --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}