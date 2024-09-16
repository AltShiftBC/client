import React from "react";
import logo from "../assets/logo.png"
import "../styles/welcome.css"
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div className="welcome-div">
            <div className="welcome-logo">
                <img src={logo} alt="" />
                <div className="welcome-name">Fishot</div>
            </div>
            <Link to="/login">
            <button className="welcome-button">Continue</button>
            </Link>
        </div>
    )
}

export default Welcome