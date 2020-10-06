import React, { Component } from 'react';
import './CreatePage.css'

// Components //
import CreateSiteItem from '../../components/CreateSiteItem/CreateSiteItem';
import CreatePhoneItem from '../../components/CreatePhoneItem/CreatePhoneItem';


const API_URI = 'http://localhost:5000';

class CreatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            address: '',
            lat: '',
            lon: '',
            phoneNumbers: [],
            email: '',
            amenities: [],
            sites: [],
            index: 0,
            amenAvail: [],
            showAmenities: false
        }

        this.addSiteItem = this.addSiteItem.bind(this);
        this.removeSiteItem = this.removeSiteItem.bind(this);
        this.addSiteToCampground = this.addSiteToCampground.bind(this);
        this.addAmenityToCampground = this.addAmenityToCampground.bind(this);
        this.removeAmenity = this.removeAmenity.bind(this);
        this.addPhoneItem = this.addPhoneItem.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.removePhoneItem = this.removePhoneItem.bind(this);
    }

    componentDidMount() {
        fetch(`${API_URI}/amenities`)
        .then(res => res.json())
        .then(jsonResponse => {
            this.setState({
                amenAvail: jsonResponse.amenities
            });
        },
        (error) => {
            this.setState({
                error
            });
        }
    );
    }

    toggleAmenityList(e) {
        e.preventDefault();
        this.setState({
            showAmenities: !this.state.showAmenities
        });
    }

    addAmenityToCampground(e) {
        const amenity = e.target.name;
        let temp = this.state.amenities;
        temp.includes(amenity) ? temp = temp.filter(item => item !== amenity) :
                                 temp.push(amenity);
        this.setState({
            amenities: temp
        });
    }

    removeAmenity(e) {
        e.preventDefault();
        const amenity = e.target.name;
        let checkbox = document.getElementById(amenity);
        checkbox.checked = false;
        let temp = this.state.amenities;
        temp = temp.filter(item => item !== amenity);

        this.setState({
            amenities: temp
        });
    }

    handleChange(e) {
        let input = e.target;
        switch(input.name) {
            case 'campground-name':
                this.setState({
                    name: input.value
                });
                break;
            case 'campground-description':
                this.setState({
                    description: input.value
                });
                break;
            case 'campground-address':
                this.setState({
                    address: input.value
                });
                break;
            case 'campground-lat':
                this.setState({
                    lat: input.value
                });
                break;
            case 'campground-lon':
                this.setState({
                    lon: input.value
                });
                break;
            default:
                break;
        }
    }

    addSiteItem(e, ind) {
        e.preventDefault();
        const site = {
            'id': this.state.index,
            'type': 'Campsite',
            'name': '',
            'numAvail': 0,
            'priceNight': 0,
            'priceWeek': 0,
            'priceMonth': 0
        }
        let temp = this.state.sites;
        temp.push(site)

        this.setState({
            sites: temp,
            index: this.state.index + 1
        });
    }

    removeSiteItem(e, id) {
        e.preventDefault();
        let sites = [...this.state.sites];
        let temp = sites.filter(item => item['id'] !== id)

        this.setState({
            sites: temp
        })
    }

    addSiteToCampground(e, id) {
        let sites = [...this.state.sites];
        let index = sites.findIndex(item => item['id'] === id)
        let temp = {...sites[index]}

        const input = e.target;

        switch(input.name) {
            case 'site-type':
                temp.type = input.value
                break;
            case 'site-name':
                temp.name = input.value
                break;
            case 'site-avail':
                temp.numAvail = input.value
                break;
            case 'price-night':
                temp.priceNight = input.value
                break;
            case 'price-week':
                temp.priceWeek = input.value
                break;
            case 'price-month':
                temp.priceMonth = input.value
                break;

            default:
                break;
        }

        sites[index] = temp
        this.setState({
            sites: sites
        });
    }

    addPhoneItem(e) {
        e.preventDefault();
        const pn = {
            'id': this.state.index,
            'numType': 'main',
            'number': ''
        }
        let temp = this.state.phoneNumbers;
        temp.push(pn)

        this.setState({
            phoneNumbers: temp,
            index: this.state.index + 1
        });
    }

    handlePhoneChange(e, id) {
        let phoneNumbers = [...this.state.phoneNumbers];
        let index = phoneNumbers.findIndex(item => item['id'] === id)
        let temp = {...phoneNumbers[index]}

        switch(e.target.name) {
            case 'campground-phone-type':
                temp.numType = e.target.value
                break;
            case 'campground-phone':
                temp.number = e.target.value;
                break;
            default:
                break;
        }

        phoneNumbers[index] = temp
        this.setState({
            phoneNumbers: phoneNumbers
        });
    }

    removePhoneItem(e, id) {
        e.preventDefault();
        let phoneNumbers = [...this.state.phoneNumbers];
        let temp = phoneNumbers.filter(item => item['id'] !== id)

        this.setState({
            phoneNumbers: temp
        })
    }

    render() {

        return(
            <div className='create-page'>
                <h1>Add New Campground</h1>
                <div className='form-wrapper'>
                    <form>
                        <div className='input-wrapper'>
                            <label htmlFor='campground-name'>
                                Campground Name
                            </label>
                            <input name='campground-name' id='campground-name'
                                   type='text'
                                   onChange={(e) => this.handleChange(e)}/>
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='campground-description'>
                                Description
                            </label>
                            <textarea name='campground-description'
                                   id='campground-description'
                                   type='text' cols='50' rows='10'
                                   onChange={(e) => this.handleChange(e)}>
                            </textarea>
                        </div>
                        <h2>Contact Info</h2>
                        <div className='input-wrapper'>
                            <label htmlFor='campground-phone'>
                                {'Phone Numbers'}
                            </label>
                            {
                                this.state.phoneNumbers.map(pn => (
                                    <CreatePhoneItem key={pn.id}
                                                     ind={this.state.index - 1}
                                                     handleChange={this.handlePhoneChange}
                                                     removePhoneItem={this.removePhoneItem}/>
                                ))
                            }
                        </div>
                        <button id='add-phone-number'
                                onClick={(e) => this.addPhoneItem(e)}>
                            Add {'Number'}
                        </button>
                        <div className='input-wrapper'>
                            <label htmlFor='campground-email'>
                                Email
                            </label>
                            <input name='campground-email'
                                   id='campground-email'
                                   type='email'
                                   onChange={(e) => this.handleChange(e)}/>
                        </div>
                        <h2>{'Location Info'}</h2>
                        <div className='input-wrapper'>
                            <label htmlFor='campground-city'>
                                City
                            </label>
                            <input name='campground-city'
                                   id='campground-city'
                                   type='text'
                                   onChange={(e) => this.handleChange(e)}/>
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='campground-prov'>
                                Province
                            </label>
                            <input name='campground-prov'
                                   id='campground-prov'
                                   type='text' value='British Columbia'
                                   onChange={(e) => this.handleChange(e)}/>
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='campground-country'>
                                Country
                            </label>
                            <input name='campground-country'
                                   id='campground-country'
                                   type='text' value='Canada'
                                   onChange={(e) => this.handleChange(e)}/>
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='campground-address'>
                                Address
                            </label>
                            <input name='campground-address'
                                   id='campground-address'
                                   type='text'
                                   onChange={(e) => this.handleChange(e)}/>
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='campground-postal'>
                                Postal Code
                            </label>
                            <input name='campground-postal'
                                   id='campground-postal'
                                   type='text'
                                   onChange={(e) => this.handleChange(e)}/>
                        </div>
                        <p className='bold'>Lattitude and Longittude is used to display a map on the campground page</p>
                        <div className='input-wrapper'>
                            <label htmlFor='campground-lat'>
                                Lattitude
                            </label>
                            <input name='campground-lat'
                                   id='campground-lat'
                                   type='text'
                                   onChange={(e) => this.handleChange(e)}/>
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='campground-lon'>
                                Longittude
                            </label>
                            <input name='campground-lon'
                                   id='campground-lon'
                                   type='text'
                                   onChange={(e) => this.handleChange(e)}/>
                        </div>
                        <h2>Amenities</h2>
                        <div className='added-amenities'>
                        {
                            this.state.amenities.map(amenity => (
                                <div className='filter-item'>
                                    <p>{amenity}</p>
                                    <button name={amenity}
                                            onClick={(e) => this.removeAmenity(e)}
                                            >
                                        X
                                    </button>
                                </div>
                            ))
                        }
                        </div>
                        <button id='toggle-amenity-list'
                                onClick={(e) => this.toggleAmenityList(e)}>
                            {
                                this.state.showAmenities ? 'Hide Amenities' :
                                                           'Add Amenities'
                            }
                        </button>
                        <div className={'amenity-avail ' +
                                        (this.state.showAmenities ?
                                            'show-amenities' : '')}>
                            {
                                this.state.amenAvail.map(amenity => (
                                    <div key={amenity.id}
                                         className='amen-avail-input'>
                                        <input type='checkbox'
                                               id={amenity.name}
                                               name={amenity.name}
                                               onChange={(e) => this.addAmenityToCampground(e)}/>
                                        <label htmlFor={amenity.name}>
                                            {amenity.name}
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                        <h2>Sites</h2>
                        {
                            this.state.sites.map(site => (
                                <CreateSiteItem key={site.id} site={site} ind={this.state.index - 1}
                                                removeSiteItem={this.removeSiteItem}
                                                addSiteToCampground={this.addSiteToCampground}/>
                            ))
                        }
                        <button id='add-site'
                                onClick={(e) => this.addSiteItem(e)}>
                            Add Site
                        </button>
                        <button id='create-campground'>Create</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreatePage;
