import React from "react";
import NavigationBar from "./NavigationBarRecruiter";
import SongsData from "../SongsData";
import SongComponent from "./SongComponent";
import "./songs.css"

export default function Songs(){
    const songelements = SongsData.map(item => {
        return <SongComponent src={item.src} link={item.link} />
    })
    return (
        <div className="songs-main">
            <NavigationBar />
            <h1>MUSIC THAT HAS INSPIRED ME IN THIS JOURNEY</h1>
            <div className="songs">
                {songelements}
            </div>
        </div>
    )
}