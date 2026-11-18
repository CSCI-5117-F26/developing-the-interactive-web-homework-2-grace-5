// temp
const db = new Map();

export function getTodos(userid) {
	if (!db.get(userid)) {
		db.set(userid, [{
			id: crypto.randomUUID(),
			description: 'Learn SvelteKit',
			done: false
		}, 
		{
			id: crypto.randomUUID(),
			description: 'Very very very very very very very long summary, so very very very very very very very very very very very long. It keeps going, wow wow wow wow wow wow!',
			done: false
		}, 
		]);
	}

	const todos = [];
	for (const todo of db.get(userid)) {
		if (todo.done === false) {
			todos.push(todo);
		}
	}

	return todos;
}

export function getDone(userid) {
	const done = [];
	for (const todo of db.get(userid)) {
		if (todo.done === true) {
			done.push(todo);
		}
	}

	return done;
}

export function getTodo(userid, todoid) {
    const todos = db.get(userid);
	const index = todos.findIndex((todo) => todo.id === todoid);

	return todos.at(index);
}

export function createTodo(userid, description) {
	const todos = db.get(userid);

	todos.push({
		id: crypto.randomUUID(),
		description,
		done: false
	});
}

export function deleteTodo(userid, todoid) {
	const todos = db.get(userid);
	const index = todos.findIndex((todo) => todo.id === todoid);

	if (index !== -1) {
		todos.splice(index, 1);
	}
}

export function toggleTodo({ userid, todoid, done }) {
	const todos = db.get(userid);
	const index = todos.findIndex((todo) => todo.id === todoid);
	todos.at(index).done = done;
}