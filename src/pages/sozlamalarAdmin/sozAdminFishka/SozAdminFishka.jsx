import React from 'react';
import Navbar from '../../../component/navbar/Navbar';
import Sidebar from '../../../component/sidebar/Sidebar';
import SozAdminFishkaContent from './sozAdminFishkaContent/SozAdminFishkaContent';

export default function SozAdminFishka() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <Sidebar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <SozAdminFishkaContent />
                    </div>
                </div>
            </div >
        </div>
    )
}
