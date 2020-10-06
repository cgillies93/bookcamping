import React, { Component } from 'react';
import './ConfirmSiteItem.css';

// Components //

const API_URI = 'http://localhost:5000';

class ConfirmSiteItem extends Component {

    render() {

        const { site, ind } = this.props;


        return(
            <li className='confirm-site-item'>
                <p className='bold'>{site.name}</p>
                <button onClick={(e) => this.props.removeSite(e, ind)}>
                    X
                </button>
            </li>
        );
    }
}

export default ConfirmSiteItem;
