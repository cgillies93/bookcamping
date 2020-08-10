import React, { Component } from 'react';
import getAmenity from '../amenities.js';
import './CampgroundAmenities.css';

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
