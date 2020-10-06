import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

class MobileNav extends Component {

    toggleMobileNav() {
        this.props.toggleMobileNav();
    }

    render() {

        return(
            <div className="mobile-nav-wrapper">
                <button onClick={() => this.toggleMobileNav()}>
                    <FaBars />
                </button>
                {
                    this.props.showNavItems ?
                        <nav className="mobile-nav">
                            <ul>
                                <li>
                                    <NavLink to="/home"
                                             onClick={() => this.toggleMobileNav()}>
                                        Explore
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/campgrounds"
                                             onClick={() => this.toggleMobileNav()}>
                                        Campgrounds
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact"
                                             onClick={() => this.toggleMobileNav()}>
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/account"
                                             onClick={() => this.toggleMobileNav()}>
                                        Account
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    :
                        null
                }
            </div>
        );
    }
}

export default MobileNav;
