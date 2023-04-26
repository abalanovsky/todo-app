import {createContext} from "react";
import {ToDoDataModel} from "../App";

const TodoContext = createContext<ToDoDataModel>({
    addToDo(): void {},
    deleteToDo(): void {},
    items: [],
    updateToDo(): void {}
});

export default TodoContext
