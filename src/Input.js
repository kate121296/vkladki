import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root:{
        display:'flex',
        flexDirection:'column',
    },
    button: {
        margin: theme.spacing(1),
        width: '15%',
    },
    input: {
        display: 'none',
        width: '20%',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
}));
function Input({
    value='',
    onChange=()=>{},
    onClick=()=>{},
}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TextField
                id="standard-name"
                label="Name"
                className={classes.textField}
                value={value}
                onChange={onChange}
                margin="normal"
            />
            <Button variant="contained" color="secondary" className={classes.button} onClick={onClick}>
                Add
            </Button>
        </div>
    );
}

export default Input;


