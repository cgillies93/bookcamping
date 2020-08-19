import React from 'react';
import ReservationItem from './ReservationItem';

import '../styles/MyReservations.css';

const MyReservations = ({ reservations }) => {

  let now = Date.now()
  let pastReservations = reservations.filter(reservation => Date.parse(reservation.checkoutDate) < now)
  let upcomingReservations = reservations.filter(reservation => Date.parse(reservation.checkoutDate) > now)
  console.log('past', pastReservations)
  console.log('upcoming',upcomingReservations)

    return (
        <div className='my-reservations-container'>
          <h2 className='my-reservations-title'>Upcoming Reservations</h2>
          {
            upcomingReservations.map(reservation => (
              <ReservationItem key={reservation.reservationNumber}
                               reservation={reservation} />
            ))
          }
          <h2>Past Reservations</h2>
          {
            pastReservations.map(reservation => (
              <ReservationItem key={reservation.reservationNumber}
                               reservation={reservation} />
            ))
          }
        </div>
    )
}

export default MyReservations;
