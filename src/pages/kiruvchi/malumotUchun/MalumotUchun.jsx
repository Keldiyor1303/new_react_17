import React, { useEffect } from "react";
import $ from 'jquery';
import Navbar from "../../../component/navbar/Navbar";
import MalumotUchunContent from "./malumotUchunContent/MalumotUchunContent";
import AllSidebarData from '../../../component/allSidebarData/AllSidebarData';

export default function MalumotUchun() {

    useEffect(() => {
        $(document).ready(function () {
            $("input:submit").attr("checked", false).click(function () {
                var shcolum = "." + $(this).attr("name");
                $(shcolum).toggle();
            })
        })

        // btn toggle
        $(document).ready(function () {
            $('input.myBtn').click(function () {
                $(this).toggleClass('btnActive')
            })
        })
    }, []);

    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <AllSidebarData />
                
                <div className="content-wrapper">
                    <div className="content-inner">
                        <MalumotUchunContent />
                    </div>
                </div>
            </div >
        </div>
    )
}