import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import "../styles/login.css"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [uniqueId, setUniqueId] = useState('')
  const navigate = useNavigate()

  useEffect(()=> {
    axios.defaults.withCredentials = true
  },[])

  const handleLogin = async (e) => {
    e.preventDefault()
    if (!email || !password || !uniqueId) {
      alert('Please fill in all fields!')
      
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      alert('Invalid email address!')

    } else if (password.length < 8) {
      alert('Password must be at least 8 characters long!')

    } else if (uniqueId.length !== 8) {
      alert('Unique ID must be 8 characters long!')
      
    } else {
      const UserData = {
        email: email,
        password: password,
        uniqueId: uniqueId
      }

      const {data: login} = await axios.post('http://localhost:3000/api/login',UserData)

      if(login.status === true) {
        alert(login.message)
        setTimeout(()=> {
          navigate('/home')
        },1000)
      }else {
        alert(login.message)
      }

    }
  }



// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [uniqueId, setUniqueId] = useState('');
//   const [notification, setNotification] = useState('');
//   const [showNotification, setShowNotification] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (!email || !password || !uniqueId) {
//       setNotification('Please fill in all fields!');
//       setShowNotification(true);
//       setTimeout(() => {
//         setShowNotification(false);
//       }, 2000);
//     } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
//       setNotification('Invalid email address!');
//       setShowNotification(true);
//       setTimeout(() => {
//         setShowNotification(false);
//       }, 2000);
//     } else if (password.length < 8) {
//       setNotification('Password must be at least 8 characters long!');
//       setShowNotification(true);
//       setTimeout(() => {
//         setShowNotification(false);
//       }, 2000);
//     } else if (uniqueId.length !== 8) {
//       setNotification('Unique ID must be 8 characters long!');
//       setShowNotification(true);
//       setTimeout(() => {
//         setShowNotification(false);
//       }, 2000);
//     } else {
//       navigate('/home', { replace: true });
//       setNotification('Login successful!');
//       setShowNotification(true);
//       setTimeout(() => {
//         setShowNotification(false);
//       }, 2000);
//     }
//   };


  return (
    <section className="register">
      <div className="form-register">
        <Link to="/" className="logo-icon">
          <img src={logo} alt="" width={80} />
        </Link>
        <div className="input">
          <div className="input-containers">
            <div className="lemails">
              <div className="lem"><input type="email" placeholder="Email" id="lem" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
            </div>
            <div className="lpasswords">
              <div className="lpwd"><input type="password" placeholder="Password" id="lpwd" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
              <Link className="forgot-password" to="/forgot" style={{ textDecoration: "none", fontSize: "13px" }}>Forgot password</Link>
            </div>
            <div className="lunique-id">
              <div className="lid"><input type="text" placeholder="Unique id" id="lid" value={uniqueId} onChange={(e) => setUniqueId(e.target.value)} /></div>
            </div>
          </div>
          <div className="input-other-methods">
            <a href="google.com" className="google"><Icon icon="devicon:google" fontSize={20}/></a>
            <a href="x.com" className="x"><Icon icon="prime:twitter" color="#000" fontSize={20}/></a>
            <a href="linkedin.com" className="linkedin"><Icon icon="devicon:linkedin" fontSize={20}/></a>
          </div>
          <div className="submit"><Link to="/home" id="signup-button" onClick={handleLogin}>Sign in</Link></div>
          <div className="login">Create a new account <Link to="/register">Sign up</Link> </div>
        </div>
      </div>

      
    </section>
  )
}



export default Login;

