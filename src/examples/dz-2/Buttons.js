import React from 'react';
import './Buttons.css';

function Buttons({
    handleClick = () => {},
    buttons='',
}) {
    return (

           <div className="buttons-wrapper">
               {buttons.map(button => {
                   const buttonName = button.name;
                   return(
                       <button
                           className="button"
                            onClick={() => handleClick(buttonName)}
                           key={button}
                       >
                           {buttonName}
                       </button>
                   )
               })}
            </div>

    );
}

export default Buttons;


