import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { getOr } from "lodash/fp";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width:'50%',
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
        width:'25%',
    },
    input: {
        display: 'none',
    },
}));
function Items({
    values=null,
    onChangeValue=()=>{},
    onClick=()=>{},
}) {
    const classes = useStyles();
    const image = getOr ('', ['image'], values);
    const title = getOr ('', ['title'], values);
    const description = getOr ('', ['description'], values);
    const link = getOr ('', ['link'], values);
    return (
        <div className={classes.root}>
            <TextField
                name="image"
                label="url to image"
                className={classes.textField}
                value={image}
                onChange={onChangeValue}
                margin="normal"
            />
            <TextField
                name="title"
                label="title"
                className={classes.textField}
                value={title}
                onChange={onChangeValue}
                margin="normal"
            />
            <TextField
                name="description"
                label="description"
                className={classes.textField}
                value={description}
                onChange={onChangeValue}
                margin="normal"
            />
            <TextField
                name="link"
                label="link"
                className={classes.textField}
                value={link}
                onChange={onChangeValue}
                margin="normal"
            />
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={onClick}
            >
                Show
            </Button>
        </div>
    );
}

export default Items;


