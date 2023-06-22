<script lang="ts">
	import html2canvas from 'html2canvas';

    const downloadImage = () => {
        const imgTarget = document.getElementById("something") as HTMLElement
        const imgName = "schedule"

        html2canvas(imgTarget).then((canvas) => {
            const base64image = canvas.toDataURL("image/png")
            var anchor = document.createElement("a")
            anchor.setAttribute("href", base64image)
            anchor.setAttribute("download", imgName)
            anchor.click()
            anchor.remove()
        })
    }
</script>

<h1>Welcome to Schedule Maker</h1>
<div id="something">
	<h3>hello world</h3>
	<p>i have a pen</p>
</div>
<button on:click={downloadImage}>Download</button>
