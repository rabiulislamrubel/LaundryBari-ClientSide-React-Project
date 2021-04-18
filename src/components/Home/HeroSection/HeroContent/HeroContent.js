import React from 'react';
import './heroContent.css';

const HeroContent = () => {
  return (
    <div className='row m-0'>
      <div className='container'>
        <div className='col-md-6'>
          <div className='hero-content'>
            <div>
              <h1 className='my-4 hero-font'>
                Dirty Wash Cleaning <br /> And Laundry Services.
              </h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the ma Mority have suffered alteration in some form.
              </p>
              <button className='btn btn-primary'>TAKE YOU SERVICE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
