import React from 'react';
import Navbar from '../../../../../component/navbar/Navbar';
import AdminNavbar from '../../../../../component/superAdminSidebar/adminSidebar/AdminSidebar';
import MavjudTashkilotlarContent from "./mavjudTashkilotlarContent/mavjudTashkilotlarContent";

export default function MavjudTashkilotlar() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <AdminNavbar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <MavjudTashkilotlarContent />
                    </div>
                </div>
            </div >
        </div>
    )
}
