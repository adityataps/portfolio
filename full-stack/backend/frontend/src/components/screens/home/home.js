import React, {useEffect, useState} from "react"
import "./stylesheets/home.css"
import HomeLinks, { HomeLinksMobile } from "./components/homelinks";
import HomeIcons from "./components/homeIcons";
import name from "../../media/name.png"
import HomeVid from "../../media/home-video.mp4"
import '../../../../node_modules/animate.css/animate.css'
// import {NavLink} from "react-router-dom";

function Home() {

    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const isMobile = windowSize <= 800

    const handleResize = () => {
        setWindowSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    return(

        <div className={"page"} style={{"overflow": "hidden"}}>

            <div style={{opacity: "50%"}}>
                <video className={`${isMobile ? "mobile" : ""} backgroundVideo animate__animated animate__fadeIn animate__delay-1s`}
                       src={HomeVid}
                       autoPlay={true}
                       loop={true}
                       muted={true}
                       playsInline={true}
                />
            </div>

            <img src={name} alt={"aditya tapshalkar"} className={`${isMobile ? "mobile" : ""} name animate__animated animate__fadeIn animate__delay-1s`} style={{'--animate-delay': '0.2s'}} />

            {isMobile ?
                <HomeLinksMobile /> :
                <HomeLinks />
            }

            <HomeIcons />
        </div>
    )
}

export default Home