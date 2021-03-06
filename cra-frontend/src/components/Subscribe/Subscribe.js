import React, { Component } from 'react';
import './Subscribe.css';

class Subscribe extends Component {

    render() {
        return (
            <section className='subscribe-section'>
                <h2>Subscribe</h2>
                <p>Sign up to stay up to date on the best campsites and deals!</p>
                <div className='subscribe-input-wrapper'>
                    <input className='subscribe-input'
                           type='email'
                           placeholder='Your email' />
                </div>
                <div className='subscribe-btn-wrapper'>
                    <button>Subscribe</button>
                </div>
            </section>
        );
    }
}

export default Subscribe;
