import React from "react";
import NavigationBar from "./NavigationBarRecruiter";
import CertificatesData from "../CertificatesData";
import CertificateComponent from "./CertificateComponent";
import "./certificates.css"
export default function Certificates(){
    const certificateselements = CertificatesData.map(certificate => {
        return <CertificateComponent name={certificate.name} imgsrc={certificate.src} link={certificate.link} />
    })
    return (
        <div className="certificates-main">
            <NavigationBar />
            <h1>CERTIFICATIONS</h1>
            <div className="certificates">
                {certificateselements}
            </div>
        </div>
    )
}