import React, { useState } from 'react';
import { getOr } from 'lodash/fp'

import './app.css';
import Tabs from "./components/Tabs/Tabs";
import Menu from "./components/Menu/Menu";
import Vkladka2 from "./components/Vkladka2/Vkladka2";

function App() {

    return (
        <div className="root">
            <ul className="list-wrapper">
                <li className="list">1</li>
            </ul>
        </div>
    );
}

export default App;


