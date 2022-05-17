import React from 'react';
import './kengQidirish.css';
import Navbar from '../../component/navbar/Navbar';
import Sidebar from '../../component/sidebar/Sidebar';
import ContentKengQidirish from './contentKengQidirish/ContentKengQidirish';
import AllSidebarData from '../../component/allSidebarData/AllSidebarData';

export default function KengQidirish() {

    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                {/* <Sidebar /> */}
                <AllSidebarData />

                <div className="content-wrapper">
                    <div className="content-inner">
                        <ContentKengQidirish />
                    </div>
                </div>
            </div >
        </div>
    )
}
