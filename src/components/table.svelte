<script lang="ts">
	import type { TSchedule } from '../../types';
	import TaskElem from './taskElem.svelte';
	export let schedulesList: TSchedule;
</script>

<div class="w-5/6 h-fit border-4 rounded mx-auto my-6 grid grid-cols-1 py-2 drop-shadow-sm" id="scheduleTable">
	{#each Object.keys(schedulesList) as key }
		<div class="flex border-b-2 last:border-b-0 h-[73.6px] even:bg-slate-100">
			<div class="border-r-4 flex justify-center items-center w-32 mr-2 font-bold text-slate-700">{key.slice(0,3)}</div>
			{#each schedulesList[key] as task, i}
				<TaskElem {task} />
			{/each}
		</div>
	{/each}
</div>
