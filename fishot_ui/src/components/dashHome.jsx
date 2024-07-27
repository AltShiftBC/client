import React from "react";
import "../styles/dashHome.css"
import Navbar from "./navbar";
import HomeTop from "./homeTop";

const DashHome =()=>{
    return(
        <>
        <div className="dashHome">
            <Navbar/>
            <HomeTop />
        </div>
       
        </>
    )
}

export default DashHome;