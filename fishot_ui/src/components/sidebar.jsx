import React from "react";
import "../styles/sidebar.css"
import logo from "../assets/logo.png"
import { Icon } from "@iconify/react/dist/iconify.js";



const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="one" >
                <img src={logo} alt="" />
                <p id="fishot">Fishot</p>
            </div>
            <div className="icons">
                <div id="home"><Icon icon="ic:outline-home" style={{fontSize: '30px'}}/><p>Home</p></div>
                <div id="control"><Icon icon="carbon:ibm-z-os-ai-control-interface" style={{fontSize: '30px'}}/><p>Control panel</p></div>
                <div id="video"><Icon icon="carbon:video-filled" style={{fontSize: '30px'}}/><p>Video feed</p></div>
                <div id="remote"><Icon icon="mdi:remote"style={{fontSize: '30px'}}/><p>Remote control</p></div>
                <div id="analytics"><Icon icon="tabler:device-analytics" style={{fontSize: '30px'}}/><p>Analytics</p></div>
                <div id="line"><hr /></div>
                <div id="settings"><Icon icon="carbon:settings" style={{fontSize: '30px'}}/><p>Settings</p></div>
            </div>
            <div className="below"></div>
        </div>
    )
}

export default Sidebar;