import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import Sidebar from '../../component/sidebar/Sidebar';
import FuqaroMurojatiContent from './fuqaroMurojatiContent/FuqaroMurojatiContent';

export default function FuqaroMurojati() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <Sidebar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <FuqaroMurojatiContent />
                    </div>
                </div>
            </div >
        </div>
    )
}