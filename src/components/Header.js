import React from "react";
import companyLogoImage from '../images/companyLogo.png';


const Header = () => {
    const companyLogo = companyLogoImage;

    return (
        <div>
            <span className="logo">
                <img src={companyLogo} className="company-logo" alt="logo" />
            </span>
            <span className="title">
                <h2 className="title-name">
                    WATTDEV
                </h2>
            </span>
        </div>
    )
}

export default Header;
