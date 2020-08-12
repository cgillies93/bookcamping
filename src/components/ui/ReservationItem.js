import React from 'react';

import '../styles/ReservationItem.css';

const ReservationItem = ({ reservation }) => {

    return (
        <div className='reservation-item-container'>
          <h3>{reservation.camgroundName}</h3>
          <p>Reservation Number: {reservation.reservationNumber}</p>
          <p>Check-In: {reservation.checkinDate}</p>
          <p>Check-Out: {reservation.checkoutDate}</p>
        </div>
    )
}

export default ReservationItem;
