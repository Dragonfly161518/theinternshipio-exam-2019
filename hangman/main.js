const inquirer = require('inquirer');
const wordManager = require('./wordManager');

inquirer
  .prompt(
    {
      type: 'list',
      name: 'category',
      message: 'Select Category',
      choices: wordManager.getCategory()
    })
  .then(({category}) => {
    console.log(wordManager.getWord(category));
  });
