import { error } from '@sveltejs/kit';
import * as db from '#lib/server/database.js';

export function load({ cookies, params }) {
    let id = cookies.get('userid');
    let todoid = params.id;
	const todo = db.getTodo(id, todoid);

	if (!todo) error(404);

	return {
		todo
	};
}