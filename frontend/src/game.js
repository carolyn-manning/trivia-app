class Game {
    
    static allGames = []

    constructor(game) {
        this.score = game.score
        this.user = game.user.name
        this.id = game.id
        Game.allGames.push(this)
    }

    static fetchScoreboard() {
        fetch(gamesURL)
        .then(response => response.json())
        .then(games=> {
            for(let game of games) {new Game(game)};
            Game.renderScoreboard()
        })
    }

    renderScore(scoreboard, rankNumber) {
        const row = document.createElement("tr")
        const username = document.createElement("td")
        const score = document.createElement("td")
        const rank = document.createElement("td")
        score.innerText = this.score
        rank.innerText = `${rankNumber}`

        if(this.user === ''){
            username.innerText = "Unknown Player"
        } else {
            username.innerText = this.user
        }
                
        row.append(rank, username, score)
        scoreboard.appendChild(row)
    }

    static renderScoreboard() {
        this.allGames.sort((a, b) => (a.score < b.score) ? 1 : -1)
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
                this.allGames[i].renderScore(scoreboard, i + 1)
            }

            const endText = document.createElement("h3")
            endText.innerText = "Let's Take a Look at the Leaderboard"
            endText.id = "end-text"
            scoreBoardContatiner.append(endText, scoreboard)
    }

    static updateScoreInDB() {
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

    static updateScoreInHTML() { 
        const scoreHTML = document.getElementById("running-score")
        let score = parseInt(scoreHTML.innerText)
        score += 1
        scoreHTML.innerText = `${score}`
    }

    static endGame() {
        Game.updateScoreInDB()
        const endContainer = document.getElementById('times-up-container')
        const endingText = document.createElement("h1")
        questionContainer.remove()
        endingText.innerText = "TIMES'S UP!!!"
        endContainer.appendChild(endingText)
        setTimeout(Game.fetchScoreboard, 2000)
    }

}