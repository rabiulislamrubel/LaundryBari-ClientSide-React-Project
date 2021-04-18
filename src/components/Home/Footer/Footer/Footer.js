import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from '@fortawesome/free-brands-svg-icons';
import FooterCard from '../FooterCard/FooterCard';

const Footer = () => {
  const noNamed = [
    { name: 'Argent Laundry Service', link: '/emergency' },
    { name: 'Pick Up', link: '/pickup' },
    { name: 'Home Laundry Service', link: '/personal-treatment' },
    { name: 'Shop Service', link: '/shop-service' },
    { name: 'Pick Up', link: '/pickup' },
  ];
  const ourAddress = [
    { name: 'Raod-3, Block-A, Mirpur-6, Dhaka ', link: '//google.com/map' },
    { name: 'Laundry Bari', link: '//google.com/map' },
  ];
  const oralHealth = [
    { name: 'Argent Laundry Service', link: '/emergency' },
    { name: 'Pick Up', link: '/pickup' },
    { name: 'Home Laundry Service', link: '/personal-treatment' },
    { name: 'Shop Service', link: '/shop-service' },
    { name: 'Pick Up', link: '/pickup' },
    { name: 'Pick Up', link: '/pickup' },
    { name: 'Pick Up', link: '/pickup' },
  ];
  const services = [
    { name: 'Argent Laundry Service', link: '/emergency' },
    { name: 'Pick Up', link: '/pickup' },
    { name: 'Home Laundry Service', link: '/laundry-service' },
    { name: 'Shop Service', link: '/shop-service' },
    { name: 'Pick Up', link: '/pickup' },
    { name: 'Pick Up', link: '/pickup' },
    { name: 'Pick Up', link: '/pickup' },
  ];
  return (
    <footer className='footer-area clear-both'>
      <div className='container pt-5'>
        <div className='row py-5'>
          <FooterCard key={1} menuTitle={'.'} menuItems={noNamed} />
          <FooterCard key={2} menuTitle='Services' menuItems={services} />
          <FooterCard
            key={3}
            menuTitle='Corporate Service'
            menuItems={oralHealth}
          />
          <FooterCard key={4} menuTitle='Our Address' menuItems={ourAddress}>
            <ul className='social-media list-inline'>
              <li className='list-inline-item'>
                <a href='//facebook.com'>
                  <FontAwesomeIcon
                    className='icon active-icon'
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='//google.com'>
                  <FontAwesomeIcon className='icon' icon={faGooglePlusG} />
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='//instagram.com'>
                  <FontAwesomeIcon className='icon' icon={faInstagram} />
                </a>
              </li>
            </ul>
            <div className='mt-5'>
              <h6>Call now</h6>
              <button className='btn btn-primary'>+01770100000</button>
            </div>
          </FooterCard>
        </div>
        <div className='copyRight text-center text-white'>
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
