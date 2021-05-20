import React from 'react'
import "./stylesheets/navbar.css"
import { NavLink, BrowserRouter } from "react-router-dom";
import name from "../../media/name.png"
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";

function NavBar() {
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

export default NavBar