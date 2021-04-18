import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const Reviews = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch('https://obscure-tundra-49850.herokuapp.com/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className='reviews'>
      <div className='row m-0'>
        <div className='col-md-3 p-0'>
          <Sidebar />
        </div>
        <div className='col-md-9'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
              <label className='form-label'>Name</label>
              <input
                type='text'
                className='form-control'
                placeholder='Your Name'
                {...register('name', { required: true })}
              />
              {errors.name && 'Your Name is required'}
            </div>
            <div className='mb-3'>
              <label className='form-label'>Location</label>
              <input
                type='text'
                className='form-control'
                placeholder='Location'
                {...register('location', { required: true })}
              />
              {errors.location && 'Your Location is required'}
            </div>
            <div className='mb-3'>
              <label className='form-label'>Give Your Feedback</label>
              <textarea
                className='form-control'
                {...register('reviews', { required: true })}
                rows='3'
              ></textarea>
              {errors.reviews && 'Your Reviews is required'}
            </div>
            <input type='submit' className='btn btn-primary' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
