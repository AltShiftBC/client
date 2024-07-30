import React from "react";
import "../styles/panelDash.css"
import Navbar from "./navbar";
import PanelDashPart2 from "./panel-dash-part2";

const PanelDash=()=>{
    return(
        <div className="panel-dash-div">
            <Navbar />
            <PanelDashPart2 />
        </div>
    )
}

export default PanelDash