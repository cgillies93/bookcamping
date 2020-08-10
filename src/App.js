import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import HomePage from './pages/HomePage';
import CampgroundsPage from './pages/CampgroundsPage';
import CampgroundItemPage from './pages/CampgroundItemPage';
import ContactPage from './pages/ContactPage';
import ArticlePage from './pages/ArticlePage';
import Sitemap from './components/Sitemap';
import Footer from './components/Footer';

class App extends Component {
  render() {

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
            </Switch>
            <Sitemap />
            <Footer />
          </main>
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
