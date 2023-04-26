import React, {useContext, useState} from 'react';
import './App.css';
import TodoContext from "./components/TodoContext";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";

export interface ToDoDataModel {
  items: string[];
  addToDo: (newToDo: string) => void;
  updateToDo: (index: number, newToDo: string) => void;
  deleteToDo: (index: number) => void;
}

function App() {
  const [items, setItems] = useState<string[]>([]);
  const addToDo = (newToDo: string) => {
    setItems([...items, newToDo]);
  }

  const updateToDo = (index: number, newToDo: string) => {
    const itemsCopy = [...items]
    itemsCopy[index] = newToDo
    setItems(itemsCopy)
  }

  const deleteToDo = (index: number) => {
    setItems(items.filter((element, id) => id !== index))
  }

  const data = {
    items,
    addToDo,
    updateToDo,
    deleteToDo,
  }

  return (
    <div className="main-container">
    <h1 className="heading">ToDo</h1>
    <TodoContext.Provider value={data}>
      <TodoAdd />
      <TodoList />
    </TodoContext.Provider>
    </div>
  );
}

export default App;
