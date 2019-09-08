import React, {useState, Fragment} from 'react';
import { useSnackbar } from 'notistack';

import './App.css';
import Selected from "./Selected";
import Checkboxx from "./Checkboxx";
import Buttonn from "./Buttonn";
import Human from "./Human";

const sexItems = [
    'Male',
    'Female',
];
const colorItems = [
    'Blue',
    'Yellow',
    'Pink',
    'Green',
    'Orange',
];
function App() {
    const { enqueueSnackbar } = useSnackbar();
    const [isHumanVisible, setIsHumanVisible] = useState(false);
    const [values, setValues] = useState({
        sex:'',
        color:'',
        isArmVisible: false,
    });
   const handleChangeSex = e => {
       const newValues={...values};
       newValues.sex=e.target.value;
       setValues(newValues)
   };
    const handleChangeColor = e => {
        const newValues={...values};
        newValues.color=e.target.value;
        setValues(newValues)
    };
    const handleClick = () => {
       if (values.sex==='' || values.color==='' ) {
           enqueueSnackbar('Please, select all the necessary data!',{
               variant:'warning'
           });
           return
       }
        setIsHumanVisible(true)
    };
    const handleChangeLegVisible = () => {
        const newValues={...values};
        newValues.isArmVisible=!newValues.isArmVisible;
        setValues(newValues)
    };

    return (
        <div className="root">
            {!isHumanVisible && (
                <Fragment>
                    <Selected
                        onChange={handleChangeSex}
                        value={values.sex}
                        items={sexItems}
                        label={'Sex'}
                    />
                    <Selected
                        onChange={handleChangeColor}
                        value={values.color}
                        items={colorItems}
                        label='Colors'
                    />
                    <Checkboxx
                        onChange={handleChangeLegVisible}
                        value={values.isArmVisible}
                        label='Show legs'
                    />
                    <Buttonn
                        onClick={handleClick}
                        label='Show human'
                    />
                </Fragment>
            )}
            <Human
               values={values}
                isHumanVisible={isHumanVisible}
            />
        </div>

    );
}

export default App;


