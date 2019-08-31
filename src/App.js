import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {getOr} from 'lodash/fp'
import './App.css';

function App() {

    const [data, setData] = useState([]);
    console.log(data)
    const [isDataLoaded , setIsDataLoaded] = useState(false);
    useEffect(() => {
        if( isDataLoaded===false) {
            axios.get('https://reqres.in/api/users?fbclid=IwAR1ayoC3fzG0eyQuyGpK8nQzayzkAJCJ3WPZrqSBkFEgiys48qnH7hiS5Gw')
                .then(function (response) {
                    setData(response.data.data);
                    setIsDataLoaded(true)
                })
        }
    }, [isDataLoaded, data]); // Only re-run the effect if data changes
    return (
        <div className="root">
            <ul>
                {data.map(user => {
                    const key = user.id;
                    const email = getOr('', ['email'], user);
                    const firstName =getOr('', ['first_name'], user);
                    const lastName =getOr('', ['last_name'], user);
                    const avatar =getOr('', ['avatar'], user);
                    return (
                        <li key={key}>
                            {firstName} {lastName} - {email}-------
                            <img src={avatar} alt=""/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;


