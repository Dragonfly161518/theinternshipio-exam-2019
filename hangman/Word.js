const fs = require('fs')
const chalk = require('chalk')
const ps = require('./PromptSetting')
const inq = require('inquirer')

class Word {
    constructor(category) {
        this.word = fs.readFileSync("./"+ category + ".txt")
        this.word = "Moon"
        this.hint = "Shines light at night"
    }
    
    get getWord() {
        return this.word
    }

    get getHint() {
        return this.hint
    }

    static getCategory() {
        return ['A','B','C'];
    }
}
module.exports = Word