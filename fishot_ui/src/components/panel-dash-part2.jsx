import React from "react";
import "../styles/panelDash.css"
import { Icon } from "@iconify/react/dist/iconify.js";
import map from "../assets/map.png"

const PanelDashPart2 = () => {
    return (
        <div className="dash-part2-div">
            <div className="part2-side-one">
                <div className="panel-mode">
                    <div >
                        <p className="mode-name">Operation mode</p>
                        <div className="mode-mode"><Icon style={{ fontSize: "25px" }} icon="mdi:auto-awesome" /><p>Automated</p></div>
                    </div>
                    <button className="mode-change">Change</button>
                </div>
                <div className="panel-speed">
                    <div>
                        <p className="mode-name">Speed</p>
                        <div className="mode-mode"><Icon style={{ fontSize: "25px" }} icon="material-symbols:speed-outline" /><p>34 Km/h</p></div>
                    </div>
                    <div className="speed-panel">
                        <div style={{ fontSize: "smaller" }}>Set max speed</div>
                        <div className="dash-stati">
                            <Icon icon="bi:lightning-fill" style={{ color: "#4E60FF" }} />
                            <div id="dash-stati-line"></div>
                            <div id="dash-stati-ellipse"></div>
                        </div>
                        <div className="dash-speed">
                            <p id="speed-init">00 km/h</p>
                            <p id="speed-final">50 km/h</p>
                        </div>
                    </div>
                </div>
                <div className="pathway">
                    <div>
                        <p className="mode-name">Pathway</p>
                        <img src={map} alt="" width={635} />
                        <div>
                            <div className="position-div">
                                <p>Initial position:</p>
                                <div className="position-exact">
                                    <Icon icon="mdi:location-on-outline" style={{fontSize:"x-large"}}/> &nbsp; |&nbsp; Rusizi
                                </div>
                            </div>
                            <div className="position-div">
                                <p>Return at:</p>
                                <div className="return-div">
                                    <div className="position-exact">
                                        <Icon icon="mdi:location-on-outline" style={{fontSize:"x-large"}}/> &nbsp;|&nbsp; Idjwi island
                                    </div>
                                    <button>Set new</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="part2-side-two">
                part 2
            </div>
        </div>
    )
}

export default PanelDashPart2