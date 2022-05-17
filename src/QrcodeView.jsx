import React, { useEffect, useState, useRef } from "react";
import { axiosInstance, url } from "./config";
import Pdf from 'react-to-pdf';
import './qrcodeView.css';
import QRCode from "react-qr-code";
import { status } from './component/status/Status';

export default function QrcodeView() {
    const ref = useRef();
    const [data, setData] = useState({});
    const options = {
        // orientation: 'landscape',
        // unit: 'in',
        format: [290, 400]
    };
    const dateNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const dateMonth = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"];

    // qrcode 
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axiosInstance.get("document/qrcode/" + window.location.pathname.split('/')[window.location.pathname.split('/').length - 1])
                setData(res.data);
            } catch (error) {
                console.log(error.response);
            }
        }
        getData();
    }, []);

    const saveFile = (topdf) => {
        topdf();
    }

    return (
        <>
            <div style={{ height: "100vh" }}>
                <div className="page-content" style={{ height: "100%" }}>
                    <div className="content-wrapper">
                        <div className="content-inner">
                            <div className="content mb-5">
                                <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "uppercase" }}>Ko'rish</h3>
                                <div className="card-body dd">
                                    <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ paddingTop: "2px" }}>
                                        <li className="nav-item NavLinkLi">
                                            <span className="nav-link">
                                                <i className="icon-eye2 mr-1"></i> Topshiriqlar
                                            </span>
                                        </li>
                                    </ul>

                                    <div className="card">
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <div className="card-body cardBodyQrcode">
                                                    <div className="fishkaLeftIJroMain" >
                                                        <div style={{ margin: "auto" }} ref={ref} className="fishkaLeftIJro" >
                                                            <table border="0" className="table1" cellspacing="0" cellpadding="0" width="100%">
                                                                <tr>
                                                                    <img src={'/assets/fishka.jpg'} alt="" className="mainImgFishka" />
                                                                </tr>
                                                            </table>
                                                            <p className="d-flex align-items-center justify-content-between p1">
                                                                <strong className="" style={{ textDecoration: "underline" }}>№ {data?.document?.journalNumber} </strong>
                                                                {data?.document?.registerAt && (
                                                                    <strong><q>{new Date(data?.document?.registerAt).getDate()}</q>&nbsp; {dateMonth[dateNumber.indexOf(new Date(data?.document?.registerAt).getMonth())]}&nbsp; {new Date(data?.document?.registerAt).getFullYear()} yil</strong>
                                                                )}
                                                            </p>
                                                            <p align="left" className="p2">
                                                                <b>
                                                                    <span style={{ color: "#6EADFF" }}>Назоратда: &nbsp;
                                                                        {data?.inExecutorInformationList?.length > 0 && data.inExecutorInformationList?.map((dat, index) => (
                                                                            <>
                                                                                {dat?.executorStatusName === "NAZORAT UCHUN" && (
                                                                                    <span className="text-dark">{(dat?.firstName && dat?.firstName?.length > 1) ? ((((dat.firstName[0].toUpperCase() === "S" || dat.firstName[0].toUpperCase() === "C") && dat.firstName[1].toUpperCase() === "H")) ? dat.firstName.substring(0, 2) + ". " : dat.firstName.substring(0, 1) + ". ") : ""}{dat?.lastName}</span>
                                                                                )}
                                                                            </>
                                                                        ))}
                                                                    </span>
                                                                </b>
                                                            </p>
                                                            <hr />
                                                            <p align="center" className="p3">
                                                                {data?.inExecutorInformationList?.length > 0 && data?.inExecutorInformationList?.map((dat, index) => (
                                                                    <>
                                                                        {dat.executorStatusName === "UMUMLASHTIRUVCHI" && (
                                                                            <>
                                                                                <strong>(</strong><strong><span style={{ color: "#00A036" }}>U</span></strong><strong>)</strong>&nbsp;
                                                                                <strong><u>{(dat?.firstName && dat?.firstName?.length > 1) ? ((((dat.firstName[0].toUpperCase() === "S" || dat.firstName[0].toUpperCase() === "C") && dat.firstName[1].toUpperCase() === "H")) ? dat.firstName.substring(0, 2) + ". " : dat.firstName.substring(0, 1) + ". ") : ""}{dat?.lastName}</u></strong><br />
                                                                            </>
                                                                        )}
                                                                    </>
                                                                ))}
                                                                {data?.inExecutorInformationList?.length > 0 && data?.inExecutorInformationList?.map((dat, index) => (
                                                                    <>
                                                                        {dat?.executorStatusName === "MA'LUMOT UCHUN" && (
                                                                            <>
                                                                                <strong>(</strong><strong><span style={{ color: "#6EADFF" }}>М</span></strong><strong>)</strong>&nbsp;
                                                                                <strong><u>{(dat?.firstName && dat?.firstName?.length > 1) ? ((((dat.firstName[0].toUpperCase() === "S" || dat.firstName[0].toUpperCase() === "C") && dat.firstName[1].toUpperCase() === "H")) ? dat.firstName.substring(0, 2) + ". " : dat.firstName.substring(0, 1) + ". ") : ""}{dat?.lastName}</u></strong><br />
                                                                            </>
                                                                        )}
                                                                    </>
                                                                ))}
                                                                {data?.inExecutorInformationList?.length > 0 && data?.inExecutorInformationList?.map((dat, index) => (
                                                                    <>
                                                                        {dat?.executorStatusName === "BAJARISH UCHUN" && (
                                                                            <>
                                                                                <strong>(</strong><strong><span style={{ color: "#6EADFF" }}>B</span></strong><strong>)</strong>&nbsp;
                                                                                <strong><u>{(dat?.firstName && dat?.firstName?.length > 1) ? ((((dat.firstName[0].toUpperCase() === "S" || dat.firstName[0].toUpperCase() === "C") && dat.firstName[1].toUpperCase() === "H")) ? dat.firstName.substring(0, 2) + ". " : dat.firstName.substring(0, 1) + ". ") : ""}{dat?.lastName}</u></strong><br />
                                                                            </>
                                                                        )}
                                                                    </>
                                                                ))}
                                                                <strong><u>
                                                                    {data?.outExecutorInformationList?.length > 0 && data?.outExecutorInformationList?.map((d, i) => (
                                                                        <span>{d?.organizationName},&nbsp;</span>
                                                                    ))}
                                                                </u></strong><br />
                                                                <span >
                                                                    {data?.document?.resolutionContent}
                                                                </span>
                                                            </p>
                                                            <p align="center"> <strong>Муддат:</strong>
                                                                {data?.document?.deadline && (
                                                                    <strong style={{ textDecoration: "underline" }}><q>{new Date(data?.document?.deadline).getDate()}</q>&nbsp; {dateMonth[dateNumber.indexOf(new Date(data?.document?.deadline).getMonth())]}&nbsp; {new Date(data?.document?.deadline).getFullYear()} yil</strong>
                                                                )}
                                                            </p><br /> <br />
                                                            <hr />
                                                            <table border="0" cellspacing="0" cellpadding="0" className="table2" width="100%" style={{ margin: "10px 0" }}>
                                                                <tr className="w-75 d-flex align-items-center justify-content-between m-auto ">
                                                                    <td className="d-flex justify-content-center">
                                                                        <QRCode value={`http://213.230.125.86:48907/view/scanner/qrcode/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`} size="60" />
                                                                    </td>
                                                                    <td>
                                                                        <p className="text-center"><strong>Б.Зарипов</strong></p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <hr className="mt-0" />
                                                            <p className="p4"><strong>Чиқувчи: № {data?.document?.outNumber}</strong><br />
                                                                {data?.document?.outDate && (
                                                                    <strong><q>{new Date(data?.document?.outDate).getDate()}</q>&nbsp; {dateMonth[dateNumber.indexOf(new Date(data?.document?.outDate).getMonth())]}&nbsp; {new Date(data?.document?.outDate).getFullYear()} yil</strong>
                                                                )}
                                                            </p>
                                                        </div>
                                                        <Pdf targetRef={ref} filename="Post.pdf" options={options}  >
                                                            {({ toPdf }) => <button onClick={() => saveFile(toPdf)} className="btn btn-primary mt-4 d-block m-auto" style={{ marginTop: "20px" }}>Yuklab olish</button>}
                                                        </Pdf>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="col-lg-7">
                                                <div className="card-block mt-3">
                                                    <div className="card-box">
                                                        <div className="col-lg-12">
                                                            <div className="card">
                                                                <div className="card-header bg-primary text-white header-elements-inline">
                                                                    <h6 className="card-title hujjatH3" style={{ fontWeight: "bold", textTransform: "upperCase" }}>Xujjat aylanish yo'li</h6>
                                                                </div>
                                                                <div className="card-body hujjatCardBody">
                                                                    <div className="col-lg-12">
                                                                        <span className="text-color bodySpan" style={{ fontSize: "18px" }}>{data?.document?.organizationName}</span>
                                                                        <ul style={{ fontSize: "17px", lineHeight: "1.9", paddingLeft: "20px" }}>
                                                                            <li>
                                                                                <span className="color-black mr-1 ">Korrespondent:</span>
                                                                                <span className="korresHujjat">{data?.document?.correspondentName}</span>
                                                                            </li>
                                                                            <li>
                                                                                <span className="color-black mr-1">№:</span><b className="text-color font-size-lg">{data?.document?.journalNumber}</b> <span className="text-primary"><b className="text-dark">(</b>{data?.document?.registerAt}<b className="text-dark">)</b></span>
                                                                            </li>
                                                                            <li>
                                                                                <span className="color-black mr-1">Rezalutsiya:</span>
                                                                                <span className="mr-1">{data?.document?.confirmerName}</span>
                                                                                <span className="badge badge-success mr-1">Imzolangan</span>
                                                                                <span className="text-primary"><b className="text-dark">(</b>{data?.document?.registerAt}<b className="text-dark">)</b></span>
                                                                            </li>
                                                                            <li>
                                                                                <span className="color-black" >Nazoratda: </span>
                                                                                <ul>
                                                                                    {data?.inExecutorInformationList?.length > 0 && data?.inExecutorInformationList?.map((dat, i) => (
                                                                                        <>
                                                                                            {dat?.executorStatusName === "NAZORAT UCHUN" && (
                                                                                                <li>
                                                                                                    <span className="mr-1">{(dat.firstName && dat.firstName.length > 1) ? ((((dat.firstName[0].toUpperCase() === "S" || dat.firstName[0].toUpperCase() === "C") && dat.firstName[1].toUpperCase() === "H")) ? dat.firstName.substring(0, 2) + ". " : dat.firstName.substring(0, 1) + ". ") : ""}{dat?.lastName}</span>
                                                                                                    <span className="badge text-white mr-1" style={{ backgroundColor: status.filter((s, i) => s.englishName === dat?.documentStatus)[0]?.color }}>{status.filter((s, i) => s.englishName === dat?.documentStatus)[0]?.LatinName}</span>
                                                                                                    <span className="text-primary">
                                                                                                        <b className="text-dark">(</b>{dat?.documentStatusAtTheMoment}<b className="text-dark">)</b>
                                                                                                    </span>
                                                                                                </li>
                                                                                            )}
                                                                                        </>
                                                                                    ))}
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                <span className="color-black">Umumlashtiruvchi: </span>
                                                                                <ul>
                                                                                    {data?.inExecutorInformationList?.length > 0 && data?.inExecutorInformationList?.map((dat, i) => (
                                                                                        <>
                                                                                            {dat?.executorStatusName === "UMUMLASHTIRUVCHI" && (
                                                                                                <li>
                                                                                                    <span className="mr-1">{(dat.firstName && dat.firstName.length > 1) ? ((((dat.firstName[0].toUpperCase() === "S" || dat.firstName[0].toUpperCase() === "C") && dat.firstName[1].toUpperCase() === "H")) ? dat.firstName.substring(0, 2) + ". " : dat.firstName.substring(0, 1) + ". ") : ""}{dat?.lastName}</span>
                                                                                                    <span className="badge text-white mr-1" style={{ backgroundColor: status.filter((s, i) => s.englishName === dat?.documentStatus)[0]?.color }}>{status.filter((s, i) => s.englishName === dat?.documentStatus)[0]?.LatinName}</span>
                                                                                                    <span className="text-primary">
                                                                                                        <b className="text-dark">(</b>{dat?.documentStatusAtTheMoment}<b className="text-dark">)</b>
                                                                                                    </span>
                                                                                                </li>
                                                                                            )}
                                                                                        </>
                                                                                    ))}
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                <span className="color-black">Ma'lumot uchun: </span>
                                                                                <ul>
                                                                                    {data?.inExecutorInformationList?.length > 0 && data?.inExecutorInformationList?.map((dat, i) => (
                                                                                        <>
                                                                                            {dat?.executorStatusName === "MA'LUMOT UCHUN" && (
                                                                                                <li>
                                                                                                    <span className="mr-1">{(dat.firstName && dat.firstName.length > 1) ? ((((dat.firstName[0].toUpperCase() === "S" || dat.firstName[0].toUpperCase() === "C") && dat.firstName[1].toUpperCase() === "H")) ? dat.firstName.substring(0, 2) + ". " : dat.firstName.substring(0, 1) + ". ") : ""}{dat?.lastName}</span>
                                                                                                    <span className="badge text-white mr-1" style={{ backgroundColor: status.filter((s, i) => s.englishName === dat?.documentStatus)[0]?.color }}>{status.filter((s, i) => s.englishName === dat?.documentStatus)[0]?.LatinName}</span>
                                                                                                    <span className="text-primary">
                                                                                                        <b className="text-dark">(</b>{dat?.documentStatusAtTheMoment}<b className="text-dark">)</b>
                                                                                                    </span>
                                                                                                </li>
                                                                                            )}
                                                                                        </>
                                                                                    ))}
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                <span className="color-black">Ijrochilar:</span>
                                                                                <ul>
                                                                                    {data?.inExecutorInformationList?.length > 0 && data?.inExecutorInformationList?.map((dat, i) => (
                                                                                        <>
                                                                                            {dat?.executorStatusName === "BAJARISH UCHUN" && (
                                                                                                <li>
                                                                                                    <span className="mr-1">{(dat.firstName && dat.firstName.length > 1) ? ((((dat.firstName[0].toUpperCase() === "S" || dat.firstName[0].toUpperCase() === "C") && dat.firstName[1].toUpperCase() === "H")) ? dat.firstName.substring(0, 2) + ". " : dat.firstName.substring(0, 1) + ". ") : ""}{dat?.lastName}</span>
                                                                                                    <span className="badge text-white mr-1" style={{ backgroundColor: status.filter((s, i) => s.englishName === dat?.documentStatus)[0]?.color }}>{status.filter((s, i) => s.englishName === dat?.documentStatus)[0]?.LatinName}</span>
                                                                                                    <span className="text-primary">
                                                                                                        <b className="text-dark">(</b>{dat?.documentStatusAtTheMoment}<b className="text-dark">)</b>
                                                                                                    </span>
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
                                                                                            <span className="text-primary"><b className="text-dark">(</b>{d?.documentStatusAtTheMoment}<b className="text-dark">)</b></span>
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
                                                                                        {hujjat?.extention.split('/')[hujjat?.extention.split('/').length - 1] === "pdf" ? (
                                                                                            <tr>
                                                                                                <th className="d-flex align-items-center cursor-pointer">
                                                                                                    <i className="far fa-file-pdf mr-2 fa-2x pdfIcon" style={{ fontSize: "20px" }} />
                                                                                                    <a href={url + "/api/file/view/" + hujjat?.generatedName} target="_blank" rel="noreferrer noopener">PDF FILE</a>
                                                                                                </th>
                                                                                            </tr>
                                                                                        ) : (hujjat?.extention.split('/')[hujjat?.extention.split('/').length - 1] === "doc" || hujjat?.extention.split('/')[hujjat?.extention.split('/').length - 1] === "docx" || hujjat?.extention.split('/')[hujjat?.extention.split('/').length - 1] === "vnd.openxmlformats-officedocument.wordprocessingml.document") ? (
                                                                                            <tr>
                                                                                                <th className="d-flex align-items-center cursor-pointer">
                                                                                                    <i className="far fa-file-word mr-2 fa-2x wordIcon"
                                                                                                        style={{ fontSize: "20px" }} />
                                                                                                    <a href={url + "/api/file/view/" + hujjat?.generatedName} target="_blank" rel="noreferrer noopener">WORD FILE</a>
                                                                                                </th>
                                                                                            </tr>
                                                                                        ) : (hujjat?.extention.split('/')[hujjat?.extention.split('/').length - 1] === "xls" || hujjat?.extention.split('/')[hujjat?.extention.split('/').length - 1] === "xlsx" || hujjat?.extention.split('/')[hujjat?.extention.split('/').length - 1] === "vnd.openxmlformats-officedocument.spreadsheetml.sheet") ? (
                                                                                            <tr>
                                                                                                <th className="d-flex align-items-center cursor-pointer">
                                                                                                    <i className="far fa-file-excel mr-2 fa-2x excelIcon"
                                                                                                        style={{ fontSize: "20px" }} />
                                                                                                    <a href={url + "/api/file/view/" + hujjat?.generatedName}
                                                                                                        target="_blank" rel="noreferrer noopener">EXCEL FILE</a>
                                                                                                </th>
                                                                                            </tr>
                                                                                        ) : (hujjat?.extention.split('/')[hujjat?.extention.split('/').length - 1] === "ppt" || hujjat?.extention.split('/')[hujjat?.extention.split('/').length - 1] === "pptx" || hujjat?.extention.split('/')[hujjat?.extention.split('/').length - 1] === "vnd.openxmlformats-officedocument.presentationml.presentation") ? (
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
                                                                                ))}
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* eimzo malumotlari */}
                                                    <div className="card-box hujjatCardBox1">
                                                        <div className="col-lg-12">
                                                            <div className="card p-2">
                                                                <div className="imzo">
                                                                    <ul>
                                                                        <li><strong>Калит ID: &nbsp;</strong><span>{data?.document?.signedBy?.serialNumber}</span></li>
                                                                        <li><strong>Лавозими ва Ф.И.О:&nbsp;</strong> <span>{data?.document?.signedBy?.lavozim} {data?.document?.signedBy?.fullName}</span></li>
                                                                        <li><strong>Имзоланган сана:&nbsp;</strong> <span>{data?.document?.signedAt}</span></li>
                                                                        <li><strong>Тулик исми шарифи:&nbsp;</strong> <span>{data?.document?.signedBy?.fullName}</span></li>
                                                                        <li><strong>ИНН:&nbsp;</strong> <span>{data?.document?.signedBy?.inn}</span></li>
                                                                        <li><strong>Корхона:&nbsp;</strong> <span>{data?.document?.signedBy?.orgName}</span></li>
                                                                        <li><strong>Олинган Сана:&nbsp;</strong> <span>{data?.document?.signedBy?.validFrom}</span></li>
                                                                        <li><strong>Амал қилиш муддати:&nbsp;</strong> <span>{data?.document?.signedBy?.validTo}</span></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div >
                                        </div >
                                    </div >
                                </div >
                            </div >
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}