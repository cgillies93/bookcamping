import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../campingLogo2.png';

const SiteBranding = () => (
    <div className="site-branding">
        <Link to="/">
            <img src={Logo} />
        </Link>
    </div>
)

export default SiteBranding;
