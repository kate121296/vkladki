import React from 'react';
import './Div.css';

function Div({
    selectedButton='',
}) {
    return (
            <div className="text-wrapper">
                {selectedButton && (
                    <div className="text">This is {selectedButton}</div>
                )}
            </div>
    );
}

export default Div;


