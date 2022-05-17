import React from "react";
import Navbar from "../../../../../component/navbar/Navbar";
// import Sidebar from "../../../../../component/sidebar/Sidebar";
import Yaqin1kunQoldiContent from "./yaqin1kunQoldiContent/Yaqin1kunQoldiContent";
import AllSidebarData from '../../../../../component/allSidebarData/AllSidebarData';

export default function Yaqinlashmoqda1kunQoldi() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <AllSidebarData />

                <div className="content-wrapper">
                    <div className="content-inner">
                        <Yaqin1kunQoldiContent itemsPerPage={6} />
                    </div>
                </div>
            </div >
        </div>
    )
}