import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = (
    <SnackbarProvider maxSnack={3}>
        <App />
    </SnackbarProvider>
)

ReactDOM.render(root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
