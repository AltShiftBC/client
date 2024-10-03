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
<<<<<<< HEAD
                        Your new password sent to your email check it!
=======
                        The password reset link is sent to your email!
>>>>>>> 9b60b4c62e8b066a7229c29a723cee81212f5431
                    </div>
                    <div className="sign-in">Go to <Link to="/login" style={{textDecoration:"none", color:"#4E60FF", fontWeight:"500"}}>Login</Link></div>
                </div>
            </div>
        </section>
    )
}

export default Reset;