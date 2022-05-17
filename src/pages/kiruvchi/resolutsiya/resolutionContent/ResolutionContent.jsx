import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ContentNavbar from "../../contentNavbar/ContentNavbar";
import ReactPaginate from 'react-paginate';
import {axiosInstance, url} from '../../../../config';
import {AuthContext} from "../../../../context/AuthContext";
import jwtDecode from "jwt-decode";
import './ResolutionContent.css'
import {Alert} from "../../../../component/alert/Alert";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ResolutionContent() {
    const {user: currentUser} = useContext(AuthContext);
    const [selected, setSelected] = useState(0);
    const [data, setData] = useState([]);
    const [ranks, setRanks] = useState([]);
    const [alert, setAlert] = useState({});
    const [startDate, setStartDate] = useState();


    // sanani formatlash
    const dateFormat = (date) => {
        return date?.slice(8, date?.length) + '.' + date?.slice(5, 7) + '.' + date?.slice(0, 4)
    }
    // permission ni aniqlash-----------------------------------------------------------------------
    useEffect(() => {
        let workPlaces = JSON.parse(jwtDecode(currentUser).workPlaces)
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
        // setWorkPlacesId(arr);
        setRanks(arr1);
        // setPermission(arr2);
    }, [currentUser]);


    // malumotni o'qib olish
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axiosInstance.post("search/resolution/" + JSON.parse(localStorage.getItem('ids')), {
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

    console.log(data);

    const All = async () => {
        try {
            const res = await axiosInstance.post("search/resolution/" + JSON.parse(localStorage.getItem('ids')), {
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


    const handlePageClick = async (e) => {
        try {
            const res = await axiosInstance.post(`search/resolution/` + JSON.parse(localStorage.getItem('ids') + "?page=" + e.selected, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            }))
            setData(res.data);
        } catch (error) {
            console.log(error.response);
        }
    }

    // search-------------------------------------------------------------------------------------
    const SearchData = async () => {
        let sana = document.querySelector('.qisqacha2').value;
        let reg = document.querySelector('.qisqacha1').value;
        let korres = document.querySelector('#xujjat').value;
        let malumot = document.querySelector('#korrespondent2').value;

        try {
            const res = await axiosInstance.post(`search/resolution/` + JSON.parse(localStorage.getItem('ids')), {
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
            // Alert(setAlert, "warning", error?.response?.data);
        }
    }

    return (
        <div className="content mb-5">
            <h3 style={{margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase"}}>Rezalutsiya</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink"
                    style={{paddingTop: "2px"}}>
                    <ContentNavbar/>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        <div className="card">
                            <div className="card-body" style={{padding: "30px"}}>
                                <table>
                                    <thead>
                                    <tr>
                                        <th style={{width: '350px'}}>
                                            <div
                                                className="form-group form-group-feedback form-group-feedback-left inp">
                                                <input type="text" className="form-control form-control-lg"
                                                    // onChange={(e) => setMalumot(e.target.value)}
                                                       id="xujjat"
                                                       placeholder="Korrespondent"/>
                                                <div className="form-control-feedback form-control-feedback-lg">
                                                    <i className="icon-search4"></i>
                                                </div>
                                            </div>
                                        </th>
                                        <th style={{width: '350px'}}>
                                            <div
                                                className="form-group form-group-feedback form-group-feedback-left inp">
                                                <input type="text" className="form-control form-control-lg"
                                                       id="korrespondent2"
                                                    // onChange={(e) => setKorres(e.target.value)}
                                                       placeholder="Qisqacha Ma'lumot"/>
                                                <div className="form-control-feedback form-control-feedback-lg">
                                                    <i className="icon-search4"></i>
                                                </div>
                                            </div>
                                        </th>
                                        <th style={{width: '350px'}}>
                                            <div
                                                className="form-group form-group-feedback form-group-feedback-left inp hmmm ">
                                                <div
                                                    className="inputBox d-flex align-items-center justify-content-end input-border">
                                                    <input type="text" className="first qisqacha1"
                                                           placeholder="REG №" id="qisqacha1"
                                                    />
                                                    <span style={{
                                                        marginLeft: '-20px',
                                                        fontSize: '20px',
                                                        color: 'grey',
                                                        backgroundColor: 'white'
                                                    }}>/</span>
                                                    <div className='changeBox ml-3' style={{width: '100px'}}>
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
                                        <th style={{width: '350px'}}>
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
                                                                                  style={{fontSize: "18px"}}></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <input type="submit"
                                                           className="btn btn-white dropdown-item  w-100 myBtn"
                                                           name="id" value="Id"/>
                                                    <input type="submit"
                                                           className="btn btn-white dropdown-item  w-100 myBtn"
                                                           name="xujjat" value="Xijjat Turi"/>
                                                    <input type="submit"
                                                           className="btn btn-white dropdown-item  w-100 myBtn"
                                                           name="korres" value="Korrespondent"/>
                                                    <input type="submit"
                                                           className="btn btn-white dropdown-item  w-100 myBtn"
                                                           name="qiqacha" value="Qisqacha Ma'lumot"/>
                                                    <input type="submit"
                                                           className="btn btn-white dropdown-item  w-100 myBtn"
                                                           name="chiquvchi" value="Chiquvchi № / Sana"/>
                                                    <input type="submit"
                                                           className="btn btn-white dropdown-item  w-100 myBtn"
                                                           name="reg" value="Reg № / Sana"/>
                                                    <input type="submit"
                                                           className="btn btn-white dropdown-item  w-100 myBtn"
                                                           name="harakat" value="Harakatlar"/>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    </thead>
                                </table>
                                {/*pagination*/}
                                {data?.content?.length > 0 && (
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
                                        forcePage={selected}
                                    />
                                )}
                                <table id="myTable" data-paging="true" data-toggle="table" data-search="true"
                                       className="table table-bordered table-striped table-hover table-responsive Tab mb-3">
                                    <thead>
                                    <tr className="bg-dark text-white NavLink text-center" style={{height: "45px"}}>
                                        <th style={{width: "5%"}} className="id">№</th>
                                        <th style={{width: "10%"}} className="xujjat">Fayl</th>
                                        <th style={{width: "20%"}} className="korres">Korrespondent</th>
                                        <th style={{width: "30%"}} className="qiqacha">Qisqacha Ma'lumot</th>
                                        <th style={{width: "15%"}} className="chiquvchi">Chiquvchi № / Sana</th>
                                        <th style={{width: "15%"}} className="reg">Reg № / Sana</th>
                                        <th style={{width: "5%"}} className="text-center harakat">Harakatlar</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {data?.content?.map((dat, index) => (
                                        <tr key={index} id="kor">
                                            <td className="text-center id">{index + 1}</td>
                                            <td className="text-color xujjat" id='xujjat'
                                                style={{cursor: "pointer", wordWrap: "break-word"}}>
                                                {dat?.files?.length > 0 && dat?.files?.map((hujjat, index) => (
                                                    <div key={index}>
                                                        {hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "pdf" ? (
                                                            <span
                                                                className="d-flex align-items-center cursor-pointer mb-1">
                                                                    <i className="far fa-file-pdf mr-1 fa-2x pdfIcon"
                                                                       style={{fontSize: "20px"}}/>
                                                                    <a className="pt-1"
                                                                       href={url + "/api/file/view/" + hujjat?.generatedName}
                                                                       target="_blank" rel="noopener noreferrer">PDF FILE</a>
                                                                </span>
                                                        ) : (hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "doc" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "docx" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "vnd.openxmlformats-officedocument.wordprocessingml.document") ? (
                                                            <span
                                                                className="d-flex align-items-center cursor-pointer mb-1">
                                                                    <i className="far fa-file-word mr-1 fa-2x wordIcon"
                                                                       style={{fontSize: "20px"}}/>
                                                                    <a className="pt-1"
                                                                       href={url + "/api/file/view/" + hujjat?.generatedName}
                                                                       target="_blank" rel="noopener noreferrer">WORD FILE</a>
                                                                </span>
                                                        ) : (hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "xls" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "xlsx" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "vnd.openxmlformats-officedocument.spreadsheetml.sheet") ? (
                                                            <span
                                                                className="d-flex align-items-center cursor-pointer mb-1">
                                                                    <i className="far fa-file-excel mr-1 fa-2x excelIcon"
                                                                       style={{fontSize: "20px"}}/>
                                                                    <a className="pt-1"
                                                                       href={url + "/api/file/view/" + hujjat?.generatedName}
                                                                       target="_blank" rel="noopener noreferrer">EXCEL FILE</a>
                                                                </span>
                                                        ) : (hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "ppt" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "pptx" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "vnd.openxmlformats-officedocument.presentationml.presentation") ? (
                                                            <span
                                                                className="d-flex align-items-center cursor-pointer mb-1">
                                                                    <i className="far fa-file-powerpoint mr-1 fa-2x pptIcon"
                                                                       style={{fontSize: "20px"}}/>
                                                                    <a className="pt-1"
                                                                       href={url + "/api/file/view/" + hujjat?.generatedName}
                                                                       target="_blank" rel="noopener noreferrer">POWERPOINT FILE</a>
                                                                </span>
                                                        ) : (
                                                            <span
                                                                className="d-flex align-items-center cursor-pointer mb-1">
                                                                    <i className="far fa-file-archive mr-1 fa-2x rarIcon"
                                                                       style={{fontSize: "20px"}}></i>
                                                                    <a className="pt-1"
                                                                       href={url + "/api/file/view/" + hujjat?.generatedName}
                                                                       target="_blank" rel="noopener noreferrer">ZIP, RAR FILE</a>
                                                                </span>
                                                        )}
                                                    </div>
                                                ))}
                                            </td>
                                            <td style={{wordWrap: "break-word"}} className="korres" id='td'>
                                                {dat?.correspondentName}
                                            </td>
                                            <td id="qs" data-maxlength="5" className="qiqacha"
                                                style={{wordWrap: "break-word"}}>
                                                {dat?.shortDescription}
                                            </td>
                                            <td className="text-center chiquvchi" style={{wordWrap: "break-word"}}>
                                                <div className="badge badge-primary">№ {dat?.outNumber}</div>
                                                <hr/>
                                                {dateFormat(dat?.outDate)}
                                            </td>
                                            <td className="text-center reg" style={{wordWrap: "break-word"}}>
                                                <div className="badge badge-primary">№{dat?.journalNumber}</div>
                                                <hr/>
                                                {dateFormat(dat?.registratedAt)}
                                            </td>
                                            <td className="harakat">
                                                <div className="icon d-flex justify-content-center align-items-center">
                                                    <div
                                                        className="icon d-flex justify-content-center align-items-center">
                                                        <Link to={`/kiruvchi_resolution_kurish/${dat?.id}`}
                                                              className="infoBtn bg-dark" title="Ko'rish"
                                                              data-bs-toggle="tooltip" data-popup="tooltip"
                                                              data-bs-placement="top">
                                                            <span><i className="icon-eye2"></i></span>
                                                        </Link>
                                                        {(ranks.length > 0 && ranks.includes(8)) && (
                                                            <Link to={`/kiruvchi/sozlash/${dat?.id}/resolution`}
                                                                  className="infoBtn bg-dark" data-popup="tooltip"
                                                                  title="O'zgartirish">
                                                                <i className="icon-pencil5"></i>
                                                            </Link>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                {data?.content?.length > 0 && (
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
                                        forcePage={selected}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}