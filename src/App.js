import React, {useState} from 'react';
import './App.css';
import Input from "./Input";
import List from "./List";


function App() {
    const [products, setProducts] = useState([]);
    const [value, setValue] = useState('');
    const handleChange = e => {
        setValue(e.target.value);
    }
    const handleButtonAdd = e => {
        e.preventDefault()
       const newProducts=[...products]
        newProducts.push(value)
        setProducts(newProducts)
        setValue('')
    }
    const handleDeleteItem = itemIndex => {
        const newProducts= products.filter((product,index)=>index!==itemIndex)
        setProducts(newProducts)
    }
    return (
        <div className="root">
         <Input
             onChange={handleChange}
             value={value}
             onButtonAdd={handleButtonAdd}
         />
         <List
         products={products}
         onDeleteItem={handleDeleteItem}
         />
        </div>
    );
}

export default App;


