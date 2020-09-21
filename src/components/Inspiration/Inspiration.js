import React, { Component } from 'react';
import './Inspiration.css';

class Inspiration extends Component {

    render() {

        return(
            <section className='inspiration-section'>
                <h2>Get Inspired</h2>
                <div className="wrapper">
                    <div className="home-hero">
                        <div className="inspiration-feature">
                            <h3>Featured</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="inspiration-item-one">
                            <h3>Article One</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur?</p>
                        </div>
                        <div className="inspiration-item-two">
                            <h3>10 things ipsum dolor sit amet.</h3>
                            <p>Consectetur adipiscing elit.</p>
                        </div>
                        <div className="inspiration-item-three">
                            <h3>Article Three</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                        <div className="inspiration-item-four">
                            <h3>Article Four</h3>
                            <p>Ipsum dolor sit amet.</p>
                        </div>
                        <div className="inspiration-item-five">
                            <h3>Article Five</h3>
                            <p>Ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Inspiration;
