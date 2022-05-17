import React, {useContext, useEffect, useState} from "react";
import {axiosInstance, url} from "../../../../config";
import {AuthContext} from "../../../../context/AuthContext";
import ContentNavbarSozlamalar from "../../contentNavbarSozlamalar/ContentNavbarSozlamalar";
import './sozKorrespondentContent.css';
import is from 'is_js';
import {Alert} from "../../../../component/alert/Alert";
import {useParams} from "react-router-dom";
import ReactPaginate from "react-paginate";

export default function SozlamalarKorrespondentContent() {
    const {user: currentUser} = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [stirData, setStirData] = useState({});
    const [alert, setAlert] = useState({open: false, text: "", color: ""});
    const [updateModal, setUpdateModal] = useState({open: false, obj: {}});

    const [selected, setSelected] = useState(0);
    const [deleteModal, setDeleteModal] = useState({open: false, obj: {}});


    // ----------------------------------------------------------------

    const [yunalishQidirishHajmi, setYunalishQidirishHajmi] = useState([]);
    const [yunalishlar, setYunalishlar] = useState([]);
    const [iteratinYunalishlar, setIteratinYunalishlar] = useState([]);
    const [tashkilotlar, setTashkilotlar] = useState([]);
    const [yunalishTashkilotlar, setYunalishTashkilotlar] = useState([]);
    const [yunalishTashkilotlar1, setYunalishTashkilotlar1] = useState([]);
    const [boshTashkilotlar, setBoshTashkilotlar] = useState([]);
    const [quyiTashkilotlar, setQuyiTashkilotlar] = useState([]);
    const [updateYunalish, setUpdateYunalish] = useState({});
    const [change, setChange] = useState(false);
    const [tashkilotIds, setTashkilotIds] = useState([]);
    const [orgNameId, setOrgNameId] = useState('');
    const [pageId, setPageId] = useState(0);
    const params = useParams()


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
        axiosInstance.get("organization/checkOrgType", {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data);
                setYunalishlar(res.data);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, [currentUser]);


    // yunalishlarni yunalish degan select ga joylashtirish
    useEffect(() => {
        let arr = yunalishlar.map((yun, index) => (
            {value: yun.id, label: yun.name}
        ))
        setIteratinYunalishlar(arr);
    }, [yunalishlar]);

    // id bo'yicha tashkilotlarni o'qib olish
    const getTashkilot = (id) => {
        axiosInstance.get("organization/showCorrespondent/byOrgType/" + id, {
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

        // axiosInstance.get('organization/checkedOrgId/forCorrespondent/' + id, {
        //     headers: {
        //         Authorization: "Bearer " + currentUser
        //     }
        // })
        //     .then(res => {
        //         console.log(res.data)
        //         setTashkilotIds(res.data)
        //         // setQuyiTashkilotlar(res.data);
        //     })
        //     .catch(err => {
        //         console.log(err.response);
        //     })
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
                    setUpdateYunalish({open: false, obj: {}});
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

    // tashqi input['checkbox] ni bosgan payt
    const checkedInput = (e, dat) => {
        console.log(dat)
        if (e.target.checked) {
            // console.log("true");
            axiosInstance.post("organization/addCorrespondent", {
                id: dat.id,
            }, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err.response);
                })
            setChange(!change);
        } else {
            // console.log("false");
            axiosInstance.post("organization/deleteCorrespondent", {
                id: dat.id,
            }, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    // console.log(res.data);
                })
                .catch(err => {
                    console.log(err.response);
                })
            setChange(!change);
        }
    }

    const searchOrg = (e) => {
        console.log(e);
        setOrgNameId(e)
        if(e.length!==0){
            axiosInstance.post("organization/search", {
                orgName: e,
                page: pageId,
            }, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    console.log(res.data);
                    setYunalishQidirishHajmi(res.data)
                })
                .catch(err => {
                    console.log(err.response);
                })
            console.log({
                orgName: e,
                page:pageId
            })
        }else{
            setYunalishQidirishHajmi([])
        }

        // setChange(!change);
    }
    // sitr bo'yicha qidirish
    const qidirish = async () => {
        let sitri = document.querySelector('.sitri').value;

        if (sitri) {
            if (sitri.length === 11) {
                // to do server
                try {
                    const res = await axiosInstance.get(`organization/showCorrespondent/${sitri}`, {
                        headers: {
                            Authorization: "Bearer " + currentUser
                        }
                    })
                    if (res.data?.orgName) {
                        document.querySelector('.tashNomi').value = res.data?.orgName;
                        document.querySelector('.manzil').value = res.data?.address;
                        document.querySelector('.telefon').value = res.data?.mobileNumber;
                        document.querySelector('.email').value = res.data?.orgEmail;
                        document.querySelector('.exat').value = res.data?.orgExat;
                        setStirData(res.data);
                        Alert(setAlert, "success", "Ma'lumot muvaffaqiyatli topildi");
                    } else {
                        Alert(setAlert, "warning", "Xatolik bor")
                    }
                } catch (error) {
                    Alert(setAlert, "warning", error.response?.data);
                    ;
                }
            } else {
                Alert(setAlert, "warning", "Sitr xato kiritilgan");
            }
        } else {
            Alert(setAlert, "warning", "Sitr kiritilmagan");
        }
    }

    // malumot qo'shish
    const submitHandler = async (e) => {
        e.preventDefault();

        let tashkilotNomi = document.querySelector('.tashNomi').value;
        let manzil = document.querySelector('.manzil').value;
        let telefon = document.querySelector('.telefon').value;
        let pochta = document.querySelector('.email').value;
        let exat = document.querySelector('.exat').value;

        if (tashkilotNomi) {
            if (manzil) {
                if (telefon.length === 9) {
                    if (is.email(pochta)) {
                        // to do server
                        try {
                            const res = await axiosInstance.post("organization/addCorrespondent", {
                                id: stirData.id
                            }, {
                                headers: {
                                    Authorization: "Bearer " + currentUser
                                }
                            })
                            setData(prev => [...prev, res.data]);
                            Alert(setAlert, "success", "Ma'lumot muvaffaqiyatli o'chirildi");
                            document.querySelector('.sitri').value = "";
                            document.querySelector('.formClear').reset();
                        } catch (error) {
                            console.log(error.response);
                            Alert(setAlert, "warning", error.response?.data);
                        }
                    } else {
                        Alert(setAlert, "warning", "Email xato kiritilgan");
                    }
                } else {
                    Alert(setAlert, "warning", "Telefon nomer xato kiritilgan");
                }
            } else {
                Alert(setAlert, "warning", "Manzil kiritilmagan");
            }
        } else {
            Alert(setAlert, "warning", "Tashkilot nomi kiritilmagan");
        }
    }

    // barcha korrespondentlarni o'qib olish
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axiosInstance.get("organization/orgCorrespondent", {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                console.log(res.data);
                setData(res.data);
            } catch (error) {
                console.log(error.response);
            }
        }
        getData();
    }, []);

    const Uzgartirish = (dat) => {
        let tashNomi = document.querySelector('.tashkilotNomiUzgartirish').value;
        let manzil = document.querySelector('.manzilUzgartirish').value;
        let telefon = document.querySelector('.telefonUzgartirish').value;
        let pochta = document.querySelector('.emailUzgartirish').value;
        let exat = document.querySelector('.exatUzgartirish').value;

        if (tashNomi) {
            if (manzil) {
                if (telefon.length === 9) {
                    if (is.email(pochta)) {
                        if (is.email(pochta)) {
                            // to do server
                            axiosInstance.patch("organization/correspondent", {
                                id: dat.id,
                                name: tashNomi,
                                address: manzil,
                                phoneNumber: telefon,
                                email: pochta,
                                exat: exat
                            }, {
                                headers: {
                                    Authorization: "Bearer " + currentUser
                                }
                            })
                                .then(res => {
                                    let arr = data.filter((d, i) => {
                                        if (d.id === res.data.id) {
                                            d.id = res.data.id;
                                            d.orgName = res.data.orgName;
                                            d.address = res.data.address;
                                            d.mobileNumber = res.data.mobileNumber;
                                            d.orgEmail = res.data.orgEmail;
                                            d.orgExat = res.data.orgExat;
                                        }
                                        return d;
                                    })
                                    Alert(setAlert, "success", "Ma'lumot muvaffaqiyatli o'zgartirildi");
                                    setData(arr);
                                    setUpdateModal({open: false, obj: {}});
                                })
                                .catch(err => {
                                    console.log(err.response);
                                    Alert(setAlert, "warning", err.response.data);
                                })
                        } else {
                            Alert(setAlert, "warning", "Email xato kiritilgan");
                        }
                    } else {
                        Alert(setAlert, "warning", "Email xato kiritilgan");
                    }
                } else {
                    Alert(setAlert, "warning", "Telefon nomer xato kiritilgan");
                }
            } else {
                Alert(setAlert, "warning", "Manzil kiritilmagan");
            }
        } else {
            Alert(setAlert, "warning", "Tashkilot nomi kiritilmagan");
        }
    }

    const handlePageClick = async (e) => {
        console.log(e.selected);
        setPageId(e.selected)
        try {
            const res = await axiosInstance.post(`organization/search`,{
                orgName:orgNameId,
                page:e.selected,
            }, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
            console.log(res.data)
            setYunalishQidirishHajmi(res.data);
        } catch (error) {
            console.log(error.response);
        }
    }

    const Uchirish = (dat) => {
        axiosInstance.delete("organization/correspondent/" + dat.id, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                let arr = data.filter(((d, i) => {
                    if (d.id !== res.data) {
                        return d;
                    }
                }))
                setData(arr);
                setDeleteModal({open: false, obj: {}});
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    const enter = (e) => {
        if (e.code === "Enter") {
            qidirish();
        }
    }

    return (
        <div className="content mb-5">
            <h3 style={{margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase"}}>Korrespondent</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <ContentNavbarSozlamalar/>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        <div className="card">
                            <div className="card-body" style={{padding: "20px 30px"}}>
                                <div className="row">
                                    <div className="col-lg-2">
                                        <div className="form-group form-group-floating row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <input
                                                        type="text"
                                                        data-mask="999-999-999"
                                                        className="form-control form-control-outline sitri"
                                                        placeholder="Placeholder"
                                                        maxLength={11}
                                                        onKeyDown={(e) => enter(e)}
                                                    />
                                                    <label className="label-floating">Tashkilot sitri</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className="form-group form-group-floating row">
                                            <div className="col-lg-12">
                                                <div className="position-relative">
                                                    <button type="button" onClick={qidirish}
                                                            className="btn btn-primary form-control">Qidirish
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row  col-lg-8 pr-0">
                                        <div className={'col-lg-6'}>

                                        </div>
                                        <div className={'col-lg-6 pr-0'}>
                                            <input type="text"
                                                   className={'form-control form-control-outline'}
                                                   placeholder="Search..."
                                                   style={{height: "56px"}}
                                                   onChange={(e) => searchOrg(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr style={{margin: "0"}}/>
                                <form className="mt-3 formClear" onSubmit={submitHandler}>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input disabled
                                                               type="text"
                                                               className="form-control form-control-outline tashNomi"
                                                               placeholder="Placeholder"
                                                        />
                                                        <label className="label-floating">Tashkilot nomi</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input disabled
                                                               type="text"
                                                               className="form-control form-control-outline manzil"
                                                               placeholder="Placeholder"
                                                        />
                                                        <label className="label-floating">Mazili</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input disabled
                                                               type="text"
                                                            // data-mask="+998(99) 999-99-99"
                                                               className="form-control form-control-outline telefon"
                                                               placeholder="Placeholder"
                                                        />
                                                        <label className="label-floating">Telefon</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input disabled
                                                               type="email"
                                                               className="form-control form-control-outline email"
                                                               placeholder="Placeholder"
                                                               required
                                                        />
                                                        <label className="label-floating">E-pochta</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input disabled
                                                               type="email"
                                                               className="form-control form-control-outline exat"
                                                               placeholder="Placeholder"
                                                        />
                                                        <label className="label-floating">E-xat</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary form-control form-control-outline">
                                                            Qo'shish
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                {/* <table className="table table-bordered mt-3 table-striped table-hover Tab" >
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-left">
                                            <th style={{ width: "5%" }}>№</th>
                                            <th style={{ width: "90%" }}>Tashkilot nomi</th>
                                            <th style={{ width: "90%" }}>Manzil</th>
                                            <th style={{ width: "90%" }}>Telefon</th>
                                            <th style={{ width: "90%" }}>E-mail</th>
                                            <th style={{ width: "90%" }}>Exat</th>
                                            <th style={{ width: "5%" }}>Harakatlar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.length > 0 && data?.map((dat, index) => (
                                            <tr key={index} style={{ fontSize: "14px", textAlign: "left" }}>
                                                <td className="text-center">{dat?.id}</td>
                                                <td >{dat?.orgName}</td>
                                                <td>{dat?.address}</td>
                                                <td>{dat?.mobileNumber}</td>
                                                <td>{dat?.orgEmail}</td>
                                                <td>{dat?.orgExat}</td>
                                                <td className="text-center">
                                                    <span className="d-flex">
                                                        <a href="#1" className="infoBtn bg-dark cursor-pointer" onClick={() => setUpdateModal({ open: true, obj: dat })} data-popup="tooltip" title="O'zgartirish"><i className="icon-pencil5" ></i> </a>
                                                        <a href="#1" className="infoBtn bg-dark cursor-pointer" onClick={() => setDeleteModal({ open: true, obj: dat })} data-popup="tooltip" title="O'chirish"><i className="icon-trash"></i> </a>
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table> */}

                                {/* delete */}
                                {deleteModal.open && (
                                    <div className="adminWindow">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header bg-primary text-white">
                                                    <h6 className="modal-title">O'chirish oynasi</h6>
                                                    <button type="button" className="close close2"
                                                            onClick={(() => setDeleteModal({open: false, obj: {}}))}>×
                                                    </button>
                                                </div>
                                                <div className="modal-body text-center">
                                                    <h3 style={{textTransform: "upperCase", fontWeight: "bold"}}
                                                        className="text-danger">Ogoh bo'ling!</h3>
                                                    <h5>Ushbu ma'lumotni o'chirmoqchimisiz?</h5>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-primary"
                                                            onClick={() => Uchirish(deleteModal.obj)}>O'chirish
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {/* update */}
                                {updateModal.open && (
                                    <div className="adminWindow">
                                        <div>
                                            <div className="modal-dialog modal-lg ">
                                                <div className="modal-content">
                                                    <div className="modal-header bg-primary text-white">
                                                        <h3 className="modal-title">Yangilash</h3>
                                                        <button type="button" className="close closeYopish"
                                                                onClick={() => setUpdateModal({
                                                                    open: false,
                                                                    obj: {}
                                                                })}>&times;</button>
                                                    </div>

                                                    <div className="modal-body">
                                                        <form className="">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="form-group form-group-floating row">
                                                                        <div className="col-lg-12">
                                                                            <div className="position-relative">
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control form-control-outline tashkilotNomiUzgartirish"
                                                                                    placeholder="Placeholder"
                                                                                    defaultValue={updateModal.obj?.orgName}
                                                                                />
                                                                                <label className="label-floating">Tashkilot
                                                                                    nomi</label>
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
                                                                                    className="form-control form-control-outline manzilUzgartirish"
                                                                                    placeholder="Placeholder"
                                                                                    defaultValue={updateModal.obj?.address}
                                                                                />
                                                                                <label
                                                                                    className="label-floating">Mazili</label>
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
                                                                                    // data-mask="+998(99) 999-99-99"
                                                                                    className="form-control form-control-outline telefonUzgartirish"
                                                                                    placeholder="Placeholder"
                                                                                    maxLength="9"
                                                                                    defaultValue={updateModal.obj?.mobileNumber}
                                                                                />
                                                                                <label
                                                                                    className="label-floating">Telefon</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="form-group form-group-floating row">
                                                                        <div className="col-lg-12">
                                                                            <div className="position-relative">
                                                                                <input
                                                                                    type="email"
                                                                                    className="form-control form-control-outline emailUzgartirish"
                                                                                    placeholder="Placeholder"
                                                                                    defaultValue={updateModal.obj?.orgEmail}
                                                                                />
                                                                                <label
                                                                                    className="label-floating">E-pochta</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="form-group form-group-floating row">
                                                                        <div className="col-lg-12">
                                                                            <div className="position-relative">
                                                                                <input
                                                                                    type="email"
                                                                                    className="form-control form-control-outline exatUzgartirish"
                                                                                    placeholder="Placeholder"
                                                                                    defaultValue={updateModal.obj?.orgExat}
                                                                                />
                                                                                <label
                                                                                    className="label-floating">E-xat</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <div
                                                                        className="form-group form-group-floating row mb-0">
                                                                        <div className="col-lg-12">
                                                                            <div className="position-relative">
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn btn-primary form-control form-control-outline"
                                                                                    onClick={() => Uzgartirish(updateModal.obj)}
                                                                                >
                                                                                    Qo'shish
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {
                                yunalishQidirishHajmi?.length===0 ? (
                                    <div className="card-body">
                                    <div id="accordion-default">
                                        {/* yunalishlar */}
                                        {yunalishlar.map((dat, index1) => (
                                            <div className="d-flex align-items-center" style={{position: "relative"}}>
                                                <div key={index1} className="card cardAccordion mb-0 mt-2 w-100 ml-4">
                                                    <div className="card-header orgname" style={{height: "40px"}}
                                                         onClick={() => getTashkilot(dat.id)}>
                                                        <h6 className="card-title d-flex justify-content-between align-items-center">
                                                            <a className="text-body NavLink "
                                                               style={{color: "#0056B8 !important"}}
                                                               href={`#1`}>{dat?.name}</a>
                                                        </h6>
                                                    </div>

                                                    <div className="openTash" style={{display: "none"}}>
                                                        {tashkilotlar?.map((tash, index) => (
                                                            <div key={index}>
                                                                {tash?.orgType?.name === dat?.name && (
                                                                    <div key={index} className="">
                                                                        <div className="card-body pb-1 pt-2">
                                                                            <div className="card mb-1">
                                                                                <div
                                                                                    className="card-header d-flex align-items-center"
                                                                                    style={{height: "40px"}}>
                                                                                    {/*{tashkilotIds.includes(tash.id) ? (*/}
                                                                                    {/*    <input*/}
                                                                                    {/*        type="checkbox"*/}
                                                                                    {/*        onClick={(e) => checkedInput(e, tash)}*/}
                                                                                    {/*        style={{*/}
                                                                                    {/*            // position: "absolute",*/}
                                                                                    {/*            // top: "8px",*/}
                                                                                    {/*            // left: "10px",*/}
                                                                                    {/*            padding: "10px",*/}
                                                                                    {/*            width: "20px",*/}
                                                                                    {/*            height: "20px"*/}
                                                                                    {/*        }}*/}
                                                                                    {/*        className="checkBoxCardInline"*/}
                                                                                    {/*        defaultChecked={tashkilotIds.indexOf(tash.id)>-1? true : false}*/}
                                                                                    {/*    />*/}
                                                                                    {/*) : (*/}
                                                                                    {/*    <input*/}
                                                                                    {/*        type="checkbox"*/}
                                                                                    {/*        style={{*/}
                                                                                    {/*            // position: "absolute",*/}
                                                                                    {/*            // top: "8px",*/}
                                                                                    {/*            // left: "10px",*/}
                                                                                    {/*            padding: "10px",*/}
                                                                                    {/*            width: "20px",*/}
                                                                                    {/*            height: "20px"*/}
                                                                                    {/*        }}*/}
                                                                                    {/*        className="checkBoxCardInline"*/}
                                                                                    {/*        onClick={(e) => checkedInput(e, tash)}*/}
                                                                                    {/*    />*/}
                                                                                    {/*)}*/}
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
                                                                                                <div className="card-body">
                                                                                                    <table
                                                                                                        className="table datatable-row-full  mt-3 table-bordered table-striped table-hover Tab"
                                                                                                        id="myTable">
                                                                                                        <thead>
                                                                                                        <tr className="bg-dark text-white NavLink text-center">
                                                                                                            <th style={{width: "3%"}}>№</th>
                                                                                                            <th style={{width: "15%"}}>logo</th>
                                                                                                            <th style={{width: "20%"}}>Tuman
                                                                                                                (shahar)
                                                                                                            </th>
                                                                                                            <th style={{width: "25%"}}>Qisqacha
                                                                                                                Nomi
                                                                                                            </th>
                                                                                                            <th style={{width: "25%"}}>Rahbari</th>
                                                                                                            {/*<td style={{ width: "8%" }}>Harakatlar</td>*/}
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
                                                                                                                        alt=""/>
                                                                                                                </td>
                                                                                                                <td>{dat?.orgDistrict}</td>
                                                                                                                <td>{dat?.orgName}</td>
                                                                                                                <td>{dat?.leaderName}</td>
                                                                                                                {/*<td className="">*/}
                                                                                                                {/*    <div className="icon d-flex justify-content-center align-items-center">*/}
                                                                                                                {/*        {tashkilotIds.includes(tash.id) ? (*/}
                                                                                                                {/*            <input*/}
                                                                                                                {/*                type="checkbox"*/}
                                                                                                                {/*                onClick={(e) => checkedInput(e, tash)}*/}
                                                                                                                {/*                style={{*/}
                                                                                                                {/*                    // position: "absolute",*/}
                                                                                                                {/*                    // top: "8px",*/}
                                                                                                                {/*                    // left: "10px",*/}
                                                                                                                {/*                    padding: "10px",*/}
                                                                                                                {/*                    width: "20px",*/}
                                                                                                                {/*                    height: "20px"*/}
                                                                                                                {/*                }}*/}
                                                                                                                {/*                className="checkBoxCardInline"*/}
                                                                                                                {/*                defaultChecked={tashkilotIds.indexOf(tash.id)>-1? true : false}*/}
                                                                                                                {/*            />*/}
                                                                                                                {/*        ) : (*/}
                                                                                                                {/*            <input*/}
                                                                                                                {/*                type="checkbox"*/}
                                                                                                                {/*                style={{*/}
                                                                                                                {/*                    // position: "absolute",*/}
                                                                                                                {/*                    // top: "8px",*/}
                                                                                                                {/*                    // left: "10px",*/}
                                                                                                                {/*                    padding: "10px",*/}
                                                                                                                {/*                    width: "20px",*/}
                                                                                                                {/*                    height: "20px"*/}
                                                                                                                {/*                }}*/}
                                                                                                                {/*                className="checkBoxCardInline"*/}
                                                                                                                {/*                onClick={(e) => checkedInput(e, tash)}*/}
                                                                                                                {/*            />*/}
                                                                                                                {/*        )}*/}
                                                                                                                {/*    </div>*/}
                                                                                                                {/*</td>*/}
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
                                                                                                            <th style={{width: "3%"}}>№</th>
                                                                                                            <th style={{width: "15%"}}>logo</th>
                                                                                                            <th style={{width: "20%"}}>Tuman
                                                                                                                (shahar)
                                                                                                            </th>
                                                                                                            <th style={{width: "25%"}}>Qisqacha
                                                                                                                Nomi
                                                                                                            </th>
                                                                                                            <th style={{width: "25%"}}>Rahbari</th>
                                                                                                            {/*<td style={{ width: "8%" }}>Harakatlar</td>*/}
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
                                                                                                                        alt=""/>
                                                                                                                </td>
                                                                                                                <td>{dat?.orgDistrict}</td>
                                                                                                                <td>{dat?.orgName}</td>
                                                                                                                <td>{dat?.leaderName}</td>
                                                                                                                {/*<td className="">*/}
                                                                                                                {/*    <div className="icon d-flex justify-content-center align-items-center">*/}
                                                                                                                {/*        {tashkilotIds.includes(dat.id) ? (*/}
                                                                                                                {/*            <input*/}
                                                                                                                {/*                type="checkbox"*/}
                                                                                                                {/*                onClick={(e) => checkedInput(e, dat)}*/}
                                                                                                                {/*                style={{*/}
                                                                                                                {/*                    // position: "absolute",*/}
                                                                                                                {/*                    // top: "8px",*/}
                                                                                                                {/*                    // left: "10px",*/}
                                                                                                                {/*                    padding: "10px",*/}
                                                                                                                {/*                    width: "20px",*/}
                                                                                                                {/*                    height: "20px"*/}
                                                                                                                {/*                }}*/}
                                                                                                                {/*                className="checkBoxCardInline"*/}
                                                                                                                {/*                defaultChecked={tashkilotIds.indexOf(dat.id)>-1? true : false}*/}
                                                                                                                {/*            />*/}
                                                                                                                {/*        ) : (*/}
                                                                                                                {/*            <input*/}
                                                                                                                {/*                type="checkbox"*/}
                                                                                                                {/*                style={{*/}
                                                                                                                {/*                    // position: "absolute",*/}
                                                                                                                {/*                    // top: "8px",*/}
                                                                                                                {/*                    // left: "10px",*/}
                                                                                                                {/*                    padding: "10px",*/}
                                                                                                                {/*                    width: "20px",*/}
                                                                                                                {/*                    height: "20px"*/}
                                                                                                                {/*                }}*/}
                                                                                                                {/*                className="checkBoxCardInline"*/}
                                                                                                                {/*                onClick={(e) => checkedInput(e, dat)}*/}
                                                                                                                {/*            />*/}
                                                                                                                {/*        )}*/}
                                                                                                                {/*    </div>*/}
                                                                                                                {/*</td>*/}
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
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                ) : (
                                   <div>

                                       <table
                                           className="table datatable-row-full  mt-3 table-bordered table-striped table-hover Tab"
                                           id="myTable">
                                           <thead>
                                           <tr className="bg-dark text-white NavLink text-center">
                                               <th style={{width: "3%"}}>№</th>
                                               <th style={{width: "15%"}}>logo</th>
                                               <th style={{width: "20%"}}>Tuman
                                                   (shahar)
                                               </th>
                                               <th style={{width: "25%"}}>Tashkilot
                                                   Nomi
                                               </th>
                                               <th style={{width: "25%"}}>Rahbari</th>
                                               {/*<td style={{ width: "8%" }}>Harakatlar</td>*/}
                                           </tr>
                                           </thead>
                                           <tbody
                                               id="viloyat">
                                           { yunalishQidirishHajmi?.content.map((dat, index) => (
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
                                                           alt=""/>
                                                   </td>
                                                   <td>{dat?.orgDistrict}</td>
                                                   <td>{dat?.orgName}</td>
                                                   <td>{dat?.leaderName}</td>
                                                   {/*<td className="">*/}
                                                   {/*    <div className="icon d-flex justify-content-center align-items-center">*/}
                                                   {/*        {tashkilotIds.includes(tash.id) ? (*/}
                                                   {/*            <input*/}
                                                   {/*                type="checkbox"*/}
                                                   {/*                onClick={(e) => checkedInput(e, tash)}*/}
                                                   {/*                style={{*/}
                                                   {/*                    // position: "absolute",*/}
                                                   {/*                    // top: "8px",*/}
                                                   {/*                    // left: "10px",*/}
                                                   {/*                    padding: "10px",*/}
                                                   {/*                    width: "20px",*/}
                                                   {/*                    height: "20px"*/}
                                                   {/*                }}*/}
                                                   {/*                className="checkBoxCardInline"*/}
                                                   {/*                defaultChecked={tashkilotIds.indexOf(tash.id)>-1? true : false}*/}
                                                   {/*            />*/}
                                                   {/*        ) : (*/}
                                                   {/*            <input*/}
                                                   {/*                type="checkbox"*/}
                                                   {/*                style={{*/}
                                                   {/*                    // position: "absolute",*/}
                                                   {/*                    // top: "8px",*/}
                                                   {/*                    // left: "10px",*/}
                                                   {/*                    padding: "10px",*/}
                                                   {/*                    width: "20px",*/}
                                                   {/*                    height: "20px"*/}
                                                   {/*                }}*/}
                                                   {/*                className="checkBoxCardInline"*/}
                                                   {/*                onClick={(e) => checkedInput(e, tash)}*/}
                                                   {/*            />*/}
                                                   {/*        )}*/}
                                                   {/*    </div>*/}
                                                   {/*</td>*/}
                                               </tr>
                                           ))}
                                           </tbody>
                                       </table>
                                       {yunalishQidirishHajmi?.content?.length > 0 && (
                                           <ReactPaginate
                                               breakLabel="..."
                                               nextLabel=">>"
                                               onPageChange={handlePageClick}
                                               pageRangeDisplayed={3}
                                               pageCount={yunalishQidirishHajmi?.totalElements/10}
                                               previousLabel="<<"
                                               renderOnZeroPageCount={null}
                                               className="paginationUL"
                                               activeClassName="active"
                                               forcePage={selected}
                                           />
                                       )}
                                   </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* alert */}
            {alert.open && (
                <div className={`alert alert-${alert.color} alert-styled-left alert-dismissible`}>
                    {/* <button type="button" className="close" data-dismiss="alert"><span>×</span></button> */}
                    <span className="font-weight-semibold">{alert.text}</span>
                </div>
            )}
        </div>
    )
}