import React from "react";
import NavigationBar from "./NavigationBarFriend";
import "./formula1.css"

export default function Formula1(){
    return (
        <div className="formula1-main">
            <NavigationBar />
            <h1>Favorite Driver and Circuit</h1>
            <div className="f1-comp">
                <div className="f1-comp-1">
                    <img src="/assets/images/friends/charles.JPG" />
                    <h1>Charles Leclerc</h1>
                </div>
                <div className="f1-comp-1">
                    <img src="/assets/images/friends/jeddah-circuit.png" />
                    <h1>Jeddah Saudi Arabia</h1>
                </div>
            </div>
        </div>
    )
}