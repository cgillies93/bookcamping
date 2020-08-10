import React from 'react';
import { Link } from 'react-router-dom';

import './TopDestinationItem.css';

const TopDestinationItem = ({ campground }) => (
  <Link className='top-destination-link' to={'/campgrounds/' + campground.id}>
    <div className='top-destination-item-container'>
      <div className='top-destination-image'></div>
      <h3 className='top-destination-name'>{campground.name}</h3>
      <p className='top-destination-location'>{campground.city}</p>
      <p className='top-destination-location'>{campground.province}</p>
      <p className='top-destination-rating'>9.5</p>
    </div>
  </Link>

);

export default TopDestinationItem;
