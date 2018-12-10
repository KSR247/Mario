class Character {
  constructor(name, powerUp) {
    this._name = name;
    this._powerUp = powerUp;
    this._moves = [];
    this._hitPoints = 10;
    this._healthPoint = 100;
  }
  get name() {
    this._name;
  }
}

const Mario = new Character('Mario', 'Jump')
console.log(Mario)

module.exports = {Character};