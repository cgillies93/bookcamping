import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MyFavoritesPage.css';

// Components //
import AccountNav from '../../components/AccountNav/AccountNav'

class MyFavoritesPage extends Component {

    render() {

        return(
            <div className='favorites-page'>
                <AccountNav />
                <div>
                    <h1>My Favorites</h1>
                </div>
            </div>

        );
    }
}

export default MyFavoritesPage;
