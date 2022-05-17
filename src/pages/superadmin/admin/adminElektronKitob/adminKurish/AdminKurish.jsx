import React from "react";
import Navbar from "../../../../../component/navbar/Navbar";
import AdminSidebar from '../../../../../component/superAdminSidebar/adminSidebar/AdminSidebar';
import AdminKurishContent from "./adminKurishContent/AdminKurishContent";

export default function AdminKurish() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <AdminSidebar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <AdminKurishContent itemsPerPage={6} />
                    </div>
                </div>
            </div >
        </div>
    )
}