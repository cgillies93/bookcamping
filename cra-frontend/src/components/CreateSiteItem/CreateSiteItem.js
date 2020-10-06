import React, { Component } from 'react';

class CreateSiteItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
                id: this.props.ind
        }
    }

    handleChange(e) {
        this.props.addSiteToCampground(e, this.state.id);
    }

    render() {

        return(
            <div id='create-sites'>
                <div className='input-wrapper'>
                    <label htmlFor='site-type'>
                        Type
                    </label>
                    <select name='site-type'
                            onChange={(e) => this.handleChange(e)}>
                        <option value='Campsite'>Campsite</option>
                        <option value='RV'>{'RV'}</option>
                        <option value='Cabin'>Cabin</option>
                        <option value='Cottage'>Cottage</option>
                        <option value='B&B'>{'B&B'}</option>
                    </select>
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='site-name'>
                        Name
                    </label>
                    <input name='site-name'
                           id='site-name'
                           type='text'
                           onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='site-avail'>
                        # Available
                    </label>
                    <input name='site-avail'
                           id='site-avail'
                           type='number' min={'0'}
                           onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='price-night'>
                        price/Night
                    </label>
                    <input name='price-night'
                           id='price-night'
                           type='text'
                           onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='price-week'>
                        price/Week
                    </label>
                    <input name='price-week'
                           id='price-week'
                           type='text'
                           onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='price-month'>
                        price/Month
                    </label>
                    <input name='price-month'
                           id='price-month'
                           type='text'
                           onChange={(e) => this.handleChange(e)}/>
                </div>
                <button id='remove-site'
                        onClick={(e) => this.props.removeSiteItem(e, this.state.id)}>
                    X
                </button>
            </div>
        );
    }
}

export default CreateSiteItem;
