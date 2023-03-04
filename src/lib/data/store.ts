import {writable} from 'svelte/store'

export const apiKey = writable('')
export const userName = writable('')
export const isHost = writable(false)

//Only include other players in this list
export const playersList = writable([])

export const playersAndImages = writable([['faraz', 'https://picsum.photos/200/300'], ['thomas', 'https://picsum.photos/200/300']])

export const hostName = writable('') //TODO: Set from server

// export const mainImageUrl = writable('https://oaidalleapiprodscus.blob.core.windows.net/private/org-DNJha0NDtZu4TaAeqp1F2kY3/user-gsFNHULRvVK2JmgcU67kpUpK/img-eOYDbkllsGc2zSOiQzuQlQs5.png?st=2023-03-03T07%3A35%3A12Z&se=2023-03-03T09%3A35%3A12Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-03T05%3A24%3A24Z&ske=2023-03-04T05%3A24%3A24Z&sks=b&skv=2021-08-06&sig=/Za2B0x6Jjbvfz6tfO/nppYikAG7ubfDCvVBVnnRL4o%3D')
//TODO: ^ set from server
export const mainImageUrl = writable('')
export const secondsOnTimer = writable(60) //TODO: Remove from this file

export const connectedToWebsocket = writable(false)

export const websocket  = writable()

export const mainGenPrompt = writable('')
export const mainGenURL = writable('')

export const gameStarted = writable(false)
export const roomCode = writable('')

export const connectToServer = ()=>{
    // const ws  = new WebSocket('ws://157.245.2.112:8080')
    // websocket.set(ws)
    // ws.addEventListener('open', (event)=>{
    //     console.log('Connected to server')
    //     console.log(event)
    //     connectedToWebsocket.set(true)
    // })
    
    // ws.addEventListener('message', (message)=>{
    //     console.log('Received message from server')
    //     // console.log(message)
    //     const data: Request = JSON.parse(message.data);
    //     console.log(data)
    // })
    // ws.addEventListener('error', (event)=>{
    //     console.log("Websocket error")
    //     console.log(event)
    // })

}