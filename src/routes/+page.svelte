<script lang="ts">
	import html2canvas from 'html2canvas';
	import Form from '../components/form.svelte';
	import type { Task } from "../../types"
	let schedulesList: Task[] = []

	const addSchedule = (e: any) => {
		const { task } = e.detail
		schedulesList = [task, ...schedulesList]
	}

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
<Form on:add={addSchedule}  />
<div id="scheduleTable">
	<h3>hello world</h3>
	<p>i have a pen</p>
</div>
<button on:click={downloadImage}>Download</button>
