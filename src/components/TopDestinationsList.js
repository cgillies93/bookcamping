import React, { Component } from 'react';
import './TopDestinationsList.css';
import TopDestinationItem from './TopDestinationItem';
import campgrounds from '../campgrounds';

class TopDestinationsList extends Component {

  render() {

    return (
      <section className='top-destinations-container'>
        <h2>Popular Campgrounds</h2>
        <div className='top-destinations-list-wrapper'>
        {
          campgrounds.map(campground =>
            <TopDestinationItem
                 key={campground.id}
                 campground={campground}/>
          )
        }
        </div>
      </section>
    );
  }
}

export default TopDestinationsList;
