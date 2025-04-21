import React from "react";
import "./projectcomponent.css"
export default function ProjectComponent(props){
    return (
        <div className="project-comp" onClick={() => props.onClick(props.name)}>
            <h2>{props.name}</h2>
            <h3>{props.lang}</h3>
            <p>{props.desc}</p>
            <img src={props.src} alt={props.name}/>
        </div>
    )
}