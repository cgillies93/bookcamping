import React from 'react';
import PopularCampgroundsItem from './PopularCampgroundsItem';

const RecommendedForYou = ({campgrounds}) => {


  return (

    <div className='top-destinations-container'>
      <h2>Campgrounds You Might Like</h2>
      <div className='top-destinations-list-wrapper'>
      {
        campgrounds.map(campground =>
          <PopularCampgroundsItem
               key={campground.id}
               campground={campground}/>
        )
      }
      </div>
    </div>

  )
}


export default RecommendedForYou;
