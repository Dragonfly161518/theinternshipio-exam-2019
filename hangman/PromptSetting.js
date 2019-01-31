const Word = require('./Word')
module.exports.selectCategory = {
    type: 'list',
    name: 'category',
    message: 'Select Category:',
    choices: Word.getCategory
} 

