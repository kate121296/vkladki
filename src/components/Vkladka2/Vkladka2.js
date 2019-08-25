import React, { Fragment, useState } from 'react';
import { getOr, isEmpty } from "lodash/fp";

import './vkladka2.css';

function Vkladka2({ data }) {
    const [isDataViscible, setIsDataVisible] = useState(false);
    const input = getOr('', ['input'], data);
    const checkbox = getOr('', ['checkbox'], data);
    const selectedMenuItem = getOr('', ['selectedMenuItem'], data);
    const checkBoxText = checkbox === true ? 'selected' : 'not selected';
    const showData = !isEmpty(input) && !isEmpty(selectedMenuItem);
    const handleClickButton = () => {
        setIsDataVisible(!isDataViscible);
    };
    const text = isDataViscible === true ? 'Hide data' : 'Show data';
    return (
        <div>
            {showData && (
                <Fragment>
                    <button onClick={handleClickButton}>{text}</button>
                    {isDataViscible && (
                        <ul>
                            <li>{input}</li>
                            <li>{checkBoxText}</li>
                            <li>{selectedMenuItem}</li>
                        </ul>
                    )}
                </Fragment>
            )}
        </div>
    );
}

export default Vkladka2;


