import React from "react";
import "./educationcomponent.css"
export default function EducationComponent(props){
    return (
        <div className="education-comp">
            <h1 className="education-first-h1" dangerouslySetInnerHTML={{ __html: props.inst }}></h1>
            <h2>{props.desc}</h2>
            <h1>{props.marks}</h1>
        </div>
    )
}