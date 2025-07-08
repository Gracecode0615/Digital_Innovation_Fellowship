import React from 'react';
import {Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "../App.css";


const Navbar = () => {
  return (
   <header className="navbar">
        <div className="logo"><img src={logo} alt="Logo" /></div>

   </header>
  )
}

export default Navbar