<script lang="ts">
	import {
		isHost,
		hostName,
		playersList,
		userName,
		mainGenPrompt,
		mainGenURL,
		playersAndImages,
		gameWinner,
		startRunningTimer,
		timeRemaining
	} from '$lib/data/store'
	// import Canvas from '$lib/components/common/Canvas.svelte'
	import CanvasWindow from '../common/CanvasWindow.svelte'
	import TextButton from '../common/TextButton.svelte'
	import { CanvasTypes } from '$lib/api/componentOptions'
	import type { GenAndPrompt } from '$lib/api/setup'
	import { sendUpdatePlayerState, sendChooseWinner } from '$lib/data/ServerSending'
	import { onMount } from 'svelte'
	import {
		getDummyPlayerAndImageList1,
		getDummyPlayerAndImageList2,
		getDummyPlayerAndImageList3
	} from '$lib/data/DummyData'

	let mainImage = ''
	let mainPrompt = ''
	let nameOfHost = ''
	// let otherPlayers = ['']
	let curPlayersAndImages: any[] = []
	let amIHost = false

	let timerWasStarted = false
	
	let curTimeRemaining = 100
	timeRemaining.subscribe((value) => { //TODO: This whole construct is a total mess. I moved timer to store because otherwise timer would reset on DOM re-render. But refactor is needed
		curTimeRemaining = value
		if(value > 0){
			timerWasStarted = true
			gameComplete = false
		}
		else if (timerWasStarted){
			gameComplete = true
		}		
	})

	let gameComplete = false

	let myUserName = ''

	let winnerName = '' //TODO: Reset this when the game is reset

	onMount(()=>{
		startRunningTimer.set(true)
	})

	playersAndImages.subscribe((value) => {
		console.log('Players and images updated')
		console.log(value)
		console.log(value[0])
		curPlayersAndImages = value
	})

	function pickWinner(winnerToPick: string) {
		console.log('Picked winner: ' + winnerToPick)
		winnerName = winnerToPick
		sendChooseWinner(winnerToPick)
	}

	isHost.subscribe((value) => {
		amIHost = value
	})

	hostName.subscribe((value) => {
		nameOfHost = value
	})

	mainGenURL.subscribe((value) => {
		mainImage = value
	})

	mainGenPrompt.subscribe((value) => {
		mainPrompt = value
	})

	userName.subscribe((value) => {
		myUserName = value
	})

	gameWinner.subscribe((value) => {
		winnerName = value
	})

	function imageGenerated(genAndPrompt: GenAndPrompt) {
		console.log('Image generated')
		console.log(genAndPrompt)
		sendUpdatePlayerState(myUserName, genAndPrompt.imageURL, genAndPrompt.imagePrompt)
	}
</script>

<div>
	{#if !gameComplete}
		<div class="timer-container">
			<h2>Time: {curTimeRemaining} seconds</h2>
		</div>
	{:else}
		<h2>Game Complete!</h2>
		{#if winnerName != ''}
			<h2>Winner: {winnerName}</h2>
		{:else if !amIHost}
			<h2>{nameOfHost} is choosing the winner</h2>
		{:else}
			<h2>Choose the winner</h2>
		{/if}
	{/if}
	<h1>{nameOfHost}'s Image</h1>

	<CanvasWindow
		imageSource={mainImage}
		canvasType={CanvasTypes.MainImage}
		{gameComplete}
		finalPrompt={mainPrompt}
	/>

	{#if !amIHost}
		<h2>You</h2>
		<CanvasWindow
			canvasType={CanvasTypes.PlayerGenerator}
			on:generate={(event) => {
				imageGenerated(event.detail)
			}}
			{gameComplete}
		/>
	{/if}

	{#each curPlayersAndImages as playerAndImage}
		<h2>{playerAndImage[0]}</h2>
		<CanvasWindow
			canvasType={CanvasTypes.PlayerCompetitor}
			placeholderText={playerAndImage[0] + ' is generating an image'}
			{gameComplete}
			imageSource={playerAndImage[1]}
			finalPrompt={playerAndImage[2]}
		/>
		<div class="winner-picking-button">
			{#if gameComplete && amIHost && winnerName == ''}
				<TextButton
					on:click={() => {
						pickWinner(playerAndImage[0])
					}}>Select as Winner</TextButton
				>
			{/if}
		</div>
	{/each}
</div>

<style lang="scss">
	.winner-picking-button {
		padding-top: 8px;
		display: flex;
		justify-content: center;
	}
</style>
