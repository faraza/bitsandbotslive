<script lang="ts">
	import LandingPage from '$lib/components/setup/LandingPage.svelte'
	import RoomPage from '$lib/components/game/RoomPage.svelte';
	import type {GenAndPrompt} from '$lib/api/setup'
	import {sendCreateRoom, sendJoinRoom} from '$lib/data/ServerSending'
	import {userName, mainGenPrompt, mainGenURL, roomCode} from '$lib/data/store'
	import {onMount} from 'svelte'

	enum SetupState {SettingUpRoom, Landing, InRoom}
	let curState = SetupState.Landing //TODO: Update based on messages from server
	let curRoomCode = ""	
	let curUserName = ""

	let curMainGenPrompt = ""
	let curMainGenURL = ""

	mainGenPrompt.subscribe((value) => {
		console.log("Main gen prompt changed to: " + value)
		curMainGenPrompt = value
	})

	mainGenURL.subscribe((value) => {
		console.log("Main gen URL changed to: " + value)
		curMainGenURL = value
	})

	userName.subscribe((value) => {
		curUserName = value
	})

	roomCode.subscribe((value)=>{
		if(curRoomCode.length == 0)
			curRoomCode = value
	})	

	// hostName.subscribe((value)=>{		
	// 	if(value){
	// 		if(curState != SetupState.SettingUpRoom){
	// 			console.log("ERROR: Game started, but not in setting up room state")
	// 		}
	// 		curState = SetupState.InRoom
	// 	}
	// })

	function requestServerForRoom(mainGeneration: GenAndPrompt){ //TODO: This is passing as empty for some reason. Refactor out and just use store
		console.log("Request Server for room. MainGen URL: " + curMainGenURL + " MainGen Prompt: " + curMainGenPrompt)		
		sendCreateRoom(curUserName, curMainGenURL, curMainGenPrompt)

		setTimeout(()=>{
			roomCode.set("0451")
		}, 1000) //TODO: Just for testing
		// sendCreateRoom(curUserName, mainGeneration.imageURL, mainGeneration.imagePrompt)
	}

	

	function setupHostRoom(mainGeneration: GenAndPrompt){ //TODO: This is passing as empty for some reason. Refactor out and just use store
		console.log("Setup host room")
		console.log(mainGeneration)
		curState = SetupState.SettingUpRoom
		requestServerForRoom(mainGeneration)	
		
		curState = SetupState.InRoom //TODO: Wait until server says in room
	}

	function connectToGuestRoom(roomCode: string){		
		curState = SetupState.SettingUpRoom
		curRoomCode = roomCode
		sendJoinRoom(curUserName, roomCode)

		curState = SetupState.InRoom
	}
	
		
</script>

<div class="outer">
	<div>		
		{#if curState == SetupState.SettingUpRoom}
			<h1>Setting up room...</h1>
		{:else if curState == SetupState.Landing}
			<LandingPage on:guestSetupComplete={(event)=>{connectToGuestRoom(event.detail.roomCode)}}
			on:hostSetupComplete={(event)=>{setupHostRoom(event.detail)}}/>				
		{:else if curState == SetupState.InRoom}
			<RoomPage roomCode={curRoomCode}/>		
		{/if}
	</div>
</div>

<style lang="scss">
	h1 {
		font-size: 4em;
		text-align: center;
	}

	// .outer {
	// 	display: flex;
	// 	justify-content: center;
	// 	height: 100%;		
	// }

	div {
		display: flex;
		flex-direction: column;

		justify-content: center;

		width: 256px;
		margin: auto;
	

		p {
			text-align: center;
			margin: 16px;
		}
	}
</style>
