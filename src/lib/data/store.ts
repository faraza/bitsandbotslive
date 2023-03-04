import {writable} from 'svelte/store'

export const apiKey = writable('')
export const userName = writable('')
export const isHost = writable(false)

let myUsername = ''
userName.subscribe(value => {
    myUsername = value
})

//Only include other players in this list
export const playersList = writable([])

export const playersAndImages = writable([])//writable([['faraz', 'https://picsum.photos/200/300'], ['thomas', 'https://picsum.photos/200/300']])

export const hostName = writable('')


export const connectedToWebsocket = writable(false)

export const websocket  = writable()

export const mainGenPrompt = writable('')
export const mainGenURL = writable('')

export const gameStarted = writable(false)
export const roomCode = writable('')
export const gameWinner = writable('')

export const timeRemaining = writable(0)
let curTimeRemaining = 0
timeRemaining.subscribe(value => {
    curTimeRemaining = value
})
export const startRunningTimer = writable(false)
let wasRunning = false
startRunningTimer.subscribe(value => {
    if(wasRunning) return
    if(value){
        console.log("Start running timer")
        wasRunning = true
        const initialStartTime = 30
        timeRemaining.set(initialStartTime)
        setTimeout(decrementTimer, 1000)
    }
})

function decrementTimer(){
    if(curTimeRemaining <= 0){
        return
    }
    console.log("Decrementing timer. Time remaining: " + curTimeRemaining + " seconds")
    timeRemaining.set(curTimeRemaining - 1)
    setTimeout(decrementTimer, 1000)
}

export const connectToServer = ()=>{
    const ws  = new WebSocket('wss://api.bitsandbotsgame.com:8081')
    websocket.set(ws)
    ws.addEventListener('open', (event)=>{
        console.log('Connected to server')
        console.log(event)
        connectedToWebsocket.set(true)
    })
    
    ws.addEventListener('message', (message)=>{
        console.log('Received message from server')
        // console.log(message)
        const data = JSON.parse(message.data);
        console.log(data)
        processServerMessage(data)
    })
    ws.addEventListener('error', (event)=>{
        console.log("Websocket error")
        console.log(event)
    })
}

function processServerMessage(serverMessage: any){
    if(serverMessage.type == 'create-room-response'){
        roomCode.set(serverMessage.roomID)
    }
    else if(serverMessage.type == 'start-game'){
        gameStarted.set(true)
    }
    else if(serverMessage.type == 'update-state'){        
        processGameStateMessage(serverMessage.game)                
    }
}

function processGameStateMessage(gamestate: any){
    const hostObject = gamestate.host     
    hostName.set(hostObject.username)
    mainGenPrompt.set(hostObject.imagePrompt)
    mainGenURL.set(hostObject.imageURL)

    const players: any = gamestate.players
    processUpdatedPlayersList(players)    
    

    if (gamestate.state == 'finished'){
        gameWinner.set(gamestate.winner)
    }
    else if (gamestate.state == 'guessing'){
        gameStarted.set(true)
    }
}

function processUpdatedPlayersList(receivedPlayersList: any){
    let newPlayersList: any = []
    let newPlayersAndImages: any = []

    for (let i = 0; i < receivedPlayersList.length; i++){
        const playerObject = receivedPlayersList[i]
        if(playerObject.username == myUsername){
            continue
        }
        newPlayersList.push(playerObject.username)
        newPlayersAndImages.push([playerObject.username, playerObject.imageURL, playerObject.imagePrompt])
    }

    playersList.set(newPlayersList)
    playersAndImages.set(newPlayersAndImages)

}