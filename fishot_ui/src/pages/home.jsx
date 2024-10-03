import React from "react";
import Sidebar from "../components/sidebar";
import DashHome from "../components/dashHome";
import "../styles/home.css"

const Home =()=>{
    
    return(
        <section className="home">
            <Sidebar/>
            <DashHome/>
        </section>
    )
}

export default Home;