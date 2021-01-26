import React from "react";
import companyLogoImage from '../images/companyLogo.png';


const Header = () => {
    const companyLogo = companyLogoImage;

    return (
        <div className="app-header">
            <img src={companyLogo} className="company-logo" alt="logo" />
            <span className="header-text">
                WATTDEV
            </span>
        </div>
    )
}

export default Header;
