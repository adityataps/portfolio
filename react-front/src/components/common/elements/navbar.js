import React, {useEffect, useState} from 'react'
import "./stylesheets/navbar.css"
import { NavLink, BrowserRouter } from "react-router-dom";
import name from "../../media/name.png"
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";
import UseAnimations from "react-useanimations";
import menu2 from 'react-useanimations/lib/menu2'
import bgImg from "../../media/barca-city.jpg";

function NavBarDesktop() {
    return (
        <div className={"nav-wrapper"}>

            <img src={name} alt={""} className={"nav-name"} />


            <OverlayScrollbarsComponent
                options={{
                    overflowBehavior: {
                        y: "hidden",
                        // x: "scroll"
                    },
                    scrollbars : {
                        // visibility: "hidden",
                        // autoHide: "leave"
                    }
                }}
                className={"scroll-links"}
            >

                <div className={"nav-links"}>
                    <NavLink to={"/"} className={"nav-link"}> home </NavLink>
                    <b className={"nav-link"}> // </b>
                    <NavLink to={"/about"} className={"nav-link"} activeClassName={"selected"}> about </NavLink>
                    <b className={"nav-link"}> // </b>
                    <NavLink to={"/blog"} className={"nav-link blog"} activeClassName={"selected"}> blog </NavLink>
                    <b className={"nav-link"}> // </b>
                    <NavLink to={"/projects"} className={"nav-link"} activeClassName={"selected"}> projects </NavLink>
                    <b className={"nav-link"}> // </b>
                    <NavLink to={"/resume"} className={"nav-link"} activeClassName={"selected"}> résumé </NavLink>
                    <b className={"nav-link"}> // </b>
                    <NavLink to={"/contact"} className={"nav-link"} activeClassName={"selected"}> contact </NavLink>
                </div>

            </OverlayScrollbarsComponent>

        </div>
    )
}

function NavBarMobile() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    // useEffect(() => {
    //
    // })

    console.log(isOpen)
    return (
        <div>


        <div className={"nav-wrapper mobile"}>
            <img src={name} alt={""} className={"nav-name mobile"}/>

            <UseAnimations animation={menu2} size={50} color={"red"} reverse={isOpen} className={"menu-button"} onClick={() => toggleOpen()} />


        </div>
            <div className={`drawer ${isOpen ? "open" : "closed"}`}>

                {isOpen &&
                    <div className={"drawer-links-container"}>
                        <hr />
                        <NavLink to={"/"} className={`nav-link animate__animated animate__fadeIn animate__delay-1s`} style={{'--animate-delay': '0.2s'}}> home </NavLink>
                        <NavLink to={"/about"} className={"nav-link animate__animated animate__fadeIn animate__delay-1s"} activeClassName={"selected"} style={{'--animate-delay': '0.4s'}}> about </NavLink>
                        <NavLink to={"/blog"} className={"nav-link blog animate__animated animate__fadeIn animate__delay-1s"} activeClassName={"selected"} style={{'--animate-delay': '0.6s'}}> blog </NavLink>
                        <NavLink to={"/projects"} className={"nav-link animate__animated animate__fadeIn animate__delay-1s"} activeClassName={"selected"} style={{'--animate-delay': '0.8s'}}> projects </NavLink>
                        <NavLink to={"/resume"} className={"nav-link animate__animated animate__fadeIn animate__delay-1s"} activeClassName={"selected"} style={{'--animate-delay': '1.0s'}}> résumé </NavLink>
                        <NavLink to={"/contact"} className={"nav-link animate__animated animate__fadeIn animate__delay-1s"} activeClassName={"selected"} style={{'--animate-delay': '1.2s'}}> contact </NavLink>
                    </div>
                }

            </div>
        </div>
    )
}

export default function NavBar() {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const isMobile = windowSize <= 800

    const handleResize = () => {
        setWindowSize(window.innerWidth)
    }

    const imgs = [bgImg];
    useEffect(() => {
        imgs.forEach((bgImg) => {
            new Image().src = bgImg.fileName;
        })

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    return isMobile ? <NavBarMobile /> : <NavBarDesktop />

}