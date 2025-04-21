import React from "react";
import NavigationBar from "./NavigationBarRecruiter";
import "./series.css"
import SeriesData from "../SeriesData";
import SeriesComponent from "./SeriesComponent";
import { nanoid } from "nanoid";

export default function Series(){
    const serieselements = SeriesData.map(item => {
        return <SeriesComponent key={nanoid()} name={item.name} src={item.src} link={item.link} />
    })
    return (
        <div className="series-main">
            <NavigationBar />
            <h1>SERIES THAT HAS SHAPED ME AS A PERSON</h1>
            <div className="series-all">
                {serieselements}
            </div>
            
        </div>
    )
}