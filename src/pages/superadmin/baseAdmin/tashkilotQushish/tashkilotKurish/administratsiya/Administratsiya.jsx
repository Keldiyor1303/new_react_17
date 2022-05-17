import React from "react";
import Navbar from "../../../../../../component/navbar/Navbar";
import BaseAdminNavbar from "../../../../../../component/superAdminSidebar/baseAdminSidebar/BaseAdminSidebar";
// import BaseAdminNavbarTop from "../../../baseAdminNavbarTop/BaseAdminNavbarTop";
import AdministratsiyaContent from "./administratsiyaContent/AdministratsiyaContent";

export default function Administratsiya() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <BaseAdminNavbar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <AdministratsiyaContent />
                    </div>
                </div>
            </div >
        </div>
    )
}