import React from "react";
import './nazoratdanOlish.css';
import Navbar from "../../../component/navbar/Navbar";
import Sidebar from "../../../component/sidebar/Sidebar";
import NazoratdanOlishContent from "./nazoratdanOlishContent/NazoratdanOlishContent";


export default function FuqaroNazoratdanOlish() {

    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <Sidebar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <NazoratdanOlishContent />
                    </div>
                </div>
            </div >
        </div>
    )
}