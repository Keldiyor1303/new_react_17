import React from "react";
import Navbar from "../../../component/navbar/Navbar";
import Sidebar from "../../../component/sidebar/Sidebar";
import DeteilXodimContent from "./deteilXodimContent/DeteilXodimContent";
import AllSidebarData from '../../../component/allSidebarData/AllSidebarData';

export default function DeteilXodim() {

    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                {/* <Sidebar /> */}
                <AllSidebarData />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <DeteilXodimContent />
                    </div>
                </div>

            </div >
        </div>
    )
}