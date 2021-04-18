import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer/Footer';
import HeroSection from '../HeroSection/HeroSection/HeroSection';
import Services from '../Services/Services/Services';
import Testimonial from '../Testimonial/Testimonial/Testimonial';
import WorkingProcess from '../WorkingProcess/WorkingProcess/WorkingProcess';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Services />
      <WorkingProcess />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
