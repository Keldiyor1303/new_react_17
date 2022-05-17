import React from "react";
import './fuqaroRezalutsiya.css';
import Navbar from "../../../component/navbar/Navbar";
import Sidebar from "../../../component/sidebar/Sidebar";
import FuqaroRezalutsiyaContent from "./fuqaroRezalutsiyaContent/FuqaroRezalutsiyaContent";

export default function FuqaroRezalutsiya() {

    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <Sidebar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <FuqaroRezalutsiyaContent />
                    </div>
                </div>
            </div >
        </div>
    )
}