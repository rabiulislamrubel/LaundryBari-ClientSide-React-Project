import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './testimonial.css';

// const testimonialDataOne = [
//   {
//     description:
//       'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quo molestias explicabo beatae recusandae numquam illum tenetur dicta et amet.',
//     name: 'Calvin Cooper',
//     location: 'Canada',
//   },
//   {
//     description:
//       'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quo molestias explicabo beatae recusandae numquam illum tenetur dicta et amet.',
//     name: 'John Sina',
//     location: 'England',
//   },
//   {
//     description:
//       'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quo molestias explicabo beatae recusandae numquam illum tenetur dicta et amet.',
//     name: 'Jahid Mollik',
//     location: 'Bangladesh',
//   },
// ];

const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    fetch('https://obscure-tundra-49850.herokuapp.com/reviewsData')
      .then((res) => res.json())
      .then((data) => setTestimonialData(data));
  }, []);

  return (
    <div className='testimonial-section'>
      <div className='row m-0'>
        <div className='col-md-12 text-center mb-4'>
          <h5 style={{ color: '#0069d9' }}>Testimonial</h5>
          <h3 style={{ fontWeight: '700' }}>THEIR SATISFACTION STORY</h3>
        </div>
      </div>
      <div className='container'>
        <div className='row m-0'>
          {testimonialData.map((testimonial) => (
            <TestimonialCard
              testimonial={testimonial}
              key={testimonial._id}
            ></TestimonialCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
