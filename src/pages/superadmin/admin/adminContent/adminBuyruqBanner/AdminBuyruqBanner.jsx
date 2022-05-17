import React from "react";
import Navbar from "../../../../../component/navbar/Navbar";
import AdminSidebar from '../../../../../component/superAdminSidebar/adminSidebar/AdminSidebar';
import AdminBuyruqBannerContent from "./adminBuyruqBannerContent/AdminBuyruqBannerContent";

export default function AdminBuyruqBanner() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <AdminSidebar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <AdminBuyruqBannerContent />
                    </div>
                </div>
            </div >
        </div>
    )
}