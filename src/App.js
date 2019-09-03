import React, {useState} from 'react';
import './App.css';

import { getOr,isEmpty } from 'lodash/fp'
import Input from "./Components/Input";
import Result from "./Components/Result";


function App() {
    const [values, setValues] = useState({
        firstName:'',
        lastName:''
    });
    const [isChangesSaved, setIsChangesSaved] = useState(false);
    const handleChangeValue = e => {
        const value = getOr('', ['target', 'value'], e);
        const name = getOr('', ['target', 'name'], e);
        const newNames = {...values};
        newNames[name] = value;
        setValues(newNames)
    };
    const handleClick = ()=>{
        if (isEmpty(values.firstName)|| isEmpty(values.lastName)) return
        if (values.firstName===' ' || values.lastName===' ') return
        setIsChangesSaved(true)
    };
    return (
        <div className="root">
            {isChangesSaved ? (
                <Result
                    firstName={values.firstName}
                    lastName={values.lastName}
                />
            ) : (
                    <Input
                        values={values}
                        onChangeValues={handleChangeValue}
                        onClick={handleClick}
                    />
            )}
        </div>
    );
}

export default App;


