import React from "react";
import Navbar from "../../../../component/navbar/Navbar";
// import Sidebar from "../../../../component/sidebar/Sidebar";
import BajarilganContent from "./bajarilganContent/BajarilganContent";
import AllSidebarData from '../../../../component/allSidebarData/AllSidebarData';

export default function BajarilganB() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <AllSidebarData />

                <div className="content-wrapper">
                    <div className="content-inner">
                        <BajarilganContent itemsPerPage={6} />
                    </div>
                </div>
            </div >
        </div>
    )
}