import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getOr } from "lodash/fp"

const useStyles = makeStyles(theme => ({
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
    button: {
        margin: theme.spacing(1),
        width:'60%',
    },
    input: {
        display: 'none',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        width:'50%',
    },

}));

function Inputs({
    onChangeValue=()=>{},
    onAddProduct=()=>{},
    values=null
}) {
    const classes = useStyles();
    const name = getOr ('', ['name'], values);
    const image = getOr ('', ['image'], values);
    return (
        <div className={classes.root}>
            <TextField
                name="name"
                label="name"
                className={classes.textField}
                value={name}
                onChange={onChangeValue}
                margin="normal"
            />
            <TextField
                name="image"
                label="image"
                className={classes.textField}
                value={image}
                onChange={onChangeValue}
                margin="normal"
            />
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={onAddProduct}
            >
                Add product
            </Button>
        </div>
    );
}

export default Inputs;


