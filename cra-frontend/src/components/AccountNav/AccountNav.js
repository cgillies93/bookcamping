import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AccountNav.css';

class AccountNav extends Component {

    render() {

        return(
            <nav className='account-nav'>
                <h2>My Account</h2>
                <ul>
                    <li>
                        <Link to='/account/reservations'>
                            Reservations
                        </Link>
                    </li>
                    <li>
                        <Link to='/account/favorites'>
                            Favorites
                        </Link>
                    </li>
                    <li>
                        <Link to='/account/settings'>
                            Account Settings
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default AccountNav;
