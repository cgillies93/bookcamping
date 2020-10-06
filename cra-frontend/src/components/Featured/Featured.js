import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Featured.css';

import CampgroundsImg from '../../campingBackgroundCrop.jpg';

// Components //
import FeaturedItem from './FeaturedItem';


class Featured extends Component {

    render() {

        const { campgrounds } = this.props;

        return(
            <section className='popular-section'>
                <h2>Featured Campgrounds</h2>
                <ul>
                    {
                        campgrounds.map(campground => (
                            <FeaturedItem campground={campground} />
                        ))
                    }
                </ul>
            </section>

        );
    }
}

export default Featured;
