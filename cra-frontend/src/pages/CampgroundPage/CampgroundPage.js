import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import  { FaFacebookSquare, FaInstagramSquare,
FaTwitterSquare, FaRegHeart, FaHeart } from 'react-icons/fa';
import './CampgroundPage.css';

// Components //
import ReserveAside from '../../components/ReserveAside/ReserveAside';
import CampgroundMap from '../../components/CampgroundMap/CampgroundMap';
import AmenityItem from '../../components/AmenityItem/AmenityItem';
import PhoneNumber from '../../components/PhoneNumber/PhoneNumber';
import RateTable from '../../components/RateTable/RateTable';
import LoaderSpinner from '../../components/LoaderSpinner/LoaderSpinner';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

// Data //
import CampgroundImg from '../../campingBackgroundCrop.jpg';

const API_URI = 'http://localhost:5000';

class CampgroundPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campground: {},
            recommendations: {},
            isLoaded: false,
            error: false,
            isFavorite: false
        }

        this.fetchCampground = this.fetchCampground.bind(this);
        this.fetchRecommendations = this.fetchRecommendations.bind(this);
        this.toggleFavorites = this.toggleFavorites.bind(this);

    }

    componentDidMount() {
        if(this.props.location.state) {
            let id = this.props.location.state.id;
            this.fetchCampground(id);
            this.fetchRecommendations(id);
        } else {
            this.setState({
                error: true
            })
        }

    }

    fetchCampground(id) {
        fetch(`${API_URI}/campgrounds/${id}`)
        .then(res => res.json())
        .then(jsonResponse => {
            this.setState({
                campground: jsonResponse.campground,
            });
        },
        (error) => {
          this.setState({
            error
          });
        }
      );
    }


    fetchRecommendations(id) {
        fetch(`${API_URI}/recommendations/${id}`)
        .then(res => res.json())
        .then(jsonResponse => {
            this.setState({
                recommendations: jsonResponse.recommendations,
                isLoaded: true
            });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
    }

    toggleFavorites() {
        this.setState({
            isFavorite: !this.state.isFavorite
        });

        const tooltip = document.getElementById('tooltip-fav');

    }

    render() {

        const campground = this.state.campground;


        let position = []
        campground.lat ?
            position = [campground.lat, campground.lon]
        :
            position = []

        return(
            <div className='campground-page-wrap'>
            {
                this.state.isLoaded ?
                <div className='campground-page'>
                    <div className='campground-img-wrapper'>
                        {
                            campground.img_link ?
                                <img src={campground.img_link}
                                     alt={campground.name}/>
                            :
                                <img src={CampgroundImg}
                                     alt='Campground'/>
                        }
                        <div className='favorite-btn-wrap'>
                            {
                                this.state.isFavorite ?
                                    <FaHeart id='isfav-heart'
                                             onClick={() => this.toggleFavorites()}/>
                                :
                                    <FaRegHeart
                                                onClick={() => this.toggleFavorites()}/>
                            }
                            <div className="tooltip" id='tooltip-add-fav'>
                                <span className="tooltiptext">
                                    Added To Favorites
                                </span>
                            </div>
                            <div className="tooltip" id='tooltip-remove-fav'>
                                <span className="tooltiptext">
                                    Removed From Favorites
                                </span>
                            </div>
                        </div>
                    </div>
                    <section className='campground-info'>
                        <h1>{campground.name}</h1>
                        <p>{campground.address}, {campground.city},
                           {' BC '}{campground.postal_code}
                        </p>
                        <div className='campground-social'>
                            <ul>
                                <li>
                                    <FaFacebookSquare/>
                                </li>
                                <li>
                                    <FaInstagramSquare/>
                                </li>
                                <li>
                                    <FaTwitterSquare/>
                                </li>
                            </ul>
                        </div>
                        <div className='campground-contact'>
                            <div className='phone-wrap'>
                                {
                                    campground.phone_numbers.map(pn => (
                                        <PhoneNumber key={pn.id} pn={pn} />
                                    ))
                                }

                            </div>
                            <div className='website-wrap'>
                                <p className="bold">Website</p>
                                <a href={campground.website}>
                                    {campground.website}
                                </a>
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
                                        campground.amenities.map(amenity => (
                                                <AmenityItem key={amenity.id}
                                                             amenity={amenity}/>
                                        ))
                                    }
                                </ul>
                            </section>
                            <div className='thin-seperator'></div>
                            <section className='campground-rates'>
                                <h2>Rates</h2>
                                {
                                    campground.sites.length > 0 ?
                                        <RateTable sites={campground.sites}/>
                                    :
                                        null
                                }

                            </section>
                            <div className='thin-seperator'></div>
                        </div>
                        {
                            campground.sites.length > 0 ?
                                <ReserveAside campgroundId={campground.id}/>
                            :
                                null
                        }

                        <section className='campground-directions'>
                            <h2>{'Location'}</h2>
                            {
                                position.length > 0 ?
                                    <CampgroundMap campground={campground}
                                                   position={position}/>
                                :
                                    <p>No {'Map'} to Show</p>
                            }
                        </section>
                    </div>
                    <section className='similar-campgrounds'>
                        <h2>Similar Campgrounds</h2>
                        <ul>
                        {
                            this.state.recommendations.map(campg => (
                                <li key={campg.id}>
                                    <Link to={`/campgrounds/${campg.name.replace(/ /g, '-').toLowerCase()}`}
                                          onClick={() => {
                                              this.fetchCampground(campg.id);
                                              this.fetchRecommendations(campg.id);
                                          }}>
                                        <div className='similar-campground'>
                                            <div className='similar-camp-img'>
                                                <img src={CampgroundImg}
                                                     alt='Campground'/>
                                            </div>
                                            <p className='bold'>{campg.name}</p>
                                            <p>{campg.address}, {campg.city},
                                               {' BC '}{campg.postal_code}
                                            </p>
                                        </div>
                                    </Link>
                                </li>

                            ))
                        }
                        </ul>
                    </section>
                </div>
                :
                this.state.error ?
                    <Redirect to=''/>
                :
                    <LoaderSpinner />
            }
            </div>
        );
    }
}

export default CampgroundPage;
