import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Switchers from "./Switchers";
const useStyles = makeStyles(theme => ({
    root: {
        overflow: 'hidden',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'bisque',
        display: 'flex'
    }
}))
function App() {
    const classes = useStyles();
    const [state, setState] = useState([
        {
            checked: false,
            title: 'title'
        },
        {
            checked: false,
            title: 'image'
        },
        {
            checked: false,
            title: 'a link'
        },
    ]);

    const handleChange = i => {
        const newState = [...state];

        // set all checked to false
        newState.forEach((state, index) => {
            if (index !== i) {
                state.checked = false
            }
        })

        newState[i].checked = !newState[i].checked;
        setState(newState)
    };

    return (
        <div className={classes.root}>
           <Switchers
               onChange={handleChange}
               state={state}
           />
        </div>
    );
}

export default App;


