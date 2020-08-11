import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import C from './constants';
import appReducer from './store/reducers';
import { createStore } from 'redux';


const store = createStore(appReducer, initial);


// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
//   );
