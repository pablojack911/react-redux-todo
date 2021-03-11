import "./App.css";
import React, { Component } from "react";
import TodoList from "./Components/TodoList";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
    };
    this.changeHandler.bind(this);
    this.addTodoHandler.bind(this);
    this.keyDownHandler.bind(this);
  }

  changeHandler = (event) => {
    const { value } = event.target;
    this.setState({ newTodo: value });
  };

  addTodoHandler = () => {
    if (this.state.newTodo.trim() !== "") {
      this.props.onAddTodo(this.state.newTodo);
      this.setState({
        newTodo: "",
      });
    }
  };

  keyDownHandler = (event) => {
    const trimmedText = event.target.value.trim();
    if (event.which === 13 && trimmedText) {
      this.addTodoHandler();
    }
  };

  render() {
    return (
      <div className="App">
        <h1>My TODO list</h1>
        <div className="input-box">
          <input
            type="text"
            id="todo"
            value={this.state.newTodo}
            onChange={this.changeHandler}
            onKeyDown={this.keyDownHandler}
          />
          <button id="submit" onClick={this.addTodoHandler}>
            Add
          </button>
        </div>
        <TodoList
          todoList={this.props.todoList}
          deleteHandler={this.props.onDeleteTodo}
          checkHandler={this.props.onCheckTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (todo) => dispatch({ type: "ADD_TODO", payload: todo }),
    onCheckTodo: (id) => dispatch({ type: "CHECK_TODO", payload: id }),
    onDeleteTodo: (id) => dispatch({ type: "DELETE_TODO", payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
