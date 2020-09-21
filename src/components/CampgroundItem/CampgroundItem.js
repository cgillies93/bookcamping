import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CampgroundItem.css';
import CampgroundsImg from '../../campingBackgroundCrop.jpg';

class CampgroundItem extends Component {

    render() {

        const { campground } = this.props;

        const shortDesc = campground.description.split(" ").splice(0, 40).join(" ");

        const campgroundName = campground.name.replace(/ /g, '-').toLowerCase();

        return(
            <li>
                <Link to={{ pathname: `/campgrounds/${campgroundName}`,
                            state: {id: campground.id}
                         }}>
                    <div className='campground-item-inner'>
                        <div className='campground-item-img-wrapper'>
                            {
                                campground.img_link ?
                                    <img src={campground.img_link} />
                                :
                                    <img src={CampgroundsImg} />
                            }
                        </div>
                        <div className='campground-item-info-wrapper'>
                            <div className='campground-item-name'>
                                <h2>{campground.name}</h2>
                            </div>
                            <div className='campground-item-location'>
                                <p>{campground.address}</p>
                            </div>
                            <div className='campground-item-description'>
                                <p>{shortDesc}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </li>
        );
    }
}

export default CampgroundItem;
