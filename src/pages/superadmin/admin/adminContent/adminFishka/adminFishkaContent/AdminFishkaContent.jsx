import React, { useContext, useEffect, useState } from "react";
import { axiosInstance } from "../../../../../../config";
import { AuthContext } from "../../../../../../context/AuthContext";
import AdminContentNavbar from "../../adminContentNavbar/AdminContentNavbar";
import { url } from "../../../../../../config";
import './adminFishkaContent.css';

export default function AdminFishkaContent() {
    const { user: currentUser } = useContext(AuthContext);
    const [file, setFile] = useState(null);
    const [file2, setFile2] = useState(null);
    const [file3, setFile3] = useState(null);
    const [file4, setFile4] = useState(null);
    const [blobBoss1, setBlobBoss1] = useState("");
    const [blobBoss2, setBlobBoss2] = useState("");
    const [blobBoss3, setBlobBoss3] = useState("");
    const [blobBoss4, setBlobBoss4] = useState("");
    let fileType = (file?.type === "image/png" || file?.type === "image/jpg" || file?.type === "image/jpeg");
    let fileType1 = (file2?.type === "image/png" || file2?.type === "image/jpg" || file2?.type === "image/jpeg");
    let fileType2 = (file3?.type === "image/png" || file3?.type === "image/jpg" || file3?.type === "image/jpeg");
    let fileType3 = (file4?.type === "image/png" || file4?.type === "image/jpg" || file4?.type === "image/jpeg");
    const [data, setData] = useState([]);
    const [getAllPicture, setGetAllPicture] = useState([]);

    // barcha rollarni o'qib olish
    useEffect(() => {
        const getAllRollar = () => {
            axiosInstance.get("role", {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    console.log(res.data);
                    setData(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        getAllRollar();
    }, [currentUser]);

    // 1-file ni tanlash
    const submitHandlerFile1 = async (dat) => {
        if (fileType) {
            const formData = new FormData();
            formData.append("fishka", file);

            axiosInstance.post("fishka/saveFile", formData, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            }).then(res => {
                if (res.data) {
                    axiosInstance.post("fishka/saveBanner", {
                        fileId: res.data,
                        userRoleId: dat.id
                    }, {
                        headers: {
                            Authorization: "Bearer " + currentUser
                        }
                    })
                        .then(res1 => {
                            axiosInstance.get("fishka/getBannerPicture/" + res.data, {
                                headers: {
                                    Authorization: "Bearer " + currentUser
                                }
                            })
                                .then(res2 => {
                                    setBlobBoss1(res1.data);
                                })
                                .catch(err => {
                                    console.log(err.response);
                                })
                        })
                        .catch(err => {
                            console.log(err.response);
                        })
                } else {
                    console.log("id kelgani yo'q");
                }
            }).catch(err => {
                console.log(err.response);
            })
        }
    }

    const submitHandlerFile2 = (dat) => {
        if (fileType1) {
            const formData = new FormData();
            formData.append("fishka", file2);
            axiosInstance.post("fishka/saveFile", formData, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    if (res.data) {
                        axiosInstance.post("fishka/saveBanner", {
                            fileId: res.data,
                            userRoleId: dat.id
                        }, {
                            headers: {
                                Authorization: "Bearer " + currentUser
                            }
                        })
                            .then(res1 => {
                                axiosInstance.get("fishka/getBannerPicture/" + res.data, {
                                    headers: {
                                        Authorization: "Bearer " + currentUser
                                    }
                                })
                                    .then(res2 => {
                                        setBlobBoss2(res1.data);
                                    })
                                    .catch(err => {
                                        console.log(err.response);
                                    })
                            })
                            .catch(err => {
                                console.log(err);
                            })
                    } else {
                        console.log("id kelgani yo'q");
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    // boss_3
    const submitHandlerFile3 = (dat) => {
        if (fileType2) {
            const formData = new FormData();
            formData.append("fishka", file3);
            axiosInstance.post("fishka/saveFile", formData, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    if (res.data) {
                        axiosInstance.post("fishka/saveBanner", {
                            fileId: res.data,
                            userRoleId: dat.id
                        }, {
                            headers: {
                                Authorization: "Bearer " + currentUser
                            }
                        })
                            .then(res1 => {
                                axiosInstance.get("fishka/getBannerPicture/" + res.data, {
                                    headers: {
                                        Authorization: "Bearer " + currentUser
                                    }
                                })
                                    .then(res2 => {
                                        setBlobBoss3(res1.data);
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    })
                            })
                            .catch(err => {
                                console.log(err.response);
                            })
                    } else {
                        console.log("id kelgani yo'q");
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    // guruh rahbar
    const submitHandlerFile4 = (dat) => {
        if (fileType3) {
            const formData = new FormData();
            formData.append("fishka", file4);
            axiosInstance.post("fishka/saveFile", formData, {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    if (res.data) {
                        axiosInstance.post("fishka/saveBanner", {
                            fileId: res.data,
                            userRoleId: dat.id
                        }, {
                            headers: {
                                Authorization: "Bearer " + currentUser
                            }
                        })
                            .then(res1 => {
                                axiosInstance.get("fishka/getBannerPicture/" + res.data, {
                                    headers: {
                                        Authorization: "Bearer " + currentUser
                                    }
                                })
                                    .then(res2 => {
                                        setBlobBoss4(res1.data);
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    })
                            })
                            .catch(err => {
                                console.log(err.response);
                            })
                    } else {
                        console.log("id kelgani yo'q");
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    // barcha fishkalarni o'qib olish
    useEffect(() => {
        const getAllFishka = () => {
            axiosInstance.get("fishka/getAllBanner", {
                headers: {
                    Authorization: "Bearer " + currentUser
                }
            })
                .then(res => {
                    setGetAllPicture(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        getAllFishka();
    }, [currentUser]);

    // 1-file ni width va height ni aniqlash
    const changeFile1 = (e) => {
        let img = new Image()
        img.src = window.URL.createObjectURL(e.target.files[0])
        img.onload = () => {
            // console.log(img.width + "x" + img.height);
            if (img.width === 1200 && img.height === 400) {
                document.querySelector('.fishka1').textContent = "";
                setFile(e.target.files[0]);
            } else {
                document.querySelector('.fishka1').textContent = "Rasm hajmi 1200x400 bo'lishi kerak";
                setFile(null);
            }
        }
    }

    // 2-file ni width va height ni aniqlash
    const changeFile2 = (e) => {
        let img = new Image()
        img.src = window.URL.createObjectURL(e.target.files[0])
        img.onload = () => {
            // console.log(img.width + "x" + img.height);
            if (img.width === 1200 && img.height === 400) {
                document.querySelector('.fishka2').textContent = "";
                setFile2(e.target.files[0]);
            } else {
                document.querySelector('.fishka2').textContent = "Rasm hajmi 1200x400 bo'lishi kerak";
                setFile2(null);
            }
        }
    }

    // 3-file ni width va height ni aniqlash
    const changeFile3 = (e) => {
        let img = new Image()
        img.src = window.URL.createObjectURL(e.target.files[0])
        img.onload = () => {
            // console.log(img.width + "x" + img.height);
            if (img.width === 1200 && img.height === 400) {
                document.querySelector('.fishka3').textContent = "";
                setFile3(e.target.files[0]);
            } else {
                document.querySelector('.fishka3').textContent = "Rasm hajmi 1200x400 bo'lishi kerak";
                setFile3(null);
            }
        }
    }


    // 3-file ni width va height ni aniqlash
    const changeFile4 = (e) => {
        let img = new Image()
        img.src = window.URL.createObjectURL(e.target.files[0])
        img.onload = () => {
            // console.log(img.width + "x" + img.height);
            if (img.width === 1200 && img.height === 400) {
                document.querySelector('.fishka4').textContent = "";
                setFile4(e.target.files[0]);
            } else {
                document.querySelector('.fishka4').textContent = "Rasm hajmi 1200x400 bo'lishi kerak";
                setFile4(null);
            }
        }
    }

    return (
        <div className="content mb-5">
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Sozlamalar</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px" }}>
                    <AdminContentNavbar />
                </ul>

                <div className="tab-content">
                    <div className="tab-pane fade show active fishkaAdmin" id="colored-tab1">
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>

                                {/* boss_1 */}
                                {data.map((dat, index) => (
                                    <div key={index}>
                                        {dat.systemName === "boss_1" && (
                                            <div className="row d-flex justify-content-center">
                                                <div className="col-lg-8">
                                                    <div className="card">
                                                        <div className="card-header bg-primary text-white header-elements-inline">
                                                            <h6 className="card-title" style={{ fontWeight: "bold", fontSize: "18px" }}>1-pozitsiya</h6>
                                                        </div>
                                                        <div className="w-100">
                                                            <>
                                                                {blobBoss1.id ? (
                                                                    <img src={`${url}/api/file/view/${blobBoss1?.id}`} alt="" />
                                                                ) : (
                                                                    <>
                                                                        {getAllPicture.length > 0 && getAllPicture.map((image, i) => (
                                                                            <div key={i}>
                                                                                {(image?.id && image?.userRoleId === "Rahbar") && (
                                                                                    <img src={`${url}/api/file/view/${image?.generatedName}`} alt="" />
                                                                                )}
                                                                            </div>
                                                                        ))}
                                                                    </>
                                                                )}
                                                            </>
                                                        </div>
                                                        <div className="card-body">
                                                            <form onSubmit={submitHandlerFile1}>
                                                                <div className="row d-flex justify-content-center">
                                                                    <div className="col-lg-8">
                                                                        <div className="form-group form-group-floating  row">
                                                                            <div className="col-lg-10 ">
                                                                                <span style={{ fontSize: "12px" }} className="text-muted fishka1"></span>
                                                                                <label className="custom-file" style={{ height: "54px" }}  >
                                                                                    <input
                                                                                        type="file"
                                                                                        className="custom-file-input w-100"
                                                                                        onClick={(e) => e.target.value = null}
                                                                                        onChange={(e) => changeFile1(e)}
                                                                                        accept=".png, .jpeg, .jpg"
                                                                                    />
                                                                                    <span className="custom-file-label text-muted w-100" >
                                                                                        {fileType ? file.name : "Faylni tanlash"}
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-lg-2">
                                                                                <button type="button" onClick={() => submitHandlerFile1(dat)} style={{ width: "130px" }} className="btn btn-primary">
                                                                                    <i className="fas fa-save mr-1" style={{ fontSize: "16px" }}></i>Saqlash
                                                                                </button>
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
                                    </div>
                                ))}

                                {/* boss_2 */}
                                {data.map((dat, index) => (
                                    <div key={index}>
                                        {dat.systemName === "boss_2" && (
                                            <div className="row d-flex justify-content-center">
                                                <div className="col-lg-8">
                                                    <div className="card">
                                                        <div className="card-header bg-primary text-white header-elements-inline">
                                                            <h6 className="card-title" style={{ fontWeight: "bold", fontSize: "18px" }}>2-pozitsiya</h6>
                                                        </div>
                                                        <div className="d-flex justify-content-center">
                                                            <>
                                                                {blobBoss2.id ? (
                                                                    <img src={`${url}/api/file/download/${blobBoss2?.id}`} alt="" />
                                                                ) : (
                                                                    <>
                                                                        {getAllPicture.length > 0 && getAllPicture.map((image, i) => (
                                                                            <div key={i}>
                                                                                {image.userRoleId === "1 - o'rinbosar" && (
                                                                                    // <img src={'data:image/png;base64,' + image.picture} alt="" style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "bottom" }} />
                                                                                    <img src={`${url}/api/file/view/${image?.generatedName}`} alt="" />
                                                                                )}
                                                                            </div>
                                                                        ))}
                                                                    </>
                                                                )}
                                                            </>
                                                            {/* <img src={'data:image/png;base64,' + blobBoss2} alt="" /> */}
                                                        </div>
                                                        <div className="card-body">
                                                            <form>
                                                                <div className="row d-flex justify-content-center">
                                                                    <div className="col-lg-8">
                                                                        <div className="form-group form-group-floating  row">
                                                                            <div className="col-lg-10">
                                                                                <span style={{ fontSize: "12px" }} className="text-muted fishka2"></span>
                                                                                <label className="custom-file" >
                                                                                    <input
                                                                                        type="file"
                                                                                        className="custom-file-input w-100"
                                                                                        onClick={(e) => e.target.value = null}
                                                                                        onChange={(e) => changeFile2(e)}
                                                                                        accept=".png, .jpeg, .jpg"
                                                                                    />
                                                                                    <span className="custom-file-label text-muted w-100">
                                                                                        {fileType1 ? file2.name : "Faylni tanlash"}
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-lg-2">
                                                                                <button type="button" onClick={() => submitHandlerFile2(dat)} style={{ width: "130px" }} className="btn btn-primary">
                                                                                    <i className="fas fa-save mr-1" style={{ fontSize: "16px" }}></i>Saqlash
                                                                                </button>
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
                                    </div>
                                ))}

                                {/* boss3 */}
                                {data.map((dat, index) => (
                                    <div key={index}>
                                        {dat.systemName === "boss_3" && (
                                            <div className="row d-flex justify-content-center">
                                                <div className="col-lg-8">
                                                    <div className="card">
                                                        <div className="card-header bg-primary text-white header-elements-inline">
                                                            <h6 className="card-title" style={{ fontWeight: "bold", fontSize: "18px" }}>3-pozitsiya</h6>
                                                        </div>
                                                        <div className="d-flex justify-content-center w-100">
                                                            {blobBoss3.id ? (
                                                                <img src={`${url}/api/file/view/${blobBoss3?.id}`} alt="" />
                                                            ) : (
                                                                <>
                                                                    {getAllPicture.length > 0 && getAllPicture.map((image, i) => (
                                                                        <div key={i}>
                                                                            {image.userRoleId === "O'rinbosar" && (
                                                                                <img src={`${url}/api/file/view/${image?.generatedName}`} alt="" />
                                                                            )}
                                                                        </div>
                                                                    ))}
                                                                </>
                                                            )}
                                                        </div>
                                                        <div className="card-body">
                                                            <form >
                                                                <div className="row d-flex justify-content-center">
                                                                    <div className="col-lg-8">
                                                                        <div className="form-group form-group-floating  row">
                                                                            <div className="col-lg-10">
                                                                                <span style={{ fontSize: "12px" }} className="text-muted fishka3"></span>
                                                                                <label className="custom-file" >
                                                                                    <input
                                                                                        type="file"
                                                                                        className="custom-file-input w-100"
                                                                                        onClick={(e) => e.target.value = null}
                                                                                        onChange={(e) => changeFile3(e)}
                                                                                        accept=".png, .jpeg, .jpg"
                                                                                    />
                                                                                    <span className="custom-file-label text-muted w-100">
                                                                                        {fileType2 ? file3.name : "Faylni tanlash"}
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-lg-2">
                                                                                <button type="button" onClick={() => submitHandlerFile3(dat)} style={{ width: "130px" }} className="btn btn-primary">
                                                                                    <i className="fas fa-save mr-1" style={{ fontSize: "16px" }}></i>Saqlash
                                                                                </button>
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
                                    </div>
                                ))}

                                {/* guruh rahbari */}
                                {data.map((dat, index) => (
                                    <div key={index}>
                                        {dat.systemName === "chief_of_group" && (
                                            <div className="row d-flex justify-content-center">
                                                <div className="col-lg-8">
                                                    <div className="card">
                                                        <div className="card-header bg-primary text-white header-elements-inline">
                                                            <h6 className="card-title" style={{ fontWeight: "bold", fontSize: "18px" }}>4-pozitsiya</h6>
                                                        </div>
                                                        <div className="d-flex justify-content-center w-100">
                                                            {blobBoss4.id ? (
                                                                <img src={`${url}/api/file/view/${blobBoss4?.id}`} alt="" />
                                                            ) : (
                                                                <>
                                                                    {getAllPicture.length > 0 && getAllPicture.map((image, i) => (
                                                                        <div key={i}>
                                                                            {image.userRoleId === "Guruh rahbari" && (
                                                                                <img src={`${url}/api/file/view/${image?.generatedName}`} alt="" />
                                                                            )}
                                                                        </div>
                                                                    ))}
                                                                </>
                                                            )}
                                                        </div>
                                                        <div className="card-body">
                                                            <form >
                                                                <div className="row d-flex justify-content-center">
                                                                    <div className="col-lg-8">
                                                                        <div className="form-group form-group-floating  row">
                                                                            <div className="col-lg-10">
                                                                                <span style={{ fontSize: "12px" }} className="text-muted fishka4"></span>
                                                                                <label className="custom-file" >
                                                                                    <input
                                                                                        type="file"
                                                                                        className="custom-file-input w-100"
                                                                                        onClick={(e) => e.target.value = null}
                                                                                        onChange={(e) => changeFile4(e)}
                                                                                        accept=".png, .jpeg, .jpg"
                                                                                    // size={}
                                                                                    />
                                                                                    <span className="custom-file-label text-muted w-100">
                                                                                        {fileType3 ? file4.name : "Faylni tanlash"}
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-lg-2">
                                                                                <button type="button" onClick={() => submitHandlerFile4(dat)} style={{ width: "130px" }} className="btn btn-primary">
                                                                                    <i className="fas fa-save mr-1" style={{ fontSize: "16px" }}></i>Saqlash
                                                                                </button>
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
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}