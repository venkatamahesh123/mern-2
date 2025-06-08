import React, { useState } from "react"; 
import "./App.css"; 
functionApp() { 
// State to hold the list of todos 
const [todos, setTodos] = useState([]); 
const [newTodo, setNewTodo] = useState(""); 
// Add a new todo item 
consthandleAddTodo = () => { 
if (newTodo.trim() === "") return; // Prevent adding empty todos 
setTodos([...todos, { text: newTodo, isCompleted: false }]); 
setNewTodo(""); // Clear input field after adding 
}; 
// Toggle completion of a todo item 
  consttoggleComplete = (index) => { 
    constupdatedTodos = todos.map((todo, i) => 
      i === index ?{ ...todo, isCompleted: !todo.isCompleted } : todo 
    ); 
    setTodos(updatedTodos); 
  }; 
  // Delete a todo item 
  constdeleteTodo = (index) => { 
    constupdatedTodos = todos.filter((_, i) =>i !== index); 
    setTodos(updatedTodos); 
  }; 
  return ( 
    <div className="App"> 
      <h1>To-Do List</h1> 
 
      {/* Input field to add new todo */} 
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) =>setNewTodo(e.target.value)} 
        placeholder="Enter a new task" 
      /> 
      <button onClick={handleAddTodo}>Add Todo</button> 
      {/* List of todos */} 
      <ul> 
        {todos.map((todo, index) => ( 
          <li key={index} className={todo.isCompleted ? "completed" : ""}> 
            <span 
              onClick={() =>toggleComplete(index)} 
              style={{ 
                textDecoration: todo.isCompleted ? "line-through" : "none", 
              }} 
            > 
              {todo.text} 
            </span> 
            <button onClick={() =>deleteTodo(index)}>Delete</button> 
          </li> 
        ))} 
      </ul> 
    </div> 
  ); 
} 
export default App;