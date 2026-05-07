import React from "react";
import TodoButton from "./TodoButton";
import "./TodoItem.css";

function TodoItem({ todo, onDelete }) {
  return (
    <div className="todo-item">
      <span className="todo-text">{todo.text}</span>
      <TodoButton label="Delete" onClick={() => onDelete(todo.id)} variant="delete" />
    </div>
  );
}

export default TodoItem;