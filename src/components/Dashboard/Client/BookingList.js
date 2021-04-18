import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
  const [bookingList, setBookingList] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(
      'https://obscure-tundra-49850.herokuapp.com/bookingList?email=' +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setBookingList(data));
  }, [loggedInUser.email]);

  return (
    <div className='booking-list'>
      <div className='row m-0'>
        <div className='col-md-3 p-0'>
          <Sidebar />
        </div>
        <div className='col-md-9'>
          <div className='row'>
            {bookingList.map((book) => (
              <div className='col-md-6 shadow p-3 m-2'>
                <h3>{book.serviceName}</h3>
                <span className='p-1 bg-primary text-white'>{book.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
