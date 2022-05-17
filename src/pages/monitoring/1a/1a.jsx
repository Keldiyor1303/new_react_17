import React from "react";
import Navbar from "../../../component/navbar/Navbar";
import Sidebar from "../../../component/sidebar/Sidebar";
import A1Content from "./1aContent/1aContent";
import AllSidebarData from '../../../component/allSidebarData/AllSidebarData';

export default function A1() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                {/* <Sidebar /> */}
                <AllSidebarData />
                
                <div className="content-wrapper">
                    <div className="content-inner">
                        <A1Content />
                    </div>
                </div>
            </div >
        </div>
    )
}