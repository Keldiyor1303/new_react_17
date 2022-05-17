import React, { useEffect } from "react";
import './yangi.css';
import Navbar from "../../../component/navbar/Navbar";
import YangiContent from "./yangiContent/YangiContent";
import $ from 'jquery';
import AllSidebarData from '../../../component/allSidebarData/AllSidebarData';

export default function Yangi() {

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
						<YangiContent />
					</div>
				</div>
			</div >
		</div>
	)
}