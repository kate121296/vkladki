import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { getOr } from 'lodash/fp'
import './App.css';
import Input from "./Components/Input";
import Menu from "./Components/Menu";

function App() {
    const [isDataLoaded , setIsDataLoaded] = useState(false);
    const [value , setValue] = useState('');
    const [data, setData] = useState([]);
    useEffect(() => {
        if( isDataLoaded===false) {
            axios.get('https://jsonplaceholder.typicode.com/todos')
                .then(function (response) {
                    setData(response.data)
                    setIsDataLoaded(true)
                })
        }
    }, [isDataLoaded, data]); // Only re-run the effect if data changes
    const handleChange = e => {
        const val = getOr('', ['target', 'value'], e);
        setValue(val)
    }
    const filteredItems = data.filter(item =>
        getOr('', ['title'], item)
            .toLowerCase()
            .includes(value.toLowerCase()),
    );
    return (
        <div className="root">
              <Input
              onChange={handleChange}
              value={value}
              />
              <Menu
              data={filteredItems}
              />
        </div>
    );
}

export default App;


