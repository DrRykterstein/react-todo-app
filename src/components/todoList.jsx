import React from "react";
import queryTodos from "../API/queryTodos";
import Todo from "./todo.jsx";

class TodoList extends React.Component {
	constructor() {
		super();
		this.state = {
			value: "",
			todos: [],
		};
		// Bind 'this' to original instance of class
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	// Load todo items into state upon mount
	async componentDidMount() {
		this.fetchAllTodos();
	}

	// Set state of todo on input change
	handleInputChange(e) {
		const value = e.target.value;
		this.setState({ value });
	}

	// Fetch all todo items
	async fetchAllTodos() {
		const todos = await queryTodos.fetchAll();
		this.setState({ todos });
	}

	// Add a new todo
	handleSubmit(e) {
		const { value } = this.state;

		if (e.key === "Enter" && value !== "") {
			let todos = [...this.state.todos];

			// Add new todo and then fetch all todos
			queryTodos.send(value);
			this.fetchAllTodos();
			e.target.value = ""; // Empty input field
		}
	}

	// Toggles completion state of todo item
	async handleUpdate(todo) {
		queryTodos.update(todo); // Store updated todo within database
		await this.fetchAllTodos();
	}

	// Removes todo item from the page
	async handleDelete(todoId) {
		queryTodos.delete(todoId);
		await this.fetchAllTodos();
		// const todos = [...this.state.todos].filter(todo => todo.id !== id);
		// this.setState({ todos: todos });
	}

	render() {
		const { todos } = this.state;

		return (
			<div className="todo-list-container">
				<h1 className="todo-list-greeting">Hello, Friend</h1>
				<h2 className="todo-list-question">
					What do you wish to accomplish?
				</h2>
				<input
					className="todo-list-input"
					type="text"
					onChange={e => this.handleInputChange(e)}
					onKeyUp={todos.length < 5 ? this.handleSubmit : undefined}
				/>
				<ul className="todo-container">
					{todos.map(todo => (
						<Todo
							key={todo.id}
							todo={todo}
							handleUpdate={this.handleUpdate}
							handleDelete={this.handleDelete}
						/>
					))}
				</ul>
			</div>
		);
	}
}

export default TodoList;
