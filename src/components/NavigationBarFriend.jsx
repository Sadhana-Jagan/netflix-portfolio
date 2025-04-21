import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./navigationbar.css"

export default function NavigationBar(){
    const [navbar,setNavbar] = React.useState(false)
    const navigate = useNavigate()

    function handleLogoClick(){
        navigate('/browse/friends')
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
                <Link to='/browse/friends/friends-page'>FRIENDS</Link>
                <Link to='/browse/friends/chess'>CHESS</Link>
                <Link to='/browse/friends/contactme'>CONTACT ME</Link>
        </nav>
    )
}