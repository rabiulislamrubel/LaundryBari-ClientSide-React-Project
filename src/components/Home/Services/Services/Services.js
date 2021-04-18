import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './services.css';

// import household from '../../../images/household.jpg';
// import corporate from '../../../images/corporate.jpg';
// import ladiesAndGents from '../../../images/ladiesandgents.jpg';
// const servicesDataOne = [
//   {
//     title: 'Household Laundry Service',
//     photo: household,
//     description:
//       'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, consectetur.',
//     price: 99,
//   },
//   {
//     title: 'Corporate Laundry Service',
//     photo: corporate,
//     description:
//       'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, consectetur.',
//     price: 78,
//   },
//   {
//     title: 'All Ladies and Gents Item',
//     photo: ladiesAndGents,
//     description:
//       'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, consectetur.',
//     price: 121,
//   },
// ];

const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    fetch('https://obscure-tundra-49850.herokuapp.com/service')
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);
  return (
    <div className='row m-0'>
      <div className='col-md-12'>
        <div className='row'>
          <div className='col text-center'>
            <div className='service-head'>
              <h5>Our Services</h5>
              <h2>We provide our best Services to Satisfied You.</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-12'>
        <div className='container mb-5'>
          <div className='row m-0'>
            {serviceData.map((service) => (
              <ServiceCard service={service} key={service._id}></ServiceCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
