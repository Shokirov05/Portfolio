import React from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/Navbar.scss'; 

const Navbar = ({ scrolled }) => {
  return (
    <header>    
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <ul className="navbar-left">
        <li className="navbar-logo"><h3>Shokirov.M</h3></li>
      </ul>
      <ul className="navbar-center">
        <li>< NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/interview">Interview Test</NavLink></li>
      </ul>
    </nav>
    </header>
  );
};

export default Navbar;
