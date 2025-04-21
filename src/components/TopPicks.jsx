import React from "react";
import "./toppicks.css"
export default function(props){
    return (
        <div className="skill">
            <img src={props.src} alt="skill" onClick={props.onClick}/>
            <h1 onClick={props.onClick}>{props.name}</h1>
        </div>
    )
}