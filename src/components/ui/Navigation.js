import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {

    return (
      <nav className='navigation-container'>
        <div className='navigation-list-wrapper'>
          <ul className='navigation-list'>
            <NavLink exact to='/' className='navigation-link' activeClassName='nav-active'>
              <li className='navigation-list-item'>
                Home
              </li>
            </NavLink>
            <NavLink to='/campgrounds' className='navigation-link' activeClassName='nav-active'>
              <li className='navigation-list-item'>
                Campgrounds
              </li>
            </NavLink>
            <NavLink to='/contact' className='navigation-link' activeClassName='nav-active'>
              <li className='navigation-list-item'>
                Contact Us
              </li>
            </NavLink>
            <NavLink to='/account' className='navigation-link' activeClassName='nav-active'>
              <li className='navigation-list-item'>
                Account
              </li>
            </NavLink>
          </ul>
        </div>
      </nav>
    )
}

export default Navigation;
