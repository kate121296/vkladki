import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    root: {
        width:'80%',
        marginBottom: 20,
        marginLeft:100,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:20,
        marginTop:20,
    },

}));
function List({
            todos=[],
                  onDeleteTodo=()=>{}
              }) {
    const classes = useStyles();
    return (
        <div>
            {todos.map((todo, index)=>{
                return(
                        <Paper className={classes.root} key={todo}>
                            <Typography variant="h5" component="h3">
                                {todo}
                            </Typography>
                            <IconButton onClick={()=>onDeleteTodo(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </Paper>
                )
            })}
        </div>
    );
}

export default List;


