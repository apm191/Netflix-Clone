import React, { useState, useEffect } from 'react';
import './Navbar.css';
import avatar from './avatar.png'

function Navbar() {

    const [show, handleShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else
            handleShow(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar)
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav_contents">
                <img className="nav_logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
                <img className="nav_avatar" src={avatar} alt="" />
            </div>

        </div>
    )
}

export default Navbar
