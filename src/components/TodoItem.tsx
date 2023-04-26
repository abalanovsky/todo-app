import React, {useContext, useEffect, useState} from 'react';
import TodoContext from "./TodoContext";
import EditIcon from '@mui/icons-material/Edit'
import RemoveIcon from '@mui/icons-material/Remove';
import {TextField} from "@mui/material";

function TodoItem({todo, index}: { todo: string, index: number }) {
    const { updateToDo, deleteToDo } = useContext(TodoContext)
    const [isEditing, setIsEditing] = useState(false)
    const [editTodo, setEditTodo] = useState('')

    useEffect(() => {
        setEditTodo(todo)
    }, [todo]);
    const handleUpdate = () => {
        setIsEditing(false)
        updateToDo(index, editTodo)
    }
    return (
        <div className="todo-item">
            {isEditing ? <TextField
                variant="standard"
                type="text"
                onBlur={handleUpdate}
                onChange={e => setEditTodo(e.target.value)}
                value={editTodo} /> : <h3 className="todo-text">{todo}</h3>}
            <div className="todo-buttons-container">
            <button className="todo-buttons" onClick={() => deleteToDo(index)}>
                <RemoveIcon color="primary" fontSize="small" />
            </button>
            {!isEditing && <button className="todo-buttons" onClick={() => setIsEditing(true)}>
                <EditIcon color="primary" fontSize="small" /></button>}
            </div>
        </div>
    );
}

export default TodoItem;
