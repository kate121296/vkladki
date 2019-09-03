import React from 'react';
import { getOr } from 'lodash/fp'
import './Input.css';
import Button from "./Button";

function Input({
   values=null,
   onChangeValues=()=>{},
   onClick=()=>{},
}) {
    const firstName = getOr('', ['firstName'], values);
    const lastName = getOr('', ['lastName'], values);
    return (
        <form className="input-wrapper">

            <input
                name="firstName"
                className="input"
                type="text"
                placeholder="first name:"
                value={firstName}
                onChange={onChangeValues}
            />
            <input
                name="lastName"
                className="input"
                type="text"
                placeholder="last name:"
                value={lastName}
                onChange={onChangeValues}
            />
            <Button
                onClick={onClick}
            />
        </form>
    );
}

export default Input;


