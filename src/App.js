import React, {useState, useEffect} from 'react';
import firebase from 'firebase'
import { connect } from 'react-firebase'
import classNames from 'classnames'

import './App.css';

firebase.initializeApp({
    databaseURL: 'https://fir-app-1-60778.firebaseio.com/'
});

function App({
    todos,
    addTodo,
    onTodoCompleted,
    onDeleteTodo,
}) {
    const [value, setValue] = useState('')
    const [localTodos, setLocalTodos] = useState([]);
    useEffect(() => {
        if (todos) {
            const newTodos = [];
            Object.keys(todos).forEach((key) => {
                const todo = {
                    id: key,
                    ...todos[key],
                };
                newTodos.push(todo)
            });
            setLocalTodos(newTodos)
        }
        else setLocalTodos([])
    }, [todos]);

    const handleChange = e => {
        setValue(e.target.value)
    }
    const handleAddNewTodo =()=>{
        const newTodo = {
            title: value,
            completed: false,
        }
        addTodo(newTodo)
        setValue('')
    }
    const handleCompleted = (id, completed) => {
        onTodoCompleted(id, !completed)
    }
    const handleDelete = id => {
        onDeleteTodo(id)
    }
    return (
        <div className="root">
            <input value={value} onChange={handleChange} type="text"/>
            <button onClick={handleAddNewTodo}>add new todo</button>
            <br/>
            <ul>
                {localTodos.map(todo => (
                    <li
                        className={classNames('item', {
                            'completed': todo.completed
                        })}
                        key={todo.id}
                    >
                        <button onClick={() => handleCompleted(todo.id, todo.completed)}>mark as completed</button>
                        <span>{todo.title}</span>
                        <button onClick={() => handleDelete(todo.id)}>delete this todo</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const mapFirebaseToProps = (props, ref) => ({
    todos: 'todos',
    addTodo: todo => ref('todos').push(todo),
    onTodoCompleted: (id, status) => ref(`todos/${id}/completed`).set(status),
    onDeleteTodo: id => ref(`todos/${id}`).remove(),
});

export default connect(mapFirebaseToProps)(App)


