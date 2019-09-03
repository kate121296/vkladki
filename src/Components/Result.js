import React from 'react';
import './Result.css';

function Result({
    firstName='',
    lastName=''
}) {
    return (
        <div className="text-wrapper">
            <p className="text">Your changes saved succesfully!</p>
            <p className="text">first name: {firstName} </p>
            <p className="text">last name: {lastName}</p>
        </div>
    );
}

export default Result;


