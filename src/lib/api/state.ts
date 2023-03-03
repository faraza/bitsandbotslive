// TODO: need to work with Thomas to figure out the desired state struct.
// This is just a start / placeholder


// TODO: cover all game states
type GameState = 'waiting' | 'initial-prompt' | 'finished'

export type RoomState = {
    gameState: GameState
    messages: Message[]
}

export type Message = {
    body: string
    sentAt: Date
}
