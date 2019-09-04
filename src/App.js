import React, {useState} from 'react';
import './App.css';
import { getOr } from 'lodash/fp'
import { makeStyles } from '@material-ui/core/styles';
import Input from "./Input";
import List from "./List";
import { useSnackbar } from 'notistack';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root:{
        display:'flex',
    },
}))
function App() {
    const { enqueueSnackbar } = useSnackbar();
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState([]);
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [todoToDelete, setTodoToDelete] = useState(null);
    const handleChange = e => {
        const value = getOr('', ['target', 'value'], e);
        setValue(value);
    }
    const handleClick = () => {
        if(value==='' || value===' '){
            enqueueSnackbar('Failed', {
                variant: 'error'
            });
            return
        }
        const newTodos = [...todos];
        newTodos.push(value);
        setTodos(newTodos);
        setValue('');
        enqueueSnackbar('Added successfully', {
            variant: 'success'
        });
    }
    const handleDeleteTodo =i=>{
        setTodoToDelete(i)
        handleOpenDialog()
    }
    const handleOpenDialog =()=>{
        setIsDialogVisible(true)
    }
    const handleCloseDialog =()=>{
        setIsDialogVisible(false)
    }
    const handleSubmitDialog=()=>{
        const newTodos = todos.filter((item,index)=>index !==todoToDelete);
        setTodos(newTodos)
        handleCloseDialog()
        enqueueSnackbar('Deleted successfully', {
            variant: 'success'
        });

    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Input
                onChange={handleChange}
                value={value}
                onClick={handleClick}
            />
            <List
                todos={todos}
                onDeleteTodo={handleDeleteTodo}
            />
            <Dialog
                open={isDialogVisible}
                onClose={handleCloseDialog}
            >
                <DialogTitle >Delete Todo</DialogTitle>
                <DialogContent>
                    <DialogContentText >
                       Are you sure you want to delete the todo?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmitDialog} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default App;


