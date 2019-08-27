import React from 'react';
import { getOr } from "lodash/fp";
import './Input1.css';

function Input1({
    values=null,
    onUserNameChange = () => {},
    onUserEmailChange = () => {},
    onUserPasswordChange = () => {},
    handleRegistered = () => {},
}) {
    const userName = getOr ('', ['username'], values);
    const userEmail = getOr ('', ['email'], values);
    const userPassword = getOr ('', ['password'], values);
    return (
        <div className="input-wrapper">
               <input
                   className="input"
                   type="text"
                   placeholder="username"
                    value={userName}
                   onChange={onUserNameChange}
               />
               <input
                   className="input"
                   type="email"
                   placeholder="email"
                    value={userEmail}
                   onChange={onUserEmailChange}
               />
               <input
                   className="input"
                   type="password"
                   placeholder="password"
                    value={userPassword}
                   onChange={onUserPasswordChange}
               />
               <button
                   className="button"
                    onClick={handleRegistered}
               >
                   Registered
               </button>
        </div>
    );
}

export default Input1;


