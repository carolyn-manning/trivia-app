const startGameForm = document.getElementById('new-game-form')
const startGameInput = document.getElementById('player-name-input')

startGameForm.addEventListener("submit", startGame)

function startGame() {
    event.preventDefault()
    console.log(startGameInput.value)
}