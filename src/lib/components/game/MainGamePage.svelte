<script lang="ts">
    import {apiKey, isHost, hostName, playersList, userName, mainGenPrompt, mainGenURL, playersAndImages} from '$lib/data/store'
    // import Canvas from '$lib/components/common/Canvas.svelte'
    import CanvasWindow from '../common/CanvasWindow.svelte';
    import TextButton from '../common/TextButton.svelte';
    import { CanvasTypes } from '$lib/api/componentOptions';
    import type {GenAndPrompt} from '$lib/api/setup'
	import { sendUpdatePlayerState, sendChooseWinner } from '$lib/data/ServerSending'
    import {onMount} from 'svelte'
    import {getDummyPlayerAndImageList1, getDummyPlayerAndImageList2, getDummyPlayerAndImageList3} from '$lib/data/DummyData'

    let mainImage = ""
    let mainPrompt = ""
    let nameOfHost = ""
    // let otherPlayers = ['']
    let curPlayersAndImages: any[] = []
    let amIHost = false
    let timeRemaining = 20
    let gameComplete = false

    let myUserName = ""

    let winnerName = "" //TODO: Reset this when the game is reset

    onMount(()=>{
        setInterval(decrementTimer, 1000)

        setTimeout(()=>{
            const dummy1 = getDummyPlayerAndImageList1()
            playersAndImages.set(dummy1)
        }, 0)

        setTimeout(()=>{
            const dummy2 = getDummyPlayerAndImageList2()
            playersAndImages.set(dummy2)
        }, 10000)

        setTimeout(()=>{
            const dummy3 = getDummyPlayerAndImageList3()
            playersAndImages.set(dummy3)
        }, 15000)
    })

    playersAndImages.subscribe((value) => {
        curPlayersAndImages = value        
    })

    function decrementTimer(){
        if (timeRemaining > 0){
            timeRemaining--
        }
        else{
            gameComplete = true
        }
    }

    function pickWinner(winnerToPick: string){
        console.log("Picked winner: " + winnerToPick)
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


    function imageGenerated(genAndPrompt: GenAndPrompt){
        console.log("Image generated")
        console.log(genAndPrompt)    
        sendUpdatePlayerState(myUserName, genAndPrompt.imageURL, genAndPrompt.imagePrompt)
    }


</script>


<div>
    {#if !gameComplete}
    <div class="timer-container">
        <h2>Time: {timeRemaining} seconds</h2>
    </div>
    {:else}
        <h2>Game Complete!</h2>
        {#if winnerName != ""}
            <h2>Winner: {winnerName}</h2>
        {:else}
            {#if !amIHost}                
                <h2>{nameOfHost} is choosing the winner</h2>
            {:else}
                <h2>Choose the winner</h2>
            {/if}
        {/if}
    {/if}
    <h1>{nameOfHost}'s Image</h1> 
    
    <CanvasWindow imageSource={mainImage} canvasType={CanvasTypes.MainImage} gameComplete = {gameComplete} finalPrompt={mainPrompt}/>

    {#if !amIHost}
    <h2>You</h2>
    <CanvasWindow canvasType={CanvasTypes.PlayerGenerator} on:generate={(event)=>{imageGenerated(event.detail)}} gameComplete = {gameComplete}/>
    {/if}

    {#each curPlayersAndImages as playerAndImage}
    <h2>{playerAndImage[0]}</h2>
    <CanvasWindow canvasType={CanvasTypes.PlayerCompetitor} placeholderText={playerAndImage[0] + " is generating an image"} 
    gameComplete = {gameComplete} imageSource={playerAndImage[1]} finalPrompt={playerAndImage[2]}/>
    <div class="winner-picking-button">
        {#if gameComplete && amIHost && winnerName == ""}
        <TextButton on:click={()=>{pickWinner(playerAndImage[0])}}>Select as Winner</TextButton>
        {/if}
    </div>
    
    {/each}
</div>

<style lang="scss">
    .winner-picking-button {
        padding-top: 3px;
        display: flex;
        justify-content: center;
    }
</style>
