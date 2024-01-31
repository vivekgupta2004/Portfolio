import React from 'react'
import './about.css'
import ME from '../../assets/me-2.jpg'
import { PiAlienBold } from "react-icons/pi";
import { PiUsers } from "react-icons/pi";
import { GoProjectRoadmap } from "react-icons/go";
import { Tilt } from 'react-tilt'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const about = () => {
  return (
    <section id='about'>
      <div className='About'>

        <div className='aboutHead'>
          <h5>Get To Know</h5>
          <h2>About Me</h2>
        </div>


        <div className="container about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt="" />
            </div>
          </div>

          <div className="about_content">
            <div className="about_cards">
              <Tilt>
                <article className="about_card">
                  <PiAlienBold className='about_icon' />
                  <h5>Experince</h5>
                  <small>8+ Months Working(Indibus)</small>
                </article>
              </Tilt>

              {/*  <Tilt>
              <article className="about_card">
                <PiUsers className='about_icon' />
                <h5>Clients</h5>
                <small>273+ Happy Clients</small>
              </article>
            </Tilt> */}

              <Tilt>
                <article className="about_card">
                  <GoProjectRoadmap className='about_icon' />
                  <h5>Projects</h5>
                  <small>20+ AllDone Projects</small>
                </article>
              </Tilt>

            </div>
            <p className='text-light' data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="350" data-aos-duration="2000">I'm Vivek Kumar Gupta! It's great to hear about your academic pursuits and your learning journey in various technologies, including C, C++, HTML5, CSS, JavaScript and MERN stack. It's impressive that you are actively involved in real-world applications, particularly in your role as the deployment head at Indibus.</p>

            <a href="#contact" className='btn btn-primary'>Hire Me!!</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default about