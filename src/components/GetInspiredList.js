import React, { Component } from 'react';
import './GetInspiredList.css';
import GetInspiredItem from './GetInspiredItem';

import inspirations from '../inspirations';

class GetInspiredList extends Component {
  render() {

    return (
      <section className='get-inspired-container'>
        <h2>Get Inspired</h2>
        <div className='get-inspired-list-wrapper'>
          <div className='get-inspired-item'>
            <GetInspiredItem inspiration={inspirations[0]}/>
          </div>
          <div className='get-inspired-item'>
            <GetInspiredItem inspiration={inspirations[1]}/>
          </div>
          <div className='get-inspired-item'>
            <GetInspiredItem inspiration={inspirations[2]}/>
          </div>
          <div className='get-inspired-item'>
            <GetInspiredItem inspiration={inspirations[3]}/>
          </div>
        </div>
      </section>

    );
  }
}

export default GetInspiredList;
