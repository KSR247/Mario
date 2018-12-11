
const Character = require("./classes/character");
const Player = require("./classes/player");

// new Characters

let mario = new Character('mario', 'cape')
let marioMoves = ['Jump', 'Pipe-clean']
mario.pickMoves(marioMoves)


let yoshi = new Character('yoshi', 'fireball');
let yoshiMoves = ['dodge', 'kick']
yoshi.pickMoves(yoshiMoves);


// new players 
let elliot = new Player("Elliot");
elliot.pickCharacter(mario)


let kas = new Player('Kas', yoshi);
kas.pickCharacter(yoshi)

// console.log(elliot._pick[0]._moves)
// console.log(kas)
// console.log(kas._pick[0]._moves)
