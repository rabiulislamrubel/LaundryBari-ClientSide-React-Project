import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [notification, setNotification] = useState(false);

  const onSubmit = (data) => {
    fetch('https://obscure-tundra-49850.herokuapp.com/makeAdmin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setNotification(data));
  };

  return (
    <div className='make-admin'>
      <div className='row m-0'>
        <div className='col-md-3 p-0'>
          <Sidebar />
        </div>
        <div className='col-md-9'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
              <label className='form-label'>Email address</label>
              <input
                type='email'
                className='form-control'
                placeholder='name@example.com'
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className='text-danger'>Email is required</span>
              )}
            </div>
            <input type='submit' className='btn btn-primary' />
          </form>
          {notification && (
            <p className='text-success'>Admin is Successfully added.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
