const ps = require('./PromptSetting')
const inquirer = require('inquirer')
const Game = require('./Game')
const fs = require('fs')

;( async () => {
    const {category} = await inquirer.prompt(ps.selectCategory)
    new Game(category)
})()