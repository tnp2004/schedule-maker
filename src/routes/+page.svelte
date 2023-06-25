<script lang="ts">
	import html2canvas from 'html2canvas';
	import Form from '../components/form.svelte';
	import type { DispatchEvent, Task, TaskData } from '../../types';
	import Table from '../components/table.svelte';
	let schedulesList: Task = {
		Monday: [],
		Tuesday: [],
		Wednesday: [],
		Thursday: [],
		Friday: [],
		Saturday: [],
		Sunday: [],
	};

	const addSchedule = (event: DispatchEvent): void => {
		const { task: { day, id, subject, room, time } }: { task: TaskData } = event.detail;
		schedulesList[day] = [{ id, subject, room, time }, ...schedulesList[day]]
	};

	const downloadImage = () => {
		const imgTarget = document.getElementById('scheduleTable') as HTMLDivElement;
		const imgName = 'schedule';

		html2canvas(imgTarget).then((canvas) => {
			const base64image = canvas.toDataURL('image/png');
			var anchor = document.createElement('a');
			anchor.setAttribute('href', base64image);
			anchor.setAttribute('download', imgName);
			anchor.click();
			anchor.remove();
		});
	};

	function checkTimeGap(startTime: string, endTime: string) {
      var startTimeParts = startTime.split(":");
      var endTimeParts = endTime.split(":");

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
      return timeGap
    }
</script>

<h1 class="text-rose-600">Welcome to Schedule Maker</h1>
{JSON.stringify(schedulesList)}
<Form on:add={addSchedule} />
<Table />
<div class="w-fit mx-auto my-2">
	<button class="border-2 p-1 w- hover:bg-gradient-to-r from-slate-100 to-slate-200" on:click={downloadImage}>Download</button>
</div>
