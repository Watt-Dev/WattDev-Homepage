import React from "react";
import aboutUsImg from "../images/AboutUs.png";
import visionImg from "../images/ourVision.png";
import appLogoImage from "../images/AppLogo.png";

const Body = () => {

    const visionImage = visionImg;
    const appLogo = appLogoImage;
    const contactImage = aboutUsImg;

    return (
        <div className="app-content">

            <div className="section">
                <img src={visionImage} className="image" alt=" " />
                <div className="section-text">
                    <div className="information-headers">
                        Our Vision
                    </div>
                    <div className="information-bodies">
                        With a young innovative and motivated team, we constantly try to
                        deliver the best applications to our customers.
                        Our mission is to inspire people to explore and capture
                        the best photos and share it with their network.
                    </div>
                </div>
            </div>

            <div className="section">
                <img src={appLogo} className="image" alt="logo" />
                <div className="section-text">
                    <div className="information-headers">
                        Our Products
                    </div>
                    <div className="SnapThat"> SNAPTHAT </div>
                    <div className="information-bodies">
                        SnapThat is an application where users can upload,
                        rate, and comment on each others photos of animals, nature,
                        landscape, and much more. <br /><br />

                        Web application: Link available soon<br />
                        Phone application: Link available soon
                    </div>
                </div>
            </div>

            <div className="section">
                <img src={contactImage} className="image" alt=" " />
                <div className="section-text">
                    <div className="information-headers">
                        About us
                    </div>
                    <div className="information-bodies">
                        We are eight students from Heriot Watt Univerity,
                        Edinburgh. This Company page is part of our one-year
                        program called Software Engineering. We are a company
                        developing applications for browsers, iOS, and Android.
                    </div>
                    <div className="team-members-header">
                        <br/>Team members:
                    </div>
                    <div className="team-members">
                        William Thorenfeldt - Organisational Manager/Front-End developer
                        <br/>Calum Shepherd - Secretary/Back-End developer
                        <br/>Simon Paton - Front-End developer
                        <br/>Rob Bell - Front-End developer
                        <br/>Krishna Mattapalli - Front-End developer
                        <br/>Callum Finlayson - Back-End developer
                        <br/>Jiachen Dong - Back-End developer
                        <br/>Connor Ross - Report Writer
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;
