import React from 'react';
import ReservationItem from './ReservationItem';

import '../styles/MyReservations.css';

const MyReservations = ({ reservations }) => {

    return (
        <div className='my-reservations-container'>
          <h3 className='my-reservations-title'>Upcoming Reservations</h3>
          {
            reservations.map(reservation => (
              <ReservationItem key={reservation.reservationNumber}
                               reservation={reservation} />
            ))
          }
          <h3>Past Reservations</h3>
        </div>
    )
}

export default MyReservations;
