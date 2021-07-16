import React, {useEffect, useState} from 'react'
import './stylesheets/projectContainer.css'
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";
import bgImg from "../../../media/barca-city.jpg";

function ProjectContainer(props) {

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

    const unSortedProjects = props.projects.data;
    let projects = [];

    if (unSortedProjects) {
        projects = unSortedProjects.sort((first, second) => second.finish.localeCompare(first.finish))
    }

    return (
        <div className={`${isMobile ? "mobile" : ""} projects-container`} style={{"grid-template-rows": `repeat(${projects.length - 1 || 1}, 10vh) 250px`}}>
            {projects !== [] ? projects.map((project) => (
                <a key={project.date} className={"project-link"} href={project.link} target={"_blank"}>
                    <OverlayScrollbarsComponent className={"project-cell"}>
                        <b className={"project-title"}> {project.title} </b>
                        <br />
                        <i className={"project-timeframe"}> {project.timeframe} </i>
                        <hr />
                        <p className={"project-description"}> {project.description} </p>
                    </OverlayScrollbarsComponent>
                </a>
            )): null}
        </div>
    )
}

export default ProjectContainer