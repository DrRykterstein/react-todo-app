import React from "react";
import uuid from "react-uuid";
import Todo from "./todo.jsx";

class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: {value: '', id: null},
      todos: [],
    };

    // Bind 'this' to original instance of class
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  };

  // Renders a new todo item onto the page
  handleSubmit(event) {
    const inputValue = document.querySelector('.todo-list-input').value;

    if (event.key === 'Enter' && inputValue !== '') {
      let { todos, todo } = this.state;  
      todo = { value: inputValue, id: uuid() }; // update the current todo item
      todos.push(todo); 
      this.setState({ todos: todos }); 
    }
  };

  // Removes todo item from the page
  handleDelete(todoId) {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => todo.id !== todoId); // Filter out todo with matching ID
    this.setState({ todos: newTodos }); // Update our state without the matching todo
  };

  render() {
    const { todos, completed } = this.state;

    return (
      <React.Fragment>
        <div className="todo-list-container">
          <h1 className="todo-list-greeting">Hello, Rio</h1>
          <h2 className="todo-list-question">What do you wish to accomplish?</h2>
          <input className="todo-list-input" type="text" onKeyUp={this.handleSubmit}/>
          <ul className="todo-container">
            {todos.map((todo, idx) => (
              <Todo 
                key={idx} 
                id={todo.id}
                todo={todo.value}
                completed={completed}
                handleDelete={this.handleDelete} 
              />
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default TodoList;