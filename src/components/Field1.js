import React from 'react';
import './Field1.css';

function Field1({
    successRegistered=false,
    handleEnter=()=>{}
}) {
    return (
        <div>
            {successRegistered && (
                <div className="field-wrapper">
                    <p className="title">You have succesfully create an acount!!!</p>
                    <button
                        className="button2"
                        onClick={handleEnter}
                    >
                        Go to login page
                    </button>
                </div>
            )}
        </div>

    );
}

export default Field1;


