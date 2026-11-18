<script>
	import TodoItem from '../TodoItem.svelte';
	let { data } = $props();
	let todos = $derived(data.todos);

	function checkTodo(id) {
    	todos = todos.filter(todo => todo.id !== id);
  }
</script>

<section class="section pt-4">

<div class="tabs is-right is-boxed">
  <ul>
    <li><a href="/todos">Todo</a></li>
    <li class="is-active"><a href="/todos/done">Done</a></li>
  </ul>
</div>
<h1 class="title">Done!</h1>

<div class="container">
	{#each todos as todo (todo.id)}
		<TodoItem {todo} {checkTodo} action="?/delete"></TodoItem>
	{/each}
</div>
</section>