import React from 'react';
import '../styles/PopularCampgroundsList.css';
import PopularCampgroundsItem from './PopularCampgroundsItem';

const PopularCampgroundsList = ({ campgrounds }) => {

    let sortedByTimesBooked = campgrounds.sort((a, b) =>  b.timesBooked - a.timesBooked)
    let popularCampgrounds = sortedByTimesBooked.slice(0, 3)

    return (
      <section className='top-destinations-container'>
        <h2>Popular Campgrounds</h2>
        <div className='top-destinations-list-wrapper'>
        {
          popularCampgrounds.map(campground =>
            <PopularCampgroundsItem
                 key={campground.id}
                 campground={campground}/>
          )
        }
        </div>
      </section>
    )
}

export default PopularCampgroundsList;
