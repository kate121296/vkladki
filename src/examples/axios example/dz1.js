import React, { useState } from 'react';
import './app.css';

let fields = [
    1,
    2,
    3,
    4,
    5,
];
function App() {
    const [hoveredItem, setHoverItem] = useState(null);
    const handleClick = fieldNumber =>{
        fields = fields.filter(field => field !== fieldNumber)
    }
    const handleMouseEnter = (field) => {
        setHoverItem(field)
    }
    const handleMouseLeave = () => {
        setHoverItem(null)
    }
    return (
        <div className="root">
            {fields.map(field=>{
                return(
                    <div className="header"
                        onMouseEnter={() => handleMouseEnter(field)}
                        onMouseLeave={handleMouseLeave}
                         key={field}
                    >

                        <div className="field">Item #{field}</div>
                        <div
                            onClick={() =>handleClick(field)}
                            className="close"
                            style={{
                                visibility: hoveredItem === field ? 'visible' : 'hidden',
                            }}
                        >
                            X
                        </div>
                    </div>
                )
            })}

        </div>
    );
}

export default App;


