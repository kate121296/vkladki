import React from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: 50,
        textAlign:'center',
    },
    text: {
        fontSize: 30,
        padding: 30,
        color: 'blue',
    },
});
function Products({
    label=''
}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.text}>
                {label}
            </Typography>
        </div>
    );
}

export default Products;


