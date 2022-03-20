class Game {
    
    static allGames = []

    constructor(game) {
        this.score = game.score
        this.user = game.user.name
        Game.allGames.push(this)
    }

    static fetchScoreboard() {
        fetch(gamesURL)
        .then(response => response.json())
        .then(games=> {
            for(let game of games) {new Game(game)};
            renderScoreboard(games)
        })
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
                const row = document.createElement("tr")
                const name = document.createElement("td")
                const score = document.createElement("td")
                const rank = document.createElement("td")
                score.innerText = `${games[i]['score']}`
                rank.innerText = `${i + 1}`

                if(this.] === ''){
                    name.innerText = "Unknown Player"
                } else {
                    name.innerText = `${games[i]['user']['name']}`
                }
                
                row.append(rank, name, score)
                scoreboard.appendChild(row)
            }
            const endText = document.createElement("h3")
            endText.innerText = "Let's Take a Look at the Leaderboard"
            endText.id = "end-text"
            scoreBoardContatiner.append(endText, scoreboard)
    }

    updateScoreInDB() {
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

}