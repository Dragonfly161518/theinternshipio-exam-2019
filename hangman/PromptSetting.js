const Word = require('./Word')
module.exports.selectCategory = {
    type: 'list',
    name: 'category',
    message: 'Select Category:',
    choices: Word.getCategory
}

module.exports.guessWord = {
    type: 'input',
    name: 'word',
    message: 'Guess some word!',
    validate: (word) => {
        return word.length === 1 && word.toUpperCase().charCodeAt(0) >= 65 && word.toUpperCase().charCodeAt(0) <= 90;
      }
}

