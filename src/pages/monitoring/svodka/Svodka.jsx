import React from "react";
import Navbar from "../../../component/navbar/Navbar";
import Sidebar from "../../../component/sidebar/Sidebar";
import SvodkaContent from "./svodkaContent/SvodkaContent";
import AllSidebarData from '../../../component/allSidebarData/AllSidebarData';

export default function Svodka() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                {/* <Sidebar /> */}
                <AllSidebarData />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <SvodkaContent />
                    </div>
                </div>
            </div >
        </div>
    )
}