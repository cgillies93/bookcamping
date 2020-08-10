import React, { Component } from 'react';

import './CampgroundsList.css';

import CampgroundItem from '../components/CampgroundItem';
import campgrounds from '../campgrounds.js';

class CampgroundsList extends Component {

  render() {

    return (
      <section className='campgrounds-list'>
        <h1>Campgrounds</h1>
        {
          campgrounds.map(campground => (
            <div key={campground.id} className='campground-item-wrapper'>
              <CampgroundItem campground={campground}/>
            </div>
          ))
        }
        </section>
    );
  }
}

export default CampgroundsList;
