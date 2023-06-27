<script lang="ts">
	import html2canvas from 'html2canvas';
	import Form from '../components/form.svelte';
	import type { DispatchEvent, TSchedule, TaskData } from '../../types';
	import Table from '../components/table.svelte';
	const mock = [
		{ id: 'a', subject: 'a', room: 'a', time: { from: '17:08', to: '18:08' } },
		{ id: 'b', subject: 'b', room: 'b', time: { from: '19:08', to: '20:08' } }
	];
	const schedulesList: TSchedule = {
		Monday: [],
		Tuesday: [],
		Wednesday: [],
		Thursday: [],
		Friday: [],
	};

	const addSchedule = (event: DispatchEvent): void => {
		const {
			task: { day, id, subject, room, time }
		}: { task: TaskData } = event.detail;
		const schedule = { id, subject, room, time };
		for (let i = 0; i < schedulesList[day].length; i++) {
			if (!compareTime(schedule.time.from, schedulesList[day][i].time.from)) {
				schedulesList[day].splice(i, 0, schedule)
				schedulesList[day] = schedulesList[day]
				return;
			}
		}
		schedulesList[day] = [...schedulesList[day], schedule];
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

	const compareTime = (sch: string, curr: string): Boolean => {
		const [hours1, minutes1] = sch.split(':').map(Number);
		const [hours2, minutes2] = curr.split(':').map(Number);

		if (hours1 > hours2) {
			return true;
		} else if (hours1 < hours2) {
			return false;
		} else {
			if (minutes1 > minutes2) {
				return true;
			} else if (minutes1 < minutes2) {
				return false;
			} else {
				// time equal
				return false;
			}
		}
	};
</script>
<Form on:add={addSchedule} />
<Table {schedulesList} />
<div class="w-fit mx-auto mb-2">
	<button
		class="border-2 p-1 font-semibold hover:bg-gradient-to-r from-slate-100 to-slate-200"
		on:click={downloadImage}>Download</button
	>
</div>
