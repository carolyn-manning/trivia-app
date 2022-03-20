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

   setTimeout(endGame, 5000)

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
    .then(data => {
        let title = document.createElement('h3')
        let score = document.createElement('p')
        score.id = "running-score"
        score.dataset.id = data["games"].slice(-1)[0]['id']
        score.innerText = "0"
        title.innerText = "Your Score"
        runningScoreContatiner.append(title, score)
    });
       
    newGameContainer.remove()
    fetchQuestions()
    
    // questionText.innerText = "Question 1"
    // const qText = document.getElementById('question-text')
    // let answer = document.createElement('li')
    // answer.innerText = "Test Answer"
    // answerChoiceList.appendChild(answer)
    
    // add event listener with loop startGameForm.addEventListener("submit", startGame)
}

function fetchQuestions() {
    fetch(questionsURL)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++){
            const question = document.createElement('h3')
            question.innerText = data[i]["question"]
            question.id = `q-${data[i]["id"]}`
            let answerContainer = document.createElement('ul')
            answerContainer.id = `answers-${data[i]["id"]}`
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
    })
    
}

function answerQuestion(e, answer) {
    if(e.target.innerText === answer) {
        const questionContainer = e.target.parentElement
        question = questionContainer.parentElement
        question.innerText = "CORRECT"
        question.style.color = "green"
        OptUpdateScore()
    } else {
        const questionContainer = e.target.parentElement
        question = questionContainer.parentElement
        question.innerText = "INCORRECT"
        question.style.color = "red"
    }
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
    fetchScore()
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

function fetchScore() {
    fetch(gamesURL)
    .then(response => response.json())
    .then(data => {console.log(data)})
}







