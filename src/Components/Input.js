import React from 'react';
import { getOr } from 'lodash/fp'
import './Input.css';

function Input({
   values=null,
   onFirstNameChange=()=>{},
   onLastNameChange=()=>{},
}) {
    const firstName = getOr('', ['firstName'], values);
    const lastName = getOr('', ['lastName'], values);
    return (
        <div className="input-wrapper">

            <input
                className="input"
                type="text"
                placeholder="first name:"
                value={firstName}
                onChange={onFirstNameChange}
            />
            <input
                className="input"
                type="text"
                placeholder="last name:"
                value={lastName}
                onChange={onLastNameChange}
            />
        </div>
    );
}

export default Input;


