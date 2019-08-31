import React, {useState} from 'react';
import './App.css';
import { getOr, isEmpty } from "lodash/fp";
import Menu from "./Components/Menu";
import List from "./Components/List";
import Data from "./Components/Data";

let animalsData = {
        name: '',

        kingdom: '',

        class: '',

        order: '',

        family: '',

        genus: '',

        image: '',
}
function App() {
    const [datas, setDatas] = useState(animalsData);
    const [items, setItems] = useState([]);
    const [selectedItemsIndex, setSelectedItemsIndex] = useState('');
    const handleChangeFormData = (value, dataParam) => {
        const newDatas={...datas};
        newDatas[dataParam] = value
        setDatas(newDatas)
        console.log(newDatas)
    }

    const handleAddData = () => {
        const newItems = [...items];
        newItems.push(datas)
        setItems(newItems);


    }
    const handleItemClick = index => {
        setSelectedItemsIndex(index)
    }

    return (
        <div className="root">
           <Menu
                formDatas={datas}
                onChangeFormData ={handleChangeFormData}
                onAddData={handleAddData}
           />
           <List
               items={items}

               onItemClick={handleItemClick}
           />
           <Data
           datas={items}
           selectedItemsIndex={selectedItemsIndex}
           />
        </div>
    );
}

export default App;


