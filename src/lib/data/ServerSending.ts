import {websocket} from '$lib/data/store'

let myWebSocket: WebSocket
websocket.subscribe(value => {
    myWebSocket = value as WebSocket
})

export function sendJoinRoom(userName: string, roomId: string){
    const request = {
        type: 'join-room-request',
        username: userName,
        roomID: roomId
    }
    const stringifiedRequest = JSON.stringify(request)
    sendRequest(stringifiedRequest)
}

//Only the host should send this
export function sendStartGame(){
    const request = {type: 'start-game'}
    const stringifiedRequest = JSON.stringify(request)
    sendRequest(stringifiedRequest)
}

export function sendCreateRoom(userName: string, imageUrl: string, imagePrompt: string){
    console.log("Image URL:" + imageUrl + " Image Prompt: " + imagePrompt)
    if(!imageUrl){
        imageUrl = 'no url provided'
    }
    if (!imagePrompt){
        imagePrompt = 'no prompt provided'
    }

    const request = {
        type: 'create-room-request',
        username: userName,
        imageURL: imageUrl,
        imagePrompt: imagePrompt
    }

    const stringifiedRequest = JSON.stringify(request)
    console.log("Sending create room request")
    sendRequest(stringifiedRequest)
}

export function sendChooseWinner(winnerName: string){
    const request = {
        type: 'choose-winner',
        username: winnerName
    }
    const stringifiedRequest = JSON.stringify(request)
    sendRequest(stringifiedRequest)
}

export function sendUpdatePlayerState(userName: string, imageURL: string, imagePrompt: string, state: string = "typing"){ //TODO: Implement state as enum
    const request = { //TODO: Include image prompt once API has been updated
        type: 'update-player-state',
        username: userName,
        imageID: imageURL,
        state: state
    }
    
    const stringifiedRequest = JSON.stringify(request)
    sendRequest(stringifiedRequest)
}

function sendRequest(stringifiedJson: string){
    console.log("Sending request to server")
    console.log(stringifiedJson)
    myWebSocket.send(stringifiedJson)
}