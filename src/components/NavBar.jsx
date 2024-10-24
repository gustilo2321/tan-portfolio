import React, { useState } from 'react';
import './NavBar.css';
import logo from '../images/logo.png';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="navbar">
        <div className="navbar-logo">
        <img src={logo} alt="Ethan Logo" />
        <span>Ethan</span>
      </div>
            <div 
                className={`menu-btn ${menuOpen ? 'open' : ''}`} 
                onClick={toggleMenu}
            >
                <div className="menu-btn__burger"></div>
            </div>
            <nav className={`nav-popup ${menuOpen ? 'show' : ''}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
