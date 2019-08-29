import React, {Fragment} from 'react';
import './Field.css';

function Field({
       fieldNumber=null,
       isFieldVisible=false
   }) {
    return (
        <Fragment>
            {isFieldVisible && (
                <div className="field-wrapper">
                    <div className="field">{fieldNumber}</div>
                </div>
            )}
        </Fragment>

    );
}

export default Field;


