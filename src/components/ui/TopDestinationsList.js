import React from 'react';
import '../styles/TopDestinationsList.css';
import TopDestinationItem from './TopDestinationItem';

const TopDestinationsList = ({ campgrounds }) => {

    let sortedByTimesBooked = campgrounds.sort((a, b) =>  b.timesBooked - a.timesBooked)
    let popularCampgrounds = sortedByTimesBooked.slice(0, 3)

    return (
      <section className='top-destinations-container'>
        <h2>Popular Campgrounds</h2>
        <div className='top-destinations-list-wrapper'>
        {
          popularCampgrounds.map(campground =>
            <TopDestinationItem
                 key={campground.id}
                 campground={campground}/>
          )
        }
        </div>
      </section>
    )
}

export default TopDestinationsList;
