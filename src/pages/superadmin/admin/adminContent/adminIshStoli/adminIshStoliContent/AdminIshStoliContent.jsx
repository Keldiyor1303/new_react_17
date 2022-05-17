import React, { useContext, useEffect, useState } from "react";
import { axiosInstance } from "../../../../../../config";
import { AuthContext } from "../../../../../../context/AuthContext";
import AdminContentNavbar from "../../adminContentNavbar/AdminContentNavbar";
import ReactPaginate from "react-paginate";
import Select from 'react-select';
import './adminIshStoliContent.css';
import { Alert } from '../../../../../../component/alert/Alert';
import NumericInput from 'react-numeric-input';

export default function AdminIshStoliContent() {
    const { user: currentUser } = useContext(AuthContext);
    const [selectBulimlar, setSelectBulimlar] = useState([]);
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [deleteModal, setDeleteModal] = useState({ open: false, obj: {} });
    const [updateModal, setUpdateModal] = useState({ open: false, obj: {} });
    const [data, setData] = useState([]);
    const [ranks, setRanks] = useState([]);
    const [lavozimlar, setLavozimlar] = useState([]);
    const [huquqlar, setHuquqlar] = useState([]);
    // const [ijrochilar, setIjrochilar] = useState([]);
    const [biriktirilganIjrochilar, setBiriktirilganIjrochilar] = useState([]);
    const [alert, setAlert] = useState({ open: false, text: "", color: "" });
    const [ishStoli, setIshStoli] = useState([]);
    const [qushimchaUpdate, setQushimchaUpdate] = useState({});
    const [qushimchaLavozimlar, setQushimchaLavozimlar] = useState([]);
    const [selected, setSelected] = useState(0);
    let sortInput = [];

    // o'chirish
    const Uchirish = (obj) => {
        // console.log(obj);
        axiosInstance.delete("workplace/" + obj.id, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                Alert(setAlert, "success", "Muvaffaqiyatli o'chirildi");
                let arr = data.content.filter((d, i) => {
                    if (d.id !== obj.id) {
                        return d;
                    }
                })
                setData({ ...data, content: arr });
            })
            .catch(err => {
                console.log(err.response);
                Alert(setAlert, "warning", err.response?.data);
            })
        setDeleteModal({ open: false, obj: {} })
    }

    // barcha bo'limlarni o'qib olish
    useEffect(() => {
        const getAllBulim = () => {
            axiosInstance.get('department/all', {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    let arr = [];
                    res.data.forEach((d, i) => {
                        arr.push({ value: d.id, label: d.uzName });
                    })
                    setSelectBulimlar(arr);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        getAllBulim();
    }, []);

    // barcha malumotlarni o'qib olish
    useEffect(() => {
        const getAllData = () => {
            axiosInstance.get("workplace", {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    // console.log(res.data);
                    setData(res.data);
                })
                .catch(err => {
                    console.log(err.response);
                })
        }
        getAllData();
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        let bulim = document.querySelector('.bulim').querySelector('.css-qc6sy-singleValue')?.textContent;
        let ishStoliSoni = document.querySelector('.ishStoliSoni').value;

        // bulimni id sini olish
        let y1 = selectBulimlar.filter((d, i) => {
            if (d.label === bulim) {
                return d;
            }
        })

        if (bulim) {
            if (ishStoliSoni) {
                axiosInstance.post("workplace", {
                    departmentId: y1[0].value,
                    count: ishStoliSoni
                }, {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                    .then(res => {
                        // console.log(res.data);
                        setData({ ...data, content: [...data.content, ...res.data] });
                        Alert(setAlert, "success", "Ma'lumot muvaffaqiyatli qo'shildi");
                    })
                    .catch(err => {
                        console.log(err);
                    })
            } else {
                setAlert({ open: true, color: "warning", text: "Bo'limdahi ish stoli soni kiritilmagan" });
                setTimeout(() => {
                    setAlert({ open: false, color: "", text: "" });
                }, 2000);
            }
        } else {
            setAlert({ open: true, color: "warning", text: "Bo'lim nomi tanlanmagan" });
            setTimeout(() => {
                setAlert({ open: false, color: "", text: "" });
            }, 2000);
        }
    }


    const viewUpdateModal = (dat) => {
        setUpdateModal({ open: true, obj: dat });

        // biriktirilgan ijrochilarni o'qib olish
        axiosInstance.get("user/users", {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                let arr = [];
                res.data.filter((d, i) => {
                    arr.push({ value: d.id, label: `${d.firstName} ${d.lastName}` });
                })
                setBiriktirilganIjrochilar(arr);
            })
            .catch(err => {
                console.log(err.response);
            })

        // bulim ichidan tanlangan bo'lim bo'yicha id sini topish
        let arr = selectBulimlar.filter((d, i) => {
            if (d.label === dat.departmentName) {
                return d;
            }
        })

        // bo'lim id si orqali lavozimlarni o'qib olish
        axiosInstance.get("department/user_position/" + arr[0]?.value, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                let arr1 = [];
                res.data.forEach((d, i) => {
                    arr1.push({ value: d.id, label: d.name });
                })
                setLavozimlar(arr1);
            })
            .catch(err => {
                console.log(err.response);
            })


        // qushimchasi
        axiosInstance.get("workplace/" + dat.nextWorkPlaceId, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data);
                setQushimchaUpdate(res.data);
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    // malumotlarni o'zgartirish
    const yangilash = (dat) => {
        // asosiy uchun
        let rank = document.querySelector('.rank')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let biriktirilganIjrochi = document.querySelector('.biriktirilganIjrochi')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let lavozimi = document.querySelector('.lavozimi')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let huquqlar1 = document.querySelector('.huquqlar')?.querySelectorAll('.css-12jo7m5');
        let qushimchaRanki = document.querySelector('.qushimchaRanki')?.querySelector('.css-qc6sy-singleValue')?.textContent;

        // qushimcha uchun
        let qushimchaBulim1 = document.querySelector('.qushimchaBulim1')?.querySelector('.css-qc6sy-singleValue')?.textContent || null;
        let qushimchaRank1 = document.querySelector('.qushimchaRank1')?.querySelector('.css-qc6sy-singleValue')?.textContent || null;
        let qushimchaIshStoli = document.querySelector('.qushimchaIshStoli')?.querySelector('.css-qc6sy-singleValue')?.textContent || null;
        let qushimchaLavozimi1 = document.querySelector('.qushimchaLavozimi1')?.querySelector('.css-qc6sy-singleValue')?.textContent || null;
        let qushimchaHuquqlar1 = document.querySelector('.qushimchaHuquqlar1')?.querySelectorAll('.css-12jo7m5');
        let qushimchaRank2 = document.querySelector('.qushimchaRank2')?.querySelector('.css-qc6sy-singleValue')?.textContent || null;

        // lavozim tanlangan bo'lsa id sini olish 
        let arr = [];
        if (lavozimi) {
            lavozimlar.forEach((d, i) => {
                if (d.label === lavozimi) {
                    arr.push(d)
                }
            })
        }

        // qushimcha ranks tanlangan bo'lsa id sini olish 
        let arrq = [];
        if (qushimchaRanki) {
            ranks.forEach((d, i) => {
                if (d.label === qushimchaRanki) {
                    arrq.push(d)
                }
            })
        }

        // rank tanlangan bo'lsa id sini olish 
        let arr1 = [];
        if (rank) {
            ranks.forEach((d, i) => {
                if (d.label === rank) {
                    arr1.push(d)
                }
            })
        }

        // huquq tanlangan bo'lsa id sini olish
        let arr2 = [];
        if (huquqlar1) {
            huquqlar1.forEach((h, i) => {
                huquqlar.forEach((d, i) => {
                    if (d.label === h.textContent) {
                        arr2.push(d.value);
                    }
                })
            })
        }

        // huquqni oldingi qiymatini olish
        let arr4 = [];
        dat.user?.permissions.forEach((d, i) => {
            arr4.push(d.id);
        })

        // rankni oldingi qiymatini olish
        let arr5 = [];
        dat.user?.userRoles.forEach((d, i) => {
            arr5.push(d.id);
        })

        // biriktirilgan ijrochini id sini olish
        let arr6 = [];
        biriktirilganIjrochilar.forEach((d, i) => {
            if (d.label === biriktirilganIjrochi) {
                arr6.push(d);
            }
        })

        let bulimlar = [];
        bulimlar = selectBulimlar.filter((d, i) => {
            if (d.label === dat.departmentName) {
                return d;
            }
        })

        // qushimcha uchun
        // bulim ni tanlagan bulsa id sini olish
        let qBulim = selectBulimlar.filter((d, i) => {
            if (d.label === qushimchaBulim1) {
                return d;
            }
        })

        // rank ni tanlagan bulsa id sini olish
        let qRank1 = ranks.filter((d, i) => {
            if (d.label === qushimchaRank1) {
                return d;
            }
        })

        // ish stolini id sini olish tanlangan bulsa
        let qIshStoli = ishStoli.filter((d, i) => {
            if (d.label === qushimchaIshStoli) {
                return d;
            }
        })

        // lavozim tanlangan bulsa id sini olish
        let qLavozim1 = qushimchaLavozimlar.filter((d, i) => {
            if (d.label === qushimchaLavozimi1) {
                return d;
            }
        })

        // huquq tanlangan bo'lsa id sini olish
        let qHuquq1 = [];
        if (qushimchaHuquqlar1) {
            qushimchaHuquqlar1.forEach((h, i) => {
                huquqlar.forEach((d, i) => {
                    if (d.label === h.textContent) {
                        qHuquq1.push(d.value);
                    }
                })
            })
        }

        // qushimcha ranks tanlangan bulsa id sini olish
        let qRanks2 = ranks.filter((d, i) => {
            if (d.label === qushimchaRank2) {
                return d;
            }
        })

        if (rank) {
            if (biriktirilganIjrochi) {
                if (lavozimi) {
                    axiosInstance.patch("workplace", {
                        id: dat.id,
                        userPositionsId: arr?.length > 0 ? [arr[0]?.value] : [dat.userPositions[0]?.id],
                        userId: arr6?.length > 0 ? arr6[0]?.value : dat.user.id,
                        rolesId: (arr1?.length > 0 && arrq?.length > 0) ? [arr1[0]?.value, arrq[0]?.value] : arr1?.length > 0 ? [arr1[0]?.value] : arrq?.length > 0 ? [arrq[0]?.value] : [],
                        permissionsId: arr2?.length > 0 ? arr2 : [],
                        departmentId: bulimlar.length > 0 ? bulimlar[0]?.value : null,

                        workPlaceId2: qIshStoli.length > 0 ? qIshStoli[0]?.value : null,
                        departmentId2: qBulim.length > 0 ? qBulim[0]?.value : null,
                        rolesId2: (qRank1.length > 0 && qRanks2.length > 0) ? [qRank1[0]?.value, qRanks2[0]?.value] : qRank1?.length > 0 ? [qRank1[0]?.value] : qRanks2?.length > 0 ? [qRanks2[0]?.value] : [],
                        userPositionsId2: qLavozim1.length > 0 ? [qLavozim1[0]?.value] : [],
                        permissionsId2: qHuquq1.length > 0 ? qHuquq1 : []
                    }, {
                        headers: {
                            Authorization: "Bearer " + currentUser
                        }
                    })
                        .then(res => {
                            // console.log(res.data);
                            axiosInstance.get("workplace?page=" + selected, {
                                headers: {
                                    Authorization: "Bearer " + currentUser
                                }
                            })
                                .then(res => {
                                    // console.log(res.data);
                                    setData(res.data);
                                })
                                .catch(err => {
                                    console.log(err.response);
                                })

                            setAlert({ open: true, color: "success", text: "Ma'lumot muvaffaqiyatli o'zgartirildi" });
                            setTimeout(() => {
                                setAlert({ open: false, color: "", text: "" });
                            }, 2000);
                            // axiosInstance.get("workplace", {
                            //     headers: {
                            //         Authorization: "Bearer " + currentUser
                            //     }
                            // })
                            //     .then(res1 => {
                            //         setData(res1.data);
                            //     })
                            //     .catch(err => {
                            //         console.log(err.response);
                            //     })
                            // let arr0 = data.content.filter((d, i) => {
                            //     res.data.forEach((c, i) => {
                            //         if (c.id === d.id) {
                            //             d.id = c.id;
                            //             d.departmentName = c.departmentName;
                            //             d.isAttached = c.isAttached;
                            //             d.orderNumber = c.orderNumber;
                            //             d.uniqueCode = c.uniqueCode;
                            //             d.user = c.user;
                            //             d.nextWorkPlaceId = c.nextWorkPlaceId;
                            //             d.nextWorkPlaceId = c.nextWorkPlaceId;
                            //             d.departmentId = c.departmentId;
                            //             d.userPositions = c.userPositions;
                            //             d.userRoles = c.userRoles;
                            //         }
                            //     })
                            //     return d;
                            // })
                            // setData({ ...data, content: arr0 });
                        })
                        .catch(err => {
                            console.log(err.response);
                            setAlert({ open: true, color: "warning", text: err?.response?.data });
                            setTimeout(() => {
                                setAlert({ open: false, color: "", text: "" });
                            }, 2000);
                        })
                    setUpdateModal({ open: false, obj: {} });
                } else {
                    Alert(setAlert, "warning", "Lavozim tanlanmagan");
                    setUpdateModal({ open: false, obj: {} });
                }
            } else {
                Alert(setAlert, "warning", "Ijrochi biriktirilmagan");
                setUpdateModal({ open: false, obj: {} });
            }
        } else {
            Alert(setAlert, "warning", "Rank tanlanmagan");
            setUpdateModal({ open: false, obj: {} });
        }
    }

    // barcha huquqlarni o'qib olish
    useEffect(() => {
        const getAllHuquqlar = () => {
            axiosInstance.get("permission", {
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
                    setHuquqlar(arr);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        getAllHuquqlar();
    }, []);

    // bushatish
    const bushatish = (dat) => {
        axiosInstance.patch("workplace/removeUser", {
            departmentId: dat.departmentId,
            id: dat.id
        }, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                let arr = data.content?.filter((d, i) => {
                    if (d.id === res.data.id) {
                        d.id = res.data.id;
                        d.departmentName = res.data.departmentName;
                        d.departmentId = res.data.departmentId;
                        d.nextWorkPlaceId = res.data.nextWorkPlaceId;
                        d.isAttached = res.data.isAttached;
                        d.orderNumber = res.data.orderNumber;
                        d.uniqueCode = res.data.uniqueCode;
                        d.user = res.data.user;
                        d.userPositions = res.data.userPositions;
                        d.userRoles = res.data.userRoles;
                    }
                    return d;
                })
                setData({ ...data, content: arr });
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    // ranklarni o'qib olish
    useEffect(() => {
        const getAllRank = () => {
            axiosInstance.get("role", {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    // console.log(res.data);
                    let arr = [];
                    res.data.forEach((d, i) => {
                        arr.push({ value: d.id, label: `${d.name}` });
                    })
                    setRanks(arr);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        getAllRank();
    }, []);

    const handlePageClick = (e) => {
        setSelected(e.selected);
        axiosInstance.get("workplace?page=" + e.selected, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                setData(res.data);
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    const logChangeBulim = (e, tag) => {
        axiosInstance.get(`workplace/notAttached/${e.value}/${tag.id}`, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                let arr1 = [];
                res.data.forEach((d, i) => {
                    arr1.push({ value: d.id, label: d.tempName });
                })
                setIshStoli(arr1);
            })
            .catch(err => {
                console.log(err.response);
            });

        // qushimcha bo'lim id si orqali lavozimlarni o'qib olish
        axiosInstance.get("department/user_position/" + e.value, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                let arr1 = [];
                res.data.forEach((d, i) => {
                    arr1.push({ value: d.id, label: d.name });
                })
                setQushimchaLavozimlar(arr1);
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    const changeInputNumber = async (e, id) => {
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
                const res = await axiosInstance.patch(`workplace/orderNumber`, {
                    orderNumberDtos: arr
                }, {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                axiosInstance.get("workplace?page=" + selected, {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                    .then(res => {
                        setData(res.data);
                    })
                    .catch(err => {
                        console.log(err.response);
                    })
            } catch (error) {
                console.log(error.response);
            }
        }
    }

    const inputChangeHandler = (e, id) => {
        sortInput.push({ id: id, orderNumber: e });
    }

    return (
        <div className="content mb-5">
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Sozlamalar</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px" }}>
                    <AdminContentNavbar />
                </ul>

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <form onSubmit={submitHandler}>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={selectBulimlar}
                                                    // onChange={logChange}
                                                    placeholder="Bo'lim"
                                                    className="bulim"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-outline ishStoliSoni"
                                                            placeholder="Placeholder"
                                                        />
                                                        <label className="label-floating">Bo'limdagi ish stoli</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <button type="submit" className="btn btn-primary form-control form-control-outline">
                                                            <i className="fas fa-save" style={{ fontSize: "18px" }}></i> Saqlash
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <table
                                    className="table mt-2 table-bordered table-striped table-hover Tab">
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th style={{ width: "5%" }}>№</th>
                                            <th style={{ width: "25%" }}>Bo'lim</th>
                                            <th style={{ width: "20%" }}>Lavozim</th>
                                            <th style={{ width: "20%" }}>F.I.SH</th>
                                            <th style={{ width: "10%" }}>RANK</th>
                                            <th style={{ width: "10%" }}>Unik-kodi</th>
                                            <th style={{ width: "5%" }}>Biriktirilgan</th>
                                            <td style={{ width: "5%" }}>Harakatlar</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.content?.length > 0 && data?.content?.map((dat, index) => (
                                            <tr key={index} >
                                                <td style={{ textAlign: "center" }}>
                                                    <NumericInput
                                                        value={dat.orderNumber}
                                                        onKeyDown={(e) => changeInputNumber(e, dat.id)}
                                                        onChange={(e) => inputChangeHandler(e, dat.id)}
                                                        className="adminSozlamaInput"
                                                    />
                                                </td>
                                                <td>{dat?.departmentName}</td>
                                                <td>
                                                    {dat?.userPositions?.map((u, i) => (
                                                        <>
                                                            <span>{u?.name},</span>&nbsp;
                                                        </>
                                                    ))}
                                                </td>
                                                <td>{dat?.user?.lastName} {dat?.user?.firstName} {dat?.user?.middleName} </td>
                                                <td style={{ textAlign: "center" }}>
                                                    {dat?.userRoles?.map((r, i) => (
                                                        <>
                                                            <span>{r?.rank},</span>&nbsp;
                                                        </>
                                                    ))}
                                                </td>
                                                <td style={{ textAlign: "center" }}>{dat?.uniqueCode}</td>
                                                <td style={{ textAlign: "center" }}>
                                                    {dat?.isAttached ? (
                                                        <i className="fas fa-check text-success" style={{ fontSize: "22px" }}></i>
                                                    ) : (
                                                        <i className="icon-cross2 text-danger" style={{ fontSize: "22px" }}></i>
                                                    )}
                                                </td>
                                                <td>
                                                    <div className="icon d-flex justify-content-center align-items-center ">
                                                        <a href="#1" data-toggle="modal" data-target="#uangilash" onClick={() => viewUpdateModal(dat)} className="infoBtn bg-dark" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="O'zgartirish"><span><i className="icon-pencil5"></i></span> </a>
                                                        <a href="#1" className="infoBtn bg-dark" data-bs-toggle="tooltip" onClick={() => setDeleteModal({ open: true, obj: dat })} data-popup="tooltip" data-bs-placement="top" title="O'chirish"><span><i className="icon-trash"></i></span> </a>
                                                        <a href="#1" className="infoBtn bg-dark" data-bs-toggle="tooltip" onClick={() => bushatish(dat)} data-popup="tooltip" data-bs-placement="top" title="Xodimni bo'shatish"><span><i className="icon-minus2"></i></span> </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}

                                        {/* update */}
                                        {updateModal.open && (
                                            <div className="adminWindow">
                                                <div className="modal-dialog modal-xl" style={{maxHeight: "650px", overflowY: "scroll"}}>
                                                    <div className="modal-content">
                                                        <div className="modal-header bg-primary text-white">
                                                            <h6 className="modal-title">Ish stoli qo'shish</h6>
                                                            <button type="button" className="close" onClick={() => setUpdateModal({ open: false, obj: {} })} >&times;</button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <form >
                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <div
                                                                            className="form-group form-group-floating row">
                                                                            <div className="col-lg-12">
                                                                                <div className="position-relative">
                                                                                    <input type="text"
                                                                                        className="form-control form-control-outline departmentName"
                                                                                        placeholder="Placeholder"
                                                                                        defaultValue={updateModal.obj?.departmentName}
                                                                                        disabled
                                                                                    />
                                                                                    <label
                                                                                        className="label-floating">Bo'lim nomi</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr style={{ backgroundColor: "lightgray" }} />
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div
                                                                            className="form-group form-group-floating row">
                                                                            <div className="col-lg-12">
                                                                                <div className="position-relative">
                                                                                    <input
                                                                                        type="text"
                                                                                        className="form-control form-control-outline"
                                                                                        placeholder="Placeholder"
                                                                                        data-mask="99999999999999"
                                                                                        defaultValue={updateModal.obj?.uniqueCode}
                                                                                        disabled
                                                                                    />
                                                                                    <label className="label-floating">Unik Kod</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group row">
                                                                            <div className="col-lg-12">
                                                                                {updateModal.obj?.userRoles?.length > 0 ? (
                                                                                    <Select
                                                                                        defaultValue={{ value: updateModal.obj?.userRoles[0]?.name, label: updateModal.obj?.userRoles[0]?.name }}
                                                                                        options={ranks}
                                                                                        // onChange={logChange}
                                                                                        placeholder="Rank"
                                                                                        className="rank"
                                                                                    />
                                                                                ) : (
                                                                                    <Select
                                                                                        options={ranks}
                                                                                        // onChange={logChange}
                                                                                        placeholder="Rank"
                                                                                        className="rank"
                                                                                    />
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group row">
                                                                            <div className="col-lg-12">
                                                                                {updateModal?.obj.user ? (
                                                                                    <Select
                                                                                        defaultValue={{ value: updateModal.obj.user?.id, label: `${updateModal.obj.user?.firstName} ${updateModal.obj.user?.lastName} ${updateModal.obj.user?.middleName}` }}
                                                                                        options={biriktirilganIjrochilar}
                                                                                        // onChange={logChange}
                                                                                        placeholder="Biriktirilgan ijrochi"
                                                                                        className="biriktirilganIjrochi"
                                                                                    />
                                                                                ) : (
                                                                                    <Select
                                                                                        options={biriktirilganIjrochilar}
                                                                                        // onChange={logChange}
                                                                                        placeholder="Biriktirilgan ijrochi"
                                                                                        className="biriktirilganIjrochi"
                                                                                    />
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group row">
                                                                            <div className="col-lg-12">
                                                                                {updateModal?.obj?.userPositions ? (
                                                                                    <Select
                                                                                        defaultValue={{ value: updateModal?.obj?.userPositions[0]?.name, label: updateModal?.obj?.userPositions[0]?.name }}
                                                                                        options={lavozimlar}
                                                                                        // onChange={logChange}
                                                                                        placeholder="Lavozimi"
                                                                                        className="lavozimi"
                                                                                    />
                                                                                ) : (
                                                                                    <Select
                                                                                        options={lavozimlar}
                                                                                        // onChange={logChange}
                                                                                        placeholder="Lavozimi"
                                                                                        className="lavozimi"
                                                                                    />
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 d-flex align-items-center pl-0">
                                                                    <button type="button" className="btn btn-primary" onClick={() => setVisible(!visible)} style={{ padding: "0px 8px", textTransform: "capitalize" }}>
                                                                        {visible ? (
                                                                            <i className="icon-minus2 pt-1 pr-1" style={{ fontSize: "12px" }}></i>
                                                                        ) : (
                                                                            <i className="icon-plus2 pt-1 pr-1" style={{ fontSize: "12px" }}></i>
                                                                        )}
                                                                        Qo'shimcha huquq va rank
                                                                    </button>
                                                                </div>
                                                                {visible && (
                                                                    <div className="row mt-3 visibleDiv1 py-2 bgh"  >
                                                                        <div className="col-md-6">
                                                                            <div className="form-group row mb-0">
                                                                                <div className="col-lg-12">
                                                                                    <Select
                                                                                        // defaultValue={{ value: update.}}
                                                                                        options={huquqlar}
                                                                                        // onChange={logChange}
                                                                                        placeholder="Xodimga beriladigan huquqlar"
                                                                                        className="huquqlar"
                                                                                        isMulti
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 qoshimchaVazifaLavozim" id="qoshimchaVazifa">
                                                                            <div className="form-group row mb-0">
                                                                                <div className="col-lg-12">
                                                                                    {updateModal.obj?.userRoles?.length === 2 ? (
                                                                                        <Select
                                                                                            defaultValue={{ value: updateModal.obj?.userRoles[1]?.name, label: updateModal.obj?.userRoles[1]?.name }}
                                                                                            options={ranks}
                                                                                            // onChange={logChange}
                                                                                            placeholder="Rank"
                                                                                            className="qushimchaRanki"
                                                                                            isClearable={true}
                                                                                        />
                                                                                    ) : (
                                                                                        <Select
                                                                                            options={ranks}
                                                                                            // onChange={logChange}
                                                                                            placeholder="Qo'shimcha rank"
                                                                                            className="qushimchaRanki"
                                                                                            isClearable={true}
                                                                                        />
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                                <hr style={{ marginTop: "10px" }} />
                                                                <div className="col-lg-6 d-flex align-items-center pl-0 mb-3">
                                                                    <button type="button" className="btn btn-primary" onClick={() => setVisible1(!visible1)} style={{ padding: "0px 8px", textTransform: "capitalize" }}>
                                                                        {visible1 ? (
                                                                            <i className="icon-minus2 pt-1 pr-1" style={{ fontSize: "12px" }}></i>
                                                                        ) : (
                                                                            <i className="icon-plus2 pt-1 pr-1" style={{ fontSize: "12px" }}></i>
                                                                        )}
                                                                        Qo'shimcha bo'lim va lavozim
                                                                    </button>
                                                                </div>
                                                                {visible1 && (
                                                                    <>
                                                                        <div className="row mt-3 visibleDiv py-2 bgh">
                                                                            <div className="col-md-6">
                                                                                <div className="form-group row mb-0">
                                                                                    <div className="col-lg-12">
                                                                                        {qushimchaUpdate ? (
                                                                                            <Select
                                                                                                defaultValue={{ value: qushimchaUpdate?.departmentName, label: qushimchaUpdate?.departmentName }}
                                                                                                options={selectBulimlar}
                                                                                                onChange={(e) => logChangeBulim(e, updateModal.obj)}
                                                                                                placeholder="Bo'lim"
                                                                                                className="qushimchaBulim1"
                                                                                            />
                                                                                        ) : (
                                                                                            <Select
                                                                                                options={selectBulimlar}
                                                                                                onChange={(e) => logChangeBulim(e, updateModal.obj)}
                                                                                                placeholder="Bo'lim"
                                                                                                className="qushimchaBulim1"
                                                                                            />
                                                                                        )}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-6 qoshimchaVazifaLavozim" id="qoshimchaVazifa">
                                                                                <div className="form-group row mb-0">
                                                                                    <div className="col-lg-12">
                                                                                        {qushimchaUpdate?.userRoles?.length > 0 ? (
                                                                                            <Select
                                                                                                defaultValue={{ value: qushimchaUpdate?.userRoles[0]?.name, label: qushimchaUpdate?.userRoles[0]?.name }}
                                                                                                options={ranks}
                                                                                                placeholder="Rank"
                                                                                                className="qushimchaRank1"
                                                                                            />
                                                                                        ) : (
                                                                                            <Select
                                                                                                options={ranks}
                                                                                                // onChange={logChange}
                                                                                                placeholder="Qo'shimcha rank"
                                                                                                className="qushimchaRank1"
                                                                                            />
                                                                                        )}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row visibleDiv py-2 bgh">
                                                                            <div className="col-lg-6">
                                                                                <div className="form-group row">
                                                                                    <div className="col-lg-12">
                                                                                        <Select
                                                                                            options={ishStoli}
                                                                                            // onChange={logChange}
                                                                                            placeholder="Ish stoli"
                                                                                            className="qushimchaIshStoli"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                                <div className="form-group row">
                                                                                    <div className="col-lg-12">
                                                                                        {qushimchaUpdate?.userPositions?.length > 0 ? (
                                                                                            <Select
                                                                                                defaultValue={{ value: qushimchaUpdate?.userPositions[0]?.name, label: qushimchaUpdate?.userPositions[0]?.name }}
                                                                                                options={qushimchaLavozimlar}
                                                                                                // onChange={logChange}
                                                                                                placeholder="Lavozimi"
                                                                                                className="qushimchaLavozimi1"
                                                                                            />
                                                                                        ) : (
                                                                                            <Select
                                                                                                options={qushimchaLavozimlar}
                                                                                                // onChange={logChange}
                                                                                                placeholder="Lavozimi"
                                                                                                className="qushimchaLavozimi1"
                                                                                            />
                                                                                        )}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-6 d-flex align-items-center pl-0">
                                                                            <button type="button" className="btn btn-primary" onClick={() => setVisible2(!visible2)} style={{ padding: "0px 8px", textTransform: "capitalize" }}>
                                                                                {visible ? (
                                                                                    <i className="icon-minus2 pt-1 pr-1" style={{ fontSize: "12px" }}></i>
                                                                                ) : (
                                                                                    <i className="icon-plus2 pt-1 pr-1" style={{ fontSize: "12px" }}></i>
                                                                                )}
                                                                                Qo'shimcha huquq va rank
                                                                            </button>
                                                                        </div>
                                                                        {visible2 && (
                                                                            <div className="row mt-3 visibleDiv1 py-2 bgh"  >
                                                                                <div className="col-md-6">
                                                                                    <div className="form-group row mb-0">
                                                                                        <div className="col-lg-12">
                                                                                            <Select
                                                                                                options={huquqlar}
                                                                                                // onChange={logChange}
                                                                                                placeholder="Xodimga beriladigan huquqlar"
                                                                                                className="qushimchaHuquqlar1"
                                                                                                isMulti
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-6 qoshimchaVazifaLavozim" id="qoshimchaVazifa">
                                                                                    <div className="form-group row mb-0">
                                                                                        <div className="col-lg-12">
                                                                                            {qushimchaUpdate?.userRoles?.length === 2 ? (
                                                                                                <Select
                                                                                                    defaultValue={{ value: qushimchaUpdate?.userRoles[1]?.name, label: qushimchaUpdate?.userRoles[1]?.name }}
                                                                                                    options={ranks}
                                                                                                    // onChange={logChange}
                                                                                                    placeholder="Qo'shimcha rank"
                                                                                                    className="qushimchaRank2"
                                                                                                    isClearable={true}
                                                                                                />
                                                                                            ) : (
                                                                                                <Select
                                                                                                    options={ranks}
                                                                                                    // onChange={logChange}
                                                                                                    placeholder="Qo'shimcha rank"
                                                                                                    className="qushimchaRank2"
                                                                                                    isClearable={true}
                                                                                                />
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </>
                                                                )}
                                                                <div className="row mt-3">
                                                                    <div className="col-lg-12">
                                                                        <div className="form-group form-group-floating row">
                                                                            <div className="col-lg-12">
                                                                                <div className="position-relative">
                                                                                    <button type="button" onClick={() => yangilash(updateModal.obj)} className="btn btn-primary form-control form-control-outline">
                                                                                        <i className="fas fa-save" style={{ fontSize: "18px" }}></i> Saqlash
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
                                        )}

                                        {/* o'chirish */}
                                        {deleteModal.open && (
                                            <div className="adminWindow">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header bg-primary text-white">
                                                            <h6 className="modal-title">O'chirish oynasi</h6>
                                                            <button type="button" className="close" onClick={() => setDeleteModal({ open: false, obj: {} })}>×</button>
                                                        </div>
                                                        <div className="modal-body text-center">
                                                            <h3 style={{ textTransform: "upperCase", fontWeight: "bold" }} className="text-danger">Ogoh bo'ling!</h3>
                                                            <h5>Ushbu ma'lumotni o'chirmoqchimisiz?</h5>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-link bekorQilish" onClick={() => setDeleteModal({ open: false, obj: {} })}>Bekor qilish</button>
                                                            <button type="button" className="btn btn-primary" onClick={() => Uchirish(deleteModal.obj)}>O'chirish</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </tbody>
                                </table>
                                <ReactPaginate
                                    previousLabel="<<"
                                    nextLabel=">>"
                                    pageCount={data?.totalElements / 20}
                                    breakLabel="..."
                                    className="paginate"
                                    activeClassName="active"
                                    pageRangeDisplayed={3}
                                    onPageChange={handlePageClick}
                                // forcePage={selected}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* alert */}
            {alert.open && (
                <div className={`alert alert-${alert.color} alertNotice alert-styled-left alert-dismissible`} style={{ zIndex: "999999999 !important" }}>
                    {/* <button type="button" className="close" data-dismiss="alert"><span>×</span></button> */}
                    <span className="font-weight-semibold">{alert.text}</span>
                </div>
            )}
        </div >
    )
}