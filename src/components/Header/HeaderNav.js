import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class HeaderNav extends Component {

    render() {

        return(
            <div className="header-nav">
                <nav role="navigation">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/campgrounds">Campgrounds</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/account">Account</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default HeaderNav;
