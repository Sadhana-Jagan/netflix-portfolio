import React from "react";
import "./certificatecomponent.css"
export default function CertificateComponent(props){

    function handleCredentialsButton(link){
        window.open(link,'_blank', 'noopener,noreferrer')
    }

    return (
        <div className="certificate-comp">
            <img src={props.imgsrc} alt={props.name} />
            <button onClick={() => handleCredentialsButton(props.link)}>VIEW CREDENTIALS</button>
            <h2>{props.name}</h2>
        </div>
    )
}