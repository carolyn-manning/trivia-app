const newGameContainer = document.getElementById('new-game-container')
const startGameForm = document.getElementById('new-game-form')
const startGameInput = document.getElementById('player-name-input')
const answerChoiceList = document.getElementById('choices')
const questionText = document.getElementById('question-text')
const scoreBoardContatiner = document.getElementById('score-board-container')
const runningScoreContatiner = document.getElementById('running-score-container')
const questionContainer = document.getElementById('question-container')
const usersURL = 'http://localhost:3000/users'
const questionsURL = 'http://localhost:3000/questions'
const gamesURL = 'http://localhost:3000/games'

startGameForm.addEventListener("submit", startGame)

function startGame() {
    event.preventDefault()
    setTimeout(Game.endGame, 30000)
    createUserAndGame()
    newGameContainer.remove()
    Question.fetchQuestions()
}

function createUserAndGame() {
    const configObj = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: startGameInput.value
        })
    }
    
    fetch(usersURL, configObj)
    .then(response => response.json())
    .then(data => buildRunningScore(data));
}

function buildRunningScore(data) {
    let title = document.createElement('h3')
        let score = document.createElement('p')
        score.id = "running-score"
        score.dataset.id = data["games"].slice(-1)[0]['id']
        score.innerText = "0"
        title.innerText = "Your Score"
        runningScoreContatiner.append(title, score)
}

function fadeOutEffect(fadeTarget) {
    let fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 75);
    setTimeout(function() {fadeTarget.remove()}, 600)
}






