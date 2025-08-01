import React from 'react'
import Navbar from "./navbar.module.css"
import { useState } from 'react';
import logo from "../../assets/chido  don.webp"
import { Link } from 'react-scroll';

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo'  width={100} />
      <div className="desktopMenu">
        <Link activeClass="Active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListitem">Home</Link>
        <Link activeClass="about" to='ski' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListitem">About</Link>
        <Link activeClass="services" to='services' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListitem">Services</Link>
        <Link activeClass="portfolio" to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListitem">Portfolio</Link>
        <Link activeClass="contact" to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListitem">Contact</Link>
      </div>
      <a href="https://chido2024.github.io/chido-portfolio/" target="_blank"></a>
      <button className="desktopMenuBtn">
        <img src="../../assets/contact.png" alt="" className="desktopMenuimg" />Contact Me</button>

      
    </nav>
  )
}

export default NavbarComponent