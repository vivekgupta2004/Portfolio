import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Sky.png'
import IMG2 from '../../assets/Tic.png'
import IMG3 from '../../assets/quiz.png'
import IMG4 from '../../assets/employee.png'
// import IMG2 from '../../assets/book-pro.png'
// import IMG3 from '../../assets/linkedin-pro.png'


import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           "y",   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const portfolio = () => {
  return (
    <section id="project" className='portfolio'>
      <h5>Here are some of my projects</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">
        <Tilt options={defaultOptions}>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1}  alt="" />
          </div>
          <h3> "SkySync "</h3>
          <p>The provided React code is an incomplete  weather application that fetches weather data from the open Weather Map API. It uses state variables, geolocation, and input search to display weather information. </p>
          <div className="portfolio_item-cta">
            <a href="https://sky-sync-six.vercel.app/" className="btn" target='_blank'>Open Web</a>
            <a href="https://github.com/vivekgupta2004/SkySync" className="btn btn-primary" target='_blank'>GitHub</a>
          </div>
        </article>
        </Tilt>
        <Tilt options={defaultOptions}>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img  src={IMG2}  alt="" />
          </div>
          <h3> "Tic Tac Toe Game"</h3>
          <p>The provided code is an HTML and JavaScript implementation of the classic game "Tic Tac Toe." It features a responsive game grid, turn-based gameplay, a reset button, and winning line animations. The styling uses CSS with a mix of fonts and responsive design for various screen sizes.</p>
          <div className="portfolio_item-cta">
            <a href="https://tic-tac-toerouge.vercel.app/" className="btn" target='_blank'>Open Web</a> 
            <a href="https://github.com/vivekgupta2004/TicTacToe" className="btn btn-primary" target='_blank'>GitHub</a>
          </div>
        </article>
        </Tilt>
        <Tilt options={defaultOptions}>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img  src={IMG3}  alt="" />
          </div>
          <h3> "Quiz-app"</h3>
          <p>A C++ quiz app is a program that challenges users with a series of questions and evaluates their responses. It employs user-friendly interfaces, interactive prompts, and utilizes basic C++ functionalities for input/output operations. The app is designed for an engaging and educational experience, promoting learning through quizzes in a simple and accessible manner.</p>
          <div className="portfolio_item-cta">
            {/* <a href="https://github.com/vivekgupta2004/Quiz-app" className="btn" target='_blank'>Open Web</a> */}
            <a href="https://github.com/vivekgupta2004/Quiz-app" className="btn btn-primary" target='_blank'>GitHub</a>
          </div>
        </article>
        </Tilt>
        <Tilt options={defaultOptions}>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img  src={IMG4}  alt="" />
          </div>
          <h3> "Employee management system"</h3>
          <p>Employee management system using C++ is a menu-driven program that allows us to add, update, delete and search records of an employee working in an organization. The program employee management system stores employee ID, name, post, department, and salary of the employee. Initially, it has no data.</p>
          <div className="portfolio_item-cta">
            {/* <a href="https://github.com/vivekgupta2004/Quiz-app" className="btn" target='_blank'>Open Web</a> */}
            <a href="https://github.com/vivekgupta2004/EmployeeManagement" className="btn btn-primary" target='_blank'>GitHub</a>
          </div>
        </article>
        </Tilt>
       
      </div>
    </section>
  )
}

export default portfolio