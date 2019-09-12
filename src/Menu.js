import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    button: {
        margin: theme.spacing(1),
        width: '30%',
    },
    input: {
        display: 'none',
    },
}));

function Menu({
    labelButtonFirst='',
    labelButtonSecond='',
    labelButtonThird='',
    selectedPage='',
    onClick=()=>{}
  }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button
                name='home'
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={()=>onClick('home')}
                style={{backgroundColor: selectedPage === 'home' ? 'green' : null}}
            >
                {labelButtonFirst}
            </Button>
            <Button
                name='products'
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={()=>onClick('products')}
                style={{backgroundColor: selectedPage ===  'products'? 'green' : null}}
            >
                {labelButtonSecond}
            </Button>
            <Button
                name='contacts'
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={()=>onClick('contacts')}
                style={{backgroundColor: selectedPage === 'contacts' ? 'green' : null}}
            >
                {labelButtonThird}
            </Button>
        </div>
    );
}

export default Menu;


