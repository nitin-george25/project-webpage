import React from 'react';
import './styles/main.scss';

const Footer = () => {
  return (
    <footer className="footer" id="end">
      <div className="subscribe" id="news-letter">
        <div className="text-area">
          <p className="sub-text">Be the first to hear about our new projects!</p>
          <p className="sub-info">Subscribe to Our Newsletter</p>
        </div>
        <form className="email">
          <input name="email" type="text" placeholder="Enter Your Email"></input>
        </form>
        <button id="submit-email"> Subscribe </button>
      </div>
      <div className="links">
        <ul className="link-list company-info">
          <h4 className="heading">INFORMATION</h4>
          <li className="listed">About Us</li>
          <li className="listed">Our Projects</li>
          <li className="listed">Our Values</li>
        </ul>
        
        <ul className="link-list careers">
          <h4 className="heading">Working With Us</h4>
          <li className="listed"> Our Offices </li>
          <li className="listed"> How We Work </li>
          <li className="listed"> Apply Now </li>
        </ul>

        <div className="link-list contact-now">
          <h4 className="heading">Enquire Now</h4>
          <ul className="contact-details">
            <li > Toll Free Number: 1800 249 073 </li>
            <li> Email Us: sales@dconstruct.com </li>
          </ul>
          <form class="callback">
              <input type='tel' name='number' placeholder='Contact No.' id="contact-no"></input>
          </form>
          <button id="request-call-back">Request a Call Back</button>
        </div>
      </div>
      <div className="copyright">
        <div className="logo">
          D-CONSTRUCT
        </div>
        <p> Copyright © 2021 </p>
      </div>
    </footer>
  );
}

export default Footer;
