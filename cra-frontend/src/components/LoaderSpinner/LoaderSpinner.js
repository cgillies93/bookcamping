import React from 'react';
import './LoaderSpinner.css';

const LoaderSpinner = () => (
    <div className='ls-wrapper'>
        <h2>Loading</h2>
    <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
    </div>
    </div>
)

export default LoaderSpinner;
