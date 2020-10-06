import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FinalDetailsPage.css';

// Components //

const API_URI = 'http://localhost:5000';

class FinalDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campground: {},
            subTotal: 0,
            nights: 0,
            sites: [],
            checkIn: '',
            checkOut: '',
            sitePrices: [],
            firstName: '',
            lastName: '',
            email: '',
            specialRequests: '',
            tax: 0,
            total: 0
        }
    }

    componentDidMount() {
        let subTotal = this.props.location.state.subTotal;
        let nights = this.props.location.state.nights;
        let sites = this.props.location.state.sites;
        let checkIn = this.props.location.state.checkIn;
        let checkOut = this.props.location.state.checkOut;
        let sitePrices = this.props.location.state.sitePrices;
        let firstName = this.props.location.state.firstName;
        let lastName = this.props.location.state.lastName;
        let email = this.props.location.state.email;
        let specialRequests = this.props.location.state.specialRequests;
        let campground = this.props.location.state.campground;
        let tax = subTotal * 0.12;
        let total = tax + subTotal;

        this.setState({
            campground: campground,
            subTotal: subTotal,
            nights: nights,
            sites: sites,
            checkIn: checkIn,
            checkOut: checkOut,
            sitePrices: sitePrices,
            firstName: firstName,
            lastName: lastName,
            email: email,
            specialRequests: specialRequests,
            tax: tax,
            total: total
        })
    }

    render() {

        const months = 12;
        let monthOption = [];
        for(let i = 0; i < months; i++) {
            let value = i + 1;
            if(value < 10) {
                value = '0' + value
            }
            monthOption.push(<option value={value}>{value}</option>)
        }

        let checkInStr = this.state.checkIn.toString();
        let checkIn = checkInStr.split(' ').slice(0, 4).join(' ')

        let checkOutStr = this.state.checkOut.toString();
        let checkOut = checkOutStr.split(' ').slice(0, 4).join(' ')

        return(
            <div className='final-details-page'>
                <h1>Final Details</h1>
                <div className='final-details-wrap'>
                    <section className='reservation-summary'>
                        <h2>Reservation Summary</h2>
                        <div className='summary-checkin'>
                            <p className='bold'>Check-In:</p>
                            <p>{checkIn}</p>
                        </div>
                        <div className='summary-checkout'>
                            <p className='bold'>Check-Out:</p>
                            <p>{checkOut}</p>
                        </div>
                        <ul>
                            {
                                this.state.sites.map(site => (
                                    <li>
                                        {site.quantity} X {site.name}
                                    </li>
                                ))
                            }
                        </ul>
                        <p>SubTotal: {this.state.subTotal}$</p>
                        <p>Tax: {this.state.tax}$</p>
                        <h3>Total: {this.state.total}</h3>
                    </section>
                    <section className='card-info'>
                        <h2>Card Information</h2>
                        <form className='card-info-form'>
                            <div className='input-wrapper'>
                                <label htmlFor='name-on-card'>
                                    Name on Card
                                    <abbr title="required"
                                          aria-label="required">
                                        *
                                    </abbr>
                                </label>
                                <input type='text' id='name-on-card' required
                                       name='name-on-card'/>
                            </div>
                            <div className='input-wrapper'>
                                <label htmlFor='card-number'>
                                    {'Card Number'}
                                    <abbr title="required"
                                          aria-label="required">
                                        *
                                    </abbr>
                                </label>
                                <input type='text' id='card-number' required
                                       name='card-number'/>
                            </div>
                            <h3>Expiry {'Date'}</h3>
                            <div className='card-expiry-wrap'>
                                <div className='expiry-month'>
                                    <label htmlFor='expiry-month'>
                                        Month
                                        <abbr title="required"
                                              aria-label="required">
                                            *
                                        </abbr>
                                    </label>
                                    <select id='expiry-month'
                                            name='expiry-month' required>
                                        {monthOption}
                                    </select>
                                </div>
                                <div className='expiry-year'>
                                    <label htmlFor='expiry-year'>
                                        Year
                                        <abbr title="required"
                                              aria-label="required">
                                            *
                                        </abbr>
                                    </label>
                                    <select id='expiry-year'
                                            name='expiry-year' required>
                                        <option>2020</option>
                                        <option>2021</option>
                                        <option>2022</option>
                                        <option>2023</option>
                                    </select>
                                </div>
                                <div className='card-cv'>
                                    <label htmlFor='card-cv'>
                                        CVV
                                        <abbr title="required"
                                              aria-label="required">
                                            *
                                        </abbr>
                                    </label>
                                    <input type='text' id='card-cv' required/>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        );
    }
}

export default FinalDetailsPage;
