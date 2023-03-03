<script lang="ts">
	import { page } from '$app/stores'
	import type { RoomState } from '$lib/api/state'
	import { onMount } from 'svelte'
	import {isHost} from '$lib/data/store'
	import WaitingRoom from '$lib/components/game/WaitingRoom.svelte'
	import MainGameScreen from '$lib/components/game/MainGamePage.svelte'

	let isWaiting = false 

	let ws: WebSocket
	let messages: string[] = []

	let amIHost = false
	isHost.subscribe((value) => {
		amIHost = value
	})


	onMount(() => {
		if(!amIHost){
			//TODO: Setup websocket. Think about where to put this
		}		
	})

	//TODO: Subscribe to state telling you that the game has started if you're not the host
	function startPressed(){
		isWaiting = false
	}

</script>

<div class="outer">
	<h1>Room number: {$page.params.id}</h1>
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
