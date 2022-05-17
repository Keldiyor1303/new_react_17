import React from "react";
import Navbar from "../../../../../component/navbar/Navbar";
import AdminBulimContent from "./adminBulimContent/AdminBulimContent";
import AdminSidebar from '../../../../../component/superAdminSidebar/adminSidebar/AdminSidebar';

export default function AdminBulim() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <AdminSidebar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <AdminBulimContent />
                    </div>
                </div>
            </div >
        </div>
    )
}