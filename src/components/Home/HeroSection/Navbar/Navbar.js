import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav>
      <div className='logo-menu'>
        <div className='logo'>
          <Link to='/' className='logo-link'>
            Laundry Bari
          </Link>
        </div>
        <div className='menu'>
          <FontAwesomeIcon icon={faBars} className='menu-bar' />
        </div>
      </div>
      <div className='main-nav'>
        <ul>
          <li>
            <Link to='' className='link'>
              Home
            </Link>
          </li>
          <li>
            <Link to='' className='link'>
              AboutUs
            </Link>
          </li>
          <li>
            <Link to='' className='link'>
              Projects
            </Link>
          </li>
          <li>
            <Link to='' className='link'>
              Contact
            </Link>
          </li>
          <li>
            <Link to='/dashboard' className='link'>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to='/login' className='link'>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
