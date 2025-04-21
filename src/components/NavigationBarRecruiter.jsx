import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./navigationbar.css"

export default function NavigationBar(){
    const [navbar,setNavbar] = React.useState(false)
    const navigate = useNavigate()

    function handleLogoClick(){
        navigate('/browse/recruiter')
    }

    const  changeBackground = () => {
        window.scrollY >= 60 ? setNavbar(true) : setNavbar(false)
    }

    window.addEventListener('scroll',changeBackground)

    
    const navClassName = navbar ? "nav solid" : "nav"
    return (
        <nav className={navClassName}>
                <img src="/assets/images/logo.png" onClick={handleLogoClick} />
                <Link to='/browse'>HOME</Link>
                <Link to='/browse/recruiter/skills'>SKILLS</Link>
                <Link to='/browse/recruiter/projects'>PROJECTS</Link>
                <Link to='/browse/recruiter/hireme'>HIRE ME</Link>
        </nav>
    )
}