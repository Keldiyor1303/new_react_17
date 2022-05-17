import React from 'react';
import './home.css';
import Navbar from '../../component/navbar/Navbar';
import HomeContent from './homeContent/HomeContent';
import AllSidebarData from '../../component/allSidebarData/AllSidebarData';

export default function Home({stompClient}) {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <AllSidebarData />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <HomeContent stompClient={stompClient} />
                    </div>
                </div>
            </div >
        </div>
    )
}
