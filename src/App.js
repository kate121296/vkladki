import React, {useState} from 'react';
import { getOr, isEmpty } from "lodash/fp";

import './App.css';
import Input1 from "./components/Input1";
import Input2 from "./components/Input2";
import Field1 from "./components/Field1";
import Field2 from "./components/Field2";

let initialValues = {
    username: '',
    email: '',
    password:'',
};

function App() {
    const [values, setValues] = useState (initialValues);
    console.log(values)
    const [successRegistered, setSuccessRegistered] = useState (false);
    const [users, setUsers] = useState ({
        username:'' ,
        password:''
    });
    console.log(users)
    const [signIn, setSignIn] = useState (false);
    const [isInput2Visible, setIsInput2Visible] = useState (false);

    const handleUserNameChange = e =>{
        const value = getOr('', ['target', 'value'], e);
        const newValues = {...values};
        newValues.username = value;
        setValues(newValues)
    }
    const handleUserEmailChange = e =>{
        const value = getOr('', ['target', 'value'], e);
        const newValues = {...values};
        newValues.email = value;
        setValues(newValues)
    }
    const handleUserPasswordChange = e =>{
        const value = getOr('', ['target', 'value'], e);
        const newValues = {...values};
        newValues.password = value;
        setValues(newValues)
    }
    const handleRegistered = () => {
        if (!isEmpty(values.username) && !isEmpty(values.email) && !isEmpty(values.password)) {
            setSuccessRegistered(true)
        }
    }
    const handleSignIn = () =>{
        if(values.username !== users.username) return
        if(values.password !== users.password) return
        setSignIn(true)
    }
    const handleEnter = () =>{
        setIsInput2Visible(true)
    }
    const handleUserRegisteredNameChange = e => {
        const value = getOr('', ['target', 'value'], e);
        const newItems = {...users};
        newItems.username = value;
        setUsers(newItems)
    }
    const handleUserRegisteredPasswordChange = e => {
        const value = getOr('', ['target', 'value'], e);
        const newItems = {...users};
        newItems.password = value;
        setUsers(newItems)
    }

    return (
        <div className="root">
            <div>
                <Input1
                    onUserNameChange={handleUserNameChange}
                    onUserEmailChange={handleUserEmailChange}
                    onUserPasswordChange={handleUserPasswordChange}
                    handleRegistered={handleRegistered}
                    values={values}
                />
                <Field1
                    successRegistered={successRegistered}
                    handleEnter={handleEnter}
                />
            </div>
            <div>
                <Input2
                    onUserRegisteredNameChange={handleUserRegisteredNameChange}
                    onUserRegisteredPasswordChange={handleUserRegisteredPasswordChange}
                    users={users}
                    isInput2Visible={isInput2Visible}
                    handleSignIn={handleSignIn}
                />
                <Field2
                    signIn={signIn}
                    values={values}
                    users={users}
                />
            </div>

        </div>
    );
}

export default App;


