const newGameContainer = document.getElementById('new-game-container')
const startGameForm = document.getElementById('new-game-form')
const startGameInput = document.getElementById('player-name-input')
const answerChoiceList = document.getElementById('choices')
const questionText = document.getElementById('question-text')
const scoreBoardContatiner = document.getElementById('score-board-container')
const runningScoreContatiner = document.getElementById('running-score-container')
const questionContainer = 
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
    console.log(startGameInput.value)
   
    newGameContainer.remove()

    let qs = ["question 1", "question 2", "question 3"]
    
    questionText.innerText = "Question 1"
    const qText = document.getElementById('question-text')
    let answer = document.createElement('li')
    answer.innerText = "Test Answer"
    answerChoiceList.appendChild(answer)
    
    // add event listener with loop startGameForm.addEventListener("submit", startGame)

    

    let name = document.createElement('p')
    let score = document.createElement('p')
    score.innerText = "Score"
    name.innerText = startGameInput.value

    runningScoreContatiner.append(name, score)
    
    
}