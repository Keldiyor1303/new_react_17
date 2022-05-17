import React from 'react';
import Navbar from '../../../component/navbar/Navbar';
// import Sidebar from '../../../component/sidebar/Sidebar';
import ModulSozlamalariContent from './modulSozlamalariContent/ModulSozlamalariContent';
import AllSidebarData from '../../../component/allSidebarData/AllSidebarData';

export default function ModulSozlamalari() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                {/* <Sidebar /> */}
                <AllSidebarData />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <ModulSozlamalariContent />
                    </div>
                </div>
            </div >
        </div>
    )
}