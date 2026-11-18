<script >
    import { enhance } from '$app/forms';
    import { fly } from 'svelte/transition';

	let { todo, checkTodo, action} = $props();

    async function toggleDone(e) {
        const done = e.currentTarget.checked;

        await fetch(`/todos/${todo.id}`, {
            method: 'PUT',
            body: JSON.stringify({ done }),
            headers: { 'Content-Type': 'application/json' }
        });

        checkTodo(todo.id);
    }

</script>

<div class="card"  transition:fly="{{ x: "150%", duration: 500 }}">
  <header class="card-header">
    <p class="card-header-title">
        <input
            class="checkbox"
            type="checkbox"
            checked={todo.done}
            onchange={toggleDone}
        />
        <a class="truncate" href="/todos/{todo.id}">{todo.description}</a>
    </p>
        <form method="POST" {action} use:enhance>
            <input type="hidden" name="id" value={todo.id} />
            <button type="submit" class="card-header-icon" aria-label="delete">
                <span >x</span>
            </button>
        </form>    
  </header>
</div>

<style>

    form {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .truncate {
        display: inline-block;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        min-width: 0
        }

    .checkbox  {
        accent-color: var(--bulma-primary);
        margin: 0.5rem;
    }

    .card-header-title {
        min-width: 0;
    }

</style>