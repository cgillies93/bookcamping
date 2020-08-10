import React, { Component } from 'react';

import Search from '../components/Search';
import TopDestinationsList from '../components/TopDestinationsList';
import GetInspiredList from '../components/GetInspiredList';
import Subscribe from '../components/Subscribe';


class HomePage extends Component {
  render() {

    return (
        <div className='home-page-container'>
          <Search />
          <TopDestinationsList />
          <GetInspiredList />
          <Subscribe />
        </div>
    );
  }
}

export default HomePage;
