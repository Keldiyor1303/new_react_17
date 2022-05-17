import React from "react";
import MurojaatNavbar from "../murojaatNavbar/MurojaatNavbar";

export default function MurojaatContent() {
    return (
        <div className="content mb-5">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Murojaat</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ borderTopRightRadius: "5px",borderTopLeftRadius: "5px"}}>
                    <MurojaatNavbar />
                </ul>

                {/* Yo'nalishlar page */}
                no Yo'nalishlar page
            </div>
        </div >
    )
}