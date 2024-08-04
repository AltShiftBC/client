import React from "react";
import "../styles/remote.css";
import Navbar from "./navbar";
import ControlDashBody from "./control-dash-body";

const ControlDash=()=>{
    return(
        <div className="control-dash-container">
            <Navbar />
            <ControlDashBody />
        </div>
    )
}

export default ControlDash;