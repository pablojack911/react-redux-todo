import { React } from "react";

function TodoList(props) {
  const todoList = props.todoList.map((todo) => (
    <li key={todo.id}>
      <input
        type="checkbox"
        id="todo_check"
        checked={todo.checked}
        onChange={() => props.checkHandler(todo.id)}
      />
      <label htmlFor="todo_check">{todo.todo}</label>
      <button id="remove-todo" onClick={() => props.deleteHandler(todo.id)}>
        Remove
      </button>
    </li>
  ));
  return <ul>{todoList}</ul>;
}

export default TodoList;
