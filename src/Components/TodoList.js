import { React } from "react";

function TodoList(props) {
  const todoList = props.todoList.map((todo, index) => (
    <li key={index}>
      <input type="checkbox" id="todo_check" />
      <label htmlFor="todo_check">{todo}</label>
      <button id="remove-todo">Remove</button>
    </li>
  ));
  return <ul>{todoList}</ul>;
}

export default TodoList;
