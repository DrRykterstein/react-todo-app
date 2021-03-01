import React from "react";
import uuid from "react-uuid";
import Todo from "./todo.jsx";

class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: {
        value: '',
        id: null,
        completed: false
      },
      todos: [],
    };

    // Bind 'this' to original instance of class
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  };

  // Get todo items from local storage and load into state upon mount
  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    todos && this.setState({ todos: todos });
  };

  // Store todo items in local storage after rendering of the component
  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  };

  // Renders a new todo item onto the page
  handleSubmit(e) {
    // initialise input value from 'event' object
    const inputValue = e.target.value; 
    
    if (e.key === 'Enter' && inputValue !== '') {
      let todo = { ...this.state.todo };
      let todos = [...this.state.todos];

      // Modify copy of todo item object
      todo = {  
        value: inputValue,
        id: uuid(),
        completed: false
      }; 

      // Update state of todo item followed by list of todos
      this.setState({ todo: todo });
      todos.push(todo);     

      this.setState({ todos: todos }); 
      e.target.value = ''; // Empty input field
    }
  };

  // Toggles completion state of todo item 
  handleUpdate(todo) {
    todo.completed = !todo.completed;
    this.setState({ todo: todo });
  };

  // Removes todo item from the page
  handleDelete(todoId) {
    const todos = [...this.state.todos];
    const newTodos = todos.filter(todo => todo.id !== todoId); // Filter out todo with matching ID
    this.setState({ todos: newTodos }); // Update our state without the matching todo
  };

  render() {
    const { todos } = this.state;

    return (
      <React.Fragment>
        <div className="todo-list-container">
          <h1 className="todo-list-greeting">Hello, Friend</h1>
          <h2 className="todo-list-question">What do you wish to accomplish?</h2>
          <input className="todo-list-input " type="text" onKeyUp={todos.length < 5 && this.handleSubmit}/>
          <ul className="todo-container">
            {todos.map((todo) => (
              <Todo  
                key={todo.id}
                todo={todo}
                handleUpdate={this.handleUpdate}
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