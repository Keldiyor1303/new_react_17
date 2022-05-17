import React from 'react';
import Navbar from '../../../component/navbar/Navbar';
import Sidebar from '../../../component/sidebar/Sidebar';
import FuqaroMurojatYangiContent from './FuqaroMurojatYangiContent/FuqaroMurojatYangiContent';

export default function FuqaroMurojatYangi() {
    
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <Sidebar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <FuqaroMurojatYangiContent />
                    </div>
                </div>
            </div >
        </div>
    )
}