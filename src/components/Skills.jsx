import React from "react";
import "./skills.css"
import { Link } from "react-router-dom";
import Backend from "./Backend.jsx"
import Database from "./Database.jsx"
import Frontend from "./Frontend.jsx"
import NavigationBar from "./NavigationBarRecruiter";


export default function Skills(){
    const [navbar,setNavbar] = React.useState(false)

    const  changeBackground = () => {
        window.scrollY >= 60 ? setNavbar(true) : setNavbar(false)
    }

    window.addEventListener('scroll',changeBackground)

    const navClassName = navbar ? "nav solid" : "nav"
    return (
        <div className="skills-main">

        <NavigationBar />
        <div className="other-than-nav">
        
        <div className="backend-comp">
            <h1 className="elements-heading">BACKEND</h1>
            <div className="backend-components">
                <Backend name="C" src="/assets/images/navbar/skills/c-48x48.png" />
                <Backend name="C++" src="/assets/images/navbar/skills/cpp-100x100.png" />
                <Backend name="Python" src="/assets/images/navbar/skills/python-100x100.png" />
                <Backend name="Java" src="/assets/images/navbar/skills/java-100x100.png" />
                <Backend name="SpringBoot" src="/assets/images/navbar/skills/spring-boot-80x80.png" />
            </div>
        </div>

        <div className="database-comp">
            <h1 className="elements-heading">DATABASES</h1>
            <div className="database-components">
                <Database name="MySQL" src="/assets/images/navbar/skills/mysql-100x100.png" />
                <Database name="PostgreSQL" src="/assets/images/navbar/skills/postgres-100x100.png" />
            </div>
        </div>

        <div className="frontend-comp">
            <h1 className="elements-heading">FRONTEND</h1>
            <div className="frontend-components">
                <Frontend name="HTML & CSS" src="/assets/images/navbar/skills/html-100x100.png" />
                <Frontend name="Javascript" src="/assets/images/navbar/skills/javascript-100x100.png" />
                <Frontend name="Typescript" src="/assets/images/navbar/skills/typescript-100x100.png" />
                <Frontend name="React" src="/assets/images/navbar/skills/react-90x90.png" />
            </div>
        </div>
        </div>


        </div>
    )
}