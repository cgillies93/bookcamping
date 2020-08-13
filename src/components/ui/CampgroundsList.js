import React from 'react';
import '../styles/CampgroundsList.css';
import CampgroundItem from './CampgroundItem';
import PopularCampgroundsList from './PopularCampgroundsList';
import RecommendedForYou from './RecommendedForYou';

const CampgroundsList = ({ query, campgrounds }) => {


  return (

    <div className='campgrounds-list'>
      {
        query === '' ?
        <section className=''>
          <RecommendedForYou campgrounds={campgrounds}/>
          <PopularCampgroundsList campgrounds={campgrounds}/>
        </section>
        :
          campgrounds.map(campground => (
            <div key={campground.id} className='campground-item-wrapper'>
              <CampgroundItem campground={campground}/>
            </div>
          ))

      }
      </div>

  )


}


export default CampgroundsList;
