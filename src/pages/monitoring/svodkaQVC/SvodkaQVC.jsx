import React from "react";

import AllSidebarData from '../../../component/allSidebarData/AllSidebarData';
import SvodkaContentQVC from "./svodkaQVCContent/SvodkaQVCContent";
import Navbar from "../../../component/navbar/Navbar";

export default function SvodkaQVC() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                {/* <Sidebar /> */}
                <AllSidebarData />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <SvodkaContentQVC />
                    </div>
                </div>
            </div >
        </div>
    )
}