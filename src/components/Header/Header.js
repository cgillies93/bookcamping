import React, { Component } from 'react';
import './Header.css';
// Components //
import SiteBranding from './SiteBranding';
import HeaderNav from './HeaderNav';
import MobileNav from './MobileNav';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNavItems: false
        }

        this.toggleMobileNav = this.toggleMobileNav.bind(this);
    }


    toggleMobileNav() {
        this.setState({
            showNavItems: !this.state.showNavItems
        });
    }

    render() {

        return(
            <header>
                <div className="header-inner">
                    <SiteBranding />
                    <HeaderNav />
                    <MobileNav toggleMobileNav={this.toggleMobileNav}
                               showNavItems={this.state.showNavItems}/>
                </div>
            </header>

        );
    }
}

export default Header;
