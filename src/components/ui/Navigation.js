import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {

    return (
      <nav className='navigation-container'>
        <div className='navigation-list-wrapper'>
          <ul className='navigation-list'>
            <Link to='/' className='navigation-link'>
              <li className='navigation-list-item'>
                Home
              </li>
            </Link>
            <Link to='/campgrounds' className='navigation-link'>
              <li className='navigation-list-item'>
                Campgrounds
              </li>
            </Link>
            <Link to='/contact' className='navigation-link'>
              <li className='navigation-list-item'>
                Contact Us
              </li>
            </Link>
            <Link to='/account' className='navigation-link'>
              <li className='navigation-list-item'>
                Account
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    )
}

export default Navigation;
