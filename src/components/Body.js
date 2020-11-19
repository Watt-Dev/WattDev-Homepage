import React from "react";
import todoDummyImage from "../images/todoImage.png";
import appLogoImage from "../images/AppLogo.png";

const Body = () => {

    const visionImage = todoDummyImage;
    const appLogo = appLogoImage;
    const contactImage = todoDummyImage;

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
                        Here comes all information about our vision <br />
                        Here comes all information about our vision <br />
                        Here comes all information about our vision <br />
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
                        Here comes all information about SnapThat <br />
                        And maybe a link to the web app, and the store <br />
                        where it can be bought. <br />
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
                        Contact us
                    </h3>
                    <div className="information-bodies">
                        Here comes all information about how to contact us <br />
                        Here comes all information about how to contact us <br />
                        Here comes all information about how to contact us <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;