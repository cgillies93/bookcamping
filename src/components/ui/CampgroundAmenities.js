import React from 'react';
import getAmenity from '../../amenities.js';
import '../styles/CampgroundAmenities.css';

const CampgroundAmenities = ({ amenities }) => (
  <div className='campground-amenities-list'>
    {
      amenities.map((amenity, num) => (
        <p key={num}>{amenity}</p>
      ))
    }
  </div>

);


export default CampgroundAmenities;
