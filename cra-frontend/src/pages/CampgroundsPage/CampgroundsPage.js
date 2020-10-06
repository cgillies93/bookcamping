import React, { Component } from 'react';
import './CampgroundsPage.css';

import amenities from '../../amenities.js';

// Components //
import CampgroundItem from '../../components/CampgroundItem/CampgroundItem';
import CampgroundsFilter from '../../components/CampgroundsFilter/CampgroundsFilter';
import LoaderSpinner from '../../components/LoaderSpinner/LoaderSpinner';

const API_URI = 'http://localhost:5000';

class CampgroundsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campgrounds: [],
            isLoaded: false,
            filters: [],
            amenityObject: {},
            amenities: []
        }

        this.fetchCampgrounds = this.fetchCampgrounds.bind(this);
        this.fetchAmenities = this.fetchAmenities.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
        this.clearFilters = this.clearFilters.bind(this);
        this.removeFilter = this.removeFilter.bind(this);
    }

    componentDidMount() {
        this.fetchCampgrounds();
        this.fetchAmenities();

        let savedFilters = localStorage.getItem('filters');
        if(savedFilters !== null && savedFilters.length > 0) {
            savedFilters = savedFilters.split(',');
            this.setState({
                filters: savedFilters
            });

            let filterCheckboxes = document.getElementsByClassName('filter-cB');
            for(let i = 0; i < filterCheckboxes.length; i++) {
                savedFilters.forEach(filter => {
                    filter = filter.replace(' ($)', '')
                    filter = filter.replace(' - ', '-');
                    filter = filter.replace(/ /g, '-');
                    filter = filter.replace('/', '-');
                    filter = filter.toLowerCase();

                    if(filterCheckboxes[i].name === filter) {
                        filterCheckboxes[i].checked = true;
                    }

                });
            }
        }


    }

    fetchCampgrounds() {
        fetch(`${API_URI}/campgrounds`)
        .then(res => res.json())
        .then(jsonResponse => {
            this.setState({
                campgrounds: jsonResponse.campgrounds,

            });
        },
        (error) => {
            this.setState({
                error
            });
        }
        );
    }

    fetchAmenities() {
        fetch(`${API_URI}/amenities`)
        .then(res => res.json())
        .then(jsonResponse => {
            let amenityObject = {};
            let temp = jsonResponse.amenities;
            temp.forEach(amenity => {
                let key = amenity.name;
                let value = amenity.name;
                value = value.replace(' ($)', '');
                value = value.replace(' - ', '-');
                value = value.replace(/ /g, '-');
                value = value.replace('/', '-');
                value = value.toLowerCase();
                amenityObject[key] = value
            })
            this.setState({
                amenities: jsonResponse.amenities,
                amenityObject: amenityObject,
                isLoaded: true
            })
        },
        (error) => {
            this.setState({
                error
            })
        }
        );
    }

    handleCheckBoxChange(e) {
        var checkBox = e.target.name;
        let temp = this.state.filters;
        for(const [key, value] of Object.entries(this.state.amenityObject)) {
            if(value === checkBox) {
                temp.includes(key) ?
                    temp = temp.filter(filter => (
                        filter !== key
                    ))
                :
                    temp.push(key)
                    this.setState({
                        filters: temp
                    });
            }

        }
        localStorage.setItem('filters', this.state.filters)
    }

    removeFilter(e) {
        e.preventDefault()
        let filterName = e.target.name;
        let checkBox = document.getElementById(filterName);
        let temp = this.state.filters;
        let amenities = this.state.amenityObject;
        let amenityKey = Object.keys(amenities).find(key => amenities[key] === filterName);

        temp = temp.filter(filter => (filter !== amenityKey));

        checkBox.checked = false;

        this.setState(
            {
                filters: temp
            }, () => localStorage.setItem('filters', this.state.filters));
    }

    clearFilters(e) {
        e.preventDefault();
        this.setState({
            filters: []
        })
        localStorage.removeItem('filters');
        let filterCheckboxes = document.getElementsByClassName('filter-cB');
        for(let i = 0; i < filterCheckboxes.length; i++) {
            filterCheckboxes[i].checked = false;
        }
    }

    render() {
        let filterCampgrounds = this.state.campgrounds;
        if(this.state.filters.length > 0) {
            filterCampgrounds = filterCampgrounds.filter(campground => {
                let count = 0;
                let temp = []
                for(let i = 0; i < this.state.filters.length; i++) {
                    campground.amenities.forEach(amenity => {
                        if(amenity.name.includes(this.state.filters[i])){
                            count++;
                        }
                        if(count === this.state.filters.length) {
                            temp.push(campground);
                        }
                    })

                }
                return temp.length;
            });
        }

        return(
            <div className='campgrounds-page-wrap'>
            {
                this.state.isLoaded ?
                <div className='campgrounds-page'>
                    <CampgroundsFilter amenities={amenities}
                                       handleCheckBoxChange={this.handleCheckBoxChange}
                                       clearFilters={this.clearFilters}
                                       filters={this.state.filters}
                                       removeFilter={this.removeFilter}/>
                    {
                        filterCampgrounds.length === 0 ?
                            <h2>{'No Results. Try Removing Some Filters'}</h2>
                        :
                            null
                    }
                    <ul>
                        {
                            filterCampgrounds.map(campground => (
                                <CampgroundItem key={campground.id}
                                                campground={campground}/>
                            ))
                        }
                    </ul>
                </div>
                :
                <LoaderSpinner />
            }
            </div>
        );
    }
}

export default CampgroundsPage;
