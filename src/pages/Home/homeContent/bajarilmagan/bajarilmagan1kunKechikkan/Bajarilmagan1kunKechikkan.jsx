import React from "react";
import Navbar from "../../../../../component/navbar/Navbar";
import Sidebar from "../../../../../component/sidebar/Sidebar";
import Bajarilmagan1kunKechContent from "./bajarilmagan1kunKechContent/Bajarilmagan1kunKechContent";
import AllSidebarData from '../../../../../component/allSidebarData/AllSidebarData';

export default function Bajarilmagan1kunKechikkan() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                {/* <Sidebar /> */}
                <AllSidebarData />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <Bajarilmagan1kunKechContent itemsPerPage={6} />
                    </div>
                </div>
            </div >
        </div>
    )
}