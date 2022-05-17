import React from "react";
import './fuqaroNazorat.css';
import Navbar from "../../../component/navbar/Navbar";
import Sidebar from "../../../component/sidebar/Sidebar";
import FuqaroNazoratContent from "./fuqaroNazoratContent/FuqaroNazoratContent";

export default function FuqaroNazorat() {

    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <Sidebar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <FuqaroNazoratContent />
                    </div>
                </div>
            </div >
        </div>
    )
}