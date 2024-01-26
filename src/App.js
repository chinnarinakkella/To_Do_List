import './App.css';

import ItemsContainer from "./components/items_list_container.js";
import InputContainer from './components/input_container.js';
import { useState } from 'react';
import Count from './components/count.js';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (itemTobeDeleted) => {
    const  filteredTodo = todos.filter((item) => item !== itemTobeDeleted);
    setTodos(filteredTodo);
  }

  return(
    <div className = 'App'>
      <h1 style={{display: 'flex', justifyContent: 'center'}}>MY TODO</h1>
      <Count itemsCount={todos.length}/>
      <InputContainer addNewTodo = {addNewTodo}/>
      <ItemsContainer todos = {todos} deleteTodo = {deleteTodo}/>
    </div>
  )
}
