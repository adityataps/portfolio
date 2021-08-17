import React from 'react'
import './stylesheets/homelinks.css'
import { NavLink } from 'react-router-dom'
import "../../../../../node_modules/animate.css/animate.css"
import ResumeLink from "../../resume/components/Resume.pdf"

function HomeLinks() {
    return(
        <div className={"browser-links"}>
            <NavLink className={"app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '1.6s'}} to={"/about"}>
                about
            </NavLink>
            <b className={"animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '1.75s', 'user-select': 'none'}}>
                //
            </b>
            <NavLink className={"app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '1.9s'}} to={"/blog"}>
                blog
            </NavLink>
            <b className={"animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '2.05s', 'user-select': 'none'}}>
                //
            </b>
            <NavLink className={"app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '2.2s'}} to={"/projects"}>
                projects
            </NavLink>
            <b className={"animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '2.35s', 'user-select': 'none'}}>
                //
            </b>
            <NavLink className={"app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '2.5s'}} to={"/resume"}>
                résumé
            </NavLink>
            <b className={"animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '2.65s', 'user-select': 'none'}}>
                //
            </b>
            <NavLink className={"app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '2.8s'}} to={"/contact"}>
                contact
            </NavLink>
        </div>
    )
}

export function HomeLinksMobile() {
    return(
        <div className={"mobile browser-links"}>
            <NavLink className={"mobile app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '1.6s'}} to={"/about"}>
                about
            </NavLink>
            <br className={"mobile-br"}/>
            <NavLink className={"mobile app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '1.9s'}} to={"/blog"}>
                blog
            </NavLink>
            <br className={"mobile-br"}/>
            <NavLink className={"mobile app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '2.2s'}} to={"/projects"}>
                projects
            </NavLink>
            <br className={"mobile-br"}/>
            <NavLink className={"mobile app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '2.5s'}} to={ResumeLink} target={"_blank"}>
                résumé
            </NavLink>
            <br className={"mobile-br"}/>
            <NavLink className={"mobile app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '2.8s'}} to={"/contact"}>
                contact
            </NavLink>
        </div>
    )
}

export default HomeLinks