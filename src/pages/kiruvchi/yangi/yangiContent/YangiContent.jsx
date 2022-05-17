import React, { useContext, useEffect, useState } from "react";
import ContentNavbar from "../../contentNavbar/ContentNavbar";
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";
import { axiosInstance } from "../../../../config";
import './YangiContent.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Alert } from '../../../../component/alert/Alert';

export default function YangiContent() {
    const { user: currentUser } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [select, setSelect] = useState(0);
    const [startDate, setStartDate] = useState();
    const [alert, setAlert] = useState({ open: false, color: "", text: "" });


    // sanani formatlash
    const dateFormat =(date)=>{
        return  date?.slice(8,date.length)+'.'+date?.slice(5,7)+'.'+date?.slice(0,4)
    }

    // barcha documentni o'qib olish
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axiosInstance.post("search/new", {
                    correspondentName: '',
                    shortDescription: '',
                    out_number: '',
                    out_date: '',
                }, {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                setData(res.data);
            } catch (error) {
                console.log(error.response);
            }
        }
        getData();
    }, [currentUser]);

    const All = async () => {
        try {
            const res = await axiosInstance.post("search/new", {
                correspondentName: '',
                shortDescription: '',
                out_number: '',
                out_date: '',
            }, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
            setData(res.data);
        } catch (error) {
            console.log(error.response);
        }
    }

    // pagination click---------------------------------------------------------------------------
    const handlePageClick = async (e) => {
        try {
            const res = await axiosInstance.post(`search/new/${JSON.parse(localStorage.getItem('ids'))}?page=` + e.selected, {
                correspondentName: '',
                shortDescription: '',
                out_number: '',
                out_date: '',
            }, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
            setData(res.data);
        } catch (error) {
            console.log(error.response);
        }
        setSelect(e.selected);
    };

    // search-------------------------------------------------------------------------------------
    const SearchData = async () => {
        let sana = document.querySelector('.qisqacha2').value;
        let reg = document.querySelector('.qisqacha1').value;
        let korres = document.querySelector('#xujjat').value;
        let malumot = document.querySelector('#korrespondent2').value;

        try {
            const res = await axiosInstance.post(`search/new`, {
                correspondentName: korres,
                shortDescription: malumot,
                out_number: reg,
                out_date: sana,
            }, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
            setData(res.data);
        } catch (error) {
            console.log(error.response);
            Alert(setAlert, "warning", error?.response?.data);
        }
    }

    return (
        <div className="content mb-5">
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Yangi</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ paddingTop: "2px" }}>
                    <ContentNavbar />
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th style={{ width: '350px' }}>
                                                <div
                                                    className="form-group form-group-feedback form-group-feedback-left inp">
                                                    <input type="text" className="form-control form-control-lg"
                                                        // onChange={(e) => setMalumot(e.target.value)}
                                                        id="xujjat"
                                                        placeholder="Korrespondent" />
                                                    <div className="form-control-feedback form-control-feedback-lg">
                                                        <i className="icon-search4"></i>
                                                    </div>
                                                </div>
                                            </th>
                                            <th style={{ width: '350px' }}>
                                                <div
                                                    className="form-group form-group-feedback form-group-feedback-left inp">
                                                    <input type="text" className="form-control form-control-lg"
                                                        id="korrespondent2"
                                                        // onChange={(e) => setKorres(e.target.value)}
                                                        placeholder="Qisqacha Ma'lumot" />
                                                    <div className="form-control-feedback form-control-feedback-lg">
                                                        <i className="icon-search4"></i>
                                                    </div>
                                                </div>
                                            </th>
                                            <th style={{ width: '350px' }}>
                                                <div
                                                    className="form-group form-group-feedback form-group-feedback-left inp hmmm ">
                                                    <div
                                                        className="inputBox d-flex align-items-center justify-content-end input-border">
                                                        <input type="text" className="first qisqacha1" placeholder="REG №" id="qisqacha1"
                                                        />
                                                        <span style={{
                                                            marginLeft: '-20px',
                                                            fontSize: '20px',
                                                            color: 'grey',
                                                            backgroundColor: 'white'
                                                        }}>/</span>
                                                        <div className={'changeBox ml-3'} style={{ width: '100px' }}>
                                                            <DatePicker
                                                                width="100"
                                                                className={'qisqacha2'}
                                                                id={'qisqacha2'}
                                                                selected={startDate}
                                                                onChange={(date) => setStartDate(date)}
                                                                dateFormat={'yyyy-MM-dd'}
                                                                isClearable
                                                                showYearDropdown
                                                                scrollableMonthYearDropdown
                                                                placeholderText="Sana"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-control-feedback form-control-feedback-lg">
                                                        <i className="icon-search4"></i>
                                                    </div>

                                                </div>
                                            </th>
                                            <th style={{ width: '350px' }}>
                                                <div
                                                    className="form-group form-group-feedback form-group-feedback-left inp buttonsinput">
                                                    <button className="btn btn-primary mr-2"
                                                        onClick={SearchData}>Search
                                                    </button>
                                                    <button className="btn btn-primary mr-2"
                                                        onClick={All}>Barchasi
                                                    </button>
                                                    <button className="btn btn-primary "
                                                        data-toggle="dropdown"><i className="icon-menu9"
                                                            style={{ fontSize: "18px" }}></i>
                                                    </button>

                                                    <div className="dropdown-menu">
                                                        <input type="submit"
                                                            className="btn btn-white dropdown-item  w-100 myBtn"
                                                            name="id" value="Id" />
                                                        <input type="submit"
                                                            className="btn btn-white dropdown-item  w-100 myBtn"
                                                            name="xujjat" value="Xijjat Turi" />
                                                        <input type="submit"
                                                            className="btn btn-white dropdown-item  w-100 myBtn"
                                                            name="korres" value="Korrespondent" />
                                                        <input type="submit"
                                                            className="btn btn-white dropdown-item  w-100 myBtn"
                                                            name="qiqacha" value="Qisqacha Ma'lumot" />
                                                        <input type="submit"
                                                            className="btn btn-white dropdown-item  w-100 myBtn"
                                                            name="chiquvchi" value="Chiquvchi № / Sana" />
                                                        <input type="submit"
                                                            className="btn btn-white dropdown-item  w-100 myBtn"
                                                            name="reg" value="Reg № / Sana" />
                                                        <input type="submit"
                                                            className="btn btn-white dropdown-item  w-100 myBtn"
                                                            name="harakat" value="Harakatlar" />
                                                    </div>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel=">>"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={3}
                                    pageCount={data?.allExistPageCount}
                                    previousLabel="<<"
                                    renderOnZeroPageCount={null}
                                    className="paginationUL"
                                    activeClassName="active"
                                    forcePage={select}
                                />
                                <table id="myTable" className="table table-bordered table-striped table-hover Tab mb-3" >
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center" style={{ height: "45px" }}>
                                            <th style={{ width: "5%" }} className="id">№</th>
                                            <th style={{ width: "20%" }} className="xujjat">Xujjat Turi</th>
                                            <th style={{ width: "25%" }} className="korres">Korrespondent</th>
                                            <th style={{ width: "30%" }} className="qiqacha">Qisqacha Ma'lumot</th>
                                            <th style={{ width: "15%" }} className="chiquvchi">Chiquvchi № / Sana</th>
                                            <th style={{ width: "5%" }} className="text-center harakat">Harakatlar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.content?.map((dat, index) => (
                                            <tr key={index} id="kor" >
                                                <td className="text-center id">{index + 1}</td>
                                                <td className="text-color xujjat" id='xujjat' style={{ cursor: "pointer", wordWrap: "break-word" }}>
                                                    {dat?.card?.cardName}
                                                </td>
                                                <td style={{ textAlign: "justify", wordWrap: "break-word" }} className="korres" id='td'>
                                                    {dat?.correspondentName}
                                                </td>
                                                <td id="qs" className="qiqacha" style={{ wordWrap: "break-word" }}>
                                                    {dat?.shortDescription}
                                                </td>
                                                <td className="text-center chiquvchi">
                                                    <div className="badge badge-primary">№ {dat?.outNumber}</div>
                                                    <hr />
                                                    {dateFormat(dat?.deadline)}
                                                </td>
                                                <td className="harakat">
                                                    <div className="icon d-flex justify-content-center align-items-center">
                                                        <Link to={`/kiruvchi/y/sozlash/${dat?.id}/yangi/${dat?.newDocId}`} className="infoBtn bg-dark" data-popup="tooltip" title="O'zgartirish">
                                                            <i className="icon-pencil5"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel=">>"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={3}
                                    pageCount={data?.allExistPageCount}
                                    previousLabel="<<"
                                    renderOnZeroPageCount={null}
                                    className="paginationUL"
                                    activeClassName="active"
                                    forcePage={select}
                                />
                            </div>
                        </div>
                    </div>
                    {/* alert */}
                    {alert.open && (
                        <div
                            className={`alert alert-${alert.color} alertNotice alert-styled-left alert-dismissible`}>
                            <span className="font-weight-semibold">{alert.text}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}