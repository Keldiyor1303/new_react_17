import React from 'react';
import Navbar from '../../../component/navbar/Navbar';
import Sidebar from '../../../component/sidebar/Sidebar';
import SozAdminQarorBannerContent from './sozAdminQarorBannerContent/SozAdminQarorBannerContent';

export default function SozAdminQarorBanner() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <Sidebar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <SozAdminQarorBannerContent />
                    </div>
                </div>
            </div >
        </div>
    )
}
