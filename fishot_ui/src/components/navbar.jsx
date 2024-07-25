import React from "react";
import "../styles/navbar.css"
import home from "../assets/icons/home.png"
import notifi from "../assets/icons/notifi.png"
import search from "../assets/icons/Search.png"

const Navbar=()=>{
    return(
        <div className="nav">
            <div id="navHome">
                <img src={home} alt="" />
                <p>Home</p>
            </div>
            <div id="navSearch">
                <div id="input">
                    <input type="text" id="search" placeholder="Search"/><img src={search} alt="" />
                </div>
                <div id="notification"><img src={notifi} alt="" /><div id="status"></div></div>
            </div>
        </div>
    )
}

export default Navbar