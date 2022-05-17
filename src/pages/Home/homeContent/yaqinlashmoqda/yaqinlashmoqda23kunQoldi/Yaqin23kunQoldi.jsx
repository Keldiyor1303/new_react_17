import React from "react";
import Navbar from "../../../../../component/navbar/Navbar";
import Sidebar from "../../../../../component/sidebar/Sidebar";
import Yaqin23kunQoldiContent from "./yaqin23kunQoldiContent/Yaqin23kunQoldiContent";
import AllSidebarData from '../../../../../component/allSidebarData/AllSidebarData';

export default function Yaqin23kunQoldi() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                {/* <Sidebar /> */}
                <AllSidebarData />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <Yaqin23kunQoldiContent itemsPerPage={6} />
                    </div>
                </div>
            </div >
        </div>
    )
}