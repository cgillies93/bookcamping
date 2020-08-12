import React from 'react';
import MyReservations from '../components/containers/MyReservations';

const AccountPage = () => {

    return (
        <div className='account-page-container'>
          <div className='article-title'>
            <h1>Account</h1>
            <MyReservations />
          </div>
        </div>
    )
}

export default AccountPage;
