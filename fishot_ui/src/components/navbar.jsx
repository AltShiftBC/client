import React from "react";
import "../styles/navbar.css"
import home from "../assets/icons/home.png"
import notifi from "../assets/icons/notifi.png"
import search from "../assets/icons/Search.png"
import { useLocation } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const Navbar=()=>{
    const location = useLocation();
    const getTitle = () => {
      switch (location.pathname) {
        case "/panel":
          return "Control panel";
        case "/home":
          return "Home";
        case "/video":
          return "Video feed";
        case "/control":
          return "Remote control";
        default:
          return "Home";
      }
    };
    const getIcon=()=>{
        switch (location.pathname) {
            case "/panel":
              return "carbon:ibm-z-os-ai-control-interface";
            case "/home":
              return "ic:outline-home";
            case "/video":
              return "carbon:video-filled";
            case "/control":
              return "mdi:remote";
            default:
              return "ic:outline-home";
          }
    };
    return(
        <div className="nav">
            <div id="navHome" style={{gap:"10px"}}>
                <Icon icon={getIcon()} style={{fontSize:"xx-large"}}/>
                <p id="title">{getTitle()}</p>
            </div>
            <div id="navSearch">
                <div id="input">
                    <input type="text" id="search" placeholder="Search"/><img src={search} alt="" />
                </div>
                <div id="notification"><img src={notifi} alt="" /><div id="status"></div></div>
            </div>
        </div>
    )
}

export default Navbar