import React from "react";
import "./recruiter.css"
import { useNavigate } from 'react-router-dom';
import TopPicks from "./TopPicks";
import NavigationBar from "./NavigationBarRecruiter";



export default function Recruiter(){
    
    const navigate = useNavigate()

    function handleClick(routename){
        const url = `/browse/recruiter/${routename}`;
        
        navigate(url)
    }

    function handleResumeButton(){
        navigate('/resume')
    }

    function handleLinkedinButton(){
        window.open("https://www.linkedin.com/in/sadhana-jagan",'_blank', 'noopener,noreferrer')
    }
    return (
        <>
            <NavigationBar />
            <div className="initial-gif">
                <div className="top-content">
                    
                    <h1>SADHANA JAGAN - Undergrad Student at SASTRA University</h1>
                    <p>Ambitious and adaptable, I am a quick learner and up for challenges and new learning opportunities.
                    I'm always ready to add new skills to my repertoire. I thrive on solving complex problems to create 
                    efficient solutions. As a fresher in the industry, I am always motivated to gain knowledge and grow 
                    myself.</p>
                    <div className="resume-linkedin">
                        <img className = "resume" src="/assets/images/resume-linkedin/resume.png" onClick={handleResumeButton}/>
                        <button className = "linkedin" onClick={handleLinkedinButton}>
                        <img className="info-icon" src="/assets/images/info-100x100.png" />Linkedin
                        </button>
                    </div>
                </div>   
            </div>

            <div className="today-pick">
                <h1>Today's top pick for the recruiter</h1>
                <div className="today-top-picks">
                    <TopPicks name="Skills" src="/assets/images/engineer-profile/breaking-bad.avif" onClick={() => handleClick("skills")}/>
                    <TopPicks name="Certifications" src="/assets/images/engineer-profile/gilmore-girls-certifications.gif" onClick={() => handleClick("certificates")}/>
                    <TopPicks name="Education" src="/assets/images/engineer-profile/education-anime.gif" onClick={() => handleClick("education")} />
                    <TopPicks name="Projects" src="/assets/images/engineer-profile/simpson-projects.gif" onClick={() => handleClick("projects")}/>
                    <TopPicks name="Contact me" src="/assets/images/engineer-profile/b99-contact-me.gif" onClick={() => handleClick("hireme")}/>
                </div>
            </div>

            <div className="continue-watching-main">
                <h1>Continue watching for the recruiter</h1>
                <div className="today-top-picks">
                    <TopPicks name="Music" src="/assets/images/engineer-profile/taylor-swift-music.gif" onClick={() => handleClick("music")}/>
                    <TopPicks name="Series" src="/assets/images/engineer-profile/minions-series.gif" onClick={() => handleClick("series")}/>
                    <TopPicks name="Blogs" src="/assets/images/engineer-profile/legally-blonde-blogs.gif" onClick={() => handleClick("blogs")}/>
                    
                </div>
            </div>   
        </>
    )
}