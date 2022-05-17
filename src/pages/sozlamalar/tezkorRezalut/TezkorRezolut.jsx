import React from "react";
import Navbar from "../../../component/navbar/Navbar";
import Sidebar from "../../../component/sidebar/Sidebar";
import TezkorRezalutContent from './tezkorRezolutContent/TezkorRezalutContent';
import AllSidebarData from '../../../component/allSidebarData/AllSidebarData';

export default function TezkorRezolut() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                {/* <Sidebar /> */}
                <AllSidebarData />

                <div className="content-wrapper">
                    <div className="content-inner">
                        <TezkorRezalutContent />
                    </div>
                </div>
            </div >
        </div>
    )
}