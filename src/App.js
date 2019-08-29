import React, {useState} from 'react';
import './App.css';

import Carsparts from "./Components/Carsparts";
import Inputs from "./Components/Inputs";

const carParts = [
    'cars_upper_part',
    'cars_lower_part',
    'left_wheel',
    'right_wheel',
];
const colorsParts = {
    cars_upper_part: 'white',
    cars_lower_part: 'white',
    left_wheel: 'white',
    right_wheel: 'white',
};
function App() {
    const [colors, setSColors] = useState(colorsParts);
    const handleColorPartChange = (value, part) => {
        const newColors  = {...colors}
        newColors[part] = value
        setSColors(newColors)
        console.log(newColors)
    }
    return (
        <div className="root">
           <Carsparts
               colorsParts={colors}
           />
           <Inputs
               onColorPartChange={handleColorPartChange}
               carParts={carParts}
           />
        </div>
    );
}

export default App;


