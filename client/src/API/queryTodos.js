import axios from "axios";

// Initialize a constructor to store all todo data fetching methods
class QueryTodos {
	fetchAll = async () => {
		try {
			const { data } = await axios.get("/api/todos");
			return data;
		} catch (err) {
			console.error(`GET ${err.message}`);
		}
	};

	send = async value => {
		try {
			const todo = { value, completed: false };
			const { data } = await axios.post(`/api/todos`, todo);
			return data;
		} catch (err) {
			console.error(`POST ${err.message}`);
		}
	};

	update = async ({ id, completed }) => {
		try {
			const { data } = await axios.put(`/api/todos/${id}`, { completed });
			return data;
		} catch (err) {
			console.error(`PUT ${err.message}`);
		}
	};

	delete = async todoId => {
		try {
			const { data } = await axios.delete(`/api/todos/${todoId}`);
			return data;
		} catch (err) {
			console.error(`DELETE ${err.message}`);
		}
	};
}

export default new QueryTodos();
