const fs = require('fs')
const chalk = require('chalk')
const ps = require('./PromptSetting')
const inq = require('inquirer')

class Word {
    constructor(category) {
        let wordGame = fs.readFileSync("./"+ category + ".txt", "utf8")
        let line = wordGame.split("\r\n")
        let index = Math.floor(Math.random() * (line.length - 1))
        line = line[index].split(" ")
        this.word = line[0]
        let wordHint = [] 
        for(let i = 1;i < line.length;i++) {
            wordHint.push(line[i])
        }
        this.hint = wordHint.join(" ")
        this.guessWord = new Array(this.word.length)
        this.guessCorrectCount = 0
        this.init()
    }

    init() {
        for(let i = 0 ; i < this.word.length ; i++) {
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