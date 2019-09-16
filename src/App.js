import React, {Fragment, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';
import { getOr } from 'lodash/fp';
import firebase from "./firebaseConfig";
import withFirebaseAuth from "react-auth-firebase";

const useStyles = makeStyles({
    buttons: {
        display:'flex',
        alignItems: 'center',
    },
    toolbar: {
        display: 'flex',
        alignItems:'center',
        justifyContent:'space-between',
    },
    link:{
        color:'white',
        textDecoration: 'none',
    },
});

function App({
     signInWithEmail,
     signUpWithEmail,
     signOut,
     user,
     error,
 }) {
    const uid = getOr(null, ['uid'], user);
    const userEmail = getOr('', ['email'], user);
    const { enqueueSnackbar } = useSnackbar();
    const classes = useStyles();

    useEffect(() => {
        if (error) {
            if (error.message.includes('Reference.child failed: First argument was an invalid path = "undefined". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')) {
                enqueueSnackbar('Account created successfully!', { variant: 'success' });
            }
            else enqueueSnackbar(error.message, { variant: 'warning' });
        }
    }, [enqueueSnackbar, error]);
    return (
        <Router>
            <div>
                <AppBar position="static">
                    <Toolbar className={classes.toolbar}>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <Link className={classes.link} to="/">
                                <MenuIcon />
                            </Link>
                        </IconButton>
                        <div className={classes.buttons}>
                            {uid===null && (
                                <Fragment>
                                    <Button color="inherit">
                                        <Link className={classes.link} to="/login">Login</Link>
                                    </Button>
                                    <Button color="inherit">
                                        <Link className={classes.link} to="/register">Register</Link>
                                    </Button>
                                </Fragment>
                            )}
                            {uid !==null && (
                                <Button color="inherit" onClick={signOut}>
                                    Logout
                                </Button>
                            )}
                        </div>
                    </Toolbar>
                </AppBar>
                <Route
                    exact
                    path="/"
                    component={() => <Home
                        userEmail={userEmail}
                        uid={uid}
                    />}
                />
                <Route
                    exact path="/login"
                    component={()=> <Login
                        uid={uid}
                        onSignIn={signInWithEmail}
                    />}
                />
                <Route
                    exact path="/register"
                    component={()=> <Register
                        onSignUp={signUpWithEmail}
                        uid={uid}
                    />}
                />
            </div>
        </Router>
    );
}
const authConfig = {
    email: {
        verifyOnSignup: false,
        saveUserInDatabase: true
    },
};

export default withFirebaseAuth(App, firebase, authConfig);
