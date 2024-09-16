import React from "react";
import "../styles/forgot.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Forgot = () => {
    return (
        <section className="forgot">
            <div className="form-forgot">
                <Link to="/" className="logo-icon">
                    <img src={logo} alt="" width={80} />
                </Link>
                <div className="input">
                    <div className="lemails">
                        <div className="lem"><input type="email" placeholder="Email" id="lem" /></div>
                    </div>
                    <div className="submit"><Link to="/reset" id="signup-button">Submit</Link></div>
                    <div className="sign-in">Remember password? <Link to="/login" style={{textDecoration:"none"}}>Login</Link></div>
                </div>
            </div>
        </section>
    )
}

export default Forgot;