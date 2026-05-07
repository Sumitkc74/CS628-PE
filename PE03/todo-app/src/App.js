import React, { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  
  const [input, setInput] = useState("");

  const addTask = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setTodos((prev) => [...prev, { id: Date.now(), text: trimmed }]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <h1 className="app-title">ToDo List App</h1>

        <input
          className="task-input"
          type="text"
          placeholder="Enter task description"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <div>
          <button className="add-btn" onClick={addTask}>
            Add Task
          </button>
        </div>

        <TodoList todos={todos} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;