const {expect} = require('chai');
const Character = require('../character.js');


describe('Character', () => {
  it('Character returns an object and a new instance', () => {
    const mario = new Character('Mario', 'Jump')
    expect(mario).to.be.an('object')
    expect(mario).to.be.an.instanceOf(Character)
  })
})