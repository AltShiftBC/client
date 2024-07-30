import React from "react";
import "../styles/sidebar.css";
import logo from "../assets/logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="one">
        <img src={logo} alt="" />
        <p id="fishot">Fishot</p>
      </div>
      <div className="icons">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <div
            id="home"
            style={
              location.pathname === "/home"
                ? { backgroundColor: "#4E60FF", color: "#E4E7FF" }
                : {}
            }
          >
            <Icon icon="ic:outline-home" style={{ fontSize: "30px" }} />
            <p>Home</p>
          </div>
        </Link>
        <Link to="/panel" style={{ textDecoration: "none" }}>
          <div
            id="control"
            style={
              location.pathname === "/panel"
                ? { backgroundColor: "#4E60FF", color: "#E4E7FF" }
                : {}
            }
          >
            <Icon icon="carbon:ibm-z-os-ai-control-interface" style={{ fontSize: "30px" }} />
            <p>Control panel</p>
          </div>
        </Link>
        <Link to="/video" style={{ textDecoration: "none" }}>
          <div
            id="video"
            style={
              location.pathname === "/video"
                ? { backgroundColor: "#4E60FF", color: "#E4E7FF" }
                : {}
            }
          >
            <Icon icon="carbon:video-filled" style={{ fontSize: "30px" }} />
            <p>Video feed</p>
          </div>
        </Link>
        <Link to="/control" style={{ textDecoration: "none" }}>
          <div
            id="remote"
            style={
              location.pathname === "/control"
                ? { backgroundColor: "#4E60FF", color: "#E4E7FF" }
                : {}
            }
          >
            <Icon icon="mdi:remote" style={{ fontSize: "30px" }} />
            <p>Remote control</p>
          </div>
        </Link>
        <Link to="/analytics" style={{ textDecoration: "none" }}>
          <div
            id="analytics"
            style={
              location.pathname === "/analytics"
                ? { backgroundColor: "#4E60FF", color: "#E4E7FF" }
                : {}
            }
          >
            <Icon icon="tabler:device-analytics" style={{ fontSize: "30px" }} />
            <p>Analytics</p>
          </div>
        </Link>
        <div id="line">
          <hr />
        </div>
        <Link to="/settings" style={{ textDecoration: "none" }}>
          <div
            id="settings"
            style={
              location.pathname === "/settings"
                ? { backgroundColor: "#4E60FF", color: "#E4E7FF" }
                : {}
            }
          >
            <Icon icon="carbon:settings" style={{ fontSize: "30px" }} />
            <p>Settings</p>
          </div>
        </Link>
      </div>
      <div className="below"></div>
    </div>
  );
};

export default Sidebar;