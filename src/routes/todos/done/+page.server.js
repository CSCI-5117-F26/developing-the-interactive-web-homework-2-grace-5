import * as db from '#lib/server/database.js';

export function load({ cookies }) {
    let id = cookies.get('userid');
    if (!id){
        id = crypto.randomUUID();
        cookies.set('userid', id);
    }
    return {
        todos: db.getDone(id)
    };
}

export const actions = {
    delete: async ({ cookies, request }) => {
        const data = await request.formData();
        db.deleteTodo(cookies.get('userid'), data.get('id'));
    },
};

