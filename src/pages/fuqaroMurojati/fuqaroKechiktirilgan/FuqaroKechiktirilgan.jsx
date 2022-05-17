import React from "react";
import './fuqaroKechiktirilgan.css';
import Navbar from "../../../component/navbar/Navbar";
import Sidebar from "../../../component/sidebar/Sidebar";
import FuqaroKechiktirilganContent from "./fuqaroKechiktirilganContent/FuqaroKechiktirilganContent";

export default function FuqaroKechiktirilgan() {

    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <Sidebar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <FuqaroKechiktirilganContent />
                    </div>
                </div>
            </div >
        </div>
    )
}