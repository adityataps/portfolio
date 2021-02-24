import React from "react"
import "./stylesheets/home.css"
import HomeLinks from "./elements/homelinks";
import HomeIcons from "./elements/homeIcons";
import name from "../../media/name.png"
import 'animate.css'
import {NavLink} from "react-router-dom";

function Home() {
    return(
        <div className={"page"}  style={{"overflow": "hidden"}}>
            <img src={name} alt={"aditya tapshalkar"} className={"name animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '0.2s'}} />
            <HomeLinks />
            <HomeIcons />
        </div>
    )
}

export default Home