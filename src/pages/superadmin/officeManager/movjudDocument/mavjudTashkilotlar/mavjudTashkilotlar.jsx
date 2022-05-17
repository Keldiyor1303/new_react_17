import Navbar from "../../../../../component/navbar/Navbar";
import MavjudTashkilotlarContentOfficeMeneger from "./mavjudTashkilotlarContent/mavjudTashkilotlarContent";
import Sidebar from "../../../../../component/allSidebarData/AllSidebarData";

export default function MavjudTashkilotlarOfficeMeneger() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />

            <div className="page-content" style={{ height: "100%" }}>
                <Sidebar />
                <div className="content-wrapper">
                    <div className="content-inner">
                        <MavjudTashkilotlarContentOfficeMeneger />
                    </div>
                </div>
            </div >
        </div>
    )
}
