import React from 'react';
import Navbar from '../../../component/navbar/Navbar';
import Sidebar from '../../../component/sidebar/Sidebar';
import SozAdminLavozimContent from './sozAdminLavozimContent/SozAdminLavozimContent';

export default function SozAdminLavozim() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <Sidebar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <SozAdminLavozimContent />
                    </div>
                </div>
            </div >
        </div>
    )
}
