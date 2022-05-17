import React from 'react';
import Navbar from '../../../../../component/navbar/Navbar';
import BaseAdminNavbar from '../../../../../component/superAdminSidebar/baseAdminSidebar/BaseAdminSidebar';
// import BaseAdminNavbarTop from '../../baseAdminNavbarTop/BaseAdminNavbarTop';
import FuqaroJavoblariContent from './fuqaroJavoblariContent/FuqaroJavoblariContent';

export default function FuqaroJavoblari() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <BaseAdminNavbar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <FuqaroJavoblariContent />
                    </div>
                </div>
            </div >
        </div>
    )
}