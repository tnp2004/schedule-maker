<script lang="ts">
	import type { Task } from "../../types"
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	let task: Task = {
		day: "",
		id: "",
		subject: "",
		room: "",
	}

	const addTask = () => {
		dispatch('add', {
			task
		});
	};
</script>

<form class="w-fit mx-auto rounded border-2 my-2 p-2">
	<div class="my-2 flex justify-between">
		<label class="text-lg font-bold" for="day">Day</label>
		<select class="border-2 rounded px-1 mx-2" bind:value={task.day}>
			{#each days as day}
				<option value={day}>{day}</option>
			{/each}
		</select>
	</div>
	<div class="my-2 flex justify-between">
		<label class="text-lg font-bold" for="id">ID</label>
		<input class="border-2 rounded px-1 mx-2" bind:value={task.id} type="text" />
	</div>
	<div class="my-2 flex justify-between">
		<label class="text-lg font-bold" for="id">Subject</label>
		<input class="border-2 rounded px-1 mx-2" bind:value={task.subject} type="text" />
	</div>
	<div class="my-2 flex justify-between">
		<label class="text-lg font-bold" for="id">Room</label>
		<input class="border-2 rounded px-1 mx-2" bind:value={task.room} type="text" />
	</div>

	<button class="border-2 px-2 font-bold w-full rounded" on:click={addTask}>ADD</button>
</form>
