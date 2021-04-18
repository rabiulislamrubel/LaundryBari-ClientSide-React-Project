import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
  const [addService, setAddService] = useState({});
  const [photo, setPhoto] = useState(null);
  const [errHandle, setErrHandle] = useState('');
  const [showErr, setShowErr] = useState(false);

  const handleBlur = (e) => {
    const newAddService = { ...addService };
    newAddService[e.target.name] = e.target.value;
    setAddService(newAddService);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setPhoto(newFile);
  };

  const handleSubmit = (e) => {
    if (
      photo &&
      addService.description &&
      addService.serviceName &&
      addService.price
    ) {
      const formData = new FormData();

      formData.append('file', photo);
      formData.append('serviceName', addService.serviceName);
      formData.append('price', addService.price);
      formData.append('description', addService.description);

      fetch('https://obscure-tundra-49850.herokuapp.com/addService', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => setShowErr(data))
        .catch((error) => console.log(error));
    } else {
      setErrHandle('Fill up every input field');
    }

    e.preventDefault();
  };

  return (
    <div className='add-service'>
      <div className='row m-0'>
        <div className='col-md-3 p-0'>
          <Sidebar />{' '}
        </div>
        <div className='col-md-9'>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label className='form-label'>Service Name</label>
              <input
                type='text'
                className='form-control'
                placeholder='Service Name'
                name='serviceName'
                onBlur={handleBlur}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Service Price</label>
              <input
                type='number'
                className='form-control'
                placeholder='Service Price'
                name='price'
                onBlur={handleBlur}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Service Details</label>
              <textarea
                className='form-control'
                name='description'
                rows='3'
                onBlur={handleBlur}
              ></textarea>
            </div>
            <div className='input-group mb-3'>
              <input
                onChange={handleFileChange}
                type='file'
                className='form-control'
              />
              <label className='input-group-text'>Upload</label>
            </div>
            {!showErr ? (
              <p className='text-danger'>{errHandle}</p>
            ) : (
              <p className='text-success'>Service Uploaded Successfully.</p>
            )}
            <input type='submit' className='btn btn-primary' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
