import React from 'react';
import './Field1.css';

function Field2({
    signIn=false
}) {
    return (
        <div>
            {signIn && (
            <div className="field-wrapper">
                <p className="title">You have successfully logged in!!!</p>
            </div>
            )}
        </div>


    );
}

export default Field2;


