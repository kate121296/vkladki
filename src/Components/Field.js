import React from 'react';
import './Field.css';

function Field({
                   correctAnswers=0,
                   totalQuestions=0
               }) {
    return (
        <div className="field">

            <p className="text">Correct answers:{correctAnswers}/{totalQuestions}</p>
        </div>
    );
}

export default Field;


