const inq = require('inquirer')
const Word = require('./Word')
const chalk = require('chalk')
const color = 'red'
const ps = require('./PromptSetting')

module.exports = color

class Hangman {

    constructor(category) {
        this.allWordGuess = []
        this.score = 0
        this.category = category
        this.Word = new Word(category)
        console.log(chalk.yellow("Hint: " + this.Word.getHint))
        this.guess()
    }

    displayState() {
        let result = []
        for(let i=0;i<this.length;i++) {
            const currentWord = this.playerGuessWord.toString()
            if(currentWord.charCodeAt(i) >= 97 && currentWord.charCodeAt(i) <= 122) {
                result.push(this.playerGuessWord[i])
            } else {
                result.push("[]")
            }
        }
        result = result.join(" ")
        console.log(result)
    }

    guess() {
        if(this.allWordGuess.length >= 10) {
            this.endGame()
        }

        // Display process and incorrect word
        this.Word.guessProcess()

        inq.prompt(ps.questionGuess)
            .then( ({word}) => {
                this.checking(word)
            })    
    }

    checking(word) {
        if(this.allWordGuess.indexOf(word) >= 0) {
            this.guess()
        } else {
            this.allWordGuess.push(word)
            if(this.Word.updateGuessWord(word)) {
                // word guess is correct 
                this.scoring()
                console.log("")
            }
            if(this.Word.isWin()) {
                console.log(chalk.orange("You win!!"))
            } else {
                this.guess()
            }
        }
    }

    scoring() {
        // Some Logic About Scoring
    }

    endGame() {
        console.log(chalk.red("This game is end... you lose!"))
    }

} 

module.exports = Hangman