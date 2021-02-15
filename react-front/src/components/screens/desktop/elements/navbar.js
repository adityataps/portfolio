import React from 'react'
import "./stylesheets/navbar.css"
import { NavLink, BrowserRouter } from "react-router-dom";
import name from "../../../media/name.png"

function NavBar() {
    return (
        <div className={"nav-wrapper"}>

            <img src={name} alt={""} className={"nav-name"} />

                <div className={"nav-links"}>
                    <NavLink to={"/"} className={"nav-link"}> home </NavLink>
                    <b className={"nav-slash"}> // </b>
                    <NavLink to={"/about"} className={"nav-link"} activeClassName={"selected"}> about </NavLink>
                    <b className={"nav-slash"}> // </b>
                    <NavLink to={"/blog"} className={"nav-link"} activeClassName={"selected"}> blog </NavLink>
                    <b className={"nav-slash"}> // </b>
                    <NavLink to={"/projects"} className={"nav-link"} activeClassName={"selected"}> projects </NavLink>
                    <b className={"nav-slash"}> // </b>
                    <NavLink to={"/resume"} className={"nav-link"} activeClassName={"selected"}> résumé </NavLink>
                    <b className={"nav-slash"}> // </b>
                    <NavLink to={"/contact"} className={"nav-link"} activeClassName={"selected"}> contact </NavLink>
                </div>



        </div>
    )
}

export default NavBar