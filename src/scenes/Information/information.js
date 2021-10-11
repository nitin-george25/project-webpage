import React, { Component } from 'react';
import './styles/main.scss';
import places from './images/undraw_best_place_r685.svg';
import projects from './images/undraw_projects.svg';
import tech from './images/undraw_Home_settings_re_pkya.svg';
import select from './images/undraw_choosing_house_v37h.svg';

const Information = () => {
  return (
    <div className="information" id="cards">
      <div className="projects info-frame">
        <div className="illustration">
          <img src={places} alt="Illustration of buildings"></img>
        </div>
        <div className="info-text">
          <h4>Places </h4>
          <p className="comment">
            Present across 5 states in the country.
          </p>
        </div>
      </div>
      <div className="places info-frame">
        <div className="illustration">
          <img src={projects} alt="Illustration of buildings"></img>
        </div>
        <div className="info-text">
          <h4>Projects </h4>
          <p className="comment">
            Over 50+ projects completed, with more coming soon.
          </p>
        </div>
      </div>
      <div className="awards info-frame">
        <div className="illustration">
          <img src={tech} alt="Illustration of buildings"></img>
        </div>
        <div className="info-text">
          <h4>Technology </h4>
          <p className="comment">
            Latest technologies used to make life convenient.
          </p>
        </div>
      </div>
      <div className="luxury info-frame">
        <div className="illustration">
          <img src={select} alt="Illustration of buildings"></img>
        </div>
        <div className="info-text">
          <h4> People </h4>
          <p className="comment">
            Choose the place that suits you best as person.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Information;
