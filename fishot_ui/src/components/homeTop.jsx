import React from "react"
import "../styles/homeTop.css"
import map from "../assets/map.png"
import { Icon } from "@iconify/react/dist/iconify.js"
import profile from "../assets/profile.png"
import graph from "../assets/graph.png"
import { Link } from "react-router-dom"

const HomeTop = () => {
    const statusData = [
        {
            icon: "mdi:internet",
            desc: "Status",
            value: "Online",
            iconStyle: {},
            containerStyle: {}
        },
        {
            icon: "gg:battery",
            desc: "Battery",
            value: "78%",
            iconStyle: { color: "#FF4848" },
            containerStyle: { backgroundColor: "#FF6F6F21" }
        },
        {
            icon: "iconoir:trash-solid",
            desc: "Weight",
            value: "7.6kg",
            iconStyle: { color: "#411900" },
            containerStyle: { backgroundColor: "#A4540021" }
        },
        {
            icon: "ic:baseline-mode-standby",
            desc: "Mode",
            value: "Auto",
            iconStyle: { color: "#4E60FF" },
            containerStyle: { backgroundColor: "#4E60FF4D" }
        }
    ];
    return (
        <div className="hometop-div">
            <div className="sideOne">
                <div className="status-div">
                    {statusData.map((item, index) => (
                        <div key={index} id="status-container" style={{ background: "#fff" }}>
                            <div className="status-icon" style={item.containerStyle}>
                                <Icon icon={item.icon} id="icon" style={item.iconStyle} />
                            </div>
                            <div id="status-desc">
                                <p style={{ fontWeight: "bold" }}>{item.desc}</p>
                                <p style={{ color: "#818181" }}>{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="map">
                    <img src={map} alt="" />
                </div>
            </div>
            <div className="sideTwo">
                <div className="profile-div">
                    <div className="profile-pic-id">
                        <img src={profile} alt="" />
                        <p style={{ textAlign: "center" }}> <span style={{ fontWeight: "bold" }}>John Doe</span> <br />
                            Welcome back!</p>
                    </div>
                    <div className="profile-set">
                        <Link to="/settings"><Icon icon="material-symbols:manage-accounts-outline" style={{ cursor: "pointer" }} /></Link>
                        <Link to="/logout"><Icon icon="material-symbols:logout" style={{ cursor: "pointer" }} /></Link>
                    </div>
                </div>
                <div className="statistic-div">
                    <div className="statistic-name"><p style={{ fontWeight: "bold" }}>Depth</p><p style={{ color: "#9F9F9F" }}>Sea level</p></div>
                    <div className="statistic-graph">
                        <div id="statistic-label">
                            <p style={{ fontSize: "13px" }}>
                                0 <br />
                                100 <br />
                                200 <br />
                                300
                            </p>
                        </div>
                        <div id="statictic-main-graph">
                            <img src={graph} alt="" height={90} width={180} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTop;