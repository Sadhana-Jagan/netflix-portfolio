import React from "react";
import "./database.css"
export default function Database(props){
    return (
        <div className="database">
            <img src={props.src} alt={props.name} />
            <h2>{props.name}</h2>
        </div>
    )
}
