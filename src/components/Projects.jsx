import React from "react";
import NavigationBar from "./NavigationBarRecruiter";
import ProjectData from "../ProjectsData"
import ProjectComponent from "./ProjectComponent";
import "./projects.css"
export default function Projects(){


    function handleProjectClick(name){
        const project = ProjectData.find(item => item.name === name);
        if (project?.link) {
            window.open(project.link, '_blank', 'noopener,noreferrer');
        }
    }

    const projects = ProjectData.map(project => {
        return <ProjectComponent key={project.name} name={project.name} lang={project.language} desc={project.content} src={project.imgsrc} onClick={handleProjectClick}/>
    })


    return (
        <>
        <NavigationBar />
        <div className="projects">
            {projects}
        </div>
        
        </>
    )
}