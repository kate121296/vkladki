import React, { useState, useEffect } from 'react';
import { getOr } from 'lodash/fp'
import axios from "axios";

import './app.css';
import Input from "./components2/Input/Input";
import Ul from "./components2/Ul/Ul";


function App() {
    const [isDataLoaded , setIsDataLoaded] = useState(false);
    const [value , setValue] = useState('');
    const [data, setData] = useState([]);
    useEffect(() => {
        if( isDataLoaded===false) {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(function (response) {
                    setData(response.data)
                    setIsDataLoaded(true)
                })
        }
    }, [isDataLoaded, data]); // Only re-run the effect if data changes

    const handleChange = e => {
        const val = getOr('', ['target', 'value'], e);
        setValue(val)
    };
    const filteredItems = data.filter(item =>
        getOr('', ['name'], item)
            .toLowerCase()
            .includes(value.toLowerCase()),
    );
    return (
        <div className="root">
           <Input
               value={value}
               onChange={handleChange}
           />
          <Ul data={filteredItems}/>
        </div>
    );
}

export default App;


