<script lang="ts">
    import {isHost, playersList, hostName} from '$lib/data/store'  
    import TextButton from '$lib/components/common/TextButton.svelte'  
    import {createEventDispatcher} from 'svelte'
	import { onMount } from 'svelte'
    import { getDummyPlayersList1, getDummyPlayersList2 } from '$lib/data/DummyData';

    let amIHost = true
    let curHostName = ''
    isHost.subscribe((value) => {
        amIHost = value
    })
    hostName.subscribe((value) => {
        curHostName = value
    })

    const dispatch = createEventDispatcher()

    let guest_list: string[] = []
    playersList.subscribe((value) => {
        guest_list = value
    })

    function startPressed(){
        console.log("Game was started!")
        dispatch('started')
    }

</script>

<div>
    {#if amIHost}
        <h1>Click start when players have joined</h1>
        <TextButton on:click={()=>{startPressed()}}>Start</TextButton>
    {:else}
        
        <h3>Waiting for {curHostName} to start the game</h3>        
    {/if}    

    <h2>Current Players:</h2>
        {#each guest_list as guest}
            <li>
                {guest}
            </li>
        {/each}
</div>

<style lang="scss">
    
</style>