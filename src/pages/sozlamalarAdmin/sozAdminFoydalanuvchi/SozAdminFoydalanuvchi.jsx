import React from 'react';
import Navbar from '../../../component/navbar/Navbar';
import Sidebar from '../../../component/sidebar/Sidebar';
import SozAdminFoydalanuvchiContent from './sozAdminFoydalanuvchiContent/SozAdminFoydalanuvchiContent';

export default function SozAdminFoydalanuvchi() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <Sidebar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <SozAdminFoydalanuvchiContent />
                    </div>
                </div>
            </div >
        </div>
    )
}
