const inq = require('inquirer')
const Word = require('./Word')
const chalk = require('chalk')
const color = 'red'
const ps = require('./PromptSetting')

module.exports = color

class Hangman {

    constructor(category) {
        this.guessWord = []
        this.score = 0
        this.category = category
        this.Word = new Word(category)
        this.length = this.Word.getWord.length
        this.playerGuessWord = []
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
        if(this.guessWord.length >= 10) {
            this.endGame()
        }

        this.displayState()

        inq.prompt(ps.questionGuess)
            .then( ({word}) => {
                this.checking(word)
            })    
    }

    checking(word) {
        if(this.guessWord.indexOf(word) > 0) {
            const indexWord = this.word.indexOf(word)
            if(indexWord > 0) {
                playerGuessWord[index]
                this.scoring()
            } else {

            }
        } else {
            this.guess()
        }
    }

    scoring() {

    }

    endGame() {
        console.log(chalk.red("This game is end... you lose!"))
    }

} 

module.exports = Hangman