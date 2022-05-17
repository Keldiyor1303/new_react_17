import React from "react";
import Navbar from "../../../../../../component/navbar/Navbar";
import AdminSidebar from '../../../../../../component/superAdminSidebar/adminSidebar/AdminSidebar';
import AdminArxivKurishContent from "./adminArxivKurishContent/AdminArxivKurishContent";

export default function AdminArxivKurish() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <AdminSidebar />

                <div className="content-wrapper">
                    <div className="content-inner">
                        <AdminArxivKurishContent itemsPerPage={6} />
                    </div>
                </div>
            </div >
        </div>
    )
}