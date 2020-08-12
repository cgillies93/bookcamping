import React from 'react';
import CampgroundAmenities from './CampgroundAmenities';

import '../styles/CampgroundItemInfo.css';

const CampgroundItemInfo = ({ campground }) => {

    return (
      <div className='campground-item-info-container'>
        <h1>{campground.name}</h1>
        <p>{campground.location}</p>
        <div className='campground-item-info-wrapper'>
          <section className='campground-item-contact-info'>
            <h2>Contact Info</h2>
            <p>{campground.phoneNumber}</p>
            <p>{campground.website}</p>
          </section>
          <section className='campground-item-amenities-info'>
            <h2>Amenities</h2>
            <CampgroundAmenities amenities={campground.amenities} />
          </section>
        </div>
      </div>
    )
}

export default CampgroundItemInfo;
