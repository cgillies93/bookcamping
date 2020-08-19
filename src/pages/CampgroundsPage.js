import React from 'react';
import CampgroundsList from '../components/ui/CampgroundsList';
import '../components/styles/CampgroundsPage.css';

const CampgroundsPage = ({query, campgrounds, onSetQuery=f=>f}) => {


  let filteredCampgrounds = campgrounds.filter(campground =>
    campground.city.toLowerCase().includes(query.toLowerCase()) ||
    campground.name.toLowerCase().includes(query.toLowerCase()) ||
    campground.province.toLowerCase().includes(query.toLowerCase()))

  console.log(filteredCampgrounds)
  console.log(query)

    return (
        <div className='campgrounds-page-container'>
            <h1>Campgrounds</h1>
            { query !== '' ?
              <div className='search-result-info'>
                <p className='search-length'>{filteredCampgrounds.length}</p>
                <p>search results for campgrounds near</p>
                <p className='search-query'>{query}</p>
                <button className='clear-query-button'
                        onClick={() => onSetQuery('')}>
                  X
                </button>
              </div>
              :
              null
            }
            <CampgroundsList query={query} campgrounds={filteredCampgrounds} />
        </div>
    )
}

export default CampgroundsPage;
