import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class HeaderNav extends Component {

    render() {

        return(
            <div className="header-nav">
                <nav role="navigation">
                    <ul>
                        <li>
                            <NavLink to="/">Explore</NavLink>
                        </li>
                        <li>
                            <NavLink to="/campgrounds">Campgrounds</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/account/reservations">Account</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default HeaderNav;
