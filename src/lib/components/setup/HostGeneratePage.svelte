<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import Frame from '../common/Frame.svelte'
	import TextButton from '../common/TextButton.svelte'
	import Canvas from '../common/Canvas.svelte'
	import CanvasWindow from '../common/CanvasWindow.svelte'
	import { generateImage, ImageSize } from '$lib/utils/imageGenerator'
	import { apiKey, mainGenURL } from '$lib/data/store'
	import type { GenAndPrompt } from '$lib/api/setup'
	import { CanvasTypes } from '$lib/api/componentOptions'
	import { mainGenPrompt} from '$lib/data/store'

	const dispatch = createEventDispatcher()

	let myAPIKey = ''
	apiKey.subscribe((value) => {
		myAPIKey = value
	})

	let prompt: string = ''
	let imageURL = ''

	async function generateFromPrompt() {
		imageURL = await generateImage(prompt, myAPIKey, ImageSize.SMALL)
	}

	function confirmGeneration() {
		const mainGeneration: GenAndPrompt = {
			imageURL: imageURL,
			imagePrompt: prompt
		}
		console.log('HostGenerate. Generation.')
		console.log(mainGeneration)
		mainGenPrompt.set(mainGeneration.imagePrompt)
		mainGenURL.set(mainGeneration.imageURL)
		dispatch('generated', { mainGeneration: mainGeneration })
	}
	//TODO: Need to style the div
</script>

<!-- <div> TODO: Use this instead of below for DRY and common styling
    <CanvasWindow canvasType={CanvasTypes.HostGenerator}/>
</div> -->

<div class="outer">
	<Frame title={'Your Artwork'}>
		<Canvas imageSource={imageURL} />

		<div class="bottom">
			<h3>Get Creative</h3>
			<input bind:value={prompt} />
			<div class="bottom-buttons">
				<TextButton on:click={generateFromPrompt}>Generate</TextButton>
				<TextButton on:click={confirmGeneration}>Let's Go</TextButton>
			</div>
		</div>
	</Frame>
</div>

<style lang="scss">
	.outer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		height: calc(100vh - 80px);
	}

	h3 {
		margin: 4px 0;
	}

	input {
		margin-bottom: 8px;
		width: calc(100% - 30px);
		// border-radius: 2px;
		border: 1px solid gray;
		padding: 8px;
	}

	.bottom {
		padding: 8px;
	}
</style>
