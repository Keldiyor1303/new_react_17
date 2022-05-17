import React from 'react';
import Navbar from '../../../component/navbar/Navbar';
import AdminNavbar from '../../../component/superAdminSidebar/adminSidebar/AdminSidebar';
import AllSidebarData from '../../../component/allSidebarData/AllSidebarData';

export default function Admin() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <AdminNavbar />
                {/* <AllSidebarData /> */}
                <div className="content-wrapper">
                    <div className="content-inner">
                        {/* <AdminContent /> */}
                        <h3>Admin page</h3>
                    </div>
                </div>
            </div >
        </div>
    )
}
