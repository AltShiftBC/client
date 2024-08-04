import React from "react";
import "../styles/RemoteControl.css";
import Navbar from "./navbar";
import RemoteControl from "./RemoteControl";

const RemoteControl2=()=>{
    return(
        <>
        <div className="panel-dash-div">
            <Navbar />
            <RemoteControl />
        </div>
        </>
    )
}

export default RemoteControl2;