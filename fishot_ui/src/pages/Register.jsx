<<<<<<< HEAD
import React, { useState, useEffect } from "react"
import logo from "../assets/logo.png"
import "../styles/register.css"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

const Register = () => {

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [reEmail, setReEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [agreeTerms, setAgreeTerms] = useState(false)
    const navigate = useNavigate()
    useEffect(()=> {
        axios.defaults.withCredentials = true
    } ,[])

    const handleSignUp = async (e) => {
        e.preventDefault()

        if (!fname || !lname || !email || !reEmail || !password || !rePassword) {
            alert("Please complete all fields")
            return
        }

        if (password !== rePassword) {
            alert("Passwords do not match")
            return
        }

        if (email !== reEmail) {
            alert("Emails do not match")
            return
        }

        if (!agreeTerms) {
            alert("Please agree to terms and conditions")
            return
        }


        try {
            const userData = {
                firstname: fname,
                lastname: lname,
                email: email,
                password: password,
                reEmail: reEmail,
                confirmPassword: rePassword

            }
            const {data: register } = await axios.post('http://localhost:3000/api/register',userData)
            if(register.status == false) {
                alert(register.message)
                alert(register.message)
            } else{
                alert('Registered successfully and unique ID is sent via email')
                setTimeout(() => {
                    navigate('/login')
                }, 1000)
            }
        } catch (error) {
            console.error("Registration failed...:", error)
            alert('Something goes wrong try later')
        }
    }

=======
import
React, {
    useState,
    useRef,
    useEffect
} from "react";
import logo from "../assets/logo.png"
import "../styles/register.css"
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useNavigate } from "react-router-dom"


const Register = () => {
    const [notification, setNotification] = useState('');
    const [showNotification, setShowNotification] = useState(false)
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [reEmail, setReEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [agreeTerms, setAgreeTerms] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        if (notification) {
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 2000);
        }
    }, [notification]);

    const handleSignUp = (e) => {
        e.preventDefault();
        if (!fname || !lname || !email || !reEmail || !password || !rePassword) {
            setNotification("Please complete all fields");
            return;
        }
        if (password !== rePassword) {
            setNotification("Passwords do not match");
            return;
        }
        if (email !== reEmail) {
            setNotification("Emails do not match");
            return;
        }
        if (!agreeTerms) {
            setNotification("Please agree to terms and conditions");
            return;
        }
        setNotification("Registered successfully and unique id sent via email");
        setTimeout(() => {
            navigate("/login");
        }, 2000)
    };
>>>>>>> 9b60b4c62e8b066a7229c29a723cee81212f5431
    return (
        <section className="register">
            <div className="form-register">
                <Link to="/" className="logo-icon">
                    <img src={logo} alt="" width={80} />
                </Link>
                <div className="input">
                    <div className="input-containers">
                        <div className="names">
<<<<<<< HEAD
                            <div className="fname">
                                <input
                                    type="text"
                                    name="firstname"
                                    placeholder="Firstname"
                                    id="fname"
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="lname">
                                <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Lastname"
                                    id="lname"
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="emails">
                            <div className="em">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    id="em"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="re-em">
                                <input
                                    type="email"
                                    placeholder="Re-write email"
                                    name="reEmail"
                                    id="re-em"
                                    value={reEmail}
                                    onChange={(e) => setReEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="passwords">
                            <div className="pwd">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    id="pwd"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="re-pwd">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm password"
                                    id="re-pwd"
                                    value={rePassword}
                                    onChange={(e) => setRePassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="input-other-methods">
                        <a href="google.com" className="google">
                            <Icon icon="devicon:google" fontSize={20} />
                        </a>
                        <a href="x.com" className="x">
                            <Icon icon="prime:twitter" color="#000" fontSize={20} />
                        </a>
                        <a href="linkedin.com" className="linkedin">
                            <Icon icon="devicon:linkedin" fontSize={20} />
                        </a>
                    </div>
                    <div className="privacy-policy">
                        <input
                            type="checkbox"
                            name="privacy-policy"
                            id="agree-terms"
                            onChange={(e) => setAgreeTerms(e.target.checked)}
                            required
                        />
                        <p>
                            I agree to <Link>terms and conditions</Link>
                        </p>
                    </div>
                    <div className="submit">
                        <button id="signup-button" onClick={handleSignUp}>
                            Sign up
                        </button>
                    </div>
                    <div className="login">
                        Already have an account? <Link to="/login">Login</Link>
                    </div>
=======
                            <div className="fname"><input type="text" placeholder="Firstname" id="fname" value={fname} onChange={(e) => setFname(e.target.value)} required /></div>
                            <div className="lname"><input type="text" placeholder="Lastname" id="lname" value={lname} onChange={(e) => setLname(e.target.value)} required /></div>
                        </div>
                        <div className="emails">
                            <div className="em"><input type="email" placeholder="Email" id="em" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
                            <div className="re-em"><input type="email" placeholder="Re-write email" id="re-em" value={reEmail} onChange={(e) => setReEmail(e.target.value)} required /></div>
                        </div>
                        <div className="passwords">
                            <div className="pwd"><input type="password" placeholder="Password" id="pwd" value={password} onChange={(e) => setPassword(e.target.value)} required /></div>
                            <div className="re-pwd"><input type="password" placeholder="Confirm password" id="re-pwd" value={rePassword} onChange={(e) => setRePassword(e.target.value)} required /></div>
                        </div>
                    </div>
                    <div className="input-other-methods">
                        <a href="google.com" className="google"><Icon icon="devicon:google" fontSize={20} /></a>
                        <a href="x.com" className="x"><Icon icon="prime:twitter" color="#000" fontSize={20} /></a>
                        <a href="linkedin.com" className="linkedin"><Icon icon="devicon:linkedin" fontSize={20} /></a>
                    </div>
                    <div className="privacy-policy">
                        <input type="checkbox" name="privacy-policy" id="agree-terms" onChange={(e) => setAgreeTerms(e.target.checked)} required /><p>I agree to <Link>terms and conditions</Link></p>
                    </div>
                    <div className="submit"><Link to="/login" id="signup-button" onClick={handleSignUp}>Sign up</Link></div>
                    <div className="login">Already have an account? <Link to="/login">Login</Link> </div>
                    {showNotification && (
                        <div
                            className="notification"
                            style={{
                                backgroundColor: notification.includes("successful") ? "rgb(143, 245, 143)" : "rgb(247, 126, 126)",
                                animation: showNotification ? 'slideDown 0.5s forwards' : 'slideUp 0.5s forwards',
                            }}
                        >
                            {notification}
                        </div>
                    )}
>>>>>>> 9b60b4c62e8b066a7229c29a723cee81212f5431
                </div>
            </div>
        </section>
    )
}

<<<<<<< HEAD
export default Register
=======
export default Register;
>>>>>>> 9b60b4c62e8b066a7229c29a723cee81212f5431
