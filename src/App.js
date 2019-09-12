import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getOr } from "lodash/fp";
import firebase from 'firebase'
import { connect } from 'react-firebase'

import './App.css';
import Inputs from "./Inputs";
import Products from "./Products";

firebase.initializeApp({
    databaseURL: 'https://fir-app-1-60778.firebaseio.com/'
});

const useStyles = makeStyles(  {
    root: {
        overflow: 'hidden',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'bisque',
        display: 'flex'
    },
});
const initValues = {
    name:'',
    image:'',
};
function App({
     productsData,
     onSetProductsData
 }) {
    const classes = useStyles();
    const [values, setValues] = useState(initValues);
    const [items, setItems] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        if (productsData) {
            const allProducts = [];
            Object.keys(productsData).forEach((key) => {
                const product = {
                    id: key,
                    ...productsData[key],
                };
                allProducts.push(product)
            });
            setItems(allProducts)
        }
        else setItems([])
    }, [productsData]);

    const handleChangeValue = e => {
        const value = getOr('', ['target', 'value'], e);
        const name = getOr('', ['target', 'name'], e);
        const newItems = {...values};
        newItems[name] = value;
        setValues(newItems);
    };
    const handleAddProduct = e => {
        e.preventDefault();
        const newItems=[...items];
        newItems.push(values);
        setItems(newItems);
        onSetProductsData(values);
        setValues('')
    };
    const handleChange = e => {
        const val = getOr('', ['target', 'value'], e);
        setValue(val)
    };
    const filteredItems = items.filter(item =>
        getOr('', ['name'], item)
            .toLowerCase()
            .includes(value.toLowerCase()),
    );
    return (
        <div className={classes.root}>
           <Inputs
               onChangeValue={handleChangeValue}
               values={values}
               onAddProduct={handleAddProduct}
           />
           <Products
           items={filteredItems}
           value={value}
           onChange={handleChange}
           />
        </div>
    );
}

const mapFirebaseToProps = (props, ref) => ({
    productsData: 'products',
    onSetProductsData: (data) => ref(`products`).push(data),
});

export default connect(mapFirebaseToProps)(App)



