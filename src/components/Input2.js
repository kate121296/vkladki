import React from 'react';
import { getOr } from "lodash/fp";
import './Input1.css';

function Input2({
        onUserRegisteredNameChange = ()=> {},
        onUserRegisteredPasswordChange = ()=> {},
        users=null,
        handleSignIn=()=>{},
        isInput2Visible=false,
}) {
    const userRegisteredName = getOr ('', ['username'], users);
    const userRegisteredPassword = getOr ('', ['password'], users);
    return (

        <div className="input-wrapper">
            {isInput2Visible && (
                <div>
                    <input
                        className="input"
                        type="text"
                        placeholder="username"
                        value={userRegisteredName}
                        onChange={onUserRegisteredNameChange}
                    />
                    <input
                        className="input"
                        type="password"
                        placeholder="password"
                        value={userRegisteredPassword}
                        onChange={onUserRegisteredPasswordChange}

                    />
                    <button
                        className="button"
                        onClick={handleSignIn}
                    >
                        Sing in
                    </button>
                </div>

            )}

        </div>
    );
}

export default Input2;


