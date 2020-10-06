import React, { Component } from 'react';
import { FaStoreAlt, FaCreditCard, FaRegCreditCard,
FaUmbrellaBeach, FaCcDinersClub, FaWater, FaPlug,
FaBus, FaRestroom, FaWifi, FaShower, FaPhoneAlt,
FaSnowflake, FaSun, FaBicycle, FaSkiing,
FaSkiingNordic, FaHiking, FaHorse, FaSwimmingPool,
FaSpa, FaTv, FaHotTub } from 'react-icons/fa';
import { GiFishingPole, GiTap, GiSpeedBoat,
GiWoodCanoe, GiRiver, GiChipsBag, GiHummingbird,
GiFireplace, GiSailboat } from 'react-icons/gi';
import { MdLocalLaundryService, MdRvHookup, MdPets,
MdLocalBar, MdFitnessCenter, MdGolfCourse,
MdAccessible, MdRestaurant, MdKitchen, MdSmokeFree } from "react-icons/md";

import './AmenityItem.css';


class AmenityItem extends Component {

    render() {

        const { amenity } = this.props;

        return(
            <>
                {
                    amenity.name === 'Store' ?
                        <li className='amenity-item'>
                            <FaStoreAlt />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Accepts Credit Cards' ?
                        <li className='amenity-item'>
                            <FaCreditCard />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Accepts Debit Cards' ?
                        <li className='amenity-item'>
                            <FaRegCreditCard />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Swimming Beach' ?
                        <li className='amenity-item'>
                            <FaUmbrellaBeach />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Fishing' ?
                        <li className='amenity-item'>
                            <GiFishingPole />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Laundry/Laundromat' ?
                        <li className='amenity-item'>
                            <MdLocalLaundryService />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Clubhouse' ?
                        <li className='amenity-item'>
                            <FaCcDinersClub />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Water Front' ?
                        <li className='amenity-item'>
                            <FaWater />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name.includes('Amp Service') ?
                        <li className='amenity-item'>
                            <FaPlug />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Big Rig Friendly' ?
                        <li className='amenity-item'>
                            <FaBus />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Restroom' ?
                        <li className='amenity-item'>
                            <FaRestroom />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Full RV Hookups' ?
                        <li className='amenity-item'>
                            <MdRvHookup />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Wifi' ?
                        <li className='amenity-item'>
                            <FaWifi />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Pets Welcome' ?
                        <li className='amenity-item'>
                            <MdPets />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Showers' ?
                        <li className='amenity-item'>
                            <FaShower />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Telephone' ?
                        <li className='amenity-item'>
                            <FaPhoneAlt />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Water on Site' ?
                        <li className='amenity-item'>
                            <GiTap />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Winter Camping' ?
                        <li className='amenity-item'>
                            <FaSnowflake />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name.includes('Boat') ?
                        <li className='amenity-item'>
                            <GiSpeedBoat />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Seasonal Campsites' ?
                        <li className='amenity-item'>
                            <FaSun />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Bar' ?
                        <li className='amenity-item'>
                            <MdLocalBar />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Bike Rental' ?
                        <li className='amenity-item'>
                            <FaBicycle />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Downhill Skiing' ?
                        <li className='amenity-item'>
                            <FaSkiing />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Fitness Center' ?
                        <li className='amenity-item'>
                            <MdFitnessCenter />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Golfing' ?
                        <li className='amenity-item'>
                            <MdGolfCourse />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Handicap Accessible' ?
                        <li className='amenity-item'>
                            <MdAccessible />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Hiking' ?
                        <li className='amenity-item'>
                            <FaHiking />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Horseback Riding' ?
                        <li className='amenity-item'>
                            <FaHorse />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Canoe/Kayak Rentals' ?
                        <li className='amenity-item'>
                            <GiWoodCanoe />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Pool - Outdoor' ?
                        <li className='amenity-item'>
                            <FaSwimmingPool />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Restaurant' ?
                        <li className='amenity-item'>
                            <MdRestaurant />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'River Rafting' ?
                        <li className='amenity-item'>
                            <GiRiver />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Snack Bar' ?
                        <li className='amenity-item'>
                            <GiChipsBag />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Spa' ?
                        <li className='amenity-item'>
                            <FaSpa />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Wildlife Viewing' ?
                        <li className='amenity-item'>
                            <GiHummingbird />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Fireplace' ?
                        <li className='amenity-item'>
                            <GiFireplace />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Kitchenette' ?
                        <li className='amenity-item'>
                            <MdKitchen />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Non-smoking Rooms' ?
                        <li className='amenity-item'>
                            <MdSmokeFree />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'TV In Rooms' ?
                        <li className='amenity-item'>
                            <FaTv />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Hottub' ?
                        <li className='amenity-item'>
                            <FaHotTub />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Marina' ?
                        <li className='amenity-item'>
                            <GiSailboat />
                            <p>{amenity.name}</p>
                        </li>
                    :
                    amenity.name === 'Cross-Country Skiing' ?
                        <li className='amenity-item'>
                            <FaSkiingNordic />
                            <p>{amenity.name}</p>
                        </li>
                    :
                        <li className='amenity-item'>
                            <p>{amenity.name}</p>
                        </li>
                }
            </>

        );
    }
}

export default AmenityItem;
