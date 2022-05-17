import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import TashkilotKurishNavbar from "../tashkilotKurishNavbar/TashkilotKurishNavbar";
import Select from 'react-select';
import { axiosInstance, url } from "../../../../../../config";
import { AuthContext } from "../../../../../../context/AuthContext";
import './tashkilotKurishContent.css';
import is from 'is_js';
import { Alert } from '../../../../../../component/alert/Alert';

export default function TashkilotKurishContent() {
    const [file, setFile] = useState(null);
    const params = useParams();
    const history = useHistory();
    const { user: currentUser } = useContext(AuthContext);
    const [organization, setOrganization] = useState([]);
    const [yunalishlar, setYunalishlar] = useState([]);
    const [fatherId, setFatherId] = useState(0);
    const [yunalishlar1, setYunalishlar1] = useState([]);
    const [yunalishlarF, setYunalishlarF] = useState([]);
    const [openInput, setOpenInput] = useState(true);
    const [yunalishTashkilotlar, setYunalishTashkilotlar] = useState([]);
    const [yunalishTashkilotlarF, setYunalishTashkilotlarF] = useState([]);
    const [yunalishTashkilotlar1, setYunalishTashkilotlar1] = useState([]);
    const [status, setStatus] = useState([]);
    const [iteratinyunalishlarO, setIteratinyunalishlarO] = useState([]);
    const [yunalishlarO, setYunalishlarO] = useState([]);
    // const [fileId, setFileId] = useState(null);
    const [employeePlan, setEmployeePlan] = useState([]);
    const [selectY, setSelectY] = useState([])
    const [alert, setAlert] = useState({ open: false, text: "", color: "" });
    let fileType = (file?.type === "image/jpg" || file?.type === "image/jpeg" || file?.type === "image/png");

    // console.log(organization);

    // id bo'yicha malumotlarni o'qib olish
    // organization[0]?.orgProvince
    useEffect(() => {
        axiosInstance.get('organization/' + params.id, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(async res => {
                console.log(res.data);
                // setYunalishlar(res.data);
                setYunalishlarO(res.data);
                if(res.data.fatherOrganization!==null){
                    document.querySelector('.asosiyBoshTashCheckBox').querySelector('.css-qc6sy-singleValue').textContent = res.data?.fatherOrganization?.orgName;
                    document.querySelector('.yunalishCheckBox').querySelector('.css-qc6sy-singleValue').textContent = res.data?.fatherOrganization?.orgType?.name;
                    setOpenInput(true)
                }else{setOpenInput(false)}
                let arr = [];
                arr.push(res.data)
                document.querySelector('.status').querySelector('.css-qc6sy-singleValue').textContent = res.data?.organizationStatus?.name;
                document.querySelector('.viloyat').querySelector('.css-qc6sy-singleValue').textContent = res.data?.orgProvince;
                document.querySelector('.yunalish').querySelector('.css-qc6sy-singleValue').textContent = res.data?.orgType?.name;
                document.querySelector('.yunalish11').querySelector('.css-qc6sy-singleValue').textContent = res.data?.mainOrganization?.orgType?.name;
                document.querySelector('.yunalish1').querySelector('.css-qc6sy-singleValue').textContent = res.data?.passiveOrganization?.orgType?.name;
                document.querySelector('.asosiyTash').querySelector('.css-qc6sy-singleValue').textContent = res.data?.mainOrganization?.orgName;
                document.querySelector('.qushimchaTash').querySelector('.css-qc6sy-singleValue').textContent = res.data?.passiveOrganization?.orgName;
                document.querySelector('.employeePlan').querySelector('.css-qc6sy-singleValue').textContent = res.data?.orgEmployeePlan?.name;
                document.querySelector('.custom-file-label').textContent = res.data?.logo?.originalName;

                // default yo'nalish uchun shunga mos tashkilotlarni chiqarish
                // const res1 = await axiosInstance.get('orgType/all', {
                //     headers: {
                //         Authorization: "Bearer " + currentUser
                //     }
                // });
                // let arr1 = [];
                // res1.data.forEach((d, i) => {
                //     arr1.push({ value: d.id, label: d.name });
                // });
                // let a = arr1.filter((d, i) => {
                //     return d.label === res.data?.orgType?.name
                // })
                //
                // // yunalish id siga mos tashkilotlarni o'qib olish
                // axiosInstance.get('organization/orgType/' + a[0]?.value, {
                //     headers: {
                //         Authorization: "Bearer " + currentUser
                //     }
                // })
                //     .then(res => {
                //         let y1 = [];
                //         res.data.forEach((y, index) => {
                //             if (y.orgName !== document.querySelector('.korxonaNomi').value) {
                //                 y1.push({ value: y.id, label: y.orgName });
                //             }
                //         })
                //         // y1.push({ value: null, label: "NONE" });
                //         setYunalishTashkilotlar(y1);
                //     })
                //     .catch(err => {
                //         console.log(err.response);
                //     })
                setOrganization(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, [params.id, currentUser]);

    useEffect(()=> {
        // oldingi id ni olish
        let arr123 = [], arr1234 = [], arr12345 = [];
        yunalishlar.forEach((d) => {
            if (d.label === document.querySelector('.yunalish11')?.querySelector('.css-qc6sy-singleValue')?.textContent) {
                arr12345.push(d);
            }
        })
        axiosInstance.get('organization/orgType/' + arr12345[0]?.value, {
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
    }, [yunalishlar, yunalishlarF, yunalishlar1]);


    useEffect(()=> {
        // oldingi id ni olish
        let arr123 = [], arr1234 = [], arr12345 = [];

        yunalishlar.forEach((d) => {
            if (d.label === document.querySelector('.yunalish1')?.querySelector('.css-qc6sy-singleValue')?.textContent) {
                arr123.push(d);
            }
        })
        axiosInstance.get('organization/orgType/' + arr123[0]?.value, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data)
                let y1 = [];
                res.data.forEach((y, index) => {
                    y1.push({ value: y.id, label: y.orgName });
                })
                setYunalishTashkilotlar1(y1);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, [yunalishlar, yunalishlarF, yunalishlar1]);


    useEffect(() => {
        // oldingi id ni olish
        let arr123 = [], arr1234 = [], arr12345 = [];

        yunalishlar.forEach((d) => {
            if (d.label === document.querySelector('.yunalishCheckBox')?.querySelector('.css-qc6sy-singleValue')?.textContent) {
                arr1234.push(d);
            }
        })

        axiosInstance.get('organization/orgType/' + arr1234[0]?.value, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data)
                let y1 = [];
                res.data.forEach((y, index) => {
                    y1.push({ value: y.id, label: y.orgName });
                })
                setYunalishTashkilotlarF(y1);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, [yunalishlar, yunalishlarF, yunalishlar1])


    // organizatsiyalar soni
    useEffect(() => {
        axiosInstance.get("organization/employeePlan", {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                let arr = [];
                res.data.forEach((d, i) => {
                    arr.push({ value: d.id, label: d.name });
                })
                setEmployeePlan(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, [currentUser]);


    // tooltipni o'chirish
    useEffect(() => {
        document.querySelector('.tooltip')?.remove();
    }, []);

    console.log(yunalishlarF)

    // useEffect(() => {
    //     let arr = yunalishlarF.filter((a,index) => {
    //         if (a.label === document.querySelector('.yunalishCheckBox').querySelector(('.css-qc6sy-singleValue')).textContent) {
    //            return a;
    //         }
    //     })
    //     setSelectY(arr);
    // }, [yunalishlarF]);

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


    // barcha yunalishlarni o'qib olish
    useEffect(() => {
        const getallYunalish = async () => {
            const res = await axiosInstance.get('orgType/all', {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            });
            console.log(res.data)
            let arr = [];
            res.data.forEach((d, i) => {
                arr.push({ value: d.id, label: d.name });
            })
            setYunalishlar(arr);
            setYunalishlar1(arr);
            setYunalishlarF(arr);
        }
        getallYunalish();
    }, [currentUser]);

    const logChange12 = (e) => {
        console.log(e.value);
        setFatherId(e.value)
        // let FatherId = yunalishlar.forEach((item,index)=>{})
    }

    // yo'nalishga mos tashkilotni chiqarish
    const changeYunalish = (e) => {
        console.log(e);
        axiosInstance.get('organization/orgType/' + e.value, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                let y1 = [];
                res.data.forEach((y, index) => {
                    if (y.orgName !== document.querySelector('.korxonaNomi').value) {
                        y1.push({ value: y.id, label: y.orgName });
                    }
                })
                // console.log(y1);
                y1.push({ value: null, label: "NONE" });
                setYunalishTashkilotlar(y1);
            })
            .catch(err => {
                console.log(err);
            })
    }

    // useEffect(() => {
    //     let arr = yunalishlarO?.map((yun, index) => (
    //         { value: yun.id, label: yun.name }
    //     ))
    //     setIteratinyunalishlarO(arr);
    // }, [yunalishlar]);

    const changeYunalish1 = (e) => {
        console.log(e);
        axiosInstance.get('organization/orgType/' + e.value, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                let y1 = [];
                res.data.forEach((y, index) => {
                    if (y.orgName !== document.querySelector('.korxonaNomi').value) {
                        y1.push({ value: y.id, label: y.orgName });
                    }
                })
                // console.log(y1);
                y1.push({ value: null, label: "NONE" });
                setYunalishTashkilotlar(y1);
            })
            .catch(err => {
                console.log(err);
            })
    }

    // barcha statuslarni o'qib olish
    useEffect(() => {
        axiosInstance.get("organizationStatus", {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                let arr = [];
                res.data.forEach((d, i) => {
                    arr.push({ value: d.id, label: d.name })
                })
                setStatus(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, [currentUser]);

    // yunalishga qarab tashkilotlarni chiqarish
    const logChange123 = (e) => {
        axiosInstance.get('organization/orgType/' + e.value, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data);
                let y1 = [];
                res.data.forEach((y, index) => {
                    if (y.orgName !== document.querySelector('.korxonaNomi').value) {
                        y1.push({ value: y.id, label: y.orgName });
                    }
                })
                y1.push({ value: null, label: "NONE" });
                setYunalishTashkilotlar1(y1);
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    console.log(yunalishlar)


    console.log(selectY)
    // malumotlarni oz'gartirish uchun 
    const submitHandler = async (e) => {
        e.preventDefault();
        let korxonaNomi = document.querySelector('.korxonaNomi').value;
        let qisqachaNomi = document.querySelector('.qisqachaNomi').value;
        let viloyat = document.querySelector('.viloyat').querySelector('.css-qc6sy-singleValue').textContent;
        let tumanShahar = document.querySelector('.tumanShahar').value;
        let manzil = document.querySelector('.manzil').value;
        let stir = document.querySelector('.stir').value;
        let fio = document.querySelector('.fio').value;
        let telefon = document.querySelector('.telefon').value;
        let email = document.querySelector('.email').value;
        let exat = document.querySelector('.exat').value;
        let status1 = document.querySelector('.status').querySelector('.css-qc6sy-singleValue')?.textContent;
        let url = document.querySelector('.url').value;

        let yunalish = document.querySelector('.yunalish').querySelector('.css-qc6sy-singleValue')?.textContent;
        // yunalishCheckBox,  asosiyBoshTashCheckBox
        let yunalish1 = document.querySelector('.yunalish1')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let asosiyTash = document.querySelector('.asosiyTash')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let qushimchaTash = document.querySelector('.qushimchaTash')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let employeePlan1 = document.querySelector('.employeePlan')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let yunalishCheckBox = document.querySelector('.yunalishCheckBox')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let asosiyBoshTashCheckBox = document.querySelector('.asosiyBoshTashCheckBox')?.querySelector('.css-qc6sy-singleValue')?.textContent;

        // // yunalish va
        // yunalishlar.filter


        // // selectdagi yunalishni tanlagan payt id sini olish
        // let y1 = yunalishlar?.filter((y, index) => {
        //     return y.name === yunalish;
        // })

        // selectdagi tashkilotni tanlagan payt id sini olish
        let y2 = yunalishTashkilotlar?.filter((y, index) => {
            return y.label === asosiyTash;
        })

        // selectdagi tashkilotni tanlagan payt id sini olish
        let y3 = yunalishTashkilotlar1?.filter((y, index) => {
            return y.label === qushimchaTash;
        })

            let arr123 = yunalishlarF.filter((a,index) => {
                if (a.label === yunalishCheckBox) {
                   return a;
                }
            })


        if (fileType) {
            const formData = new FormData();
            formData.append('logo', file);

            // faylni o'zini yuborish
            axiosInstance.post("organization/uploadLogo", formData, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    console.log(res.data);
                    // tanlangan yunalishni id sini olish
                    let arr0 = yunalishlar.filter((d, i) => {
                        return d.label === yunalish;
                    })

                    let arr4 = yunalishlarF.filter((d, i) => {
                        return d.label === yunalishCheckBox;
                    })

                    let arr5 = yunalishTashkilotlarF.filter((d, i) => {
                        return d.label === asosiyBoshTashCheckBox
                    })

                    console.log(arr5)

                    // statusni id sini olish
                    let arr = status.filter((d, i) => {
                        return d.label === status1;
                    })

                    // asosiy tashkilotni id sini olish
                    let arr1 = yunalishTashkilotlar.filter((d, i) => {
                        return d.label === asosiyTash;
                    })

                    // quyi tashkilotni id sini olish
                    let arr2 = yunalishTashkilotlar1.filter((d, i) => {
                        return d.label === qushimchaTash;
                    })


                    // employeePlanId ni tanlagan payt id sini olish
                    let arr3 = employeePlan?.filter((d, i) => {
                        return d.label === employeePlan1;
                    })
                    if (yunalish) {
                        if (is.email(email)) {
                            // barcha malumotlarni yuborish
                            axiosInstance.patch("organization", {
                                id: params.id,
                                stir: stir,
                                orgName: korxonaNomi,
                                orgShortName: qisqachaNomi,
                                orgProvince: viloyat,
                                orgDistrict: tumanShahar,
                                address: manzil,
                                leaderName: fio,
                                mobileNumber: telefon,
                                orgEmail: email,
                                orgExat: exat || null,
                                logoId: res.data.id,
                                orgTypeId: arr0[0] ? arr0[0]?.value : organization[0]?.orgType?.id,
                                statusId: arr[0] ? arr[0]?.value : organization[0]?.organizationStatus?.id,
                                mainOrganizationId: arr1[0] ? arr1[0]?.value : null,
                                passiveOrganizationId: arr2.length>0 ? arr2[0]?.value : null,
                                orgSiteUrl: url,   //yunalishlar?.fatherOrganization?.id
                                fatherOrganizationId: arr5.length > 0 ? arr5[0].value : null,
                                employeePlanId: arr3[0] ? arr3[0]?.value : organization[0]?.orgEmployeePlan?.id,
                            }, {
                                headers: {
                                    Authorization: "Bearer " + currentUser
                                }
                            })
                                .then(res => {
                                    // console.log(res.data);
                                    if (res.data === "Update organization") {
                                        Alert(setAlert, "success", "Ma'lumotlaringiz muvaffaqiyatli o'zgartirildi!");
                                        // setAlert({ open: true, text: "Ma'lumotlaringiz muvaffaqiyatli o'zgartirildi!", color: "success" });
                                        setTimeout(() => {
                                            // setAlert({ open: false, text: "", color: "" });
                                            history.push("/super_base_admin_tashkilot-qushish");
                                        }, 1000);
                                    }
                                })
                                .catch(err => {
                                    console.log(err.response);
                                    Alert(setAlert, "warning", err?.response?.data);
                                })
                        } else {
                            Alert(setAlert, "warning", "Email xato kiritilgan");
                        }
                    } else {
                        Alert(setAlert, "warning", "Yo'nalish tanlanmagan");
                    }
                })
                .catch(err => {
                    console.log(err.response);
                    Alert(setAlert, "warning", err?.response?.data);
                    // setAlert({ open: true, text: err.response.data, color: "warning" });
                    setTimeout(() => {
                        // setAlert({ open: false, text: "", color: "" });
                        history.push("/super_base_admin_tashkilot-qushish");
                    }, 1000);
                })
        } else {
            // tanlangan yunalishni id sini olish
            let arr0 = yunalishlar?.filter((d, i) => {
                return d.label === yunalish;
            })
            let arr10 = yunalishlar1?.filter((d, i) => {
                return d.label === yunalish1;
            })

            // statusni id sini olish
            let arr = status?.filter((d, i) => {
                return d.label === status1;
            })

            let arr5 = yunalishTashkilotlarF.filter((d, i) => {
                return d.label === asosiyBoshTashCheckBox
            })

            console.log(arr5)

            // asosiy tashkilotni id sini olish
            let arr1 = yunalishTashkilotlar.filter((d, i) => {
                return d.label === asosiyTash;
            })

            // quyi tashkilotni id sini olish
            let arr2 = yunalishTashkilotlar1?.filter((d, i) => {
                return d.label === qushimchaTash;
            })

            // employeePlanId ni tanlagan payt id sini olish
            let arr3 = employeePlan?.filter((d, i) => {
                return d.label === employeePlan1;
            })

            // console.log(fileId);
            if (yunalish) {
                if (is.email(email)) {
                    // barcha malumotlarni yuborish
                    axiosInstance.patch("organization", {
                        id: params.id,
                        stir: stir,
                        orgName: korxonaNomi,
                        orgShortName: qisqachaNomi,
                        orgProvince: viloyat,
                        orgDistrict: tumanShahar,
                        address: manzil,
                        leaderName: fio,
                        mobileNumber: telefon,
                        orgEmail: email,
                        orgExat: exat || null,
                        logoId: null,
                        orgTypeId: arr0[0] ? arr0[0]?.value : organization[0]?.orgType?.id,
                        statusId: arr[0] ? arr[0]?.value : organization[0]?.organizationStatus?.id,
                        mainOrganizationId: arr1[0] ? arr1[0]?.value :  null,
                        passiveOrganizationId: arr2[0] ? arr2[0]?.value : null,
                        orgSiteUrl: url,
                        fatherOrganizationId: arr5.length > 0 ? arr5[0].value : null,
                        employeePlanId: arr3[0] ? arr3[0]?.value : organization[0]?.orgEmployeePlan?.id,
                    }, {
                        headers: {
                            Authorization: "Bearer " + currentUser
                        }
                    })
                        .then(res => {
                            if (res.data === "Update organization") {
                                Alert(setAlert, "success", "Ma'lumotlaringiz muvaffaqiyatli o'zgartirildi!");
                                setTimeout(() => {
                                    history.push("/super_base_admin_tashkilot-qushish");
                                }, 1000);
                            }
                        })
                        .catch(err => {
                            console.log(err.response);
                            Alert(setAlert, "warning", err?.response?.data);
                        })
                } else {
                    Alert(setAlert, "warning", "Email xato kiritilgan");
                }
            } else {
                Alert(setAlert, "warning", "Yo'nalish tanlanmagan");
            }
        }
    }


    const checked=(e)=>{
        console.log('qale',e)
        setOpenInput(e)
    }


    return (
        <div className="content mb-5">
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Tashkilot tuzulishi</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px" }}>
                    <TashkilotKurishNavbar params={params.id} />
                </ul>

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <form onSubmit={submitHandler} className="formUpdate">
                                    <div className="row ">
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-outline korxonaNomi"
                                                            placeholder="Placeholder"
                                                            defaultValue={organization[0]?.orgName}
                                                        />
                                                        <label className="label-floating">Korxona Nomi</label>
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
                                                            className="form-control form-control-outline qisqachaNomi"
                                                            placeholder="Placeholder"
                                                            defaultValue={organization[0]?.orgShortName}
                                                        />
                                                        <label className="label-floating">Qisqacha nomi</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <Select
                                                        defaultValue={{ value: "", label: "" }}
                                                        options={status}
                                                        // onChange={logChange12}
                                                        placeholder="Status"
                                                        className="status"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <Select
                                                            defaultValue={{ value: "", label: "" }}
                                                            options={[
                                                                { value: "Viloyat", label: "Viloyat", isDisabled: true },
                                                                { value: "Andijon viloyati", label: "Andijon viloyati" },
                                                                { value: "Buxoro viloyati", label: "Buxoro viloyati" },
                                                                { value: "Fargʻona viloyati", label: "Fargʻona viloyati" },
                                                                { value: "Jizzax viloyati", label: "Jizzax viloyati" },
                                                                { value: "Xorazm viloyati", label: "Xorazm viloyati" },
                                                                { value: "Namangan viloyati", label: "Namangan viloyati" },
                                                                { value: "Navoiy viloyati", label: "Navoiy viloyati" },
                                                                { value: "Qashqadaryo viloyati", label: "Qashqadaryo viloyati" },
                                                                { value: "Qoraqalpogʻiston Respublikasi", label: "Qoraqalpogʻiston Respublikasi" },
                                                                { value: "Samarqand viloyati", label: "Samarqand viloyati" },
                                                                { value: "Sirdaryo viloyati", label: "Sirdaryo viloyati" },
                                                                { value: "Surxondaryo viloyati", label: "Surxondaryo viloyati" },
                                                                { value: "Toshkent viloyati", label: "Toshkent viloyati" },
                                                            ]}
                                                            // onChange={logChange12}
                                                            placeholder="Viloyat"
                                                            className="viloyat"
                                                        />
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
                                                            className="form-control form-control-outline tumanShahar"
                                                            placeholder="Placeholder"
                                                            defaultValue={organization[0]?.orgDistrict}
                                                        />
                                                        <label className="label-floating">Tuman(Shahar)</label>
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
                                                            className="form-control form-control-outline manzil"
                                                            placeholder="Placeholder"
                                                            defaultValue={organization[0]?.address}
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
                                                            // data-mask="999-999-999"
                                                            className="form-control InputCard form-control-outline stir"
                                                            maxLength="9"
                                                            placeholder="Placeholder"
                                                            defaultValue={organization[0]?.stir}
                                                            disabled
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
                                                            defaultValue={organization[0]?.leaderName}
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
                                                            defaultValue={organization[0]?.mobileNumber}
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
                                                            defaultValue={organization[0]?.orgEmail}
                                                        />
                                                        <label className="label-floating">Email</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group form-group-floating  row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input
                                                            type="email"
                                                            className="form-control form-control-outline exat"
                                                            placeholder="Placeholder"
                                                            defaultValue={organization[0]?.orgExat}
                                                        />
                                                        <label className="label-floating">E-xat</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-1">
                                            <div className="form-group form-group-floating row mb-0" style={{ height: "56px" }}>
                                                <div className="col-lg-12">
                                                    <label className="custom-file" >
                                                        {file ? (
                                                            <img src={URL.createObjectURL(file)} alt="" className="tashKurishImg" />
                                                        ) : (
                                                            <img src={url + "/api/file/view/" + organization[0]?.logo?.id} alt="" className="tashKurishImg" />
                                                        )}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row mb-0">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <Select
                                                            defaultValue={{ value: "", label: "" }}
                                                            options={yunalishlar}
                                                            onChange={changeYunalish}
                                                            placeholder="Yo'nalish"
                                                            className="yunalish"
                                                        />
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
                                                            className="form-control form-control-outline url"
                                                            placeholder="http(s)://example.com"
                                                            defaultValue={organization[0]?.orgSiteUrl}
                                                        // data-mask="http(s)://aaaaaaaaaaaaaaaaaaaa"
                                                        />
                                                        <label className="label-floating">URL</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group form-group-floating row mb-0" style={{ height: "56px"}}>
                                                <div className="col-lg-12">
                                                    <label className="custom-file">
                                                        <input
                                                            type="file"
                                                            className="custom-file-input"
                                                            accept=".png, .jpg, .jpeg"
                                                            onClick={(e) => e.target.value = null}
                                                            onChange={(e) => setFile(e.target.files[0])}
                                                        />
                                                        <span className="custom-file-label text-muted" style={{ height: "56px", padding: "auto",width:'100%' }}>
                                                            {fileType ? file?.name : organization[0]?.logo?.originalName ? organization[0]?.logo?.originalName : "Logotip"}
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="form-group form-group-floating row mb-0">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <Select
                                                            defaultValue={{ value: "", label: "" }}
                                                            options={yunalishlar1}
                                                            onChange={changeYunalish1}
                                                            placeholder="Yo'nalish"
                                                            className="yunalish11"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group form-group-floating row mb-0">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <Select
                                                            defaultValue={{ value: "", label: "" }}
                                                            options={yunalishTashkilotlar}
                                                            // onChange={logChange12}
                                                            placeholder="Bosh tashkilotlar"
                                                            className="asosiyTash"
                                                            isClearable={true}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <span style={{ fontSize: "13px" }} className="text-muted">Bosh tashkilot</span>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="form-group form-group-floating row mb-0">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <Select
                                                            defaultValue={{ value: "", label: "" }}
                                                            options={yunalishlar}
                                                            onChange={logChange123}
                                                            placeholder="Bosh tashkilot 2"
                                                            className="yunalish1"
                                                            // isClearable={true}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <span style={{ fontSize: "13px" }} className="text-muted">Yo'nalish</span>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group form-group-floating row mb-0">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <Select
                                                            defaultValue={{ value: "", label: "" }}
                                                            options={yunalishTashkilotlar1}
                                                            // onChange={logChange12}
                                                            placeholder="Bosh tashkilot 2"
                                                            className="qushimchaTash"
                                                            isClearable={true}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <span style={{ fontSize: "13px" }} className="text-muted">Qo'shimcha bosh tashkilot</span>
                                        </div>

                                        <div className="col-lg-2">
                                            <div className="form-group form-group-floating row mb-0">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <Select
                                                            defaultValue={{ value: "", label: "" }}
                                                            options={employeePlan}
                                                            // onChange={logChange12}
                                                            placeholder="Soni"
                                                            className="employeePlan"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <span style={{ fontSize: "13px" }} className="text-muted">Ishchilar soni</span>
                                        </div>
                                    </div>


                                    {/*checked*/}
                                    <div className={'col-lg-12'}>
                                        <div className="d-flex gap-2 ">
                                            <input type="checkbox"
                                                   onClick={(e) => checked(e.target.checked)}
                                                   className="checkboxInput cursor-pointer" style={{  width:'20px',height: "20px", padding: "20px" }} />
                                            <label htmlFor="checkboxInput" style={{color: "blue",marginLeft:"20px"}}>Asosiy bosh tashkiloti</label>
                                        </div>
                                        {
                                            openInput ? <div className={'checkedBoxInputs col-lg-12 row'}>
                                                <div className="col-lg-6">
                                                    <div className="form-group form-group-floating row">
                                                        <div className="col-lg-12">
                                                            <div className="position-relative" >
                                                                <Select
                                                                    defaultValue={{ value: "", label: "" }}
                                                                    options={yunalishlarF}
                                                                    placeholder="Yo'nalish"
                                                                    className="yunalishCheckBox"
                                                                    onChange={changeYunalishF}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 checkedCheckbox">
                                                    <div className="form-group form-group-floating row">
                                                        <div className="col-lg-12">
                                                            <div className="position-relative">
                                                                <Select
                                                                    defaultValue={{ value: "", label: "" }}
                                                                    options={yunalishTashkilotlarF}
                                                                    // onChange={logChange12}
                                                                    placeholder="Bosh tashkilot"
                                                                    className="asosiyBoshTashCheckBox"
                                                                    isClearable={true}
                                                                />

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : ""
                                        }
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <button type="submit" className="btn btn-primary"><i className="icon-floppy-disk"></i> Saqlash</button>
                                        </div>
                                    </div>
                                </form>

                                {/* alert */}
                                {alert.open && (
                                    <div className="d-flex justify-content-center alertNotice">
                                        <div className={`alert alert-${alert.color} alert-styled-left alert-arrow-left alert-dismissible`} style={{ width: "20%" }}>
                                            {/* <button type="button" className="close" data-dismiss="alert"><span>×</span></button> */}
                                            <span className="font-weight-semibold">{alert.text}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}