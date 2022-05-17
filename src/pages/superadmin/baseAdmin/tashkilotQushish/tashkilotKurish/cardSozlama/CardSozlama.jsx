import React from "react";
import Navbar from "../../../../../../component/navbar/Navbar";
import BaseAdminNavbar from "../../../../../../component/superAdminSidebar/baseAdminSidebar/BaseAdminSidebar";
import CardSozlamaContent from "./cardSozlamaContent/CardSozlamaContent";
// import BaseAdminNavbarTop from "../../../baseAdminNavbarTop/BaseAdminNavbarTop";

export default function CardSozlama() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <BaseAdminNavbar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <CardSozlamaContent />
                    </div>
                </div>
            </div >
        </div>
    )
}