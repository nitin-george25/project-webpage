import React from 'react';
import largeImage from './images/exterior-8.jpg';
import './styles/main.scss';

const Home = () => {
  return ( 
    <div className="home" id="main">
      <div className="info">
        <p className="title">
          Looking for your dream home?
        </p>
        <p className="text-2">
          We have helped thousands of people find theirs,
          Let us help you!
        </p>
        <button id="contact"> GET IN TOUCH</button>
      </div>
      <div className="landing-image">
        <img src={largeImage} alt="Image of an apartment building"></img>
      </div>
    </div>
  );
}

export default Home;