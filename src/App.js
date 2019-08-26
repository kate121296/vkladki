import React,{ useState } from 'react';
import {getOr} from "lodash/fp";
import Input from "./components/Input";
import Card from "./components/Card";
import './app.css';

const initialValues = {
    url: '',
    title: '',
    description: '',
    link: '',
};

function App() {
    const [cards, setCards] = useState ([]);
    const [values, setValues] = useState (initialValues);
    const handleAddItem = () =>{
        const newCards = [...cards];
        newCards.push(values)
        setCards(newCards);
        setValues(initialValues)

    };
    const handleUrlChange = e =>{
        const value = getOr('', ['target', 'value'], e);
        const newItems = {...values};
        newItems.url = value;
        setValues(newItems)
    };
    const handleTitleChange = e =>{
        const value = getOr('', ['target', 'value'], e);
        const newItems = {...values};
        newItems.title = value;
        setValues(newItems)
    };
    const handleTextChange = e => {
        const value = getOr('', ['target', 'value'], e);
        const newItems = {...values};
        newItems.description = value;
        setValues(newItems)
    };
    const handleLinkChange = e =>{
        const value = getOr('', ['target', 'value'], e);
        const newItems = {...values};
        newItems.link = value;
        setValues(newItems)
    };

    return (
        <div className="root">
            <Input
                values={values}
                onAddItem={handleAddItem}
                onUrlChange={handleUrlChange}
                onTitleChange={handleTitleChange}
                onDescriptionChange={handleTextChange}
                onLinkChange={handleLinkChange}
            />
            <Card
                cards={cards}
            />
        </div>
    );
}

export default App;


