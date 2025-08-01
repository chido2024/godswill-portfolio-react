import React from 'react'
import { Link } from 'react-scroll';
import bg from "../../assets/jason.jpg"


const Intro = () => {
  return (
    <>
      <section id="intro">
        <div className="Introcontent">
          <span className="hello">Hello,</span>
          <span className="Introtext">I'm Chido </span> 
          <span className="role">Front-End Developer</span>
          <p className="Intropara">
            I'm a front-end developer based in Lagos, Nigeria.
          </p>
          <img src={bg} alt="profile" className="bg" />
          <Link to="contact" className="Introbtn" smooth={true}>
            <button className="IntroBtn">Hire Me</button>
          </Link>
        </div>
        <a href="https://chido2024.github.io/chido-portfolio/" target="_blank" rel="noopener noreferrer">
          <button className="IntroBtn">Download Resume</button>
        </a>
       
      </section>
    </>
  )
}

export default Intro