import React, { Component } from 'react';

class FilterItem extends Component {
    render() {

        const { filter } = this.props;
        let name = filter;
        name = name.replace(' ($)', '')
        name = name.replace(' - ', '-');
        name = name.replace(/ /g, '-');
        name = name.replace('/', '-');
        name = name.toLowerCase();


        return(
            <div className='filter-item'>
                <p>{filter}</p>
                <button name={name}
                        onClick={(e) => this.props.removeFilter(e)}>
                    X
                </button>
            </div>
        );
    }
}

export default FilterItem;
