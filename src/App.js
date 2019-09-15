import React, {Fragment, useState, useEffect} from 'react';
import firebase from "./firebaseConfig";
import withFirebaseAuth from "react-auth-firebase";
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { getOr } from 'lodash/fp';
import Link from "@material-ui/core/Link";
import { useSnackbar } from 'notistack';
const useStyles = makeStyles(theme => ({
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
}));
const initSignUpData = {
    email: '',
    password: '',
};
function App({
    signInWithEmail,
    signUpWithEmail,
    signOut,
    user,
    error,
}) {
    const uid = getOr(null, ['uid'], user)
    const userEmail = getOr('', ['email'], user)
    const { enqueueSnackbar } = useSnackbar();
    const classes = useStyles();
    const [signUpData, setSignUpData] = useState(initSignUpData);
    const [authType, setAuthType] = useState('signup');
    const handleSetSignUpData = e => {
        const newSignUpData = {...signUpData};
        newSignUpData[e.target.name] = e.target.value;
        setSignUpData(newSignUpData)
    };
    const handleFormSubmit = () => {
        const { email, password } = signUpData
        signUpWithEmail(email, password)
        return authType==='signup' ? signUpWithEmail(email, password) : signInWithEmail(email, password)
    };
    const handleChangeAuthType = () => {
        setAuthType(authType==='signup' ? 'signin' : 'signup')
    }

    useEffect(() => {
        if (error) {
            if (error.message.includes('Reference.child failed: First argument was an invalid path = "undefined". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')) {
                enqueueSnackbar('Account created successfully!', { variant: 'success' });
            }
            else enqueueSnackbar(error.message, { variant: 'warning' });
        }
    }, [enqueueSnackbar, error]);

    return (
        <div className={classes.root}>
            {!uid && (
                <Fragment>
                    <form className={classes.form} onSubmit={handleFormSubmit}>
                        <TextField
                            type="email"
                            name="email"
                            variant="outlined"
                            value={signUpData.email}
                            onChange={handleSetSignUpData}
                            placeholder="Email"
                        />
                        <TextField
                            type="password"
                            name="password"
                            variant="outlined"
                            value={signUpData.password}
                            onChange={handleSetSignUpData}
                            placeholder="Password"
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleFormSubmit}
                        >
                            {authType==='signup' ? 'Sign up' :'Sign in'}
                        </Button>
                    </form>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={handleChangeAuthType}
                    >
                        {authType==='signup' ? 'I already have an account!' : 'I want to registered new account!'}
                    </Link>
                </Fragment>

            )}
            {uid && (
                <div>
                    <h1>Hello, {userEmail}</h1>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={signOut}
                    >
                        Sign out!
                    </Button>
                </div>
            )}
        </div>
    );
}

const authConfig = {
    email: {
        verifyOnSignup: false,
        saveUserInDatabase: true
    },
};

export default withFirebaseAuth(App, firebase, authConfig);


