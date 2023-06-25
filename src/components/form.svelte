<script lang="ts">
	import type { TaskData } from '../../types';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

	let task: TaskData = {
		day: 'Monday',
		id: '',
		subject: '',
		room: '',
		time: {
			from: '',
			to: ''
		}
	};

	const addTask = () => {
		dispatch('add', {
			task
		});
		resetTask();
	};

	const resetTask = () => {
		task = {
			day: 'Monday',
			id: '',
			subject: '',
			room: '',
			time: {
				from: '',
				to: ''
			}
		};
	};
</script>

<form id="schedule-form" class="w-fit mx-auto rounded bg-white my-2 p-2 drop-shadow-md text-slate-700" on:submit={addTask}>
	<div class="my-2 text-center">
		<label class="text-lg font-bold" for="day">Day</label>
		<select class="border-2 rounded px-1 mx-2" bind:value={task.day} required>
			{#each days as day}
				<option value={day}>{day}</option>
			{/each}
		</select>
	</div>
	<div class="my-2 flex justify-between">
		<label class="text-lg font-bold" for="id">ID</label>
		<input class="border-2 rounded px-1 mx-2" bind:value={task.id} type="text" required />
	</div>
	<div class="my-2 flex justify-between">
		<label class="text-lg font-bold" for="subject">Subject</label>
		<input class="border-2 rounded px-1 mx-2" bind:value={task.subject} type="text" required />
	</div>
	<div class="my-2 flex justify-between">
		<label class="text-lg font-bold" for="room">Room</label>
		<input class="border-2 rounded px-1 mx-2" bind:value={task.room} type="text" required />
	</div>

	<div class="my-2 flex justify-between">
		<label class="text-lg font-bold" for="room">Time</label>
		<input class="border-2 rounded px-1 mx-2" type="time" required bind:value={task.time.from} />
		<span class="font-bold">-</span>
		<input class="border-2 rounded px-1 mx-2" type="time" required bind:value={task.time.to} />
	</div>

	<button class="border-2 px-2 font-bold w-full rounded" type="submit">ADD</button>
</form>
