import React, { Component } from 'react';
import { BrowserRouter as Router,
         Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import CampgroundsPage from './pages/CampgroundsPage/CampgroundsPage';
import CampgroundPage from './pages/CampgroundPage/CampgroundPage';
import AvailabilityPage from './pages/AvailabilityPage/AvailabilityPage';
import ReserveDetailsPage from './pages/ReserveDetailsPage/ReserveDetailsPage';
import FinalDetailsPage from './pages/FinalDetailsPage/FinalDetailsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage';
import AdminPage from './pages/AdminPage/AdminPage';
import UserAccountPage from './pages/UserAccountPage/UserAccountPage';
import MyReservationsPage from './pages/MyReservationsPage/MyReservationsPage';
import MyFavoritesPage from './pages/MyFavoritesPage/MyFavoritesPage';
import MySettingsPage from './pages/MySettingsPage/MySettingsPage';
import CreatePage from './pages/CreatePage/CreatePage';
import Page404 from './pages/404Page/404Page';
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
                        <Route path='/campgrounds/search=:query'
                               component={SearchResultsPage} />
                        <Route exact path='/campgrounds'
                                     component={CampgroundsPage} />
                        <Route exact path='/campgrounds/:name'
                               component={CampgroundPage} />
                        <Route exact path='/campgrounds/:name/availability'
                               component={AvailabilityPage} />
                        <Route exact path='/campgrounds/:name/confirm'
                              component={FinalDetailsPage} />
                        <Route exact path='/campgrounds/:name/reserve'
                               component={ReserveDetailsPage} />
                        <Route path='/contact' component={ContactPage} />
                        <Route exact path='/account' component={UserAccountPage} />
                        <Route exact path='/account/reservations'
                               component={MyReservationsPage} />
                        <Route exact path='/account/favorites'
                              component={MyFavoritesPage} />
                        <Route exact path='/account/settings'
                            component={MySettingsPage} />
                        <Route component={Page404} />
                    </Switch>
                    <Footer />
                </div>
            </Router>

        );
    }
}

export default App;
