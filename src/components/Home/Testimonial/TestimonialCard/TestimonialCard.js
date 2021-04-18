import React from 'react';
import '../Testimonial/testimonial.css';

const TestimonialCard = ({ testimonial }) => {
  // console.log(testimonial);
  return (
    <div className='col-md-4'>
      <div className='testimonial-card shadow'>
        <p>{testimonial.reviews}</p>
        <div className='client-detail'>
          <div className='client-photo'>
            <img src='' alt='' />
          </div>
          <div className='client-name-location'>
            <h6>{testimonial.name}</h6>
            <small>{testimonial.location}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
