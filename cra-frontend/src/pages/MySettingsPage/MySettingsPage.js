import React, { Component } from 'react';
import './MySettingsPage.css';

// Components //
import AccountNav from '../../components/AccountNav/AccountNav'

class MySettingsPage extends Component {

    render() {

        return(
            <div className='settings-page'>
                <AccountNav />
                <div>
                    <h1>Account Settings</h1>
                </div>
            </div>

        );
    }
}

export default MySettingsPage;
