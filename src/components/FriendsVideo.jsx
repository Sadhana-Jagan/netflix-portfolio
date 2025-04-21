import React from "react";
import NavigationBar from "./NavigationBarFriend";

export default function FriendsVideo(){
    return (
        <div className="firends-video">
            <NavigationBar />
            <video src="/assets/images/friends/friend-video.mp4" width="1000" height="700" controls="controls" autoplay="true" />
        </div>
        
    )
}