import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './CampgroundItem.css';

class CampgroundItem extends Component {

  render() {

    const { campground } = this.props;

    return (
      <div className='campground-link-wrapper'>
        <Link to={'/campgrounds/' + campground.id}>
          <div className='campground-item-container'>
            <div className='campground-item-image-wrapper'>
            </div>
            <div className='campground-item-name'>
              <h2>{campground.name}</h2>
            </div>
            <div className='campground-item-location'>
              <p>{campground.city}</p>
              <p>{campground.province}</p>
            </div>
            <div className='campground-item-contact'>
              <p>{campground.phoneNumber}</p>
              <p href={campground.website}>{campground.website}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default CampgroundItem;
