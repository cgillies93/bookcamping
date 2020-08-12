import React from 'react';
import ReservationItem from './ReservationItem';

import '../styles/MyReservations.css';

const MyReservations = ({ reservations }) => {

    return (
        <div className='my-reservations-container'>
          <h2 className='my-reservations-title'>My Reservations</h2>
          {
            reservations.map(reservation => (
              <ReservationItem key={reservation.reservationNumber}
                               reservation={reservation} />
            ))
          }
        </div>
    )
}

export default MyReservations;
