import React, {useContext, useEffect, useState} from "react";
import NavbarContentMonitoring from "../../navbarContentMonitoring/NavbarContentMonitoring";
import {axiosInstance} from "../../../../config";
import {AuthContext} from "../../../../context/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import 'jspdf-autotable';
import Select from "react-select";
import {Alert} from "../../../../component/alert/Alert";
import {CheckBoxSelection, Inject, MultiSelectComponent} from '@syncfusion/ej2-react-dropdowns';
import '../../svodka/svodkaContent/SvodkaContent.css'


export default function SvodkaContentQVC() {
    const {user: currentUser, dispatch} = useContext(AuthContext);
    const [allData, setAllData] = useState({})
    const [openTable, setOpenTable] = useState(false)

    console.log(allData)

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [startDay, setStartDay] = useState("");
    const [endDay, setEndDay] = useState("");

    const [korrespondent, setKorrespondent] = useState([]);
    const [notParentsCard, setNotParentsCard] = useState([]);
    const [cardsName, setCardsName] = useState([]);
    const [cardsName1, setCardsName1] = useState([]);

    const [cardId, setCardId] = useState([]);
    const [file, setFile] = useState(null);
    const [alert, setAlert] = useState({open: false, color: "", text: ""});


    // useEffect(() => {
    //     const ids = localStorage.getItem("ids")
    //     console.log("ids", ids);
    //
    //     axiosInstance.get("monitoring/umumiy/" + ids, {
    //         headers: {
    //             Authorization: 'Bearer ' + currentUser
    //         }
    //     })
    //         .then(res => {
    //             setAllData(res.data);
    //             console.log("allData", res.data);
    //         })
    //         .catch(err => {
    //             console.log(err.response);
    //         })
    // }, []);


    useEffect(() => {
        axiosInstance.get("organization/visibleCardTypes", {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data);
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

    useEffect(() => {
        axiosInstance.get("organization/orgCorrespondent", {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data);
                let arr = [];
                res.data.filter((d, i) => {
                    arr.push({value: d.id, label: d.orgName})
                });
                setKorrespondent(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, []);

    const notParentsCardClick = (e) => {
        console.log(e);
        axiosInstance.get("organization/cardType/byCardType/" + e.value, {
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


    const notParentsCardClick1 = (e) => {
        console.log(e);
        axiosInstance.get("organization/showCardType/" + e.value, {
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
                setCardsName1(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    const changeHandler = async (e) => {
        let arr = [];
        e.value.forEach((c, i) => {
            cardsName1.filter((d, i) => {
                if (d.label === c) {
                    arr.push(d.value);
                }
            })
        })
        setCardId(arr);
    }


    let fields1 = {
        label: 'value',
        value: 'label'
    };

    const hujjatQushish = async (e) => {

        e.preventDefault();
        const ids = JSON.parse(localStorage.getItem("ids"));
        let card1 = document.querySelector('.card1')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let korrespondent1 = document.querySelector('.korrespondent1')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let korrespondent2 = document.querySelector('.korrespondent2')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let chiquvchiSana = document.querySelector('.chiquvchiSana').value;
        let ruyxatSana = document.querySelector('.ruyxatSana').value;


        // kartochkani olish
        let kart = cardsName.filter((c, i) => {
            if (c.label === card1) {
                return c;
            }
        })

        // // korrespondent tanlagan payt id sini olish
        // let arr1 = cardsName1.filter((c, i) => {
        //     if (c.label === korrespondent1) {
        //         return c;
        //     }
        // })
        // let arr2 = korrespondent.filter((c, i) => {
        //     if (c.label === korrespondent2) {
        //         return c;
        //     }
        // })
        // console.log(arr1, arr2, kart)
        axiosInstance.post("monitoring/cardType", {
            cardId: cardId,
            cardTypeId: kart[0].value,
            endDay: endDay !== '' ? endDay : '',
            startDay: startDay !== '' ? startDay : '',
            workPlace: ids,
        }, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data);
                // console.log(res.data.content[0].monitorings[0].fullName);
                // setSize(res.data.size)
                // setData(res.data)
                // setDataOut(res.data.content)
                // setDataIn(dataOut.monitorings)
                setOpenTable(true)
                setAllData(res.data)
                document.querySelector('.newFormFunc').reset();
                Alert(setAlert, "success", "Malumot rezalutsiyaga muvaffaqiyatli yuborildi");
                setFile(null);
            })
            .catch(err => {
                console.log(err.response);
                Alert(setAlert, "warning", err?.response?.data);
            })
        console.log({
            cardId: cardId,
            cardTypeId: kart[0].value,
            endDay: endDay !== '' ? endDay : '',
            startDay: startDay !== '' ? startDay : '',
            workPlace: ids,
        })

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

    const all = () => {

        const ids = JSON.parse(localStorage.getItem("ids"));
        let card1 = document.querySelector('.card1')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let korrespondent1 = document.querySelector('.korrespondent1')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let korrespondent2 = document.querySelector('.korrespondent2')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let chiquvchiSana = document.querySelector('.chiquvchiSana').value;
        let ruyxatSana = document.querySelector('.ruyxatSana').value;


        // kartochkani olish
        let kart = cardsName.filter((c, i) => {
            if (c.label === card1) {
                return c;
            }
        })

        axiosInstance.post("monitoring/cardType" ,{
            cardId: cardId,
            cardTypeId: kart[0].value,
            endDay: endDay !== '' ? endDay : '',
            startDay: startDay !== '' ? startDay : '',
            workPlace: ids,
            page:-1
        }, {
            headers: {
                Authorization: 'Bearer ' + currentUser
            }
        })
            .then(res => {
                setAllData(res.data);
                console.log("allData", res.data);
                setOpenTable(true)
            })
            .catch(err => {
                console.log(err.response);
            })
        console.log(
            {
                cardId: cardId,
                cardTypeId: kart[0].value,
                endDay: endDay !== '' ? endDay : '',
                startDay: startDay !== '' ? startDay : '',
                workPlace: ids,
                page:-1
            }
        )
    }

    const barchasiToExcel = () => {
        // axiosInstance.get("monitoring/umumiy/" + ids, {
        //     headers: {
        //         Authorization: 'Bearer ' + currentUser
        //     }
        // })
        //     .then(res => {
        //         setAllData(res.data);
        //         console.log("allData", res.data);
        //     })
        //     .catch(err => {
        //         console.log(err.response);
        //     })

    }
    const izlashToExcel = () => {

    }


    return (
        <div className="content mb-5">

            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase"}}>Umumiy hisobot</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <NavbarContentMonitoring/>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        {/* <!-- Table Componet  --> */}
                        <div className="card">
                            <div className="card-body" style={{padding: "30px"}}>
                                <form onSubmit={hujjatQushish} className="newFormFunc mb-3">
                                    <div className="row row-date flex-wrap">
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <Select
                                                            required={true}
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
                                                            required={true}
                                                            options={cardsName}
                                                            placeholder="Xujjat Turi"
                                                            onChange={notParentsCardClick1}
                                                            className="card1"
                                                            isClearable={true}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            {/*<div className="form-group form-group-floating row mb-0">*/}
                                            {/*    <div className="col-lg-12">*/}
                                            {/*        <Select*/}
                                            {/*            options={cardsName1}*/}
                                            {/*            // onChange={notParentsCardClick2}*/}
                                            {/*            placeholder="Korrespondent1"*/}
                                            {/*            className='korrespondent1'*/}
                                            {/*            isClearable={true}*/}
                                            {/*        />*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            <div className="selectCheckBox">
                                                <MultiSelectComponent id="mtselement"
                                                                      className="korrespondent1 "
                                                                      style={{marginBottom: '0 !important'}}
                                                                      onChange={changeHandler}
                                                                      popupHeight='500px'
                                                                      fields={fields1}
                                                                      dataSource={cardsName1}
                                                                      placeholder="Yo'nalishni tanlang"
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
                                                    <Select
                                                        options={korrespondent}
                                                        placeholder="Korrespondent2"
                                                        className='korrespondent2'
                                                        isClearable={true}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row mb-0">
                                                <div className="col-lg-12">
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
                                                            // placeholder="Chiquvchi № /sana"
                                                                    showYearDropdown scrollableMonthYearDropdown/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row mb-0">
                                                <div className="col-lg-12">
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
                                                            // placeholder="Chiquvchi № /sana"
                                                                    showYearDropdown scrollableMonthYearDropdown/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 d-flex align-items-center">
                                            <button className="btn btn-primary mr-3 btn-lg h-100" style={{width: "33%"}}
                                                    type={'submit'}>Izlash
                                            </button>
                                            <button className="btn btn-primary mr-3 btn-lg h-100" style={{width: "33%"}}
                                                    onClick={all}>Barchasi
                                            </button>
                                            <div className="btn-group h-100" style={{width: "33%"}}>
                                                <button type="button" className="btn btn-primary dropdown-toggle btn-lg"
                                                        data-toggle="dropdown">Export
                                                </button>

                                                <div className="dropdown-menu dropdown-menu-right">

                                                    <ReactHTMLTableToExcel
                                                        id="test-table-xls-button"
                                                        className="icon-menu7 download-table-xls-button dropdown-item"
                                                        table="table-to-xls"
                                                        filename="tablexls"
                                                        sheet="tablexls"
                                                        onClick={izlashToExcel}
                                                        buttonText="EXCEL"/>

                                                    {/* <span className="dropdown-item" onClick={exportReportToExcel}><i className="icon-menu7"></i> EXCEL</span> */}
                                                    {/*<ReactHTMLTableToExcel*/}
                                                    {/*    id="test-table-xls1-button"*/}
                                                    {/*    className="icon-menu7 download-table-xls1-button dropdown-item"*/}
                                                    {/*    table="table-to-xls"*/}
                                                    {/*    filename="tablexls"*/}
                                                    {/*    sheet="tablexls"*/}
                                                    {/*    onClick={barchasiToExcel}*/}
                                                    {/*    buttonText="EXCEL umumiy"/>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                {
                                    openTable === true && (
                                        <div style={{overflow: "auto"}} className="table-responsive">
                                            <table id="table-to-xls"
                                                   className="table table-bordered table-striped table-hover Tab my-3">
                                                <thead>
                                                <tr className="tr text-black text-center tr"
                                                    style={{background: "#DCE6F0"}}>
                                                    <th className="foiz tr" rowSpan="5">№</th>
                                                    <th rowSpan="5" className="Name tr">Kotibiyatlar</th>
                                                    <th rowSpan="3" className={'tr'}>Jami kelgan hujjatlar</th>
                                                    {/*<th colSpan={allData?.umumiyMonitoring?.parentCard.length * 6}>SH U N D A N</th>*/}
                                                </tr>
                                                <tr className="text-black text-center tr" style={{background: "#DCE6F0"}}>
                                                    <th rowSpan="2"
                                                        className={'tr'}>{allData?.umumiyMonitoring?.parentCard.name}</th>
                                                    <th className="jami-foiz tr" rowSpan="2">Jamiga nisbatan % hisobida</th>
                                                    <th className={'tr'} style={{background: '#DCE6F0'}}
                                                        colSpan={allData?.umumiyMonitoring?.parentCard.childCard.length * 2}>Shu
                                                        jumladan
                                                    </th>
                                                </tr>

                                                <tr className="text-black text-center tr" style={{background: "#DCE6F0"}}>
                                                    {allData?.umumiyMonitoring?.parentCard?.childCard.map((element2, index) => {
                                                        return (
                                                            <th key={Math.random()} className="text-deg-270 tr" colSpan="2"
                                                                style={{background: "#F1DCDB"}}>{element2.name}</th>
                                                        )
                                                    })}
                                                </tr>
                                                <tr className="tr text-black text-center" style={{background: "#DCE6F0"}}>
                                                    <th className="jami-foiz tr"
                                                        rowSpan="2">{allData?.umumiyMonitoring?.jamiKelgan}</th>

                                                    {
                                                        <>
                                                            <th className="degre tr" style={{background: "#DCE6F0"}}
                                                                rowSpan="2">{allData?.umumiyMonitoring?.parentCard.soni}</th>
                                                            <th className="jami-foiz tr" style={{background: '#DCE6F0'}}
                                                                rowSpan="2">{allData?.umumiyMonitoring?.parentCard.foizi}</th>

                                                            {allData?.umumiyMonitoring?.parentCard?.childCard.map((element2, index) => {
                                                                return (
                                                                    <th colSpan="2" className={'tr'}>{index + 1}</th>
                                                                )
                                                            })}
                                                        </>
                                                    }
                                                </tr>
                                                <tr className="text-black text-center tr" style={{background: "#7cdaf1b5"}}>

                                                    {allData?.umumiyMonitoring?.parentCard?.childCard.map((element2) => {
                                                        return (
                                                            <>
                                                                <th className="Soni tr"
                                                                    style={{background: "#DCE6F0"}}>{element2.soni}</th>
                                                                <th className="foiz tr"
                                                                    style={{background: "#DCE6F0"}}>{element2.percentage}%
                                                                </th>
                                                            </>
                                                        )
                                                    })}

                                                </tr>
                                                </thead>

                                                {allData?.departmentMonitoring?.map((element, index) => {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td style={{textAlign: "center", background: '#C5D9F1'}}
                                                                    className={'tr'}>{index + 1}</td>
                                                                <td width="504" height="35" className={'tr'}
                                                                    style={{
                                                                        textAlign: "left",
                                                                        fontSize: '16px',
                                                                        background: '#C5D9F1'
                                                                    }}>
                                                                    <strong data-toggle="collapse"
                                                                            href={`#ib${index}`}>{element.departmentName}</strong>
                                                                </td>
                                                                <td className={'tr'}
                                                                    style={{
                                                                        textAlign: "center",
                                                                        background: '#C5D9F1'
                                                                    }}>{element?.umumiyMonitoringDepartmentUchun?.jamiKelgan}</td>


                                                                <td className={'tr'}
                                                                    style={{
                                                                        textAlign: "center",
                                                                        background: '#C5D9F1'
                                                                    }}>{element?.umumiyMonitoringDepartmentUchun?.parentCard.soni}</td>
                                                                <td className={'tr'}
                                                                    style={{
                                                                        textAlign: "center",
                                                                        background: '#C5D9F1'
                                                                    }}>{element?.umumiyMonitoringDepartmentUchun?.parentCard.foizi}</td>

                                                                {element?.umumiyMonitoringDepartmentUchun?.parentCard.childCard.map((element3) => {
                                                                    return (
                                                                        <>
                                                                            <td className={'tr'}
                                                                                style={{
                                                                                    textAlign: "center",
                                                                                    background: '#C5D9F1'
                                                                                }}>{element3.soni}</td>
                                                                            <td className={'tr'}
                                                                                style={{
                                                                                    textAlign: "center",
                                                                                    background: '#C5D9F1'
                                                                                }}>{element3.percentage}</td>
                                                                        </>
                                                                    )
                                                                })}
                                                            </tr>
                                                            <tbody id={`ib${index}`} className="collapse">

                                                            {element?.umumiyMonitoringForWorlkers.map((person, index1) => {
                                                                return (
                                                                    <tr className="table-secondarya tr">
                                                                        <td className={'tr'}
                                                                            style={{textAlign: "center"}}>{index1 + 1}</td>
                                                                        <td className={'tr'}>{person.fullname}</td>
                                                                        <td className="text-center tr"> {person.umumiyMonitoringDepartmentUchun.jamiKelgan} </td>


                                                                        <td className="text-center tr">{person?.umumiyMonitoringDepartmentUchun?.parentCard.soni}</td>
                                                                        <td className="text-center tr">{person?.umumiyMonitoringDepartmentUchun?.parentCard.foizi}</td>

                                                                        {person?.umumiyMonitoringDepartmentUchun?.parentCard.childCard.map((element2) => {
                                                                            return (
                                                                                <>
                                                                                    <td className="text-center tr">{element2.soni}</td>
                                                                                    <td className="text-center tr">{element2.percentage}</td>
                                                                                </>
                                                                            )
                                                                        })}
                                                                    </tr>
                                                                )
                                                            })
                                                            }
                                                            </tbody>
                                                        </>
                                                    )
                                                })
                                                }

                                            </table>
                                            {/*<table id="table-to-xls1"*/}
                                            {/*       className="table table-bordered table-striped table-hover Tab my-3">*/}
                                            {/*    <thead>*/}
                                            {/*    <tr className="tr text-black text-center tr"*/}
                                            {/*        style={{background: "#DCE6F0"}}>*/}
                                            {/*        <th className="foiz tr" rowSpan="5">№</th>*/}
                                            {/*        <th rowSpan="5" className="Name tr">Kotibiyatlar</th>*/}
                                            {/*        <th rowSpan="3" className={'tr'}>Jami kelgan hujjatlar</th>*/}
                                            {/*        /!*<th colSpan={allData?.umumiyMonitoring?.parentCard.length * 6}>SH U N D A N</th>*!/*/}
                                            {/*    </tr>*/}
                                            {/*    <tr className="text-black text-center tr" style={{background: "#DCE6F0"}}>*/}
                                            {/*        <th rowSpan="2"*/}
                                            {/*            className={'tr'}>{allData?.umumiyMonitoring?.parentCard.name}</th>*/}
                                            {/*        <th className="jami-foiz tr" rowSpan="2">Jamiga nisbatan % hisobida</th>*/}
                                            {/*        <th className={'tr'} style={{background: '#DCE6F0'}}*/}
                                            {/*            colSpan={allData?.umumiyMonitoring?.parentCard.childCard.length * 2}>Shu*/}
                                            {/*            jumladan*/}
                                            {/*        </th>*/}
                                            {/*    </tr>*/}

                                            {/*    <tr className="text-black text-center tr" style={{background: "#DCE6F0"}}>*/}
                                            {/*        {allData?.umumiyMonitoring?.parentCard?.childCard.map((element2, index) => {*/}
                                            {/*            return (*/}
                                            {/*                <th key={Math.random()} className="text-deg-270 tr" colSpan="2"*/}
                                            {/*                    style={{background: "#F1DCDB"}}>{element2.name}</th>*/}
                                            {/*            )*/}
                                            {/*        })}*/}
                                            {/*    </tr>*/}
                                            {/*    <tr className="tr text-black text-center" style={{background: "#DCE6F0"}}>*/}
                                            {/*        <th className="jami-foiz tr"*/}
                                            {/*            rowSpan="2">{allData?.umumiyMonitoring?.jamiKelgan}</th>*/}

                                            {/*        {*/}
                                            {/*            <>*/}
                                            {/*                <th className="degre tr" style={{background: "#DCE6F0"}}*/}
                                            {/*                    rowSpan="2">{allData?.umumiyMonitoring?.parentCard.soni}</th>*/}
                                            {/*                <th className="jami-foiz tr" style={{background: '#DCE6F0'}}*/}
                                            {/*                    rowSpan="2">{allData?.umumiyMonitoring?.parentCard.foizi}</th>*/}

                                            {/*                {allData?.umumiyMonitoring?.parentCard?.childCard.map((element2, index) => {*/}
                                            {/*                    return (*/}
                                            {/*                        <th colSpan="2" className={'tr'}>{index + 1}</th>*/}
                                            {/*                    )*/}
                                            {/*                })}*/}
                                            {/*            </>*/}
                                            {/*        }*/}
                                            {/*    </tr>*/}
                                            {/*    <tr className="text-black text-center tr" style={{background: "#7cdaf1b5"}}>*/}

                                            {/*        {allData?.umumiyMonitoring?.parentCard?.childCard.map((element2) => {*/}
                                            {/*            return (*/}
                                            {/*                <>*/}
                                            {/*                    <th className="Soni tr"*/}
                                            {/*                        style={{background: "#DCE6F0"}}>{element2.soni}</th>*/}
                                            {/*                    <th className="foiz tr"*/}
                                            {/*                        style={{background: "#DCE6F0"}}>{element2.percentage}%*/}
                                            {/*                    </th>*/}
                                            {/*                </>*/}
                                            {/*            )*/}
                                            {/*        })}*/}

                                            {/*    </tr>*/}
                                            {/*    </thead>*/}

                                            {/*    {allData?.departmentMonitoring?.map((element, index) => {*/}
                                            {/*        return (*/}
                                            {/*            <>*/}
                                            {/*                <tr>*/}
                                            {/*                    <td style={{textAlign: "center", background: '#C5D9F1'}}*/}
                                            {/*                        className={'tr'}>{index + 1}</td>*/}
                                            {/*                    <td width="504" height="35" className={'tr'}*/}
                                            {/*                        style={{*/}
                                            {/*                            textAlign: "left",*/}
                                            {/*                            fontSize: '16px',*/}
                                            {/*                            background: '#C5D9F1'*/}
                                            {/*                        }}>*/}
                                            {/*                        <strong data-toggle="collapse"*/}
                                            {/*                                href={`#ib${index}`}>{element.departmentName}</strong>*/}
                                            {/*                    </td>*/}
                                            {/*                    <td className={'tr'}*/}
                                            {/*                        style={{*/}
                                            {/*                            textAlign: "center",*/}
                                            {/*                            background: '#C5D9F1'*/}
                                            {/*                        }}>{element?.umumiyMonitoringDepartmentUchun?.jamiKelgan}</td>*/}


                                            {/*                    <td className={'tr'}*/}
                                            {/*                        style={{*/}
                                            {/*                            textAlign: "center",*/}
                                            {/*                            background: '#C5D9F1'*/}
                                            {/*                        }}>{element?.umumiyMonitoringDepartmentUchun?.parentCard.soni}</td>*/}
                                            {/*                    <td className={'tr'}*/}
                                            {/*                        style={{*/}
                                            {/*                            textAlign: "center",*/}
                                            {/*                            background: '#C5D9F1'*/}
                                            {/*                        }}>{element?.umumiyMonitoringDepartmentUchun?.parentCard.foizi}</td>*/}

                                            {/*                    {element?.umumiyMonitoringDepartmentUchun?.parentCard.childCard.map((element3) => {*/}
                                            {/*                        return (*/}
                                            {/*                            <>*/}
                                            {/*                                <td className={'tr'}*/}
                                            {/*                                    style={{*/}
                                            {/*                                        textAlign: "center",*/}
                                            {/*                                        background: '#C5D9F1'*/}
                                            {/*                                    }}>{element3.soni}</td>*/}
                                            {/*                                <td className={'tr'}*/}
                                            {/*                                    style={{*/}
                                            {/*                                        textAlign: "center",*/}
                                            {/*                                        background: '#C5D9F1'*/}
                                            {/*                                    }}>{element3.percentage}</td>*/}
                                            {/*                            </>*/}
                                            {/*                        )*/}
                                            {/*                    })}*/}
                                            {/*                </tr>*/}
                                            {/*                <tbody id={`ib${index}`} className="collapse">*/}

                                            {/*                {element?.umumiyMonitoringForWorlkers.map((person, index1) => {*/}
                                            {/*                    return (*/}
                                            {/*                        <tr className="table-secondarya tr">*/}
                                            {/*                            <td className={'tr'}*/}
                                            {/*                                style={{textAlign: "center"}}>{index1 + 1}</td>*/}
                                            {/*                            <td className={'tr'}>{person.fullname}</td>*/}
                                            {/*                            <td className="text-center tr"> {person.umumiyMonitoringDepartmentUchun.jamiKelgan} </td>*/}


                                            {/*                            <td className="text-center tr">{person?.umumiyMonitoringDepartmentUchun?.parentCard.soni}</td>*/}
                                            {/*                            <td className="text-center tr">{person?.umumiyMonitoringDepartmentUchun?.parentCard.foizi}</td>*/}

                                            {/*                            {person?.umumiyMonitoringDepartmentUchun?.parentCard.childCard.map((element2) => {*/}
                                            {/*                                return (*/}
                                            {/*                                    <>*/}
                                            {/*                                        <td className="text-center tr">{element2.soni}</td>*/}
                                            {/*                                        <td className="text-center tr">{element2.percentage}</td>*/}
                                            {/*                                    </>*/}
                                            {/*                                )*/}
                                            {/*                            })}*/}
                                            {/*                        </tr>*/}
                                            {/*                    )*/}
                                            {/*                })*/}
                                            {/*                }*/}
                                            {/*                </tbody>*/}
                                            {/*            </>*/}
                                            {/*        )*/}
                                            {/*    })*/}
                                            {/*    }*/}

                                            {/*</table>*/}
                                        </div>
                                    )
                                }
                            </div>
                            {/* <!-- end Table Components --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}