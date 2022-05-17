import React from "react";
import Navbar from "../../../../../component/navbar/Navbar";
import YangiSozlamaContent from "./yangiSozlamaContent/YangiSozlamaContent";
import AllSidebarData from '../../../../../component/allSidebarData/AllSidebarData';

export default function YangiSozlama() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <AllSidebarData />
                
                <div className="content-wrapper">
                    <div className="content-inner">
                        <YangiSozlamaContent />
                    </div>
                </div>
            </div >
        </div>
    )
}