import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ReserveDetailsPage.css';

// Components //
import ConfirmSiteItem from '../../components/ConfirmSiteItem/ConfirmSiteItem';

const API_URI = 'http://localhost:5000';

class ReserveDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campground: {},
            subTotal: 0,
            nights: 0,
            sites: [],
            sitePrices: [],
            checkIn: '',
            checkOut: '',
            firstName: '',
            lastName: '',
            email: '',
            confirmEmail: '',
            specialRequests: '',
            confirmErr: false,
            emailErr: false,
            formErr: true
        }

        this.handleInfoChange = this.handleInfoChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    componentDidMount() {
        let subTotal = this.props.location.state.subTotal;
        let nights = this.props.location.state.nights;
        let sites = this.props.location.state.sites;
        let checkIn = this.props.location.state.checkIn;
        let checkOut = this.props.location.state.checkOut;
        let sitePrices = this.props.location.state.sitePrices;

        this.setState({
            subTotal: subTotal,
            nights: nights,
            sites: sites,
            checkIn: checkIn,
            checkOut: checkOut,
            sitePrices: sitePrices
        })
    }

    handleInfoChange(e) {
        const input = e.target;
        let temp;
        switch(input.name) {
            case 'first-name':
                this.setState({
                    firstName: input.value
                });
                break;
            case 'last-name':
                this.setState({
                    lastName: input.value
                });
                this.validateForm();
                break;
            case 'email':
                this.setState({
                    email: input.value
                });
                if(!this.validateEmail(input.value)) {
                    this.setState({
                        emailErr: true
                    });
                } else if(this.validateEmail(input.value)){
                    this.setState({
                        emailErr: false
                    });
                }
                this.validateForm();
                break;
            case 'confirm-email':
                this.setState({
                    confirmEmail: input.value
                });
                if(this.state.email !== input.value) {
                    this.setState({
                        confirmErr: true
                    });
                } else {
                    this.setState({
                        confirmErr: false
                    });
                }
                this.validateForm();
                break;
            case 'special-requests':
                this.setState({
                    specialRequests: input.value
                })
                this.validateForm();
                break;
            default:
                this.validateForm();
                break;
        }


    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    removeSite(e, index) {
        e.preventDefault();
        console.log(e.target, index)
    }

    handleClick(e) {
        e.preventDefault();

    }

    validateForm() {
        if(this.state.email === '' || this.state.firstName === ''
            || this.state.lastName === '') {

                this.setState({
                    formErr: true
                });
        } if(this.state.emailErr || this.state.confirmErr) {
            this.setState({
                formErr: true
            })
        } if(!this.state.emailErr && !this.state.confirmErr
                  && this.state.email.length !== ''
                  && this.state.firstName.length !== ''
                  && this.state.lastName.length !== '') {

            this.setState({
                formErr: false
            })
        }
    }

    render() {

        let checkInStr = this.state.checkIn.toString();
        let checkIn = checkInStr.split(' ').slice(0, 4).join(' ')

        let checkOutStr = this.state.checkOut.toString();
        let checkOut = checkOutStr.split(' ').slice(0, 4).join(' ')

        const campground = this.props.location.state.campground;
        const name = window.location.pathname.split('/')[2];

        const sites = [];
        this.state.sites.forEach((site, ind) => {
            for(let i = 0; i < site.quantity; i++) {
                let key = ind + Math.random(i)
                sites.push(<ConfirmSiteItem key={key}
                                            site={site} ind={key}
                                            removeSite={this.removeSite}/>)
            }
        })


        return(
            <div className='reserve-details-page'>
                <section className='reservation-details'>
                    <h2>Your Reservation Details</h2>
                    <div>
                        <div className='reserve-check'>
                            <p>Check-In:</p>
                            <p className='bold'>{checkIn}</p>
                        </div>
                        <div className='reserve-check'>
                            <p>Check-Out:</p>
                            <p className='bold'>{checkOut}</p>
                        </div>
                    </div>
                    <div className='reserve-length'>
                    <p>Total Length of Stay:</p>
                        <p className='bold'>
                            {this.state.nights}
                            {this.state.nights > 1 ? ' nights ' : ' night '}
                        </p>
                    </div>
                    <div className='r-site-selected'>
                        <p className='bold r-select-title'>You Selected</p>
                        {
                            this.state.sites.map((site, ind) => (
                                <p key={ind}>
                                    {site.quantity}
                                    <small> X </small>
                                    {site.name}
                                </p>
                            ))
                        }
                    </div>
                    <section className='reservation-price'>
                        <div className='price-title'>
                            <h2>Price</h2>
                            <small>
                                ({'for '} {this.state.nights}
                                {this.state.nights > 1 ? ' nights' : ' night'})
                            </small>
                        </div>
                        <div className='subtotal-wrap'>
                            <p className='bold subtotal'>{this.state.subTotal}{'$'}</p>
                            <small>*Taxes Not Included in Price</small>
                        </div>
                    </section>
                </section>
                <section className='reserve-camp-section'>
                    <div className='reserve-camp-img'>
                    </div>
                    <div>
                        <h2>{campground.name}</h2>
                        <p>{campground.address}, {campground.city},
                           {' BC '}{campground.postal_code}
                        </p>
                    </div>
                </section>
                <section className='personal-details'>
                    <h2>Enter Your Details</h2>
                    <form className='personal-details-form'>
                        <div className='input-names-wrap'>
                            <div className='input-wrapper'>
                                <label htmlFor='first-name'>
                                    First Name
                                    <abbr title="required"
                                          aria-label="required">
                                        *
                                    </abbr>
                                </label>
                                <input name='first-name' id='first-name'
                                       required
                                       type='text'
                                       onChange={(e) => this.handleInfoChange(e)}/>
                            </div>
                            <div className='input-wrapper'>
                                <label htmlFor='last-name'>
                                    Last Name
                                    <abbr title="required"
                                          aria-label="required">
                                        *
                                    </abbr>
                                </label>
                                <input name='last-name' id='last-name'
                                       required
                                       type='text'
                                       onChange={(e) => this.handleInfoChange(e)}/>
                            </div>
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='email'>
                                Email
                                <abbr title="required"
                                      aria-label="required">
                                    *
                                </abbr>
                            </label>
                            <input name='email' id='email'
                                   required
                                   type='email'
                                   className={ this.state.emailErr ?
                                                'error' : ''}
                                   onChange={(e) => this.handleInfoChange(e)}/>
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='confirm-email'>
                                Confirm Email
                                <abbr title="required"
                                      aria-label="required">
                                    *
                                </abbr>
                            </label>
                            <input name='confirm-email' id='confirm-email'
                                   required
                                   type='email'
                                   className={ this.state.confirmErr ?
                                                'error' : ''}
                                   onChange={(e) => this.handleInfoChange(e)}/>
                        </div>
                        <div className='sites-booking'>
                            <ul>
                                {sites}
                            </ul>
                        </div>
                        <div className='special-requests input-wrapper'>
                            <label htmlFor='special-requests'>
                                Special Requests
                            </label>
                            <textarea name='special-requests'
                                   id='special-requests' col='10' rows='12'
                                   onChange={(e) => this.handleInfoChange(e)}>
                            </textarea>
                        </div>
                        {
                            this.state.formErr ?
                            <button className='final-details-link-btn btn'>
                                Final Details
                            </button>
                            :
                            <Link to={{pathname: `/campgrounds/${name}/confirm`,
                                       state: {campground: this.state.campground,
                                               checkIn: this.state.checkIn,
                                               checkOut: this.state.checkOut,
                                               subTotal: this.state.subTotal,
                                               nights: this.state.nights,
                                               sites: this.state.sites,
                                               firstName: this.state.firstName,
                                               lastName: this.state.lastName,
                                               email: this.state.email,
                                               specialRequests: this.state.specialRequests}
                                   }}
                                  className='final-details-link-btn'>
                                Final Details
                            </Link>
                        }


                    </form>
                </section>
            </div>
        );
    }
}

export default ReserveDetailsPage;
