function containsVowel(word) {
    
    if (word.includes("a", "e", "i", "o", "u")) {
      return true;
    }
    else {
      return false;
    }
}
module.exports = containsVowel