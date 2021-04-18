import React from 'react';
import '../WorkingProcess/workingProcess.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const WorkingProcessCard = ({ workCard }) => {
  return (
    <div className='col-md-3'>
      <div className='workCard'>
        <div className='workCard-img'>
          <img src={workCard.photo} alt='' />
        </div>
        <div className='workCard-content'>
          <h5>{workCard.title}</h5>
          <p>{workCard.description}</p>
          <a href='#'>
            Get a New Touch <FontAwesomeIcon icon={faArrowRight} />{' '}
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcessCard;
