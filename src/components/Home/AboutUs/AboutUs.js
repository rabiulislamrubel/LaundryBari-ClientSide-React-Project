import React from 'react';
import aboutUs from '../../images/aboutUs-2.jpg';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <div className='row m-0'>
      <div className='col-md-6 p-0'>
        <div className='about-img'>
          <img src={aboutUs} alt='' className='img-fluid' />
        </div>
      </div>
      <div className='col-md-6'>
        <div className='about-content'>
          <h5>About Us</h5>
          <h2>
            To Provide on Time Delivery And Best <br /> Quality Laundry
            Services.
          </h2>
          <h1>SINCE 2021</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            cumque enim dignissimos reprehenderit nesciunt facilis aliquid,
            deserunt dolor earum quae. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Culpa, consectetur.
          </p>
          <ul>
            <li>Household Laundry Service</li>
            <li>Corporate Laundry Service</li>
            <li>All Ladies and Gents Item</li>
            <li>Dry Cleaning, Wash and Fold</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
