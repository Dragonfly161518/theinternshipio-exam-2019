const fs = require('fs')
const chalk = require('chalk')
const ps = require('./PromptSetting')
const inq = require('inquirer')

class Word {
    constructor(category) {
        this.word = fs.readFileSync("./"+ category + ".txt")
        this.word = "moon"
        this.hint = "Shines light at night"
        this.guessWord = new Array(this.word.length)
        
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
        console.log(result.join(" "))
    }

    updateGuessWord(word) {
        let status = false
        if(this.word.indexOf(word) >= 0) {
            status = true
            for(let i = 0 ; i < this.word.length ; i++) {
                if(word == this.word[i]) {
                    this.guessWord[i] = word
                }
            }
        }
        this.guessProcess()
        return status
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