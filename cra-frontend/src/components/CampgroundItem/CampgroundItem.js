import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
                                    <img src={campground.img_link}
                                         alt={campground.name}/>
                                :
                                    <img src={CampgroundsImg}
                                         alt='Campground'/>
                            }
                        </div>
                        <div className='campground-item-info-wrapper'>
                            <div className='campground-item-name'>
                                <h2>{campground.name}</h2>
                            </div>
                            <div className='campground-item-location'>
                                <p>{campground.address}, {campground.city},
                                   {' BC '}{campground.postal_code}
                                </p>
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

CampgroundItem.propTypes = {
  campground: PropTypes.object
};

export default CampgroundItem;
