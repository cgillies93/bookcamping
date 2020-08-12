import React from 'react';
import '../styles/CampgroundAvailability.css';

const CampgroundAvailability = () => {

    return (
        <div className='campground-availability-container'>
          <h2>Availability</h2>
          <div className='table-wrapper'>
            <table className='availability-table'>
              <tbody>
                <tr className='table-header-row'>
                  <th>Type</th>
                  <th>Price</th>
                  <th>How Many?</th>
                  <th></th>
                </tr>
                <tr>
                  <td>Tent Area</td>
                  <td>$25.00</td>
                  <td>
                    <select>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </td>
                  <td className='button-wrapper'>
                    <button>Book Now</button>
                  </td>
                </tr>
                <tr>
                  <td>Cabin</td>
                  <td>$85.00</td>
                  <td>
                    <select>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    )
}

export default CampgroundAvailability;
