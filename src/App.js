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
import CampgroundItemPage from './pages/CampgroundItemPage';
import ContactPage from './pages/ContactPage';
import ArticlePage from './pages/ArticlePage';
import AccountPage from './pages/AccountPage';
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
              <Route path='/campgrounds/:id' component={CampgroundItemPage} />
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
