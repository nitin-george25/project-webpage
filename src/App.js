import React from 'react';
import './App.css';
import Navbar from './scenes/Navbar/navbar';
import Home from './scenes/Home/home';
import './styles/main.scss';
import Information from './scenes/Information/information';
import Gallery from './scenes/Amenities/gallery';
import Amenities from './scenes/Amenities/amneties';
import Footer from './scenes/Footer/footer';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Home></Home>
      <Information></Information>
      <Gallery></Gallery>
      <Amenities></Amenities>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
