const IsogramFinder = function (word) {
  this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
  let usedLetters=[];
  let wordArray = this.word.toLowerCase().split('');
    return wordArray.every((letter) => {
      if (usedLetters.includes(letter)){ //if it doesn't have a repeating letter

        return false;
      }
      else {
        usedLetters.push(letter);
        return true
      }

    });
}

module.exports = IsogramFinder;
