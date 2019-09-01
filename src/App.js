import React,{useState} from 'react';
import './App.css';
import Buttons from "./Components/Buttons";
import Text from "./Components/Text";


function App() {
    const [buttons, setButtons] = useState([
        {
            id: '1',
            isSelected: false,
        },
        {
            id: '2',
            isSelected: false,
        },
        {
            id: '3',
            isSelected: false,
        },
        {
            id: '4',
            isSelected: false,
        },
        {
            id: '5',
            isSelected: false,
        },
        {
            id: '6',
            isSelected: false,
        },
    ]);
    const isAllboxSelected = () => {
        let isOk = true
        buttons.forEach(button => {
            if (button.isSelected === false) {
                isOk = false
            }
        })
        return isOk
    }
    const handleButtonClick = index => {
        const newButtons = [...buttons]
        newButtons[index].isSelected  =  !newButtons[index].isSelected
        setButtons(newButtons)
    }

    return (
        <div className="root">
            <Buttons
            buttons={buttons}
            onButtonClick={handleButtonClick}
            />
            <Text
                isAllboxSelected={isAllboxSelected}
            />
        </div>
    );
}

export default App;


