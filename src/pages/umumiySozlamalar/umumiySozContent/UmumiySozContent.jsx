import React from "react";
import { Link } from "react-router-dom";

export default function UmumiySozContent() {
    return (
        <div className="content">

            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <div className="card-body">
                <div className="tab-content">
                    {/* <!-- collapse  --> */}
                    <div id="accordion-styled">
                        <div className="card">
                            <div className="card-header  bg-primary">
                                <h1 className="card-title text-light ">
                                    Umumiy Sozlamalar
                                </h1>
                            </div>
                            <div className="card-body">
                                {/* <!-- card body --> */}
                                <div id="accordion-default">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">
                                                <a className="collapsed text-body" data-toggle="collapse"
                                                    href="#accordion-item-default2">Umumiy Sozlamalar</a>
                                            </h4>
                                        </div>

                                        <div id="accordion-item-default2" className="collapse"
                                            data-parent="#accordion-default">
                                            <div className="card-body">
                                                {/* <!-- card conetnt --> */}
                                                <br />
                                                <div className="col-lg-12">
                                                    <div className="row">
                                                        <div className="col-lg-3">
                                                            <div className="card card-body justify-content-end text-center"
                                                                style={{ minHeight: "100px" }}>
                                                                <div className="d-flex align-items-center justify-content-center">
                                                                    <i className="icon-qrcode icon-2x text-primary border-primary border-3 rounded-pill p-3 mr-2"></i>
                                                                    {/* <h5 className="card-title"></h5> */}
                                                                    <Link to="/umumiySozlamalar_tashkiliy-tuzilma" className="btn btn-primary">
                                                                        Tashkiliy Tuzilma
                                                                    </Link>
                                                                    {/* <a href="./tashkiliytuzilma.html"
                                                                        className="btn btn-primary">Tashkiliy Tuzilma
                                                                    </a> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="card card-body justify-content-end text-center"
                                                                style={{ minHeight: "100px" }}>
                                                                <div className="d-flex align-items-center justify-content-center">
                                                                    <i className="icon-stack2 icon-2x text-primary border-primary border-3 rounded-pill p-3 mr-2"></i>
                                                                    {/* <h5 className="card-title"></h5> */}
                                                                    <button className="btn btn-primary">AdminSozlamalar</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="card card-body justify-content-end text-center"
                                                                style={{ minHeight: "100px" }}>
                                                                <div className="d-flex align-items-center justify-content-center">
                                                                    <i className="icon-stack icon-2x text-primary border-primary border-3 rounded-pill p-3 mr-2"></i>
                                                                    {/* <h5 className="card-title"></h5> */}
                                                                    <Link to="/umumiySozlamalar_modul-sozlamalari" className="btn btn-primary">Modul Sozlamalar</Link>
                                                                    {/* <a href="./modulSozlamalari.html" className="btn btn-primary">Modul Sozlamalar</a> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="card card-body justify-content-end text-center"
                                                                style={{ minHeight: "100px" }}>
                                                                <div className="d-flex align-items-center justify-content-center">
                                                                    <i
                                                                        className="icon-user icon-2x text-primary border-primary border-3 rounded-pill p-3 mr-2"></i>
                                                                    {/* <h5 className="card-title"></h5> */}
                                                                    <Link to="/umumiySozlamalar_foydalanuvchi-sozlamalari" className="btn btn-primary">Foydalauvchi Sozlamalar</Link>
                                                                    {/* <a href="./foydlanuvchiBirktirish.html" className="btn btn-primary">Foydalauvchi Sozlamalar</a> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="row">
                                                        <div className="col-lg-3">
                                                            <div className="card card-body justify-content-end text-center"
                                                                style={{ minHeight: "100px" }}>
                                                                <div className="d-flex align-items-center justify-content-center">
                                                                    <i className="icon-qrcode icon-2x text-primary border-primary border-3 rounded-pill p-3 mr-2"></i>
                                                                    {/* <h5 className="card-title"></h5> */}
                                                                    <button className="btn btn-primary">Tashkiliy Tuzilma</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="card card-body justify-content-end text-center"
                                                                style={{ minHeight: "100px" }}>
                                                                <div className="d-flex align-items-center justify-content-center">
                                                                    <i className="icon-stack2 icon-2x text-primary border-primary border-3 rounded-pill p-3 mr-2"></i>
                                                                    {/* <h5 className="card-title"></h5> */}
                                                                    <button className="btn btn-primary">Admin Sozlamalar</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="card card-body justify-content-end text-center"
                                                                style={{ minHeight: "100px" }}>
                                                                <div className="d-flex align-items-center justify-content-center">
                                                                    <i className="icon-stack icon-2x text-primary border-primary border-3 rounded-pill p-3 mr-2"></i>
                                                                    {/* <h5 className="card-title"></h5> */}
                                                                    <button className="btn btn-primary">Modul Sozlamalar</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="card card-body justify-content-end text-center"
                                                                style={{ minHeight: "100px" }}>
                                                                <div className="d-flex align-items-center justify-content-center">
                                                                    <i className="icon-user icon-2x text-primary border-primary border-3 rounded-pill p-3 mr-2"></i>
                                                                    {/* <h5 className="card-title"></h5> */}
                                                                    <button className="btn btn-primary">Foydalauvchi Sozlamalar</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- end card --> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">
                                                <a className="collapsed text-body" data-toggle="collapse"
                                                    href="#accordion-item-default3">Ma'lumotlar Bazasi Sozlamalar
                                                </a>
                                            </h4>
                                        </div>

                                        <div id="accordion-item-default3" className="collapse"
                                            data-parent="#accordion-default">
                                            <div className="card-body">
                                                <div className="col-lg-12">
                                                    <div className="row">
                                                        <div className="col-lg-3">
                                                            <div className="card card-body justify-content-end text-center"
                                                                style={{ minHeight: "100px" }}>
                                                                <div className="d-flex align-items-center justify-content-center">
                                                                    <i className="icon-qrcode icon-2x text-primary border-primary border-3 rounded-pill p-3 mr-2"></i>
                                                                    {/* <h5 className="card-title"></h5> */}
                                                                    <button className="btn btn-primary">Tashkiliy Tuzilma</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="card card-body justify-content-end text-center"
                                                                style={{ minHeight: "100px" }}>
                                                                <div className="d-flex align-items-center justify-content-center">
                                                                    <i className="icon-stack2 icon-2x text-primary border-primary border-3 rounded-pill p-3 mr-2"></i>
                                                                    {/* <h5 className="card-title"></h5> */}
                                                                    <button className="btn btn-primary">Admin Sozlamalar</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="card card-body justify-content-end text-center"
                                                                style={{ minHeight: "100px" }}>
                                                                <div className="d-flex align-items-center justify-content-center">
                                                                    <i className="icon-stack icon-2x text-primary border-primary border-3 rounded-pill p-3 mr-2"></i>
                                                                    {/* <h5 className="card-title"></h5> */}
                                                                    <button className="btn btn-primary">Modul Sozlamalar</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="card card-body justify-content-end text-center"
                                                                style={{ minHeight: "100px" }}>
                                                                <div className="d-flex align-items-center justify-content-center">
                                                                    <i className="icon-user icon-2x text-primary border-primary border-3 rounded-pill p-3 mr-2"></i>
                                                                    {/* <h5 className="card-title"></h5> */}
                                                                    <button className="btn btn-primary">Foydalauvchi Sozlamalar</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- card body --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- end collapse --> */}
                </div>
            </div>
        </div>
    )
}