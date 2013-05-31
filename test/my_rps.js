var RPS = require('../app/main.js').RPS;
var chai = require('chai');
var expect = chai.expect;

describe("RobsPlayer", function() {
  beforeEach(function(){ myPlayer = new RPS.Player.RobsPlayer(); });

  describe("Constructor", function() {
    it('should set its name properly', function() {
      expect(myPlayer.NAME).to.equal("Rob's Player");
    });
  });

  describe(".throwMove()", function() {
    it('1st move should be SCISSORS', function() {
      expect(myPlayer.throwMove()).to.equal(RPS.Moves.SCISSORS);
    });

    it('should throw PAPER if the last two moves were SCISSORS', function() {
      myPlayer.addResult(0, RPS.Moves.SCISSORS);
      myPlayer.addResult(0, RPS.Moves.SCISSORS);
      expect(myPlayer.throwMove()).to.equal(RPS.Moves.PAPER);
    });

    it('should throw SCISSORS if the last two moves were ROCK', function() {
      myPlayer.addResult(0, RPS.Moves.ROCK);
      myPlayer.addResult(0, RPS.Moves.ROCK);
      expect(myPlayer.throwMove()).to.equal(RPS.Moves.SCISSORS);
    });

    it('should throw ROCK if the last two moves were PAPER', function() {
      myPlayer.addResult(0, RPS.Moves.PAPER);
      myPlayer.addResult(0, RPS.Moves.PAPER);
      expect(myPlayer.throwMove()).to.equal(RPS.Moves.ROCK);
    });

    it('should throw ROCK if the opponent lost last with PAPER', function() {
      myPlayer.addResult(1, RPS.Moves.PAPER);
      expect(myPlayer.throwMove()).to.equal(RPS.Moves.ROCK);
    });

    it('should throw SCISSORS if the opponent lost last with ROCK', function() {
      myPlayer.addResult(1, RPS.Moves.ROCK);
      expect(myPlayer.throwMove()).to.equal(RPS.Moves.SCISSORS);
    });

    it('should throw PAPER if the opponent lost last with SCISSORS', function() {
      myPlayer.addResult(1, RPS.Moves.SCISSORS);
      expect(myPlayer.throwMove()).to.equal(RPS.Moves.PAPER);
    });
  });

  describe(".addResult(result, opponentMove)", function(){
    it('should only set the last two moves of the opponent', function() {
      myPlayer.addResult(0, RPS.Moves.SCISSORS);
      myPlayer.addResult(1, RPS.Moves.PAPER);
      myPlayer.addResult(0, RPS.Moves.ROCK);
      expect(JSON.stringify(myPlayer.lastMoves)).to.equal(JSON.stringify([RPS.Moves.ROCK, RPS.Moves.PAPER]));
    });

    it('should record whether it won or lost the last round', function() {
      myPlayer.addResult(1, RPS.Moves.ROCK);
      expect(myPlayer.won).to.equal(1);
      myPlayer.addResult(0, RPS.Moves.ROCK);
      expect(myPlayer.won).to.equal(0);
      myPlayer.addResult(-1, RPS.Moves.ROCK);
      expect(myPlayer.won).to.equal(-1);
    });
  });
});
