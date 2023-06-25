<script lang="ts">
	import type { Subject } from '../../types';
	export let task: Subject;
	const timeRange = 1080; // min per day

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

<div
	class="bg-green-400 text-white min-w-fit px-1 mr-1 drop-shadow-md"
	style={`width: ${getPercentWidth(task)}%`}
>
	<span class="text-xs">{task.room}</span>
	<div class="text-center font-bold">{task.subject}</div>
	<span class="text-xs">{task.time.from} - {task.time.to}</span>
</div>
