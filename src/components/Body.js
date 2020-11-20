import React from "react";
import aboutUsImg from "../images/AboutUs.png";
import visionImg from "../images/ourVision.png";
import appLogoImage from "../images/AppLogo.png";

const Body = () => {

    const visionImage = visionImg;
    const appLogo = appLogoImage;
    const contactImage = aboutUsImg;

    return (
        <div>
            <div className="our-vision">
                <div className="left">
                    <span className="image-box">
                        <img src={visionImage} className="our-vision-image" alt=" " />
                    </span>
                </div>
                <div className="right">
                    <h3 className="information-headers">
                        Our Vision
                    </h3>
                    <div className="information-bodies">
                        We care about the nature and want to help people
                        interact and share the best of the best from the
                        nature with each other.
                    </div>
                </div>
            </div>

            <div className="our-products">
                <div className="left">
                        <span className="image-box">
                            <img src={appLogo} className="our-product-image" alt="logo" />
                        </span>
                </div>
                <div className="right">
                    <h3 className="information-headers">
                        Our Products
                    </h3>
                    <h4 className="SnapThat"> SNAPTHAT </h4>
                    <div className="information-bodies">
                        An application where users can upload and rate
                        photos of animals, nature, landscape, and much more. <br /><br />

                        Web application: Link available soon<br />
                        Phone application: Link available soon
                    </div>
                </div>
            </div>
            <div className="contact-us">
                <div className="left">
                        <span className="image-box">
                            <img src={contactImage} className="contact-us-image" alt=" " />
                        </span>
                </div>
                <div className="right">
                    <h3 className="information-headers">
                        About us
                    </h3>
                    <div className="information-bodies">
                        We are eight students from Heriot Watt Univerity,
                        Edinburgh. This Company page is part of our one-year
                        program called Software Engineering. We are a company
                        developing applications for browsers, iOS, and Android.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;
