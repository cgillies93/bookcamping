import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AvailabilityPage.css';

// Components //
import AvailableTable from '../../components/AvailableTable/AvailableTable';

const API_URI = 'http://localhost:5000';

class AvailabilityPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campground: {},
            sitePrices: [],
            checkIn: '',
            checkOut: '',
            nights: 0,
            sites: [],
            subTotal:  0,
            isLoaded: false
        }

        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.calculateSubTotal = this.calculateSubTotal.bind(this);
    }

    componentDidMount() {
        const id = this.props.location.state.campgroundId;

        fetch(`${API_URI}/campgrounds/${id}`)
        .then(res => res.json())
        .then(jsonResponse => {
            let sites = jsonResponse.campground.sites;
            let checkIn = this.props.location.state.checkIn;
            let checkOut = this.props.location.state.checkOut;
            let nights = Math.ceil((checkOut - checkIn) / (1000*60*60*24))
            this.setState({
                checkIn: checkIn,
                checkOut: checkOut,
                nights: nights
            });
            let sitePrices = sites.map(site => {
                let temp = {
                    'id': site.id,
                    'name': site.name,
                    'price': 0
                }
                nights < 7 ?
                    temp.price = parseInt(site.price_night) * nights
                :
                nights >= 7 &&
                nights < 30  &&
                site.price_week ?
                    temp.price = site.price_week
                :
                nights > 30 &&
                site.price_month ?
                    temp.price = site.price_month
                :
                temp.price = parseInt(site.price_night) * nights

                return temp;
            })
            this.setState({
                campground: jsonResponse.campground,
                isLoaded: true,
                sitePrices: sitePrices
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

    handleQuantityChange(e) {
        let sites = [...this.state.sites];
        let index = sites.findIndex(item => item['name'] === e.target.name)
        if(index === -1) {
            let site = {
                'name': e.target.name,
                'quantity': e.target.value
            }
            sites.push(site);
            this.setState({
                sites: sites
            }, () => {
                this.calculateSubTotal();
            });
        }
        else if(e.target.value === '0') {
            sites = sites.filter(site => site.name !== e.target.name);
            this.setState({
                sites: sites
            },() => {
                this.calculateSubTotal();
            });
        }
        else {
            let temp = {...sites[index]};
            temp.quantity = e.target.value;
            sites[index] = temp;
            this.setState({
                sites: sites
            },() => {
                this.calculateSubTotal();
            });
        }

    }

    calculateSubTotal() {
        let subTotal = 0;
        this.state.sites.forEach(site => {
            this.state.sitePrices.filter(item => {
                if(site.name === item.name){
                    subTotal += (item.price * parseInt(site.quantity))
                }
            })
        })
        this.setState({
            subTotal: subTotal
        });
    }


    render() {

        let checkInStr = this.state.checkIn.toString();
        let checkIn = checkInStr.split(' ').slice(0, 4).join(' ')

        let checkOutStr = this.state.checkOut.toString();
        let checkOut = checkOutStr.split(' ').slice(0, 4).join(' ')

        let nights = this.state.nights;

        let numToReserve = 0;
        this.state.sites.forEach(site => {
            numToReserve += parseInt(site.quantity)
        });

        const name = window.location.pathname.split('/')[2];

        return(
            <div className='availability-page'>
                <h1>Availability</h1>
                <h2>{this.state.campground.name}</h2>
                <div className='availability-dates'>
                    <div className='availability-date-item'>
                        <p className='bold'>Check-In {'Date'}</p>
                        <p>{checkIn}</p>
                    </div>
                    <div className='availability-date-item'>
                        <p className='bold'>Check-Out {'Date'}</p>
                        <p>{checkOut}</p>
                    </div>
                </div>
                <div className='available-grid'>
                    <section className='available-sites'>
                        <AvailableTable sites={this.state.campground.sites}
                                        nights={this.state.nights}
                                        isLoaded={this.state.isLoaded}
                                        handleQuantityChange={this.handleQuantityChange}/>
                    </section>
                    <aside className='subtotal-aside'>
                        {
                            this.state.sites.length > 0 ?
                                <>
                                    <p>
                                        {numToReserve}
                                        {
                                            numToReserve > 1 ?
                                                ' sites ' : ' site '
                                        }
                                        {'for'}
                                    </p>
                                    <h2>{this.state.subTotal}{'$'}</h2>
                                    <small>Taxes Not Included</small>
                                    <Link to={{pathname: `/campgrounds/${name}/reserve`,
                                               state:{sites: this.state.sites,
                                                      checkIn: this.state.checkIn,
                                                      checkOut: this.state.checkOut,
                                                      nights: this.state.nights,
                                                      subTotal: this.state.subTotal,
                                                      campground: this.state.campground,
                                                      sitePrices: this.state.sitePrices}
                                             }}
                                          className='reserve-link'>
                                        Reserve
                                    </Link>
                                </>
                            :
                                <h3>Add Sites To Reserve</h3>
                        }

                    </aside>
                </div>
            </div>

        );
    }
}

export default AvailabilityPage;
