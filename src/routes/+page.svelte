<script lang="ts">
	import html2canvas from 'html2canvas';
	import Form from '../components/form.svelte';
	import type { DispatchEvent, Task, TaskData } from '../../types';
	import Table from '../components/table.svelte';
	const mock = [{"id":"1","subject":"Math","room":"OP293","time":{"from":"15:02","to":"17:02"}},{"id":"asd","subject":"xcb","room":"fdb","time":{"from":"15:58","to":"19:58"}},{"id":"asd","subject":"cx","room":"db","time":{"from":"14:57","to":"14:58"}}]
	const schedulesList: Task = {
		Monday: [...mock],
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

	
</script>

<h1 class="text-rose-600">Welcome to Schedule Maker</h1>
{JSON.stringify(schedulesList)}
<Form on:add={addSchedule} />
<Table schedulesList={schedulesList} />
<div class="w-fit mx-auto my-2">
	<button class="border-2 p-1 w- hover:bg-gradient-to-r from-slate-100 to-slate-200" on:click={downloadImage}>Download</button>
</div>
