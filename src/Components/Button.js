import React from 'react';
import './Button.css';

function Button({
                    onClick=()=>{}
                }) {
    return (
        <div>
            <button className="button"
            onClick={onClick}
            >Next</button>
        </div>
    );
}

export default Button;


