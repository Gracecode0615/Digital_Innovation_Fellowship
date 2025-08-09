import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import phoneimg from "../assets/call.png";
import searchicon from "../assets/search.png";
import arrowicon from "../assets/arrow.png";
import "../App.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Grimo Logo" />
        </div>
        <nav className="nav-links">
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
          
            <li className={location.pathname === "/about" ? "active" : ""}>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="navbar-actions">
          <div className="call">
            <img src={phoneimg} alt="phone img" />

                <div className="call-text" >
                    <span>Call us Now</span>
                    <span>+234-701-234-5678</span>
                </div>
            </div>

        <span className="search-icon">
            <img src={searchicon} alt="search" />
        </span>

          <button className="btn-primary">
            Get in Touch
             <img src={arrowicon} alt="arrow" />
            </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
