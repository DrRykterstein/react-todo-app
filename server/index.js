const express = require("express");
const mysql = require("mysql2");
const config = require("./config/config");

const app = new express();
const PORT = 5000;
const db = mysql.createConnection(config.mysql);
const endpoint = "/api/todos";

app.use(express.json()); // Parse middleware

app.get("/", (req, res) => res.send("This is the Todo App server..."));
app.get("/api", (req, res) => res.send("API routes begin here..."));

// Handle GET requests
app.get(endpoint, (req, res) => {
	const query = "SELECT * FROM todos";

	db.query(query, (err, todos) => {
		if (err) {
			console.error(`GET ${err.message}`);
			return res.sendStatus(500);
		}
		res.status(200).json(todos);
	});
});

// Handle POST requests
app.post(endpoint, (req, res) => {
	const { value, completed } = req.body;
	const query = "INSERT INTO todos (value, completed) VALUES (?, ?)";

	db.query(query, [value, completed], err => {
		if (err) {
			console.error(`POST ${err.message}`);
			return res.sendStatus(500);
		}
		res.status(200).json("Added new todo");
	});
});

// Handle PUT requests
app.put(`${endpoint}/:id`, (req, res) => {
	const { completed } = req.body;
	const { id } = req.params;
	const query = "UPDATE todos SET completed = ? WHERE id = ?";

	db.query(query, [completed, id], err => {
		if (err) {
			console.error(`PUT ${err.message}`);
			return res.sendStatus(500);
		}
		res.status(200).json("Updated todo");
	});
});

// Handle DELETE requests
app.delete(`${endpoint}/:id`, ({ params: { id } }, res) => {
	const query = "DELETE FROM todos WHERE id = ?";

	db.query(query, id, err => {
		if (err) {
			console.error(`DELETE ${err.message}`);
			return res.sendStatus(500);
		}
		res.status(200).json("Deleted todo");
	});
});

app.listen(PORT, () =>
	console.log(`Server is listening on port ${PORT}...`)
);
