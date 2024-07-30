import React from "react";
import "../styles/panel.css";
import Sidebar from "../components/sidebar";
import PanelDash from "../components/panel-dash";

const Panel=()=>{
    return(
        <div className="panel-div">
            <Sidebar />
            <PanelDash />
        </div>
    )
}

export default Panel;