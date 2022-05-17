import React from "react";
import Navbar from "../../../../../component/navbar/Navbar";
import KorishContent from "./korishContent/KorishContent";
import AllSidebarData from '../../../../../component/allSidebarData/AllSidebarData';

export default function Korish({stompClient}) {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <AllSidebarData />

                <div className="content-wrapper">
                    <div className="content-inner">
                        <KorishContent stompClient={stompClient} />
                    </div>
                </div>
            </div >
        </div>
    )
}