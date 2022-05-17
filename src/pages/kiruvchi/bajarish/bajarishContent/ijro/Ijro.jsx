import React from "react";
import Navbar from "../../../../../component/navbar/Navbar";
import IjroContent from "./ijroContent/IjroContent";
import AllSidebarData from '../../../../../component/allSidebarData/AllSidebarData';

export default function Ijro() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <AllSidebarData />

                <div className="content-wrapper">
                    <div className="content-inner">
                        <IjroContent />
                    </div>
                </div>
            </div >
        </div>
    )
}