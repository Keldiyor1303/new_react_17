import React from 'react';
import TableToExcel from "@linways/table-to-excel";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Link, NavLink } from 'react-router-dom';
// import Select from 'react-select'

export default function KadrlarContent() {

    const exportReportToExcel = () => {
        let table = document.getElementById("myTable");
        TableToExcel.convert(table, {
            name: `file.xlsx`,
            sheet: {
                name: 'Sheet 1'
            }
        });
    }

    const takePdf = () => {
        // const input = document.getElementById('mytable');
        // html2canvas(input)
        //     .then((canvas) => {
        //         const imgData = canvas.toDataURL('image/png');
        //     });
        // html2canvas(input)
        //     .then((canvas) => {
        //         const imgData = canvas.toDataURL('image/png');
        //         const pdf = new jsPDF();
        //         pdf.addImage(imgData, 'PNG', 0, 0);
        //         pdf.save("download.pdf");
        //     });
        // ;

        const pdf = new jsPDF();
        pdf.autoTable({ html: '#myTable' })
        pdf.save('ddoc.pdf');
    }

    return (
        <div className="content">

            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h1 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Kadrlar bo'limi</h1>

            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <li className="nav-item" style={{ marginLeft: "30px" }}>
                        <NavLink to="/kadrlar" className="nav-link" activeClassName='NavLinkLi'>
                            <i className="icon-stack2 mr-1"></i>Xodimlar
                        </NavLink>
                    </li>
                </ul>

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        {/* <!-- Table Componet  --> */}
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <div className="btn-group justify-content-center">
                                    <button className="btn btn-indigo dropdown-toggle" style={{ width: "120px", height: "100%" }} data-toggle="dropdown">Export</button>
                                    <div className="dropdown-menu">
                                        <button className="dropdown-item" onClick={takePdf}>PDF</button>
                                        <button className="dropdown-item" onClick={exportReportToExcel}>Excel</button>
                                    </div>
                                </div>
                                {/* <!-- table --> */}

                                <table className="table mt-3 table-bordered table-striped table-hover Tab" id="myTable">
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th style={{ borderRadius: "10px 0 0 0", width: "5%" }}>№</th>
                                            <th style={{ width: "15%" }}>Rasm</th>
                                            <th style={{ width: "15%" }}>Login</th>
                                            <th style={{ width: "20%" }}>F.I.O</th>
                                            <th style={{ width: "20%" }}>Bo'lim</th>
                                            <th style={{ width: "20%" }}>Lavozimi</th>
                                            <td style={{ width: "5%" }}>Harakatlar</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="text-center">
                                            <td>1</td>
                                            <td>
                                                <img src="/style/images/Zaripov.jpeg" style={{ width: "40%" }} alt="" />
                                            </td>
                                            <td>BV-p8966</td>
                                            <td>Zaripov Botir Komilovich</td>
                                            <td>Viloyat Hokimi</td>
                                            <td>Buxoro</td>
                                            <td>
                                                <Link to="/kadrlar_xodim-kurish">
                                                    <i className="icon-eye btn btn-dark" title="Ko'rish" data-animation="false"></i>
                                                </Link>
                                                {/* <a href="./kard.html" className="btn btn-dark" data-popup="tooltip" title="Ko'rish" data-animation="false"><i className="icon-eye"></i></a> */}
                                            </td>
                                        </tr>
                                        <tr className="text-center">
                                            <td>2</td>
                                            <td>
                                                <img src="/style/images/axmedov.jpeg" style={{ width: "40%" }} alt="" />
                                            </td>
                                            <td>BV-l8562</td>
                                            <td>Axmedov Muhammad Istamovich</td>
                                            <td>Viloyat Hokimi Maslahatchisi</td>
                                            <td>Qishloq xo'jaligi masalalari bo'yicha</td>
                                            <td>
                                                <i className="icon-eye btn btn-dark" title="Ko'rish" data-animation="false"></i>
                                                {/* <a className="btn btn-dark" data-popup="tooltip" title="Ko'rish" data-animation="false"><i className="icon-eye"></i></a> */}
                                            </td>
                                        </tr>
                                        <tr className="text-center">
                                            <td>3</td>
                                            <td>
                                                <img src="/style/images/none.jpg" style={{ width: "40%" }} alt="" />
                                            </td>
                                            <td>BV-74444</td>
                                            <td>Jaborov Nuriddin Muxiddinovich</td>
                                            <td>Viloyat hokimi yordamchisi</td>
                                            <td>Buxoro</td>
                                            <td>
                                                <i className="icon-eye btn btn-dark" title="Ko'rish" data-animation="false"></i>
                                                {/* <a className="btn btn-dark" data-popup="tooltip" title="Ko'rish" data-animation="false"><i className="icon-eye"></i></a> */}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* <!-- end table --> */}
                            </div>
                        </div>
                        {/* <!-- end Table Components --> */}
                    </div>
                </div>

            </div>
        </div >
    )
}