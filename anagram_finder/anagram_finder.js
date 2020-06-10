const AnagramFinder = function (word) {
  this.word=word
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  let anagrams =[]
  let wordArray = this.word.toLowerCase().split('').sort();
  let resultMap = otherWords.forEach((word)=>{
    let lettersInWord = word.toLowerCase().split('').sort();
    if (wordArray.join('')==lettersInWord.join('') && this.word !== word){
      anagrams.push(word);
    }
  });
  return anagrams
}

module.exports = AnagramFinder;
