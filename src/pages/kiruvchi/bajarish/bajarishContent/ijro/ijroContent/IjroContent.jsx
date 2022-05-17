import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams, useHistory } from 'react-router-dom';
import ContentNavbar from "../../../../contentNavbar/ContentNavbar";
import './IjroContent.css';
import Select from 'react-select';
import { saveAs } from 'file-saver';
import { axiosInstance, url } from "../../../../../../config";
import { AuthContext } from "../../../../../../context/AuthContext";
import { Alert } from "../../../../../../component/alert/Alert";
import jwtDecode from "jwt-decode";
import { status } from '../../../../../../component/status/Status';

let xodimFilter = [];
export default function IjroContent() {
    const params = useParams();
    const history = useHistory();
    const { user: currentUser } = useContext(AuthContext);
    const [yangiQushish, setYangiQushish] = useState([]);
    const [file, setFile] = useState(null);
    const [file1, setFile1] = useState(null);
    const [openIjroniYuklash, setOpenIjroniYuklash] = useState({ open: false, obj: {} });
    const [openIjroniUzgartirish, setOpenIjroniUzgartirish] = useState({ open: false, obj: {} });
    const [count, setCount] = useState(50);
    const [openStr, setOpenStr] = useState(false);
    const [data, setData] = useState({});
    const [alert, setAlert] = useState({ open: false, color: "", text: "" });
    const [selectVisible, setSelectVisible] = useState(false);
    const [notParentsCard, setNotParentsCard] = useState([]);
    const [cardsName, setCardsName] = useState([]);
    const [card, setCard] = useState([]);
    const [jurnallar, setJurnallar] = useState([]);
    const [ranks, setRanks] = useState([]);
    const [tezkorRezolutsiya, setTezkorRezolutsiya] = useState([]);
    const [xodimlar, setXodimlar] = useState([]);
    const [qaytaIjro, setQaytaIjro] = useState([]);
    const [selectXodim, setSelectXodim] = useState({});
    const [selectQaytaIjro, setSelectQaytaIjro] = useState({});
    const [change, setChange] = useState(false);
    const [imzo, setImzo] = useState([]);
    const [chooseFiles, setChooseFiles] = useState([]);
    const [otherFiles, setOtherFiles] = useState([]);
    const [files, setFiles] = useState([]);
    const [cardName, setCardName] = useState(null);
    const [searchReg, setSearchReg] = useState("");
    const [ijroDataYulash, setIjroDataYuklash] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [yunalishlar, setYunalishlar] = useState([]);
    const [openButtonCLick, setOpenButtonClick] = useState(false);
    const [visibleIconIjro, setVIsibleIconIjro] = useState(false);
    const [closedIjro, setClosedIjro] = useState({ open: false, obj: {} });
    const [openIjro, setOpenIjro] = useState({ open: false, obj: {} });
    const [ids, setIds] = useState([]);
    const [outExecutorInformationList, setOutExecutorInformationList] = useState([]);
    const [results, setResults] = useState([]);
    // const [change1, setChange1] = useState(false);
    const [isMainFishka, setIsMainFishka] = useState(false)


    // ish stoli ichidagi ranklarni o'qib olish
    useEffect(() => {
        let decode = jwtDecode(currentUser);
        let workplaces = JSON.parse(decode.workPlaces);
        let arr = []
        workplaces.forEach((d, i) => {
            d.userRoles.forEach((r, i) => {
                arr.push(r?.rank);
            })
        })
        setRanks(arr);
    }, [currentUser]);

    // berilgan id ga mos documentni olish
    useEffect(() => {
        if (params.name === "bajarish") {
            const getData = async () => {
                try {
                    const res = await axiosInstance.get(`forDoing/${params.id}/${JSON.parse(localStorage.getItem('ids'))}`, {
                        headers: {
                            Authorization: "Bearer " + currentUser
                        }
                    });;
                    setData(res.data);
                } catch (error) {
                    console.log(error.response);
                }
            }
            getData();
        }
        if (params.name === "nazorat") {
            const getData = async () => {
                try {
                    const res = await axiosInstance.get(`superVisor/${params.id}/${JSON.parse(localStorage.getItem('ids'))}`, {
                        headers: {
                            Authorization: "Bearer " + currentUser
                        }
                    });
                    setData(res.data);
                } catch (error) {
                    console.log(error.response);
                }
            }
            getData();
        }
        if (params.name === "umumlashtiruvchi") {
            const getData = async () => {
                try {
                    const res = await axiosInstance.get(`gen/${params.id}/${JSON.parse(localStorage.getItem('ids'))}`, {
                        headers: {
                            Authorization: "Bearer " + currentUser
                        }
                    });
                    // console.log(res.data);
                    setData(res.data);
                } catch (error) {
                    console.log(error.response);
                }
            }
            getData();
        }
        if (params.name === "malumot") {
            const getData = async () => {
                try {
                    const res = await axiosInstance.get(`forInfo/${params.id}/${JSON.parse(localStorage.getItem('ids'))}`, {
                        headers: {
                            Authorization: "Bearer " + currentUser
                        }
                    });
                    setData(res.data);
                } catch (error) {
                    console.log(error.response);
                }
            }
            getData();
        }
        if (params.name === "bajarilmagan") {
            const getData = async () => {
                try {
                    const res = await axiosInstance.get(`notDoneDocs/${params.id}/${JSON.parse(localStorage.getItem('ids'))}`, {
                        headers: {
                            Authorization: "Bearer " + currentUser
                        }
                    });
                    setData(res.data);
                } catch (error) {
                    console.log(error.response);
                }
            }
            getData();
        }
        if (params.name === "radEtilgan") {
            const getData = async () => {
                try {
                    const res = await axiosInstance.get(`rejectedDocs/${params.id}/${JSON.parse(localStorage.getItem('ids'))}`, {
                        headers: {
                            Authorization: "Bearer " + currentUser
                        }
                    });
                    setData(res.data);
                } catch (error) {
                    console.log(error.response);
                }
            }
            getData();
        }
        if (params.name === "bajarilgan") {
            const getData = async () => {
                try {
                    const res = await axiosInstance.get(`doneDocs/${params.id}/${JSON.parse(localStorage.getItem('ids'))}`, {
                        headers: {
                            Authorization: "Bearer " + currentUser
                        }
                    });
                    setData(res.data);
                } catch (error) {
                    console.log(error.response);
                }
            }
            getData();
        }
        if (params.name === "nazoratdanOlish") {
            const getData = async () => {
                try {
                    const res = await axiosInstance.get(`document/inProcessDoc/${params.id}`, {
                        headers: {
                            Authorization: "Bearer " + currentUser
                        }
                    });
                    setData(res.data);
                } catch (error) {
                    console.log(error.response);
                }
            }
            getData();
        }
    }, [currentUser, change]);

    const deleteFile = (index) => {
        let arr = Object.values(file)?.filter((f, i) => {
            return i !== index;
        });
        setFile(arr);
    }

    const deleteFile1 = (index) => {
        let arr = chooseFiles?.filter((f, i) => {
            return i !== index;
        });
        setChooseFiles(arr);
    }

    const deleteFile2 = (index) => {
        let arr = files?.filter((f, i) => {
            return i !== index;
        });
        setFiles(arr);
    }

    // barcha cardtype ni o'qib olish
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axiosInstance.get("module/all/org/", {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                let arr = [];
                res.data.forEach((c, i) => {
                    arr.push({ value: c.id, label: c.name });
                })
                setNotParentsCard(arr);
            } catch (error) {
                console.log(error.response);
            }
        }
        getData();
    }, [currentUser]);

    // sanani formatlash
    const dateFormat = (date) => {
        return date?.slice(8, date.length) + '.' + date?.slice(5, 7) + '.' + date?.slice(0, 4)
    }

    // CARD TYPE NI BOSGANDA CARDNAME NI CHIQISHI
    const notParentsCardClick = (e) => {
        setCardName(null);
        const getData = async () => {
            try {
                const res = await axiosInstance.get("journal/moduleJournal/" + e.value, {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                let arr = [];
                res.data.forEach((d, i) => {
                    arr.push({ value: d.id, label: d.uzName });
                })
                setCardsName(arr);
            } catch (error) {
                console.log(error.response);
            }
        }
        getData();
    }

    // barcha card (jurnallarni) larni o'qib olish
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axiosInstance.get("journal/getOrgAll", {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                let arr = [];
                res.data.forEach((d, i) => {
                    arr.push({ value: d.id, label: d.uzName, clearableValue: true })
                });
                setJurnallar(res.data);
                setCard(arr);
            } catch (error) {
                console.log(error.response);
            }
        }
        getData();
    }, [currentUser]);

    // xodimlarni o'qib olish
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axiosInstance.get(`executor/inExecutors/${params.id}/${JSON.parse(localStorage.getItem('ids'))}/${params.name ? true : false}`, {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                let arr = [];
                res.data.forEach((d, i) => {
                    arr.push({ value: d.departmentShortName, label: d.departmentShortName, isDisabled: "true" });
                    if (d?.users?.length > 0) {
                        d?.users.forEach((d, i) => {
                            let firstname = (d?.firstName && d?.firstName?.length > 1) ? ((((d?.firstName[0].toUpperCase() === "S" || d?.firstName[0].toUpperCase() === "C") && d?.firstName[1].toUpperCase() === "H")) ? d?.firstName.substring(0, 2) + ". " : d?.firstName.substring(0, 1) + ". ") : "";
                            arr.push({
                                value: d.id, label: `${firstname}${d?.lastName}`, isClearable: true, pl: d?.workPlaceId
                            });
                        })
                    }
                })
                setXodimlar(arr);
            } catch (error) {
                console.log(error.response);
            }
        }
        getData();
    }, [currentUser]);

    // qayta ijroni olish
    useEffect(() => {
        axiosInstance.get("repeatExecutePeriod", {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                let arr = [];
                res.data.filter((d, i) => {
                    arr.push({ value: d.period, label: d.description, isClearable: true })
                })
                // arr.push({ value: "Boshqa", label: "Boshqa" });
                setQaytaIjro(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, [currentUser]);

    const selectXodimFunc = (e) => {
        xodimFilter.push(e);
        setSelectXodim(e)
    }

    const selectQaytaIjroFunc = (e) => {
        if (e.label === "Boshqa") {
            document.querySelector('.visibleBoshqa').style.display = "block";
        } else {
            document.querySelector('.visibleBoshqa').style.display = "none";
        }
        setSelectQaytaIjro(e);
    }

    // tezkor rezolutsiyani o'qib olish
    useEffect(() => {
        // tooltip ni o'chirish
        document.querySelector('.tooltip')?.remove();

        const getData = async () => {
            try {
                const res = await axiosInstance.get("fastResolution/orgAll", {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                setTezkorRezolutsiya(res.data);
            } catch (error) {
                console.log(error.response);
            }
        }
        getData();
    }, []);

    //tezkor rezolutsiya
    useEffect(() => {
        let s = document.querySelector('.izoh')?.value;
        let rows1 = document.querySelectorAll('.tezkorRezolutsiyaRow');
        if (rows1.length > 0) {
            rows1.forEach((row, index) => {
                row.querySelector('.selectCheckbox').addEventListener('click', () => {
                    if (row.querySelector('.selectCheckbox').checked) {
                        document.querySelector('.izoh').value += row.querySelector('.rezName').textContent + ", "
                    } else {
                        rows1.forEach((row, index) => {
                            if (!row.querySelector('.selectCheckbox').checked) {
                                document.querySelector('.izoh').value = document.querySelector('.izoh').value.split(row.querySelector(".rezName").textContent + ", ").join("")
                                console.log(document.querySelector('.izoh').value);
                            }

                            // document.querySelector('.izoh').value = s;
                            // rows1.forEach((row, index) => {
                            //     if (row.querySelector('.selectCheckbox').checked) {
                            //         document.querySelector('.izoh').value += row.querySelector('.rezName').textContent + ", "
                            //     }
                        })
                    }
                })
            })
        }
    }, [tezkorRezolutsiya]);

    const deleteFun = (e) => {
        e.target.remove();
    }

    const newCreateBajaruvchi = () => {
        setYangiQushish(prev => [...prev, '1']);
    }

    // nazorat va umumlashtiruvchi buttonlar
    const checkedDivNazorat = (e, index) => {
        let div = document.querySelectorAll('.col1');
        if (!e.hasAttribute('style')) {
            div.forEach((d) => {
                d.getElementsByClassName('iconCheck')[0].removeAttribute('style');
            })
            let iconCheck = div[index]?.querySelectorAll('.iconCheck');
            iconCheck?.forEach((check) => {
                check.removeAttribute('style');
            })
            e.style.display = 'flex';
            e.style.backgroundColor = '#0056B8';
            e.style.color = '#fff';
        } else {
            e.removeAttribute('style');
        }
    }

    const checkedDivUmum = (e, index) => {
        let div = document.querySelectorAll('.col1')
        if (!e.hasAttribute('style')) {
            div.forEach((d) => {
                d.getElementsByClassName('iconCheck')[1].removeAttribute('style');
            })
            let iconCheck = div[index]?.querySelectorAll('.iconCheck');
            iconCheck?.forEach((check) => {
                check.removeAttribute('style');
            })
            e.style.display = 'flex';
            e.style.backgroundColor = '#0056B8';
            e.style.color = '#fff';
        } else {
            e.removeAttribute('style');
        }
    }

    const checkedDivM = (e, index) => {
        let div = document.querySelectorAll('.col1')
        if (!e.hasAttribute('style')) {
            // div.forEach((d)=>{
            //     d.getElementsByClassName('iconCheck')[2].removeAttribute('style');
            // })
            let iconCheck = div[index]?.querySelectorAll('.iconCheck');
            iconCheck?.forEach((check) => {
                check.removeAttribute('style');
            })
            e.style.display = 'flex';
            e.style.backgroundColor = '#0056B8';
            e.style.color = '#fff';
        } else {
            e.removeAttribute('style');
        }
    }

    // ijro hujjatini saqlash
    const ijroHujjatiniSaqlash = async (dat) => {
        let cardType = document.querySelector('.cardTypeYuklash')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let cardName = document.querySelector('.cardNameYuklash')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let ruyxatNumber = document.querySelector('.ruyxatNumber').value;
        let izohMatni = document.querySelector('.izohMatni')?.value;

        let fileId = [];
        let selectCheckboxIjro = document.querySelectorAll('.selectCheckboxIjro');
        selectCheckboxIjro.forEach((d) => {
            if (d.checked) {
                fileId.push(d.getAttribute('idInput'));
            }
        });
        let count = 0;
        count = fileId.length;

        let cardTypeId = notParentsCard.filter((n) => {
            if (n.label === cardType) {
                return n;
            }
        })

        let cardNameId = cardsName.filter((n) => {
            if (n.label === cardName) {
                return n;
            }
        })

        let visibleInputsCheckbox = document.querySelector('.visibleInputs');
        if (fileId?.length > 0 || file?.length > 0) {
            if (izohMatni?.length < 301) {
                for (let i = 0; i < file?.length; i++) {
                    const formData = new FormData()
                    let fileType = (file[i]?.type === "application/zip" || file[i]?.type === "application/gzip" || file[i]?.type === "application/msword" || file[i]?.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || file[i]?.type === "application/vnd.openxmlformats-officedocument.presentationml.presentation" || file[i]?.type === "application/vnd.ms-powerpoint" || file[i]?.type === "application/vnd.ms-excel.sheet.macroEnabled.12" || file[i]?.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || file[i]?.type === "application/vnd.ms-excel" || file[i]?.type === "application/x-rar-compressed" || file[i]?.type === "application/pdf");

                    // agar fayl berilgan kengaytmada bo'lsa, so'rov yuborish
                    if (fileType) {
                        formData.append("file", file[i]);
                        let res = await axiosInstance.post("document/saveDuplicateFile", formData, {
                            headers: {
                                Authorization: "Bearer " + currentUser,
                                "Content-Type": "multipart/form-data",
                            }
                        })
                        fileId.push(res.data);
                    }
                }

                if (visibleInputsCheckbox.checked) {
                    if (izohMatni?.length > 0) {
                        let res = null;
                        try {
                            if (params.name === "bajarish") {
                                res = await axiosInstance.post(`forDoing/${JSON.parse(localStorage.getItem('ids'))}/${dat.documentId}`, {
                                    comment: izohMatni,
                                    filesId: fileId,
                                    moduleId: null,
                                    journalId: null,
                                    journalNumber: null,
                                    otherFilesCount: 0
                                }, {
                                    headers: {
                                        Authorization: "Bearer " + currentUser
                                    }
                                })
                            }
                            if (params.name === "umumlashtiruvchi") {
                                res = await axiosInstance.post(`gen/${JSON.parse(localStorage.getItem('ids'))}/${dat.documentId}`, {
                                    comment: izohMatni,
                                    filesId: fileId,
                                    moduleId: null,
                                    journalId: null,
                                    journalNumber: null,
                                    otherFilesCount: 0
                                }, {
                                    headers: {
                                        Authorization: "Bearer " + currentUser
                                    }
                                })
                            }
                            if (params.name === "bajarilmagan") {
                                res = await axiosInstance.post(`notDoneDocs/${JSON.parse(localStorage.getItem('ids'))}/${dat.documentId}`, {
                                    comment: izohMatni,
                                    filesId: fileId,
                                    moduleId: null,
                                    journalId: null,
                                    journalNumber: null,
                                    otherFilesCount: 0
                                }, {
                                    headers: {
                                        Authorization: "Bearer " + currentUser
                                    }
                                })
                            }
                            Alert(setAlert, "success", "Muvaffaqiyatli yuklandi!");
                            setOpenIjroniYuklash({ open: false, obj: {} });
                            setChange(!change);
                            setFile(null);
                        } catch (error) {
                            console.log(error);
                        }
                    } else {
                        Alert(setAlert, "warning", "Izoh matni kiritilmagan");
                        setOpenIjroniYuklash({ open: false, obj: {} });
                    }
                } else {
                    if (fileId.length > 0) {
                        if (cardType) {
                            if (cardName) {
                                if (ruyxatNumber) {
                                    if (izohMatni.length > 0) {
                                        // to do server
                                        let res = null;
                                        try {
                                            if (params.name === "bajarish") {
                                                res = await axiosInstance.post(`forDoing/${JSON.parse(localStorage.getItem('ids'))}/${dat.documentId}`, {
                                                    comment: izohMatni,
                                                    filesId: fileId,
                                                    moduleId: cardTypeId[0].value,
                                                    journalId: cardNameId[0].value,
                                                    journalNumber: ruyxatNumber,
                                                    otherFilesCount: count
                                                }, {
                                                    headers: {
                                                        Authorization: "Bearer " + currentUser
                                                    }
                                                })
                                            }
                                            if (params.name === "umumlashtiruvchi") {
                                                res = await axiosInstance.post(`gen/${JSON.parse(localStorage.getItem('ids'))}/${dat.documentId}`, {
                                                    comment: izohMatni,
                                                    filesId: fileId,
                                                    moduleId: cardTypeId[0].value,
                                                    journalId: cardNameId[0].value,
                                                    journalNumber: ruyxatNumber,
                                                    otherFilesCount: count
                                                }, {
                                                    headers: {
                                                        Authorization: "Bearer " + currentUser
                                                    }
                                                })
                                            }
                                            if (params.name === "bajarilmagan") {
                                                res = await axiosInstance.post(`notDoneDocs/${JSON.parse(localStorage.getItem('ids'))}/${dat.documentId}`, {
                                                    comment: izohMatni,
                                                    filesId: fileId,
                                                    moduleId: cardTypeId[0].value,
                                                    journalId: cardNameId[0].value,
                                                    journalNumber: ruyxatNumber,
                                                    otherFilesCount: count
                                                }, {
                                                    headers: {
                                                        Authorization: "Bearer " + currentUser
                                                    }
                                                })
                                            }
                                            document.querySelector('.ijroSana').value = "";
                                            document.querySelector('.izohMatni').value = "";
                                            setChange(!change);
                                            setOpenIjroniYuklash({ open: false, obj: {} });
                                            Alert(setAlert, "success", "Muvaffaqiyatli yuklandi!");
                                            setFile(null);
                                        } catch (error) {
                                            console.log(error.response);
                                            Alert(setAlert, "warning", error.response?.data);
                                            setOpenIjroniYuklash({ open: false, obj: {} });
                                        }
                                    } else {
                                        Alert(setAlert, "warning", "Ko'pi bilan 300 ta harfdan iborat bo'lishi kerak");
                                        setOpenIjroniYuklash({ open: false, obj: {} });
                                    }
                                } else {
                                    Alert(setAlert, "warning", "Ruyxat nomer kiritilmagan");
                                    setOpenIjroniYuklash({ open: false, obj: {} });
                                }
                            } else {
                                Alert(setAlert, "warning", "Card nomi tanlanmagan");
                                setOpenIjroniYuklash({ open: false, obj: {} });
                            }
                        } else {
                            Alert(setAlert, "warning", "Card tanlanmagan");
                            setOpenIjroniYuklash({ open: false, obj: {} });
                        }
                    }
                }
            } else {
                Alert(setAlert, "warning", "Kamida 150 ta harfdan ko'pi bilan 300 ta harfdan iborat bo'lishi kerak");
                setOpenIjroniYuklash({ open: false, obj: {} });
            }
        } else {
            Alert(setAlert, "warning", "Fayl tanlash majburiy");
            setOpenIjroniYuklash({ open: false, obj: {} });
        }
    }

    // ijro hujjatini o'zgartirish
    const ijroHujjatiniUzgartirishSaqlash = async (dat) => {
        let cardTypeUzgartirish = document.querySelector('.cardType')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let cardNameUzgartirish = document.querySelector('.cardName')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let ruyxatUzgartirish = document.querySelector('.ruyxatUzgartirish')?.value;
        let izohMatniUzgartirish = document.querySelector('.izohMatniUzgartirish')?.value;

        let visibleInputsCheckbox = document.querySelector('.visibleInputs');

        let fileId = [];
        let count = 0;
        let selectCheckboxIjro = document.querySelectorAll('.selectCheckboxIjro');
        selectCheckboxIjro.forEach((d) => {
            if (d.checked) {
                fileId.push(d.getAttribute('idInput'));
            }
        });
        count = fileId.length;

        for (let i = 0; i < files?.length; i++) {
            const formData = new FormData()
            let fileType = (files[i]?.type === "application/zip" || files[i]?.type === "application/gzip" || files[i]?.type === "application/msword" || files[i]?.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || files[i]?.type === "application/vnd.openxmlformats-officedocument.presentationml.presentation" || files[i]?.type === "application/vnd.ms-powerpoint" || files[i]?.type === "application/vnd.ms-excel.sheet.macroEnabled.12" || files[i]?.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || files[i]?.type === "application/vnd.ms-excel" || files[i]?.type === "application/x-rar-compressed" || files[i]?.type === "application/pdf");

            // agar fayl berilgan kengaytmada bo'lsa, so'rov yuborish
            if (fileType) {
                formData.append("file", files[i]);
                let res = await axiosInstance.post("document/saveDuplicateFile", formData, {
                    headers: {
                        Authorization: "Bearer " + currentUser,
                        "Content-Type": "multipart/form-data",
                    }
                })
                fileId.push(res.data);
            }
        }

        // oldingi tanlangan file id larini olish
        chooseFiles.forEach((d) => {
            fileId.push(d.id);
        })

        // console.log(fileId);

        let cardTypeUzgartirishId = notParentsCard.filter((d) => {
            if (d.label === cardTypeUzgartirish) {
                return d;
            }
        })

        // cardtypeid
        let cardNameUzgartirishId = cardsName?.filter((d, i) => {
            if (cardNameUzgartirish === d.label) {
                return d;
            }
        })

        if (visibleInputsCheckbox.checked) {
            if (izohMatniUzgartirish.length > 0) {
                let res = null;
                try {
                    if (params.name === "bajarish") {
                        res = await axiosInstance.post(`forDoing/${JSON.parse(localStorage.getItem('ids'))}/${dat.documentId}`, {
                            comment: izohMatniUzgartirish,
                            filesId: fileId,
                            moduleId: null,
                            journalId: null,
                            journalNumber: null,
                            otherFilesCount: 0
                        }, {
                            headers: {
                                Authorization: "Bearer " + currentUser
                            }
                        })
                    }

                    if (params.name === "umumlashtiruvchi") {
                        res = await axiosInstance.post(`gen/${JSON.parse(localStorage.getItem('ids'))}/${dat.documentId}`, {
                            comment: izohMatniUzgartirish,
                            filesId: fileId,
                            moduleId: null,
                            journalId: null,
                            journalNumber: null,
                            otherFilesCount: 0
                        }, {
                            headers: {
                                Authorization: "Bearer " + currentUser
                            }
                        })
                    }
                    if (params.name === "bajarilmagan") {
                        res = await axiosInstance.post(`notDoneDocs/${JSON.parse(localStorage.getItem('ids'))}/${dat.documentId}`, {
                            comment: izohMatniUzgartirish,
                            filesId: fileId,
                            moduleId: null,
                            journalId: null,
                            journalNumber: null,
                            otherFilesCount: 0
                        }, {
                            headers: {
                                Authorization: "Bearer " + currentUser
                            }
                        })
                    }
                    if (params.name === "radEtilgan") {
                        res = await axiosInstance.post(`rejectedDocs/${JSON.parse(localStorage.getItem('ids'))}/${dat.documentId}`, {
                            comment: izohMatniUzgartirish,
                            filesId: fileId,
                            moduleId: null,
                            journalId: null,
                            journalNumber: null,
                            otherFilesCount: 0
                        }, {
                            headers: {
                                Authorization: "Bearer " + currentUser
                            }
                        })
                    }
                    Alert(setAlert, "success", "Muvaffaqiyatli yuklandi!");
                    setOpenIjroniUzgartirish({ open: false, obj: {} });
                    setChange(!change);
                    setFile1(null);
                    setFiles([]);
                } catch (error) {
                    console.log(error.response);
                }
            } else {
                Alert(setAlert, "warning", "Izoh matni kiritilmagan");
                setOpenIjroniUzgartirish({ open: false, obj: {} });
            }
        } else {
            if (fileId.length > 0) {
                if (cardTypeUzgartirish) {
                    if (cardNameUzgartirish) {
                        if (izohMatniUzgartirish.length > 0) {
                            if (ruyxatUzgartirish) {
                                // to do server
                                try {
                                    let res = null;
                                    if (params.name === "bajarish") {
                                        res = await axiosInstance.post(`forDoing/${JSON.parse(localStorage.getItem('ids'))}/${dat.documentId}`, {
                                            comment: izohMatniUzgartirish,
                                            filesId: fileId,
                                            moduleId: cardTypeUzgartirishId[0]?.value,
                                            journalId: cardNameUzgartirishId[0]?.value,
                                            journalNumber: ruyxatUzgartirish,
                                            otherFilesCount: count
                                        }, {
                                            headers: {
                                                Authorization: "Bearer " + currentUser
                                            }
                                        })
                                    }
                                    if (params.name === "umumlashtiruvchi") {
                                        res = await axiosInstance.post(`gen/${JSON.parse(localStorage.getItem('ids'))}/${dat.documentId}`, {
                                            comment: izohMatniUzgartirish,
                                            filesId: fileId,
                                            moduleId: cardTypeUzgartirishId[0]?.value,
                                            journalId: cardNameUzgartirishId[0]?.value,
                                            journalNumber: ruyxatUzgartirish,
                                            otherFilesCount: count
                                        }, {
                                            headers: {
                                                Authorization: "Bearer " + currentUser
                                            }
                                        })
                                    }
                                    if (params.name === "bajarilmagan") {
                                        res = await axiosInstance.post(`notDoneDocs/${JSON.parse(localStorage.getItem('ids'))}/${dat.documentId}`, {
                                            comment: izohMatniUzgartirish,
                                            filesId: fileId,
                                            moduleId: cardTypeUzgartirishId[0]?.value,
                                            journalId: cardNameUzgartirishId[0]?.value,
                                            journalNumber: ruyxatUzgartirish,
                                            otherFilesCount: count
                                        }, {
                                            headers: {
                                                Authorization: "Bearer " + currentUser
                                            }
                                        })
                                    }
                                    if (params.name === "radEtilgan") {
                                        res = await axiosInstance.post(`rejectedDocs/${JSON.parse(localStorage.getItem('ids'))}/${dat.documentId}`, {
                                            comment: izohMatniUzgartirish,
                                            filesId: fileId,
                                            moduleId: cardTypeUzgartirishId[0]?.value,
                                            journalId: cardNameUzgartirishId[0]?.value,
                                            journalNumber: ruyxatUzgartirish,
                                            otherFilesCount: count
                                        }, {
                                            headers: {
                                                Authorization: "Bearer " + currentUser
                                            }
                                        })
                                    }
                                    setChange(!change);
                                    setOpenIjroniUzgartirish({ open: false, obj: {} });
                                    Alert(setAlert, "success", "Ma'lumot muvaffaqiyatli o'zgartirildi");
                                    setFile1(null);
                                    setIjroDataYuklash([]);
                                } catch (error) {
                                    console.log(error.response);
                                    Alert(setAlert, "warning", error.response?.data);
                                    setOpenIjroniUzgartirish({ open: false, obj: {} });
                                }
                            } else {
                                Alert(setAlert, "warning", "Jurnal raqami kiritilmagan");
                                setOpenIjroniUzgartirish({ open: false, obj: {} });
                            }
                        } else {
                            Alert(setAlert, "warning", "Izoh kiritilmagan");
                            setOpenIjroniUzgartirish({ open: false, obj: {} });
                        }
                    } else {
                        Alert(setAlert, "warning", "Card nomi tanlanmagan");
                        setOpenIjroniUzgartirish({ open: false, obj: {} });
                    }
                } else {
                    Alert(setAlert, "warning", "Card tanlanmagan");
                    setOpenIjroniUzgartirish({ open: false, obj: {} });
                }
            } else {
                Alert(setAlert, "warning", "Fayl tanlash majburiy");
                setOpenIjroniUzgartirish({ open: false, obj: {} });
            }
        }

    }


    // faqat faylni yuborish yoki hammasini yuborish uchun
    useEffect(() => {
        if (openIjroniYuklash.open || openIjroniUzgartirish.open) {
            let checkbox = document.querySelector('.visibleInputs');
            checkbox.addEventListener('click', () => {
                if (checkbox.checked) {
                    document.querySelector('.visibleForm').style.display = "none";
                } else {
                    document.querySelector('.visibleForm').style.display = "block";
                }
            })
        }
    }, [openIjroniYuklash.open, openIjroniUzgartirish.open]);

    // faylni yuklash
    const setDownload = (doc) => {
        saveAs(doc);
    }

    // eimzo
    useEffect(() => {
        let li = document.querySelector('.selectElement')?.querySelector('.key')?.querySelectorAll('li');
        if (li) {
            li.forEach((l, index) => {
                l.addEventListener('click', () => {
                    // console.log(l);
                    let spans = l.querySelectorAll('span');
                    // console.log(spans);
                    let result = [];
                    spans.forEach((k) => {
                        let arr;
                        arr = {
                            name: k.textContent.split(':')[k.textContent.split(':').length - 1].trim(),
                        }
                        result.push(arr);
                    })
                    setImzo(result);
                    document.querySelector('.selectValue').textContent = l.textContent;
                    document.querySelector('.selectValue').setAttribute("value", `${l.getAttribute("value")}`);
                    document.querySelector('.selectValue').setAttribute("id", `${l.getAttribute("id")}`);
                    document.querySelector('.selectValue').setAttribute("vo", `${l.getAttribute("vo")}`);
                    for (let i = 0; i < li.length; i++) {
                        if (i !== index) {
                            li[i].style.backgroundColor = "";
                        } else {
                            li[i].style.backgroundColor = "rgba(211, 211, 211, 0.379)";
                        }
                    }
                })
            })
        }
    }, [selectVisible]);
    // const cancelEimzo = () => {
    //     let li = document.querySelector('.selectElement')?.querySelector('.key')?.querySelectorAll('li');
    //     document.querySelector('.selectValue').textContent = "";
    //     document.querySelector('.selectValue').removeAttribute("value");
    //     document.querySelector('.selectValue').removeAttribute("id");
    //     document.querySelector('.selectValue').removeAttribute("vo");
    //     document.querySelector('#keyId').textContent = "";
    //     document.querySelector('.pkcs7').value = "";
    //     for (let i = 0; i < li.length; i++) {
    //         li[i].style.backgroundColor = "";
    //     }
    // }


    // hamma malumotlarni saqlash
    const saveAllData = async () => {
        let XodimBajaruvchi = document.querySelectorAll('.XodimBajaruvchi');
        let bajaruvchiSana = document.querySelectorAll('.bajaruvchiSana');
        let checkedXodim = [];

        let xodimBool = true;
        XodimBajaruvchi.forEach((xodim, index) => {
            if (!xodim.querySelector('.css-qc6sy-singleValue')?.textContent) {
                xodimBool = false;
            }
        })

        let sanaBool = true;
        bajaruvchiSana.forEach((date, index) => {
            if (!date.value) {
                sanaBool = false;
            }
        })

        if (xodimBool) {
            // tashqi bajaruvchi va forma ni massiv ichga olish
            let inExecutorResolution = [];
            let forms = document.querySelectorAll('.bajaruvchiForm'); //3
            forms.forEach((form, index) => {
                let letter = "";
                let checkBoxCol1 = form.querySelector('.col1').querySelectorAll('.chb');
                checkBoxCol1.forEach((check, i) => {
                    console.log(check);
                    if (check.querySelector('.iconCheck').hasAttribute('style')) {
                        letter = check.querySelector('.iconCheck').textContent;
                    }
                })
                let Xodim = form.querySelector('.XodimBajaruvchi')?.querySelector('.css-qc6sy-singleValue')?.textContent;
                let izohCol1 = form.querySelector('.izohCol1').value;
                let deadLine = form.querySelector('.bajaruvchiSana').value;
                let qaytaIjro1 = form.querySelector('.col1QaytaIjro')?.querySelector('.css-qc6sy-singleValue')?.textContent;

                let period = [];
                // qayta ijro bosilganda uning periodini berish
                if (qaytaIjro1 === "Boshqa") {
                    period.push({ value: parseInt(form.querySelector('.boshqa').value), label: "Boshqa" })
                } else if (typeof parseInt(qaytaIjro1) > 0) {
                    period.push({ value: parseInt(qaytaIjro1), label: parseInt(qaytaIjro1) })
                } else {
                    qaytaIjro?.forEach((d, i) => {
                        if (d.label === qaytaIjro1) {
                            period.push(d);
                        }
                    })
                }

                let workPlace = [];
                // xodimni tanlagan payt workplaceId sini olish
                for (let i = 0; i < xodimlar.length; i++) {
                    if (xodimlar[i].label === Xodim) {
                        if (!checkedXodim.includes(xodimlar[i].pl)) {
                            workPlace.push(xodimlar[i]);
                            checkedXodim.push(xodimlar[i].pl);
                            break;
                        }
                    }
                }

                let obj = {
                    workPlaceId: workPlace[0]?.pl,
                    repeatExecutePeriod: period[0]?.value,
                    deadline: deadLine,
                    description: izohCol1,
                    executorStatusName: letter === "N" ? "Nazorat uchun" : letter === "U" ? "Umumlashtiruvchi" : letter === "M" ? "Ma'lumot uchun" : "Bajarish uchun"
                }
                inExecutorResolution.push(obj);
            })

            try {
                let res = null;
                if (params.name === "bajarish") {
                    res = await axiosInstance.post(`forDoing/direct`, {
                        id: params.id,
                        workPlaceId: JSON.parse(localStorage.getItem('ids')),
                        resolutionContent: document.querySelector('.izoh')?.value,
                        inExecutorResolution: inExecutorResolution,
                        outExecutorResolution: ids.length > 0 ? ids : outExecutorInformationList,
                        deadline: data?.document?.deadline,
                        esignature: {
                            fullName: imzo[2]?.name,
                            orgName: imzo[3]?.name,
                            lavozim: imzo[4]?.name,
                            inn: imzo[1]?.name,
                            validFrom: imzo[5]?.name?.split('-')[0].trim(),
                            validTo: imzo[5]?.name?.split('-')[1].trim(),
                            serialNumber: imzo[0]?.name
                        }
                    }, {
                        headers: {
                            Authorization: "Bearer " + currentUser
                        }
                    })
                }
                if (params.name === "umumlashtiruvchi") {
                    res = await axiosInstance.post(`gen/direct`, {
                        id: params.id,
                        workPlaceId: JSON.parse(localStorage.getItem('ids')),
                        resolutionContent: document.querySelector('.izoh')?.value,
                        inExecutorResolution: inExecutorResolution,
                        outExecutorResolution: ids.length > 0 ? ids : outExecutorInformationList,
                        deadline: data?.document?.deadline,
                        esignature: {
                            fullName: imzo[2]?.name,
                            orgName: imzo[3]?.name,
                            lavozim: imzo[4]?.name,
                            inn: imzo[1]?.name,
                            validFrom: imzo[5]?.name?.split('-')[0].trim(),
                            validTo: imzo[5]?.name?.split('-')[1].trim(),
                            serialNumber: imzo[0]?.name
                        }
                    }, {
                        headers: {
                            Authorization: "Bearer " + currentUser
                        }
                    })
                }
                if (params.name === "bajarilmagan") {
                    res = await axiosInstance.post(`notDoneDocs/direct`, {
                        id: params.id,
                        workPlaceId: JSON.parse(localStorage.getItem('ids')),
                        resolutionContent: document.querySelector('.izoh')?.value,
                        inExecutorResolution: inExecutorResolution,
                        outExecutorResolution: results,
                        deadline: data?.document?.deadline,
                        esignature: {
                            fullName: imzo[2]?.name,
                            orgName: imzo[3]?.name,
                            lavozim: imzo[4]?.name,
                            inn: imzo[1]?.name,
                            validFrom: imzo[5]?.name?.split('-')[0].trim(),
                            validTo: imzo[5]?.name?.split('-')[1].trim(),
                            serialNumber: imzo[0]?.name
                        }
                    }, {
                        headers: {
                            Authorization: "Bearer " + currentUser
                        }
                    })
                }
                //barcha yangi qo'shilganlarni o'chirib tashlash
                let trashes = document.querySelectorAll('.col6');
                trashes.forEach((tr, i) => {
                    tr.querySelector('button').click();
                })

                Alert(setAlert, 'success', "Ma'lumot muvaffaqiyatli saqlandi");
                setTimeout(() => {
                    history.push("/kiruvchi/resolution");
                }, 1500);
            } catch (error) {
                console.log(error.response);
                Alert(setAlert, 'warning', error?.response?.data?.message ? error?.response?.data?.message : error?.response?.data);
            }
        } else {
            Alert(setAlert, 'warning', "Bajaruvchi bo'limdagi xodim tanlanmagan");
        }
    }

    const uzgartirish = (dat) => {
        setOpenIjroniUzgartirish({ open: true, obj: dat });

        // shu yerdan davom ettiramiz
        let arr = [];
        dat?.executeDocument?.chosenFiles?.map((f) => {
            arr.push(f);
        })
        let arr1 = [];
        dat?.executeDocument?.otherFiles?.map((f) => {
            arr1.push(f);
        })

        setChooseFiles(arr);
        setOtherFiles(arr1);
    }

    // // file ni o'zgaruvchiga olish
    useEffect(() => {
        let arr = [];
        if (file1) {
            Object.values(file1)?.forEach((d) => {
                arr.push(d);
            })
            setFiles(arr);
        }
    }, [file1]);

    const getFile = async () => {
        let cardTypeYuklash = document.querySelector('.cardTypeYuklash').querySelector('.css-qc6sy-singleValue').textContent;
        let cardNameYuklash = document.querySelector('.cardNameYuklash').querySelector('.css-qc6sy-singleValue').textContent;

        // cardName id sini olish
        let cardsNameId = cardsName.filter((c) => {
            if (c.label === cardNameYuklash) {
                return c;
            }
        })

        if (cardTypeYuklash) {
            if (cardNameYuklash) {
                if (searchReg) {
                    try {
                        const res = await axiosInstance.get(`document/files/${cardsNameId[0].value}/${searchReg}`, {
                            headers: {
                                Authorization: "Bearer " + currentUser
                            }
                        })
                        setIjroDataYuklash(res.data);
                    } catch (error) {
                        console.log(error.response);
                        setOpenIjroniYuklash({ open: false, obj: {} });
                    }
                } else {
                    Alert(setAlert, "warning", "Ro'yxatga olish sanasi kiritilmagan");
                    setOpenIjroniYuklash({ open: false, obj: {} });
                }
            } else {
                Alert(setAlert, "warning", "Jurnal tanlanmagan");
                setOpenIjroniYuklash({ open: false, obj: {} });
            }
        } else {
            Alert(setAlert, "warning", "Modul tanlanmagan");
            setOpenIjroniYuklash({ open: false, obj: {} });
        }
    }

    // barcha yo'nalishlarni o'qib olish
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axiosInstance.get("organization/getPassive", {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                });
                setYunalishlar(res.data);
            } catch (error) {
                console.log(error.response);
            }
        }
        getData();
    }, [currentUser]);

    const passedPage = () => {
        try {
            if (params.name === "nazorat") {
                const res = axiosInstance.patch(`superVisor/done/${params.id}/${JSON.parse(localStorage.getItem('ids'))}`, {}, {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                history.push("/kiruvchi/bajarilgan");
            }
            if (params.name === "malumot") {
                const res = axiosInstance.patch(`forInfo/done/${params.id}/${JSON.parse(localStorage.getItem('ids'))}`, {}, {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                history.push("/kiruvchi/bajarilgan");
            }
        } catch (error) {
            console.log(error.response);
        }
    }

    // update va upload icon larini chiqarish
    useEffect(() => {
        let bool = false;
        data?.inExecutorInformationList?.forEach((d) => {
            if (d?.executeDocument && d?.workPlaceId === JSON.parse(localStorage.getItem('ids'))) {
                bool = true;
            }
        })
        if (bool) {
            setVIsibleIconIjro(true);
        } else {
            setVIsibleIconIjro(false);
        }
    }, [data]);

    // rad etish tugmasi
    const radEtish = async (dat) => {
        let textarea = document.querySelector('.closedIjroTextArea').value;

        if (textarea.length > 0) {
            try {
                const res = await axiosInstance.post("controlling/reject", {
                    documentId: dat?.documentId,
                    workPlaceId: dat?.workPlaceId,
                    tabName: dat?.tabName,
                    comment: textarea
                }, {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                // console.log(res.data);
                setClosedIjro({ open: false, obj: {} });
                Alert(setAlert, "warning", "Hujjat rad etildi");
            } catch (error) {
                console.log(error.response);
            }
        } else {
            Alert(setAlert, "warning", "Izoh yozish majburiy");
            setClosedIjro({ open: false, obj: {} });
        }
    }

    // tasdiqlash
    const tasdiqlash = async (dat) => {
        let textarea = document.querySelector('.closedIjroTextArea').value;
        let sanaTasdiqlash = document.querySelector('.sanaTasdiqlash').value;

        if (textarea.length > 0) {
            try {
                const res = await axiosInstance.post("controlling/accept", {
                    documentId: dat?.documentId,
                    workPlaceId: dat?.workPlaceId,
                    tabName: dat?.tabName,
                    comment: textarea,
                    date: sanaTasdiqlash || null
                }, {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                // console.log(res.data);
                setOpenIjro({ open: false, obj: {} });
                Alert(setAlert, "success", "Hujjat tasdiqlandi");
            } catch (error) {
                console.log(error.response);
            }
        } else {
            Alert(setAlert, "warning", "Izoh yozish majburiy");
            setOpenIjro({ open: false, obj: {} });
        }
    }


    
    // umumiy tashqi bajaruvchilar
    // search tashqi bajaruvchilar
    const changeInputChange1 = (value, index) => {
        let tashqiBajUlInline = document.getElementsByClassName('tashqiBajUlInline')[index];
        let inlineContent = tashqiBajUlInline.querySelectorAll('.inlineContent');
        inlineContent.forEach((d) => {
            let v = d.querySelector('div').textContent.toUpperCase();
            if (v.indexOf(value.toUpperCase(), 0) > -1) {
                d.style.display = "flex";
            } else {
                d.style.display = "none";
            }
        })
    }

    // search tashqi bajaruvchilar ichki qismi
    const changeInputChange2 = (value, index) => {
        let tashqiBajUlInline = document.getElementsByClassName('tashqiBajUlInline')[index];
        let inlineContent2 = tashqiBajUlInline?.querySelectorAll('.inlineContent2');
        inlineContent2.forEach((d) => {
            let inlineContent3 = d.querySelectorAll('.inlineContent3');
            inlineContent3.forEach((s) => {
                let v = s.querySelector('div').textContent.toUpperCase();
                if (v.indexOf(value.toUpperCase(), 0) > -1) {
                    s.style.display = "flex";
                } else {
                    s.style.display = "none";
                }
            })
        })
    }

    // tashqi bajaruvchilar uchun
    useEffect(() => {
        let tashqiBaj = document.querySelector('.tashqiBaj');
        let tashqiBajUlInline = document.querySelectorAll('.tashqiBajUlInline');
        let li1 = tashqiBaj?.querySelectorAll('.tashqiBajLi1');
        let inlineContent = tashqiBaj?.querySelectorAll('.inlineContent');

        // bosganda plus minusni taxlash
        li1?.forEach((li, i) => {
            li?.addEventListener('click', () => {
                if (tashqiBajUlInline[i].style.display === "block") {
                    tashqiBajUlInline[i].style.display = "none";
                    li.querySelector('.iconMinus').style.display = "none";
                    li.querySelector('.iconPlus').style.display = "block";

                } else {
                    tashqiBajUlInline[i].style.display = "block";
                    li.querySelector('.iconMinus').style.display = "block";
                    li.querySelector('.iconPlus').style.display = "none";

                }
            })
        })

        // barchasini tanlash uchun
        tashqiBajUlInline?.forEach((t) => {
            t.querySelector('.allChecked').addEventListener('click', () => {
                if (t.querySelector('.allChecked').textContent === "Barchasini tanlash") {
                    t.querySelectorAll('.inlineContent').forEach((k) => {
                        k.querySelector('input').checked = true;
                    });
                    t.querySelector('.allChecked').textContent = "Barchasini o'chirish";
                    t.querySelector('.allChecked').style.backgroundColor = "crimson";
                } else {
                    t.querySelectorAll('.inlineContent').forEach((k) => {
                        k.querySelector('input').checked = false;
                    });
                    t.querySelector('.allChecked').textContent = "Barchasini tanlash";
                    t.querySelector('.allChecked').style.backgroundColor = "#0056B8";
                }
            })
        })

        // ichki qismi uchun
        inlineContent?.forEach((y, ind) => {
            y.querySelector('div').addEventListener('click', () => {
                if (document.getElementsByClassName('inlineContent2')[ind].style.display === "block") {
                    document.getElementsByClassName('inlineContent2')[ind].style.display = "none";
                } else {
                    document.getElementsByClassName('inlineContent2')[ind].style.display = "block";
                }
            })
        })
        tashqiBajUlInline?.forEach((t) => {
            t.querySelector('.allChecked1')?.addEventListener('click', () => {
                if (t.querySelector('.allChecked1').textContent === "Barchasini tanlash") {
                    t.querySelectorAll('.inlineContent3').forEach((k) => {
                        k.querySelector('input').checked = true;
                    });
                    t.querySelector('.allChecked1').textContent = "Barchasini o'chirish";
                    t.querySelector('.allChecked1').style.backgroundColor = "crimson";
                } else {
                    t.querySelectorAll('.inlineContent3').forEach((k) => {
                        k.querySelector('input').checked = false;
                    });
                    t.querySelector('.allChecked1').textContent = "Barchasini tanlash";
                    t.querySelector('.allChecked1').style.backgroundColor = "#0056B8";
                }
            })
        })

        // bittasi unchecked bo'lsa button ni o'zgartirish
        tashqiBajUlInline?.forEach((d) => {
            let idsDiv1 = d.querySelectorAll('.idsDiv1');
            let inlineContent2 = document.querySelectorAll('.inlineContent2');
            // tashqi qismi uchun
            idsDiv1.forEach((r) => {
                r.addEventListener('click', () => {
                    let bool = true;
                    if (r.checked) {
                        idsDiv1.forEach((t) => {
                            if (!t.checked) {
                                bool = false;
                            }
                        })
                        if (bool) {
                            d.querySelector('.allChecked').textContent = "Barchasini o'chirish";
                            d.querySelector('.allChecked').style.backgroundColor = "crimson";
                        } else {
                            d.querySelector('.allChecked').textContent = "Barchasini tanlash";
                            d.querySelector('.allChecked').style.backgroundColor = "#0056B8";
                        }
                    } else {
                        idsDiv1.forEach((t) => {
                            if (!t.checked) {
                                bool = false;
                            }
                        })
                        if (bool) {
                            d.querySelector('.allChecked').textContent = "Barchasini o'chirish";
                            d.querySelector('.allChecked').style.backgroundColor = "crimson";
                        } else {
                            d.querySelector('.allChecked').textContent = "Barchasini tanlash";
                            d.querySelector('.allChecked').style.backgroundColor = "#0056B8";
                        }
                    }
                })
            })
            // ichki qismi
            inlineContent2?.forEach((w, index) => {
                let idsDiv2 = w.querySelectorAll('.idsDiv2');
                idsDiv2.forEach((r) => {
                    r.addEventListener('click', () => {
                        let bool = true;
                        if (r.checked) {
                            idsDiv2.forEach((t) => {
                                if (!t.checked) {
                                    bool = false;
                                }
                            })
                            if (bool) {
                                w.querySelector('.allChecked1').textContent = "Barchasini o'chirish";
                                w.querySelector('.allChecked1').style.backgroundColor = "crimson";
                            } else {
                                w.querySelector('.allChecked1').textContent = "Barchasini tanlash";
                                w.querySelector('.allChecked1').style.backgroundColor = "#0056B8";
                            }
                        } else {
                            idsDiv2.forEach((t) => {
                                if (!t.checked) {
                                    bool = false;
                                }
                            })
                            if (bool) {
                                w.querySelector('.allChecked1').textContent = "Barchasini o'chirish";
                                w.querySelector('.allChecked1').style.backgroundColor = "crimson";
                            } else {
                                w.querySelector('.allChecked1').textContent = "Barchasini tanlash";
                                w.querySelector('.allChecked1').style.backgroundColor = "#0056B8";
                            }
                        }
                    })
                })
            })
        })
    }, [openModal]);

    // tashqi bajaruvchilarni saqlash
    const saveAllSelectOrganizations = () => {
        let tashqiBajUlInline = document.querySelectorAll('.tashqiBajUlInline');
        let result = [];
        tashqiBajUlInline?.forEach((d, index) => {
            let idsDiv1 = d.querySelectorAll('.idsDiv1');
            let bool = true, arr = [];
            idsDiv1.forEach((r) => {
                if (!r.checked) {
                    bool = false;
                }
            })
            if (bool) {
                d.querySelectorAll('.idsDiv').forEach((r) => {
                    if (r.checked) {
                        arr.push(r.getAttribute('ids'));
                    }
                });
                result.push({ id: index, ids: arr, value: d.querySelector('.inputTashqiTash').value });
            } else {
                d.querySelectorAll('.idsDiv').forEach((r) => {
                    if (r.checked) {
                        arr.push(r.getAttribute('ids'));
                    }
                });
                if (arr.length > 0) {
                    result.push({ id: index, ids: arr, value: null });
                }
            }
        })
        console.log(result);
        setResults(result);
        setOpenModal(false);
    }


    return (
        <div className="content" style={{ marginBottom: "110px" }}>
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "uppercase" }}>Ko'rish</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ paddingTop: "2px" }}>
                    <ContentNavbar />
                    <li className="nav-item">
                        <NavLink to="/kiruvchi_bajarish_ijro" className="nav-link" activeClassName="NavLinkLi">
                            <i className="icon-eye2 mr-1"></i>Topshiriqlar
                        </NavLink>
                    </li>
                </ul>

                <div className="card">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="card-body">
                                {/* fishka */}
                                {data?.document?.files?.length > 0 && data?.document?.files?.map((file, ind) => (
                                    <>
                                        {ind === 0 && (
                                            <>
                                                <object data={url + "/api/file/view/" + file?.generatedName} type="application/pdf" style={{ width: "100%", height: "1000px" }}>
                                                    <iframe src={url + "/api/file/view/" + file?.generatedName} style={{ width: "100%", height: "1000px" }}></iframe>
                                                </object>
                                            </>
                                        )}
                                    </>
                                ))}
                            </div>

                            {data?.document?.isDirect ? !isMainFishka ? <button className="btn btn-success ml-3 mb-3" onClick={() => setIsMainFishka(!isMainFishka)}>{"Asosiy rezolutsiyani ko'rish"} </button> : <button className="btn btn-danger ml-3 mb-3" onClick={() => setIsMainFishka(!isMainFishka)}>{"Asosiy rezolutsiyani yopish"} </button> : ""}

                            {isMainFishka && <div className="ml-3 mr-3">
                                <object data={url + "/api/document/mainFishka/" + params.id} type="application/pdf" style={{ width: "100%", height: "1000px" }}>
                                    <iframe src={url + "/api/document/mainFishka/" + params.id} style={{ width: "100%", height: "1000px" }}></iframe>
                                </object>
                            </div>
                            }
                        </div>

                        <div className="col-lg-7">
                            <div className="card-block mt-3">
                                <div className="card-box">
                                    {/* hujjat aylanish yo'li */}
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-header bg-primary text-white header-elements-inline">
                                                <h6 className="card-title" style={{ fontWeight: "bold", textTransform: "upperCase" }}>Xujjat aylanish yo'li</h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="col-lg-12">
                                                    <span className="text-color" style={{ fontSize: "18px" }}>{data?.document?.organizationName}</span>
                                                    <ul style={{ fontSize: "17px", lineHeight: "1.9", paddingLeft: "20px" }}>
                                                        <li>
                                                            <span className="color-black mr-1">Korrespondent:</span>{data?.document?.correspondentName}
                                                        </li>
                                                        <li>
                                                            <span className="color-black mr-1">№:</span><b className="text-color font-size-lg">{data?.document?.journalNumber}</b> <span className="text-primary"><b className="text-dark">(</b>{dateFormat(data?.document?.registerAt)}<b className="text-dark">)</b></span>
                                                        </li>
                                                        <li>
                                                            <span className="color-black mr-1">Rezalutsiya:</span>
                                                            <span className="mr-1">{data?.document?.confirmerName?.split(" ")[0]?.substring(0, 1)}. {data?.document?.confirmerName?.split(" ")[1]}</span>
                                                            <span className="badge badge-success mr-1">Imzolangan</span>
                                                            <span className="text-primary"><b className="text-dark">(</b>{dateFormat(data?.document?.signedAt)}<b className="text-dark">)</b></span>
                                                        </li>
                                                        <li>
                                                            <span className="color-black" >Nazoratda: </span>
                                                            <ul className="ml-2">
                                                                {data?.inExecutorInformationList?.length > 0 && data?.inExecutorInformationList?.map((dat, i) => (
                                                                    <>
                                                                        {dat?.executorStatusName === "NAZORAT UCHUN" && (
                                                                            <li>
                                                                                <span className="mr-1">{(dat?.firstName && dat?.firstName?.length > 1) ? ((((dat?.firstName[0].toUpperCase() === "S" || dat?.firstName[0].toUpperCase() === "C") && dat?.firstName[1].toUpperCase() === "H")) ? dat?.firstName?.substring(0, 2) + ". " : dat?.firstName?.substring(0, 1) + ". ") : ""}{dat?.lastName}</span>
                                                                                <span className="badge text-white mr-1" style={{ backgroundColor: status.filter((s, i) => s.englishName === dat?.documentStatus)[0]?.color }}>{status.filter((s, i) => s.englishName === dat?.documentStatus)[0]?.LatinName}</span>
                                                                                <span className="text-primary">
                                                                                    <b className="text-dark">(</b>{dateFormat(dat?.statusTime)}<b className="text-dark">)</b>
                                                                                </span>
                                                                                <ul className="ml-3">
                                                                                    {data?.inExecutorInformationList?.length > 0 && data?.inExecutorInformationList?.map((user, i) => (
                                                                                        <>
                                                                                            {(dat?.workPlaceId === user?.directBy) && (
                                                                                                <li>
                                                                                                    <span className="mr-1">{(user?.firstName && user?.firstName?.length > 1) ? ((((user?.firstName[0].toUpperCase() === "S" || user?.firstName[0].toUpperCase() === "C") && user?.firstName[1].toUpperCase() === "H")) ? user?.firstName?.substring(0, 2) + ". " : user?.firstName?.substring(0, 1) + ". ") : ""}{user?.lastName}</span>
                                                                                                    <strong style={{ textTransform: "lowercase" }}>({user?.executorStatusName})</strong>&nbsp;
                                                                                                    <span className="badge text-white mr-1" style={{ backgroundColor: status.filter((s, i) => s.englishName === user?.documentStatus)[0]?.color }}>{status.filter((s, i) => s.englishName === user?.documentStatus)[0]?.LatinName}</span>
                                                                                                    <span className="text-primary">
                                                                                                        <b className="text-dark">(</b>{dateFormat(user?.documentStatusAtTheMoment)}<b className="text-dark">)</b>
                                                                                                    </span>
                                                                                                </li>
                                                                                            )}
                                                                                        </>
                                                                                    ))}
                                                                                </ul>
                                                                            </li>
                                                                        )}
                                                                    </>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span className="color-black">Ijrochilar:</span>
                                                            <ul className="ml-2">
                                                                {data?.inExecutorInformationList?.length > 0 && data?.inExecutorInformationList?.map((dat, i) => (
                                                                    <>
                                                                        {(dat?.executorStatusName !== "NAZORAT UCHUN") && (
                                                                            <li>
                                                                                <span className="mr-1">{(dat?.firstName && dat?.firstName?.length > 1) ? ((((dat?.firstName[0].toUpperCase() === "S" || dat?.firstName[0].toUpperCase() === "C") && dat?.firstName[1].toUpperCase() === "H")) ? dat?.firstName?.substring(0, 2) + ". " : dat?.firstName?.substring(0, 1) + ". ") : ""}{dat?.lastName}</span>
                                                                                {!(dat?.executorStatusName === "BAJARISH UCHUN") && (
                                                                                    <>
                                                                                        {!(dat?.documentStatus === "DIRECTED") && (
                                                                                            <>
                                                                                                <strong style={{ color: "blue" }}>({dat?.executorStatusName?.substring(0, 1)?.toUpperCase()})</strong> &nbsp;
                                                                                            </>
                                                                                        )}
                                                                                    </>
                                                                                )}
                                                                                <span className="badge text-white mr-1" style={{ backgroundColor: status.filter((s, i) => s.englishName === dat?.documentStatus)[0]?.color }}>{status.filter((s, i) => s.englishName === dat?.documentStatus)[0]?.LatinName}</span>
                                                                                <span className="text-primary">
                                                                                    <b className="text-dark">(</b>{dateFormat(dat?.statusTime)}<b className="text-dark">)</b>
                                                                                </span>
                                                                                <ul className="ml-4">
                                                                                    {dat?.directedInExecutors?.map((user, ind) => (
                                                                                        <li>
                                                                                            <span className="mr-1">{(user?.firstName && user?.firstName?.length > 1) ? ((((user?.firstName[0].toUpperCase() === "S" || user?.firstName[0].toUpperCase() === "C") && user?.firstName[1].toUpperCase() === "H")) ? user?.firstName?.substring(0, 2) + ". " : user?.firstName?.substring(0, 1) + ". ") : ""}{user?.lastName}</span>
                                                                                            {!(user?.executorStatusName === "BAJARISH UCHUN") && (
                                                                                                <>
                                                                                                    <strong style={{ color: "blue" }}>({user?.executorStatusName?.substring(0, 1).toUpperCase()})</strong>&nbsp;
                                                                                                </>
                                                                                            )}
                                                                                            <span className="badge text-white mr-1" style={{ backgroundColor: status.filter((s, i) => s.englishName === user?.documentStatus)[0]?.color }}>{status.filter((s, i) => s.englishName === user?.documentStatus)[0]?.LatinName}</span>
                                                                                            <span className="text-primary">
                                                                                                <b className="text-dark">(</b>{dateFormat(user?.documentStatusAtTheMoment)}<b className="text-dark">)</b>
                                                                                            </span>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            </li>
                                                                        )}
                                                                    </>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span className="color-black">Yuborilgan tashkilotlar:</span>
                                                            <ul>
                                                                {data?.outExecutorInformationList?.length > 0 && data?.outExecutorInformationList?.map((d, i) => (
                                                                    <li>
                                                                        <span className="mr-1">{d?.organizationName}</span>
                                                                        <span className="badge text-white mr-1" style={{ backgroundColor: status.filter((s, i) => s.englishName === d?.documentStatusName)[0]?.color }}>{status.filter((s, i) => s.englishName === d?.documentStatusName)[0]?.LatinName}</span>
                                                                        <span className="text-primary"><b className="text-dark">(</b>{dateFormat(d?.deadline)}<b className="text-dark">)</b></span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* kiruvchi */}
                                <div className="card-box">
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-header bg-primary text-white header-elements-inline">
                                                <h6 className="card-title" style={{
                                                    fontWeight: "bold",
                                                    textTransform: "upperCase"
                                                }}>Kiruvchi</h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="p-0">
                                                    <table
                                                        className="table table-bordered table-striped table-hover Tab">
                                                        <tbody>
                                                            {data?.document?.files?.length > 0 && data?.document?.files?.map((hujjat, index) => (
                                                                <>
                                                                    {index !== 0 && (
                                                                        <>
                                                                            {hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "pdf" ? (
                                                                                <tr>
                                                                                    <th className="d-flex align-items-center cursor-pointer">
                                                                                        <i className="far fa-file-pdf mr-2 fa-2x pdfIcon" style={{ fontSize: "20px" }} />
                                                                                        <a href={url + "/api/file/view/" + hujjat?.generatedName} target="_blank" rel="noreferrer noopener">PDF FILE</a>
                                                                                    </th>
                                                                                </tr>
                                                                            ) : (hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "doc" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "docx" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "vnd.openxmlformats-officedocument.wordprocessingml.document") ? (
                                                                                <tr>
                                                                                    <th className="d-flex align-items-center cursor-pointer">
                                                                                        <i className="far fa-file-word mr-2 fa-2x wordIcon"
                                                                                            style={{ fontSize: "20px" }} />
                                                                                        <a href={url + "/api/file/view/" + hujjat?.generatedName} target="_blank" rel="noreferrer noopener">WORD FILE</a>
                                                                                    </th>
                                                                                </tr>
                                                                            ) : (hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "xls" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "xlsx" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "vnd.openxmlformats-officedocument.spreadsheetml.sheet") ? (
                                                                                <tr>
                                                                                    <th className="d-flex align-items-center cursor-pointer">
                                                                                        <i className="far fa-file-excel mr-2 fa-2x excelIcon"
                                                                                            style={{ fontSize: "20px" }} />
                                                                                        <a href={url + "/api/file/view/" + hujjat?.generatedName}
                                                                                            target="_blank" rel="noreferrer noopener">EXCEL FILE</a>
                                                                                    </th>
                                                                                </tr>
                                                                            ) : (hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "ppt" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "pptx" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "vnd.openxmlformats-officedocument.presentationml.presentation") ? (
                                                                                <tr>
                                                                                    <th className="d-flex align-items-center cursor-pointer">
                                                                                        <i className="far fa-file-powerpoint mr-2 fa-2x pptIcon"
                                                                                            style={{ fontSize: "20px" }} />
                                                                                        <a href={url + "/api/file/view/" + hujjat?.generatedName}
                                                                                            target="_blank" rel="noreferrer noopener">POWERPOINT FILE</a>
                                                                                    </th>
                                                                                </tr>
                                                                            ) : (
                                                                                <tr>
                                                                                    <th className="d-flex align-items-center cursor-pointer">
                                                                                        <i className="far fa-file-archive mr-2 fa-2x rarIcon"
                                                                                            style={{ fontSize: "20px" }}></i>
                                                                                        <a href={url + "/api/file/view/" + hujjat?.generatedName}
                                                                                            target="_blank" rel="noreferrer noopener">ZIP, RAR FILE</a>
                                                                                    </th>
                                                                                </tr>
                                                                            )}
                                                                        </>
                                                                    )}
                                                                </>
                                                            ))}
                                                            {/* hammasini bittaga yuklash uchun */}
                                                            <tr className="">
                                                                <th className="d-flex align-items-center justify-content-end cursor-pointer p-0">
                                                                    <a
                                                                        href={url + `/api/document/getDocumentFiles/${params.id}/${JSON.parse(localStorage.getItem('ids'))}`}
                                                                        className="btn btn-primary w-100"
                                                                    >Fayllarni birlashtirib yuklash</a>
                                                                </th>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* ichki topshiriqlar */}
                                {data?.inExecutorInformationList?.length > 0 && (
                                    <div className="card-box">
                                        <div className="col-lg-12">
                                            <div className="card">
                                                <div className="card-header bg-primary text-white header-elements-inline">
                                                    <h6 className="card-title" style={{ fontWeight: "bold", textTransform: "upperCase" }}>Ichki Topshiriqlar</h6>
                                                </div>
                                                <div className="card-body">
                                                    <div className="table-responsive">
                                                        <table className="table table-striped table-bordered table-hover Tab">
                                                            <thead className="bg-dark text-white NavLink text-center">
                                                                <tr>
                                                                    <th style={{ width: "15%" }}>Topshiriq</th>
                                                                    <th style={{ width: "20%" }}>Muddat/holat</th>
                                                                    <th style={{ width: "30%" }}>Qo'shimcha izoh</th>
                                                                    <th style={{ width: "40%" }}>Ijro</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {data?.inExecutorInformationList.length > 0 && data?.inExecutorInformationList?.map((dat, index) => (
                                                                    <>
                                                                        <tr className="text-center">
                                                                            <td>
                                                                                <p>{(dat?.firstName && dat?.firstName?.length > 1) ? ((((dat?.firstName[0].toUpperCase() === "S" || dat?.firstName[0].toUpperCase() === "C") && dat?.firstName[1].toUpperCase() === "H")) ? dat?.firstName?.substring(0, 2) + ". " : dat?.firstName?.substring(0, 1) + ". ") : ""}{dat?.lastName}</p>
                                                                                <p className="badge badge-primary">REG № {dat?.documentId}</p>

                                                                                <p>{dateFormat(dat?.documentStatusAtTheMoment)}</p>
                                                                            </td>
                                                                            <td>
                                                                                <p>{dateFormat(dat?.deadline)}</p>
                                                                                <span className="badge text-white mr-1" style={{ backgroundColor: status.filter((s, i) => s.englishName === dat?.documentStatus)[0]?.color }}>{status.filter((s, i) => s.englishName === dat?.documentStatus)[0]?.LatinName}</span>
                                                                                <span className="d-flex align-items-center justify-content-center"><br />
                                                                                    {params.name === "nazoratdanOlish" && (
                                                                                        <>
                                                                                            {(dat.documentStatus === "IN_PROCESS") && (
                                                                                                <>
                                                                                                    <i className="fas fa-close text-danger cursor-pointer iconCheckDanger" onClick={() => setClosedIjro({ open: true, obj: dat })} style={{ fontSize: "20px" }}></i>
                                                                                                    <i className="fas fa-check text-success cursor-pointer iconCheckSuccess" onClick={() => setOpenIjro({ open: true, obj: dat })} style={{ fontSize: "20px" }}></i>
                                                                                                </>
                                                                                            )}
                                                                                        </>
                                                                                    )}
                                                                                </span>
                                                                            </td>
                                                                            <td className="text-left" style={{ wordBreak: "break-word" }}>
                                                                                {dat?.description}
                                                                            </td>
                                                                            <td className="text-left" style={{ wordBreak: "break-word" }}>
                                                                                <>
                                                                                    {(dat?.executeDocument?.chosenFiles?.length > 0 || dat?.executeDocument?.comment) ? (
                                                                                        <p>
                                                                                            <span className="d-block">
                                                                                                <strong>Izoh:&nbsp;</strong>
                                                                                                <span style={{ fontWeight: "400" }}>
                                                                                                    {openStr ? (
                                                                                                        <span onClick={() => setOpenStr(false)} className="cursor-pointer">
                                                                                                            {dat?.executeDocument?.comment} <span style={{ color: "blue", fontSize: "11px" }}>&nbsp; yashirish</span>
                                                                                                        </span>
                                                                                                    ) : (
                                                                                                        <span onClick={() => setOpenStr(true)} className="cursor-pointer">
                                                                                                            {dat?.executeDocument?.comment?.substring(0, count)}
                                                                                                            {dat?.executeDocument?.comment?.length > count ? (
                                                                                                                <span style={{ color: "blue", fontSize: "11px" }}>&nbsp; davomi</span>
                                                                                                            ) : (
                                                                                                                <span></span>
                                                                                                            )}
                                                                                                        </span>
                                                                                                    )}
                                                                                                </span>
                                                                                            </span>
                                                                                            <div className="">
                                                                                                <strong>File:&nbsp;</strong>
                                                                                                <div className="d-flex" style={{ flexWrap: "wrap" }}>
                                                                                                    {dat.executeDocument?.chosenFiles?.length > 0 && dat.executeDocument?.chosenFiles?.map((hujjat, index) => (
                                                                                                        <>
                                                                                                            {hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "pdf" ? (
                                                                                                                <span className="d-flex align-items-center cursor-pointer mr-2 mb-2" >
                                                                                                                    <i className="far fa-file-pdf mr-1 fa-2x pdfIcon" style={{ fontSize: "20px" }} />
                                                                                                                    <a href={url + "/api/file/view/" + hujjat?.id} target="_blank" rel="noreferrer noopener">PDF FILE, </a>
                                                                                                                </span>
                                                                                                            ) : (hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "doc" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "docx" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "vnd.openxmlformats-officedocument.wordprocessingml.document") ? (
                                                                                                                <span className="d-flex align-items-center cursor-pointer mr-2 mb-2" >
                                                                                                                    <i className="far fa-file-word mr-1 fa-2x wordIcon"
                                                                                                                        style={{ fontSize: "20px" }} />
                                                                                                                    <a href={url + "/api/file/view/" + hujjat?.id}
                                                                                                                        target="_blank" rel="noreferrer noopener">WORD FILE, </a>
                                                                                                                </span>
                                                                                                            ) : (hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "xls" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "xlsx" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "vnd.openxmlformats-officedocument.spreadsheetml.sheet") ? (
                                                                                                                <span className="d-flex align-items-center cursor-pointer mr-2 mb-2" >
                                                                                                                    <i className="far fa-file-excel mr-1 fa-2x excelIcon"
                                                                                                                        style={{ fontSize: "20px" }} />
                                                                                                                    <a href={url + "/api/file/view/" + hujjat?.id}
                                                                                                                        target="_blank" rel="noreferrer noopener">EXCEL FILE, </a>
                                                                                                                </span>
                                                                                                            ) : (hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "ppt" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "pptx" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "vnd.openxmlformats-officedocument.presentationml.presentation") ? (
                                                                                                                <span className="d-flex align-items-center cursor-pointer mr-2 mb-2" >
                                                                                                                    <i className="far fa-file-powerpoint mr-1 fa-2x pptIcon"
                                                                                                                        style={{ fontSize: "20px" }} />
                                                                                                                    <a href={url + "/api/file/view/" + hujjat?.id}
                                                                                                                        target="_blank" rel="noreferrer noopener">POWERPOINT FILE, </a>
                                                                                                                </span>
                                                                                                            ) : (
                                                                                                                <span className="d-flex align-items-center cursor-pointer mr-2 mb-2" >
                                                                                                                    <i className="far fa-file-archive mr-1 fa-2x rarIcon" style={{ fontSize: "20px" }}></i>
                                                                                                                    <a href={url + "/api/file/view/" + hujjat?.id} target="_blank" rel="noreferrer noopener">ZIP, RAR FILE, </a>
                                                                                                                </span>
                                                                                                            )}
                                                                                                        </>
                                                                                                    ))}
                                                                                                </div>
                                                                                            </div>
                                                                                            {dat?.workPlaceId === JSON.parse(localStorage.getItem('ids')) && (

                                                                                                params.name !== "bajarilgan" && (< span className="d-block infoBtn bg-dark cursor-pointer m-auto d-flex align-items-center justify-content-center" onClick={() => uzgartirish(dat)} data-popup="tooltip" data-bs-toggle="tooltip" data-bs-placement="top" title="O'zgartirish">
                                                                                                    <i i className="icon-pencil5"></i>
                                                                                                </span>)

                                                                                            )}
                                                                                        </p>
                                                                                    ) : (
                                                                                        <>
                                                                                            {(dat?.workPlaceId === JSON.parse(localStorage.getItem('ids')) && (params.name !== "nazorat" && params.name !== "bajarilgan" && params.name !== "malumot") && params.name !== "nazoratdanOlish") && (
                                                                                                <div className="d-flex justify-content-center">
                                                                                                    <span className="infoBtn bg-dark cursor-pointer text-white p-2" onClick={() => setOpenIjroniYuklash({ open: true, obj: dat })} data-popup="tooltip" data-bs-toggle="tooltip" data-bs-placement="top" title="Ijroni yuklash">
                                                                                                        <i className="icon-file-upload"></i>
                                                                                                        {/* button */}
                                                                                                    </span>
                                                                                                </div>
                                                                                            )}
                                                                                            {(dat?.workPlaceId === JSON.parse(localStorage.getItem('ids')) && (params.name === "nazorat" || params.name === "malumot")) && (
                                                                                                <div className="d-flex justify-content-center">
                                                                                                    <button
                                                                                                        className="btn btn-success"
                                                                                                        onClick={() => setOpenButtonClick(true)}
                                                                                                        style={{ textTransform: "capitalize" }}
                                                                                                    >
                                                                                                        button
                                                                                                    </button>
                                                                                                </div>
                                                                                            )}
                                                                                        </>
                                                                                    )}
                                                                                </>
                                                                            </td>
                                                                        </tr>
                                                                    </>
                                                                ))}
                                                            </tbody>

                                                            {/* button tugma uchun */}
                                                            {openButtonCLick && (
                                                                <div className="adminWindow">
                                                                    <div className="modal-dialog">
                                                                        <div className="modal-content">
                                                                            <div className="modal-header bg-primary text-white">
                                                                                <h6 className="modal-title">Statusga o'tish oynasi</h6>
                                                                                <button type="button" className="close" onClick={() => setOpenButtonClick(false)}>×</button>
                                                                            </div>
                                                                            <div className="modal-body text-center">
                                                                                <h3 style={{ textTransform: "upperCase", fontWeight: "bold" }} className="text-danger">Ogoh bo'ling!</h3>
                                                                                <h5>Bajarilgan statusini qabul qilasizmi?</h5>
                                                                            </div>
                                                                            <div className="modal-footer">
                                                                                <button type="button" className="btn btn-danger" onClick={() => setOpenButtonClick(false)}>Yo'q</button>
                                                                                <button type="button" className="btn btn-primary ml-1" onClick={passedPage}>Ha</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}

                                                            {/* ajratish uchun */}
                                                            <tbody>
                                                                <tr>
                                                                    <td colSpan={4}>
                                                                        <hr style={{ height: '2px', backgroundColor: "#000", width: "100%" }} />
                                                                    </td>
                                                                </tr>
                                                            </tbody>

                                                            {/* faqat yo'naltirganlar */}
                                                            <tbody>
                                                                {data?.inExecutorInformationList.length > 0 && data?.inExecutorInformationList?.map((dat, index) => (
                                                                    <>
                                                                        {dat?.directedInExecutors?.map((user) => (
                                                                            <tr className="text-center">
                                                                                <td>
                                                                                    <p>{(user?.firstName && user?.firstName?.length > 1) ? ((((user?.firstName[0].toUpperCase() === "S" || user?.firstName[0].toUpperCase() === "C") && user?.firstName[1].toUpperCase() === "H")) ? user?.firstName?.substring(0, 2) + ". " : user?.firstName?.substring(0, 1) + ". ") : ""}{user?.lastName}</p>
                                                                                    <p className="badge badge-primary">REG № {user?.documentId}</p>
                                                                                    <p>{dateFormat(user?.documentStatusAtTheMoment)}</p>
                                                                                </td>
                                                                                <td>
                                                                                    <p>{(user?.directFirstName && user?.directFirstName?.length > 1) ? ((((user?.directFirstName[0].toUpperCase() === "S" || user?.directFirstName[0].toUpperCase() === "C") && user?.directFirstName[1].toUpperCase() === "H")) ? user?.directFirstName.substring(0, 2) + ". " : user?.directFirstName?.substring(0, 1) + ". ") : ""}{user?.directLastName}</p>
                                                                                    <p>{dateFormat(user?.deadline)}</p>
                                                                                    <span className="badge text-white mr-1" style={{ backgroundColor: status.filter((s, i) => s.englishName === user?.documentStatus)[0]?.color }}>{status.filter((s, i) => s.englishName === user?.documentStatus)[0]?.LatinName}</span><br />
                                                                                    {params.name === "nazoratdanOlish" && (
                                                                                        <>
                                                                                            {(user.documentStatus === "IN_PROCESS") && (
                                                                                                <>
                                                                                                    {/* closed(dat) */}
                                                                                                    <i className="fas fa-close text-danger cursor-pointer iconCheckDanger" onClick={() => setClosedIjro({ open: true, obj: dat })} style={{ fontSize: "20px" }}></i>
                                                                                                    <i className="fas fa-check text-success cursor-pointer iconCheckSuccess" onClick={() => setOpenIjro({ open: true, obj: dat })} style={{ fontSize: "20px" }}></i>
                                                                                                </>
                                                                                            )}
                                                                                        </>
                                                                                    )}
                                                                                </td>
                                                                                <td className="text-left" style={{ wordBreak: "break-word" }}>
                                                                                </td>
                                                                                <td className="text-left" style={{ wordBreak: "break-word" }}>
                                                                                    <>
                                                                                        {(user?.executeDocument?.chosenFiles?.length > 0 || user?.executeDocument?.comment) ? (
                                                                                            <>
                                                                                                <p>
                                                                                                    <span className="d-block">
                                                                                                        <strong>Izoh:&nbsp;</strong>
                                                                                                        <span style={{ fontWeight: "400" }}>
                                                                                                            {openStr ? (
                                                                                                                <span onClick={() => setOpenStr(false)} className="cursor-pointer">
                                                                                                                    {user?.executeDocument?.comment} <span style={{ color: "blue", fontSize: "11px" }}>&nbsp; yashirish</span>
                                                                                                                </span>
                                                                                                            ) : (
                                                                                                                <span onClick={() => setOpenStr(true)} className="cursor-pointer">
                                                                                                                    {user?.executeDocument?.comment?.substring(0, count)}
                                                                                                                    {user?.executeDocument?.comment?.length > count ? (
                                                                                                                        <span style={{ color: "blue", fontSize: "11px" }}>&nbsp; davomi</span>
                                                                                                                    ) : (
                                                                                                                        <span></span>
                                                                                                                    )}
                                                                                                                </span>
                                                                                                            )}
                                                                                                        </span>
                                                                                                    </span>
                                                                                                    <div className="d-flex">
                                                                                                        <strong>File:&nbsp;</strong>
                                                                                                        {user?.executeDocument?.chosenFiles?.length > 0 && user?.executeDocument?.chosenFiles?.map((hujjat, index) => (
                                                                                                            <>
                                                                                                                {hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "pdf" ? (
                                                                                                                    <span className="d-flex align-items-center cursor-pointer mr-2">
                                                                                                                        <i className="far fa-file-pdf mr-1 fa-2x pdfIcon" style={{ fontSize: "20px" }} />
                                                                                                                        <a href={url + "/api/file/view/" + hujjat?.id} target="_blank" rel="noreferrer noopener">PDF FILE, </a>
                                                                                                                    </span>
                                                                                                                ) : (hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "doc" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "docx" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "vnd.openxmlformats-officedocument.wordprocessingml.document") ? (
                                                                                                                    <span className="d-flex align-items-center cursor-pointer mr-2">
                                                                                                                        <i className="far fa-file-word mr-1 fa-2x wordIcon"
                                                                                                                            style={{ fontSize: "20px" }} />
                                                                                                                        <a href={url + "/api/file/view/" + hujjat?.id}
                                                                                                                            target="_blank" rel="noreferrer noopener">WORD FILE, </a>
                                                                                                                    </span>
                                                                                                                ) : (hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "xls" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "xlsx" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "vnd.openxmlformats-officedocument.spreadsheetml.sheet") ? (
                                                                                                                    <span className="d-flex align-items-center cursor-pointer mr-2">
                                                                                                                        <i className="far fa-file-excel mr-1 fa-2x excelIcon"
                                                                                                                            style={{ fontSize: "20px" }} />
                                                                                                                        <a href={url + "/api/file/view/" + hujjat?.id}
                                                                                                                            target="_blank" rel="noreferrer noopener">EXCEL FILE, </a>
                                                                                                                    </span>
                                                                                                                ) : (hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "ppt" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "pptx" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "vnd.openxmlformats-officedocument.presentationml.presentation") ? (
                                                                                                                    <span className="d-flex align-items-center cursor-pointer mr-2">
                                                                                                                        <i className="far fa-file-powerpoint mr-1 fa-2x pptIcon"
                                                                                                                            style={{ fontSize: "20px" }} />
                                                                                                                        <a href={url + "/api/file/view/" + hujjat?.id}
                                                                                                                            target="_blank" rel="noreferrer noopener">POWERPOINT FILE, </a>
                                                                                                                    </span>
                                                                                                                ) : (
                                                                                                                    <span className="d-flex align-items-center cursor-pointer mr-2">
                                                                                                                        <i className="far fa-file-archive mr-1 fa-2x rarIcon" style={{ fontSize: "20px" }}></i>
                                                                                                                        <a href={url + "/api/file/view/" + hujjat?.id} target="_blank" rel="noreferrer noopener">ZIP, RAR FILE, </a>
                                                                                                                    </span>
                                                                                                                )}
                                                                                                            </>
                                                                                                        ))}
                                                                                                    </div>
                                                                                                    {user?.workPlaceId === JSON.parse(localStorage.getItem('ids')) && (
                                                                                                        <span className="d-block infoBtn updateIconIjro bg-dark cursor-pointer m-auto d-flex align-items-center justify-content-center" onClick={() => uzgartirish(user)} data-popup="tooltip" data-bs-toggle="tooltip" data-bs-placement="top" title="O'zgartirish">
                                                                                                            <i className="icon-pencil5"></i>
                                                                                                        </span>
                                                                                                    )}
                                                                                                </p>
                                                                                            </>
                                                                                        ) : (
                                                                                            <>
                                                                                                {user?.workPlaceId === JSON.parse(localStorage.getItem('ids')) && (
                                                                                                    <div className="d-flex justify-content-center">
                                                                                                        <span className="infoBtn uploadIconIjro bg-dark cursor-pointer" onClick={() => setOpenIjroniYuklash({ open: true, obj: user })} data-popup="tooltip" data-bs-toggle="tooltip" data-bs-placement="top" title="Ijroni yuklash">
                                                                                                            <i className="icon-file-upload"></i>
                                                                                                        </span>
                                                                                                    </div>
                                                                                                )}
                                                                                            </>
                                                                                        )}
                                                                                    </>
                                                                                </td>
                                                                            </tr>
                                                                        ))}
                                                                    </>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {closedIjro.open && (
                                    <div className="adminWindow text-center">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header bg-primary text-white">
                                                    <h6 className="modal-title">Izoh kiriting:</h6>
                                                </div>
                                                <div className="modal-body ">
                                                    <textarea
                                                        name=""
                                                        rows="8"
                                                        className="form-control closedIjroTextArea"
                                                    >
                                                    </textarea>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-link bekorQilish" onClick={() => setClosedIjro({ open: false, obj: {} })}>Yopish</button>
                                                    <button type="button" className="btn btn-danger" onClick={() => radEtish(closedIjro.obj)}>Rad etish</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {openIjro.open && (
                                    <div className="adminWindow text-center">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header bg-primary text-white">
                                                    <h6 className="modal-title">Tasdiqlash oynasi:</h6>
                                                </div>
                                                <div className="modal-body ">
                                                    <input
                                                        type="date"
                                                        className="form-control mb-2 sanaTasdiqlash"
                                                    />
                                                    <textarea
                                                        name=""
                                                        rows="8"
                                                        className="form-control closedIjroTextArea"
                                                        placeholder="Izoh..."
                                                    >
                                                    </textarea>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-link bekorQilish" onClick={() => setOpenIjro({ open: false, obj: {} })}>Yopish</button>
                                                    <button type="button" className="btn btn-success" onClick={() => tasdiqlash(openIjro.obj)}>Tasdiqlash</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* ijroni yuklash uchun */}
                                {openIjroniYuklash.open && (
                                    <div className="adminWindow">
                                        <div className="modal-dialog modal-xl modal-dialog-scrollable">
                                            <div className="modal-content" style={{ maxHeight: "700px", overflowY: "scroll" }}>
                                                <div className="modal-header bg-primary text-white">
                                                    <h6 className="modal-title"
                                                        style={{ fontWeight: "bold", textTransform: "upperCase" }}>
                                                        Ijro hujjati</h6>
                                                    <button type="button" className="close" onClick={() => setOpenIjroniYuklash({ open: false, obj: {} })}>&times;</button>
                                                </div>
                                                <div className="row ">
                                                    <div className="col-lg-12 d-flex align-items-center pl-4 pt-2">
                                                        <input type="checkbox" style={{ width: "18px", height: "18px" }} className="cursor-pointer mr-1 visibleInputs mb-0" defaultChecked={true} />
                                                        <label className="mb-0">Faqat faylni tanlash</label>
                                                    </div>
                                                </div>

                                                <div className="modal-body">
                                                    <div className="form-group form-group-floating visibleForm" style={{ display: "none" }}>
                                                        <div className="row">
                                                            <div className="col-lg-4 mb-3">
                                                                <label className="mb-0" style={{ fontSize: "12px", fontWeight: "bold" }}>Modul tanlash:</label>
                                                                <Select
                                                                    // defaultValue={options[1]}
                                                                    options={notParentsCard}
                                                                    onChange={notParentsCardClick}
                                                                    placeholder="Kiruvchi"
                                                                    className="cardType cardTypeYuklash"
                                                                    isClearable={true}
                                                                />
                                                            </div>
                                                            <div className="col-lg-5 mb-3">
                                                                <label className="mb-0" style={{ fontSize: "12px", fontWeight: "bold" }}>Jurnal:</label>
                                                                <Select
                                                                    // defaultValue={options[1]}
                                                                    options={cardsName}
                                                                    // onChange={logChange}
                                                                    placeholder="Jurnal"
                                                                    className="cardName cardNameYuklash"
                                                                    isClearable={true}
                                                                />
                                                            </div>
                                                            <div className="col-lg-2 mb-3">
                                                                <label className="mb-0" style={{ fontSize: "12px", fontWeight: "bold" }}>Ro'yxatga:</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control form-control-outline ruyxatNumber"
                                                                    onChange={(e) => setSearchReg(e.target.value)}
                                                                    placeholder="Reg№"
                                                                />
                                                            </div>
                                                            <div className="col-lg-1 d-flex align-items-center">
                                                                <i className="fas fa-search text-white iconIjroCOntent" onClick={getFile}></i>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <table className="table table-bordered datatable-select-single table-striped table-hover Tab">
                                                                    <tbody>
                                                                        {ijroDataYulash?.length > 0 && ijroDataYulash?.map((d, i) => (
                                                                            <tr>
                                                                                <td className="d-flex align-items-center justify-content-between">
                                                                                    <a href={url + "/api/file/view/" + d.id}>{d?.originalName}</a>
                                                                                    <input type="checkbox" style={{ width: "30px", height: "20px" }} className="selectCheckboxIjro" idInput={d?.id} />
                                                                                </td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="position-relative">
                                                                <textarea
                                                                    cols="5"
                                                                    rows="5"
                                                                    id="malumot"
                                                                    minLength="150"
                                                                    maxLength="300"
                                                                    className="form-control form-control-outline izohMatni"
                                                                    placeholder="Izoh"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-body pt-0 mt-2 px-0" style={{ zIndex: "-1 !important", width: "100%" }}>
                                                        <div className="form-group w-100 mb-0">
                                                            <label className="custom-file">
                                                                <input
                                                                    type="file"
                                                                    className="custom-file-input"
                                                                    accept='.doc, .docx, .xls, .xlsx, .ppt, .pptx, .pdf, .zip, .rar'
                                                                    onClick={(e) => e.target.value = null}
                                                                    onChange={(e) => setFile(e.target.files)}
                                                                    multiple

                                                                />
                                                                <span className="custom-file-label w-100">
                                                                    {file?.length > 0 ? `${file?.length} ta fayl tanlandi` : "Faylni yuklash"}
                                                                </span>
                                                            </label>
                                                            <label className="d-block text-muted mb-0">Ruxsat etilgan formatlar:doc, docx, xls,xlsx, ppt, pptx, pdf, .zip, .rar</label>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="errorAddIjro text-danger"></span>
                                                    </div>

                                                    {/* all files select */}
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <ul>
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer pr-0">
                                                        <button type="button" className="btn btn-primary" onClick={() => ijroHujjatiniSaqlash(openIjroniYuklash.obj)}>Saqlash</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* ijroni uzgartirish uchun */}
                                {openIjroniUzgartirish.open && (
                                    <div className="adminWindow ">
                                        <div className="modal-dialog modal-xl modal-dialog-scrollable">
                                            <div className="modal-content adminWindowHeight">
                                                <div className="modal-header bg-primary text-white">
                                                    <h6 className="modal-title"
                                                        style={{ fontWeight: "bold", textTransform: "upperCase" }}>
                                                        Ijro hujjati</h6>
                                                    <button type="button" className="close" onClick={() => setOpenIjroniUzgartirish({ open: false, obj: {} })}>&times;</button>
                                                </div>
                                                <div className="row ">
                                                    <div className="col-lg-12 d-flex align-items-center pl-4 pt-2">
                                                        <input
                                                            type="checkbox"
                                                            style={{ width: "18px", height: "18px" }}
                                                            className="cursor-pointer mr-1 visibleInputs mb-0"
                                                            defaultChecked={!(openIjroniUzgartirish.obj?.executeDocument?.moduleName || openIjroniUzgartirish.obj?.executeDocument?.journalName || openIjroniUzgartirish.obj?.executeDocument?.journalNumber || openIjroniUzgartirish.obj?.executeDocument?.otherFiles.length > 0)}
                                                        />
                                                        <label className="mb-0">Faqat faylni tanlash</label>
                                                    </div>
                                                </div>

                                                <div className="modal-body">
                                                    <div className="form-group form-group-floating visibleForm" style={{ display: (openIjroniUzgartirish.obj?.executeDocument?.moduleName || openIjroniUzgartirish.obj?.executeDocument?.journalName || openIjroniUzgartirish.obj?.executeDocument?.journalNumber || openIjroniUzgartirish.obj?.executeDocument?.otherFiles.length > 0) ? "block" : "none" }}>
                                                        <div className="row">
                                                            <div className="col-lg-4 mb-3">
                                                                <label className="mb-0" style={{ fontSize: "12px", fontWeight: "bold" }}>Modul tanlash:</label>
                                                                <Select
                                                                    defaultValue={{ value: openIjroniUzgartirish.obj?.executeDocument?.moduleName, label: openIjroniUzgartirish.obj?.executeDocument?.moduleName }}
                                                                    options={notParentsCard}
                                                                    onChange={notParentsCardClick}
                                                                    placeholder="Kiruvchi"
                                                                    className="cardType cardTypeYuklash"
                                                                    isClearable={true}
                                                                />
                                                            </div>
                                                            <div className="col-lg-5 mb-3">
                                                                <label className="mb-0" style={{ fontSize: "12px", fontWeight: "bold" }}>Jurnal:</label>
                                                                <Select
                                                                    defaultValue={{ value: openIjroniUzgartirish.obj?.executeDocument?.journalName, label: openIjroniUzgartirish.obj?.executeDocument?.journalName }}
                                                                    options={cardsName}
                                                                    // onChange={logChange}
                                                                    placeholder="Jurnal"
                                                                    className="cardName cardNameYuklash"
                                                                    isClearable={true}
                                                                />
                                                            </div>
                                                            <div className="col-lg-2 mb-3">
                                                                <label className="mb-0" style={{ fontSize: "12px", fontWeight: "bold" }}>Ro'yxatga:</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control form-control-outline ruyxatUzgartirish"
                                                                    onChange={(e) => setSearchReg(e.target.value)}
                                                                    placeholder="Reg№"
                                                                    defaultValue={openIjroniUzgartirish.obj?.executeDocument?.journalId}
                                                                />
                                                            </div>
                                                            <div className="col-lg-1 d-flex align-items-center">
                                                                <i className="fas fa-search text-white iconIjroCOntent" onClick={getFile}></i>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <table className="table table-bordered datatable-select-single table-striped table-hover Tab">
                                                                    <tbody>
                                                                        {ijroDataYulash?.length > 0 && ijroDataYulash?.map((d, i) => (
                                                                            <tr>
                                                                                <td className="d-flex align-items-center justify-content-between">
                                                                                    <a href={url + "/api/file/view/" + d?.id}>{d?.originalName}</a>
                                                                                    <input type="checkbox" style={{ width: "30px", height: "20px" }} className="selectCheckboxIjro" idInput={d?.id} />
                                                                                </td>
                                                                            </tr>
                                                                        ))}
                                                                        {otherFiles?.length > 0 && otherFiles?.map((d, i) => (
                                                                            <tr>
                                                                                <td className="d-flex align-items-center justify-content-between">
                                                                                    <a href={url + "/api/file/view/" + d?.id}>{d?.originalName}</a>
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        style={{ width: "30px", height: "20px" }}
                                                                                        className="selectCheckboxIjro"
                                                                                        idInput={d.id}
                                                                                        defaultChecked={true}
                                                                                    />
                                                                                </td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="position-relative">
                                                                <textarea
                                                                    cols="5"
                                                                    rows="5"
                                                                    id="malumot"
                                                                    maxLength="250"
                                                                    className="form-control form-control-outline izohMatniUzgartirish"
                                                                    placeholder="Izoh"
                                                                    defaultValue={openIjroniUzgartirish.obj?.executeDocument?.comment}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-body pt-0 mt-2 px-0">
                                                        <div className="form-group w-100 mb-0">
                                                            <span className="text-muted">{chooseFiles?.length > 0 ? chooseFiles?.length + " ta fayl tanlangan" : "Faylni yuklash"}</span>
                                                            <label className="custom-file">
                                                                <input
                                                                    type="file"
                                                                    className="custom-file-input"
                                                                    accept='.doc, .docx, .xls, .xlsx, .ppt, .pptx, .pdf, .zip, .rar'
                                                                    onClick={(e) => e.target.value = null}
                                                                    onChange={(e) => setFile1(e.target.files)}
                                                                    multiple
                                                                    style={{ width: "100%" }}
                                                                />
                                                                <span className="custom-file-label w-100">
                                                                    {files?.length > 0 ? `${files?.length} ta fayl tanlandi` : "Faylni yuklash"}
                                                                </span>
                                                            </label>
                                                            <label className="d-block text-muted mb-0">Ruxsat etilgan formatlar:doc, docx, xls,xlsx, ppt, pptx, pdf, .zip, .rar</label>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="errorAddIjro text-danger"></span>
                                                    </div>

                                                    {/* all files select */}
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <ul className="mb-0">
                                                                {chooseFiles?.length > 0 && chooseFiles?.map((hujjat, i) => (
                                                                    <>
                                                                        {hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "pdf" ? (
                                                                            <li className='kiruvchiMain'>
                                                                                <div className='d-flex align-items-center'>
                                                                                    <i className="far fa-file-pdf mr-2 fa-2x pdfIcon" style={{ fontSize: "28px" }} />
                                                                                    <span className='pt-1'>PDF FILE</span>
                                                                                </div>
                                                                                <span onClick={() => deleteFile1(i)}> <i className="icon-trash"></i></span>
                                                                            </li>
                                                                        ) : (hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "doc" || hujjat?.extention?.split('.')[hujjat?.extention?.split('.').length - 1] === "docx" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "vnd.openxmlformats-officedocument.wordprocessingml.document") ? (
                                                                            <li className='kiruvchiMain'>
                                                                                <div className='d-flex align-items-center'>
                                                                                    <i className="far fa-file-word mr-2 fa-2x wordIcon" style={{ fontSize: "28px" }} />
                                                                                    <span className='pt-1'>WORD FILE</span>
                                                                                </div>
                                                                                <span onClick={() => deleteFile1(i)}> <i className="icon-trash"></i></span>
                                                                            </li>
                                                                        ) : (hujjat?.extention?.split('.')[hujjat?.extention?.split('.').length - 1] === "xls" || hujjat?.extention?.split('.')[hujjat?.extention?.split('.').length - 1] === "xlsx" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "vnd.openxmlformats-officedocument.spreadsheetml.sheet") ? (
                                                                            <li className='kiruvchiMain'>
                                                                                <div className='d-flex align-items-center'>
                                                                                    <i className="far fa-file-excel mr-2 fa-2x excelIcon" style={{ fontSize: "28px" }} />
                                                                                    <span className='pt-1'>EXCEL FILE</span>
                                                                                </div>
                                                                                <span onClick={() => deleteFile1(i)}> <i className="icon-trash"></i></span>
                                                                            </li>
                                                                        ) : (hujjat?.extention?.split('.')[hujjat?.extention?.split('.').length - 1] === "ppt" || hujjat?.extention?.split('.')[hujjat?.extention?.split('.').length - 1] === "pptx" || hujjat?.extention?.split('/')[hujjat?.extention?.split('/').length - 1] === "vnd.openxmlformats-officedocument.presentationml.presentation") ? (
                                                                            <li className='kiruvchiMain'>
                                                                                <div className='d-flex align-items-center'>
                                                                                    <i className="far fa-file-powerpoint mr-2 fa-2x pptIcon" style={{ fontSize: "28px" }} />
                                                                                    <span className='pt-1'>POWERPOINT FILE</span>
                                                                                </div>
                                                                                <span onClick={() => deleteFile1(i)}> <i className="icon-trash"></i></span>
                                                                            </li>
                                                                        ) : (
                                                                            <li className='kiruvchiMain'>
                                                                                <div className='d-flex align-items-center'>
                                                                                    <i className="far fa-file-archive mr-2 fa-2x rarIcon" style={{ fontSize: "28px" }} />
                                                                                    <span className='pt-1'>ZIP, RAR FILE</span>
                                                                                </div>
                                                                                <span onClick={() => deleteFile1(i)}> <i className="icon-trash"></i></span>
                                                                            </li>
                                                                        )}
                                                                    </>
                                                                ))}
                                                            </ul>
                                                            <ul>
                                                                {files?.length > 0 && files?.map((hujjat, i) => (
                                                                    <>
                                                                        {hujjat?.type?.split('/')[hujjat?.type?.split('/').length - 1] === "pdf" ? (
                                                                            <li className='kiruvchiMain'>
                                                                                <div className='d-flex align-items-center'>
                                                                                    <i className="far fa-file-pdf mr-2 fa-2x pdfIcon" style={{ fontSize: "28px" }} />
                                                                                    <span className='pt-1'>PDF FILE</span>
                                                                                </div>
                                                                                <span onClick={() => deleteFile2(i)}> <i className="icon-trash"></i></span>
                                                                            </li>
                                                                        ) : (hujjat?.type?.split('/')[hujjat?.type?.split('/').length - 1] === "doc" || hujjat?.type?.split('.')[hujjat?.type?.split('.').length - 1] === "docx" || hujjat?.type?.split('/')[hujjat?.type?.split('/').length - 1] === "vnd.openxmlformats-officedocument.wordprocessingml.document") ? (
                                                                            <li className='kiruvchiMain'>
                                                                                <div className='d-flex align-items-center'>
                                                                                    <i className="far fa-file-word mr-2 fa-2x wordIcon" style={{ fontSize: "28px" }} />
                                                                                    <span className='pt-1'>WORD FILE</span>
                                                                                </div>
                                                                                <span onClick={() => deleteFile2(i)}> <i className="icon-trash"></i></span>
                                                                            </li>
                                                                        ) : (hujjat?.type?.split('.')[hujjat?.type?.split('.').length - 1] === "xls" || hujjat?.type?.split('.')[hujjat?.type?.split('.').length - 1] === "xlsx" || hujjat?.type?.split('/')[hujjat?.type?.split('/').length - 1] === "vnd.openxmlformats-officedocument.spreadsheetml.sheet") ? (
                                                                            <li className='kiruvchiMain'>
                                                                                <div className='d-flex align-items-center'>
                                                                                    <i className="far fa-file-excel mr-2 fa-2x excelIcon" style={{ fontSize: "28px" }} />
                                                                                    <span className='pt-1'>EXCEL FILE</span>
                                                                                </div>
                                                                                <span onClick={() => deleteFile2(i)}> <i className="icon-trash"></i></span>
                                                                            </li>
                                                                        ) : (hujjat?.type?.split('.')[hujjat?.type?.split('.').length - 1] === "ppt" || hujjat?.type?.split('.')[hujjat?.type?.split('.').length - 1] === "pptx" || hujjat?.type?.split('/')[hujjat?.type?.split('/').length - 1] === "vnd.openxmlformats-officedocument.presentationml.presentation") ? (
                                                                            <li className='kiruvchiMain'>
                                                                                <div className='d-flex align-items-center'>
                                                                                    <i className="far fa-file-powerpoint mr-2 fa-2x pptIcon" style={{ fontSize: "28px" }} />
                                                                                    <span className='pt-1'>POWERPOINT FILE</span>
                                                                                </div>
                                                                                <span onClick={() => deleteFile2(i)}> <i className="icon-trash"></i></span>
                                                                            </li>
                                                                        ) : (
                                                                            <li className='kiruvchiMain'>
                                                                                <div className='d-flex align-items-center'>
                                                                                    <i className="far fa-file-archive mr-2 fa-2x rarIcon" style={{ fontSize: "28px" }} />
                                                                                    <span className='pt-1'>ZIP, RAR FILE</span>
                                                                                </div>
                                                                                <span onClick={() => deleteFile2(i)}> <i className="icon-trash"></i></span>
                                                                            </li>
                                                                        )}
                                                                    </>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer pr-0">
                                                        <button type="button" className="btn btn-primary" onClick={() => ijroHujjatiniUzgartirishSaqlash(openIjroniUzgartirish.obj)}>Saqlash</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* rezalutsiya mazmuni */}
                                {((ranks.includes(1) || ranks.includes(2) || ranks.includes(3) || ranks.includes(4)) && !visibleIconIjro && params.name !== "nazoratdanOlish") && (
                                    <div className="card-box" style={{ display: ((params.name === "bajarish" || params.name === "umumlashtiruvchi" || params.name === "bajarilmagan" || params.name === "radEtilgan" || params.name === "nazorat") && (data?.hasPermissionForDirect)) ? "block" : "none" }}>
                                        <div className="col-lg-12">
                                            <div className="card">
                                                <div className="card-header bg-primary text-white header-elements-inline">
                                                    <h6 className="card-title" style={{ fontWeight: "bold", textTransform: "upperCase" }}>Rezalutsiya mazmuni</h6>
                                                </div>
                                                <div className="form-group form-group-floating row my-2 mx-2">
                                                    <div className="col-lg-12">
                                                        <div className="position-relative">
                                                            <textarea
                                                                className="form-control form-control-outline izoh"
                                                                placeholder="Placeholder "
                                                                style={{ height: "100px" }}
                                                                maxLength="301"
                                                            // defaultValue={data?.document?.resolutionContent}
                                                            >
                                                            </textarea>
                                                            <label className="label-floating">Izoh</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* tezkor rezolutsiya */}
                                {((ranks.includes(1) || ranks.includes(2) || ranks.includes(3) || ranks.includes(4)) && !visibleIconIjro && params.name !== "nazoratdanOlish") && (
                                    <div className="card-box" style={{ display: ((params.name === "bajarish" || params.name === "umumlashtiruvchi" || params.name === "bajarilmagan" || params.name === "radEtilgan" || params.name === "nazorat") && (data?.hasPermissionForDirect)) ? "block" : "none" }}>
                                        <div className="col-lg-12">
                                            <div className="card">
                                                <div className="card-header bg-primary text-white header-elements-inline">
                                                    <h6 className="card-title"
                                                        style={{ fontWeight: "bold", textTransform: "upperCase" }}>Tezkor Rezalutsiya</h6>
                                                </div>
                                                <div className="card-body">
                                                    <table className="table table-bordered datatable-select-single table-striped table-hover Tab">
                                                        <tbody>
                                                            {tezkorRezolutsiya.length > 0 && tezkorRezolutsiya.map((dat, index) => (
                                                                <tr key={index} className="tezkorRezolutsiyaRow">
                                                                    <td style={{ width: "5%" }}>
                                                                        <input type="checkbox" style={{ width: "30px", height: "20px" }} className="selectCheckbox" />
                                                                    </td>
                                                                    <td style={{ width: "95%" }} className="rezName">{dat?.name}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* qo'shimcha bajaruvchilar */}
                                {((params.name === "bajarish" || params.name === "umumlashtiruvchi" || params.name === "bajarilmagan" || params.name === "radEtilgan" || params.name === "nazorat") && (data?.hasPermissionForDirect) && !visibleIconIjro && params.name !== "nazoratdanOlish") && (
                                    <>
                                        {(ranks.includes(1) || ranks.includes(2) || ranks.includes(3) || ranks.includes(4)) && (
                                            <div className="card-box">
                                                <div className="col-lg-12">
                                                    <div className="">
                                                        <div className="card-header bg-primary text-white header-elements-inline">
                                                            <h6 className="card-title" style={{ fontWeight: "bold", textTransform: "upperCase" }}>Qo'shimcha Bajaruvchilar</h6>
                                                        </div>
                                                        {yangiQushish.map((yangi, index) => (
                                                            <div key={index} >
                                                                <form onSubmit={deleteFun} className="bajaruvchiForm">
                                                                    <div className="card-box">
                                                                        <div className="card mb-3">
                                                                            <div className="card-body" id="bajaruvchi">
                                                                                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                                                                                    <div className="d-flex col1 mb-1" style={{ flex: "1" }}>
                                                                                        <div className="checkbox chb mr-1" title="Nazorat" onClick={(e) => checkedDivNazorat(e.target, index)}>
                                                                                            <strong className="checkedName">N</strong>
                                                                                            <strong className="iconCheck text-white">N</strong>
                                                                                        </div>
                                                                                        <div className="checkbox chb mr-1" title="Umumlashtirish" onClick={(e) => checkedDivUmum(e.target, index)}>
                                                                                            <strong className="checkedName">U</strong>
                                                                                            <strong className="iconCheck text-white">U</strong>
                                                                                        </div>
                                                                                        <div className="checkbox chb mr-1" title="M" onClick={(e) => checkedDivM(e.target, index)}>
                                                                                            <strong className="checkedName">M</strong>
                                                                                            <strong className="iconCheck text-white">M</strong>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col2 mb-1 mr-1" style={{ flex: "3" }}>
                                                                                        <div className="form-group mb-0">
                                                                                            <Select
                                                                                                // defaultValue={options[1]}
                                                                                                options={xodimlar}
                                                                                                onChange={selectXodimFunc}
                                                                                                placeholder="Xodim"
                                                                                                className="XodimBajaruvchi"
                                                                                                isClearable={true}
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col3 mb-1 mr-1" style={{ flex: "2" }}>
                                                                                        <div className="form-group form-group-floating row mb-0">
                                                                                            <div className="col-lg-12">
                                                                                                <div className="position-relative">
                                                                                                    <textarea
                                                                                                        className="form-control form-control-outline izohCol1"
                                                                                                        style={{ height: "56px" }}
                                                                                                        placeholder="Placeholder"
                                                                                                    >
                                                                                                    </textarea>
                                                                                                    <label className="label-floating">Izoh</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col4 mb-1 mr-1" style={{ flex: "2" }}>
                                                                                        <div className="form-group form-group-floating row mb-0">
                                                                                            <div className="col-lg-12">
                                                                                                <div className="position-relative">
                                                                                                    <input
                                                                                                        type="date"
                                                                                                        className="form-control daterange-single form-control-outline bajaruvchiSana"
                                                                                                        id="chiquvchiSana"
                                                                                                        placeholder="Placeholder"
                                                                                                        style={{ border: "1px solid lightgray" }}
                                                                                                    />
                                                                                                    <label className="label-floating">Sana</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col5 mb-1 mr-1" style={{ flex: "2" }}>
                                                                                        <div className="form-group mb-0">
                                                                                            <Select
                                                                                                // defaultValue={options[1]}
                                                                                                options={qaytaIjro}
                                                                                                onChange={selectQaytaIjroFunc}
                                                                                                placeholder="Qayta Ijro"
                                                                                                isClearable={true}
                                                                                                className="qaytaIjro col1QaytaIjro"
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col6 mb-1" style={{ flex: "1" }}>
                                                                                        <div style={{ height: "56px" }}>
                                                                                            <div className="form-group mb-0">
                                                                                                <button type="submit" className="btn btn-danger" style={{ padding: "16px", width: "60px" }}>
                                                                                                    <i className="icon-trash"></i>
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="mb-1 mr-1 visibleBoshqa" style={{ width: "50%", display: "none" }}>
                                                                                    <div className="form-group form-group-floating row mb-0">
                                                                                        <div className="col-lg-12">
                                                                                            <div className="position-relative">
                                                                                                <input
                                                                                                    type="number"
                                                                                                    className="form-control form-control-outline boshqa"
                                                                                                    style={{ height: "56px" }}
                                                                                                    placeholder="Placeholder"
                                                                                                />
                                                                                                <label className="label-floating">Boshqa</label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        ))}
                                                        <div className="text-right my-2">
                                                            <button type="button" className="btn btn-primary" onClick={newCreateBajaruvchi} id="myFormInput">
                                                                Yangi qo'shish
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}

                                {/* tashqi bajaruvchilar */}
                                {((ranks.includes(1) || ranks.includes(2) || ranks.includes(3) || ranks.includes(4)) && !visibleIconIjro && params.name !== "nazoratdanOlish") && (
                                    <div className="card-box" style={{ display: ((params.name === "bajarish" || params.name === "bajarilmagan" || params.name === "umumlashtiruvchi" || params.name === "radEtilgan" || params.name === "nazorat") && (data?.hasPermissionForDirect)) ? "block" : "none" }}>
                                        <div className="col-lg-12">
                                            <button className="btn btn-dark col-lg-12 " onClick={() => setOpenModal(true)} ><i className="icon-plus2"></i>
                                                <span style={{ position: "relative" }}>
                                                    Tashqi Bajaruvchilar
                                                    {(results?.length) && (
                                                        <span className="badge2">{results?.length}</span>
                                                    )}
                                                </span>
                                            </button>
                                        </div>

                                        <div className={'adminWindow pt-5'} style={{ display: openModal ? "block" : "none" }}>
                                            <div className="kurishModalBajaruvchi">
                                                <div className="modal-content">
                                                    <div className="modal-header bg-primary text-white">
                                                        <h5 className="modal-title">Tashqi bajaruvchilar</h5>
                                                        <button type="button" className="close" onClick={() => setOpenModal(false)}>&times;</button>
                                                    </div>
                                                    <div className="modal-body bodyModal">
                                                        {/* yangisi */}
                                                        <ul className="tashqiBaj">
                                                            {yunalishlar.map((dt, index) => (
                                                                <div className="yunalishlar">
                                                                    {/* onClick={() => defaultCheckedCheckbox(index)} */}
                                                                    <li className="tashqiBajLi1" ids={dt?.id}  >
                                                                        <div className="d-flex align-items-center ">
                                                                            <i className="fas fa-minus mr-2 iconMinus" style={{ display: "none" }}></i>
                                                                            <i className="fas fa-plus mr-2 iconPlus" ></i>
                                                                            <div className="position-relative">
                                                                                {dt?.orgTypeName}
                                                                                <span style={{ display: "none" }}>1</span>
                                                                            </div> <br />
                                                                        </div>
                                                                    </li>
                                                                    <div className="tashqiBajUlInline" style={{ display: "none" }}>
                                                                        <span className="allChecked mr-2">Barchasini tanlash</span>
                                                                        <input type="text" className="inputTashqiTash" defaultValue={"Tuman shahar hokimliklariga"} />
                                                                        <br />
                                                                        <input
                                                                            type="text"
                                                                            className="form-control inputChange1"
                                                                            placeholder="Qidiruv..."
                                                                            onChange={(e) => changeInputChange1(e.target.value, index)}
                                                                        />
                                                                        {dt?.organizations?.map((d, index1) => (
                                                                            <>
                                                                                {/* onClick={() => defaultCheckedCheckboxInline(index1)} */}
                                                                                <div className="inlineContent" >
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        ids={d?.id}
                                                                                        className="idsDiv idsDiv1"
                                                                                    />
                                                                                    <div >{d?.orgName}</div>
                                                                                </div>
                                                                                <div className="inlineContent2" style={{ display: "none" }}>
                                                                                    <span className="allChecked1">Barchasini tanlash</span> <br />
                                                                                    <input type="text" className="form-control inputChange2" placeholder="Qidiruv..." onChange={(e) => changeInputChange2(e.target.value, index)} />
                                                                                    {d?.organizations?.map((d1, index) => (
                                                                                        <div className="inlineContent3">
                                                                                            <input
                                                                                                type="checkbox"
                                                                                                ids={d1?.id}
                                                                                                className="idsDiv idsDiv2"
                                                                                            />
                                                                                            <div >{d1?.orgName}</div>
                                                                                        </div>
                                                                                    ))}
                                                                                </div>
                                                                            </>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </ul>

                                                        <div className="d-flex justify-content-end" >
                                                            <button type="button" className="btn btn-primary" onClick={saveAllSelectOrganizations}>
                                                                <i className="fas fa-save mr-2"></i>Saqlash
                                                                <span className='rew'>{results.length}</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* elektron kalit */}
                                        {/* <div className="row mt-2 d-flex justify-content-end" >
                                            <div className="col-lg-8">
                                                <div className="card mr-2">
                                                    <div className="form-group text-color d-flex align-items-start p-2">
                                                        <i className="fas fa-key fa-2x" style={{ marginTop: "40px" }}></i>
                                                        <div className="w-100" style={{ fontSize: "12px", textTransform: "capitalize" }}>
                                                            <form name="testform" className="testform">
                                                                <div className="testformDiv">
                                                                    <label id="message" style={{ color: "red" }}></label>
                                                                    <span style={{ color: "blue" }}>Elektron kalitni tanlang</span> <br />
                                                                    <div className="selectElement" onClick={() => setSelectVisible(!selectVisible)}>
                                                                        {selectVisible ? (
                                                                            <i className="fas fa-angle-up iconDownUp"></i>
                                                                        ) : (
                                                                            <i className="fas fa-angle-down iconDownUp"></i>
                                                                        )}
                                                                        <span name="spanKey" className="selectValue"></span>
                                                                        <ul name="key" className="key" style={{ display: selectVisible ? "block" : "none" }}></ul >
                                                                    </div>
                                                                    <br />
                                                                    {/* Текст для подписи <br />
                                                                <textarea name="data"></textarea><br />
                                                                <button type="button" className="eimzoClick" onClick={window['sign']}>Подписать</button><br />
                                                                ID ключа <label id="keyId"></label><br />
                                                                Подписанный документ PKCS#7<br />
                                                                <textarea name="pkcs7"></textarea><br /> 
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        {/* <div className="card-box my-2">
                                            <div className="col-lg-12 w-100 d-flex justify-content-end">
                                                {/* <button className="btn btn-danger" onClick={cancelEimzo}>Bekor qilish</button> 
                                                <button className="btn btn-primary ml-1" onClick={saveAllData}>Saqlash</button>
                                            </div>
                                        </div> */}
                                    </div>
                                )}

                                {/* umumiy saqlash tugmasi */}
                                {((ranks.includes(1) || ranks.includes(2) || ranks.includes(3) || ranks.includes(4)) && !visibleIconIjro && params.name !== "nazoratdanOlish") && (
                                    <div className="card-box my-2" style={{ display: ((params.name === "bajarish" || params.name === "umumlashtiruvchi" || params.name === "bajarilmagan" || params.name === "radEtilgan" || params.name === "nazorat") && (data?.hasPermissionForDirect)) ? "block" : "none" }}>
                                        <div className="col-lg-12 w-100 d-flex justify-content-end">
                                            {/* <button className="btn btn-danger" onClick={cancelEimzo}>Bekor qilish</button> */}
                                            <button className="btn btn-primary ml-1" onClick={saveAllData}>Saqlash</button>
                                        </div>
                                    </div>
                                )}

                                {/* tashqi topshiriqlar */}
                                {data.outExecutorInformationList?.length > 0 && (
                                    <>
                                        <div className="card-box mt-3">
                                            <div className="col-lg-12">
                                                <div className="card">
                                                    <div className="card-header bg-primary text-white header-elements-inline">
                                                        <h6 className="card-title" style={{ fontWeight: "bold", textTransform: "upperCase" }}>Tashqi Topshiriqlar</h6>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="table-responsive">
                                                            <table className="table table-striped table-bordered table-hover Tab">
                                                                <thead className="bg-dark text-white NavLink text-center">
                                                                    <tr>
                                                                        <th style={{ width: "33.333%" }}>Topshiriq</th>
                                                                        <th style={{ width: "33.333%" }}>Muddat/holat</th>
                                                                        <th style={{ width: "33.333%" }}>Ijro</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {data?.outExecutorInformationList?.length > 0 && data?.outExecutorInformationList?.map((dat, index) => (
                                                                        <tr className="text-center">
                                                                            <td>
                                                                                <p>{dat?.organizationName}</p>
                                                                                <p>{(dat?.leaderLastName && (dat?.leaderFirstName?.length > 1)) ? ((((dat?.leaderFirstName[0].toUpperCase() === "S" || dat?.leaderFirstName[0].toUpperCase() === "C") && dat?.leaderFirstName[1].toUpperCase() === "H")) ? dat?.leaderFirstName?.substring(0, 2) + ". " : dat?.leaderFirstName?.substring(0, 1) + ". ") : ""}{dat?.leaderLastName} </p>
                                                                            </td>
                                                                            <td>
                                                                                <p>{dateFormat(dat?.deadline)}</p>
                                                                                <span className="badge text-white mr-1" style={{ backgroundColor: status.filter((s, i) => s.englishName === dat?.documentStatusName)[0]?.color }}>{status.filter((s, i) => s.englishName === dat?.documentStatusName)[0]?.LatinName}</span>
                                                                            </td>
                                                                            <td>
                                                                                {dat?.outInExecutors?.length > 0 && dat?.outInExecutors?.map((d, i) => (
                                                                                    <>
                                                                                        {d?.firstName} {d?.lastName} &nbsp;
                                                                                        <span className="badge text-white mr-1" style={{ backgroundColor: status.filter((s, i) => s.englishName === d?.documentStatusName)[0]?.color }}>{status.filter((s, i) => s.englishName === d?.documentStatusName)[0]?.LatinName}</span> <br />
                                                                                        {dat?.file && (
                                                                                            <span className="cursor-pointer text-color" style={{ fontSize: "10px" }} onClick={() => setDownload(d?.file)}>Ijro hujjati</span>
                                                                                        )}
                                                                                    </>
                                                                                ))}
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div >
                    </div >

                    {/* alert */}
                    {alert.open && (
                        <div className={`alert alert-${alert.color} alertNotice alert-styled-left alert-dismissible`}>
                            <span className="font-weight-semibold">{alert.text}</span>
                        </div>
                    )}
                </div >
            </div >
        </div >
    )
}