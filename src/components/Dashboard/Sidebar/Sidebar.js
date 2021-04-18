import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faPlus,
  faUserPlus,
  faTasks,
  faList,
  faCartPlus,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch('https://obscure-tundra-49850.herokuapp.com/isAdmin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [loggedInUser.email]);

  return (
    <div className='sidebar'>
      <ul>
        <li>
          <Link to='/' className='link'>
            <FontAwesomeIcon icon={faHome} className='icon' />
            Home
          </Link>
        </li>

        {isAdmin && (
          <div>
            <li>
              <Link to='/orderList' className='link'>
                <FontAwesomeIcon icon={faList} className='icon' />
                Order List
              </Link>
            </li>
            <li>
              <Link to='/addService' className='link'>
                <FontAwesomeIcon icon={faPlus} className='icon' />
                Add Service
              </Link>
            </li>
            <li>
              <Link to='/makeAdmin' className='link'>
                <FontAwesomeIcon icon={faUserPlus} className='icon' />
                Make Admin
              </Link>
            </li>
            <li>
              <Link to='/manageService' className='link'>
                <FontAwesomeIcon icon={faTasks} className='icon' />
                Manage Service
              </Link>
            </li>
          </div>
        )}

        <div>
          <li>
            <Link to={'/showBook'} className='link'>
              <FontAwesomeIcon icon={faCartPlus} className='icon' />
              Book
            </Link>
          </li>
          <li>
            <Link to='/bookingList' className='link'>
              <FontAwesomeIcon icon={faList} className='icon' />
              Booking List
            </Link>
          </li>
          <li>
            <Link to='/reviews' className='link'>
              <FontAwesomeIcon icon={faCommentDots} className='icon' />
              Reviews
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
