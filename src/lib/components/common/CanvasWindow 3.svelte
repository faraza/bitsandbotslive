<script lang="ts">    
    import Canvas from '$lib/components/common/Canvas.svelte'
	import TextButton from './TextButton.svelte'
    import InputButtonCombo from './InputButtonCombo.svelte';
    import { CanvasTypes } from '$lib/api/componentOptions';
    import type {GenAndPrompt} from '$lib/api/setup'
    import Frame from './Frame.svelte'

    export let imageSource = ""
    export let placeholderText = "A blank canvas has infinite possibilities"
    export let canvasType = 0    
    export let gameComplete = false


    import {createEventDispatcher} from 'svelte'
    import {apiKey} from '$lib/data/store'
    import {generateImage, ImageSize} from '$lib/utils/imageGenerator'

    let prompt = ""
    
    export let finalPrompt = "Luigi and Washington crossing the Delaware" //TO be displayed when the game is complete. Make sure to set this
    
    let myAPIKey = ""
    apiKey.subscribe(value => {
        myAPIKey = value
    })

    const dispatcher = createEventDispatcher()

    async function generateFromPrompt(){
        // console.log("Generate Image: " + prompt + " key: " + myAPIKey)        
        const imageUrl = await generateImage(prompt, myAPIKey, ImageSize.SMALL)
        const genAndPrompt: GenAndPrompt = {
            imagePrompt: prompt,
            imageURL: imageUrl}

        imageSource = imageUrl
        finalPrompt = prompt
        dispatcher('generate', genAndPrompt)
    }

    function confirmGeneration(){
        const genAndPrompt: GenAndPrompt = {
            imagePrompt: finalPrompt,
            imageURL: imageSource}
        dispatcher('confirmGeneration', genAndPrompt)
    }

</script>

<div class = "outer">
    <Frame title={"Bits&Bots"}>
    <Canvas imageSource={imageSource} placeholderText={placeholderText}></Canvas>

    <div class="bottom-bar">
        {#if canvasType == CanvasTypes.MainImage}
            <div class = 'bottom-bar-main-image'>
                <h2>Try to recreate it!</h2>
            </div>                

        {:else if canvasType == CanvasTypes.PlayerGenerator}
            <div class = 'bottom-bar-player-generator'>
                {#if !gameComplete}
                <InputButtonCombo placeholder={'Enter your prompt'} horizontal={true} bind:value={prompt} on:click={generateFromPrompt}>Generate</InputButtonCombo>
                {/if}
            </div>                
        <!-- {:else if canvasType == CanvasTypes.PlayerCompetitor} -->
        {:else if canvasType == CanvasTypes.HostGenerator}
            <div class="bottom-buttons">
                <TextButton on:click={generateFromPrompt}>Generate</TextButton>
                <TextButton on:click={confirmGeneration}>Let's Go</TextButton>
            </div>        
        {/if}

        <div class="final-prompt-bar">
            {#if gameComplete}
            <p>Prompt: {finalPrompt}</p>
            {/if}
        </div>        

    </div>
    </Frame>
</div>

<style lang="scss">
    .outer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

    .bottom-bar-main-image{        
        width: 100%;        
        background-color: #000000;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 3px;
        padding-right: 3px;
    }

    .final-prompt-bar{        
        width: 100%;        
        background-color: #000000;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 3px;
        padding-right: 3px;
    }
</style>
