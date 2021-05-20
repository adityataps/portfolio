import React from 'react'
import './stylesheets/projectContainer.css'
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";

function ProjectContainer(props) {

    const unSortedProjects = props.projects.data;
    let projects = null;

    if (unSortedProjects) {
        projects = unSortedProjects.sort((first, second) => second.finish.localeCompare(first.finish))
    }

    return (
        <div className={"projects-container"}>
            {projects !== null ? projects.map((project) => (
                <a key={project.date} className={"project-link"} href={project.link} target={"_blank"}>
                    <OverlayScrollbarsComponent className={"project-cell"}>
                        <b className={"project-title"}> {project.title} </b>
                        <i className={"project-timeframe"}> {project.timeframe} </i>
                        <p className={"project-description"}> {project.description} </p>
                    </OverlayScrollbarsComponent>
                </a>
            )): null}
        </div>
    )
}

export default ProjectContainer