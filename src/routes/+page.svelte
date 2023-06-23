<script lang="ts">
	import html2canvas from 'html2canvas';
	import Form from '../components/form.svelte';
	import type { DispatchEvent, Task } from '../../types';
	import Table from '../components/table.svelte';
	let schedulesList: Task[] = [];

	const addSchedule = (event: DispatchEvent): void => {
		const { task } = event.detail;
		schedulesList = [task, ...schedulesList];
	};

	const downloadImage = () => {
		const imgTarget = document.getElementById('scheduleTable') as HTMLElement;
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
</script>

<h1 class="text-rose-600">Welcome to Schedule Maker</h1>
{JSON.stringify(schedulesList)}
<Form on:add={addSchedule} />
<Table />
<div class="w-fit mx-auto my-2">
	<button class="border-2 p-1 w-32" on:click={downloadImage}>Download</button>
</div>
