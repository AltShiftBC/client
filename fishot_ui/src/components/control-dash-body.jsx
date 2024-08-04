import React, { useState } from "react";
import "../styles/remote.css";
import { Icon } from "@iconify/react/dist/iconify.js";

const ControlDashBody = () => {
    return (
        <div className="control-remote-div">
            <div className="fishot-control">
            </div>
            <div className="status-div">
                <div id="status-container">
                    <div className="status-icon"><Icon icon="mdi:internet" id="
                    icon"/></div>
                    <div id="status-desc"><p style={{ fontWeight: "bold" }}>Status</p><p style={{ color: "#818181" }}>Online</p></div>
                </div>
                <div id="status-container">
                    <div className="status-icon" style={{ backgroundColor: "#A4540021" }}><Icon icon="iconoir:trash-solid" style={{ color: "#411900" }} id="
                    icon"/></div>
                    <div id="status-desc"><p style={{ fontWeight: "bold" }}>Weight</p><p style={{ color: "#818181" }}>7.6kg</p></div>
                </div>
                <div id="status-container">
                    <div className="status-icon" style={{ backgroundColor: "#4E60FF4D" }}><Icon icon="ic:baseline-mode-standby" style={{ color: "#4E60FF" }} id="
                    icon"/></div>
                    <div id="status-desc"><p style={{ fontWeight: "bold" }}>Mode</p><p style={{ color: "#818181" }}>Auto</p></div>
                </div>
            </div>
        </div>
    )
}

export default ControlDashBody;