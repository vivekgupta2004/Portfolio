import React from 'react'
import './footer.css'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">mr_varshney2004</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer_socials">
      <a href="https://www.linkedin.com/in/vivekgupta2004/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/vivekgupta2004" target='_blank'><BsGithub/></a>
        <a href="https://www.instagram.com/mr_varshney2004?igsh=ZGN3czduYzdobnF2" target='_blank'><FaInstagram/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy;Vivek Kumar Gupta , Btech CSE-AI (2nd Year) , ABESIT</small>
      </div>
    </footer>
  )
}

export default footer