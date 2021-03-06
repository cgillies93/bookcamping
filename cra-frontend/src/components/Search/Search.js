import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

// Components //
import Autocomplete from '../Autocomplete/Autocomplete';

const API_URI = 'http://localhost:5000';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            val: '',
            cityNames: [],
            isLoaded: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch(`${API_URI}/cities`)
        .then(res => res.json())
        .then(jsonResponse => {
            this.setState({
                cityNames: jsonResponse.cities,
                isLoaded: true
            });
        },
        (error) => {
            this.setState({
                error,
                isLoaded: true
            })
        }
    );
    }

    handleChange(e) {
        if(e.target.name === 'search') {
            this.setState({
                query: e.target.value,
                val: e.target.value
            });
        }
    }

    handleClick(e) {
        this.setState({
            val: e.target.innerHTML,
            query: ''
        })
    }

    render() {

        return(
            <section className='search-section'>
                <form>
                    <h1>Rediscover The Outdoors</h1>
                    <div className='search-input-wrapper'>
                        <input className='search-input'
                               name='search'
                               placeholder='Where Would You Like To Go?'
                               onChange={(e) => this.handleChange(e)}
                               value={this.state.val}/>
                        {
                            this.state.query !== "" ?
                                <Autocomplete list={this.state.cityNames}
                                              query={this.state.query}
                                              handleClick={this.handleClick}/>
                                :
                                    null
                        }

                    </div>
                    <div className='checkin-date-wrapper'>
                        <label htmlFor='checkin'>Check-In</label>
                        <input className='checkin-date'
                               name='checkin'
                               type='date'/>
                    </div>
                    <div className='checkout-date-wrapper'>
                        <label htmlFor='checkout'>Check-Out</label>
                        <input className='checkout-date'
                               name='checkout'
                               type='date'/>
                    </div>
                    <Link to={{ pathname: `/campgrounds/search=${this.state.val}`,
                                state: {query: this.state.val}
                            }}>
                      Search
                    </Link>
                </form>
            </section>
        );
    }
}

export default Search;
