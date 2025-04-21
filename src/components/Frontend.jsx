import React from "react";
import "./frontend.css"
export default function Frontend(props){
    return (
        <div className="frontend">
            <img src={props.src} alt={props.name} />
            <h2>{props.name}</h2>
        </div>
    )
}
