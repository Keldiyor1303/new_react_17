import React from 'react'
import Navbar from '../../../../../component/navbar/Navbar'
import Sidebar from '../../../../../component/sidebar/Sidebar'
import VazifalarYangiContent from './vazifalarYangiContent/VazifalarYangiContent'
import AllSidebarData from '../../../../../component/allSidebarData/AllSidebarData';

export default function VazifalarYangi() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                {/* <Sidebar /> */}
                <AllSidebarData />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <VazifalarYangiContent itemsPerPage={6} />
                    </div>
                </div>
            </div >
        </div>
    )
}