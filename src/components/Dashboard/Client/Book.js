import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentProcess from './PaymentProcess';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const stripePromise = loadStripe(
  'pk_test_51IgyoaSA2aPslMvELRWAEXUKfB3A6dwWDsVhF8K4Ry3XbSbgjAn3o3x2rq7loZXmeqzYnTNOO1olOiNuyrShQg5V002pjKhq8l'
);

const Book = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let { pdId } = useParams();
  const [bookData, setBookData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [shippingData, setShippingData] = useState(null);

  const onSubmit = (data) => {
    data.price = bookData.price;
    data.serviceName = bookData.serviceName;
    data.status = 'pending';
    data.email = loggedInUser.email;
    setShippingData(data);
    console.log(data);
  };

  useEffect(() => {
    if (pdId) {
      fetch(`https://obscure-tundra-49850.herokuapp.com/book/${pdId}`)
        .then((res) => res.json())
        .then((data) => setBookData(data[0]))
        .catch((err) => console.log(err));
    }
  }, [pdId]);

  return (
    <div className='book'>
      <div className='row m-0'>
        <div className='col-md-3 p-0'>
          <Sidebar />
        </div>
        <div className='col-md-9'>
          <div className='row'>
            <div
              style={{ display: shippingData ? 'none' : 'block' }}
              className='col-md-12 mb-4'
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='input-group mb-3 mt-2 p-0'>
                  <input
                    className='form-control'
                    type='text'
                    {...register('name', { required: true })}
                    placeholder='Give Your Name'
                  />
                  {errors.name && (
                    <span className='text-danger'>This field is required</span>
                  )}
                </div>
                <div className='input-group mb-3 p-0'>
                  <input
                    className='form-control'
                    type='tel'
                    {...register('phone', { required: true })}
                    placeholder='Give your phone number'
                  />
                  {errors.phone && (
                    <span className='text-danger'>This field is required</span>
                  )}
                </div>
                <div className='input-group mb-3 p-0'>
                  <input
                    className='form-control'
                    type='text'
                    {...register('address', { required: true })}
                    placeholder='Give you Address'
                  />
                  {errors.address && (
                    <span className='text-danger'>This field is required</span>
                  )}
                </div>
                <div className='row'>
                  <div className='input-group mb-3 col-md-6 '>
                    <span className='input-group-text'>Service Name</span>
                    <div className='form-control'>{bookData.serviceName}</div>
                  </div>
                  <div className='input-group mb-3 col-md-6'>
                    <span className='input-group-text'>$$$</span>
                    <div className='form-control'>{bookData.price}</div>
                  </div>
                </div>
                <input type='submit' className='btn btn-primary' />
              </form>
            </div>
          </div>
          <div className='row'>
            <div
              style={{ display: shippingData ? 'block' : 'none' }}
              className='col-md-12'
            >
              <h3 className='mb-3'>Add Card</h3>
              <Elements stripe={stripePromise}>
                <PaymentProcess shippingData={shippingData} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
