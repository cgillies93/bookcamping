import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Popular.css';

class Popular extends Component {

    render() {

        return(
            <section className='popular-section'>
                <h2>Popular Campgrounds</h2>
                <ul>
                    <li>
                        <Link to='/'>
                            <div className='popular-item'>
                                <div className='popular-item-img'>
                                </div>
                                <div className='popular-item-info'>
                                    <h3>Campground Name</h3>
                                    <p>Vernon, British Columbia</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <div className='popular-item'>
                                <div className='popular-item-img'>
                                </div>
                                <div className='popular-item-info'>
                                    <h3>Campground Name</h3>
                                    <p>Vernon, British Columbia</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <div className='popular-item'>
                                <div className='popular-item-img'>
                                </div>
                                <div className='popular-item-info'>
                                    <h3>Campground Name</h3>
                                    <p>Vernon, British Columbia</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </section>

        );
    }
}

export default Popular;
