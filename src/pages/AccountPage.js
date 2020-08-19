import React from 'react';
import MyReservations from '../components/containers/MyReservations';

import '../components/styles/AccountPage.css';

const AccountPage = () => {

    return (
        <div className='account-page-container'>
          <div className='account-page-wrapper'>
            <h1>Account</h1>
            <section className='account-page-personal'>
              <p>Christopher Gillies</p>
              <p>example@email.com</p>
              <a className='account-details-link'>Account Details</a>
            </section>
            <MyReservations />
          </div>
        </div>
    )
}

export default AccountPage;
