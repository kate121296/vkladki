import React from 'react';
import './Button.css';

function Button({
    onClick=()=>{}
}) {
    return (
            <button
                className="button"
                onClick={onClick}

            >
                Save
            </button>
    );
}

export default Button;


