import React , { Component } from 'react';
import './Search.css';

import campingBackground from '../campingBackgroundCrop.jpg';

class Search extends Component {

  render() {

    return (
      <div className='search-outer-wrapper'>
        <img src={campingBackground} className='background-image'/>
        <div className='search-container'>
          <h1>Rediscover The Outdoors</h1>
          <div className='search-input-wrapper'>
            <input className='search-input'
                   type='text' placeholder='Where Are You Going?'/>
          </div>
          <div className='checkin-date-wrapper'>
            <label htmlFor='checkin'>Check-In</label>
            <input className='checkin-date' name='checkin' type='date'/>
          </div>
          <div className='checkout-date-wrapper'>
            <label htmlFor='checkout'>Check-Out</label>
            <input className='checkout-date' name='checkout' type='date'/>
          </div>
          <button className='search-button'>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
