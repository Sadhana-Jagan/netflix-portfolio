import React from "react";
import { Link } from "react-router-dom";
import "./friend.css"

import { useNavigate } from 'react-router-dom';
import TopPicks from "./TopPicks";
import NavigationBar from "./NavigationBarFriend";



export default function Friend(){
    const navigate = useNavigate()
    function handleResumeButton(){
        navigate('/resume')
    }

    function handleClick(routename){
        const url = `/browse/friends/${routename}`;
        
        navigate(url)
    }

    function handleLinkedinButton(){
        window.open("https://www.linkedin.com/in/sadhana-jagan",'_blank', 'noopener,noreferrer')
    }

    return (
        <div className="friend-body">
            <NavigationBar />

            <div className="initial-gif">
                <div className="top-content">
                    
                    <h1>SADHANA JAGAN - THE OREO STEALER</h1>
                    <p>A F1 fan, “good” chess player, FANTASTIC singer and most of all, a great great friend.
                        Very “opinionated” as they say. 
                        Big tech enthusiast, an even big dreamer, and an even bigger Taylor Swift fan.</p>
                    <div className="resume-linkedin">
                        <img className = "resume" src="/assets/images/resume-linkedin/resume.png" onClick={handleResumeButton}/>
                        <button className = "linkedin" onClick={handleLinkedinButton}>
                        <img className="info-icon" src="/assets/images/info-100x100.png" />Linkedin
                        </button>
                    </div>
                </div>   
            </div>

            <div className="today-pick">
                <h1>Today's top pick for the friend</h1>
                <div className="today-top-picks">
                    <TopPicks name="Formula 1" src="/assets/images/friends/f1.gif" onClick={() => handleClick("formula1")} />
                    <TopPicks name="Chess" src="/assets/images/friends/chess.gif" onClick={() => handleClick("chess")}/>
                    <TopPicks name="Education" src="/assets/images/engineer-profile/education-anime.gif" onClick={() => handleClick("education")} />
                    <TopPicks name="Friends" src="/assets/images/friends/friends-hug.gif" onClick={() => handleClick("friends-page")} />
                    <TopPicks name="Contact me" src="/assets/images/engineer-profile/b99-contact-me.gif" onClick={() => handleClick("contactme")} />
                </div>
            </div>

            <div className="continue-watching-main">
                <h1>Continue Watching for the friend</h1>
                <div className="today-top-picks">
                    <TopPicks name="Music" src="/assets/images/engineer-profile/taylor-swift-music.gif" onClick={() => handleClick("music")} />
                    <TopPicks name="Series" src="/assets/images/engineer-profile/minions-series.gif" onClick={() => handleClick("series")} />
                    <TopPicks name="Blogs" src="/assets/images/engineer-profile/legally-blonde-blogs.gif" onClick={() => handleClick("blogs")}/>
                    
                </div>
            </div>   
        </div>
    )
}