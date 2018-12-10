let turn;
let playerOneHealth = 100;
let playerTwoHealth = 100;
let character;

const moveOne = document.getElementsByClassName("move1");
const moveTwo = document.getElementsByClassName("move2");
const moveThree = document.getElementsByClassName("move3");
const moveFour = document.getElementsByClassName("move4");

function randomNumber() {
  return Math.floor(Math.random() * 10);

  if (randomNumber() > 7 && turn === true) {
    playerOneHealth += 10;
    turn === false;
  } else if (randomNumber() > 7 && turn === false) {
    playerTwoHealth += 10;
    turn === true;
  }
}

module.exports = battle;
