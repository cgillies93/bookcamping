import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

import Navigation from './Navigation';
import logo from '../../campingLogo.png';

const Header = () => {

    return (
      <header className='header-container'>
        <div className='header-wrapper'>
        <Link to='/'>
          <div className='logo'>
            <img src={logo} />
          </div>
        </Link>
        <Navigation />
        </div>
      </header>
    )
}

export default Header;
