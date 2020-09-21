import React, { Component } from 'react';
import './HomePage.css';

// Components //
import Search from '../../components/Search/Search';
import Popular from '../../components/Popular/Popular';
import Subscribe from '../../components/Subscribe/Subscribe';
import Inspiration from '../../components/Inspiration/Inspiration';

class HomePage extends Component {

    render() {

        return(
            <div>
                <Search />
                <Popular />
                <Inspiration />
                <Subscribe />
            </div>
        );
    }
}

export default HomePage;
