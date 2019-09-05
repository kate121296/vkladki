import React, {useState} from 'react';
import './App.css';
import Selected from "./Selected";
import Checkboxx from "./Checkboxx";
import Buttonn from "./Buttonn";
import Human from "./Human";
const sex = {
    sexman:'bodyman',
    sexwoman:'bodyfemale',
    }

const colorsBody = {
    bodyman:'white',
    bodyfemale:'white',
};
function App() {
    const [selectedSex, setSelecteSex] = useState(sex);
    console.log(selectedSex)
    const [colorBody, setColorBody] = useState(colorsBody);
    console.log(colorBody)
    const [isArmsVisible, setIsArmsVisible] = useState(false);
    const [isHumanVisible, setIsHumanVisible] = useState(false);
    const [values, setValues] = useState({
        sex:'',
        color:''
    });
   const handleChooseSex = name => {
       setSelecteSex(name)
   }
    const handleColorChoose = e => {
        const newColorBody = {...colorBody};
        newColorBody[selectedSex] = e.target.value;
        setColorBody(newColorBody)
    }
    const handleArmsVisible=()=>{
        setIsArmsVisible(!isArmsVisible)
    }
    const handleClick = () => {
        setIsHumanVisible(true)
    }

    return (
        <div className="root">
          <Selected
              onChooseSex={handleChooseSex}
              onColorChoose={handleColorChoose}
              values={values}
              sex={sex}
          />
          <Checkboxx
              onArmsVisible={handleArmsVisible}
          />
          <Buttonn
              onClick={handleClick}
          />
          <Human
              isArmsVisible={isArmsVisible}
              colorBody={colorBody}
              isHumanVisible={isHumanVisible}
          />
        </div>
    );
}

export default App;


