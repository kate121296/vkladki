import React, {useState, useEffect} from 'react';
import Menu from "./Menu";
import Home from "./Home";
import Products from "./Products";
import Contacts from "./Contacts";

import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";

const useStyles = makeStyles ({
    root: {
        overflowY:'auto',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'lightpink',
    },
});

function App() {
    const classes = useStyles();
    const[selectedPage, setSelectedPage] = useState('');
    const [isDataLoaded , setIsDataLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        if( isDataLoaded===false) {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(function (response) {
                    setData(response.data);
                    setIsDataLoaded(true)
                })
        }
    }, [isDataLoaded, data]); // Only re-run the effect if data changes


    const handleSelectPageClick=name=>{
        setSelectedPage(name===selectedPage ? '' : name)
    };
    return (
        <div className={classes.root}>
            <Menu
                selectedPage={selectedPage}
                labelButtonFirst='Home'
                labelButtonSecond='Products'
                labelButtonThird='Contacts'
                onClick={handleSelectPageClick}
            />
            {selectedPage==='home' && (
                <Home
                    label='Welcome to the home page!!!'
                />
            )}
            {selectedPage==='products' && (
                <Products
                    label='Our contacts: +1234567890'
                />
            )}
            {selectedPage==='contacts' && (
                <Contacts
                    data={data}
                    label='List of titles:'
                />
            )}
        </div>
    );
}

export default App;


