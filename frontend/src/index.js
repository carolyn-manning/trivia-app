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
    setTimeout(endGame, 60000)
    createUserAndGame()
    newGameContainer.remove()
    fetchQuestions()
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

function fetchQuestions() {
    fetch(questionsURL)
    .then(response => response.json())
    .then(data => displayQuestions(data))
}

function displayQuestions(data) {
    for (let i = 0; i < data.length; i++){
        const question = document.createElement('h3')
        question.innerText = data[i]["question"]
        question.id = `q-${data[i]["id"]}`
        const answerContainer = document.createElement('ul')
        question.appendChild(answerContainer)
        questionContainer.appendChild(question)

        answerArray = [data[i]["choice_1"], data[i]["choice_2"], data[i]["choice_3"], data[i]["answer"]]

        for (let n = 0; n < answerArray.length; n++) {
            let answer = document.createElement('li')
            answer.innerText = answerArray[n]
            answerContainer.appendChild(answer)
        }
        answerContainer.addEventListener("click", (e) => {
            answerQuestion(e, data[i]['answer'])
        })
    }
}

function answerQuestion(e, answer) {
    const questionContainer = e.target.parentElement
    question = questionContainer.parentElement
    if(e.target.innerText === answer) {
        question.innerText = "CORRECT"
        question.style.color = "green"
        fadeOutEffect(question)
        OptUpdateScore()
    } else {
        question.innerText = "INCORRECT"
        question.style.color = "red"
    }
    fadeOutEffect(question)
}


function OptUpdateScore() { 
    const scoreHTML = document.getElementById("running-score")
    let score = parseInt(scoreHTML.innerText)
    score += 1
    scoreHTML.innerText = `${score}`
}

function endGame() {
    updateScoreInDB()
    questionContainer.remove()
    fetchScoreboard()
}

function updateScoreInDB() {
    const scoreHTML = document.getElementById('running-score')
    const configObj = {
        method: "PATCH", 
        headers: {
            "Content-Type": 'application/json',
            "Accept": "application/json",
        },
        body: JSON.stringify({
            score: parseInt(scoreHTML.innerText)
        })
    }
    fetch(`http://localhost:3000/games/${parseInt(scoreHTML.dataset.id)}`, configObj)
}

function fetchScoreboard() {
    fetch(gamesURL)
    .then(response => response.json())
    .then(data => buildScoreboard(data))
}

function buildScoreboard(data) {
    data.sort((a, b) => (a.score < b.score) ? 1 : -1)
        scoreboard = document.createElement("table")
        for (let i = 0; i < 25; i++){
            const row = document.createElement("tr")
            const name = document.createElement("td")
            const score = document.createElement("td")
            score.innerText = `${data[i]['score']}`

            if(data[i]['user']['name'] === ''){
                name.innerText = "Unknown Player"
            } else {
                name.innerText = `${data[i]['user']['name']}`
            }
            
            row.append(name, score)
            scoreboard.appendChild(row)
        }
        scoreBoardContatiner.appendChild(scoreboard)
}

function fadeOutEffect(fadeTarget) {
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 75);
    setTimeout(function() {question.remove()}, 600)
}

// function shuffleArray(array) {
//     let currentIndex = array.length,  randomIndex;
  
//     while (currentIndex != 0) {
  
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
  
//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }
  
//     return array;
//   }






