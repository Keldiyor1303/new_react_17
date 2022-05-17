import React from 'react'
import Navbar from '../../../component/navbar/Navbar';
import BaseAdminSidebar from '../../../component/superAdminSidebar/baseAdminSidebar/BaseAdminSidebar';
import BaseAdminContent from './baseAdminContent/BaseAdminContent';
import TashkilotQushishContent from "./tashkilotQushish/tashkilotQushishContent/TashkilotQushishContent";
// import AdminQushish from "./tashkilotQushish/TashkilotQushish";
// import BaseAdminNavbarTop from './baseAdminNavbarTop/BaseAdminNavbarTop';

export default function BaseAdmin() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <BaseAdminSidebar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <TashkilotQushishContent />
                    </div>
                </div>
            </div >
        </div>
    )
}
