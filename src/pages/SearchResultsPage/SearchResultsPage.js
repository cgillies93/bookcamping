import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SearchResultsPage.css';

import campgroundsData from '../../campgroundsDataP1.json';

// Components //
import CampgroundItem from '../../components/CampgroundItem/CampgroundItem';

class SearchResultsPage extends Component {

    render() {

        let campgrounds = campgroundsData.campgrounds;
        let query = this.props.location.state.query;

        let filterCampgrounds = campgrounds.filter(campground => (
            campground.address.toLowerCase().includes(query.toLowerCase()))
        )

        let numberResults = filterCampgrounds.length;

        return(
            <div className='campgrounds-page'>
                <div className='search-results-text'>
                    <h1>Search {'for'} {query} returned {numberResults} results</h1>
                </div>
                <ul>
                    {
                        filterCampgrounds.map(campground => (
                            <CampgroundItem key={campground.id}
                                            campground={campground}/>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default SearchResultsPage;
