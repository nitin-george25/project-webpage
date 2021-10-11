import React from 'react';
import './styles/main.scss';
import building from './images/exterior-5.jpg';
import hall from './images/interior-2.jpg';
import kitchen  from './images/interior-3.jpg';
import pattern from './images/exterior-6.jpg';

const Gallery = () => {
  return ( 
    <div className="gallery">
      <div className="card long" id="luxury">
        <img src={building} alt="Tall Building" id="card-image"></img>
        <div className="card-text">
          <h4 className="card-title">Waterscapes</h4>
          <p className="card-info">Tall buildings overlooking backwaters.</p>
        </div>
      </div>
      <div className="card" id="club">
        <img src={hall} alt="Living Room" id="card-image"></img>
        <div className="card-text">
          <h4 className="card-title">Modular Kitchens</h4>
          <p className="card-info">Modular kitchens equipped with the best appliances.</p>
        </div>
      </div>
      <div className="card" id="kitchen">
        <img src={kitchen} alt="Kitchen" id="card-image"></img>
        <div className="card-text">
          <h4 className="card-title">Jwala Villas</h4>
          <p className="card-info">Luxurious Villas by the Lake.</p>
        </div>
      </div>
      <div className="card" id="wellness-centres">
        <img src={pattern} alt="Brick Pattern" id="card-image"></img>
        <div className="card-text">
          <h4 className="card-title">Svasa Heights</h4>
          <p className="card-info">Mordern Apartments with contemporary design.</p>          
        </div>
      </div>
    </div>
  );
}

export default Gallery;