import React from 'react';
import './arxiv.css';
import Navbar from '../../component/navbar/Navbar';
import Sidebar from '../../component/sidebar/Sidebar';
import ArxivContent from './arxivContent/ArxivContent';
import AllSidebarData from '../../component/allSidebarData/AllSidebarData';

export default function Arxiv() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                {/* <Sidebar /> */}
                <AllSidebarData />

                <div className="content-wrapper">
                    <div className="content-inner">
                        <ArxivContent />
                    </div>
                </div>

            </div >
        </div>
    )
}
