import React from 'react'
import './stylesheets/homelinks.css'
import { NavLink } from 'react-router-dom'

function HomeLinks() {
    return(
        <div id={"browser-links"}>
            <NavLink className={"app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '1.3s'}} to={"/about"}>
                about
            </NavLink>
            <b className={"animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '1.75s', 'user-select': 'none'}}>
                //
            </b>
            <NavLink className={"app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '1.9s'}} to={"/projects"}>
                blog
            </NavLink>
            <b className={"animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '2.05s', 'user-select': 'none'}}>
                //
            </b>
            <NavLink className={"app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '2.2s'}} to={"/resume"}>
                projects
            </NavLink>
            <b className={"animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '2.35s', 'user-select': 'none'}}>
                //
            </b>
            <NavLink className={"app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '2.5s'}} to={"/contact"}>
                résumé
            </NavLink>
            <b className={"animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '2.65s', 'user-select': 'none'}}>
                //
            </b>
            <NavLink className={"app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '2.5s'}} to={"/contact"}>
                contact
            </NavLink>
        </div>
    )
}

export default HomeLinks