const fs = require('fs')
const chalk = require('chalk')
class Word {
    constructor(category) {
        this.guessWord = []
        this.correctWord = []
        fs.readFile("./" + category + ".txt", (err,data) => {
            if(err) {
                console.log(err)
                return
            }
            // this.word = data
            data = {
                hint: "test",
                word: "tast"
            }
            console.log(chalk.green("Get Ready!!"))
            setInterval(() => {
                console.log(chalk.blue("Start!!!"))
                console.log(chalk.yellow("Hint: " + data.hint))
                this.guess()
            }, 1500)
        })
    }

    guess() {

    }

    
    
    
    get getWord() {
        return this.word
    }

    static getCategory() {
        return ['A','B','C'];
    }
}
module.exports = Word