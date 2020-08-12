import React from 'react';

import Search from '../components/ui/Search';
import PopularCampgrounds from '../components/containers/PopularCampgrounds';
import GetInspiredList from '../components/ui/GetInspiredList';
import Subscribe from '../components/ui/Subscribe';


const HomePage = () => {

    return (
        <div className='home-page-container'>
          <Search />
          <PopularCampgrounds />
          <GetInspiredList />
          <Subscribe />
        </div>
    )
}

export default HomePage;
