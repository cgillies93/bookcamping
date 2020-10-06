import React, { Component } from 'react';
import './SearchResultsPage.css';

// Components //
import CampgroundItem from '../../components/CampgroundItem/CampgroundItem';
import LoaderSpinner from '../../components/LoaderSpinner/LoaderSpinner';

const API_URI = 'http://localhost:5000';

class SearchResultsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            numResults: 0,
            query: '',
            isLoaded: false
        }
    }

    componentDidMount() {
        const query = this.props.location.state.query;
        fetch(`${API_URI}/search/${query}`)
        .then(res => res.json())
        .then(jsonResponse => {
            this.setState({
                searchResults: jsonResponse.search_results,
                numResults: jsonResponse.search_results.length,
                query: query,
                isLoaded: true
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
        );
    }

    render() {

        return(
            <div className='campgrounds-page'>
                {
                    this.state.isLoaded ?
                        <>
                        <div className='search-results-text'>
                            <h1>Search {'for '}{this.state.query}
                                {' returned'} {this.state.numResults}
                                {
                                    this.state.numResults > 1 ?
                                        ' results'
                                    :
                                        ' result'
                                }
                            </h1>
                        </div>
                        <ul>
                            {
                                this.state.searchResults.map(campground => (
                                    <CampgroundItem key={campground.id}
                                                    campground={campground}/>
                                ))
                            }
                        </ul>
                        </>
                    :
                    <LoaderSpinner />
                }
            </div>
        );
    }
}

export default SearchResultsPage;
