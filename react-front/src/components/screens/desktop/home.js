import React from "react"
import "./stylesheets/home.css"
import HomeLinks from "./elements/homelinks";
import name from "../../media/name.png"

function Home() {
    return(
        <div>
            <img src={name} alt={"aditya tapshalkar"} className={"name"} />
            <HomeLinks />
        </div>
    )
}

export default Home