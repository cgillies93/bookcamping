import React from 'react';
import CampgroundsList from '../components/ui/CampgroundsList';
import '../components/styles/CampgroundsPage.css';

const CampgroundsPage = ({query, campgrounds}) => {

  let filteredCampgrounds = campgrounds.filter(campground =>
    campground.city.toLowerCase().includes(query) ||
    campground.name.toLowerCase().includes(query) ||
    campground.province.toLowerCase().includes(query))

  console.log(filteredCampgrounds)
  console.log(query)

    return (
        <div className='campgrounds-page-container'>
            <h1>Campgrounds</h1>
            { query !== '' ?
              <p><strong>{filteredCampgrounds.length}</strong> search results for campgrounds near <strong>{query}</strong></p> :
              null
            }
            <CampgroundsList campgrounds={filteredCampgrounds} />
        </div>
    )
}

export default CampgroundsPage;
