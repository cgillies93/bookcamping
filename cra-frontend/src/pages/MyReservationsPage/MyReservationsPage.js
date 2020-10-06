import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MyReservationsPage.css';

// Components //
import AccountNav from '../../components/AccountNav/AccountNav'

class MyReservationsPage extends Component {

    render() {

        return(
            <div className='reservations-page'>
                <AccountNav />
                <div>
                    <h1>My Reservations</h1>
                    <section className='my-reservations'>
                        <h2>Upcoming Reservations</h2>
                    </section>
                    <section className='my-reservations'>
                        <h2>Past Reservations</h2>
                    </section>
                </div>
            </div>

        );
    }
}

export default MyReservationsPage;
