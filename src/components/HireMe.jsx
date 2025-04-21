import React from "react";
import NavigationBar from "./NavigationBarRecruiter";
import "./hireme.css"
import { useNavigate } from "react-router-dom";

export default function HireMe(){
    const navigate = useNavigate()
    function handleLinkedin(){
        window.open("https://www.linkedin.com/in/sadhana-jagan",'_blank', 'noopener,noreferrer')
    }

    return (
        <div className="hireme-main">
            <NavigationBar />
            <div className="flex-box">
                <div className="profile-pic">
                    <img src="/assets/images/navbar/Hireme/Profile.jpeg" />
                </div>
                <div className="contact-card">
                    <h1>SADHANA JAGAN</h1>
                    <h2 className="under">Undergraduate computer science student</h2>
                    <h2 className="phone">+91 9043293403</h2>
                    <h2 className="email">sadhanajagan2004@gmail.com</h2>
                    <div className="button" onClick={handleLinkedin}>
                        <img src="/assets/images/navbar/Hireme/linkedin-logo.png" />
                        <h4>Linkedin</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}