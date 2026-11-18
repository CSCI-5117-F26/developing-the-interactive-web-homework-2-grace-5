<script>
	import TodoItem from './TodoItem.svelte';
	import { enhance } from '$app/forms';

	let { data } = $props();
	let todos = $derived(data.todos);

	function checkTodo(id) {
    	todos = todos.filter(todo => todo.id !== id);
  }
</script>

<section class="section  pt-4">

<div class="tabs is-right is-boxed">
  <ul>
    <li class="is-active"><a href="/todos">Todo</a></li>
    <li><a href="/todos/done">Done</a></li>
  </ul>
</div>
<h1 class="title">Todo List!</h1>

<div class="container">
	{#each todos as todo (todo.id)}
		<TodoItem {todo} {checkTodo} action="?/delete"></TodoItem>
	{/each}
	<form method="POST" action="?/create" use:enhance>
		<div class="field has-addons">
  			<div class="control is-expanded">
			<input
				class="input"
				maxlength="200"
				placeholder="Add new todo..."
				name="description"
				autocomplete="off"
				required
			/>
			</div>
			<div class="control">
				<button class="button is-primary">+</button>
			</div>
		</div>
	</form>
</div>
</section>