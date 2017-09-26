function hangmanLite(word, letter) {
    
    if (word.includes(letter)) {
        var count = word.split(letter).length - 1;
        return count
    }
    else {
        var count = 0
        return count
    }
}
    module.exports = hangmanLite