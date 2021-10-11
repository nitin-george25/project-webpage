import React from 'react'
import './styles/components/amenities.scss';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeckIcon from '@mui/icons-material/Deck';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PoolIcon from '@mui/icons-material/Pool';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import ParkIcon from '@mui/icons-material/Park';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ApartmentIcon from '@mui/icons-material/Apartment';

const Amenities = () => {
  return ( 
    <div className="amenities">
      <div className="pool amenity">
        <PoolIcon sx={{ fontSize: 45 }}></PoolIcon>
        <p className="icon-text">Swimming</p>
      </div>
      
      <div className="fitness amenity">
        <FitnessCenterIcon sx={{ fontSize: 45 }}></FitnessCenterIcon>
        <p className="icon-text">Fitness</p>
      </div>
      
      <div className="garden amenity">
        <NaturePeopleIcon sx={{ fontSize: 45 }}></NaturePeopleIcon>
        <p className="icon-text">Garden</p>
      </div>
      
      <div className="play amenity">
        <ParkIcon sx={{ fontSize: 45 }}></ParkIcon>
        <p className="icon-text">Playground</p>
      </div>
      
      <div className="squash amenity">
        <SportsTennisIcon sx={{ fontSize: 45 }}></SportsTennisIcon>
        <p className="icon-text">Squash Courts</p>
      </div>
      
      <div className="deck amenity">
        <DeckIcon sx={{ fontSize: 45 }}></DeckIcon>
        <p className="icon-text">Deck</p>
      </div>
      
      <div className="club amenity">
        <OtherHousesIcon sx={{ fontSize: 45 }}></OtherHousesIcon>
        <p className="icon-text">Club House</p>
      </div>
      
      <div className="shopping amenity">
        <StorefrontIcon sx={{ fontSize: 45 }}></StorefrontIcon>
        <p className="icon-text">Shopping</p>
      </div>
      
      <div className="walking amenity">
        <DirectionsWalkIcon sx={{ fontSize: 45 }}></DirectionsWalkIcon>
        <p className="icon-text">Walking</p>
      </div>
      
      <div className="jogging amenity">
        <DirectionsRunIcon sx={{ fontSize: 45 }}></DirectionsRunIcon>
        <p className="icon-text">Jogging</p>
      </div>
      
      <div className="cycling amenity">
        <DirectionsBikeIcon sx={{ fontSize: 45 }}></DirectionsBikeIcon>
        <p className="icon-text">Cycling</p>
      </div>
      
      <div className="wellness amenity">
        <FavoriteIcon sx={{ fontSize: 45 }}></FavoriteIcon>
        <p className="icon-text">Wellness</p>
      </div>
      
      <div className="medical amenity">
        <LocalHospitalIcon sx={{ fontSize: 45 }}></LocalHospitalIcon>
        <p className="icon-text">Medical</p>
      </div>
      
      <div className="helipad amenity">
        <ApartmentIcon sx={{ fontSize: 45 }}></ApartmentIcon>
        <p className="icon-text">Helipad</p>
      </div>
    </div>
  );
}

export default Amenities;