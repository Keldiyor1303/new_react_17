import React, {useContext, useEffect, useState} from "react";
// import './kartochkaQushishContent.css';
import Select from 'react-select';
import {axiosInstance} from "../../../../../../config";
import {AuthContext} from "../../../../../../context/AuthContext";
import {Alert} from "../../../../../../component/alert/Alert";
import jwtDecode from "jwt-decode";

export default function UmumiyPaketlarContent() {
    const [yunalishQ, setYunalishQ] = useState("");
    const [yunalishlar, setYunalishlar] = useState([]);
    const {user: currentUser} = useContext(AuthContext);
    const [tashkilotlar, setTashkilotlar] = useState([]);
    const [boshTashkilotlar, setBoshTashkilotlar] = useState([]);
    const [alert, setAlert] = useState({open: false, text: "", color: ""});
    const [updateYunalish, setUpdateYunalish] = useState({});
    const [notParentsCard, setNotParentsCard] = useState([]);
    const [cardsName, setCardsName] = useState([]);
    const [cardKurish, setCardKurish] = useState({open: false, obj: {}});
    const [orgName, setOrgName] = useState({});
    const [ids, setIds] = useState([]);
    const [ids1, setIds1] = useState([]);
    const [change, setChange] = useState(false);
    let roleSuperAdmin = "";

    // admin uchun organizatsiyani o'qib olish
    useEffect(() => {
        const token = jwtDecode(currentUser);
        let decode = JSON.parse(token?.supperAdmin);
        roleSuperAdmin = JSON.parse(token?.supperAdmin).userRoles[0]?.systemName;
        if (roleSuperAdmin === "admin") {
            axiosInstance.get("user/myOrg/" + decode.id, {
                headers: {
                    Authorization: 'Bearer ' + currentUser
                }
            })
                .then(res => {
                    console.log(res.data);
                    setOrgName(res.data);
                })
                .catch(err => {
                    console.log(err.response);
                })
        }
    }, [tashkilotlar]);

    // barcha ota onasi yo'q card typelarni ni o'qib olish
    // useEffect(() => {
    //     axiosInstance.get("cardType", {
    //         headers: {
    //             Authorization: "Bearer " + currentUser
    //         }
    //     })
    //         .then(res => {
    //             console.log(res.data);
    //             // setYunalishlar(res.data);
    //         })
    //         .catch(err => {
    //             console.log(err.response);
    //         })
    // }, [change]);

    console.log(orgName);

    // barcha checked bo'lgan cardType larni id sini o'qib olish
    useEffect(() => {
        if (orgName.id) {
            axiosInstance.get("organization/checkedCardTypes/" + orgName.id, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    console.log(res.data);
                    setIds(res.data);
                })
                .catch(err => {
                    console.log(err.response);
                })
        }
    }, [orgName]);

    useEffect(() => {
        axiosInstance.get("organization/visibleCardTypes", {
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
    }, []);

    // barcha cardlar ni o'qib olish
    useEffect(() => {
        axiosInstance.get("cardType", {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                let arr = [];
                res.data.forEach((c, i) => {
                    arr.push({value: c.id, label: c.cardName});
                })
                setNotParentsCard(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, [yunalishlar]);

    // yunalish qushish va hamma yunalishni o'qib olish
    const yunalishQushish = async (e) => {
        e.preventDefault();
        let yunalishNomi = document.querySelector('.yunalishNomi').value;
        const kartochkalar = document.querySelector('.kartochkalar').querySelector('.css-qc6sy-singleValue').textContent;

        // ota onasi yoq card ni tanlasa id sini olish
        let arr = notParentsCard.filter((c, i) => {
            if (c.label === kartochkalar) {
                return c;
            }
        })

        if (yunalishNomi) {
            // yunalish kiritish
            axiosInstance.post("cardType",
                {
                    cardName: yunalishQ,
                    parentCardTypeId: arr[0]?.value || null
                }, {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                .then(res => {
                    console.log(res.data);

                    if (res.data?.parentCardType) {
                        // setAlert({ open: true, color: "warning", text: "Yo'nalish muvaffaqiyatli qo'shildi" });
                        // setTimeout(() => {
                        //     setAlert({ open: false, color: "", text: "" });
                        // }, 1500);
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
                    } else {
                        setAlert({open: true, color: "success", text: "Yo'nalish muvaffaqiyatli qo'shildi"});
                        setTimeout(() => {
                            setAlert({open: false, color: "", text: ""});
                        }, 1500);
                        setYunalishlar(prev => [...prev, res.data]);
                    }
                })
                .catch(err => {
                    console.log(err.response);
                    setAlert({open: true, color: "warning", text: err.response.data});
                    setTimeout(() => {
                        setAlert({open: false, color: "", text: ""});
                    }, 1500);
                })
            setYunalishQ("");
            document.querySelector('.close11').click();
        } else {
            setAlert({open: true, color: "warning", text: "Yunalish kiritilmagan"});
            setTimeout(() => {
                setAlert({open: false, color: "", text: ""});
            }, 1500);
        }
    }

    // id bo'yicha tashkilotlarni o'qib olish
    const getCard = (id) => {
        console.log(id);
        axiosInstance.get("cardType/" + id, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                console.log(res.data);
                setTashkilotlar(res.data);
            })
            .catch(err => {
                console.log(err.response);
            })
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

    const getKartochkalar = (id) => {
        // console.log(id);
        // console.log(roleSuperAdmin);
        if (orgName.orgName) {
            axiosInstance.get(`card/cardType/${id}`, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    console.log(res.data);
                    setBoshTashkilotlar(res.data);
                })
                .catch(err => {
                    console.log(err.response);
                })


            // ichki checkbox larni id larini olish
            axiosInstance.get(`organization/checkedCard/${orgName.id}/${id}`, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    console.log(res.data);
                    setIds1(res.data);
                })
                .catch(err => {
                    console.log(err.response);
                })
        }
    }

    const yunalishUzgartirish = (dat) => {
        console.log(dat);
        let yunalishNomi1 = document.querySelector('.yunalishNomi1').value;
        let kartochkalar1 = document.querySelector('.kartochkalar1').querySelector('.css-qc6sy-singleValue')?.textContent;

        let arr = notParentsCard.filter((c, i) => {
            if (c.label === kartochkalar1) {
                return c;
            }
        })

        if (yunalishNomi1) {
            axiosInstance.patch("cardType", {
                id: dat.id,
                cardName: yunalishNomi1,
                parentCardTypeId: arr[0]?.value || dat?.parentCardType?.id
            }, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    console.log(res.data);
                    let arr = yunalishlar.filter((c, i) => {
                        if (c.id === res.data.id) {
                            c.id = res.data.id;
                            c.cardName = res.data.cardName;
                            c.parentCardType = res.data.parentCardType;
                        }
                        return c;
                    })
                    Alert(setAlert, "success", "Yunalish nomi muvaffaqiyatli o'zgartirildi")
                    setYunalishlar(arr)
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
                    setUpdateYunalish({open: false, obj: {}});
                })
                .catch(err => {
                    console.log(err.response);
                    setUpdateYunalish({open: false, obj: {}});
                    Alert(setAlert, "warning", err.response.data);
                })
        } else {
            setUpdateYunalish({open: false, obj: {}});
            Alert(setAlert, "warning", "Yunalish nomi kiritilishi kerak")
        }
    }


    // kartochka qo'shish
    const kartochkaQushish = () => {
        let cardTypeId = document.querySelector('.cardTypeId')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let card1 = document.querySelector('.card1')?.querySelector('.css-qc6sy-singleValue')?.textContent;
        let cardName = document.querySelector('.cardName').value;
        let expireDate = document.querySelector('.expireDate').value;

        // notParentsCard (select 1)
        let arr = notParentsCard.filter((d, i) => {
            if (d.label === cardTypeId) {
                return d;
            }
        })

        // cardsName (select 2)
        let arr1 = cardsName.filter((d, i) => {
            if (d.label === card1) {
                return d;
            }
        })

        if (cardTypeId) {
            if (card1) {
                if (cardName) {
                    if (expireDate) {
                        if (parseInt(expireDate) > 0) {
                            axiosInstance.post("card", {
                                cardName: cardName,
                                expireDate: expireDate,
                                cardTypeId: arr1[0].value
                            }, {
                                headers: {
                                    Authorization: "Bearer " + currentUser
                                }
                            })
                                .then(res => {
                                    // console.log(res.data);
                                    setBoshTashkilotlar(prev => [...prev, res.data]);
                                    Alert(setAlert, "success", "Kartochka muvaffaqiyatli qo'shildi");
                                    document.querySelector('.tashkilotForm2').reset();
                                    document.querySelector('.closeSave').click();
                                })
                                .catch(err => {
                                    console.log(err.response);
                                    Alert(setAlert, "warning", err.response.data);
                                })
                        } else {
                            Alert(setAlert, "warning", "Bajarilish muddati 0 dan katta bo'lishi kerak");
                        }
                    } else {
                        Alert(setAlert, "warning", "Bajarilish muddati kiritilmagan");
                    }
                } else {
                    Alert(setAlert, "warning", "Karta nomi kiritilmagan");
                }
            } else {
                Alert(setAlert, "warning", "Karta tanlanmagan");
            }
        } else {
            Alert(setAlert, "warning", "Yo'nalish turi tanlanmagan");
        }
    }

    const notParentsCardClick = (e) => {
        // console.log(e);

        axiosInstance.get("cardType/" + e.value, {
            headers: {
                Authorization: "Bearer " + currentUser
            }
        })
            .then(res => {
                // console.log(res.data);
                let arr = [];
                res.data.filter((d, i) => {
                    arr.push({value: d.id, label: d.cardName});
                })
                setCardsName(arr);
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    const kartochkaUzgartirish = (dat) => {
        // console.log(dat);
        let cardTypeId = document.querySelector('.cardTypeIdUzgartirish').querySelector('.css-qc6sy-singleValue').textContent;
        let card1 = document.querySelector('.card1Uzgartirish').querySelector('.css-qc6sy-singleValue').textContent;
        let cardName = document.querySelector('.cardNameUzgartirish').value;
        let expireDate = document.querySelector('.expireDateUzgartirish').value;

        // card1 selecti tanlagan bulsa id sini olish
        let arr = cardsName.filter((c, i) => {
            if (c.label === card1) {
                return c;
            }
        })

        if (cardTypeId) {
            if (card1) {
                if (cardName) {
                    if (expireDate) {
                        axiosInstance.patch("card", {
                            id: dat.id,
                            cardName: cardName,
                            expireDate: expireDate,
                            cardTypeId: arr.length > 0 ? arr[0]?.value : dat.cardType.id
                        }, {
                            headers: {
                                Authorization: "Bearer " + currentUser
                            }
                        })
                            .then(res => {
                                // console.log(res.data);
                                let arr = boshTashkilotlar.filter((d, i) => {
                                    if (d.id === res.data.id) {
                                        d.id = res.data.id;
                                        d.cardName = res.data.cardName;
                                        d.cardType = res.data.cardType;
                                        d.expireDate = res.data.expireDate;
                                    }
                                    return d;
                                })
                                Alert(setAlert, "success", "Muvaffaqiyatli o'zgartirildi");
                                setBoshTashkilotlar(arr);
                                setCardKurish({open: false, obj: {}});
                            })
                            .catch(err => {
                                console.log(err.response);
                                // Alert(setAlert, "warning", "Bajarish muddati kiritilmagan");
                            })
                    } else {
                        Alert(setAlert, "warning", "Bajarish muddati kiritilmagan");
                    }
                } else {
                    Alert(setAlert, "warning", "Card nomi kiritilmagan");
                }
            } else {
                Alert(setAlert, "warning", "Card tanlanishi kerak");
            }
        } else {
            Alert(setAlert, "warning", "Card turi tanlanishi kerak");
        }
    }

    // tashqi input['checkbox] ni bosgan payt
    const checkedInput = (e, dat) => {
        console.log(dat)
        if (e.target.checked) {
            // console.log("true");
            axiosInstance.post("organization/cardType", {
                cardTypeId: dat.id,
                orgId: orgName.id
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
            axiosInstance.post("organization/deleteCardType", {
                cardTypeId: dat.id,
                orgId: orgName.id
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


    // ichki input['checkbox] ni bosgan payt
    const clickInputCheckboxInlineCard = (e, dat) => {
        console.log(e);
        console.log(dat);
        if (e.target.checked) {
            // console.log("true");
            axiosInstance.post("organization/card", {
                cardId: dat.id,
                orgId: orgName.id
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
            // setChange(!change);
        } else {
            // console.log("false");
            axiosInstance.post("organization/delete/card", {
                cardId: dat.id,
                orgId: orgName.id
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
            // setChange(!change);
        }
    }

    // console.log(ids1);

    // console.log(ids);
    // console.log(yunalishlar);

    return (
        <div className="content mb-5 ">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase"}}>Paketlar</h3>
            <div className="card-body" style={{marginTop: "-20px"}}>

                <div className="card-body p-0 mt-3" style={{borderRadius: "0"}}>
                    <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink d-flex align-items-center justify-content-between"
                        style={{borderTopRightRadius: "5px", borderTopLeftRadius: "5px"}}>
                        <li className="nav-item"><h5 style={{
                            margin: "10px 0 0 20px",
                            fontWeight: "bold",
                            textTransform: "upperCase",
                            color: "#fff",
                            padding: "0 5px 5px 0"
                        }}>Kartochkalar boshqaruv paneli</h5></li>
                    </ul>

                    <div className="tab-content">
                        <div id="accordion-styled">
                            <div className="card">
                                <div className="card-body">
                                    <div id="accordion-default">
                                        {/* yunalishlar */}
                                        {yunalishlar.map((dat, index1) => (
                                            <div className="d-flex align-items-center" style={{position: "relative"}}>
                                                 {/*<i className="fas fa-pen cursor-pointer mr-2" style={{ fontSize: "18px", position: "absolute", top: "20px", left: "0" }} onClick={() => setUpdateYunalish({ open: true, obj: dat })}></i>*/}
                                                <div key={index1} className="card cardAccordion mb-0 mt-2 w-100">
                                                    <div className="card-header orgname" style={{height: "40px"}}
                                                         onClick={() => getCard(dat.id)}>
                                                        <h6 className="card-title d-flex justify-content-between align-items-center">
                                                            <a className="text-body NavLink" style={{
                                                                color: "#0056B8 !important",
                                                                paddingLeft: "40px"
                                                            }} href="#1">{dat.cardName}</a>
                                                        </h6>
                                                    </div>

                                                    <div className="openTash">
                                                        {tashkilotlar.length > 0 && tashkilotlar.map((tash, index) => (
                                                            <>
                                                                {tash?.parentCardType?.cardName === dat?.cardName && (
                                                                    <>
                                                                        <div key={index} className="" style={{display: ids.indexOf(dat.id, 0) >= 0 ? "none" : "block"}}>
                                                                            <div className="card-body pb-1 pt-2 ">
                                                                                <div className="card mb-1">
                                                                                    <div
                                                                                        className="card-header d-flex align-items-center"
                                                                                        style={{
                                                                                            height: "40px",
                                                                                            position: "relative"
                                                                                        }}>
                                                                                        {ids.length > 0 ? (
                                                                                            <input
                                                                                                type="checkbox"
                                                                                                onClick={(e) => checkedInput(e, tash)}
                                                                                                style={{
                                                                                                    position: "absolute",
                                                                                                    top: "8px",
                                                                                                    left: "10px",
                                                                                                    padding: "10px",
                                                                                                    width: "20px",
                                                                                                    height: "20px"
                                                                                                }}
                                                                                                className="checkBoxCardInline"
                                                                                                defaultChecked={ids.indexOf(tash.id, 0) >= 0 ? true : false}
                                                                                            />
                                                                                        ) : (
                                                                                            <input
                                                                                                type="checkbox"
                                                                                                style={{
                                                                                                    position: "absolute",
                                                                                                    top: "8px",
                                                                                                    left: "10px",
                                                                                                    padding: "10px",
                                                                                                    width: "20px",
                                                                                                    height: "20px"
                                                                                                }}
                                                                                                className="checkBoxCardInline"
                                                                                                onClick={(e) => checkedInput(e, tash)}
                                                                                            />
                                                                                        )}
                                                                                        <h6 className="card-title"
                                                                                            style={{marginLeft: "20px"}}
                                                                                            onClick={() => getKartochkalar(tash.id)}>
                                                                                            <a className="collapsed text-body NavLink"
                                                                                               style={{paddingLeft: "10px"}}
                                                                                               data-toggle="collapse"
                                                                                               href={`#vHokimlik${index}`}>{tash?.cardName}</a>
                                                                                        </h6>
                                                                                    </div>
                                                                                    {/* {console.log(ids1.indexOf(tash.id, 0) >= 0)} */}
                                                                                    <div
                                                                                        style={{display: ids.indexOf(tash.id, 0) >= 0 ? "none" : "block"}}>
                                                                                        <div id={`vHokimlik${index}`}
                                                                                             className="card-body collapse"
                                                                                             data-parent={`#accordion-default`}>
                                                                                            <div id="accordion-child2">
                                                                                                <div className="card">
                                                                                                    <div
                                                                                                        className="card-header bg-dark">
                                                                                                        <h6 className="card-title">
                                                                                                            <a data-toggle="collapse"
                                                                                                               className="text-white"
                                                                                                               href={`#bTashkilot${index}`}>Kartochkalar</a>
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
                                                                                                                    <th style={{width: "3%"}}>№</th>
                                                                                                                    <th style={{width: "15%"}}>Kartochka
                                                                                                                        nomi
                                                                                                                    </th>
                                                                                                                    <th style={{width: "20%"}}>Bajarilish
                                                                                                                        muddati
                                                                                                                    </th>
                                                                                                                    <td style={{width: "8%"}}>Harakatlar</td>
                                                                                                                </tr>
                                                                                                                </thead>
                                                                                                                <tbody
                                                                                                                    id="viloyat">
                                                                                                                {boshTashkilotlar.length > 0 && boshTashkilotlar?.map((dat, index) => (
                                                                                                                    <tr key={index}
                                                                                                                        className="text-center">
                                                                                                                        <td>{index + 1}</td>
                                                                                                                        <td>{dat?.cardName}</td>
                                                                                                                        <td>{dat?.expireDate}</td>
                                                                                                                        <td className="">
                                                                                                                            {ids1.length > 0 ? (
                                                                                                                                <input
                                                                                                                                    type="checkbox"
                                                                                                                                    style={{
                                                                                                                                        width: "20px",
                                                                                                                                        height: "20px"
                                                                                                                                    }}
                                                                                                                                    onClick={(e) => clickInputCheckboxInlineCard(e, dat)}
                                                                                                                                    defaultChecked={ids1.indexOf(dat.id, 0) >= 0 ? true : false}
                                                                                                                                />
                                                                                                                            ) : (
                                                                                                                                <input
                                                                                                                                    type="checkbox"
                                                                                                                                    style={{
                                                                                                                                        width: "20px",
                                                                                                                                        height: "20px"
                                                                                                                                    }}
                                                                                                                                    onClick={(e) => clickInputCheckboxInlineCard(e, dat)}

                                                                                                                                />
                                                                                                                            )}
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
                                                                        </div>
                                                                    </>
                                                                )}
                                                            </ >
                                                        ))}
                                                    </div>
                                                </div>
                                                {ids.length > 0 ? (
                                                    <input
                                                        type="checkbox"
                                                        style={{
                                                            position: "absolute",
                                                            left: "20px",
                                                            top: "20px",
                                                            padding: "10px",
                                                            width: "20px",
                                                            height: "20px"
                                                        }}
                                                        onClick={(e) => checkedInput(e, dat)}
                                                        className="checkBoxCard"
                                                        defaultChecked={ids.indexOf(dat.id, 0) >= 0 ? true : false}
                                                    />
                                                ) : (
                                                    <input
                                                        type="checkbox"
                                                        style={{
                                                            position: "absolute",
                                                            left: "20px",
                                                            top: "20px",
                                                            padding: "10px",
                                                            width: "20px",
                                                            height: "20px"
                                                        }}
                                                        onClick={(e) => checkedInput(e, dat)}
                                                        className="checkBoxCard"
                                                    />
                                                )}
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
                    <div className="modal-dialog modal-lg ">
                        <div className="modal-content">
                            <div className="modal-header bg-primary text-white">
                                <h5 className="modal-title" style={{textTransform: "capitalize"}}>O'zgartirish
                                    oynasi</h5>
                                <button type="button" className="close"
                                        onClick={() => setUpdateYunalish({open: false, obj: {}})}>&times;</button>
                            </div>

                            <div className="modal-body">
                                <form onSubmit={yunalishQushish} className="yunalishForm">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-outline yunalishNomi1"
                                                            placeholder="Placeholder"
                                                            defaultValue={updateYunalish.obj.cardName}
                                                            autoFocus
                                                            onChange={(e) => setYunalishQ(e.target.value)}

                                                        />
                                                        <label className="label-floating">Yo'nalish</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <Select
                                                        // defaultValue={{ value: "", label: "" }}
                                                        options={notParentsCard}
                                                        // onChange={logChange12}
                                                        placeholder="Kartochkalar"
                                                        className="kartochkalar1"
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <span className="error text-danger d-block"
                                                  style={{textTransform: "capitalize"}}></span>
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={() => yunalishUzgartirish(updateYunalish.obj)}
                                            >
                                                O'zgartirish
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {cardKurish.open && (
                <div className="adminWindow">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header bg-primary text-white">
                                <h5 className="modal-title" style={{textTransform: "capitalize"}}>Kartochkani
                                    o'zgartirish</h5>
                                <button type="button" className="close closeSave"
                                        onClick={() => setCardKurish({open: false, obj: {}})}>&times;</button>
                            </div>

                            <div className="modal-body">
                                <form className="tashkilotForm2Uzgartirish">
                                    <div className="row mt-4">
                                        <div className="col-lg-6">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <Select
                                                            defaultValue={{
                                                                value: cardKurish.obj.cardType?.parentCardType?.id,
                                                                label: cardKurish.obj.cardType?.parentCardType?.cardName
                                                            }}
                                                            options={notParentsCard}
                                                            onChange={notParentsCardClick}
                                                            placeholder="Tuman(Shahar)"
                                                            className="cardTypeIdUzgartirish"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <Select
                                                            defaultValue={{
                                                                value: cardKurish.obj.cardType?.id,
                                                                label: cardKurish.obj.cardType?.cardName
                                                            }}
                                                            options={cardsName}
                                                            // onChange={logChange12}
                                                            placeholder="Card nomi"
                                                            className="card1Uzgartirish"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-outline cardNameUzgartirish"
                                                        placeholder="Placeholder"
                                                        defaultValue={cardKurish.obj.cardName}
                                                    />
                                                    <label className="label-floating">Kartochka nomi</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-outline expireDateUzgartirish"
                                                            placeholder="Placeholder"
                                                            defaultValue={cardKurish.obj.expireDate}
                                                        />
                                                        <label className="label-floating">Bajarilish muddati</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <button
                                                type="button"
                                                onClick={() => kartochkaUzgartirish(cardKurish.obj)}
                                                className="btn btn-primary">
                                                <i className="icon-floppy-disk mr-1"></i>
                                                O'zgartirish
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }

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
    )
}