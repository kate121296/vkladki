import React from 'react';
import './App.css';
const text = 'HELLO_VASYA'
const capitalize = text =>
{
    return text.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())
}
function App() {
    const STR = text.replace("_"," ")
    return (
        <div className="root">
           <p> {capitalize(STR)}</p>
        </div>
    );
}

export default App;


