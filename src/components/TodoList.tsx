import React, {useContext} from 'react';
import TodoContext from "./TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
    const { items } = useContext(TodoContext)
    return (
        <>
            {items.map((todo, index) => <TodoItem todo={todo} index={index} key={index}/>)}
        </>
    );
}

export default TodoList;
