import React from "react";
import Navbar from "../../../../component/navbar/Navbar";
import BaseAdminNavbar from "../../../../component/superAdminSidebar/baseAdminSidebar/BaseAdminSidebar";
// import BaseAdminNavbarTop from "../baseAdminNavbarTop/BaseAdminNavbarTop";
import XabarnomaContent from "./xabarnomaContent/XabarnomaContent";

export default function Xabarnoma() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <BaseAdminNavbar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <XabarnomaContent />
                    </div>
                </div>
            </div >
        </div>
    )
}