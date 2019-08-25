import React from 'react';
import './Input.css';

function Input({
    onChange = () => {},
    value = '',
}) {
    return (
        <div >
            <input
                value={value}
                onChange={onChange}
                className="input"
                type="text"
                placeholder="Enter the text"
            />
        </div>
    );
}

export default Input;


