import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from "@material-ui/core/Typography";

function Checkboxx({
    onChange=()=>{},
    label='',
    value=''
}) {
    return (
        <div>
            <Checkbox
                onChange={onChange}
                value={value}
            />
            <Typography display="inline">{label}</Typography>
        </div>
    );
}

export default Checkboxx;


