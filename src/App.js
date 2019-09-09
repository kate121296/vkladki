import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getOr } from "lodash/fp";
import firebase from 'firebase'
import { connect } from 'react-firebase'
import {  useSnackbar } from 'notistack';

import Items from "./Items";
import Cards from "./Cards";
import './App.css';

firebase.initializeApp({
    databaseURL: 'https://fir-app-1-60778.firebaseio.com/'
});

const useStyles = makeStyles ({
    root: {
        overflow: 'hidden',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'bisque',
        display: 'flex'
    },
});

const initValues = {
    image: '',
    title:'',
    description:'',
    link:'',
};
function App({
     cardsData,
     onSetCardsData
 }) {
    const { enqueueSnackbar } = useSnackbar();
    const classes = useStyles();
    const [isCardVisible, setIsCardVisible] = useState(false);
    const [values, setValues] = useState(initValues);

    useEffect(() => {
        if (cardsData) {
            if(cardsData.image==='' || cardsData.title==='' || cardsData.description==='' || cardsData.link==='')return;
            setIsCardVisible(true)
        }
    }, [cardsData]);

    const handleChangeValue = e =>{
        const value = getOr('', ['target', 'value'], e);
        const name = getOr('', ['target', 'name'], e);
        const newNames = {...values};
        newNames[name] = value;
        setValues(newNames)
    };
    const handleClick = () => {
        if(values.image==='' || values.title==='' || values.description==='' || values.link===''){
            return enqueueSnackbar('Error', {
                variant: 'warning'
            })
        }
        setIsCardVisible(true);
        onSetCardsData(values);
        setValues(initValues)
    };
    return (
        <div className={classes.root}>
           <Items
           values={values}
           onChangeValue={handleChangeValue}
           onClick={handleClick}
           />
            {isCardVisible && (
                <Cards
                    values={cardsData}
                />
            )}

        </div>
    );
}

const mapFirebaseToProps = (props, ref) => ({
    cardsData: 'cards',
    onSetCardsData: (data) => ref(`cards`).set(data),
});

export default connect(mapFirebaseToProps)(App)


