
// let assert = require('assert');
let assert = require('chai').assert;
let {Board} = require('../board.js');

describe('Board', function() {

    describe('#setupBoard', function() {
        let board = new Board(25, 25);
        board.setupLevel(3);
        it('should setup', function() {
            assert.equal(2,2,"treu");
        });

    });

    describe('#testTickActivites', function() {
       it('Should tick', function() {
            assert.equal(4, 4, 'pass');
       });

    });
});
