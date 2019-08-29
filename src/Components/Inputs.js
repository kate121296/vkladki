import React from 'react';
import './Inputs.css';

function Inputs({
                    onColorPartChange=()=>{},
                    carParts=[]
                }) {
    return (
        <div className="inputs-wrapper">
            {carParts.map(part => {
                const placeholder = `enter color for the ${part}`
                return (
                    <input
                        key={part}
                        className="input"
                        type="text"
                        placeholder={placeholder}
                        onChange={e => onColorPartChange(e.target.value, part)}

                    />
                )
            })}
        </div>
    );



}

export default Inputs;


