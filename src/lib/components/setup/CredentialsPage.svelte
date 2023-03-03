<script lang="ts">
    import Button from '$lib/components/common/TextButton.svelte';
    import InputButtonCombo from '$lib/components/common/InputButtonCombo.svelte';
    import {createEventDispatcher} from 'svelte';
    import type {Credentials} from '$lib/api/setup';

    let apiKey = ""
    let userName = ""    

    let apiConfirmed = false
    const dispatch = createEventDispatcher()

    function credentialsComplete(){
        const credentials: Credentials = {
            'apikey': apiKey,
            'username': userName}
        dispatch('received', credentials)
    }

</script>

<div>
    {#if !apiConfirmed}
    <InputButtonCombo bind:value={apiKey} placeholder="Enter API Key" on:click={()=>{apiConfirmed = true}}>
        Confirm
    </InputButtonCombo>
    {:else}
    <InputButtonCombo bind:value={userName} placeholder="Enter User Name" on:click={credentialsComplete}>
        Confirm
    </InputButtonCombo>
    {/if}
</div>

