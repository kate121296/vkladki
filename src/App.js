import React, {useState} from 'react';

import './App.css';
import Select from "./Components/Select";
import Bodyparts from "./Components/Bodyparts";

const bodyPartsTitles = [
    {
        title: 'head',

    },
    {
        title: 'left_arm',

    },
    {
        title: 'right_arm',

    },
    {
        title: 'body',

    },
    {
        title: 'left_leg',

    },
    {
        title: 'right_leg',

    },
];
const colorsParts = {
    head:'white',
    left_arm:'white',
    right_arm:'white',
    body:'white',
    left_leg:'white',
    right_leg:'white',
};

function App() {
    const [selectedBodyTitle, setSelectedBodyTitle] = useState(null);
    const [colorParts, setColorParts] = useState(colorsParts);

    const handleTitleClick = title => {
        setSelectedBodyTitle(title);
    };
    const handleColorChoose = e => {
        const newColorParts = {...colorParts};
        newColorParts[selectedBodyTitle] = e.target.value;
        setColorParts(newColorParts)

    };

    return (
        <div className="root">
           <Select
               bodyPartsTitles={bodyPartsTitles}
               onTitleClick={handleTitleClick}
               onColorChoose={handleColorChoose}
           />
            <Bodyparts
                colorParts={colorParts}
            />
        </div>
    );
}

export default App;


