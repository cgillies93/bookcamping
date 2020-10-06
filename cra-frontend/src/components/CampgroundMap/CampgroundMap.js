import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './CampgroundMap.css';

class CampgroundMap extends Component {

    render() {

        const { position, campground } = this.props;

        return(
            <div className='map-wrap'>
                <Map id='map' center={position} zoom={12}>
                    <TileLayer
                        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                        url='https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2hyaXNnaWxsaWVzIiwiYSI6ImNrZmU1dnhreDAxcG8zMGw4dHhiYzhxMHcifQ.nC-mAEAr4Ylcp7gDoP2IOg'
                        maxZoom={18}
                        tileSize={512}
                        zoomOffset={-1}
                        id= 'mapbox/streets-v11'>
                    </TileLayer>
                    <Marker position={position}>
                    <Popup>
                        <strong>{campground.name}</strong><br/>
                        {campground.address}, {campground.city}, {'BC '}
                        {campground.postal_code}
                    </Popup>
                    </Marker>
                </Map>
             </div>
        );
    }
}

export default CampgroundMap;
