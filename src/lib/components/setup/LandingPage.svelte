<script lang="ts">
	import Button from '$lib/components/common/TextButton.svelte'
    import {createEventDispatcher} from 'svelte'
	import InputButtonCombo from '$lib/components/common/InputButtonCombo.svelte'
    import CredentialsPage from './CredentialsPage.svelte'
	import type { Credentials } from '$lib/api/setup'
	import HostGeneratePage from './HostGeneratePage.svelte'
	import {apiKey, userName, isHost, connectedToWebsocket, connectToServer, hostName} from '$lib/data/store'
	import type {GenAndPrompt} from '$lib/api/setup'
	
	enum SetupState {
        Landing,
        CredentialingHost,
        CredentialingGuest,
        HostGenerating        
    }

    let roomCode: string	    
	let isConnectedToServer = false

	let curMainGeneration: GenAndPrompt = {
		imageURL: "",
		imagePrompt: ""
	}

	connectedToWebsocket.subscribe((value) => {		
		if(value == isConnectedToServer){
			return
		}
		isConnectedToServer = value
		if(isConnectedToServer){
			if(setupState == SetupState.CredentialingGuest){
				dispatch('guestSetupComplete', {'roomCode': roomCode})
			}
			else if (setupState == SetupState.HostGenerating){			
				dispatch('hostSetupComplete', {'mainGeneration': curMainGeneration}) //TODO: This isn't working. Using stores for now. Refactor?
			}
			else{
				// console.log("ERROR Connected to server received, but not in a state to send setup complete message")
			}			
		}
	})

    const dispatch = createEventDispatcher()

    let setupState = SetupState.Landing

	function completeHostSetup(mainGeneration: GenAndPrompt){		
		console.log(mainGeneration)
		curMainGeneration = mainGeneration		
		console.log(curMainGeneration)
		
		if (!isConnectedToServer){
			connectToServer()	
		}
		else{
			console.log("ERROR - completeHostSetup called when already connected to server")
		}
		
	}

	function completeGuestSetup(){
		console.log("1. Guest setup complete")
		if (!isConnectedToServer){
			connectToServer()	
		}
		else{
			console.log("ERROR - completeGuestSetup called when already connected to server")
		}
	}    

	function receivedCredentials(credentials: Credentials){	
		apiKey.set(credentials.apikey)
		userName.set(credentials.username)		

		if(setupState == SetupState.CredentialingGuest){
			isHost.set(false)
			completeGuestSetup()
		}
		else{
			setupState = SetupState.HostGenerating
			isHost.set(true)
			hostName.set(credentials.username)
		}
	}

	
</script>

<div class="outer">
	<div>
        {#if setupState == SetupState.Landing}
		
		<h1>BITS&BOTS</h1>
		<Button on:click={()=>{setupState = SetupState.CredentialingHost}}>Get Started</Button>
		<p>OR</p>
		<InputButtonCombo on:click={()=>{setupState = SetupState.CredentialingGuest}} bind:value={roomCode} placeholder="Enter Room Code">
			Join Room
		</InputButtonCombo>

        {:else if setupState == SetupState.CredentialingHost || setupState == SetupState.CredentialingGuest}
        <CredentialsPage on:received={(event)=>{receivedCredentials(event.detail)}}/>
        {:else if setupState == SetupState.HostGenerating}
        <HostGeneratePage on:generated={(event)=>{completeHostSetup(event.detail)}}/>
        {/if}
	</div>
</div>

<style lang="scss">
	h1 {
		font-size: 4em;
		text-align: center;
	}
	.outer {
		display: flex;
		justify-content: center;
		height: 100%;
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