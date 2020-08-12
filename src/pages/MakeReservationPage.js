import React from 'react';

import '../components/styles/MakeReservationPage.css';

const MakeReservationPage = () => {

    return (
        <div className='make-reservation-page-container'>
          <h1>Make Reservation</h1>
          <div className='reservation-campground-image'>
          </div>
          <div className='reservation-campground-info'>
            <h2>Campground Name</h2>
            <p>1234 Apple Road, Vernon BC</p>
          </div>
          <section className='reservation-info'>
            <div className='reservation-dates-wrapper'>
              <h3>Your Reservation Dates</h3>
              <div className='dates-wrapper'>
                <p className='reservation-date'>
                <span>Check-In</span>August 08, 2020
                </p>
                <p className='reservation-date'>
                <span>Check-Out</span>August 10, 2020
                </p>
              </div>
            </div>
            <section className='reservation-sites'>
            <h3>Your Campsites</h3>
              <table className='reservation-campsites-table'>
                <tbody>
                  <tr className='table-header-row'>
                    <th>Type</th>
                    <th>How Many?</th>
                    <th>Price</th>
                  </tr>
                  <tr>
                    <td>Cabin</td>
                    <td>X 2</td>
                    <td>$170.00</td>
                  </tr>
                  <tr>
                    <td>Tent Area</td>
                    <td>X 1</td>
                    <td>$25.00</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section className='reservation-add-ons'>
              <h3>Add-Ons</h3>
              <table className='reservation-add-ons-table'>
                <tbody>
                  <tr className='table-header-row'>
                    <th>Type</th>
                    <th>How Many?</th>
                    <th>Price</th>
                  </tr>
                  <tr>
                    <td>Fire Wood</td>
                    <td>
                      <select>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </td>
                    <td>$7.50</td>
                  </tr>
                  <tr>
                    <td>Camping Stove</td>
                    <td>
                      <select>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </td>
                    <td>$10.00</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section className='reservation-personal-info'>
              <h3>Personal Info</h3>
              <div className='reservation-info-form-wrapper'>
                <form className='reservation-info-form'>
                  <div className='reservation-form-name-wrapper'>
                    <label htmlFor='name'>Full Name</label>
                    <input type='text' name='name'/>
                  </div>
                  <div className='reservation-form-email-wrapper'>
                    <label htmlFor='name'>Email</label>
                    <input type='email' name='email'/>
                  </div>
                  <div className='reservation-form-phone-wrapper'>
                    <label htmlFor='name'>Phone Number</label>
                    <input type='text' name='phone-number'/>
                  </div>
                  <div className='reservation-total-price'>
                    <p>Your total of $125.00 is due upon arrival</p>
                  </div>
                  <div className='confirm-reservation-button-wrapper'>
                    <button type='submit'>Confirm Reservation</button>
                  </div>
                </form>
              </div>
            </section>
          </section>
        </div>
    )
}

export default MakeReservationPage;
