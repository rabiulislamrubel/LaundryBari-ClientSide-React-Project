import React from 'react';
import WorkingProcessCard from '../WorkingProcessCard/WorkingProcessCard';
import './workingProcess.css';
import booking from '../../../images/booking.png';
import collect from '../../../images/laundry-basket.png';
import tshirt from '../../../images/tshirt.png';
import delivery from '../../../images/truck.png';

const workingProcessCard = [
  {
    title: 'Book a Term',
    description: 'Nunc laoreet, mi sed fermentum fringilla, eros metus.',
    photo: booking,
    id: 101,
  },
  {
    title: 'We Collect',
    description: 'Nunc laoreet, mi sed fermentum fringilla, eros metus.',
    photo: collect,
    id: 102,
  },
  {
    title: 'We Clean',
    description: 'Nunc laoreet, mi sed fermentum fringilla, eros metus.',
    photo: tshirt,
    id: 103,
  },
  {
    title: 'We Delivery',
    description: 'Nunc laoreet, mi sed fermentum fringilla, eros metus.',
    photo: delivery,
    id: 104,
  },
];

const WorkingProcess = () => {
  return (
    <div className='working-process'>
      <div className='row m-0'>
        <div className='col-md-12 text-center mb-3'>
          <h6 style={{ color: '#0069d9' }}>Working Process</h6>
          <h2>HOW WE WORK</h2>
        </div>
      </div>
      <div className='container'>
        <div className='row m-0'>
          {workingProcessCard.map((workCard) => (
            <WorkingProcessCard
              workCard={workCard}
              key={workCard.id}
            ></WorkingProcessCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
