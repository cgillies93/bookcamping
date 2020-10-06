import React, { Component } from 'react';
import FilterCheckBox from './FilterCheckBox';
import FilterItem from './FilterItem';
import './CampgroundsFilter.css';

class CampgroundsFilter extends Component {
    constructor(props) {
        super(props);

        this.state ={
            showFilters: false
        }

        this.showFilters = this.showFilters.bind(this);
    }

    showFilters(e) {
        e.preventDefault();
        this.setState({
            showFilters: !this.state.showFilters
        })

    }

    render() {

        const { amenities } = this.props;

        return(
            <div className='filter-campgrounds-outer'>
                <p>Filter Campgrounds</p>
                <button className='show-hide-filters'
                        onClick={(e) => this.showFilters(e)}>
                        {
                            this.state.showFilters ?
                                "Hide Filters"
                            :
                                "Show Filters"
                        }
                </button>
                <div className={'filter-campgrounds-inner ' +
                                (this.state.showFilters ? '' : 'hide')}>
                    {
                        amenities.map((amenity, ind) => (
                            <FilterCheckBox key={ind} amenity={amenity}
                                            handleCheckBoxChange={this.props.handleCheckBoxChange}/>
                        ))

                    }

                </div>
                    <button className={'clear-filters ' +
                                       (this.state.showFilters ? '' : 'hide')}
                            onClick={(e) => this.props.clearFilters(e)}>
                        Clear Filters
                    </button>
                    <div className='current-filters-wrap'>
                        {
                            this.props.filters.map((filter, ind) => (
                                <FilterItem key={ind}
                                            filter={filter}
                                            removeFilter={this.props.removeFilter}/>
                            ))
                        }
                    </div>

            </div>

        )
    }
}

export default CampgroundsFilter;
