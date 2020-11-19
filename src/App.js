import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";

function App() {

    return (
        <div className="app">
            <div className="shadow_overlay_left" />
            <div className="shadow_overlay_bottom" />
            <div className="app-header">
                <Header />
            </div>
            <div className="app-content">
                <Body />
            </div>
            <div className="app-footer">
                <FontAwesomeIcon className="mail-icon" icon={faMailBulk} />
                <u>Contact us:</u><br /><br />

                Email: wrt1@hw.ac.uk<br />
                Office: Heriot Watt University, Edinburgh
            </div>
        </div>
    );
}

export default App;
