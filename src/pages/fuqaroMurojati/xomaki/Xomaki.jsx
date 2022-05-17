import React from "react";
import './xomaki.css';
import Navbar from "../../../component/navbar/Navbar";
import Sidebar from "../../../component/sidebar/Sidebar";
import XomakiContent from "./xomakiContent/XomakiContent";

export default function Xomaki() {

    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <Sidebar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <XomakiContent />
                    </div>
                </div>
            </div >
        </div>
    )
}