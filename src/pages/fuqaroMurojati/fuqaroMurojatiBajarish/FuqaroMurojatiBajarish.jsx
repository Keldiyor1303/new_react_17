import React from "react";
import './fuqaroMurojatiBajarish.css';
import Navbar from "../../../component/navbar/Navbar";
import Sidebar from "../../../component/sidebar/Sidebar";
import BajarishContent from "./fuqaroMurojatiBajarishContent/BajarishContent";

export default function FuqaroMurojatiBajarish() {

    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <Sidebar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <BajarishContent />
                    </div>
                </div>
            </div >
        </div>
    )
}