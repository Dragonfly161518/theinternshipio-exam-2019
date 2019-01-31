const fs = require('fs')
const chalk = require('chalk')
const ps = require('./PromptSetting')
const inq = require('inquirer')

class Word {
    constructor(category) {
        this.word = fs.readFileSync("./"+ category + ".txt")
        this.word = "moon312421!!!"
        this.hint = "Shines light at night"
        this.guessWord = new Array(this.word.length)
        this.guessCorrectCount = 0
        this.init()
    }

    init() {
        for(let i = 0 ; i < this.word.length ; i++) {
            console.log(this.word.charCodeAt(i))
            if(this.word.charCodeAt(i) < 97 || this.word.charCodeAt(i) > 122) {
                this.guessWord[i] = this.word[i];
                this.guessCorrectCount++
            }
        }
    }
    
    guessProcess() {
        let result = []
        for(let i = 0 ; i < this.word.length ; i++) {
            if(this.guessWord[i] !== undefined) {
                result.push(this.guessWord[i])
            } else {
                result.push("[]")
            }
        }
        console.log(chalk.blue("Current Word is: " + result.join(" ")))
    }

    updateGuessWord(word) {
        let status = false
        if(this.word.indexOf(word) >= 0) {
            status = true
            for(let i = 0 ; i < this.word.length ; i++) {
                if(word == this.word[i]) {
                    this.guessCorrectCount++
                    this.guessWord[i] = word
                }
            }
        }
        return status
    }

    isWin() {
        return this.guessCorrectCount == this.word.length
    }


    get getWord() {
        return this.word
    }

    get getHint() {
        return this.hint
    }

    static getCategory() {
        return ['Animal','Occupation','Halloween'];
    }
}
module.exports = Word