class Player {
  constructor(name) {
    this._name = name;
    this._pick = ['Mario'];
    this._lives = 5;
  }
  pickCharacter() {
    return this._pick.push(character)
  }
}

const Elliot = new Player('Elliot')
console.log(Elliot)

// Each player has thir own name
// Each player is able to store their mario characters



module.exports = {Player};