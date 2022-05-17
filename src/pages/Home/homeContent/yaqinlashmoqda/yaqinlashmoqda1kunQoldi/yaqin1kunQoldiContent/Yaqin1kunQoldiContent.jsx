import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import YaqinlashmoqdaNavbar from "../../yaqinlashmoqdaNavbar/YaqinlashmoqdaNavbar";
import { axiosInstance } from "../../../../../../config";
import { AuthContext } from "../../../../../../context/AuthContext";
import { Alert } from "../../../../../../component/alert/Alert";
import DatePicker from "react-datepicker";

export default function Yaqin1kunQoldiContent({ itemsPerPage }) {
    const { user: currentUser } = useContext((AuthContext))
    const [selected, setSelected] = useState(0);
    const [currentItems, setCurrentItems] = useState(null); // serverdan kelgan malumotlarni shunga saqlaymiz
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [alert, setAlert] = useState({});
    // const [tableData, setTableData] = useState([]);
    const [data, setData] = useState([]);
    const [startDate, setStartDate] = useState();


    // sanani formatlash
    const dateFormat =(date)=>{
        return  date?.slice(8,date.length)+'.'+date?.slice(5,7)+'.'+date?.slice(0,4)
    }

    // pagination
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    useEffect(() => {
        const getData = async () => {
            const res = await axiosInstance.get(`mainPage/remainOneDay/${localStorage.getItem('ids')}`, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
            setData(res.data)
        }
        getData()
    }, []);

    // Invoke when user click to request another page.
    const handlePageClick = async (e) => {
        try {
            const res = await axiosInstance.get(`mainPage/remainOneDay/${JSON.parse(localStorage.getItem('ids'))}?page=${e.selected}`, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
            setData(res.data);
        } catch (error) {
            console.log(error);
        }
    };

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
            Alert(setAlert, "warning", error?.response?.data);
        }
    }


    return (
        <div className="content mb-5">
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>1 kun qoldi</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ paddingTop: "2px" }}>
                    <YaqinlashmoqdaNavbar />
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
                                                        <input type="text" className="first qisqacha1"
                                                            placeholder="REG №" id="qisqacha1"
                                                        />
                                                        <span style={{
                                                            marginLeft: '-20px',
                                                            fontSize: '20px',
                                                            color: 'grey',
                                                            backgroundColor: 'white'
                                                        }}>/</span>
                                                        <div className='changeBox ml-3' style={{ width: '100px' }}>
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
                                {data.content?.length > 0 && (
                                    <ReactPaginate
                                        breakLabel="..."
                                        nextLabel=">>"
                                        onPageChange={handlePageClick}
                                        pageRangeDisplayed={3}
                                        pageCount={data?.totalElements / 20}
                                        previousLabel="<<"
                                        renderOnZeroPageCount={null}
                                        className="paginationUL"
                                        activeClassName="active"
                                        forcePage={selected}
                                    />
                                )}
                                <table className="table table-bordered mb-3 table-striped table-hover Tab" id="myTable">
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center" style={{ height: "45px" }}>
                                            <th style={{ width: "5%" }} className="id">№</th>
                                            <th style={{ width: "10%" }} className="Fayl">Fayl</th>
                                            <th style={{ width: "20%" }} className="korres">Korrespondent</th>
                                            <th style={{ width: "25%" }} className="qisqacha">Qisqacha Ma'lumot</th>
                                            <th style={{ width: "15%" }} className="reg">Reg № / Muddati</th>
                                            <th style={{ width: "20%" }} className="ijrochi">Ijrochi</th>
                                            <th style={{ width: "5%" }} className="text-center harakat">Harakatlar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.content?.map((dat, index) => (
                                            <tr key={index}>
                                                <td className="text-center id">1</td>
                                                <td className="text-color Fayl" style={{ textTransform: "lowercase", wordWrap: "break-word" }} >{dat.hujjatTuri}</td>
                                                <td className="korres" style={{ wordWrap: "break-word" }}>O'zbekiston Respublikasi Prezidenti</td>
                                                {/* <!-- so'zlar 200ta chiqadi --> */}
                                                <td style={{ wordWrap: "break-word" }} className="qisqacha">
                                                    {dat?.malumot}
                                                </td>
                                                <td className="text-center id">
                                                    <span className={'badge badge-primary'}>№ {dat?.journalNumber}</span>
                                                    <hr/>
                                                    <span>{dateFormat(dat?.registratedAt)}</span>
                                                </td>
                                                <td className="text-center ijrochi">
                                                    <p style={{ margin: "0", borderBottomStyle: "dashed", borderColor: "#ddd", paddingBottom: "20px" }}>D.Sodiqov
                                                        <span className="badge badge-danger ml-1">Bajarilmagan</span>
                                                    </p>
                                                    <p style={{ margin: "0", paddingTop: "20px" }}>D.Sodiqov
                                                        <span className="badge badge-primary ml-1">Bajarilgan</span>
                                                    </p>
                                                </td>
                                                <td className="harakat">
                                                    <div className="icon d-flex justify-content-center align-items-center ">
                                                        <Link to="/kiruvchi_bajarish_ijro" className="infoBtn bg-dark" title="Ko'rish" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top">
                                                            <span><i className="icon-eye2"></i></span>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {data.content?.length > 0 && (
                                    <ReactPaginate
                                        breakLabel="..."
                                        nextLabel=">>"
                                        onPageChange={handlePageClick}
                                        pageRangeDisplayed={3}
                                        pageCount={data?.totalElements / 20}
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
        </div >
    )
}