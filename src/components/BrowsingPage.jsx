import React from "react";
import Profile from "./Profiles"
import "./browsing.css"
import { useNavigate } from "react-router-dom";

export default function Browsing(){
    const navigate = useNavigate()
    function handleRecruiter(){
        navigate('/browse/recruiter')
    }
    function handleFriend(){
        navigate('/browse/friends')
    }
    return (
        <div className="browsing-page-container">
            <h1>WHO'S WATCHING?</h1>
            <div className="profile-flex">
                <Profile text="RECRUITER" src="/assets/images/profile-images/red.png" onClick={handleRecruiter} />
                <Profile text="FRIENDS" src="/assets/images/profile-images/blue.png" onClick={handleFriend}/>
            </div>
        </div>
    )
}