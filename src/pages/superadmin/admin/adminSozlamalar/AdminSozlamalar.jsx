import React from "react";
import Navbar from "../../../../component/navbar/Navbar";
import AdminSidebar from '../../../../component/superAdminSidebar/adminSidebar/AdminSidebar';
import AdminSozlamalarContent from "./adminSozlamalarContent/AdminSozlamalarContent";

export default function AdminSozlamalar() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <AdminSidebar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <AdminSozlamalarContent />
                    </div>
                </div>
            </div >
        </div>
    )
}