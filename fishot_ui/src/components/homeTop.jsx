import React from "react"
import "../styles/homeTop.css"
import map from "../assets/map.png"
import { Icon } from "@iconify/react/dist/iconify.js"
import profile from "../assets/profile.png"
import graph from "../assets/graph.png"
import { Link } from "react-router-dom"

const HomeTop = () => {
    return (
        <div className="hometop-div">
            <div className="sideOne">
                <div className="status-div">
                    <div id="status-container">
                        <div className="status-icon"><Icon icon="mdi:internet" id="
                    icon"/></div>
                        <div id="status-desc"><p style={{ fontWeight: "bold" }}>Status</p><p style={{ color: "#818181" }}>Online</p></div>
                    </div>
                    <div id="status-container">
                        <div className="status-icon" style={{ backgroundColor: "#FF6F6F21" }}><Icon icon="gg:battery" style={{ color: "#FF4848" }} id="
                    icon"/></div>
                        <div id="status-desc"><p style={{ fontWeight: "bold" }}>Battery</p><p style={{ color: "#818181" }}>78%</p></div>
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
                <div className="map">
                    <img src={map} alt=""/>
                </div>
            </div>
            <div className="sideTwo">
                <div className="profile-div">
                    <div className="profile-pic-id">
                        <img src={profile} alt="" />
                        <p style={{ textAlign: "center" }}> <span style={{fontWeight:"bold"}}>John Doe</span> <br />
                            Welcome back!</p>
                    </div>
                    <div className="profile-set">
                     <Link to="/settings"><Icon icon="material-symbols:manage-accounts-outline" style={{cursor:"pointer"}}/></Link>
                        <Link to="/logout"><Icon icon="material-symbols:logout" style={{cursor:"pointer"}}/></Link>
                    </div>
                </div>
                <div className="statistic-div">
                    <div className="statistic-name"><p style={{fontWeight:"bold"}}>Depth</p><p style={{color:"#9F9F9F"}}>Sea level</p></div>
                    <div className="statistic-graph">
                        <div id="statistic-label">
                            <p style={{fontSize:"13px"}}>
                              0 <br />
                            100 <br />
                            200 <br />
                            300
                            </p>
                        </div>
                        <div id="statictic-main-graph">
                            <img src={graph} alt="" height={90} width={180}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTop;