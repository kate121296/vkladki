import React, {useState} from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Redirect} from "react-router-dom";

const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius:8,
        padding: 20,
        backgroundColor: 'lightblue',
    },
    root: {
        margin:'0 auto',
        padding: 70,
        width: 500,
    }
});
const initValues = {
    email: '',
    password: '',
};
function Login({
   uid=null,
   onSignIn=()=>{},
}) {
    const classes = useStyles();
    const [values, setValues] = useState(initValues);

    const handleChange = e => {
        const newValues = {...values};
        newValues[e.target.name] = e.target.value;
        setValues(newValues);
    };
    const handleSubmit = () => {
        const { email, password} = values;
        onSignIn(email, password);
    };
    return (
       <div className={classes.root}>
           <form className={classes.form} onSubmit={handleSubmit}>
               <TextField
                   type="email"
                   name="email"
                   variant="outlined"
                   value={values.email}
                   onChange={handleChange}
                   placeholder="Email"
               />
               <TextField
                   type="password"
                   name="password"
                   variant="outlined"
                   value={values.password}
                   onChange={handleChange}
                   placeholder="Password"
               />
               <Button
                   variant="contained"
                   color="primary"
                   onClick={handleSubmit}
               >
                   Sign in!
               </Button>
           </form>
           {uid !== null && (
               <Redirect push to="/" />
           )}
       </div>
    );
}

export default Login;