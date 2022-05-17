import React from "react";
import Navbar from "../../../../component/navbar/Navbar";
import BaseAdminNavbar from "../../../../component/superAdminSidebar/baseAdminSidebar/BaseAdminSidebar";
import KartochkaQushishContent from "./kartochkaQushishContent/KartochkaQushishContent";

export default function KartochkaQushish() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <BaseAdminNavbar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <KartochkaQushishContent />
                    </div>
                </div>
            </div >
        </div>
    )
}