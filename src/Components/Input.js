import React from 'react';
import './Input.css';

function Input({
                   onChange = () => {},
                   value = '',
               }) {
    return (
        <div>
            <input
                className="input"
                type="text"
                placeholder="Enter the text"
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default Input;


