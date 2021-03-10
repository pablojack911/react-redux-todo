import "./App.css";
import React, { Component } from "react";
import TodoList from "./Components/TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: ["item 1", "item 2"],
      todo: "",
    };
    this.changeHandler.bind(this);
    this.clickHandler.bind(this);
  }

  changeHandler = (event) => {
    const { value } = event.target;
    this.setState({ todo: value });
  };

  clickHandler = () => {
    if (this.state.todo !== "")
      this.setState({
        todoList: [...this.state.todoList, this.state.todo],
        todo: "",
      });
  };

  render() {
    return (
      <div className="App">
        <h1>My TODO list</h1>
        <div className="input-box">
          <input
            type="text"
            id="todo"
            value={this.state.todo}
            onChange={this.changeHandler}
          />
          <button id="submit" onClick={this.clickHandler}>
            Add
          </button>
        </div>
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
