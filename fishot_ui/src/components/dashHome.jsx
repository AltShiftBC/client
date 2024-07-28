import React from "react";
import "../styles/dashHome.css"
import Navbar from "./navbar";
import HomeTop from "./homeTop";
import HomeBottom from "./homeBottom";

const DashHome =()=>{
    return(
        <>
        <div className="dashHome">
            <Navbar/>
            <HomeTop />
            <HomeBottom />
        </div>
       
        </>
    )
}

export default DashHome;