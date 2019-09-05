import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';


function Checkboxx({
                       onArmsVisible=()=>{}
                   }) {
    return (
        <div>
            <Checkbox
               /* checked={state.checkedA}*/
                onChange={onArmsVisible}
                value="checkedA"
                inputProps={{
                    'aria-label': 'primary checkbox',
                }}
            />
        </div>
    );
}

export default Checkboxx;


