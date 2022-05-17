import React from 'react';
import './kadrlar.css';
import Navbar from '../../component/navbar/Navbar';
import Sidebar from '../../component/sidebar/Sidebar';
import KadrlarContent from './kadrlarContent/KadrlarContent';
import AllSidebarData from '../../component/allSidebarData/AllSidebarData';

export default function Kadrlar() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                {/* <Sidebar /> */}
                <AllSidebarData />

                <div className="content-wrapper">
                    <div className="content-inner">
                        <KadrlarContent />
                    </div>
                </div>

            </div >
        </div>
    )
}