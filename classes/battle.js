let turn = true;
let playerOneHealth = 100;
let playerTwoHealth = 100;
let character; 


let randomNumber = Math.floor(Math.random());

if (randomNumber > 0.5 && turn === true) {
    playerOneHealth += 10; 
    turn === false;
} else if (randomNumber > 0.5 && turn === false) {
    playerTwoHealth += 10;
    turn === true;
}

module.exports = battle;