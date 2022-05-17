import React from 'react';
import Navbar from '../../../component/navbar/Navbar';
import Sidebar from '../../../component/sidebar/Sidebar';
import SozAdminIshStoliContent from './sozAdminIshStoliContent/SozAdminIshStoliContent';

export default function SozAdminIshStoli() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <Sidebar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <SozAdminIshStoliContent />
                    </div>
                </div>
            </div >
        </div>
    )
}
