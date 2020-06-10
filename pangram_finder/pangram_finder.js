const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase= phrase;
}

PangramFinder.prototype.isPangram = function (panagram) {
  let panagramArray = this.phrase.toLowerCase().split('');
  return this.alphabet.every((letter) => {
    return panagramArray.includes(letter);


  })
}

module.exports = PangramFinder;
