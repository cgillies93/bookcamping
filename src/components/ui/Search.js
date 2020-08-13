import React from 'react';
import Autocomplete from './Autocomplete';
import { Link } from 'react-router-dom';
import '../styles/Search.css';

import campingBackground from '../../campingBackgroundCrop.jpg';

const Search = ({ query, onSetQuery=f=>f }) => {

  let _input

    return (
      <div className='search-outer-wrapper'>
        <img src={campingBackground} className='background-image'/>
        <form className='search-container'>
          <h1>Rediscover The Outdoors</h1>
          <div className='search-input-wrapper'>
            <input className='search-input'
                   ref={input => _input = input}
                   type='text'
                   placeholder='Where Are You Going?'
                   onChange={() => onSetQuery(_input.value)}
                   value={query === '' ? '' : query}
                   required
                   />
          </div>
          <div className='checkin-date-wrapper'>
            <label htmlFor='checkin'>Check-In</label>
            <input className='checkin-date' name='checkin' type='date'/>
          </div>
          <div className='checkout-date-wrapper'>
            <label htmlFor='checkout'>Check-Out</label>
            <input className='checkout-date' name='checkout' type='date'/>
          </div>
          <Link to={'/campgrounds/?search=' + query} className='search-link'>
            Search
          </Link>
        </form>
      </div>
    )
}

export default Search;
