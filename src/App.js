import React, { Component } from "react";
import Todos from "./components/Todos";

import "./App.css";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import {v4 as uuid} from 'uuid'

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Write something",
        completed: false,
      },
      {
        id: uuid(),
        title: "Another bullshitting",
        completed: false,
      },
      {
        id: uuid(),
        title: "Meeting with boss",
        completed: false,
      },
    ],
  };

  markComplete = (id) => {
    // set state on completed to the oposite
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      }),
    });
  };

  deleteItem = (id) => {
    this.setState({
      // just filter the state to exclude this id
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    console.log(this.state.todos);

    return (
      <div className='App'>
        <div className='container'>
            <Header />
            <AddTodo addTodo={this.addTodo}/>
            <Todos
              todos={this.state.todos}
              markComplete={this.markComplete}
              deleteItem={this.deleteItem}
            />
        </div>
        
      </div>
    );
  }
}

export default App;
