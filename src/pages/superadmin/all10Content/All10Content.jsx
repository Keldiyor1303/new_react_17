import React from 'react';
import Navbar from '../../../component/navbar/Navbar';
import All10ContentInside from './all10ContentInside/All10ContentInside';
import AllSidebarData from '../../../component/allSidebarData/AllSidebarData';
import HomeContent from '../../Home/homeContent/HomeContent';

export default function All10Content() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <AllSidebarData />
                <div className="content-wrapper">
                    <div className="content-inner">
                        {/* <All10ContentInside /> */}
                        <HomeContent />
                    </div>
                </div>
            </div >
        </div>
    )
}
