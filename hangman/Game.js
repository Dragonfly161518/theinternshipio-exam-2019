const inq = require('inquirer')
const Word = require('./Word')
const color = 'red'

module.exports = color

class Hangman {

    constructor(category) {
        this.guessWord = []
        this.score = 0
        this.category = category
        this.word = new Word(category)
        console.log(chalk.green("Get Ready!!"))
        setInterval(() => {
            console.log(chalk.blue("Start!!!"))
            console.log(chalk.yellow("Hint: " + data.hint))
            this.guess()
        }, 1500)
    }

    guess() {
        inq.prompt(ps.guessWord)
            .then( ({word}) => {
                this.checking(word)
            })    
    }

    checking(word) {
        if(this.guessWord.indexOf(word) > 0) {
            
        } else {
            this.guess()
        }
    }

    scoring() {

    }

} 

module.exports = Hangman