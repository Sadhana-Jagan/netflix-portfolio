import React from "react";
import "./backend.css"
export default function Backend(props){
    return (
        <div className="backend">
            <img src={props.src} alt={props.name} />
            <h2>{props.name}</h2>
        </div>
    )
}
