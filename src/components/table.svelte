<script lang="ts">
	import type { Subject, Task } from '../../types';
	const timeRange = 1080; // min per day

	export let schedulesList: Task;

	const getPercentWidth = ({ time: { from, to } }: Subject): number => {
		const time = timeGap(from, to);
		return (time / timeRange) * 100;
	};

	const timeGap = (startTime: string, endTime: string) => {
		var startTimeParts = startTime.split(':');
		var endTimeParts = endTime.split(':');

		var startHour = parseInt(startTimeParts[0]);
		var startMinute = parseInt(startTimeParts[1]);
		var endHour = parseInt(endTimeParts[0]);
		var endMinute = parseInt(endTimeParts[1]);

		// Convert start and end time to minutes
		var startMinutes = startHour * 60 + startMinute;
		var endMinutes = endHour * 60 + endMinute;

		// Calculate the time gap in minutes
		var timeGap = endMinutes - startMinutes;

		// Display the time gap
		return timeGap;
	};
</script>

<div class="w-5/6 h-fit border-4 rounded mx-auto my-6 grid grid-cols-1 p-2" id="scheduleTable">
	<div class="flex border-b-2 last:border-b-0 h-fit">
		<div class="border-r-2 flex justify-center items-center w-32 mr-2">Mon</div>
		{#each schedulesList.Monday as task}
			<div class="bg-green-400 text-white min-w-fit px-1 mr-1" style={`width: ${getPercentWidth(task)}%`}>
				<span class="text-xs">{task.room}</span>
				<div class="text-center font-bold">{task.subject}</div>
				<span class="text-xs">{task.time.from} - {task.time.to}</span>
			</div>
		{/each}
	</div>
</div>
