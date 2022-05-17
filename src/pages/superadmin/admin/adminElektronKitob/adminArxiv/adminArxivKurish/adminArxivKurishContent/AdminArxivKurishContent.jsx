import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import { AuthContext } from "../../../../../../../context/AuthContext";
import { axiosInstance } from "../../../../../../../config";
import { Alert } from "../../../../../../../component/alert/Alert";
import AdminElektronKitobNavbar from "../../../adminElektronKitobNavbar/AdminElektronKitobNavbar";
let data = [
    {
        id: 1,
        hujjatTuri: "CHIQUVCHI1",
        korrespondent: "O'zbekiston Respublikasi Prezidenti",
        malumot: "'Ўзбекистон Республикаси Адлия вазирлигининг хатида (2021 йил 28 июнь № 8/5-1/3239-сонли) илова илинган Ўзбекистон Республикаси Президенти Фармони ва қарори лойиҳалари комплекслар бўлинмаларида муҳокама қилинсин ҳамда кенг жамоатчиликка етказилиши таъминлансин. Б.Норбоевга Ташкиллаштириш ва назорат учун.'",
        date: "7.05.2022",
        harakatlar: ""
    },
    {
        id: 2,
        hujjatTuri: "CHIQUVCHI2",
        korrespondent: "O'zbekiston Respublikasi Prezidenti",
        malumot: "'Ўзбекистон Республикаси Адлия вазирлигининг хатида (2021 йил 28 июнь № 8/5-1/3239-сонли) илова илинган Ўзбекистон Республикаси Президенти Фармони ва қарори лойиҳалари комплекслар бўлинмаларида муҳокама қилинсин ҳамда кенг жамоатчиликка етказилиши таъминлансин. Б.Норбоевга Ташкиллаштириш ва назорат учун.'",
        date: "7.05.2022",
        harakatlar: ""
    },
    {
        id: 3,
        hujjatTuri: "CHIQUVCHI3",
        korrespondent: "O'zbekiston Respublikasi Prezidenti",
        malumot: "'Ўзбекистон Республикаси Адлия вазирлигининг хатида (2021 йил 28 июнь № 8/5-1/3239-сонли) илова илинган Ўзбекистон Республикаси Президенти Фармони ва қарори лойиҳалари комплекслар бўлинмаларида муҳокама қилинсин ҳамда кенг жамоатчиликка етказилиши таъминлансин. Б.Норбоевга Ташкиллаштириш ва назорат учун.'",
        date: "7.05.2022",
        harakatlar: ""
    },
    {
        id: 4,
        hujjatTuri: "CHIQUVCHI4",
        korrespondent: "O'zbekiston Respublikasi Prezidenti",
        malumot: "'Ўзбекистон Республикаси Адлия вазирлигининг хатида (2021 йил 28 июнь № 8/5-1/3239-сонли) илова илинган Ўзбекистон Республикаси Президенти Фармони ва қарори лойиҳалари комплекслар бўлинмаларида муҳокама қилинсин ҳамда кенг жамоатчиликка етказилиши таъминлансин. Б.Норбоевга Ташкиллаштириш ва назорат учун.'",
        date: "7.05.2022",
        harakatlar: ""
    },
    {
        id: 5,
        hujjatTuri: "CHIQUVCHI5",
        korrespondent: "O'zbekiston Respublikasi Prezidenti",
        malumot: "'Ўзбекистон Республикаси Адлия вазирлигининг хатида (2021 йил 28 июнь № 8/5-1/3239-сонли) илова илинган Ўзбекистон Республикаси Президенти Фармони ва қарори лойиҳалари комплекслар бўлинмаларида муҳокама қилинсин ҳамда кенг жамоатчиликка етказилиши таъминлансин. Б.Норбоевга Ташкиллаштириш ва назорат учун.'",
        date: "7.05.2022",
        harakatlar: ""
    },
    {
        id: 6,
        hujjatTuri: "CHIQUVCHI6",
        korrespondent: "O'zbekiston Respublikasi Prezidenti",
        malumot: "'Ўзбекистон Республикаси Адлия вазирлигининг хатида (2021 йил 28 июнь № 8/5-1/3239-сонли) илова илинган Ўзбекистон Республикаси Президенти Фармони ва қарори лойиҳалари комплекслар бўлинмаларида муҳокама қилинсин ҳамда кенг жамоатчиликка етказилиши таъминлансин. Б.Норбоевга Ташкиллаштириш ва назорат учун.'",
        date: "7.05.2022",
        harakatlar: ""
    },
    {
        id: 7,
        hujjatTuri: "CHIQUVCHI7",
        korrespondent: "O'zbekiston Respublikasi Prezidenti",
        malumot: "'Ўзбекистон Республикаси Адлия вазирлигининг хатида (2021 йил 28 июнь № 8/5-1/3239-сонли) илова илинган Ўзбекистон Республикаси Президенти Фармони ва қарори лойиҳалари комплекслар бўлинмаларида муҳокама қилинсин ҳамда кенг жамоатчиликка етказилиши таъминлансин. Б.Норбоевга Ташкиллаштириш ва назорат учун.'",
        date: "7.05.2022",
        harakatlar: ""
    },
    {
        id: 8,
        hujjatTuri: "CHIQUVCHI8",
        korrespondent: "O'zbekiston Respublikasi Prezidenti",
        malumot: "'Ўзбекистон Республикаси Адлия вазирлигининг хатида (2021 йил 28 июнь № 8/5-1/3239-сонли) илова илинган Ўзбекистон Республикаси Президенти Фармони ва қарори лойиҳалари комплекслар бўлинмаларида муҳокама қилинсин ҳамда кенг жамоатчиликка етказилиши таъминлансин. Б.Норбоевга Ташкиллаштириш ва назорат учун.'",
        date: "7.05.2022"
    },
    {
        id: 9,
        hujjatTuri: "CHIQUVCHI9",
        korrespondent: "O'zbekiston Respublikasi Prezidenti",
        malumot: "'Ўзбекистон Республикаси Адлия вазирлигининг хатида (2021 йил 28 июнь № 8/5-1/3239-сонли) илова илинган Ўзбекистон Республикаси Президенти Фармони ва қарори лойиҳалари комплекслар бўлинмаларида муҳокама қилинсин ҳамда кенг жамоатчиликка етказилиши таъминлансин. Б.Норбоевга Ташкиллаштириш ва назорат учун.'",
        date: "7.05.2022",
        harakatlar: ""
    },
    {
        id: 10,
        hujjatTuri: "CHIQUVCHI10",
        korrespondent: "O'zbekiston Respublikasi Prezidenti",
        malumot: "'Ўзбекистон Республикаси Адлия вазирлигининг хатида (2021 йил 28 июнь № 8/5-1/3239-сонли) илова илинган Ўзбекистон Республикаси Президенти Фармони ва қарори лойиҳалари комплекслар бўлинмаларида муҳокама қилинсин ҳамда кенг жамоатчиликка етказилиши таъминлансин. Б.Норбоевга Ташкиллаштириш ва назорат учун.'",
        date: "7.05.2022"
    }
];

export default function AdminArxivKurishContent({ itemsPerPage }) {
    const { user: currentUser } = useContext(AuthContext);
    const [selected, setSelected] = useState(0);
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null); // serverdan kelgan malumotlarni shunga saqlaymiz
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    // search
    // const [korres, setKorres] = useState("");
    // const [malumot, setMalumot] = useState("");
    // const [sana, setSana] = useState("");
    const params = useParams();
    const [alert, setAlert] = useState({ open: false, text: "", color: "" });

    // pagination
    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        // console.log(event.selected);
        const newOffset = (event.selected * itemsPerPage) % data.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
        setSelected(event.selected);
    };

    useEffect(() => {
        document.querySelector('.tooltip')?.remove();
    }, []);


    // id orqali jurnalni o'qib olish
    useEffect(() => {
        axiosInstance.get("journal/" + params.id, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data);
                document.querySelector('.uzbekchaNomi').textContent = res.data?.uzName;
                document.querySelector('.ruschaNomi').textContent = res.data?.ruName;
                document.querySelector('.tasnif').textContent = res.data?.shortDescription;
            })
            .catch(err => {
                console.log(err.response);
            })
    }, []);

    const openJournal = () => {
        axiosInstance.patch("journal/open/" + params.id, {}, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                Alert(setAlert, "success", "Jurnal ochib qo'yildi");
            })
            .catch(err => {
                // console.log(err.response);
                Alert(setAlert, "warning", "Jurnal ochilgan");
            })
    }

    const openArchive = () => {
        axiosInstance.patch("journal/unArchive/" + params.id, {}, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                Alert(setAlert, "success", "Jurnal arxivdan chiqarildi");
            })
            .catch(err => {
                // console.log(err.response);
                Alert(setAlert, "warning", err.response.data);
            })
    }

    return (
        <div className="content mb-5">

            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Barchasi</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ borderTopRightRadius: "5px",borderTopLeftRadius: "5px"}}>
                    <AdminElektronKitobNavbar />

                    <li className="nav-item">
                        <NavLink to={`/super_admin_elektron-kitob-arxiv-ko'rish/${params.id}`} className="nav-link align-items-center" activeClassName="NavLinkLi">
                            <i className="icon-eye2 mr-1"></i> Ko'rish
                        </NavLink>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        {/* <!-- Table Componet  --> */}
                        <div className="card">
                            <div className="card-body" style={{ padding: "20px 20px" }}>
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="card">
                                                <div className="card-title bg-dark text-light text-center">
                                                    <h1>Ma'lumotlar</h1>
                                                </div>
                                                <div className="card-body">
                                                    <table className="table mt-2 table-bordered table-striped table-hover Tab" >
                                                        <tbody>
                                                            <tr style={{ height: "66px" }}>
                                                                <td>O'zbekcha nomi:</td>
                                                                <td className="uzbekchaNomi">Fuqaro murojati</td>
                                                            </tr>
                                                            <tr style={{ height: "66px" }}>
                                                                <td>Ruscha nomi:</td>
                                                                <td className="ruschaNomi">Заявление гражданина</td>
                                                            </tr>
                                                            <tr style={{ height: "66px" }}>
                                                                <td>Qisqacha tasnifi:</td>
                                                                <td className="tasnif">Fuqaro murojatlari</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card">
                                                <div className="card-title bg-dark text-light text-center">
                                                    <h1>Jurnalni Boshqarish</h1>
                                                </div>
                                                <div className="card-body">
                                                    <table className="table mt-2 table-bordered table-striped table-hover Tab" >
                                                        <tbody>
                                                            <tr className="text-center">
                                                                <td style={{ height: "67px" }}>
                                                                    &nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr className="text-center">
                                                                <td>
                                                                    <button className="btn btn-primary" onClick={openArchive}>Arxivdan chiqarish</button>
                                                                </td>
                                                            </tr>
                                                            <tr className="text-center">
                                                                <td>
                                                                    <div className="btn-group">
                                                                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">Export</button>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <span className="dropdown-item"><i className="icon-menu7"></i> EXCEL</span>
                                                                            <span className="dropdown-item"><i className="icon-screen-full"></i> PDF</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* pagination */}
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel=">>"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={3}
                                    pageCount={pageCount}
                                    previousLabel="<<"
                                    renderOnZeroPageCount={null}
                                    className="paginationUL"
                                    activeClassName="active"
                                // forcePage={selected}
                                />
                                <table className="table table-bordered table-striped table-hover Tab" data-paging="true" id="myTable">
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th style={{ width: "5%" }}>№</th>
                                            <th style={{ width: "10%" }}>Fayl</th>
                                            <th style={{ width: "20%" }}>Korrespondent</th>
                                            <th style={{ width: "25%" }}>Qisqacha Ma'lumot</th>
                                            <th style={{ width: "15%" }}>Reg № / Muddati</th>
                                            <th style={{ width: "20%" }}>Ijrochi</th>
                                            <th style={{ width: "5%" }} className="text-center">Harakatlar</th>
                                        </tr>
                                    </thead>
                                    <tbody id="data">
                                        <>
                                            {currentItems?.map((dat, index) => (
                                                <tr key={index}>
                                                    <td className="text-center id">{dat.id}</td>
                                                    <td className="text-color Fayl">{dat.hujjatTuri}</td>
                                                    <td className="korres">O'zbekiston Respublikasi Prezidenti</td>
                                                    {/* <!-- so'zlar 200ta chiqadi --> */}
                                                    <td style={{ textAlign: "justify" }} className="qisqacha">
                                                        {dat.malumot}
                                                    </td>
                                                    <td className="text-center chiquvchi reg">
                                                        <div className="badge badge-primary">№ 25</div>
                                                        <hr />
                                                        {dat.date}
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
                                                        {/* <div className="icon d-flex justify-content-center align-items-center ">
                                                            <Link to="/kiruvchi_bajarish_ijro" className="infoBtn bg-dark" title="Ko'rish" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top">
                                                                <span><i className="icon-eye2"></i></span>
                                                            </Link>
                                                        </div> */}
                                                    </td>
                                                </tr>
                                            ))}
                                        </>
                                    </tbody>
                                </table>
                                <ul id="pagin">
                                </ul>
                            </div>
                        </div>
                        {/* alert */}
                        {
                            alert.open && (
                                <div className={`alert alert-${alert.color} alert-styled-left alert-dismissible`}>
                                    {/* <button type="button" className="close" data-dismiss="alert"><span>×</span></button> */}
                                    <span className="font-weight-semibold">{alert.text}</span>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}