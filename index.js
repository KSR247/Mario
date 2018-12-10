const Character = require("./classes/character");
const Player = require("./classes/player");

let mario = new Character("mario", "greet");;
let yoshi = new Character("yoshi", "eat");

let characterArr = [mario, yoshi];

let elliot = new Player("elliot", characterArr);
