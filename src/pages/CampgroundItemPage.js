import React, { Component } from 'react';
import CampgroundItemInfo from '../components/CampgroundItemInfo';
import CampgroundItemDescription from '../components/CampgroundItemDescription';
import CampgroundAvailability from '../components/CampgroundAvailability';
import './CampgroundItemPage.css';

import campgrounds from '../campgrounds.js';

class CampgroundItemPage extends Component {
  render() {

    const { match } = this.props;
    const id = parseInt(match.params.id);
    const campground = campgrounds.find(campground => campground.id === id);

    return (
        <div className='campground-item-page-container'>
          <section className='campground-item-images'>

          </section>
          <CampgroundItemInfo campground={campground} />
          <CampgroundItemDescription />
          <CampgroundAvailability />
        </div>
    );
  }
}

export default CampgroundItemPage;
