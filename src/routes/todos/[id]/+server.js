import * as db from '#lib/server/database.js';

export async function PUT({ params, request, cookies }) {
	const { done } = await request.json();
	const userid = cookies.get('userid');

	await db.toggleTodo({ userid, todoid: params.id, done });
	return new Response(null, { status: 204 });
}
