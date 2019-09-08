import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase'
import { connect } from 'react-firebase'

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
    html: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        backgroundColor: 'honeydew',
    },
    ingredients: {
        width: '40%;',
    },
    ingredient: {
        border: '2px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        padding: 20,
    },
    plus: {
        width: 50,
        height: 30,
        backgroundColor: 'darkorange',
        marginRight: 20,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'aqua',
        }

    },

    minus: {
        width: 50,
        height: 30,
        backgroundColor: 'darkorange',
        marginLeft: 20,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'aqua',
        }
    },

    img: {
        width: 50,
        height: 50,
        borderRadius: 30,
    },

    button:{
        '&:hover': {
            backgroundColor: 'orange',
        }
    },
    burger: {
        margin: '200px 0px 0px 150px',
        width:'40%',

    },
    bulka1: {
        width: '100%',
        height: 50,
        borderRadius: '40px 40px 10px 10px',
        backgroundColor: 'brown',
        marginBottom: 10,
    },
    bulka2: {
        width: '100%',
        height: 50,
        borderRadius:  '10px 10px 40px 40px',
        backgroundColor: 'brown',
        marginTop: 10,
    },

    cheese: {
        width: '100%',
        height: 20,
        backgroundColor: 'yellow',
        margin: 0,
        borderRadius: 30,
    },
    bacon: {
        width: '100%',
        height: 20,
        backgroundColor: 'darkred',
        margin: 0,
        borderRadius: 30,
    },
    tomato: {
        width:' 100%',
        height: 50,
        backgroundColor: 'red',
        margin: 0,
        borderRadius: '50%',
    },
    salad: {
        width: '100%',
        height: 20,
        backgroundColor: 'green',
        margin: 0,
        borderRadius: 30,
    },

    });
const ingredients=[
    {
        name: 'Cheese',
        img: 'http://cikavi-faktu.pp.ua/uploads/posts/2014-12/yak-zyavivsya-sir_631.jpeg',

    },
    {
        name: 'Bacon',
        img: 'https://gavroche-cafe.ru/sites/gavroche-cafe.ru/files/styles/large/public/dishes/bekon.jpg?itok=XkYxJNQ8',

    },
    {
        name: 'Tomato',
        img: 'http://www.menu.ck.ua/wp-content/uploads/pomidor.jpg',

    },
    {
        name: 'Salad',
        img: 'https://medfond.com/uploads/images/default/salat.jpg',

    },
];
const initBurger = {
    cheese: 0,
    bacon: 0,
    tomato: 0,
    salad: 0,
};
function App({
    burgerData,
    onSetBurgerData,
}) {
    const classes = useStyles();
    const [burger, setBurger] = useState(initBurger);

    useEffect(() => {
        if (burgerData) {
           setBurger(burgerData)
        }
    }, [burgerData]);

    const renderIngredient = ingredientName => {
        const amount = burger[ingredientName];
        let elements = [];
        for(let i = 0; i < amount; i++) {
            const key = `${ingredientName}-${i}`;
            elements.push(<p key={key} className={classes[ingredientName]}/>)
        }
        return elements
    };
    const handleAddIngridient = (name, action) => {
        const n = name.toLowerCase();
        if(burger[n] <= 0 && action==='decrease')return;
        const newBurger = {...burger};
        newBurger[n]= action==='increase' ? newBurger[n] +1 : newBurger[n] -1;
        setBurger(newBurger);
        onSetBurgerData(newBurger)
    };
    return (

            <div className={classes.root}>
                <div className={classes.ingredients}>
                    {ingredients.map(ingredient => {
                        const name = ingredient.name;
                        const img = ingredient.img;
                        return(
                            <div key={name} className={classes.ingredient}>
                                <button
                                    onClick={()=>handleAddIngridient(name, 'increase')}
                                    className={classes.plus}
                                >+
                                </button>
                                <img title={name} className={classes.img} src={img} alt=""/>
                                <button
                                    onClick={()=>handleAddIngridient(name, 'decrease')}
                                    className={classes.minus}
                                >-</button>
                            </div>
                        )
                    })}
                </div>
                {burgerData && (
                    <div className={classes.burger}>
                        <p className={classes.bulka1}/>
                        {renderIngredient('cheese')}
                        {renderIngredient('bacon')}
                        {renderIngredient('tomato')}
                        {renderIngredient('salad')}
                        <p className={classes.bulka2}/>
                    </div>
                )}
            </div>

    );
}

const mapFirebaseToProps = (props, ref) => ({
    burgerData: 'burger',
    onSetBurgerData: (data) => ref(`burger`).set(data),
});

export default connect(mapFirebaseToProps)(App)


