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
                      onChooseSex=()=>{},
                      onColorChoose=()=>{},
                      values={}
                  }) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">Sex</InputLabel>
                <Select
                    value={values.sex}
                    onChange={onChooseSex}
                >
                    <MenuItem value='Man'>Male</MenuItem>
                    <MenuItem value='Female'>Female</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">Body color</InputLabel>
                <Select
                    value={values.color}
                    onChange={onColorChoose}
                    inputProps={{
                        name: 'age',
                        id: 'age-simple',
                    }}
                >
                    <MenuItem value='red'>red</MenuItem>
                    <MenuItem value='blue'>blue</MenuItem>
                    <MenuItem value='green'>green</MenuItem>
                    <MenuItem value='yellow'>yellow</MenuItem>
                    <MenuItem value='rose'>rose</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default Selected;


