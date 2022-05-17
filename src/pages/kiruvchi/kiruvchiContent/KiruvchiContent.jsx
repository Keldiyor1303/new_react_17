import React, { useContext, useEffect, useState } from 'react';
import './kiruvchiContent.css';
import ContentNavbar from '../contentNavbar/ContentNavbar';
import Select from 'react-select';
import { axiosInstance } from '../../../config';
import { AuthContext } from '../../../context/AuthContext';
import { Alert } from '../../../component/alert/Alert';
import jwtDecode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function KiruvchiContent() {
    const [startDate1, setStartDate1] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    const { user: currentUser } = useContext(AuthContext);
    const [file, setFile] = useState(null);
    const [card, setCard] = useState([]);
    const [jurnallar, setJurnallar] = useState([]);
    const [hujjatTuri, setHujjatTuri] = useState([]);
    const [taqdimForma, setTaqdimForma] = useState([]);
    const [tasdiqlovchi, setTasdiqlovchi] = useState([]);
    const [korrespondent, setKorrespondent] = useState([]);
    const [alert, setAlert] = useState({ open: false, color: "", text: "" });
    const [notParentsCard, setNotParentsCard] = useState([]);
    const [cardsName, setCardsName] = useState([]);
    const [permission, setPermission] = useState([]);
    const [files, setFiles] = useState([]);
    const [change, setChange] = useState(false);
    const [kiruvchiJurnal, setKiruvchiJurnal] = useState(null);
    const [kiruvchiCard, setKiruvchiCard] = useState(null);
    const [kiruvchiCardNomi, setKiruvchiCardNomi] = useState(null);
    const [kiruvchiForma, setKiruvchiForma] = useState(null);
    const [kiruvchiUser, setKiruvchiUser] = useState(null);
    const [kiruvchiKorres, setKiruvchiKorres] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const history = useHistory();
    const [ids, setIds] = useState(null);




    // permission ni aniqlash
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
        // setWorkPlace(arr);
        // setRanks(arr1);
        setPermission(arr2);
    }, [currentUser]);

    // sanani formatlash
    const dateFormat =(date)=>{
        return  date?.slice(8,date.length)+'.'+date?.slice(5,7)+'.'+date?.slice(0,4)
    }

    // barcha cardlar ni o'qib olish   -> organization/showCardTypeByOrg
    useEffect(() => {
        axiosInstance.get("organization/showCardTypeByOrg", {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                ;
                let arr = [];
                res.data.forEach((c, i) => {
                    arr.push({ value: c.id, label: c.cardName });
                })
                setNotParentsCard(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, [currentUser]);

    // barcha card (jurnallarni) larni o'qib olish
    useEffect(() => {
        axiosInstance.get("journal/getOrgAll", {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                let arr = [];
                res.data.filter((d, i) => {
                    arr.push({ value: d.id, label: d.uzName, clearableValue: true })
                });
                setJurnallar(res.data);
                setCard(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, [currentUser, change]);


    const notParentsCardClick = (e) => {
        ;
        setKiruvchiCard(e);

        axiosInstance.get("organization/showCard/cardType/" + e.value, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                let arr = [];
                res.data.filter((d, i) => {
                    arr.push({ value: d.id, label: d.cardName, title: d.cardName });
                })
                setCardsName(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    const clickCardNomi = (e) => {
        setKiruvchiCardNomi(e);
    }
    const clickTaqdimForma = (e) => {
        setKiruvchiForma(e);
    }
    const clickUser = (e) => {
        setKiruvchiUser(e);
    }
    const clickKorres = (e) => {
        setKiruvchiKorres(e);
    }

    // barcha card larni o'qib olish
    useEffect(() => {
        axiosInstance.get("organization/cardJurnal", {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                let arr = [];
                res.data.filter((d, i) => {
                    arr.push({ value: d.id, label: d.cardName })
                });
                setHujjatTuri(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, [currentUser]);

    // jurnalni tanlagan payt id sini olish
    const clickCard = (e) => {
        setKiruvchiJurnal(e);
        jurnallar.forEach((c, i) => {
            if (e?.label === c.uzName) {
                document.querySelector('.num').value = c.beginNumber;
            }
        })
    }

    // barcha taqdim etish formasini o'qib olish
    useEffect(() => {
        axiosInstance.get("submissionForm/orgAll", {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                let arr = [];
                res.data.forEach((d, i) => {
                    arr.push({ value: d.id, label: d.name })
                });
                setTaqdimForma(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, [currentUser]);

    // barcha tasdiqlovchilarni o'qib olish
    useEffect(() => {
        axiosInstance.get("user/confirmers", {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                ;
                let arr = [];
                res.data.filter((d, i) => {
                    let firstname = (d?.firstName && d?.firstName?.length > 1) ? ((((d?.firstName[0].toUpperCase() === "S" || d?.firstName[0].toUpperCase() === "C") && d?.firstName[1].toUpperCase() === "H")) ? d?.firstName?.substring(0, 2) + ". " : d?.firstName?.substring(0, 1) + ". ") : "";
                    arr.push({ value: d?.workPlaceId, label: `${firstname} ${d?.lastName ? d?.lastName : ""}` })
                });
                setTasdiqlovchi(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, [currentUser]);

    // barcha korrespondentlarni o'qib olish
    useEffect(() => {
        axiosInstance.get("organization/orgCorrespondent", {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                let arr = [];
                res.data.filter((d, i) => {
                    arr.push({ value: d.id, label: d.orgName })
                });
                setKorrespondent(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, []);


    // hujjat qo'shish
    const hujjatQushish = async (e) => {
        e.preventDefault();
        let jurnali = document.querySelector('.jurnali')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let num = document.querySelector('.num').value;
        let card1 = document.querySelector('.card1')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let taqdimForma1 = document.querySelector('.taqdimForma')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let tasdiqlovchi1 = document.querySelector('.tasdiqlovchi')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let korrespondent1 = document.querySelector('.korrespondent')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let chiquvchiRaqam = document.querySelector('.chiquvchiRaqam').value;
        let chiquvchiSana = document.querySelector('.chiquvchiSana').value;
        let ruyxatSana = document.querySelector('.ruyxatSana').value;
        let sahifalarSoni = document.querySelector('.sahifalarSoni').value;
        let qisqachaMalumot = document.querySelector('.qisqachaMalumot').value;

        // jurnalni tanlagan payt id sini olish
        let arr = card.filter((c, i) => {
            if (c.label === jurnali) {
                return c;
            }
        })

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

        // tasdiqlovchi tanlagan payt id sini olish
        let arr2 = tasdiqlovchi.filter((c, i) => {
            if (c.label === tasdiqlovchi1) {
                return c;
            }
        })

        console.log(arr2);

        // taqdimForma
        // tasdiqlovchi tanlagan payt id sini olish
        let arr4 = taqdimForma.filter((c, i) => {
            if (c.label === taqdimForma1) {
                return c;
            }
        })

        if (file.length > 0) {
            let fileId = [];
            for (let i = 0; i < file.length; i++) {
                const formData = new FormData();
                let fileType = (file[i]?.type === "application/zip" || file[i]?.type === "application/gzip" || file[i]?.type === "application/msword" || file[i]?.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || file[i]?.type === "application/vnd.openxmlformats-officedocument.presentationml.presentation" || file[i]?.type === "application/vnd.ms-powerpoint" || file[i]?.type === "application/vnd.ms-excel.sheet.macroEnabled.12" || file[i]?.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || file[i]?.type === "application/vnd.ms-excel" || file[i]?.type === "application/x-rar-compressed" || file[i]?.type === "application/pdf");

                // agar fayl berilgan kengaytmada bo'lsa, so'rov yuborish
                if (fileType) {
                    formData.append("file", file[i]);
                    try {
                        let res = await axiosInstance.post("document/saveDuplicateFile", formData, {
                            headers: {
                                Authorization: "Bearer " + currentUser,
                                "Content-Type": "multipart/form-data",
                            }
                        })
                        fileId.push(res.data);
                    } catch (error) {
                        console.log(error.response);
                    }
                }
            };

            if (fileId.length > 0) {
                if (jurnali) {
                    if (card1) {
                        if (taqdimForma1) {
                            if (tasdiqlovchi1) {
                                if (korrespondent1) {
                                    if (chiquvchiRaqam) {
                                        if (chiquvchiSana) {
                                            if (ruyxatSana) {
                                                if (sahifalarSoni) {
                                                    axiosInstance.post("document/createDocument", {
                                                        cardId: kart[0]?.value,
                                                        submissionFormId: arr4[0]?.value,
                                                        journalId: arr[0]?.value,
                                                        correspondentId: arr1[0]?.value,
                                                        confirmerId: arr2[0]?.value,
                                                        outNumber: chiquvchiRaqam,
                                                        outDate: chiquvchiSana.split('.')[2] + "-" + chiquvchiSana.split('.')[1] + "-" + chiquvchiSana.split('.')[0],
                                                        registrationAt: ruyxatSana.split('.')[2] + "-" + ruyxatSana.split('.')[1] + "-" + ruyxatSana.split('.')[0],
                                                        pageCount: sahifalarSoni,
                                                        shortDescription: qisqachaMalumot,
                                                        fileId: fileId
                                                    }, {
                                                        headers: {
                                                            Authorization: "Bearer " + currentUser
                                                        }
                                                    })
                                                        .then(res => {
                                                            document.querySelector('.newFormFunc').reset();
                                                            document.querySelector('.jurnali').value = null;
                                                            Alert(setAlert, "success", "Malumot rezalutsiyaga muvaffaqiyatli yuborildi");
                                                            setIds(res.data);
                                                            setOpenModal(true);
                                                            setKiruvchiJurnal(null);
                                                            setKiruvchiCard(null);
                                                            setKiruvchiCard(null);
                                                            setKiruvchiCardNomi(null);
                                                            setKiruvchiForma(null);
                                                            setKiruvchiUser(null);
                                                            setKiruvchiKorres(null);
                                                            setChange(!change);
                                                            setFile(null);
                                                            setFiles([]);
                                                        })
                                                        .catch(err => {
                                                            console.log(err.response);
                                                            Alert(setAlert, "warning", err?.response?.data);
                                                        })
                                                } else {
                                                    Alert(setAlert, "warning", "Sahifalar soni kiritilmagan");
                                                }
                                            } else {
                                                Alert(setAlert, "warning", "Ro'yxat sana tanlanmagan");
                                            }
                                        } else {
                                            Alert(setAlert, "warning", "Chiquvchi sana tanlanmagan");
                                        }
                                    } else {
                                        Alert(setAlert, "warning", "Chiquvchi raqam kiritilmagan");
                                    }
                                } else {
                                    Alert(setAlert, "warning", "Korrespondent kiritilmagan");
                                }
                            } else {
                                Alert(setAlert, "warning", "Tasdiqlovchi tanlanmagan");
                            }
                        } else {
                            Alert(setAlert, "warning", "Taqdim etish formasi tanlanmagan");
                        }
                    } else {
                        Alert(setAlert, "warning", "Hujjat turi tanlanmagan");
                    }
                } else {
                    Alert(setAlert, "warning", "Jurnal tanlanmagan");
                }
            } else {
                Alert(setAlert, "warning", "Fayl formati berilgan formatda bo'lishi kerak");
            }
        } else {
            Alert(setAlert, "warning", "Fayl tanlanmagan");
        }
    }


    const deleteFile = (index) => {
        let arr = Object.values(file)?.filter((f, i) => {
            return i !== index
        });
        setFile(arr);
    }

    const goToResolution = () => {
        history.push('/kiruvchi_resolution_kurish/' + ids);
        setOpenModal(false)
    }

    return (
        <>
            <div className="content">
                <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Yangi Qo'shish</h3>
                <div className="card-body">
                    <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ paddingTop: "2px", position: "relative", width: "100%" }}>
                        <ContentNavbar />
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="colored-tab1">
                            <div className="card">
                                <div className="card-body" style={{ padding: "0 20px" }}>
                                    <form onSubmit={hujjatQushish} className="newFormFunc">
                                        <div className="row mt-3">
                                            <div className="col-lg-4">
                                                <div className="form-group form-group-floating row mb-0">
                                                    <div className="col-lg-12">
                                                        <Select
                                                            value={kiruvchiJurnal}
                                                            options={card}
                                                            onChange={clickCard}
                                                            placeholder="Jurnali"
                                                            className='jurnali'
                                                            isClearable={true}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="form-group form-group-floating row mb-0">
                                                    <div className="col-lg-12">
                                                        <div className="position-relative">
                                                            <input
                                                                type="number"
                                                                className="form-control form-control-outline num"
                                                                id="number" placeholder="Placeholder"
                                                                disabled
                                                                required
                                                            />
                                                            <label className="label-floating">№</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="form-group form-group-floating row">
                                                    <div className="col-lg-12">
                                                        <div className="position-relative">
                                                            <Select
                                                                value={kiruvchiCard}
                                                                options={notParentsCard}
                                                                onChange={notParentsCardClick}
                                                                placeholder="Card turi"
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
                                                        <div className="position-relative relative1">
                                                            <Select
                                                                value={kiruvchiCardNomi}
                                                                options={cardsName}
                                                                onChange={clickCardNomi}
                                                                placeholder="Card nomi"
                                                                className="card1 ssss"
                                                                isClearable={true}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='cardKiruvchi' >
                                                    <span>{kiruvchiCardNomi?.label}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-lg-4">
                                                <div className="form-group form-group-floating row mb-0">
                                                    <div className="col-lg-12">
                                                        <Select
                                                            value={kiruvchiForma}
                                                            options={taqdimForma}
                                                            onChange={clickTaqdimForma}
                                                            placeholder="Taqdim etish formasi"
                                                            className='taqdimForma'
                                                            isClearable={true}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group form-group-floating row mb-0">
                                                    <div className="col-lg-12">
                                                        <Select
                                                            value={kiruvchiUser}
                                                            options={tasdiqlovchi}
                                                            onChange={clickUser}
                                                            placeholder="Tasdiqlovchi"
                                                            className='tasdiqlovchi'
                                                            isClearable={true}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group form-group-floating row mb-0">
                                                    <div className="col-lg-12">
                                                        <Select
                                                            value={kiruvchiKorres}
                                                            options={korrespondent}
                                                            onChange={clickKorres}
                                                            placeholder="Korrespondent"
                                                            className='korrespondent'
                                                            isClearable={true}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-lg-3">
                                                <div className="form-group form-group-floating row mb-0">
                                                    <div className="col-lg-12">
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-outline chiquvchiRaqam"
                                                                id="chiquvchiRaqam"
                                                                placeholder="Placeholder"
                                                                required
                                                            />
                                                            <label className="label-floating">Chiquvchi raqami</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className={'changeBox'} style={{ height: '100%', width: '100%', border: '1px solid lightgray', borderRadius: '5px', '&>input': { border: 'none !important', outline: 'none !important' }, '&:hover': { border: 'none !important', outline: 'none !important' } }}>
                                                    <DatePicker width="100" height="100"
                                                        className={'chiquvchiSana'} id={'chiquvchiSana'}
                                                        selected={startDate1}
                                                        onChange={(date) => setStartDate1(date)}
                                                        dateFormat={'dd.MM.yyyy'}
                                                        isClearable
                                                        showYearDropdown scrollableMonthYearDropdown />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className={'changeBox'} style={{ height: '100%', width: '100%', border: '1px solid lightgray', borderRadius: '5px', '&>input': { border: 'none !important', outline: 'none !important' }, '&:hover': { border: 'none !important', outline: 'none !important' } }}>
                                                    <DatePicker width="100" height="100"
                                                        className={'ruyxatSana'} id={'royxatdanOtishSana'}
                                                        selected={startDate2}
                                                        onChange={(date) => setStartDate2(date)}
                                                        dateFormat={'dd.MM.yyyy'}
                                                        isClearable
                                                        placeholderText="Ro'yxatdan o'tish sanasi"
                                                        showYearDropdown scrollableMonthYearDropdown
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="form-group form-group-floating row mb-0">
                                                    <div className="col-lg-12">
                                                        <div className="position-relative">
                                                            <input
                                                                type="number"
                                                                className="form-control form-control-outline sahifalarSoni"
                                                                id="sahifalarSoni"
                                                                placeholder="Placeholder"
                                                                required
                                                            />
                                                            <label className="label-floating">Sahifalar soni</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-2">
                                            <div className="col-lg-12">
                                                <p id="errorLength" style={{ color: "red", height: "auto" }}
                                                    className="text-center"></p>
                                                <div className="form-group form-group-floating row">
                                                    <div className="col-lg-12">
                                                        <div className="position-relative">
                                                            <textarea cols="30" rows="5" id="malumot"
                                                                maxLength="300"
                                                                className="form-control form-control-outline qisqachaMalumot"
                                                                placeholder="Placeholder"
                                                                required
                                                            />
                                                            <label className="label-floating">Qisqacha ma'lumot</label>
                                                            <span className="mt-5 text-muted">Qisqacha ma'lumot 300 ta so'zdan oshmaydi</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group form-group-float mb-0">
                                                    <div className="custom-file" style={{ zIndex: "0" }}>
                                                        <input
                                                            type="file"
                                                            className="custom-file-input fileKiruvchi"
                                                            id="custom-file-visible"
                                                            accept='.doc, .docx, .xls, .xlsx, .ppt, .pptx, .pdf, .zip, .rar'
                                                            onClick={(e) => e.target.value = null}
                                                            onChange={(e) => setFile(e.target.files)}
                                                            multiple="multiple"
                                                            required
                                                        />
                                                        <label className="custom-file-label text-muted"
                                                            htmlFor="custom-file-visible">
                                                            {file?.length > 0 ? `${file?.length} ta fayl tanlandi` : "Faylni tanlash"}
                                                        </label>
                                                    </div>
                                                    <label className="d-block text-muted mb-0">Ruxsat etilgan formatlar: doc, docx, xls,xlsx, ppt, pptx, pdf, .zip, .rar</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3 mb-2 d-flex align-items-center justify-content-between">
                                            <button type="submit" className="btn btn-primary hujQush">Xujjat qo'shish</button>
                                        </div>

                                        {(openModal) && (
                                            <div className={'adminWindow'}>
                                                <div className="modal-dialog modal-sm pt-5 ">
                                                    <div className="modal-content">
                                                        <div className="modal-header bg-primary text-white">
                                                            <h5 className="modal-title ">Resolution</h5>
                                                            <button className="close" onClick={() => setOpenModal(false)} data-dismiss="modal">&times;</button>
                                                        </div>

                                                        <div className="modal-body shadowKiruvchi text-center" style={{ padding: "10px", border: "1px solid lightgray", margin: "10px", backgroundColor: "lightgray" }}>
                                                            <h3 className="font-weight-semibold py-1 px-1 " style={{ borderRadius: '5px', fontSize: "20px", color: "#000" }}>Yangi kiruvchi hujjat kiritildi</h3>
                                                        </div>

                                                        <div className="modal-footer d-flex justify-content-center">
                                                            <button onClick={() => setOpenModal(false)} className="btn btn-success" style={{ width: "150px" }}>Yangi</button>
                                                            <button onClick={() => goToResolution()} className="btn btn-success" style={{ width: "150px" }}>Resolutsiya</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="col-lg-12 px-0 pt-2">
                                            <ul>
                                                <>
                                                    {file?.length > 0 && Object.values(file)?.map((hujjat, i) => (
                                                        <>
                                                            {hujjat?.type?.split('/')[hujjat?.type?.split('/').length - 1] === "pdf" ? (
                                                                <li className='kiruvchiMain'>
                                                                    <div className='d-flex align-items-center'>
                                                                        <i className="far fa-file-pdf mr-2 fa-2x pdfIcon" style={{ fontSize: "28px" }} />
                                                                        <span className='pt-1'>PDF FILE</span>
                                                                    </div>
                                                                    <span onClick={() => deleteFile(i)}> <i className="icon-trash"></i></span>
                                                                </li>
                                                            ) : (hujjat?.type?.split('/')[hujjat?.type?.split('/').length - 1] === "doc" || hujjat?.type?.split('.')[hujjat?.type?.split('.').length - 1] === "docx" || hujjat?.type?.split('/')[hujjat?.type?.split('/').length - 1] === "vnd.openxmlformats-officedocument.wordprocessingml.document") ? (
                                                                <li className='kiruvchiMain'>
                                                                    <div className='d-flex align-items-center'>
                                                                        <i className="far fa-file-word mr-2 fa-2x wordIcon" style={{ fontSize: "28px" }} />
                                                                        <span className='pt-1'>WORD FILE</span>
                                                                    </div>
                                                                    <span onClick={() => deleteFile(i)}> <i className="icon-trash"></i></span>
                                                                </li>
                                                            ) : (hujjat?.type?.split('.')[hujjat?.type?.split('.').length - 1] === "xls" || hujjat?.type?.split('.')[hujjat?.type?.split('.').length - 1] === "xlsx" || hujjat?.type?.split('/')[hujjat?.type?.split('/').length - 1] === "vnd.openxmlformats-officedocument.spreadsheetml.sheet") ? (
                                                                <li className='kiruvchiMain'>
                                                                    <div className='d-flex align-items-center'>
                                                                        <i className="far fa-file-excel mr-2 fa-2x excelIcon" style={{ fontSize: "28px" }} />
                                                                        <span className='pt-1'>EXCEL FILE</span>
                                                                    </div>
                                                                    <span onClick={() => deleteFile(i)}> <i className="icon-trash"></i></span>
                                                                </li>
                                                            ) : (hujjat?.type?.split('.')[hujjat?.type?.split('.').length - 1] === "ppt" || hujjat?.type?.split('.')[hujjat?.type?.split('.').length - 1] === "pptx" || hujjat?.type?.split('/')[hujjat?.type?.split('/').length - 1] === "vnd.openxmlformats-officedocument.presentationml.presentation") ? (
                                                                <li className='kiruvchiMain'>
                                                                    <div className='d-flex align-items-center'>
                                                                        <i className="far fa-file-powerpoint mr-2 fa-2x pptIcon" style={{ fontSize: "28px" }} />
                                                                        <span className='pt-1'>POWERPOINT FILE</span>
                                                                    </div>
                                                                    <span onClick={() => deleteFile(i)}> <i className="icon-trash"></i></span>
                                                                </li>
                                                            ) : (
                                                                <li className='kiruvchiMain'>
                                                                    <div className='d-flex align-items-center'>
                                                                        <i className="far fa-file-archive mr-2 fa-2x rarIcon" style={{ fontSize: "28px" }} />
                                                                        <span className='pt-1'>ZIP, RAR FILE</span>
                                                                    </div>
                                                                    <span onClick={() => deleteFile(i)}> <i className="icon-trash"></i></span>
                                                                </li>
                                                            )}
                                                        </>
                                                    ))}
                                                </>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {alert.open && (
                            <div className={`alert alert-${alert.color} alertNotice alert-styled-left alert-dismissible`}>
                                <span className="font-weight-semibold">{alert.text}</span>
                            </div>
                        )}
                        {file?.length > 0 && Object.values(file)?.map((f, i) => (
                            <>
                                {f.type?.split('/')[f.type?.split('/').length - 1] === "pdf" && (
                                    <object
                                        data={URL.createObjectURL(f)}
                                        type={f.type} width="100%" height="2430">
                                        <iframe
                                            src={URL.createObjectURL(f)}
                                            width="100%" height="1430" title="This is a unique title">
                                            <p>This brows1er does not support PDF!</p>
                                        </iframe>
                                    </object>
                                )}
                            </>
                        ))}
                    </div>
                </div>
            </div >

        </>
    )
}