import React from "react";
import Navbar from "../../../component/navbar/Navbar";
import Sidebar from "../../../component/sidebar/Sidebar";
import Vm2aContent from "./vm2aContent/Vm2aContent";
import AllSidebarData from '../../../component/allSidebarData/AllSidebarData';

export default function Vm2a() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                {/* <Sidebar /> */}
                <AllSidebarData />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <Vm2aContent />
                    </div>
                </div>
            </div >
        </div>
    )
}