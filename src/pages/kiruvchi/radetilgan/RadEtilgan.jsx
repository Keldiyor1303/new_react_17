import React, { useEffect } from "react";
import './radetilgan.css';
import Navbar from "../../../component/navbar/Navbar";
import RadEtilganContent from "./radEtilganContent/RadEtilganContent";
import $ from 'jquery';
import AllSidebarData from '../../../component/allSidebarData/AllSidebarData';

export default function RadEtilgan() {

    useEffect(() => {
        $(document).ready(function () {
            $("input:submit").attr("checked", false).click(function () {
                let shcolum = "." + $(this).attr("name");
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
                        <RadEtilganContent />
                    </div>
                </div>
            </div >
        </div>
    )
}