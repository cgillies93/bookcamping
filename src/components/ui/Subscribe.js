import React from 'react';
import '../styles/Subscribe.css';

const Subscribe = () => {
    return (
      <section className='subscribe-container'>
        <h2>Subscribe</h2>
        <p>Sign up to stay up to date on the best campsites and deals!</p>
        <div className='subscribe-input-wrapper'>
          <input className='subscribe-input'
                 type='email'
                 placeholder='Your email' />
        </div>
        <div className='subscribe-button-wrapper'>
          <button className='subscribe-button'>Subscribe</button>
        </div>
      </section>
    )
}

export default Subscribe;
