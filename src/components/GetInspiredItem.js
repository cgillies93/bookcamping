import React from 'react';
import { Link } from 'react-router-dom';
import './GetInspiredItem.css';

import campingBackground from '../campingBackground.jpg';

const GetInspiredItem = ({ inspiration }) => (
  <Link to='/article'>
    <article className='get-inspired-item-container'>
       <div className='get-inspired-item-wrapper'>
         <div className='get-inspired-image-wrapper'>
          <img className='get-inspired-image' src={campingBackground} />
         </div>
         <div className='get-inspired-info-wrapper'>
          <div className='get-inspired-info'>
            <p className='get-inspired-item-name'>{inspiration.name}</p>
            <p className='get-inspired-item-description'>Article Description</p>
          </div>
         </div>
      </div>
    </article>
  </Link>
);

export default GetInspiredItem;
