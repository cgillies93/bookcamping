import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/TopDestinationItem.css';

const TopDestinationItem = ({ campground }) => (
  <Link className='top-destination-link' to={'/campgrounds/' + campground.id}>
    <div className='top-destination-item-container'>
      <div className='top-destination-image'></div>
      <h3 className='top-destination-name'>{campground.name}</h3>
      <p className='top-destination-location'>{campground.city}</p>
      <p className='top-destination-location'>{campground.province}</p>
      <p className='top-destination-rating'>{campground.rating.toFixed(1)}</p>
    </div>
  </Link>

);

export default TopDestinationItem;
