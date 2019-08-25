import React from 'react';
import { getOr } from 'lodash/fp'

import './menu.css';

function Menu({
    data = null,
    selectedTab = null,
    onTextChange = () => {},
    onCheckChange = () => {},
    onChangeMenu = () => {},
}) {
    const inputValue = getOr('', ['input'], data);
    const checkboxValue = getOr('', ['checkbox'], data);
    const selectValue = getOr('', ['selectedMenuItem'], data);
    return (
        <div className="root">
            {selectedTab && (
                <div className="menu">
                    <input
                        value={inputValue}
                        onChange={onTextChange}
                        className="item"
                        type="text"
                        placeholder="Enter the text"
                    />
                    <input
                        onChange={onCheckChange}
                        className="item"
                        type="checkbox"
                        value={checkboxValue}
                    />
                    <select value={selectValue} onChange={onChangeMenu} className="item">
                        <option value="Volvo">Volvo</option>
                        <option value="Saab">Saab</option>
                        <option value="Mercedes">Mercedes</option>
                        <option value="Audi">Audi</option>
                    </select>
                </div>
            )}
        </div>
    );
}

export default Menu;


