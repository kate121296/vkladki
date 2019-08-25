import React, { useState } from 'react';
import { getOr } from 'lodash/fp'

import './app.css';
import Tabs from "./components/Tabs/Tabs";
import Menu from "./components/Menu/Menu";
import Vkladka2 from "./components/Vkladka2/Vkladka2";

function App() {
    const [selectedTab, setSelectedTab] = useState(null);
    const [data, setData] = useState({
        input: '',
        checkbox: false,
        selectedMenuItem: ''
    });

    const handleTextChange = e => {
        const value = getOr('', ['target', 'value'], e);
        const newData = {...data};
        newData.input = value;
        setData(newData)
    };
    const handleCheckChange = () => {
        const newData = {...data};
        newData.checkbox = !newData.checkbox;
        setData(newData)
    };
    const handleChangeMenu = e => {
        const value = getOr('', ['target', 'value'], e);
        const newData = {...data};
        newData.selectedMenuItem = value;
        setData(newData)
    };
    const handleTabClick = tabNumber => {
        setSelectedTab(tabNumber);
    };
    return (
        <div className="root">
            <Tabs
                selectedTab={selectedTab}
                onTabClick={handleTabClick}
            />
            {selectedTab === 1 && (
                <Menu
                    data={data}
                    selectedTab={selectedTab}
                    onTextChange={handleTextChange}
                    onCheckChange={handleCheckChange}
                    onChangeMenu={handleChangeMenu}
                />
            )}
            {selectedTab === 2 && (
                <Vkladka2 data={data}/>
            )}
        </div>
    );
}

export default App;


