import React from 'react';
import Navbar from "../../../../../component/navbar/Navbar";
import MavjudPaketlarContentOfficeMeneger from "./mavjudPaketlarContent/mavjudPaketlarContent";
import Sidebar from "../../../../../component/allSidebarData/AllSidebarData";

export default function MavjudPaketlarOfficeMeneger() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <Sidebar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <MavjudPaketlarContentOfficeMeneger />
                    </div>
                </div>
            </div >
        </div>
    )
}
