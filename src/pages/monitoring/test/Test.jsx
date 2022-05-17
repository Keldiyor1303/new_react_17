import React from "react";
import Navbar from "../../../component/navbar/Navbar";
import Sidebar from "../../../component/sidebar/Sidebar";
import TestContent from "./testContent/TestContent";
import AllSidebarData from '../../../component/allSidebarData/AllSidebarData';

export default function Test() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                {/* <Sidebar /> */}
                <AllSidebarData />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <TestContent />
                    </div>
                </div>
            </div >
        </div>
    )
}