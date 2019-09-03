import React, {useState, Fragment} from 'react';
import './App.css';
import { getOr } from 'lodash/fp'
import Input from "./Components/Input";
import Button from "./Components/Button";
import Result from "./Components/Result";


function App() {
    const [values, setValues] = useState({
        firstName:'',
        lastName:''
    });
    const [isChangesSaved, setIsChangesSaved] = useState(false);
    const handleFirstNameChange = e => {
        const value = getOr('', ['target', 'value'], e);
        const newNames = {...values};
        newNames.firstName = value;
        setValues(newNames)
    };

    const handleLastNameChange = e => {
        const value = getOr('', ['target', 'value'], e);
        const newNames = {...values};
        newNames.lastName = value;
        setValues(newNames)
    };
    const handleClick = ()=>{
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
                <Fragment>
                    <Input
                        values={values}
                        onFirstNameChange={handleFirstNameChange}
                        onLastNameChange={handleLastNameChange}
                    />
                    <Button
                        onClick={handleClick}
                    />
                </Fragment>
            )}
        </div>
    );
}

export default App;


