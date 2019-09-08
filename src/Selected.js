import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

}));

function Selected({
    onChange=()=>{},
    value={},
    items=[],
    label=''
}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FormControl className={classes.formControl}>
                <InputLabel>{label}</InputLabel>
                <Select
                    value={value}
                    onChange={onChange}
                >
                    {items.map(item=>{
                        return(
                            <MenuItem value={item} key={item}>{item}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </div>
    );
}

export default Selected;


