import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './app.css';

function App() {
    const [data, setData] = useState([]);
    console.log(data)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                setData(response.data)
            });
    }, [data]); // Only re-run the effect if data changes
    return (
        <div className="root">
            <h1>axios example</h1>
           <ul>
               {data.map(user => {
                   const key = user.id
                   const userName = user.name
                   return (
                       <li key={key}>
                           {userName}
                       </li>
                   )
               })}
           </ul>
        </div>
    );
}

export default App;


