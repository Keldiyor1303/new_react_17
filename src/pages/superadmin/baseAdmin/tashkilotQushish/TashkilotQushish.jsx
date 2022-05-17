import React from "react";
import Navbar from "../../../../component/navbar/Navbar";
import BaseAdminNavbar from "../../../../component/superAdminSidebar/baseAdminSidebar/BaseAdminSidebar";
// import BaseAdminNavbarTop from "../baseAdminNavbarTop/BaseAdminNavbarTop";
import TashkilotQushishContent from "./tashkilotQushishContent/TashkilotQushishContent";
import ModullarContent from "../modullar/modullarContent/ModullarContent";

export default function TashkilotQushish() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <BaseAdminNavbar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <TashkilotQushishContent />
                    </div>
                </div>
            </div >
        </div>
        // <div className="content-wrapper">
        //     <div className="content-inner">
        //         <TashkilotQushishContent />
        //     </div>
        // </div>
    )
}