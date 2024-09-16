import React from "react";
import logo from "../assets/logo.png"
import "../styles/register.css"
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <section className="register">
            <div className="form-register">
                   <Link to="/" className="logo-icon">
                            <img src={logo} alt="" width={80} />
                        </Link>
                <div className="input">
                    <div className="input-containers">
                        <div className="names">
                            <div className="fname"><input type="text" name="firstname" placeholder="Firstname" id="fname"/></div>
                            <div className="lname"><input type="text" name="lastname" placeholder="Lastname" id="lname"/></div>
                        </div>
                        <div className="emails">
                            <div className="em"><input type="email" name="email" placeholder="Email" id="em"/></div>
                            <div className="re-em"><input type="email" name="re-email" placeholder="Re-write email" id="re-em"/></div>
                        </div>
                        <div className="passwords">
                            <div className="pwd"><input type="password" name="password" placeholder="Password" id="pwd"/></div>
                            <div className="re-pwd"><input type="password" name="re-password" placeholder="Confirm password" id="re-pwd"/></div>
                        </div>
                    </div>
                    <div className="input-other-methods">
                        <Link to="google.com" className="google"><Icon icon="devicon:google"fontSize={20}/></Link>
                        <Link to="x.com" className="x"><Icon icon="prime:twitter" color="#000" fontSize={20}/></Link>
                        <Link to="linkedin.com" className="linkedin"><Icon icon="devicon:linkedin" fontSize={20}/></Link>
                    </div>
                    <div className="privacy-policy">
                        <input type="checkbox" name="privacy-policy" /><p>I agree to <Link>terms and conditions</Link></p>
                    </div>
                    <div className="submit"><Link to="/login" id="signup-button">Sign up</Link></div>
                    <div className="login">Already have an account? <Link to="/login">Login</Link> </div>
                </div>
            </div>
        </section>
    )
}

export default Register;