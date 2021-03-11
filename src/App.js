import "./App.css";
import React, { Component } from "react";
import TodoList from "./Components/TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        { todo: "item 1", checked: false },
        { todo: "item 2", checked: true },
      ],
      todo: "",
    };
    this.changeHandler.bind(this);
    this.clickHandler.bind(this);
    this.deleteTodoHandler.bind(this);
    this.checkTodoHandler.bind(this);
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

  deleteTodoHandler = (index) => {
    this.setState({
      todoList: [
        ...this.state.todoList.slice(0, index),
        ...this.state.todoList.slice(index + 1),
      ],
    });
  };

  checkTodoHandler = (todoIndex) => {
    this.setState({
      todoList: this.state.todoList.map((elem, index) => {
        if (todoIndex !== index) return elem;
        return { ...elem, checked: !elem.checked };
      }),
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
        <TodoList
          todoList={this.state.todoList}
          deleteHandler={this.deleteTodoHandler}
          checkHandler={this.checkTodoHandler}
        />
      </div>
    );
  }
}

export default App;
