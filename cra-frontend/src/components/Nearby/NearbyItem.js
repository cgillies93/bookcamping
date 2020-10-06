import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CampgroundsImg from '../../campingBackgroundCrop.jpg';

class NearbyItem extends Component {

    render() {

        const { campground } = this.props;
        const name = campground.name.replace(/ /g, '-').toLowerCase();

        return(
            <li>
                <Link to={{ pathname: `/campgrounds/${name}`,
                            state: {id: campground.id}
                         }}>
                    <div className='nearby-item'>
                        <div className='nearby-item-img'>
                            {
                                campground.img_link ?
                                    <img src={campground.img_link}
                                         alt={campground.name}/>
                                :
                                    <img src={CampgroundsImg}
                                         alt='Campground'/>
                            }
                        </div>
                        <div className='nearby-item-info'>
                            <h3>{campground.name}</h3>
                            <p>{campground.address}, {campground.city},
                               {' BC '}{campground.postal_code}
                            </p>
                        </div>
                    </div>
                </Link>
            </li>


        );
    }
}

export default NearbyItem;
