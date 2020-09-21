import React, { Component } from 'react';
import { BrowserRouter as Router,
         Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import CampgroundsPage from './pages/CampgroundsPage/CampgroundsPage';
import CampgroundPage from './pages/CampgroundPage/CampgroundPage';
import ContactPage from './pages/ContactPage/ContactPage';
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

class App extends Component {

    render() {

        return(
            <Router>
                <ScrollToTop />
                <div className='app'>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/campgrounds'
                                     component={CampgroundsPage} />
                        <Route path='/campgrounds/?search=:query'
                               component={SearchResultsPage} />
                        <Route exact path='/campgrounds/:name'
                               component={CampgroundPage} />
                        <Route path='/contact' component={ContactPage} />
                    </Switch>
                    <Footer />
                </div>
            </Router>

        );
    }
}

export default App;
