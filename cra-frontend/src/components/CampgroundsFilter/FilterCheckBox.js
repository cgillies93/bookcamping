import React, { Component } from 'react';

class FilterCheckBox extends Component {

    render() {

        const { amenity } = this.props;

        let nameId = amenity;
        nameId = nameId.replace(' ($)', '')
        nameId = nameId.replace(' - ', '-');
        nameId = nameId.replace(/ /g, '-');
        nameId = nameId.replace('/', '-');
        nameId = nameId.toLowerCase();

        return(
            <div className='amenity-filter'>
                <input name={nameId} type='checkbox'
                       id={nameId}
                       className='filter-cB'
                       onChange={(e) => this.props.handleCheckBoxChange(e)}/>
                <label htmlFor={nameId}>{amenity}</label>
            </div>
        );
    }
}

export default FilterCheckBox;
