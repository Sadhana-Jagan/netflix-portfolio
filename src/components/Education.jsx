import React from "react";
import EducationData from "../EducationData";
import EducationComponent from "./EducationComponent";
import NavigationBar from "./NavigationBarRecruiter";
import { nanoid } from "nanoid";
import "./education.css"

export default function Education(){
    const educationcomponents = EducationData.map(education => {
        return <EducationComponent  key={nanoid()} inst={education.institution} desc={education.desc} marks={education.marks} />
    })
    return (
        <div className="education-main">
            <NavigationBar />
            <h1>EDUCATION</h1>
            <div className="educations">
                {educationcomponents}
            </div>
        </div>
    )
}