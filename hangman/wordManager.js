let category = ['a','b','c'];

wordList = [
            [{word:'Animal',hint:'Life'},{word:'Absolutely',hint:'NONE'},{word:'Accessory',hint:'Option'}],
            ['Bird','Blue']
        ];

module.exports.getCategory = () => {
    return category;
}



module.exports.getWord = cat => {
    if(cat == null) return;
    cat = category.indexOf(cat);
    if(cat >= 0 && cat <  category.length) {
        sizeOfWord = wordList[cat].length;
        randomWord = getRandomWord(wordList[cat],sizeOfWord);
        return randomWord
    }
}

getRandomWord = (words,size) => {
    index =Math.floor(Math.random() * size);
    return words[index];
}