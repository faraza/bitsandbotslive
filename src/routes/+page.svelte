<script lang="ts">
	import LandingPage from '$lib/components/setup/LandingPage.svelte'
	import RoomPage from '$lib/components/game/RoomPage.svelte'
	import type { GenAndPrompt } from '$lib/api/setup'
	import { sendCreateRoom, sendJoinRoom } from '$lib/data/ServerSending'
	import { userName, mainGenPrompt, mainGenURL, roomCode, isHost, hostName } from '$lib/data/store'

	enum SetupState {
		SettingUpRoom,
		Landing,
		InRoom
	}
	let curState = SetupState.Landing
	let curRoomCode = ''
	let curUserName = ''

	let curMainGenPrompt = ''
	let curMainGenURL = ''
	let amIHost = false

	mainGenPrompt.subscribe((value) => {
		curMainGenPrompt = value
	})

	mainGenURL.subscribe((value) => {
		curMainGenURL = value
	})

	userName.subscribe((value) => {
		curUserName = value
	})

	roomCode.subscribe((value) => {
		if (curRoomCode.length == 0){
			curRoomCode = value
		}
		if(value.length > 0 && amIHost){
			curState = SetupState.InRoom
		}
	})

	isHost.subscribe((value) => {
		amIHost = value
	})

	hostName.subscribe((value) => {
		if(!amIHost && value.length > 0){
			curState = SetupState.InRoom
		}
	})

	function requestServerForRoom(mainGeneration: GenAndPrompt) {		
		sendCreateRoom(curUserName, curMainGenURL, curMainGenPrompt)
		
	}

	function setupHostRoom(mainGeneration: GenAndPrompt) {
		//TODO: This is passing as empty for some reason. Refactor out and just use store
		console.log(mainGeneration)
		curState = SetupState.SettingUpRoom
		requestServerForRoom(mainGeneration)

		// curState = SetupState.InRoom //TODO: Wait until server says in room
	}

	function connectToGuestRoom(roomCode: string) {
		curState = SetupState.SettingUpRoom
		curRoomCode = roomCode
		sendJoinRoom(curUserName, roomCode)
		
		// curState = SetupState.InRoom //TODO
	}
</script>

<div class="outer">
	<div>
		{#if curState == SetupState.SettingUpRoom}
			<h1>Setting up room...</h1>
		{:else if curState == SetupState.Landing}
			<LandingPage
				on:guestSetupComplete={(event) => {
					connectToGuestRoom(event.detail.roomCode)
				}}
				on:hostSetupComplete={(event) => {
					setupHostRoom(event.detail)
				}}
			/>
		{:else if curState == SetupState.InRoom}
			<RoomPage roomCode={curRoomCode} />
		{/if}
	</div>
</div>

<style lang="scss">
	h1 {
		font-size: 4em;
		text-align: center;
	}	

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
