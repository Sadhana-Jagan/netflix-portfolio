import React from "react";
import "./seriescomponent.css"

export default function SeriesComponent(props){

    function handleSeriesClick(link){
        window.open(link,'_blank', 'noopener,noreferrer')
    }
    return(
        <div className="series-comp" onClick={() => handleSeriesClick(props.link)}>
            <img src={props.src} />
            <h2>{props.name}</h2>
        </div>
    )
}