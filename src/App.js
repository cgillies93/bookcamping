import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';

import './App.css';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import HomePage from './pages/HomePage';
import CampgroundsPage from './pages/CampgroundsPage';
import CampgroundItemPage from './components/containers/CampgroundItemPage';
import ContactPage from './pages/ContactPage';
import ArticlePage from './pages/ArticlePage';
import AccountPage from './pages/AccountPage';
import MakeReservationPage from './pages/MakeReservationPage';
import Sitemap from './components/ui/Sitemap';
import Footer from './components/ui/Footer';

const App = () => {

    return (
      <Router>
        <div className='app'>
          <main>
            <Header />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/campgrounds' component={CampgroundsPage} />
              <Route exact path='/campgrounds/:id' component={CampgroundItemPage} />
              <Route path='/campgrounds/:id/reservation' component={MakeReservationPage} />
              <Route path='/contact' component={ContactPage} />
              <Route path='/article' component={ArticlePage} />
              <Route path='/account' component={AccountPage} />
            </Switch>
            <Sitemap />
            <Footer />
          </main>
        </div>
      </Router>
    )
}

export default hot(module)(App);
