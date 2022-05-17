import React from "react";
import './fuqaroBajarilgan.css';
import Navbar from "../../../component/navbar/Navbar";
import Sidebar from "../../../component/sidebar/Sidebar";
import FuqaroBajarilganContent from "./fuqaroBajarilganContent/FuqaroBajarilganContent";

export default function FuqaroBajarilgan() {

    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <Sidebar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <FuqaroBajarilganContent />
                    </div>
                </div>
            </div >
        </div>
    )
}