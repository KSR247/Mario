const {expect} = require('chai');
const {Player} = require('../player.js');
const {Character} = require('../character.js');

describe('Player', () => {
  it('Player returns an object and a new instance', () => {
    const elliot = new Player('Elliot')
    expect(elliot).to.be.an('object')
    expect(elliot).to.be.an.instanceOf(Player)
  })
  it('Player object contains a method to store the characters', () => {
    const elliot = new Player('Elliot')
    const mario = new Character('Mario')
    elliot.pickCharacter(mario);
    expect(elliot._pick[0]).to.eql('mario');
  })
})

