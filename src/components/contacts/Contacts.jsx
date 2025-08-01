import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { Link } from 'react-scroll';

 


const Contacts = () => {
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactsTitle">My Clients</h1>
        <p className="contactsPara">We have worked with a wide range of clients, from small businesses to large enterprises.</p>
        <div className="clientImg">
        </div>
      </div>
      <div id="contactForm">
        <h1 className="contactsTitle">Contact Me</h1>
        <p className="contactsPara">We would love to hear from you. Please feel free to contact us using the form below.</p>  
        <div className="contactForm">
          <input type="text" placeholder="Name" className='nane' />
          <input type="email" placeholder="Email" className='email' />
          <textarea className='contactMessage' name="your message" placeholder="Message" rows="5" cols="33" />
          <button type='submit' value={"Send"} className='summitBtn'>Submit</button>
          
          <a href="tel:+2348152244713" target="_blank" rel="noopener noreferrer"><FaPhone /></a>
          <a href="https://www.facebook.com/profile.php?id=100051446195669" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://x.com/barnabaschidi88" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/chidi-barnabas/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Chido2024" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:your.chidogodswill05@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
          {/* <a href="https://www.chidogodswill.com/" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a> */}
        </div>
      </div>
    </section>
  )
}

export default Contacts