import React, { Component } from 'react';
import './Nearby.css';

// Components //
import NearbyItem from './NearbyItem';

class Nearby extends Component {

    render() {

        const { campgrounds } = this.props;

        return(
            <section className='nearby'>
                <h2>Nearby Campgrounds</h2>
                <div className='nearby-wrap'>
                    <ul>
                        {
                            campgrounds.map(item => (
                                <NearbyItem campground={item.campground} />
                            ))
                        }
                    </ul>
                </div>
            </section>


        );
    }
}

export default Nearby;
