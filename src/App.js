import React,  {useState} from 'react';
import './App.css';

import Button from "./Components/Button";
import Menu from "./Components/Menu";
import Field from "./Components/Field";

const menuItems = [
    '1',
    '2',
    '3',
    '4',
];
function App() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isFieldVisible, setIsFieldVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [selectedButton, setSelectedButton] = useState(null);
    const handleOpenMenu=()=>{
        setIsMenuVisible(true);
        setIsButtonVisible(false)

    };
    const handleCloseMenu =()=> {
        setIsMenuVisible(false);
        setIsFieldVisible(false);
        setIsButtonVisible(true)
    };
    const handleButtonChoose =index=> {
        setIsFieldVisible(true);
        setSelectedButton(index)
    };
    const fieldNumber = selectedButton === null ? null : selectedButton + 1;
    return (
        <div className="root">
           <Menu
               menuItems={menuItems}
               isMenuVisible={isMenuVisible}
               onCloseMenu={handleCloseMenu}
               onButtonChoose={handleButtonChoose}
           />
           <Button
               onOpenMenu={handleOpenMenu}
               isButtonVisible={isButtonVisible}
           />
           <Field
               fieldNumber={fieldNumber}
               isFieldVisible={isFieldVisible}
           />
        </div>
    );
}

export default App;


