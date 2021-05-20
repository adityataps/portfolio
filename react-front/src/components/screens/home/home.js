import React from "react"
import "./stylesheets/home.css"
import HomeLinks from "./components/homelinks";
import HomeIcons from "./components/homeIcons";
import name from "../../media/name.png"
import HomeVid from "../../media/home-video.mp4"
import '../../../../node_modules/animate.css/animate.css'
import {NavLink} from "react-router-dom";

function Home() {
    return(
        <div className={"page"} style={{"overflow": "hidden"}}>

            <div style={{"object-fit": "cover"}}>
                <video className={"backgroundVideo animate__animated animate__fadeIn animate__delay-1s"}
                       src={HomeVid}
                       autoPlay={true}
                       loop={true}
                       muted={true}
                />
            </div>


            <img src={name} alt={"aditya tapshalkar"} className={"name animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '0.2s'}} />
            <HomeLinks />
            <HomeIcons />
        </div>
    )
}

export default Home