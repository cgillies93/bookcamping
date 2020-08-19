import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CampgroundItemInfo from '../components/ui/CampgroundItemInfo';
import CampgroundItemDescription from '../components/ui/CampgroundItemDescription';
import CampgroundAvailability from '../components/ui/CampgroundAvailability';
import '../components/styles/CampgroundItemPage.css';
import campingBackground from '../campingBackgroundCrop.jpg';

const CampgroundItemPage = ({ match, campgrounds }) => {
  let id = parseInt(match.params.id)
  const campground = campgrounds.find(campground => campground.id === id)

    return (
        <div className='campground-item-page-container'>
          <section className='campground-item-images'>
            <Carousel>
              <Carousel.Item>
                <img src={campingBackground}
                     className='carousel-img'/>
              </Carousel.Item>
              <Carousel.Item>
                <img src={campingBackground}
                     className='carousel-img'/>
              </Carousel.Item>
            </Carousel>
          </section>
          <CampgroundItemInfo campground={campground} />
          <CampgroundItemDescription />
          <CampgroundAvailability siteTypes={campground.siteTypes}/>
        </div>
    )
}

export default CampgroundItemPage;
