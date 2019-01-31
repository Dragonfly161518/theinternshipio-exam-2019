const inq = require('inquirer')
const Word = require('./Word')
const color = 'red'

module.exports = color

class Hangman {

    constructor(category) {
        this.category = category
        this.word = new Word(category)
    }



} 

module.exports = Hangman