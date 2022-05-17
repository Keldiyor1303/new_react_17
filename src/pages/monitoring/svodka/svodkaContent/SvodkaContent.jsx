import React, {useContext, useEffect, useState} from "react";
import NavbarContentMonitoring from "../../navbarContentMonitoring/NavbarContentMonitoring";
import {axiosInstance} from "../../../../config";
import {AuthContext} from "../../../../context/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SvodkaContent.css"
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import 'jspdf-autotable';


export default function SvodkaContent() {
    const {user: currentUser, dispatch} = useContext(AuthContext);
    const [allData, setAllData] = useState({})

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [startDay, setStartDay] = useState("");
    const [endDay, setEndDay] = useState("");


    useEffect(() => {
        const ids = localStorage.getItem("ids")
        console.log("ids", ids);

        axiosInstance.get("monitoring/umumiy/" + ids, {
            headers: {
                Authorization: 'Bearer ' + currentUser
            }
        })
            .then(res => {
                setAllData(res.data);
                console.log("allData", res.data);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, []);

    const search = () => {
        const ids = localStorage.getItem("ids")
        axiosInstance.post("monitoring/umumiy/" + ids, {
            startDay: startDay,
            endDay: endDay
        }, {
            headers: {
                Authorization: 'Bearer ' + currentUser
            }
        })
            .then(res => {
                setAllData(res.data);
                console.log("allData", res.data);
            })
            .catch(err => {
                console.log(err.response);
            })

        // console.log(startDay, endDay);
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
        const ids = localStorage.getItem("ids")
        console.log("ids", ids);

        axiosInstance.get("monitoring/umumiy/" + ids, {
            headers: {
                Authorization: 'Bearer ' + currentUser
            }
        })
            .then(res => {
                setAllData(res.data);
                console.log("allData", res.data);
            })
            .catch(err => {
                console.log(err.response);
            })
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
                                <div className="row row-date">
                                    <div className="col-lg-4">
                                        <div className="form-group form-group-floating row mb-0">
                                            <div className="col-lg-12">
                                                <div className={'changeBox'} style={{
                                                    height: '100%',
                                                    width: '100%',
                                                    border: '1px solid lightgray',
                                                    borderRadius: '5px',
                                                    '&>input': {border: 'none !important', outline: 'none !important'},
                                                    '&:hover': {border: 'none !important', outline: 'none !important'}
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
                                                    '&>input': {border: 'none !important', outline: 'none !important'},
                                                    '&:hover': {border: 'none !important', outline: 'none !important'}
                                                }}>
                                                    <DatePicker width="100" height="100"
                                                                className={'chiquvchiSana'} id={'chiquvchiSana'}
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
                                                onClick={search}>Izlash
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
                                                    buttonText="EXCEL"/>

                                                {/* <span className="dropdown-item" onClick={exportReportToExcel}><i className="icon-menu7"></i> EXCEL</span> */}
                                                {/* <span className="dropdown-item"><i className="icon-screen-full"></i> PDF</span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{overflow: "auto"}} className="table-responsive">
                                    <table id="table-to-xls"
                                           className="table table-bordered table-striped table-hover Tab my-3">
                                        <thead>
                                        <tr className="tr text-black text-center tr">
                                            <th className="foiz tr" rowSpan="5" style={{background: "#DCE6F0"}}>№</th>
                                            <th rowSpan="5" className="Name tr"
                                                style={{width: "400px", background: "#DCE6F0"}}>Kotibiyatlar
                                            </th>
                                            <th rowSpan="3" className="tr" style={{background: "#DCE6F0"}}>Jami kelgan
                                                hujjatlar
                                            </th>
                                            <th className="tr" colSpan={allData?.umumiyMonitoring?.count}
                                                style={{background: "#DCE6F0"}}>SH U N D A N
                                            </th>
                                        </tr>
                                        <tr className="text-black text-center tr">
                                            {allData?.umumiyMonitoring?.parentCard.map((element, index) => {
                                                return (
                                                    <>
                                                        <th rowSpan="2" className="tr" style={{
                                                            maxHeight: "50px",
                                                            width: "100px",
                                                            textAlign: "center",
                                                            background: "#DA9695"
                                                        }}>{element.name}</th>
                                                        <th className="jami-foiz tr" rowSpan="2"
                                                            style={{width: "150px", background: "#DCE6F0"}}>Jamiga
                                                            nisbatan % hisobida
                                                        </th>
                                                        <th className="tr" colSpan={element.childCard.length * 2}
                                                            style={{
                                                                width: `${element.childCard.length * 250}px`,
                                                                background: "#DCE6F0"
                                                            }}>Shu jumladan
                                                        </th>
                                                    </>
                                                )
                                            })
                                            }
                                        </tr>

                                        <tr className="tr text-black text-center">

                                            {allData?.umumiyMonitoring?.parentCard.map((element) => {
                                                return (
                                                    element?.childCard.map((element2) => {
                                                        return (
                                                            <th key={Math.random()} className="tr" colSpan="2"
                                                                style={{background: "#F1DCDB"}}>{element2.name}</th>
                                                        )
                                                    })
                                                )

                                            })
                                            }
                                        </tr>
                                        <tr className="tr text-black text-center">
                                            <th className="tr jami-foiz" rowSpan="2"
                                                style={{background: "#DCE6F0"}}>{allData?.umumiyMonitoring?.jamiKelgan}</th>

                                            {allData?.umumiyMonitoring?.parentCard.map((element, index) => {
                                                return (
                                                    <>
                                                        <th className="tr degre" rowSpan="2"
                                                            style={{background: "#DCE6F0"}}>{element.soni}</th>
                                                        <th className="tr jami-foiz" rowSpan="2"
                                                            style={{background: "#DCE6F0"}}>{element.foizi}</th>

                                                        {element?.childCard.map((element2, index) => {
                                                            return (
                                                                <th colSpan="2" className="tr"
                                                                    style={{background: "#DCE6F0"}}>{index + 1}</th>
                                                            )
                                                        })}
                                                    </>
                                                )
                                            })
                                            }
                                        </tr>
                                        <tr className="tr text-black text-center">

                                            {allData?.umumiyMonitoring?.parentCard.map((element) => {
                                                return (
                                                    element?.childCard.map((element2) => {
                                                        return (
                                                            <>
                                                                <th className="Soni tr"
                                                                    style={{background: "#DCE6F0"}}>{element2.soni}</th>
                                                                <th className="foiz tr" style={{
                                                                    minWidth: "50px",
                                                                    background: "#DCE6F0"
                                                                }}>{element2.percentage}%
                                                                </th>
                                                            </>
                                                        )
                                                    })
                                                )

                                            })
                                            }
                                        </tr>
                                        </thead>

                                        {allData?.departmentMonitoring?.map((element, index) => {
                                            return (
                                                <>
                                                    <tr className="text-center">
                                                        <td className="tr" style={{
                                                            textAlign: "center",
                                                            background: "#C5D9F1"
                                                        }}>{index + 1}</td>
                                                        <td className="tr text-center" width="504" height="35" style={{
                                                            height: "75px",
                                                            fontSize: "16px",
                                                            background: "#C5D9F1"
                                                        }}>
                                                            <strong className="text-center" data-toggle="collapse"
                                                                    href={`#ib${index}`}>{element.departmentName}</strong>
                                                        </td>
                                                        <td className="tr" style={{
                                                            textAlign: "center",
                                                            background: "#C5D9F1"
                                                        }}>{element?.umumiyMonitoringDepartmentUchun?.jamiKelgan}</td>

                                                        {element?.umumiyMonitoringDepartmentUchun?.parentCard.map((element2) => {
                                                            return (
                                                                <>
                                                                    <td className="tr" style={{
                                                                        textAlign: "center",
                                                                        background: "#C5D9F1"
                                                                    }}>{element2.soni}</td>
                                                                    <td className="tr" style={{
                                                                        textAlign: "center",
                                                                        background: "#C5D9F1"
                                                                    }}>{element2.foizi}%
                                                                    </td>

                                                                    {element2.childCard.map((element3) => {
                                                                        return (
                                                                            <>
                                                                                <td className="tr" style={{
                                                                                    textAlign: "center",
                                                                                    background: "#C5D9F1"
                                                                                }}>{element3.soni}</td>
                                                                                <td className="tr" style={{
                                                                                    textAlign: "center",
                                                                                    background: "#C5D9F1"
                                                                                }}>{element3.percentage}%
                                                                                </td>
                                                                            </>
                                                                        )
                                                                    })}
                                                                </>
                                                            )
                                                        })
                                                        }
                                                    </tr>


                                                    <tbody id={`ib${index}`} className="collapse">

                                                    {element?.umumiyMonitoringForWorlkers.map((person, index) => {
                                                        return (
                                                            <tr className="tr table-secondarya text-center">

                                                                <td className="tr" colSpan="2"
                                                                    style={{paddingLeft: "40px"}}>{index + 1}.{person.fullname}</td>
                                                                <td className="text-center tr"
                                                                    style={{textAlign: "center"}}> {person.umumiyMonitoringDepartmentUchun.jamiKelgan} </td>


                                                                {person?.umumiyMonitoringDepartmentUchun?.parentCard.map((element) => {
                                                                    return (
                                                                        <>
                                                                            <td className="text-center tr"
                                                                                style={{textAlign: "center"}}>{element.soni}</td>
                                                                            <td className="text-center tr"
                                                                                style={{textAlign: "center"}}>{element.foizi}</td>

                                                                            {element?.childCard.map((element2) => {
                                                                                return (
                                                                                    <>
                                                                                        <td className="text-center tr"
                                                                                            style={{textAlign: "center"}}>{element2.soni}</td>
                                                                                        <td className="text-center tr"
                                                                                            style={{textAlign: "center"}}>{element2.percentage}%
                                                                                        </td>
                                                                                    </>
                                                                                )
                                                                            })}
                                                                        </>


                                                                    )
                                                                })
                                                                }
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


                                </div>
                            </div>
                            {/* <!-- end Table Components --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}