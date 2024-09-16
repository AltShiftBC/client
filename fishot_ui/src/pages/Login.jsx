import React from "react";
import logo from "../assets/logo.png"
import "../styles/login.css"
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Login=()=>{
    return(
                <section className="register">
                    <div className="form-register">
                        <Link to="/" className="logo-icon">
                            <img src={logo} alt="" width={80} />
                        </Link>
                        <div className="input">
                            <div className="input-containers">
                                
                                <div className="lemails">
                                    <div className="lem"><input type="email" placeholder="Email" id="lem"/></div>
                                </div>
                                <div className="lpasswords">
                                    <div className="lpwd"><input type="password" placeholder="Password" id="lpwd"/></div>
                                    <Link className="forgot-password" to="/forgot" style={{textDecoration:"none", fontSize:"13px"}}>Forgot password</Link>
                                </div>
                                <div className="lunique-id">
                                    <div className="lid"><input type="text" placeholder="Unique id" id="lid"/></div>
                                </div>
                            </div>
                            <div className="input-other-methods">
                                <Link to="google.com" className="google"><Icon icon="devicon:google"fontSize={20}/></Link>
                                <Link to="x.com" className="x"><Icon icon="prime:twitter" color="#000" fontSize={20}/></Link>
                                <Link to="linkedin.com" className="linkedin"><Icon icon="devicon:linkedin" fontSize={20}/></Link>
                            </div>
                            <div className="submit"><Link to="/home" id="signup-button">Sign in</Link></div>
                            <div className="login">Create a new account <Link to="/register">Sign up</Link> </div>
                        </div>
                    </div>
                </section>
    )
}

export default Login;