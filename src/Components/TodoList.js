import { React } from "react";

function TodoList(props) {
  const todoList = props.todoList.map((todo, index) => (
    <li key={index}>
      <input
        type="checkbox"
        id="todo_check"
        checked={todo.checked}
        onChange={() => props.checkHandler(index)}
      />
      <label htmlFor="todo_check">{todo.todo}</label>
      <button id="remove-todo" onClick={() => props.deleteHandler(index)}>
        Remove
      </button>
    </li>
  ));
  return <ul>{todoList}</ul>;
}

export default TodoList;
