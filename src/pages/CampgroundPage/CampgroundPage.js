import React, { Component } from 'react';
import './CampgroundPage.css';

import campgroundsData from '../../campgroundsDataP1.json';
import CampgroundImg from '../../campingBackgroundCrop.jpg';

class CampgroundPage extends Component {

    render() {

        const campgroundId = this.props.location.state.id;
        const campground = campgroundsData.campgrounds.find(campground => (
            campground.id === campgroundId
        ));

        return(
            <div className='campground-page'>
                <div className='campground-img-wrapper'>
                    {
                        campground.img_link ?
                            <img src={campground.img_link} />
                        :
                            <img src={CampgroundImg} />
                    }
                </div>
                <section className='campground-info'>
                    <h1>{campground.name}</h1>
                    <p>{campground.address}</p>
                    <div className='campground-contact'>
                        <div className='phone-wrap'>
                            <p className="bold">Phone</p>
                            <p>{campground.phone.main}</p>
                            {
                                campground.phone.tollFree !== "" ?
                                    <>
                                        <p className="bold">Toll-Free</p>
                                        <p>{campground.phone.tollFree}</p>
                                    </>
                                :
                                    null
                            }
                            {
                                campground.phone.fax !== "" ?
                                    <>
                                        <p className="bold">Fax</p>
                                        <p>{campground.phone.fax}</p>
                                    </>
                                :
                                    null
                            }
                        </div>
                        <div className='website-wrap'>
                            <p className="bold">Website</p>
                            <a href={campground.website}>{campground.website}</a>
                        </div>
                    </div>
                </section>
                <div className='seperator'></div>
                <div className='campground-body'>
                    <div className='campground-body-inner'>
                        <section className='campground-description'>
                            <p>{campground.description}</p>
                        </section>
                        <div className='thin-seperator'></div>
                        <section className='campground-amenities'>
                            <h2>Amenities</h2>
                            <ul>
                                {
                                    campground.amenities.map((amenity, ind) => {
                                        amenity = amenity.replace("046-MotorhomeCreated with Sketch.", "");
                                        return(
                                            <li key={ind}>{amenity}</li>
                                        );
                                    })
                                }
                            </ul>
                        </section>
                        <div className='thin-seperator'></div>
                    </div>
                    <aside>
                        <h2>Reserve Now</h2>
                        <div className='aside-checkin'>
                            <label htmlFor='checkin'>Check-In</label>
                            <input className='aside-checkin-date'
                                   name='checkin'
                                   type='date'/>
                        </div>
                        <div className='aside-checkout'>
                            <label htmlFor='checkout'>Check-Out</label>
                            <input className='aside-checkout-date'
                                   name='checkout'
                                   type='date'/>
                        </div>
                        <div className='aside-choose-sites'>
                            <h3>Sites</h3>
                                <div className='aside-sites-select'>
                                    <select name='' id='number-sites'>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                    <select name='sites' id='sites'>

                                    </select>
                                </div>
                            <button>Add Site</button>
                        </div>
                        <button id="reserve">Reserve</button>
                    </aside>
                    <section className='campground-directions'>
                        <h2>Directions</h2>
                        <div className='google-map'>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default CampgroundPage;
