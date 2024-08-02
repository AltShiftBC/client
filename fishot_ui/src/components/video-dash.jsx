import React from "react";
import Navbar from "../components/navbar";
import VideoDashBody from "./video-dash-body";
import "../styles/video.css"

const VideoDash=()=>{
    return(
        <div className="video-container">
            <Navbar />
            <VideoDashBody />
        </div>
    )
}

export default VideoDash;