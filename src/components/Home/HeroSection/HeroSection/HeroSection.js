import React from 'react';
import HeroContent from '../HeroContent/HeroContent';
import Navbar from '../Navbar/Navbar';
import './herosection.css';

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <Navbar />
      <HeroContent />
    </div>
  );
};

export default HeroSection;
