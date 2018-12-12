const Character = require("./classes/character");
const Player = require("./classes/player");

let mario = new Character("mario", "greet");;
let yoshi = new Character("yoshi", "eat");

let characterArr = [mario, yoshi];

let elliot = new Player("elliot", characterArr);

const moveOne = document.querySelector('.move1');
const moveTwo = document.querySelector('.move2');
const moveThree = document.querySelector('.move3');
const moveFour = document.querySelector('.move4');

let turn = true;
let playerOneHealth = 0;
let playerTwoHealth = 0;
let playerDamage;
let character;

let health1 = document.querySelector('.healthBarOne');
let health2 = document.querySelector('.healthBarTwo');

function attackDamage(min, max) {
  return Math.floor(Math.random() * (max-min) + min)
}

moveOne.addEventListener("click", attackOne = () => {
  let playerDamage = attackDamage(10, 15);
    if (turn) {
      playerTwoHealth += playerDamage;
      health2.style.width = (playerTwoHealth + '%');
    } else if (turn === false) {
      playerOneHealth += playerDamage;
      health1.style.width = playerOneHealth; 
    }
  });





// module.exports = battle;
