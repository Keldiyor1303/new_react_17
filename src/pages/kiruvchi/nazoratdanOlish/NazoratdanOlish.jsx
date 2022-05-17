import React, { useEffect } from "react";
import './nazoratdanOlish.css';
import Navbar from "../../../component/navbar/Navbar";
import NazoratdanOlishContent from "./nazoratdanOlishContent/NazoratdanOlishContent";
import $ from 'jquery';
import AllSidebarData from '../../../component/allSidebarData/AllSidebarData';

export default function NazoratdanOlish() {

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
                        <NazoratdanOlishContent />
                    </div>
                </div>
            </div>
        </div>
    )
}