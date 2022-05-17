import React from "react";
import Navbar from "../../../../../component/navbar/Navbar";
import Sidebar from "../../../../../component/sidebar/Sidebar";
import Yaqin4kunQoldiContent from "./yaqin4kunQoldiContent/Yaqin4kunQoldiContent";
import AllSidebarData from '../../../../../component/allSidebarData/AllSidebarData';

export default function Yaqin4kunQoldi() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                {/* <Sidebar /> */}
                <AllSidebarData />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <Yaqin4kunQoldiContent itemsPerPage={6} />
                    </div>
                </div>
            </div >
        </div>
    )
}