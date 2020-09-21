import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CampgroundsPage.css';

import campgroundsData from '../../campgroundsDataP1.json';

// Components //
import CampgroundItem from '../../components/CampgroundItem/CampgroundItem';

class CampgroundsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: []
        }
    }

    componentDidMount() {
        let savedFilters = localStorage.getItem('filters');
        if(savedFilters !== null) {
            savedFilters = savedFilters.split(',')
            this.setState({
                filters: savedFilters
            })
        }

        console.log(this.refs)
    }

    handleCheckBoxChange(e) {
        var checkBox = e.target.name;
        let temp = this.state.filters;
        switch(checkBox) {
            case 'accepts-credit-cards':
                temp.includes('Accepts Credit Cards') ?
                    temp = temp.filter(filter => (
                        filter !== 'Accepts Credit Cards'
                    ))
                :
                    temp.push('Accepts Credit Cards');
                this.setState({
                    filters: temp
                });
                break;
            case 'accepts-debit-cards':
                temp.includes('Accepts Debit Cards') ?
                    temp = temp.filter(filter => (
                        filter !== 'Accepts Debit Cards'
                    ))
                :
                    temp.push('Accepts Debit Cards');
                this.setState({
                    filters: temp
                });
                break;
            case 'swimming-beach':
                temp.includes('Swimming Beach') ?
                    temp = temp.filter(filter => (
                        filter !== 'Swimming Beach'
                    ))
                :
                    temp.push('Swimming Beach');
                this.setState({
                    filters: temp
                });
                break;
            case 'boat-launch':
                temp.includes('Boat Ramp/Launch') ?
                    temp = temp.filter(filter => (
                        filter !== 'Boat Ramp/Launch'
                    ))
                :
                    temp.push('Boat Ramp/Launch');
                this.setState({
                    filters: temp
                });
                break;
            case 'fishing':
                temp.includes('Fishing') ?
                    temp = temp.filter(filter => (
                        filter !== 'Fishing'
                    ))
                :
                    temp.push('Fishing');
                this.setState({
                    filters: temp
                });
                break;
            case 'laundry':
                temp.includes('Laundry/Laundromat') ?
                    temp = temp.filter(filter => (
                        filter !== 'Laundry/Laundromat'
                    ))
                :
                    temp.push('Laundry/Laundromat');
                this.setState({
                    filters: temp
                });
                break;
            case 'boat-rental':
                temp.includes('Boat Rental') ?
                    temp = temp.filter(filter => (
                        filter !== 'Boat Rental'
                    ))
                :
                    temp.push('Boat Rental');
                this.setState({
                    filters: temp
                });
                break;
            case 'water-front':
                temp.includes('Water Front') ?
                    temp = temp.filter(filter => (
                        filter !== 'Water Front'
                    ))
                :
                    temp.push('Water Front');
                this.setState({
                    filters: temp
                });
                break;
            case 'dump-sani':
                temp.includes('Dump/Sani Station') ?
                    temp = temp.filter(filter => (
                        filter !== 'Dump/Sani Station'
                    ))
                :
                    temp.push('Dump/Sani Station');
                this.setState({
                    filters: temp
                });
                break;
            default:
                break;
        }

        localStorage.setItem('filters', this.state.filters)
    }

    clearFilters(e) {
        e.preventDefault();
        this.setState({
            filters: []
        })
        localStorage.removeItem('filters');
    }

    render() {

        let filterCampgrounds = campgroundsData.campgrounds;
        if(this.state.filters.length > 0) {
            filterCampgrounds = filterCampgrounds.filter(campground => {
                let count = 0;
                let temp = []
                for(let i = 0; i < this.state.filters.length; i++) {
                    if(campground.amenities.includes(this.state.filters[i])){
                        count++;
                    }
                    if(count === this.state.filters.length) {
                        temp.push(campground);
                    }
                }
                return temp.length;
            });
            console.log(filterCampgrounds.length)
        }


        return(
            <div className='campgrounds-page'>
                <div className='filter-campgrounds-outer'>
                    <p>Filter Campgrounds</p>
                    <div className='filter-campgrounds-inner'>
                        <div className='amenity-filter'>
                            <input name='accepts-credit-cards' type='checkbox'
                                   id='accepts-credit-cards'
                                   onChange={(e) => this.handleCheckBoxChange(e)}/>
                            <label htmlFor='accepts-credit-cards'>Accepts Credit Cards</label>
                        </div>
                        <div className='amenity-filter'>
                            <input name='accepts-debit-cards' type='checkbox'
                                   id='accepts-debit-cards'
                                   onChange={(e) => this.handleCheckBoxChange(e)}/>
                            <label htmlFor='accepts-debit-cards'>Accepts Debit Cards</label>
                        </div>
                        <div className='amenity-filter'>
                            <input name='swimming-beach' type='checkbox'
                                   id='swimming-beach'
                                   onChange={(e) => this.handleCheckBoxChange(e)}/>
                            <label htmlFor='swimming-beach'>Swimming Beach</label>
                        </div>
                        <div className='amenity-filter'>
                            <input name='boat-launch' type='checkbox'
                                   id='boat-launch'
                                   onChange={(e) => this.handleCheckBoxChange(e)}/>
                            <label htmlFor='boat-launch'>Boat Ramp/Launch</label>
                        </div>
                        <div className='amenity-filter'>
                            <input name='fishing' type='checkbox'
                                   id='fishing'
                                   onChange={(e) => this.handleCheckBoxChange(e)}/>
                            <label htmlFor='fishing'>Fishing</label>
                        </div>
                        <div className='amenity-filter'>
                            <input name='laundry' type='checkbox'
                                   id='laundry'
                                   onChange={(e) => this.handleCheckBoxChange(e)}/>
                            <label htmlFor='laundry'>Laundry/Laundromat</label>
                        </div>
                        <div className='amenity-filter'>
                            <input name='boat-rental' type='checkbox'
                                   id='boat-rental'
                                   onChange={(e) => this.handleCheckBoxChange(e)}/>
                            <label htmlFor='boat-rental'>Boat Rental</label>
                        </div>
                        <div className='amenity-filter'>
                            <input name='water-front' type='checkbox'
                                   id='water-front'
                                   onChange={(e) => this.handleCheckBoxChange(e)}/>
                            <label htmlFor='water-front'>Water Front</label>
                        </div>
                        <div className='amenity-filter'>
                            <input name='dump-sani' type='checkbox'
                                   id='dump-sani'
                                   onChange={(e) => this.handleCheckBoxChange(e)}/>
                            <label htmlFor='dump-sani'>Dump/Sani Station</label>
                        </div>
                    </div>
                    <button className='clear-filters'
                            onClick={(e) => this.clearFilters(e)}>
                        Clear Filters
                    </button>
                </div>
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
        );
    }
}

export default CampgroundsPage;
