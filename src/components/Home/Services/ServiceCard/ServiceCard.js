import React from 'react';
import { useHistory } from 'react-router';
import './serviceCard.css';

const ServiceCard = ({ service }) => {
  const history = useHistory();
  const handleCollectId = () => {
    history.push(`/book/${service._id}`);
  };

  return (
    <div className='col-md-4'>
      <div className='service-card shadow'>
        <div className='service-img'>
          {/* image is not work for this reason Request Header Fields Too Large */}
          {/* <img src={service.image.img} alt='' className='img-fluid' /> */}
        </div>
        <div className='service-content'>
          <h5>{service.serviceName}</h5>
          <p>{service.description}</p>
          <div className='price-btn'>
            <h4>${service.price}</h4>
            <button className='btn btn-primary' onClick={handleCollectId}>
              Place Your Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
