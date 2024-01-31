import React from 'react'
import './contact.css'
import { IoIosMailUnread } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Tilt } from 'react-tilt'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_nvo1zhh', 'template_32u8nxm', form.current, 'lFEjPMyo9fTpvkgYG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset() 
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>
        Contact
      </h2>

      <div className="container contact_container">
        <div className="contact_options">
          <Tilt>
          <article className="contact_option">
            <IoIosMailUnread  className='contact_option-icon'/>
            <h4>E-Mail</h4>
            <h5>vivekvarshney2004@gmail.com</h5>
             <a href="mailto:vivekvarshney2004@gmail.com" target='_blank'>Send Message</a>
          </article>
          </Tilt>
          <Tilt>
          <article className="contact_option">
            <FaWhatsapp  className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>mr_varshney2004</h5>
            <a href="https://wa.me/7457022422" target='_blank'>Send Message</a>
          </article>
          </Tilt>
          <Tilt>

          <article className="contact_option">
            <FaInstagram className='contact_option-icon' />
            <h4>Instagram</h4>
            <h5>mr_varshney2004</h5>
            <a href="https://www.instagram.com/mr_varshney2004?igsh=ZGN3czduYzdobnF2" target='_blank'>Send Message</a>
          </article>
          </Tilt>
        </div>

        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='from_name' placeholder='Your Full Nmae' required data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="350" data-aos-duration="2000"/>
          <input type="email" name='from_email' placeholder='Your Email' required data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="350" data-aos-duration="2000"/>
          <textarea name="message" rows="16" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact