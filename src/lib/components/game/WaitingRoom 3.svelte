<script lang="ts">
    import {isHost, playersList} from '$lib/data/store'  
    import TextButton from '$lib/components/common/TextButton.svelte'  
    import {createEventDispatcher} from 'svelte'
	import { onMount } from 'svelte'
    import { getDummyPlayersList1, getDummyPlayersList2 } from '$lib/data/DummyData';

    let amIHost = true
    isHost.subscribe((value) => {
        amIHost = value
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

    onMount(()=>{
        setTimeout(()=>{
            const dummy1 = getDummyPlayersList1() as any
            playersList.set(dummy1)
        }, 5000)

        setTimeout(()=>{
            const dummy2 = getDummyPlayersList2() as any
            playersList.set(dummy2)
        }, 8000)
        
    })

</script>

<div>
    {#if amIHost}
        <h1>Click start when players have joined</h1>
        <TextButton on:click={()=>{startPressed()}}>Start</TextButton>
    {:else}
        
        <h3>Waiting for host to start the game</h3>        
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