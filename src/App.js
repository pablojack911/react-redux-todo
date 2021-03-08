import "./App.css";
import TodoList from "./Components/TodoList";

function App() {
  const todoList = ["item 1", "item 2"];
  return (
    <div className="App">
      <h1>My TODO list</h1>
      <div className="input-box">
        <input type="text" id="todo" />
        <button id="submit">Add</button>
      </div>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
