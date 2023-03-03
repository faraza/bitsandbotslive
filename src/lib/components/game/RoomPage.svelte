<script lang="ts">
	import { page } from '$app/stores'
	import type { RoomState } from '$lib/api/state'
	import { onMount } from 'svelte'
	import {isHost, gameStarted} from '$lib/data/store'
	import WaitingRoom from '$lib/components/game/WaitingRoom.svelte'
	import MainGameScreen from '$lib/components/game/MainGamePage.svelte'
	import {sendStartGame} from '$lib/data/ServerSending'

	let isWaiting = true
    export let roomCode = ""	

	let amIHost = false
	isHost.subscribe((value) => {
		amIHost = value
	})	

	//TODO: Subscribe to state telling you that the game has started if you're not the host
	function startPressed(){
		sendStartGame()
		isWaiting = false
	}

	gameStarted.subscribe((value)=>{
		if(value){
			isWaiting = false
		}
	})

	onMount(()=>{ //TODO: Delete. Just for testing
		setInterval(()=>{
			if(!amIHost){
				// gameStarted.set(true)
			}
		}, 3000)
	})

</script>

<div class="outer">
	<h1>Room number: {roomCode}</h1>
	{#if isWaiting}
		<WaitingRoom on:started={()=>{startPressed()}} />
	{:else}
		<MainGameScreen />		
	{/if}
</div>

<style lang="scss">
	.outer{
		padding-left: 5%;
		padding-right: 5%
	}
</style>
