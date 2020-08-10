import React, { Component } from 'react';
import CampgroundAmenities from './CampgroundAmenities';

import './CampgroundItemInfo.css';

class CampgroundItemInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campground: this.props.campground
    }
    this.getMap = this.getMap.bind(this);
  }

  componentDidMount() {
    this.getMap();
  }

  getMap() {
    let coordinates = this.state.campground.coordinates;
    let coordinatesArray = coordinates.split(',');
    console.log(coordinatesArray)
    let latitude= parseFloat(coordinatesArray[0]);
    let longitude = parseFloat(coordinatesArray[1]);
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: latitude, lng: longitude},
      zoom: 12
    });
    let marker = new google.maps.Marker(
      {
        position: {lat: latitude, lng: longitude},
        map: map
      });

  }

  render() {

    const { campground } = this.props;

    return (
      <div className='campground-item-info-container'>
        <h1>{campground.name}</h1>
        <p>{campground.location}</p>
        <div id='map'>
        </div>
        <div className='campground-item-info-wrapper'>
          <section className='campground-item-contact-info'>
            <h2>Contact Info</h2>
            <p>{campground.phoneNumber}</p>
            <p>{campground.website}</p>
          </section>
          <section className='campground-item-amenities-info'>
            <h2>Amenities</h2>
            <CampgroundAmenities amenities={campground.amenities} />
          </section>
        </div>
      </div>
    );
  }
}

export default CampgroundItemInfo;
