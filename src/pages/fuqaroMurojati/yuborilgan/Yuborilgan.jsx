import React from "react";
import './yuborilgan.css';
import Navbar from "../../../component/navbar/Navbar";
import Sidebar from "../../../component/sidebar/Sidebar";
import YuborilganContent from "./yuborilganContent/YuborilganContent";

export default function Yuborilgan() {

    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <Sidebar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <YuborilganContent />
                    </div>
                </div>
            </div >
        </div>
    )
}