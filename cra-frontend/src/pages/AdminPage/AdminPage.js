import React, { Component } from 'react';
import './AdminPage.css';

const API_URI = 'http://localhost:5000';

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campgrounds: [],
            isLoaded: false
        }

        this.fetchCampgrounds = this.fetchCampgrounds.bind(this);
    }

    componentDidMount() {
        this.fetchCampgrounds();
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

    render() {

        return(
            <div className='admin-page'>
                <h1>Administrator Panel</h1>
                <div className='admin-page-content'>
                    <nav className='admin-panel-nav'>
                        <ul>
                            <li>
                                <a href='#'>Dashboard</a>
                            </li>
                            <li>
                                <a href='#'>Campgrounds</a>
                            </li>
                        </ul>
                    </nav>
                    <section className='admin-glance'>
                        <div className='glance-item'>
                            <p className='bold'>{'# of Campgrounds'}</p>
                            <p>{this.state.campgrounds.length}</p>
                        </div>
                        <div className='glance-item'>
                            <p className='bold'>{'# of New Users'}</p>
                            <p>1</p>
                        </div>
                    </section>
                    <section className='top-campgrounds'>
                        <h2>Top Campgrounds</h2>
                        <ul className='top-campgrounds-list'>
                            <li className='top-campground-item'>
                                <div className='top-campground-col'>
                                    <p className='bold'>Name</p>
                                    <p>Campground Name</p>
                                </div>
                                <div className='top-campground-col'>
                                    <p className='bold'>Views</p>
                                    <p>120</p>
                                </div>
                                <div className='top-campground-col'>
                                    <p className='bold'>Shares</p>
                                    <p>43</p>
                                </div>
                                <div className='top-campground-col'>
                                    <p className='bold'>Reservations</p>
                                    <p>10</p>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        );
    }
}

export default AdminPage;
