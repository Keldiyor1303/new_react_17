import React from "react";
import Navbar from "../../../../../component/navbar/Navbar";
import SozlamaContent from "./sozlamaContent/SozlamaContent";
import AllSidebarData from '../../../../../component/allSidebarData/AllSidebarData';

export default function Sozlama() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <AllSidebarData />
                
                <div className="content-wrapper">
                    <div className="content-inner">
                        <SozlamaContent />
                    </div>
                </div>
            </div >
        </div>
    )
}