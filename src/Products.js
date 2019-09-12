import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
}));

function Products({
    items=[],
    value='',
    onChange=()=>{}
}) {
    const classes = useStyles();
    return (
        <div>
            <TextField
                name="search"
                label="Search"
                className={classes.textField}
                value={value}
                onChange={onChange}
                margin="normal"
            />
            <List className={classes.root}>
                {items.map(item=>{
                    const key=item.id;
                    const name=item.name;
                    const image=item.image;
                    return(
                        <Fragment  key={key}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt={name} src={image} />
                                </ListItemAvatar>
                                <ListItemText primary={name}  />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </Fragment>
                    )
                })}
            </List>
        </div>
    );
}

export default Products;


