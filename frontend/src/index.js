const newGameContainer = document.getElementById('new-game-container')
const startGameForm = document.getElementById('new-game-form')
const startGameInput = document.getElementById('player-name-input')

// document.addEventListener('DOMContentLoaded', loadNewGameForm);

// function loadNewGameForm() {
//     const h3 = document.createElement('h3')
//     h3.innerText = 'Welcome to the Trivia App. Enter you name below to start a new Game.'
//     const form = document.createElement('form')
//     form.id = 'new-game-form'
//     const input = document.createElement('input')
//     input.type = 'text'
//     input.id = 'player-name-input'
//     const submit = document.createElement('input') 
//     submit.type = "submit"
//     submit.id = 'player-name-submit'
//     submit.value = "Let's Get Started!"
       
//     newGameContainer.appendChild(h3)
//     newGameContainer.appendChild(form)
//     form.appendChild(input)
//     form.appendChild(submit)
// }

startGameForm.addEventListener("submit", startGame)

function startGame() {
    event.preventDefault()
    newGameContainer.remove()
    console.log(startGameInput.value)
}