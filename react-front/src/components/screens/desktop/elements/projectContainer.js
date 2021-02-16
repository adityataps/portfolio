import React from 'react'
import './stylesheets/projectContainer.css'

function ProjectContainer(props) {

    const unSortedProjects = props.projects.data;
    let projects = null;

    if (unSortedProjects) {
        projects = unSortedProjects.sort((first, second) => second.finish.localeCompare(first.finish))
    }

    return (
        <div className={"projects-container"}>
            {/*{console.log(projects)}*/}
            {projects !== null ? projects.map((project) => (
                <a key={project.date} className={"project-link"} href={project.link}>
                    {/*{console.log(project.finish)}*/}
                    <div className={"project-cell"}>
                        <b className={"project-title"}> {project.title} </b>
                        <i className={"project-timeframe"}> {project.timeframe} </i>
                        <p className={"project-description"}> {project.description} </p>
                    </div>
                </a>
            )): null}
        </div>
    )
}

export default ProjectContainer