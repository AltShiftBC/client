<<<<<<< HEAD
import React, { useEffect, useState } from "react"
import "../styles/forgot.css"
import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import axios from "axios"

const Forgot = () => {
    const [email, setEmail] = useState(null)
    const navigate = useNavigate()
    useEffect(()=>{
        axios.defaults.withCredentials = true
    },[])
    async function SendRequest() {
        try {
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
                alert('Invalid email address!')
                return
              } 
    
              const {data: resetQuery} = await axios.post('http://localhost:3000/api/forgotPassword',{email: email})
    
              if(!resetQuery.status) {
                alert(resetQuery.message)
                return
              }
              navigate('/reset')
    
        } catch(e) {
            alert(e.message)
        }
    }
    

=======
import React from "react";
import "../styles/forgot.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Forgot = () => {
>>>>>>> 9b60b4c62e8b066a7229c29a723cee81212f5431
    return (
        <section className="forgot">
            <div className="form-forgot">
                <Link to="/" className="logo-icon">
                    <img src={logo} alt="" width={80} />
                </Link>
                <div className="input">
                    <div className="lemails">
<<<<<<< HEAD
                        <div className="lem"><input type="email" onInput={(event) => setEmail(event.target.value)} placeholder="Email" id="lem" /></div>
                    </div>
                    <div className="submit"><button id="signup-button" onClick={SendRequest}>Submit</button></div>
=======
                        <div className="lem"><input type="email" placeholder="Email" id="lem" /></div>
                    </div>
                    <div className="submit"><Link to="/reset" id="signup-button">Submit</Link></div>
>>>>>>> 9b60b4c62e8b066a7229c29a723cee81212f5431
                    <div className="sign-in">Remember password? <Link to="/login" style={{textDecoration:"none"}}>Login</Link></div>
                </div>
            </div>
        </section>
    )
}

<<<<<<< HEAD
export default Forgot
=======
export default Forgot;
>>>>>>> 9b60b4c62e8b066a7229c29a723cee81212f5431
