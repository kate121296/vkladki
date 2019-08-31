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
            axios.get('https://jsonplaceholder.typicode.com/photos?fbclid=IwAR1qmjORFpmaSdfwJrdgJgwA3qJflJxzBCv0ldl2imB94mlSvB6jKGyi098')
                .then(function (response) {
                    setData(response.data);
                    setIsDataLoaded(true)
                })
        }
    }, [isDataLoaded, data]); // Only re-run the effect if data changes
    return (
        <div className="root">
            <ul className="picture">
                {data.map(user => {
                    const key = user.id;
                    const avatar =getOr('', ['url'], user);
                    return (
                        <li key={key}>
                            <img className="img" src={avatar} alt=""/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;


