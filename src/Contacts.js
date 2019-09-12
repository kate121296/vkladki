import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {getOr} from 'lodash/fp'

const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px 0px 0px 300px',
        width: '100%',
    },
    title: {
        margin: theme.spacing(4, 0, 2),
        fontSize: 20,
        textAlign:'center',
    },
    list: {
        overflowY: 'auto',
        width:'70%',
        height: 450,
        border:'2px solid black',
        backgroundColor:'lightblue',
        margin:'auto',
    },
}));

function Contacts({
    data=[],
    label=''
}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" className={classes.title}>
                        {label}
                    </Typography>
                    <List className={classes.list}>
                        {data.map(user=>{
                            const key=user.id;
                            const title=getOr('',['title'], user);
                            return(
                                <ListItem key={key}>
                                    <ListItemText
                                        primary={title}
                                    />
                                </ListItem>
                            )
                        })}
                    </List>
                </Grid>
            </Grid>
        </div>
    );
}

export default Contacts;


