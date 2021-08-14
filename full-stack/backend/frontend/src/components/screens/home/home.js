import React, {useEffect, useState} from "react"
import "./stylesheets/home.css"
import HomeLinks, { HomeLinksMobile } from "./components/homelinks";
import HomeIcons from "./components/homeIcons";
import name from "../../media/name.png"
// import HomeVid from "../../media/home-video.webm"
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

            <div style={{opacity: "50%", filter: "blur(4px)"}}>
                <video className={`${isMobile ? "mobile" : ""} backgroundVideo animate__animated animate__fadeIn animate__delay-1s`}
                       src={"https://tapshalkar-portfolio.s3.us-east-2.amazonaws.com/media/home-video.webm?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJGMEQCIBOttrCOHIXL79yBPRn%2B%2FYXjF11m4lLVV6JwNHnAgqDhAiA66k4aY0R7ri0M%2B9Cgj38J58gyQ%2FALSYqqWggEa8RXAyr2AgghEAAaDDgyODM1MDI1MTEwOCIMCfSiv6Tz3O9qRIbXKtMCTUXdAkJi8HnwcxcOZ4bPiGJ9h49BjzKDA%2BCF7mboh7c0Gp1Ucnjb1ecazowGLt43vK5vdFQp5QaD4d2PAu%2FetZR0O96kX2YjxCmlyBEsw0xP3LjFvlvto5RKqt1KYzeMKrByrR0toZQJOqnEtVc1laj6bScPbyuImceUfm3XUAqKb2Y9e%2BtDkkimBU1yq00IenhKVfHOH4n%2FACf9pTs29UEoJMN%2FI5KL5l28Q%2Fd2OZYXp11DLRzagArwSJg4qvtuDF0i9siv7dDYHgFeHBt4KGaqtHszbzlVD6v6DGKFOO1vVINIzolqAdfCHaztM%2BwiEuPsgbjULtTktspU0knLSc1VDKAAOYXyykVJV0S6QZfx%2B0E6GiuFd1ZgUXH7RhGK3q0fbzDJ8ssHTpk2VMLASLbTDtTvoVI%2Ft%2FPLnn9sAt3DRt3BF8o3AQK%2BFusfwlpUp7mKML%2Bs24gGOrQCEIoS886UVnMsrZGLX%2Fyj46VAb0MMPGzwPhM6m5gMHMUmbWnXT9SZIOHuc5T4Yh%2BevVgg0yHlzJJxuw4EmtJB5VzDd%2BHfSRVU5ETQyyj9FAuftcjyRJK2q5IqcO5bW6vEEqN2R0ccAEYf9BtPViqXfnRMXdk5tPv0PX6jehgJf9bql7v8V1J1YBug6KsYr7v9Pgvs303fw2YwKbpd1V5Rjv969TrwDded3yqeEfnh0w7MwSRKK8GB%2FuiFAKbkH4SC9FH%2Fm6U8QelEsYO0uN3Gn70Z9CT1ZDD%2BsdhbG6D5fzu8tmMA1wzzda%2BS05n%2B1hSAgAQNAPwFuTZhdvJWTZFb0gnFb%2FT4ZxjDWYioQVJKDeFGYtgZtbdlry2VTdGYrzScX3SQoI3RIGHv7TPjDR8ogN5aYsQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210814T002758Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4BXMFYBSKF5WBZSQ%2F20210814%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=b6c593e89b8efc872c235af6ff520c3e10894a24b64d40ff8d310e28101db934"}
                       autoPlay={true}
                       loop={true}
                       muted={true}
                       playsInline={true}
                >
                    <source type='video/webm' />
                </video>
            </div>

            {/*if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {*/}
            {/*    <img src={name} alt={"aditya tapshalkar"} className={`${isMobile ? "mobile" : ""} name animate__animated animate__fadeIn animate__delay-1s`} style={{'--animate-delay': '0.2s'}} />*/}
            {/*}*/}

            {/*{window.matchMedia('(prefers-color-scheme: light)') ?*/}
            {/*<img src={name} alt={"aditya tapshalkar"} className={`${isMobile ? "mobile" : ""} name animate__animated animate__fadeIn animate__delay-1s`} style={{'--animate-delay': '0.2s'}} />*/}
            {/*: <div />}*/}

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