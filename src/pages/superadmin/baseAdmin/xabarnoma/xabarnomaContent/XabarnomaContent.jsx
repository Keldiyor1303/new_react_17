import React from "react";
import XabarnomaNavbar from "../xabarnomaNavbar/XabarnomaNavbar";

export default function XabarnomaContent() {
    return (
        <div className="content mb-5">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Xabarnoma</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ borderTopRightRadius: "5px",borderTopLeftRadius: "5px"}}>
                    <XabarnomaNavbar />
                </ul>

            </div>
        </div >
    )
}