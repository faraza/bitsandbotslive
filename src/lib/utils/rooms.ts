export function createRoomId(length: number = 4) {
    const dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const len = dictionary.length

    let roomId = ''
    for (let i = 0; i < 4; i++) {
        const idx = Math.floor(Math.random() * len)
        roomId += dictionary[idx]
    }

    return roomId
}