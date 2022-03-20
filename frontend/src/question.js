class Question {

    static allQuestions = []

    constructor(question) {
        this.question = question.question
        this.choice_1 = question.choice_1
        this.choice_2 = question.choice_2
        this.choice_3 = question.choice_3
        this.answer = question.answer
        Question.allQuestions.push(this)
    }

    static fetchQuestions() {
        fetch(questionsURL)
        .then(response => response.json())
        .then(questions => {
            for(let question of questions) {let newList = new Question(question)};
            Question.renderQuestions(questions)
        })
    }

    renderQuestion(question) {
        const answerContainer = document.createElement('ul')
        const questionText = document.createElement('h3')
        questionText.innerText = this.question
        questionText.appendChild(answerContainer)
        questionContainer.appendChild(questionText)

        let answers = [this.choice_1, this.choice_2, this.choice_3, this.answer]
        this.shuffleArray(answers)
        for (let n = 0; n < answers.length; n++) {
            let answer = document.createElement('li')
            answer.innerText = answers[n]
            answerContainer.appendChild(answer)
        }
        answerContainer.addEventListener("click", (e) => {
            answerQuestion(e, this.answer)
        })
        
    }

    static renderQuestions() {
        for (let question of this.allQuestions){
            question.renderQuestion(question) 
        }
    }


    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // fadeOutEffect(fadeTarget) {
    //     var fadeEffect = setInterval(function () {
    //         if (!fadeTarget.style.opacity) {
    //             fadeTarget.style.opacity = 1;
    //         }
    //         if (fadeTarget.style.opacity > 0) {
    //             fadeTarget.style.opacity -= 0.1;
    //         } else {
    //             clearInterval(fadeEffect);
    //         }
    //     }, 75);
    //     setTimeout(function() {question.remove()}, 600)
    // }

}