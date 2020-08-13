import React, { Component } from 'react';
import CampgroundItemInfo from '../components/ui/CampgroundItemInfo';
import CampgroundItemDescription from '../components/ui/CampgroundItemDescription';
import CampgroundAvailability from '../components/ui/CampgroundAvailability';
import '../components/styles/CampgroundItemPage.css';

const CampgroundItemPage = ({ match, campgrounds }) => {
  let id = parseInt(match.params.id)
  const campground = campgrounds.find(campground => campground.id === id)

    return (
        <div className='campground-item-page-container'>
          <section className='campground-item-images'>
          </section>
          <CampgroundItemInfo campground={campground} />
          <CampgroundItemDescription />
          <CampgroundAvailability siteTypes={campground.siteTypes}/>
        </div>
    )
}

export default CampgroundItemPage;
