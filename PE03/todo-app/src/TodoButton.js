import React from "react";
import "./TodoButton.css";

function TodoButton({ label, onClick, variant = "default" }) {
  return (
    <button className={`todo-btn todo-btn--${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default TodoButton;