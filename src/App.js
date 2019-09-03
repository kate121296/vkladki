import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';

import './App.css';

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: 11,
        backgroundColor: 'lightgreen',
    },
    button: {
        display:'block',
        marginTop: 20,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    text: {
        fontSize: 20,
        color: 'blue',
        padding:10,
    }
}));

function App() {
    const classes = useStyles();

    const [open,setOpen] = useState(false);
    const [isDrawerOpened,setIsDrawerOpened] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = ()=> {
        setOpen(false);
    }
    const handleClick = () =>{
        handleClose()
        console.log(1)
    }
    return (

        <div className="root">
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>title of the dialog</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        text of the dialog
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        no
                    </Button>
                    <Button onClick={handleClick} color="primary">
                        yes
                    </Button>
                </DialogActions>
            </Dialog>
            <Button
                variant="contained"
                color="primary"
                classes={{
                    root: classes.root,
                }}
                onClick={handleOpen}
            >
                show dialog
            </Button>
            <Button  onClick={() => setIsDrawerOpened(true)} variant="outlined" color="secondary" className={classes.button}>
                Show drawer
            </Button>
            <SwipeableDrawer
                anchor="right"
                open={isDrawerOpened}
                onClose={() => setIsDrawerOpened(false)}
                onOpen={() => setIsDrawerOpened(true)}
            >
                <Typography variant="h1" className={classes.text}>
                    hello, this is the drawer
                </Typography>
            </SwipeableDrawer>
        </div>
    );
}

export default App;


