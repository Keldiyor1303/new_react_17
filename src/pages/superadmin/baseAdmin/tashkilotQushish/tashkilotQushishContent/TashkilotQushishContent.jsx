import React, { useContext, useEffect, useState } from "react";
import './tashkilotQushishContent.css';
import { Link, useParams } from 'react-router-dom';
import Select from 'react-select';
import { axiosInstance } from "../../../../../config";
import { AuthContext } from "../../../../../context/AuthContext";
import is from 'is_js';
import { url } from "../../../../../config";
import { Alert } from '../../../../../component/alert/Alert';
import NumericInput from 'react-numeric-input';

export default function TashkilotQushishContent() {
    const [yunalishQ, setYunalishQ] = useState("");
    const [fatherId, setFatherId] = useState(0);
    const [yunalishlar, setYunalishlar] = useState([]);
    const [yunalishlarO, setYunalishlarO] = useState([]);
    const [iteratinYunalishlar, setIteratinYunalishlar] = useState([]);
    const [iteratinYunalishlarF, setIteratinYunalishlarF] = useState([]);
    const [iteratinyunalishlarO, setIteratinyunalishlarO] = useState([]);
    const { user: currentUser } = useContext(AuthContext);
    const [tashkilotlar, setTashkilotlar] = useState([]);
    const [tashkilotlarS, setTashkilotlarS] = useState([]);
    const [yunalishTashkilotlar, setYunalishTashkilotlar] = useState([]);
    const [yunalishTashkilotlarF, setYunalishTashkilotlarF] = useState([]);
    const [yunalishTashkilotlar1, setYunalishTashkilotlar1] = useState([]);
    const [yunalishlarIn, setYunalishlarIn] = useState(0);
    const [boshTashkilotlar, setBoshTashkilotlar] = useState([]);
    const [quyiTashkilotlar, setQuyiTashkilotlar] = useState([]);
    const [alert, setAlert] = useState({ open: false, text: "", color: "" });
    const [updateYunalish, setUpdateYunalish] = useState({});
    const [isChecked, setIsChecked] = useState(false);
    const [yonalishId, setYonalishId] = useState(0);
    let sortInput=[];

    const [openInput, setOpenInput] = useState(false)
    let params = useParams()

    useEffect(() => {
        // console.log(params)
        if (params.stir) {
            document.querySelector('.atAuto').click();
            document.querySelector('.putStir').value = params.stir.substring(0, 3) + "-" + params.stir.substring(3, 6) + "-" + params.stir.substring(6, 9);
            document.querySelector('.buttonStir').click();
        }
    }, [params])

    // barcha yo'nalishlarni o'qib olish
    useEffect(() => {
        axiosInstance.get("orgType/all", {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                setYunalishlar(res.data);
                // setYunalishlarO(res.data);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, [currentUser]);




    // yunalish qushish va hamma yunalishni o'qib olish
    const yunalishQushish = async (e) => {
        e.preventDefault();
        let yunalishNomi = document.querySelector('.yunalishNomi').value;

        if (yunalishNomi) {
            // yunalish kiritish
            axiosInstance.post("orgType/",
                { name: yunalishQ }, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    Alert(setAlert, "success", "Yo'nalish muvaffaqiyatli qo'shildi");
                    setYunalishlar(prev => [...prev, { id: res.data.id, name: res.data.name }])
                })
                .catch(err => {
                    console.log(err.response);
                    Alert(setAlert, "warning", err?.response?.data);
                })
            setYunalishQ("");
            document.querySelector('.close11').click();
        } else {
            Alert(setAlert, "warning", "Yunalish kiritilmagan");
        }
    }

    // sitr orqali malumotlarni olish
    const tasahkilotniOlish = () => {
        let sitr = document.querySelector('.sitri').value;

        if (sitr) {
            if (sitr.length !== 11) {
                Alert(setAlert, "warning", "Sitr xato kiritilgan");
            } else {
                axiosInstance.post("organization/searchinn", {
                    stir: sitr
                }, {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                    .then(res => {
                        // setChange(!change);
                        // setStirMalumotlari(res.data);
                        if (res.data.date?.le_NM_UZ === "") {
                            Alert(setAlert, "warning", "Ma'lumot topilmadi");
                            document.querySelector('.sitri').value = "";
                            document.querySelector('.korxonaNomi').value = "";
                            document.querySelector('.qisqachaNomi').value = "";
                            document.querySelector('.manzil').value = "";
                            document.querySelector('.stir').value = "";
                            document.querySelector('.fio').value = "";
                            document.querySelector('.telefon').value = "";
                            document.querySelector('.email').value = "";
                            document.querySelector('.exat').value = "";
                            document.querySelector('.Viloyat').querySelector('.css-qc6sy-singleValue').textContent = "";
                            document.querySelector('.tuman').querySelector('.css-qc6sy-singleValue').textContent = "";
                            document.querySelector('.yunalish').querySelector('.css-qc6sy-singleValue').textContent = "";
                            document.querySelector('.asosiyBoshTash').querySelector('.css-qc6sy-singleValue').textContent = "";
                            document.querySelector('.qushimchaBoshTash').querySelector('.css-qc6sy-singleValue').textContent = "";
                        } else {
                            document.querySelector('.tuman').querySelector('.css-qc6sy-singleValue').textContent = res.data.date?.soato_DESC_UZ;
                            document.querySelector('.korxonaNomi').value = res.data.date?.le_NM_UZ;
                            document.querySelector('.qisqachaNomi').value = res.data.date?.acron_UZ;
                            document.querySelector('.manzil').value = res.data.date?.addr;
                            document.querySelector('.stir').value = res.data.date?.tin;
                            document.querySelector('.fio').value = res.data.date?.head_NM;
                            document.querySelector('.telefon').value = res.data.date?.phone;
                            document.querySelector('.email').value = res.data.date?.email;
                            // document.querySelector('.exat').value = "";
                            document.querySelector('.Viloyat').querySelector('.css-qc6sy-singleValue').textContent = "";
                            // document.querySelector('.tuman').querySelector('.css-qc6sy-singleValue').textContent = "";
                            // document.querySelector('.yunalish').querySelector('.css-qc6sy-singleValue').textContent = "";
                            // document.querySelector('.asosiyBoshTash').querySelector('.css-qc6sy-singleValue').textContent = "";
                            // document.querySelector('.qushimchaBoshTash').querySelector('.css-qc6sy-singleValue').textContent = "";
                        }
                    })
                    .catch(err => {
                        // console.log(err);
                        Alert(setAlert, "warning", "Ma'lumot topilmadi");
                        document.querySelector('.sitri').value = "";
                        document.querySelector('.korxonaNomi').value = "";
                        document.querySelector('.qisqachaNomi').value = "";
                        document.querySelector('.manzil').value = "";
                        document.querySelector('.stir').value = "";
                        document.querySelector('.fio').value = "";
                        document.querySelector('.telefon').value = "";
                        document.querySelector('.email').value = "";
                        document.querySelector('.exat').value = "";
                        document.querySelector('.Viloyat').querySelector('.css-qc6sy-singleValue').textContent = "";
                        document.querySelector('.tuman').querySelector('.css-qc6sy-singleValue').textContent = "";
                        document.querySelector('.yunalish').querySelector('.css-qc6sy-singleValue').textContent = "";
                        document.querySelector('.asosiyBoshTash').querySelector('.css-qc6sy-singleValue').textContent = "";
                        document.querySelector('.qushimchaBoshTash').querySelector('.css-qc6sy-singleValue').textContent = "";
                    })
            }
        } else {
            Alert(setAlert, "warning", "Stir kiritilmagan");
        }
    }

    // id bo'yicha tashkilotlarni o'qib olish
    const getTashkilot = (id) => {
        axiosInstance.get("organization/orgType/" + id, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data)
                setTashkilotlar(res.data);
            })
            .catch(err => {
                console.log(err.response);
            })
    }


    const changeInputNumber = async (e, id) => {
        console.log(e)
        if (e.code === "Enter") {
            let result = sortInput.sort((a, b) => a.id - b.id);
            let arr = [];
            for (let i = 1; i < result.length; i++) {
                if (!(result[i - 1].id === result[i].id)) {
                    arr.push(result[i - 1]);
                }
            }
            arr.push(result[result.length - 1]);
            try {
                const res = await axiosInstance.post(`organization/updateOrderNumber`, {
                    orderNumber: arr[0].orderNumber,
                    id: arr[0].id,
                }, {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                console.log(res.data)
                axiosInstance.get("organization/orgType/" + res.data.orgType?.id, {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                    .then(res1 => {
                        console.log(res1.data)
                        setTashkilotlar(res1.data);
                    })
                    .catch(err => {
                        console.log(err.response);
                    })
            } catch (error) {
                console.log(error.response);
            }
            arr = [];
        }
    }

    const inputChangeHandler = (e, id) => {
        sortInput.push({ id: id, orderNumber: e });
    }

    // yunalishlarni yunalish degan select ga joylashtirish
    useEffect(() => {
        let arr = yunalishlar.map((yun, index) => (
            { value: yun.id, label: yun.name }
        ))
        setIteratinYunalishlar(arr);
    }, [yunalishlar]);

    useEffect(() => {
        let arr = yunalishlarO.map((yun, index) => (
            { value: yun.id, label: yun.name }
        ))
        setIteratinyunalishlarO(arr);
    }, [yunalishlar]);

    const logChange12 = (e) => {
        console.log(e.value);
        setFatherId(e.value)
        // let FatherId = yunalishlar.forEach((item,index)=>{})
    }

    // tashkilot qo'shish
    const tashkilotQushish = async (e) => {
        e.preventDefault();

        let korxonaNomi = document.querySelector('.korxonaNomi').value;
        let qisqachaNomi = document.querySelector('.qisqachaNomi').value;
        let manzil = document.querySelector('.manzil').value;
        let stir = document.querySelector('.stir').value;
        let fio = document.querySelector('.fio').value;
        let telefon = document.querySelector('.telefon').value;
        let email = document.querySelector('.email').value;
        let exat = document.querySelector('.exat').value;
        let Viloyat = document.querySelector('.Viloyat').querySelector('.css-qc6sy-singleValue')?.textContent;
        let tuman = document.querySelector('.tuman').querySelector('.css-qc6sy-singleValue')?.textContent;
        let yunalish = document.querySelector('.yunalish').querySelector('.css-qc6sy-singleValue')?.textContent;
        let yunalishO = document.querySelector('.yunalishO').querySelector('.css-qc6sy-singleValue')?.textContent;
        let asosiyBoshTash = document.querySelector('.asosiyBoshTash').querySelector('.css-qc6sy-singleValue')?.textContent;
        let qushimchaBoshTash = document.querySelector('.qushimchaBoshTash').querySelector('.css-qc6sy-singleValue')?.textContent;
        let asosiyBoshTashCheckBox = document.querySelector('.qushimchaBoshTash').querySelector('.css-qc6sy-singleValue')?.textContent;


        // selectdagi yunalishni tanlagan payt id sini olish
        let y1 = yunalishlar.filter((y, index) => {
            return y.name === yunalish;
        })

        // selectdagi tashkilotni tanlagan payt id sini olish
        let y2 = yunalishTashkilotlar.filter((y, index) => {
            return y.label === asosiyBoshTash;
        })

        // selectdagi tashkilotni tanlagan payt id sini olish
        let y3 = yunalishTashkilotlar1.filter((y, index) => {
            return y.label === qushimchaBoshTash;
        })
        console.log(y3)


        // orgTypeId
        let y4 = yunalishlarO.filter((y) => {
            return y.name === yunalishO;
        })
        console.log(y4)

        if (Viloyat) {
            if (is.email(email)) {
                if (yonalishId) {
                    // to do server
                    axiosInstance.post("organization", {
                        fake: isChecked,
                        stir: stir,
                        orgName: korxonaNomi,
                        orgShortName: qisqachaNomi,
                        orgProvince: Viloyat,
                        orgDistrict: tuman,
                        address: manzil,
                        leaderName: fio,
                        mobileNumber: telefon,
                        orgEmail: email,
                        fatherOrganizationId: fatherId ? fatherId : null,
                        orgExat: exat || null,
                        orgTypeId: yonalishId,
                        mainOrganizationId: y2[0]?.value || null,
                        passiveOrganizationId: y3[0]?.value || null
                    }, {
                        headers: {
                            AutHorization: "Bearer " + currentUser
                        }
                    })
                        .then(res => {
                            console.log(res.data)
                            // malumotlarni o'chirish
                            Alert(setAlert, "success", "Muvaffaqiyatli qo'shildi");
                            document.querySelector('.sitri').value = "";
                            document.querySelector('.korxonaNomi').value = "";
                            document.querySelector('.qisqachaNomi').value = "";
                            document.querySelector('.manzil').value = "";
                            document.querySelector('.stir').value = "";
                            document.querySelector('.fio').value = "";
                            document.querySelector('.telefon').value = "";
                            document.querySelector('.email').value = "";
                            document.querySelector('.exat').value = "";
                            document.querySelector('.Viloyat').querySelector('.css-qc6sy-singleValue').textContent = "";
                            document.querySelector('.tuman').querySelector('.css-qc6sy-singleValue').textContent = "";
                            document.querySelector('.yunalish').querySelector('.css-qc6sy-singleValue').textContent = "";
                            document.querySelector('.asosiyBoshTash').querySelector('.css-qc6sy-singleValue').textContent = "";
                            document.querySelector('.qushimchaBoshTash').querySelector('.css-qc6sy-singleValue').textContent = "";
                            document.querySelector('.closeSave').click();
                        })
                        .catch(err => {
                            console.log(err.response)
                            if (err.response?.data) {
                                Alert(setAlert, "warning", err?.response?.data);
                            }
                        })
                    console.log({
                        stir: stir,
                        orgName: korxonaNomi,
                        orgShortName: qisqachaNomi,
                        orgProvince: Viloyat,
                        orgDistrict: tuman,
                        address: manzil,
                        leaderName: fio,
                        mobileNumber: telefon,
                        orgEmail: email,
                        fatherOrganizationId: fatherId ? fatherId : null,
                        orgExat: exat || null,
                        orgTypeId: yonalishId,
                        mainOrganizationId: y2[0]?.value || null,
                        passiveOrganizationId: y3[0]?.value || null
                    })
                } else {
                    Alert(setAlert, "warning", "Yo'nalish tanlanmagan");
                }
            } else {
                Alert(setAlert, "warning", "Email xato kiritilgan");
            }
        } else {
            Alert(setAlert, "warning", "Viloyat tanlanmagan");
        }

    }



    // yunalishni bosganda tashkilot chiqishi
    useEffect(() => {
        let orgNames = document.querySelectorAll('.cardAccordion');
        orgNames.forEach((org, index) => {
            org.querySelector('.orgname').addEventListener('click', () => {
                if (org.querySelector('.openTash').style.display === "none") {
                    org.querySelector('.openTash').style.display = "block";
                } else {
                    org.querySelector('.openTash').style.display = "none";

                }
            })
        })
    }, [yunalishlar]);


    // yunalishga qarab tashkilotlarni chiqarish
    const changeYunalish = (e) => {
        axiosInstance.get('organization/orgType/' + e.value, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                let y1 = [];
                res.data.forEach((y, index) => {
                    y1.push({ value: y.id, label: y.orgName });
                })
                setYunalishTashkilotlar(y1);
            })
            .catch(err => {
                console.log(err.response);
            })
    }
    const changeYunalishF = (e) => {
        axiosInstance.get('organization/orgType/' + e.value, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                let y1 = [];
                res.data.forEach((y, index) => {
                    y1.push({ value: y.id, label: y.orgName });
                })
                setYunalishTashkilotlarF(y1);
            })
            .catch(err => {
                console.log(err.response);
            })
    }


    //orgTypeId
    const orgTypeId = (e) => {
        setYonalishId(e.value)
        console.log(yonalishId);
        // axiosInstance.get('organization/orgType/' + e.value, {
        //     headers: {
        //         Authorization: "Bearer " + currentUser
        //     }
        // })
        //     .then(res => {
        //         let y4 = [];
        //         res.data.forEach((y, index) => {
        //             y4.push({ value: y.id, label: y.orgName });
        //         })
        //         console.log(y4)
        //         setYunalishTashkilotlar(y4);
        //     })
        //     .catch(err => {
        //         console.log(err.response);
        //     })
    }

    const getTashBoshTashkilot = (id) => {
        axiosInstance.get("organization/mainOrganization/" + id, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                axiosInstance.get("organization/by/" + id, {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                    .then(res => {
                        setBoshTashkilotlar(res.data);
                    })
                    .catch(err => {
                        console.log(err.response);
                    })
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    const getTashQuyiTashkilot = (id) => {
        axiosInstance.get('organization/childOrganization/' + id, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                setQuyiTashkilotlar(res.data);
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    // const keydown1 = (e) => {
    //     // e.preventDefault();
    //     console.log(e);
    //     // if (e.code === "Enter") {
    //     //     tasahkilotniOlish();
    //     // }
    // }

    // yunalishga qarab tashkilotlarni chiqarish
    const logChange123 = (e) => {
        axiosInstance.get('organization/orgType/' + e.value, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                let y1 = [];
                res.data.forEach((y, index) => {
                    y1.push({ value: y.id, label: y.orgName });
                })
                y1.push({ value: null, label: "NONE" });
                setYunalishTashkilotlar1(y1);
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    const yunalishUzgartirish = (dat) => {
        let yunalishName = document.querySelector('.yunalishName').value;
        if (yunalishName) {
            axiosInstance.patch("orgType", {
                id: dat.id,
                name: yunalishName
            }, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    let arr = yunalishlar.filter((d, i) => {
                        if (d.id === res.data.id) {
                            d.id = res.data.id;
                            d.name = res.data.name;
                            d.isActive = res.data.isActive;
                        }
                        return d;
                    })
                    Alert(setAlert, "success", "Yunalish nomi muvaffaqiyatli o'zgartirildi")
                    setYunalishlar(arr);
                    setUpdateYunalish({ open: false, obj: {} });
                    let orgNames = document.querySelectorAll('.cardAccordion');
                    orgNames.forEach((org, index) => {
                        org.querySelector('.orgname').addEventListener('click', () => {
                            if (org.querySelector('.openTash').style.display === "none") {
                                org.querySelector('.openTash').style.display = "block";
                            } else {
                                org.querySelector('.openTash').style.display = "none";

                            }
                        })
                    })
                })
                .catch(err => {
                    console.log(err.response);
                })
        } else {
            Alert(setAlert, "warning", "Yunalish nomi kiritilishi kerak")
        }
    }

    const checked = (e) => {
        setOpenInput(e)
    }

    const checkedHandler = (e) => {
        setIsChecked(e.target.checked)
    }
    return (
        <div className="content mb-5 ">
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Tashkilot
                qo'shish</h3>
            <div className="card-body" style={{ marginTop: "-20px" }}>

                <div className="card-body p-0 mt-3" style={{ borderRadius: "0" }}>
                    <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink d-flex align-items-center justify-content-between">
                        <li className="nav-item"><h5 style={{
                            margin: "10px 0 0 20px",
                            fontWeight: "bold",
                            textTransform: "upperCase",
                            color: "#fff",
                            padding: "0 5px 5px 0"
                        }}>Tashkilotlar boshqaruv paneli</h5></li>
                        <li className="nav-item mr-3">
                            <a href="#1" data-toggle="modal" className="" data-target="#yonalish"
                                style={{ fontWeight: "bold", textTransform: "upperCase", color: "#fff" }}><i
                                    className="icon-plus2"></i> Yo'nalish Qo'shish</a>
                            <a href="#1" data-toggle="modal" className="ml-4 atAuto" data-target="#modal_theme_primary"
                                style={{ fontWeight: "bold", textTransform: "upperCase", color: "#fff" }}><i
                                    className="icon-plus2"></i> Tashkilot Qo'shish</a>

                            {/* yunalish qushish modali */}
                            <div id="yonalish" className="modal fade" tabIndex="-1">
                                <div className="modal-dialog modal-lg ">
                                    <div className="modal-content">
                                        <div className="modal-header bg-primary text-white">
                                            <h5 className="modal-title" style={{ textTransform: "capitalize" }}>Yo'nalish
                                                qo'shish</h5>
                                            <button type="button" className="close close11"
                                                data-dismiss="modal">&times;</button>
                                        </div>

                                        <div className="modal-body">
                                            <form onSubmit={yunalishQushish} className="yunalishOorm">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="form-group form-group-floating row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control form-control-outline yunalishNomi"
                                                                        placeholder="Placeholder"
                                                                        value={yunalishQ}
                                                                        autoFocus
                                                                        onChange={(e) => setYunalishQ(e.target.value)}

                                                                    />
                                                                    <label className="label-floating">Yo'nalish</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <span className="error text-danger d-block"
                                                            style={{ textTransform: "capitalize" }}></span>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary"
                                                        // onClick={yunalishQushish}
                                                        >
                                                            Saqlash
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* tashkilot qo'shish */}
                            <div id="modal_theme_primary" className="modal fade" tabIndex="-1">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header bg-primary text-white">
                                            <h5 className="modal-title" style={{ textTransform: "capitalize" }}>Tashkilot
                                                qo'shish</h5>
                                            <button type="button" className="close closeSave"
                                                data-dismiss="modal">&times;</button>
                                        </div>

                                        <div className="modal-body">
                                            <form>
                                                <div className="row">
                                                    <div
                                                        className="col-lg-1 d-flex justify-content-center align-items-center mb-3">
                                                        <input
                                                            type={'checkbox'}
                                                            onChange={checkedHandler}
                                                            style={{transform: 'scale(1.4)'}}
                                                        />
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="form-group form-group-floating row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input
                                                                        type="text"
                                                                        data-mask="999-999-999"
                                                                        className="form-control form-control-outline sitri putStir"
                                                                        placeholder="Placeholder"
                                                                        disabled={isChecked}
                                                                        // onKeyDown={keydown1}
                                                                    />
                                                                    <label className="label-floating">Tashkilot
                                                                        sitri</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="form-group form-group-floating row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <button type="button" onClick={tasahkilotniOlish}
                                                                        className="btn btn-primary form-control form-control-outline buttonStir">Olish
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </form>
                                            <hr />

                                            <form onSubmit={tashkilotQushish} className="tashkilotForm2">
                                                <div className="row mt-4">
                                                    <div className="col-lg-6">
                                                        <div className="form-group form-group-floating row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control form-control-outline korxonaNomi"
                                                                        placeholder="Placeholder"
                                                                    // value={stirMalumotlari?.date?.le_NM_UZ}
                                                                    />
                                                                    <label className="label-floating">Korxona
                                                                        Nomi</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group form-group-floating row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control form-control-outline qisqachaNomi"
                                                                        placeholder="Placeholder"
                                                                    // defaultValue={stirMalumotlari?.date?.acron_UZ}
                                                                    />
                                                                    <label className="label-floating">Qisqacha
                                                                        nomi</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <div className="form-group form-group-floating row">
                                                            <div className="col-lg-12">
                                                                <Select
                                                                    defaultValue={{ value: "", label: "" }}
                                                                    options={[
                                                                        {
                                                                            value: "Viloyat",
                                                                            label: "Viloyat",
                                                                            isDisabled: true
                                                                        },
                                                                        {
                                                                            value: "Andijon viloyati",
                                                                            label: "Andijon viloyati"
                                                                        },
                                                                        {
                                                                            value: "Buxoro viloyati",
                                                                            label: "Buxoro viloyati"
                                                                        },
                                                                        {
                                                                            value: "Fargʻona viloyati",
                                                                            label: "Fargʻona viloyati"
                                                                        },
                                                                        {
                                                                            value: "Jizzax viloyati",
                                                                            label: "Jizzax viloyati"
                                                                        },
                                                                        {
                                                                            value: "Xorazm viloyati",
                                                                            label: "Xorazm viloyati"
                                                                        },
                                                                        {
                                                                            value: "Namangan viloyati",
                                                                            label: "Namangan viloyati"
                                                                        },
                                                                        {
                                                                            value: "Navoiy viloyati",
                                                                            label: "Navoiy viloyati"
                                                                        },
                                                                        {
                                                                            value: "Qashqadaryo viloyati",
                                                                            label: "Qashqadaryo viloyati"
                                                                        },
                                                                        {
                                                                            value: "Qoraqalpogʻiston Respublikasi",
                                                                            label: "Qoraqalpogʻiston Respublikasi"
                                                                        },
                                                                        {
                                                                            value: "Samarqand viloyati",
                                                                            label: "Samarqand viloyati"
                                                                        },
                                                                        {
                                                                            value: "Sirdaryo viloyati",
                                                                            label: "Sirdaryo viloyati"
                                                                        },
                                                                        {
                                                                            value: "Surxondaryo viloyati",
                                                                            label: "Surxondaryo viloyati"
                                                                        },
                                                                        {
                                                                            value: "Toshkent viloyati",
                                                                            label: "Toshkent viloyati"
                                                                        },
                                                                    ]}
                                                                    // onChange={logChange12}
                                                                    placeholder="Viloyat"
                                                                    className="Viloyat"
                                                                />

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <div className="form-group form-group-floating row">
                                                            <div className="col-lg-12">
                                                                <Select
                                                                    defaultValue={{ value: "", label: "" }}
                                                                    // options={[
                                                                    //     { value: "Tuman(Shahar)", label: "Tuman(Shahar)", isDisabled: true },
                                                                    //     { value: "Buxor Shahar", label: "Buxor Shahar" },
                                                                    //     { value: "Buxoro Tuman", label: "Buxoro Tuman" },
                                                                    //     { value: "Jondor Tuman", label: "Jondor Tuman" },
                                                                    // ]}
                                                                    // onChange={logChange12}
                                                                    placeholder="Tuman(Shahar)"
                                                                    className="tuman"
                                                                />

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <div className="form-group form-group-floating row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control form-control-outline manzil"
                                                                        placeholder="Placeholder"
                                                                    // defaultValue={stirMalumotlari?.date?.addr}
                                                                    />
                                                                    <label className="label-floating">Manzil</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group form-group-floating row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input
                                                                        type="text"
                                                                        data-mask="999-999-999"
                                                                        className="form-control InputCard form-control-outline stir"
                                                                        placeholder="Placeholder"
                                                                        disabled
                                                                    // defaultValue={stirMalumotlari?.date?.tin}
                                                                    />
                                                                    <label className="label-floating">Stir</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="form-group form-group-floating row InputCard">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control form-control-outline fio"
                                                                        placeholder="placeholder"
                                                                    // defaultValue={stirMalumotlari?.date?.head_NM}
                                                                    />
                                                                    <label className="label-floating">F.I.O</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group form-group-floating  row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input
                                                                        type="text"
                                                                        // data-mask="+998(99) 999-99-99"
                                                                        className="form-control form-control-outline InputCard telefon"
                                                                        placeholder="Placeholder"
                                                                    // defaultValue={stirMalumotlari?.date?.phone}
                                                                    />
                                                                    <label className="label-floating">Telefon </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group form-group-floating row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input
                                                                        type="email"
                                                                        className="form-control form-control-outline email"
                                                                        placeholder="Placeholder"
                                                                    // required
                                                                    // defaultValue={stirMalumotlari?.date?.email}
                                                                    />
                                                                    <label className="label-floating">Email</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group form-group-floating  row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <input
                                                                        type="email"
                                                                        className="form-control form-control-outline exat"
                                                                        placeholder="Placeholder"
                                                                    // required
                                                                    />
                                                                    <label className="label-floating">E-xat</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="form-group form-group-floating row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <Select
                                                                        defaultValue={{ value: "", label: "" }}
                                                                        options={iteratinYunalishlar}
                                                                        placeholder="Yo'nalish"
                                                                        className="yunalish"
                                                                        onChange={changeYunalish}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3 checkedCheckbox">
                                                        <div className="form-group form-group-floating row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <Select
                                                                        defaultValue={{ value: "", label: "" }}
                                                                        options={yunalishTashkilotlar}
                                                                        // onChange={logChange12}
                                                                        placeholder="Bosh tashkilot"
                                                                        className="asosiyBoshTash"
                                                                    />

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 checkedCheckbox">
                                                        <div className="form-group form-group-floating row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <Select
                                                                        defaultValue={{ value: "", label: "" }}
                                                                        options={iteratinYunalishlar}
                                                                        onChange={logChange123}
                                                                        // placeholder="Tashkilotlar"
                                                                        className=""
                                                                        placeholder="Yo'nalish"
                                                                    />

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 checkedCheckbox">
                                                        <div className="form-group form-group-floating row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <Select
                                                                        defaultValue={{ value: "", label: "" }}
                                                                        options={yunalishTashkilotlar1}
                                                                        // onChange={logChange12}
                                                                        placeholder="Qo'shimcha bosh tashkilot"
                                                                        className="qushimchaBoshTash"
                                                                    />

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3">
                                                        <div className="form-group form-group-floating row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <Select
                                                                        defaultValue={{ value: "", label: "" }}
                                                                        options={iteratinYunalishlar}
                                                                        placeholder="Yo'nalish"
                                                                        className="yunalishO"
                                                                        onChange={orgTypeId}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/*checked*/}
                                                    <div className={'col-lg-12'}>
                                                        <div className="d-flex gap-2 ">
                                                            <input type="checkbox"
                                                                onClick={(e) => checked(e.target.checked)}
                                                                className="checkboxInput cursor-pointer" style={{
                                                                    width: '20px',
                                                                    height: "20px",
                                                                    padding: "20px"
                                                                }} />
                                                            <label htmlFor="checkboxInput"
                                                                style={{ color: "blue", marginLeft: "20px" }}>Asosiy
                                                                bosh tashkiloti</label>
                                                        </div>
                                                        {
                                                            openInput ?
                                                                <div className={'checkedBoxInputs col-lg-12 row'}>
                                                                    <div className="col-lg-6">
                                                                        <div
                                                                            className="form-group form-group-floating row">
                                                                            <div className="col-lg-12">
                                                                                <div className="position-relative">
                                                                                    <Select
                                                                                        defaultValue={{
                                                                                            value: "",
                                                                                            label: ""
                                                                                        }}
                                                                                        options={iteratinYunalishlar}
                                                                                        placeholder="Yo'nalish"
                                                                                        className="yunalish"
                                                                                        onChange={changeYunalishF}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-6 checkedCheckbox">
                                                                        <div
                                                                            className="form-group form-group-floating row">
                                                                            <div className="col-lg-12">
                                                                                <div className="position-relative">
                                                                                    <Select
                                                                                        defaultValue={{
                                                                                            value: "",
                                                                                            label: ""
                                                                                        }}
                                                                                        options={yunalishTashkilotlarF}
                                                                                        onChange={logChange12}
                                                                                        placeholder="Bosh tashkilot"
                                                                                        className="asosiyBoshTashCheckBox"
                                                                                    />

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div> : ""
                                                        }

                                                    </div>


                                                    <div className="col-lg-12 mt-3" id="passposrtMalumotlari"
                                                        style={{ display: "none" }}>
                                                        <div className="form-group form-group-floating row">
                                                            <div className="col-lg-12">
                                                                <div className="position-relative">
                                                                    <Select
                                                                        // defaultValue={options[1]}
                                                                        options={[
                                                                            {
                                                                                value: "Tuman tashkilot",
                                                                                label: "Tuman tashkilot",
                                                                                isDisabled: true
                                                                            },
                                                                            { value: "Buxoro", label: "Buxoro" },
                                                                            { value: "Navoiy", label: "Navoiy" },
                                                                            { value: "Toshkent", label: "Toshkent" },
                                                                            { value: "Andijon", label: "Andijon" },
                                                                        ]}
                                                                        // onChange={logChange12}
                                                                        placeholder="Tuman tashkilot"
                                                                    />

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-2">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary">
                                                            <i className="icon-floppy-disk"></i>
                                                            Saqlash
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div id="accordion-styled">
                            <div className="card">
                                <div className="card-body">
                                    <div id="accordion-default">
                                        {/* yunalishlar */}
                                        {yunalishlar.map((dat, index1) => (
                                            <div className="d-flex align-items-center" style={{ position: "relative" }}>
                                                <i className="fas fa-pen cursor-pointer mr-2" style={{
                                                    fontSize: "18px",
                                                    position: "absolute",
                                                    top: "20px",
                                                    left: "0"
                                                }} onClick={() => setUpdateYunalish({ open: true, obj: dat })}></i>
                                                <div key={index1} className="card cardAccordion mb-0 mt-2 w-100 ml-4">
                                                    <div className="card-header orgname" style={{ height: "40px" }}
                                                        onClick={() => getTashkilot(dat.id)}>
                                                        <h6 className="card-title d-flex justify-content-between align-items-center">
                                                            <a className="text-body NavLink "
                                                                style={{ color: "#0056B8 !important" }}
                                                                href={`#1`}>{dat?.name}</a>
                                                        </h6>
                                                    </div>

                                                    <div className="openTash" style={{ display: "none" }}>
                                                        {tashkilotlar.length > 0 && tashkilotlar.map((tash, index) => (
                                                            <>
                                                                {tash?.orgType?.name === dat?.name && (
                                                                    <div key={index}>
                                                                        {(
                                                                            <div key={index} className="">
                                                                                <div className="card-body pb-1 pt-2">
                                                                                    <div className="card mb-1">
                                                                                        <div
                                                                                            className="card-header d-flex align-items-center">
                                                                                            <NumericInput
                                                                                                value={tash?.orderNumber}
                                                                                                onKeyDown={(e) => changeInputNumber(e, tash.id)}
                                                                                                onChange={(e) => inputChangeHandler(e, tash.id)}
                                                                                                className="adminSozlamaInput"
                                                                                            />
                                                                                            <h6 className="card-title">
                                                                                                <a className="collapsed text-body NavLink ml-2"
                                                                                                    data-toggle="collapse"
                                                                                                    href={`#vHokimlik${index}`}>{tash.orgName}</a>
                                                                                            </h6>
                                                                                        </div>

                                                                                        <div id={`vHokimlik${index}`}
                                                                                            className="card-body collapse"
                                                                                            data-parent={`#accordion-default`}>
                                                                                            <div id="accordion-child2">
                                                                                                <div className="card">
                                                                                                    <div
                                                                                                        className="card-header bg-dark"
                                                                                                        onClick={() => getTashBoshTashkilot(tash.id)}>
                                                                                                        <h6 className="card-title">
                                                                                                            <a data-toggle="collapse"
                                                                                                                className="text-white"
                                                                                                                href={`#bTashkilot${index}`}>Bosh
                                                                                                                tashkilot</a>
                                                                                                        </h6>
                                                                                                    </div>

                                                                                                    <div
                                                                                                        id={`bTashkilot${index}`}
                                                                                                        className="collapse"
                                                                                                        data-parent={`#bTashkilot${index}`}>
                                                                                                        <div
                                                                                                            className="card-body">
                                                                                                            <table
                                                                                                                className="table datatable-row-full  mt-3 table-bordered table-striped table-hover Tab"
                                                                                                                id="myTable">
                                                                                                                <thead>
                                                                                                                    <tr className="bg-dark text-white NavLink text-center">
                                                                                                                        <th style={{ width: "3%" }}>№</th>
                                                                                                                        <th style={{ width: "15%" }}>logo</th>
                                                                                                                        <th style={{ width: "20%" }}>Tuman
                                                                                                                            (shahar)
                                                                                                                        </th>
                                                                                                                        <th style={{ width: "25%" }}>Qisqacha
                                                                                                                            Nomi
                                                                                                                        </th>
                                                                                                                        <th style={{ width: "25%" }}>Rahbari</th>
                                                                                                                        <td style={{ width: "8%" }}>Harakatlar</td>
                                                                                                                    </tr>
                                                                                                                </thead>
                                                                                                                <tbody
                                                                                                                    id="viloyat">
                                                                                                                    {boshTashkilotlar.length > 0 && boshTashkilotlar?.map((dat, index) => (
                                                                                                                        <tr key={index}
                                                                                                                            className="text-center">
                                                                                                                            <td>{index + 1}</td>
                                                                                                                            {/* userData?.avatar ? `${url}/file/download/${userData?.avatar?.id} */}
                                                                                                                            <td>
                                                                                                                                <img
                                                                                                                                    src={dat?.logo ? `${url}/api/file/download/${dat.logo.id}` : "assets/user.png"}
                                                                                                                                    style={{
                                                                                                                                        width: "120px",
                                                                                                                                        height: "120px"
                                                                                                                                    }}
                                                                                                                                    alt="" />
                                                                                                                            </td>
                                                                                                                            <td>{dat?.orgDistrict}</td>
                                                                                                                            <td>{dat?.orgShortName}</td>
                                                                                                                            <td>{dat?.leaderName}</td>
                                                                                                                            <td className="">
                                                                                                                                <div
                                                                                                                                    className="icon d-flex justify-content-center align-items-center">
                                                                                                                                    <Link
                                                                                                                                        to={`/super_base_admin_tashkilotlar-tuzilishi/${dat?.id}`}
                                                                                                                                        className="infoBtn bg-dark"
                                                                                                                                        data-bs-toggle="tooltip"
                                                                                                                                        data-popup="tooltip"
                                                                                                                                        data-bs-placement="top"
                                                                                                                                        title="Ko'rish">
                                                                                                                                        <span><i
                                                                                                                                            className="icon-eye2"></i></span>
                                                                                                                                    </Link>
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                        </tr>
                                                                                                                    ))}
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="card mb-0">
                                                                                                    <div
                                                                                                        className="card-header bg-dark"
                                                                                                        onClick={() => getTashQuyiTashkilot(tash.id)}>
                                                                                                        <h6 className="card-title">
                                                                                                            <a className="collapsed text-white"
                                                                                                                data-toggle="collapse"
                                                                                                                href={`#qTashkilot${index}`}>Quyi
                                                                                                                tashkilotlar</a>
                                                                                                        </h6>
                                                                                                    </div>

                                                                                                    <div
                                                                                                        id={`qTashkilot${index}`}
                                                                                                        className="collapse"
                                                                                                        data-parent={`#qTashkilot${index}`}>
                                                                                                        <div
                                                                                                            className="card-body">
                                                                                                            <table
                                                                                                                className="table datatable-row-full  mt-3 table-bordered table-striped table-hover Tab"
                                                                                                                id="myTable">
                                                                                                                <thead>
                                                                                                                    <tr className="bg-dark text-white NavLink text-center">
                                                                                                                        <th style={{ width: "3%" }}>№</th>
                                                                                                                        <th style={{ width: "15%" }}>logo</th>
                                                                                                                        <th style={{ width: "20%" }}>Tuman
                                                                                                                            (shahar)
                                                                                                                        </th>
                                                                                                                        <th style={{ width: "25%" }}>Qisqacha
                                                                                                                            Nomi
                                                                                                                        </th>
                                                                                                                        <th style={{ width: "25%" }}>Rahbari</th>
                                                                                                                        <td style={{ width: "8%" }}>Harakatlar</td>
                                                                                                                    </tr>
                                                                                                                </thead>
                                                                                                                <tbody
                                                                                                                    id="viloyat">
                                                                                                                    {quyiTashkilotlar.length > 0 && quyiTashkilotlar.map((dat, index) => (
                                                                                                                        <tr key={index}
                                                                                                                            className="text-center">
                                                                                                                            <td>{index + 1}</td>
                                                                                                                            <td>
                                                                                                                                <img
                                                                                                                                    src={dat?.logo?.id ? `${url}/api/file/download/${dat.logo.id}` : "/assets/user.png"}
                                                                                                                                    style={{
                                                                                                                                        width: "120px",
                                                                                                                                        height: "120px"
                                                                                                                                    }}
                                                                                                                                    alt="" />
                                                                                                                            </td>
                                                                                                                            <td>{dat?.orgDistrict}</td>
                                                                                                                            <td>{dat?.orgShortName}</td>
                                                                                                                            <td>{dat?.leaderName}</td>
                                                                                                                            <td className="">
                                                                                                                                <div
                                                                                                                                    className="icon d-flex justify-content-center align-items-center">
                                                                                                                                    <Link
                                                                                                                                        to={`/super_base_admin_tashkilotlar-tuzilishi/${dat?.id}`}
                                                                                                                                        className="infoBtn bg-dark"
                                                                                                                                        data-bs-toggle="tooltip"
                                                                                                                                        data-popup="tooltip"
                                                                                                                                        data-bs-placement="top"
                                                                                                                                        title="Ko'rish">
                                                                                                                                        <span><i
                                                                                                                                            className="icon-eye2"></i></span>
                                                                                                                                    </Link>
                                                                                                                                </div>
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
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </>
                                                        ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {updateYunalish.open && (
                <div className="adminWindow">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header btn-primary p-2">
                                <h5 className="modal-title">O'zgartirish oynasi</h5>
                                <button type="button" className="close"
                                    onClick={() => setUpdateYunalish({ open: false, obj: {} })}>×
                                </button>
                            </div>

                            <form className="modal-body form-inline justify-content-center">
                                <label>Yo'nalish:</label>
                                <input type="text" placeholder="Yo'nalish nomi"
                                    className="form-control mb-2 mr-sm-2 ml-sm-2 mb-sm-0 w-75 yunalishName"
                                    defaultValue={updateYunalish.obj?.name} />
                                <button type="button" onClick={() => yunalishUzgartirish(updateYunalish.obj)}
                                    className="btn btn-primary ml-sm-2 mb-sm-0"
                                    style={{ textTransform: "capitalize" }}>O'zgartirish
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* alert */}
            {alert.open && (
                <div className={`alert alert-${alert.color} alert-styled-left alert-dismissible`}>
                    {/* <button type="button" className="close" data-dismiss="alert"><span>×</span></button> */}
                    <span className="font-weight-semibold">{alert.text}</span>
                </div>
            )
            }
        </div>
    )
}