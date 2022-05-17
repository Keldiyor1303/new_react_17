import React from "react";
import Navbar from "../../../component/navbar/Navbar";
import Sidebar from "../../../component/sidebar/Sidebar";
import SozlamalarKorrespondentContent from "./SozKorrespondentContent/SozKorrespondentContent";
import AllSidebarData from '../../../component/allSidebarData/AllSidebarData';

export default function SozlamalarKorrespondent() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                {/* <Sidebar /> */}
                <AllSidebarData />

                <div className="content-wrapper">
                    <div className="content-inner">
                        <SozlamalarKorrespondentContent />
                    </div>
                </div>
            </div >
        </div>
    )
}