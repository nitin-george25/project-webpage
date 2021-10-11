import React from 'react';
import './styles/main.scss';
import logo from './images/Logo.png';

function Navbar(params) {
    return (
      <div className="navbar">
        <div className="logo">
          <h4>D-Construct</h4>
        </div>

        <a href="#main"  id="home">HOME</a>
        <a href="#cards" id="projects">PROJECTS</a>
        <a href="#end" id="about">ABOUT US</a>

        <div className="contact">
          <button id="contact-nav" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>Contact Us</button>
        </div>
      </div>
    );
}

export default Navbar;
