import React from 'react';
import './Buttons.css';

function Buttons({
    buttons=[],
                     onButtonClick=()=>{}
                 }) {
    return (
        <div className="buttons-wrapper">
            {buttons.map((button, index)=>{
                return(
                    <div
                        className="button"
                         key={button.id}
                        onClick={()=>onButtonClick(index)}
                        style={{
                            backgroundColor: button.isSelected ? 'lightgreen' : 'white',}}
                    >1</div>
                )
            })}
        </div>
    );
}

export default Buttons;


