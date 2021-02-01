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
                        About Us
                    </div>
                    <div className="information-bodies">
                        We are eight students from Heriot Watt Univerity,
                        Edinburgh.  This Company page is part of our one-year
                        program called Software Engineering. We are a company
                        developing applications for browsers, iOS, and Android.
                    </div>
                    <div className="team-members-header">
                        <br/>Team members:
                    </div>
                    <div className="team-members">
                        <table className="table">
                            <tr>
                                <th className="table-header-left">
                                    Name
                                </th>
                                <th className="table-middle"/>
                                <th className="table-header-right">
                                    Position
                                </th>
                            </tr>
                            <tr>
                                <td className="table-data-left">
                                    William Thorenfeldt
                                </td>
                                <td className="table-middle"/>
                                <td className="table-data-rigth">
                                    Organisational Manager/Front-End developer
                                </td>
                            </tr>
                            <tr>
                                <td className="table-data-left">
                                    Calum Shepherd
                                </td>
                                <td className="table-middle"/>
                                <td className="table-data-rigth">
                                    Secretary/Back-End developer
                                </td>
                            </tr>
                            <tr>
                                <td className="table-data-left">
                                    Simon Paton
                                </td>
                                <td className="table-middle"/>
                                <td className="table-data-rigth">
                                    Front-End developer
                                </td>
                            </tr>
                            <tr>
                                <td className="table-data-left">
                                    Rob Bell
                                </td>
                                <td className="table-middle"/>
                                <td className="table-data-rigth">
                                    Front-End developer
                                </td>
                            </tr>
                            <tr>
                                <td className="table-data-left">
                                    Krishna Mattapalli
                                </td>
                                <td className="table-middle"/>
                                <td className="table-data-rigth">
                                    Front-End developer
                                </td>
                            </tr>
                            <tr>
                                <td className="table-data-left">
                                    Callum Finlayson
                                </td>
                                <td className="table-middle"/>
                                <td className="table-data-rigth">
                                    Back-End developer
                                </td>
                            </tr>
                            <tr>
                                <td className="table-data-left">
                                    Jiachen Dong
                                </td>
                                <td className="table-middle"/>
                                <td className="table-data-rigth">
                                    Back-End developer
                                </td>
                            </tr>
                            <tr>
                                <td className="table-data-left">
                                    Connor Ross
                                </td>
                                <td className="table-middle"/>
                                <td className="table-data-rigth">
                                    Report Writer
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;
