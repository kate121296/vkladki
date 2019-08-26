import React, { useState } from 'react';
import Buttons from "./examples/dz-2/Buttons";
import Div from "./examples/dz-2/Div";
import './app.css';

function App() {
    let buttons = [
        {
            name: 'home page',
        },
        {
            name: 'products page',
        },
        {
            name: 'about us',
        },
        {
            name: 'contacts',
        },

    ];
    const [selectedButton, setSelectedButton] = useState ('');
    const handleClick = name => {
        setSelectedButton(name);
    };
    return (
        <div className="root">
              <Buttons
                  handleClick={handleClick}
                  buttons={buttons}
              />
                <Div
                    selectedButton={selectedButton}
                />
        </div>
    );
}

export default App;


