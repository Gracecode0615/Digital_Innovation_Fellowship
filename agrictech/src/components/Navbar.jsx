import React from 'react';
import {Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import call from "../assets/call.png";
import arrow from "../assets/arrow.png"
import herohome from "../assets/herohome.png"; 

import "../App.css";


const Navbar = () => {
    const location = useLocation();

  return (
   <header>
        <div className='top-header'>
            <div className="logo"><img src={logo} alt="Logo" /></div>

        <nav>
            <ul className="nav-links">
                <li className={location.pathname === "/" ? "active" : ""}>
                <Link to="/">Home</Link>
                </li>

                <li className={location.pathname === "/about" ? "active" : ""}>
                <Link to="/about">About</Link>
                </li>


                <li className={location.pathname === "/services" ? "active" : ""}>
                <Link to="/services">Services</Link>
            </li>

            <li className={location.pathname === "/blog" ? "active" : ""}>
                <Link to="/blog">Blog</Link>
            </li>

            <li className={location.pathname === "/contact" ? "active" : ""}>
                <Link to="/contact">Contact</Link>
            </li>

            </ul>
        </nav>

        <div className='support'>
            <img src={call} alt="call-icon" />
            <div className='support-write-up'>
                <p>Call us Now</p>
                <p>+2347038290672</p>
            </div>
        </div>

        <div className='get-in-touch'>
            <span>Get in Touch</span>
            <img src={arrow} alt="arrow" />
        </div>
        </div>

        <div className='heroSection'>
            <div className="hero-text">
        <h1>Empowering Farmers, Feeding Nations</h1>
        <p>
          Welcome to AgroWorld — delivering agricultural solutions that grow
          prosperity from the soil up.
        </p>
        <button className="btn-primary">Get Started</button>
      </div>
      {/* <div className="hero-image">
        <img src={herohome} alt="Farming technology" />
        </div> */}
        </div>

   </header>
  )
}

export default Navbar