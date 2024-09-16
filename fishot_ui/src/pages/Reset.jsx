import React from "react";
import "../styles/forgot.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Reset = () => {
    return (
        <section className="forgot">
            <div className="form-forgot">
                <Link to="/" className="logo-icon">
                    <img src={logo} alt="" width={80} />
                </Link>
                <div className="input">
                    <div className="lemails" style={{fontSize:"18px", fontWeight:"bold"}}>
                        The password reset link is sent to your email!
                    </div>
                    <div className="sign-in">Go to <Link to="/login" style={{textDecoration:"none", color:"#4E60FF", fontWeight:"500"}}>Login</Link></div>
                </div>
            </div>
        </section>
    )
}

export default Reset;