import React from 'react';
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
                FOOTER INFORMATION
            </div>
        </div>
    );
}

export default App;
