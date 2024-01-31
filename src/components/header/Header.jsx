import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
 import ME from '../../assets/me-2.jpg'
import BG from '../../assets/bg-prin.jpg' 

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="header_des">
          <h5>Hello I'm</h5>
          <h1 className='te-blur' data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="350" data-aos-duration="2000">Vivek Kumar Gupta</h1>
          <h5 className="text-light head_des" >
            "My career objective is to utilize my skills in Frontend & Backend developement. I am motivated to learn and constantly improve my skills in order to stay updated with the latest technologies and meet the demands of the industry. I am eager to work in a challenging and dynamic environment. "</h5>
          <CTA />
        </div>
        <HeaderSocials />

     {/*    <div className="me">
          <img  src={ME}  alt="" />
        </div> */}

        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default header