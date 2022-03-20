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
    setTimeout(endGame, 30000)
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

// function fetchQuestions() {
//     fetch(questionsURL)
//     .then(response => response.json())
//     .then(data => displayQuestions(data))
// }

// function displayQuestions(data) {
//     for (let i = 0; i < data.length; i++){
//         const question = document.createElement('h3')
//         question.innerText = data[i]["question"]
//         question.id = `q-${data[i]["id"]}`
//         const answerContainer = document.createElement('ul')
//         question.appendChild(answerContainer)
//         questionContainer.appendChild(question)

//         answerArray = [data[i]["choice_1"], data[i]["choice_2"], data[i]["choice_3"], data[i]["answer"]]
//         shuffleArray(answerArray)

//         for (let n = 0; n < answerArray.length; n++) {
//             let answer = document.createElement('li')
//             answer.innerText = answerArray[n]
//             answerContainer.appendChild(answer)
//         }
//         answerContainer.addEventListener("click", (e) => {
//             answerQuestion(e, data[i]['answer'])
//         })
//     }
// }

function answerQuestion(e, answer) {
    const questionContainer = e.target.parentElement
    console.log(e.target.parentElement)
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
    const endContainer = document.getElementById('times-up-container')
    const endingText = document.createElement("h1")
    questionContainer.remove()
    endingText.innerText = "TIMES'S UP!!!"
    endContainer.appendChild(endingText)
    setTimeout(fetchScoreboard, 2000)
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
        const scoreboard = document.createElement("table")
        const rankHeader = document.createElement("th")
        const nameHeader = document.createElement("th")
        const scoreHeader = document.createElement("th")
        const headerRow = document.createElement("tr")
        rankHeader.innerText = "Rank"
        nameHeader.innerText = "Name"
        scoreHeader.innerText = "Score"
        headerRow.append(rankHeader, nameHeader, scoreHeader)
        scoreboard.appendChild(headerRow)

        for (let i = 0; i < 25; i++){
            const row = document.createElement("tr")
            const name = document.createElement("td")
            const score = document.createElement("td")
            const rank = document.createElement("td")
            score.innerText = `${data[i]['score']}`
            rank.innerText = `${i + 1}`

            if(data[i]['user']['name'] === ''){
                name.innerText = "Unknown Player"
            } else {
                name.innerText = `${data[i]['user']['name']}`
            }
            
            row.append(rank, name, score)
            scoreboard.appendChild(row)
        }
        const endText = document.createElement("h3")
        endText.innerText = "Let's Take a Look at the Leaderboard"
        endText.id = "end-text"
        scoreBoardContatiner.append(endText, scoreboard)
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
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }






