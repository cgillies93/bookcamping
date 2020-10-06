import React, { Component } from 'react';
import './HomePage.css';

// Components //
import Search from '../../components/Search/Search';
import Featured from '../../components/Featured/Featured';
import Subscribe from '../../components/Subscribe/Subscribe';
import Inspiration from '../../components/Inspiration/Inspiration';
import Nearby from '../../components/Nearby/Nearby';

const API_URI = 'http://localhost:5000';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPosition: {},
            nearbyCampgrounds: [],
            featured: [],
            isLoaded: false
        }

        this.fetchFeatured = this.fetchFeatured.bind(this);
    }

    componentDidMount() {

        navigator.geolocation.getCurrentPosition((position) => {
            this.state.currentPosition.lat = position.coords.latitude;
            this.state.currentPosition.lon = position.coords.longitude;

            const data = {
                'lat': position.coords.latitude,
                'lon': position.coords.longitude
            }

            fetch(`${API_URI}/nearby`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then(jsonResponse => {
                this.setState({
                    nearbyCampgrounds: jsonResponse.campgrounds,
                    isLoaded: true
                });
            },
            (error) => {
                this.setState({
                    isLoaded: false,
                    error
                })
            }
        )
        });

        this.fetchFeatured();
    }

    fetchFeatured() {
        fetch(`${API_URI}/featured`)
        .then(res => res.json())
        .then(jsonResponse => {
            this.setState({
                featured: jsonResponse.featured
            });
        },
        (error) => {
            this.setState({
                error
            });
        }
    );
    }

    render() {

        return(
            <div>
                <Search />
                <Featured campgrounds={this.state.featured}/>
                <Nearby campgrounds={this.state.nearbyCampgrounds}/>
                <Inspiration />
                <Subscribe />
            </div>
        );
    }
}

export default HomePage;
