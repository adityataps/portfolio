import React, {useEffect, useState} from "react"
import "./stylesheets/home.css"
import HomeLinks, { HomeLinksMobile } from "./components/homelinks";
import HomeIcons from "./components/homeIcons";
import name from "../../media/name.png"
// import HomeVid from "../../media/home-video.webm"
import '../../../../node_modules/animate.css/animate.css'
import {Helmet} from "react-helmet";
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
        <main>

            <Helmet>
                <title>Aditya Tapshalkar</title>
                <meta name="description" content="My blogfolio" />

                <meta itemprop="name" content="Aditya Tapshalkar" />
                <meta itemprop="description" content="My blogfolio" />
                <meta itemprop="image" content="https://tapshalkar.xyz/static/media/me.62a387da.png" />

                <meta property="og:url" content="https://tapshalkar.xyz/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Aditya Tapshalkar" />
                <meta property="og:description" content="My blogfolio" />
                <meta property="og:image" content="https://tapshalkar.xyz/static/media/me.62a387da.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Aditya Tapshalkar" />
                <meta name="twitter:description" content="My blogfolio" />
                <meta name="twitter:image" content="https://tapshalkar.xyz/static/media/me.62a387da.png" />
            </Helmet>

            <div className={"page"} style={{"overflow": "hidden"}}>

                <div style={{opacity: "50%", filter: "blur(4px)"}}>
                    <video className={`${isMobile ? "mobile" : ""} backgroundVideo animate__animated animate__fadeIn animate__delay-1s`}
                           src={"https://tapshalkar-portfolio.s3.us-east-2.amazonaws.com/media/home-video.webm"}
                           autoPlay={true}
                           loop={true}
                           muted={true}
                           playsInline={true}
                    >
                        <source type='video/webm' />
                    </video>
                </div>

                <img src={name} alt={"aditya tapshalkar"} className={`${isMobile ? "mobile" : ""} name animate__animated animate__fadeIn animate__delay-1s`} style={{'--animate-delay': '0.2s'}} />

                {isMobile ?
                    <HomeLinksMobile /> :
                    <HomeLinks />
                }

                <HomeIcons />
            </div>
        </main>
    )
}

export default Home