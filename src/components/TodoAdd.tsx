import React, {useContext, useState} from 'react';
import TodoContext from "./TodoContext";
import {Button, TextField} from "@mui/material";

function TodoAdd() {
    const { addToDo } = useContext(TodoContext)
    const [todo, setTodo] = useState('')
    const handleClick = () => {
        addToDo(todo)
        setTodo('')
    }
    return (
        <div>
            <TextField variant="standard"
                       type="text" value={todo}
                       className="add-todo-input"
                       placeholder="Enter todo text..."
                       onChange={e => setTodo(e.target.value)}/>
            <Button variant="outlined" size="small" onClick={handleClick} disabled={todo === ''}>Add</Button>
        </div>
    );
}

export default TodoAdd;
