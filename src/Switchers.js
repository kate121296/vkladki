import React, {Fragment} from 'react';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { getOr } from 'lodash/fp';

import './Switchers.css';

const useStyles = makeStyles(theme => ({
    root : {
        display:'flex',
        padding: 30,
    },
    switchWrapper: {
        display:'flex',
        flexDirection: 'column',
    },
    title: {
        marginBottom: 20,
},
    link:{
        marginTop: 20,

    }

}));
function Switchers({
   onChange=()=>{},
   state=[],
}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.switchWrapper}>
                {state.map((item, index)=>{
                    const checked = getOr(false, ['checked'], item);
                    const title = getOr('', ['title'], item);
                    const titleChange = checked ? 'Hide' : 'Show';
                    return(
                        <Fragment>
                            <Typography>{titleChange} {title}</Typography>
                            <Switch
                                checked={checked}
                                onChange={() => onChange(index)}
                                value={title}
                            />
                        </Fragment>
                    )
                })}
            </div>
            <div className={classes.switchWrapper}>
                {state[0].checked && (
                    <p className={classes.title}>Flowers</p>
                )}
                {state[1].checked && (
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTStIcONDWk0GjyJewYfJmRUCqqFEn9_752g2TL8nW-bZEkCFqJg" alt=""/>
                )}
                {state[2].checked && (
                    <a className={classes.link} href="https://flowers.ua/">{state[2].title}</a>
                )}

            </div>

        </div>
    );
}

export default Switchers;


