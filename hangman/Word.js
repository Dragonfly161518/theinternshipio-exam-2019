const fs = require('fs')
const chalk = require('chalk')
const ps = require('./PromptSetting')
const inq = require('inquirer')

class Word {
    constructor(category) {
        fs.readFile("./" + category + ".txt", (err,data) => {
            if(err) {
                console.log(err)
                return
            }
        })
    }
    
    get getWord() {
        return this.word
    }

    static getCategory() {
        return ['A','B','C'];
    }
}
module.exports = Word