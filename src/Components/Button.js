import React, {Fragment} from 'react';
import './Button.css';

function Button({
    onOpenMenu=()=>{},
    isButtonVisible=true
}) {
    return (
        <Fragment>
            {isButtonVisible && (
                <div className="button-wrapper">
                    <button
                        className="button"
                        onClick={onOpenMenu}
                    >
                        Open menu
                    </button>
                </div>
            )}

        </Fragment>

    );
}

export default Button;


