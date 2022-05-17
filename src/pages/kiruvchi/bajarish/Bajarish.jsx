import React, { useEffect } from "react";
import './bajarish.css';
import Navbar from "../../../component/navbar/Navbar";
import BajarishContent from "./bajarishContent/BajarishContent";
import $ from 'jquery';
import AllSidebarData from '../../../component/allSidebarData/AllSidebarData';

export default function Bajarish() {

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
                        <BajarishContent />
                    </div>
                </div>
            </div >
        </div>
    )
}