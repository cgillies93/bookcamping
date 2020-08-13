import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CampgroundAvailability.css';

const CampgroundAvailability = ({ siteTypes }) => {

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
                {
                  siteTypes.map(type => (
                    <tr>
                      <td>
                        {type.name}
                      </td>
                      <td>${type.price.toFixed(2)}</td>
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
                        <Link to='/campgrounds/1/reservation'>
                        Book Now
                        </Link>
                      </td>
                    </tr>
                  ))
                }

              </tbody>
            </table>
          </div>
        </div>
    )
}

export default CampgroundAvailability;
