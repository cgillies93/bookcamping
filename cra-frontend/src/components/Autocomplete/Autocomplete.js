import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Autocomplete.css';

class Autocomplete extends Component {

    handleClick(e) {
        e.preventDefault();
        this.props.handleClick(e);
    }

    render() {
        let { list, query } = this.props;
        let filterList = list.filter(item => item.toLowerCase().includes(query.toLowerCase()))


        return(
            <div className='autocomplete-wrapper'>
                <ul>
                    {
                        filterList.map((item, ind) => (
                            <li key={ind}>
                                <button name='auto' onClick={(e) => this.handleClick(e)}>
                                    {item}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

Autocomplete.propTypes = {
  list: PropTypes.array,
  query: PropTypes.string,
  handleClick: PropTypes.func
};

export default Autocomplete;
