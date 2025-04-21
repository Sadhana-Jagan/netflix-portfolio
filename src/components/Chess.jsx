import React from "react";
import NavigationBar from "./NavigationBarFriend";
import "./chess.css"
export default function Chess(){
    return (
        <div className="chess-main">
            <NavigationBar />
            <div className="chess-than-nav">
                <h1>My Chess Journey</h1>
                <div className="my-chess">
                    <img src="/assets/images/friends/chess/chess-1.jpeg" />
                    <img src="/assets/images/friends/chess/chess-2.jpeg" />
                    <img src="/assets/images/friends/chess/chess-3.jpeg" />
                </div>
                <h1>My Favorite Chess player</h1>
                <div className="fav-chess-section">
                    <div className="fav-chess">
                        <img src="/assets/images/friends/chess/vidit.webp" />
                        <h1>Vidit Gujrati</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}