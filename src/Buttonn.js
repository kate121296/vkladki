import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));
function Buttonn({
    onClick=()=>{},
    label=''
}) {
    const classes = useStyles();
    return (
        <div>
            <Button variant="contained" color="secondary" className={classes.button}
            onClick={onClick}>
                {label}
            </Button>
        </div>
    );
}

export default Buttonn;


