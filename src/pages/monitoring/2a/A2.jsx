import React from "react";
import Navbar from "../../../component/navbar/Navbar";
import Sidebar from "../../../component/sidebar/Sidebar";
import A2Content from "./a2Content/A2Content";
import AllSidebarData from '../../../component/allSidebarData/AllSidebarData';

export default function A2() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                {/* <Sidebar /> */}
                <AllSidebarData />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <A2Content />
                    </div>
                </div>
            </div >
        </div>
    )
}