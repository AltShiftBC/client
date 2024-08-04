import React from "react";
import "../styles/remote.css";
import Sidebar from "../components/sidebar";
import ControlDash from "../components/controlDash";

const Control=()=>{
    return(
        <div>
            <Sidebar />
            <ControlDash />
        </div>
    )
}

export default Control;