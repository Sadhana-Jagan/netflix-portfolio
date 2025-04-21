import React from "react";
import './profiles.css';

export default function Profiles(props){
    
    return (
        <div className="profile-icon-container" onClick={props.onClick}>
            <img src={props.src} />
            <p>{props.text}</p>
        </div>
        
    )
}