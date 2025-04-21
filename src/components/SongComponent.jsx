import React from "react";
import "./songcomponent.css"

export default function SongComponent(props){

    function handleImgClick(link){
        window.open(link,'_blank', 'noopener,noreferrer')
    }
    return (
        <div className="song-comp">
            <img src={props.src} onClick={() => handleImgClick(props.link)}/>
        </div>
    )
}