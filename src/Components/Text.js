import React from 'react';
import './Text.css';

function Text({
                  isAllboxSelected=()=>{}
              }) {
    return (
        <div>
            {isAllboxSelected() && (
                <p className="text">You win!</p>
            )}

        </div>
    );
}

export default Text;


