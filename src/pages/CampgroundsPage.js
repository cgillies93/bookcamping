import React, { Component } from 'react';

import CampgroundsList from '../components/CampgroundsList';

class CampgroundsPage extends Component {
  render() {

    return (
        <div className='campground-page-container'>
          <CampgroundsList />
        </div>
    );
  }
}

export default CampgroundsPage;
