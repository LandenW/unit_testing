function palindrome(word) {
   let sWord = word.split('')
   let rWord = sWord.reverse();

   rWord = rWord.join("");

    if (rWord === word) {
        return true
    }
    else {
        return false
    }
}
    module.exports = palindrome