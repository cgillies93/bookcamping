import React from 'react';
import '../styles/CampgroundsList.css';
import CampgroundItem from './CampgroundItem';

const CampgroundsList = ({ campgrounds }) => {

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

  )


}


export default CampgroundsList;
