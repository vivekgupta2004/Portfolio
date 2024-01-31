import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/vivekgupta2004/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/vivekgupta2004" target='_blank'><BsGithub/></a>
        <a href="https://www.instagram.com/mr_varshney2004?igsh=ZGN3czduYzdobnF2" target='_blank'><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials