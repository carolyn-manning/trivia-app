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
        let name = document.createElement('p')
        let score = document.createElement('p')
        score.innerText = "Score"
        name.innerText = data["name"]
        runningScoreContatiner.append(name, score)
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
            let answerContainer = document.createElement('ul')
            questionContainer.append(question, answerContainer)

            answerArray = [data[i]["choice_1"], data[i]["choice_2"], data[i]["choice_3"], data[i]["answer"]]

            for (let n = 0; n < answerArray.length; n++) {
                let answer = document.createElement('li')
                answer.innerText = answerArray[n]
                answer.addEventListener("click", answerQuestion)
                answerContainer.appendChild(answer)
        
            }
        }
    })
    
}

function answerQuestion(e, answer) {
    console.log(e.target)
}

